import React, { useState, useRef, useEffect } from 'react';
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
import { MathRenderer } from './MathRenderer';
import {
  UploadCloud,
  FileText,
  Play,
  Clock,
  Sparkles,
  AlertCircle,
  History,
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
  CheckCircle2,
  Sliders,
  ChevronRight,
  Eye,
  RotateCcw,
  ChevronDown,
  ChevronUp,
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

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Upload & Advanced AI Extraction State
  const [isUploading, setIsUploading] = useState(false);
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [uploadProgress, setUploadProgress] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [selectedPattern, setSelectedPattern] = useState<ExamPattern>('JEE_MAIN');
  const [customTitle, setCustomTitle] = useState('');
  const [userCommand, setUserCommand] = useState<string>('');
  const [customDuration, setCustomDuration] = useState<number>(180);
  const [extractedPaperResult, setExtractedPaperResult] = useState<ExamPaper | null>(null);
  const [showPreviewQuestions, setShowPreviewQuestions] = useState<boolean>(false);

  // Dual file refs & states
  const [questionFile, setQuestionFile] = useState<File | null>(null);
  const [solutionFile, setSolutionFile] = useState<File | null>(null);
  const qFileInputRef = useRef<HTMLInputElement | null>(null);
  const solFileInputRef = useRef<HTMLInputElement | null>(null);

  // Convert files using Advanced Gemini 3.8 Flash Vision Engine
  const handleStartConversion = async () => {
    if (!questionFile) {
      setErrorMsg('Please select a Question Paper or Module Exercise PDF first');
      return;
    }

    setIsUploading(true);
    setErrorMsg('');
    setExtractedPaperResult(null);
    setActiveStageIndex(0);
    setUploadProgress('Reading & encoding PDF documents with OCR pre-processor...');

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

      setActiveStageIndex(1);
      setUploadProgress(
        solutionFile
          ? 'Gemini 3.8 Flash Vision is cross-referencing Question Paper & Solutions with LaTeX...'
          : 'Gemini 3.8 Flash Vision is deep-scanning all questions, diagrams, and formulas...'
      );

      const examTitle =
        customTitle.trim() ||
        questionFile.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ') ||
        'Custom Module Practice Sprint';

      const response = await fetch('/api/parse-exam-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fileBase64,
          solutionFileBase64: solutionFileBase64 || undefined,
          mimeType: questionFile.type || 'application/pdf',
          examTitle,
          pattern: selectedPattern,
          userCommand: userCommand.trim() || undefined,
          customDurationMinutes: customDuration,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server status ${response.status}`);
      }

      setActiveStageIndex(2);
      setUploadProgress('Matching answer keys and formatting LaTeX equations & diagrams...');
      const data = await response.json();

      if (!data.success || !data.examPaper) {
        throw new Error(data.error || 'Failed to parse exam questions');
      }

      setActiveStageIndex(3);
      setUploadProgress('Assembling CBT examination palette & verified solutions...');

      const generatedPaper: ExamPaper = {
        id: `custom-paper-${Date.now()}`,
        title: data.examPaper.title || examTitle,
        pattern: (data.examPaper.pattern as ExamPattern) || selectedPattern,
        durationMinutes: data.examPaper.durationMinutes || customDuration || 180,
        totalMarks:
          data.examPaper.totalMarks ||
          (selectedPattern === 'JEE_MAIN' ? 300 : 180),
        sections: data.examPaper.sections || [],
        createdAt: new Date().toISOString(),
      };

      onSaveCustomPaper(generatedPaper);
      setExtractedPaperResult(generatedPaper);
    } catch (err: any) {
      console.error('Error during PDF conversion:', err);
      setErrorMsg(
        err.message ||
          'Failed to convert PDF. Ensure your Gemini API Key is configured in settings or environment.'
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
      <div className="max-w-6xl mx-auto space-y-5">
        {/* inspiro LIVE Brand App Corner Header */}
        <header className="border-b border-slate-200/90 dark:border-slate-800/80 pb-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-baseline gap-2">
              <span className="text-xl md:text-2xl font-black tracking-tight font-display text-slate-900 dark:text-white select-none">
                inspiro
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-wider bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/30 shadow-2xs select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                LIVE
              </span>
            </div>
            <div className="hidden sm:block h-3.5 w-px bg-slate-300 dark:bg-slate-700" />
            <span className="hidden sm:inline text-xs font-medium text-slate-500 dark:text-slate-400">
              JEE Practice & CBT Test Hub
            </span>
          </div>

          {/* Right Tools: Day/Night */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 text-xs font-semibold shadow-2xs"
              title="Toggle Day/Night Mode"
            >
              {isDarkMode ? (
                <Sun className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-slate-600" />
              )}
              <span>{isDarkMode ? 'Day' : 'Night'}</span>
            </button>
          </div>
        </header>

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

              {/* Title & Duration Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Session Title (Optional):
                  </label>
                  <input
                    type="text"
                    value={customTitle}
                    onChange={(e) => setCustomTitle(e.target.value)}
                    placeholder="e.g. Kinematics Module Ex 1 / Allen Leader Test 05"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Test Duration:
                  </label>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {[30, 45, 60, 90, 180].map((mins) => (
                      <button
                        key={mins}
                        type="button"
                        onClick={() => setCustomDuration(mins)}
                        className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                          customDuration === mins
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                            : 'border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-750 text-slate-600 dark:text-slate-300 hover:border-indigo-400'
                        }`}
                      >
                        {mins === 180 ? '3 Hours (NTA Mock)' : `${mins} Mins`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Advanced AI Director Command & Custom Instructions Console */}
              <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/70 via-slate-50 to-purple-50/50 dark:from-indigo-950/30 dark:via-slate-850 dark:to-purple-950/20 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        Advanced AI Director Command Console
                        <span className="text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                          Gemini 3.8 Flash Vision
                        </span>
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Give any specific instruction to the AI
                  </span>
                </div>

                <div className="space-y-2">
                  <textarea
                    rows={2}
                    value={userCommand}
                    onChange={(e) => setUserCommand(e.target.value)}
                    placeholder='Type any custom directive, e.g.: "Extract all 30 questions without skipping. The answer key is in the table on the last page. Format all equations in LaTeX and provide step-by-step solutions."'
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-indigo-200/80 dark:border-indigo-900/50 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 shadow-inner"
                  />

                  {/* 1-Click Command Preset Chips */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Quick Commands:
                    </span>
                    {[
                      {
                        label: '⚡ Extract ALL Questions',
                        cmd: 'Extract every single question found in this document from start to finish without skipping or stopping early.',
                      },
                      {
                        label: '🎯 Auto-Detect Answer Key & Solutions',
                        cmd: 'Cross-reference the answer key table in the paper or solutions file, and synthesize step-by-step masterclass solutions for all questions.',
                      },
                      {
                        label: '⏱️ 45-Min Module Practice Sprint',
                        cmd: 'Configure this as a 45-minute high-speed module practice sprint with 25 questions and +4/-1 marking scheme.',
                      },
                      {
                        label: '🔢 Numerical Section B with Working',
                        cmd: 'Ensure all non-MCQ numerical integer/decimal questions in Section B are extracted with exact calculation steps.',
                      },
                      {
                        label: '📚 Group Physics, Chemistry & Maths',
                        cmd: 'Organize extracted questions into separate Physics, Chemistry, and Mathematics sections sequentially.',
                      },
                    ].map((preset, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() =>
                          setUserCommand((prev) =>
                            prev ? `${prev}\n${preset.cmd}` : preset.cmd
                          )
                        }
                        className="text-[10px] font-semibold px-2 py-1 rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all active:scale-95 shadow-2xs"
                      >
                        {preset.label}
                      </button>
                    ))}
                    {userCommand && (
                      <button
                        type="button"
                        onClick={() => setUserCommand('')}
                        className="text-[10px] text-rose-500 hover:underline px-1"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>
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
                    <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto shadow-xs">
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
                        : 'Physics, Chem & Math questions or chapter exercises'}
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
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center mx-auto shadow-xs">
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
                        : 'If omitted, Gemini 3.8 Flash solves questions automatically'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Start Conversion Trigger */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <div className="text-xs text-slate-500">
                  {questionFile ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      Ready to execute with Gemini 3.8 Flash Vision Engine
                    </span>
                  ) : (
                    <span>Select your PDF file above to begin</span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {(questionFile || solutionFile) && (
                    <button
                      type="button"
                      onClick={() => {
                        setQuestionFile(null);
                        setSolutionFile(null);
                        setExtractedPaperResult(null);
                      }}
                      className="px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-750 rounded-xl transition-all"
                    >
                      Reset
                    </button>
                  )}
                  <button
                    onClick={handleStartConversion}
                    disabled={!questionFile || isUploading}
                    className="px-6 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-xl shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                    {isUploading ? 'AI is Extracting Questions...' : 'Extract Questions & Launch CBT Test'}
                  </button>
                </div>
              </div>

              {/* 4-Stage Visual Progress Tracker */}
              {isUploading && (
                <div className="p-5 bg-gradient-to-br from-indigo-50 to-indigo-100/60 dark:from-indigo-950/60 dark:to-slate-900 rounded-2xl border border-indigo-200 dark:border-indigo-900/60 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin shrink-0" />
                      <span className="text-xs font-bold text-indigo-950 dark:text-indigo-200">
                        {uploadProgress}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400">
                      Step {activeStageIndex + 1} of 4
                    </span>
                  </div>

                  {/* Visual Stepper */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-1">
                    {[
                      { title: '1. Read & OCR PDF', desc: 'Pre-processing pages' },
                      { title: '2. Gemini 3.8 Flash', desc: 'LaTeX math scanning' },
                      { title: '3. Answer Key & Logic', desc: 'Step-by-step solving' },
                      { title: '4. CBT Engine Ready', desc: 'NTA & MathonGo setup' },
                    ].map((step, idx) => (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-xl text-center border transition-all ${
                          idx < activeStageIndex
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300'
                            : idx === activeStageIndex
                            ? 'bg-white dark:bg-slate-800 border-indigo-500 shadow-sm text-indigo-600 dark:text-indigo-300 font-bold'
                            : 'bg-white/40 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-400'
                        }`}
                      >
                        <div className="text-[11px] font-bold">{step.title}</div>
                        <div className="text-[10px] opacity-75">{step.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {errorMsg && (
                <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 text-xs text-rose-700 dark:text-rose-300 flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold">{errorMsg}</p>
                    <p className="text-[11px] opacity-90">
                      Tip: If deploying to Vercel, make sure GEMINI_API_KEY is configured in your Vercel Environment Variables.
                    </p>
                  </div>
                </div>
              )}

              {/* SUCCESSFUL EXTRACTION LAUNCHPAD */}
              {extractedPaperResult && (
                <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50/50 to-indigo-50 dark:from-emerald-950/40 dark:via-teal-950/20 dark:to-slate-900 border-2 border-emerald-500/80 shadow-lg space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded-full bg-emerald-500 text-white">
                          <CheckCircle2 className="w-4 h-4" />
                        </span>
                        <h3 className="text-sm md:text-base font-bold font-display text-slate-900 dark:text-white">
                          🎉 {extractedPaperResult.title} Extracted Successfully!
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        All questions, options, LaTeX mathematical formulas, and verified solutions have been structured into the CBT engine.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectExam(extractedPaperResult)}
                        className="px-5 py-2.5 text-xs font-black text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 rounded-xl shadow-md transition-all flex items-center gap-2 shrink-0"
                      >
                        <Play className="w-4 h-4 fill-white" />
                        Launch CBT Test Room
                      </button>
                    </div>
                  </div>

                  {/* Extracted Stats Breakdown */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-center">
                      <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Total Questions</div>
                      <div className="text-lg font-black text-slate-900 dark:text-white">
                        {extractedPaperResult.sections.reduce((acc, s) => acc + s.questions.length, 0)}
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-center">
                      <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Duration</div>
                      <div className="text-lg font-black text-indigo-600 dark:text-indigo-400">
                        {extractedPaperResult.durationMinutes} Mins
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-center">
                      <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Sections</div>
                      <div className="text-lg font-black text-purple-600 dark:text-purple-400">
                        {extractedPaperResult.sections.length} ({extractedPaperResult.sections.map((s) => s.name).join(', ')})
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-center">
                      <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Total Marks</div>
                      <div className="text-lg font-black text-amber-600 dark:text-amber-400">
                        {extractedPaperResult.totalMarks}
                      </div>
                    </div>
                  </div>

                  {/* Toggle Preview Accordion */}
                  <div className="pt-2 border-t border-emerald-200/60 dark:border-emerald-900/40 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setShowPreviewQuestions(!showPreviewQuestions)}
                      className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      {showPreviewQuestions ? 'Hide Extracted Questions' : 'Preview Extracted Questions with LaTeX'}
                      {showPreviewQuestions ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setExtractedPaperResult(null);
                        setQuestionFile(null);
                        setSolutionFile(null);
                      }}
                      className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Convert Another PDF
                    </button>
                  </div>

                  {/* Preview Question List */}
                  {showPreviewQuestions && (
                    <div className="max-h-96 overflow-y-auto space-y-3 p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                      {extractedPaperResult.sections.flatMap((s) => s.questions).map((q, idx) => (
                        <div
                          key={q.id || idx}
                          className="p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850 space-y-2 text-xs"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-bold text-indigo-600 dark:text-indigo-400">
                              Question {q.questionNumber || idx + 1} ({q.sectionId?.toUpperCase() || 'SECTION'})
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                              {q.type} • +{q.positiveMarks}/-{q.negativeMarks}
                            </span>
                          </div>

                          <div className="text-slate-900 dark:text-slate-100 font-serif leading-relaxed">
                            <MathRenderer content={q.promptLatex} />
                          </div>

                          {q.diagramDescription && (
                            <div className="p-2 rounded bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-[11px] text-amber-800 dark:text-amber-300">
                              {q.diagramDescription}
                            </div>
                          )}

                          {q.options && q.options.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                              {q.options.map((opt) => (
                                <div
                                  key={opt.id}
                                  className={`p-2 rounded border text-[11px] flex items-center gap-2 ${
                                    opt.id === q.correctAnswer
                                      ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 font-semibold'
                                      : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                                  }`}
                                >
                                  <span className="font-bold shrink-0">{opt.id}.</span>
                                  <MathRenderer content={opt.labelLatex} />
                                </div>
                              ))}
                            </div>
                          )}

                          {q.explanationLatex && (
                            <div className="pt-2 text-[11px] text-slate-600 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800">
                              <span className="font-bold text-emerald-600 dark:text-emerald-400">Solution: </span>
                              <MathRenderer content={q.explanationLatex} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
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
