import React, { useState, useRef } from 'react';
import {
  ExamPaper,
  ExamPattern,
  StudentAttempt,
  MistakeEntry,
  ScheduledTest,
  DailyRoutineItem,
  TaggedQuestionEntry,
  QuestionTag,
  Question,
} from '../types/exam';
import { SAMPLE_JEE_MAIN_MOCK, SAMPLE_JEE_ADVANCED_MOCK } from '../data/samplePapers';
import { MistakeNotebook } from './MistakeNotebook';
import { SchedulePlanner } from './SchedulePlanner';
import { DailyRoutineDesk } from './DailyRoutineDesk';
import { ModulePracticeSection } from './ModulePracticeSection';
import { AIMentorSchedulerChat } from './AIMentorSchedulerChat';
import { RaceQuestionBank } from './RaceQuestionBank';
import {
  UploadCloud,
  FileText,
  Play,
  Clock,
  Sparkles,
  AlertCircle,
  History,
  Cpu,
  BookOpen,
  Calendar,
  Sun,
  Moon,
  Plus,
  FileCheck,
  Zap,
  Flame,
  Bot,
  Layers,
  Award,
} from 'lucide-react';

interface TestHubProps {
  onSelectExam: (paper: ExamPaper) => void;
  onViewAttempt: (attempt: StudentAttempt, paper: ExamPaper) => void;
  savedAttempts: StudentAttempt[];
  savedCustomPapers: ExamPaper[];
  onSaveCustomPaper: (paper: ExamPaper) => void;
  mistakes: MistakeEntry[];
  onRemoveMistake: (id: string) => void;
  onUpdateMistakeReason: (id: string, reason: any, notes?: string) => void;
  onPracticeSimilar: (entry: MistakeEntry) => void;
  scheduledTests: ScheduledTest[];
  onToggleTopic: (testId: string, topicId: string) => void;
  onEnterLiveTest: (test: ScheduledTest) => void;
  onAttachPaper: (testId: string, paper: ExamPaper) => void;
  onAddCustomSchedule: (newTests: ScheduledTest[]) => void;
  onDeleteScheduledTest: (testId: string) => void;
  routineItems: DailyRoutineItem[];
  onStartRoutineTask: (item: DailyRoutineItem) => void;
  onToggleRoutineComplete: (itemId: string) => void;
  onAddCustomRoutine: (items: DailyRoutineItem[]) => void;
  onDeleteRoutineItem: (itemId: string) => void;
  taggedRaceQuestions?: TaggedQuestionEntry[];
  onRemoveTaggedQuestion?: (id: string) => void;
  onUpdateQuestionTags?: (id: string, tags: QuestionTag[]) => void;
  onToggleTagOnQuestion?: (question: Question, tag: QuestionTag) => void;
}

export const TestHub: React.FC<TestHubProps> = ({
  onSelectExam,
  onViewAttempt,
  savedAttempts,
  savedCustomPapers,
  onSaveCustomPaper,
  mistakes,
  onRemoveMistake,
  onUpdateMistakeReason,
  onPracticeSimilar,
  scheduledTests,
  onToggleTopic,
  onEnterLiveTest,
  onAttachPaper,
  onAddCustomSchedule,
  onDeleteScheduledTest,
  routineItems = [],
  onStartRoutineTask = () => {},
  onToggleRoutineComplete = () => {},
  onAddCustomRoutine = () => {},
  onDeleteRoutineItem = () => {},
  taggedRaceQuestions = [],
  onRemoveTaggedQuestion = () => {},
  onUpdateQuestionTags = () => {},
  onToggleTagOnQuestion = () => {},
}) => {
  const [activeTab, setActiveTab] = useState<
    'ROUTINE' | 'MODULES' | 'RACE' | 'SCHEDULE' | 'MENTOR' | 'TESTS' | 'MISTAKES'
  >('ROUTINE');
  const [mentorInitialPrompt, setMentorInitialPrompt] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  // Upload state
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [selectedPattern, setSelectedPattern] = useState<ExamPattern>('JEE_MAIN');
  const [customTitle, setCustomTitle] = useState('');

  // Dual file refs & states
  const [questionFile, setQuestionFile] = useState<File | null>(null);
  const [solutionFile, setSolutionFile] = useState<File | null>(null);
  const qFileInputRef = useRef<HTMLInputElement | null>(null);
  const solFileInputRef = useRef<HTMLInputElement | null>(null);

  // Convert files
  const handleStartConversion = async () => {
    if (!questionFile) {
      setErrorMsg('Please select a Question Paper or Module Exercise PDF first');
      return;
    }

    setIsUploading(true);
    setErrorMsg('');
    setUploadProgress('Reading Question / Module PDF...');

    try {
      const readBase64 = (file: File): Promise<string> =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

      const fileBase64 = await readBase64(questionFile);
      let solutionFileBase64 = '';
      if (solutionFile) {
        setUploadProgress('Reading Solution / Answer Key PDF...');
        solutionFileBase64 = await readBase64(solutionFile);
      }

      setUploadProgress('Uploading to Gemini AI Vision engine...');

      const examTitle =
        customTitle.trim() ||
        questionFile.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ') ||
        'Custom Module Practice Sprint';

      setUploadProgress(
        solutionFile
          ? 'Gemini is cross-referencing Question Paper & Solutions with LaTeX...'
          : 'Gemini is extracting questions, formulas, diagrams, & sections...'
      );

      const response = await fetch('/api/parse-exam-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fileBase64,
          solutionFileBase64: solutionFileBase64 || undefined,
          mimeType: questionFile.type || 'application/pdf',
          examTitle,
          pattern: selectedPattern,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server status ${response.status}`);
      }

      setUploadProgress('Compiling CBT room with verified answers & formulas...');
      const data = await response.json();

      if (!data.success || !data.examPaper) {
        throw new Error(data.error || 'Failed to parse exam questions');
      }

      const generatedPaper: ExamPaper = {
        id: `custom-paper-${Date.now()}`,
        title: data.examPaper.title || examTitle,
        pattern: (data.examPaper.pattern as ExamPattern) || selectedPattern,
        durationMinutes: data.examPaper.durationMinutes || 180,
        totalMarks:
          data.examPaper.totalMarks ||
          (selectedPattern === 'JEE_MAIN' ? 300 : 180),
        sections: data.examPaper.sections || [],
        createdAt: new Date().toISOString(),
      };

      onSaveCustomPaper(generatedPaper);
      onSelectExam(generatedPaper);
    } catch (err: any) {
      console.error('Error during PDF conversion:', err);
      setErrorMsg(
        err.message ||
          'Failed to convert PDF. Ensure your Gemini API Key is configured.'
      );
    } finally {
      setIsUploading(false);
      setUploadProgress('');
    }
  };

  const allAvailablePapers = [
    SAMPLE_JEE_MAIN_MOCK,
    SAMPLE_JEE_ADVANCED_MOCK,
    ...savedCustomPapers,
  ];

  return (
    <div
      className={`min-h-screen p-4 md:p-8 transition-colors ${
        isDarkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
      }`}
    >
      <div className="max-w-6xl mx-auto space-y-7">
        {/* Hub Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
              <Cpu className="w-4 h-4" />
              NTA & MathonGo Live Coaching Suite
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mt-1">
              JEE Test & Module Practice Hub
            </h1>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Daily live module practice sprints, 3–6 month coaching test roadmap, and targeted Mistake Notebook.
            </p>
          </div>

          {/* Right Tools: Day/Night */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Toggle Day/Night Mode"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
              <span>{isDarkMode ? 'Day' : 'Night'}</span>
            </button>
          </div>
        </div>

        {/* 7 Primary Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-1 overflow-x-auto">
          <button
            onClick={() => setActiveTab('ROUTINE')}
            className={`px-3 py-2.5 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'ROUTINE'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Zap className="w-4 h-4 fill-current text-amber-400" />
            Today's Live Desk
          </button>

          <button
            onClick={() => setActiveTab('MODULES')}
            className={`px-3 py-2.5 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'MODULES'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4 text-emerald-400" />
            Module Practice Sessions
          </button>

          <button
            onClick={() => setActiveTab('RACE')}
            className={`px-3 py-2.5 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 relative ${
              activeTab === 'RACE'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Award className="w-4 h-4 text-purple-300" />
            Allen RACE & Doubt Bank
            {taggedRaceQuestions.length > 0 && (
              <span className="w-5 h-5 rounded-full bg-purple-500 text-white text-[10px] font-mono flex items-center justify-center font-bold">
                {taggedRaceQuestions.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('SCHEDULE')}
            className={`px-3 py-2.5 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'SCHEDULE'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Calendar className="w-4 h-4" />
            3–6M Test Series Roadmap
            {scheduledTests.some((t) => t.status === 'LIVE_NOW') && (
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('MENTOR')}
            className={`px-3 py-2.5 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'MENTOR'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Bot className="w-4 h-4 text-indigo-400" />
            AI Academic Mentor
          </button>

          <button
            onClick={() => setActiveTab('TESTS')}
            className={`px-3 py-2.5 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'TESTS'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            Mock Papers & PDF Ingest
          </button>

          <button
            onClick={() => setActiveTab('MISTAKES')}
            className={`px-3 py-2.5 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 relative ${
              activeTab === 'MISTAKES'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Mistake Notebook
            {mistakes.length > 0 && (
              <span className="w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-mono flex items-center justify-center">
                {mistakes.length}
              </span>
            )}
          </button>
        </div>

        {/* TAB 1: TODAY'S LIVE DESK & MASTER COACHING ROUTINE */}
        {activeTab === 'ROUTINE' && (
          <DailyRoutineDesk
            routineItems={routineItems}
            onStartRoutineTask={onStartRoutineTask}
            onToggleRoutineComplete={onToggleRoutineComplete}
            onAddCustomRoutine={onAddCustomRoutine}
            onDeleteRoutineItem={onDeleteRoutineItem}
          />
        )}

        {/* TAB 2: DEDICATED MODULE PRACTICE SESSIONS */}
        {activeTab === 'MODULES' && (
          <ModulePracticeSection
            onStartExam={onSelectExam}
            onAddCustomPaper={onSaveCustomPaper}
            onAddRoutineItems={onAddCustomRoutine}
            savedCustomPapers={savedCustomPapers}
          />
        )}

        {/* TAB 3: ALLEN RACE & DOUBT QUESTION BANK */}
        {activeTab === 'RACE' && (
          <RaceQuestionBank
            taggedQuestions={taggedRaceQuestions}
            onStartExam={onSelectExam}
            onRemoveTaggedQuestion={onRemoveTaggedQuestion}
            onUpdateTags={onUpdateQuestionTags}
            onScheduleRaceSession={(item) => onAddCustomRoutine([item])}
            onOpenAIMentorWithPrompt={(prompt) => {
              setMentorInitialPrompt(prompt);
              setActiveTab('MENTOR');
            }}
          />
        )}

        {/* TAB 4: LIVE TEST SCHEDULE & SYLLABUS ROADMAP (3-6 MONTHS) */}
        {activeTab === 'SCHEDULE' && (
          <SchedulePlanner
            scheduledTests={scheduledTests}
            onToggleTopic={onToggleTopic}
            onEnterLiveTest={onEnterLiveTest}
            onAttachPaper={onAttachPaper}
            onAddCustomSchedule={onAddCustomSchedule}
            onDeleteTest={onDeleteScheduledTest}
            onSelectExamDirectly={onSelectExam}
          />
        )}

        {/* TAB 5: AI ACADEMIC MENTOR & CONVERSATIONAL SCHEDULER */}
        {activeTab === 'MENTOR' && (
          <AIMentorSchedulerChat
            onApplyRoutine={onAddCustomRoutine}
            currentRoutineItems={routineItems}
            initialPrompt={mentorInitialPrompt}
          />
        )}

        {/* TAB 3: MOCK TESTS & MODULE PDF UPLOADER */}
        {activeTab === 'TESTS' && (
          <div className="space-y-8">
            {/* DUAL PDF UPLOAD CARD */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-700">
                <div>
                  <h2 className="text-base md:text-lg font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-500" />
                    Convert Question PDF / Coaching Module into Timed CBT
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Upload Allen modules (Exercise 1/2) or Test Papers to automatically build a timed computer-based practice room.
                  </p>
                </div>

                {/* Pattern selector */}
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-slate-500 font-medium">Format:</span>
                  <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs font-semibold">
                    <button
                      onClick={() => setSelectedPattern('JEE_MAIN')}
                      className={`px-3 py-1.5 rounded-md transition-colors ${
                        selectedPattern === 'JEE_MAIN'
                          ? 'bg-white dark:bg-slate-600 text-indigo-600 dark:text-white shadow-xs'
                          : 'text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      JEE Main
                    </button>
                    <button
                      onClick={() => setSelectedPattern('JEE_ADVANCED')}
                      className={`px-3 py-1.5 rounded-md transition-colors ${
                        selectedPattern === 'JEE_ADVANCED'
                          ? 'bg-white dark:bg-slate-600 text-indigo-600 dark:text-white shadow-xs'
                          : 'text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      JEE Advanced
                    </button>
                  </div>
                </div>
              </div>

              {/* Title input */}
              <div className="max-w-md">
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                  Session Title (Optional):
                </label>
                <input
                  type="text"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  placeholder="e.g. Kinematics Module Exercise 1 / Allen Test 05"
                  className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Dual File Picker Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Question Paper / Module PDF Picker */}
                <div
                  onClick={() => qFileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                    questionFile
                      ? 'border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/20'
                      : 'border-slate-300 dark:border-slate-600 hover:border-indigo-500 hover:bg-slate-50 dark:hover:bg-slate-750'
                  }`}
                >
                  <input
                    ref={qFileInputRef}
                    type="file"
                    accept=".pdf,image/png,image/jpeg"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setQuestionFile(e.target.files[0]);
                      }
                    }}
                    className="hidden"
                  />
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto">
                      {questionFile ? (
                        <FileCheck className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <UploadCloud className="w-5 h-5" />
                      )}
                    </div>
                    <div className="font-semibold text-xs text-slate-900 dark:text-white">
                      {questionFile
                        ? questionFile.name
                        : 'Select Module / Question Paper PDF (Required)'}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {questionFile
                        ? `${(questionFile.size / (1024 * 1024)).toFixed(1)} MB • Click to replace`
                        : 'Physics, Chem & Math questions or exercises'}
                    </div>
                  </div>
                </div>

                {/* 2. Optional Solution / Answer Key PDF Picker */}
                <div
                  onClick={() => solFileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                    solutionFile
                      ? 'border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/20'
                      : 'border-slate-300 dark:border-slate-600 hover:border-indigo-500 hover:bg-slate-50 dark:hover:bg-slate-750'
                  }`}
                >
                  <input
                    ref={solFileInputRef}
                    type="file"
                    accept=".pdf,image/png,image/jpeg"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setSolutionFile(e.target.files[0]);
                      }
                    }}
                    className="hidden"
                  />
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center mx-auto">
                      {solutionFile ? (
                        <FileCheck className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                    <div className="font-semibold text-xs text-slate-900 dark:text-white">
                      {solutionFile
                        ? solutionFile.name
                        : 'Attach Answer Key / Solution PDF (Optional)'}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {solutionFile
                        ? `${(solutionFile.size / (1024 * 1024)).toFixed(1)} MB • Click to replace`
                        : 'Auto-syncs verified answer keys & solutions'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Start Conversion Trigger */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <div className="text-xs text-slate-500">
                  {questionFile ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                      ✓ Ready to build CBT session with Gemini Vision
                    </span>
                  ) : (
                    <span>Select your PDF to begin</span>
                  )}
                </div>

                <button
                  onClick={handleStartConversion}
                  disabled={!questionFile || isUploading}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-xl shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  {isUploading ? 'Converting Paper...' : 'Convert & Launch CBT Room'}
                </button>
              </div>

              {isUploading && (
                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-900/50 flex items-center gap-3 text-xs text-indigo-900 dark:text-indigo-200">
                  <div className="w-5 h-5 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin shrink-0" />
                  <span className="font-mono">{uploadProgress}</span>
                </div>
              )}

              {errorMsg && (
                <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 text-xs text-rose-700 dark:text-rose-300 flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}
            </div>

            {/* PRE-LOADED MOCKS */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base md:text-lg font-bold font-display text-slate-900 dark:text-white">
                  Available Mock Tests
                </h2>
                <span className="text-xs text-slate-500">
                  {allAvailablePapers.length} tests ready
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allAvailablePapers.map((paper) => {
                  const questionCount = paper.sections.reduce(
                    (sum, s) => sum + s.questions.length,
                    0
                  );

                  return (
                    <div
                      key={paper.id}
                      className="bg-white dark:bg-slate-800 rounded-xl p-5 md:p-6 border border-slate-200 dark:border-slate-700 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] md:text-[11px] font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 uppercase">
                            {paper.pattern.replace('_', ' ')}
                          </span>
                          <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                            <Clock className="w-3.5 h-3.5" />
                            {paper.durationMinutes} Mins
                          </span>
                        </div>

                        <h3 className="font-bold text-sm md:text-base text-slate-900 dark:text-white leading-snug">
                          {paper.title}
                        </h3>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {paper.sections.map((sec) => (
                            <span
                              key={sec.id}
                              className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                            >
                              {sec.name} ({sec.questions.length}Q)
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                        <div className="text-xs text-slate-500">
                          {paper.totalMarks} Marks • {questionCount} Qs
                        </div>

                        <button
                          onClick={() => onSelectExam(paper)}
                          className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-lg shadow-xs transition-all flex items-center gap-1.5"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          Take Test
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* TEST HISTORY */}
            {savedAttempts.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <h2 className="text-base md:text-lg font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                  <History className="w-4 h-4 text-slate-500" />
                  Your Past Test Attempts
                </h2>

                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-100 dark:bg-slate-700/60 font-semibold text-slate-600 dark:text-slate-300">
                        <tr>
                          <th className="p-3">Test Name</th>
                          <th className="p-3">Date</th>
                          <th className="p-3">Score</th>
                          <th className="p-3 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-700 font-mono">
                        {savedAttempts.map((att) => {
                          const matchedPaper = allAvailablePapers.find(
                            (p) => p.id === att.examId
                          );

                          return (
                            <tr
                              key={att.id}
                              className="hover:bg-slate-50 dark:hover:bg-slate-750"
                            >
                              <td className="p-3 font-sans font-medium text-slate-900 dark:text-white">
                                {att.examTitle}
                              </td>
                              <td className="p-3 text-slate-500">
                                {new Date(att.submittedAt).toLocaleDateString()}
                              </td>
                              <td className="p-3 text-emerald-600 font-bold">
                                Completed
                              </td>
                              <td className="p-3 text-right">
                                <button
                                  onClick={() => {
                                    if (matchedPaper) {
                                      onViewAttempt(att, matchedPaper);
                                    }
                                  }}
                                  className="px-3 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 rounded transition-colors"
                                >
                                  View Analysis
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: MISTAKE NOTEBOOK (ERROR BOOK) */}
        {activeTab === 'MISTAKES' && (
          <MistakeNotebook
            mistakes={mistakes}
            onRemoveMistake={onRemoveMistake}
            onUpdateMistakeReason={onUpdateMistakeReason}
            onPracticeSimilar={onPracticeSimilar}
          />
        )}
      </div>
    </div>
  );
};
