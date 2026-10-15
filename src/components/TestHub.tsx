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

    const totalBytes = questionFile.size + (solutionFile ? solutionFile.size : 0);
    if (totalBytes > 3.5 * 1024 * 1024) {
      setErrorMsg(
        `Selected PDF size (${(totalBytes / (1024 * 1024)).toFixed(1)}MB) is too large for Vercel's 4.5MB serverless limit. Please compress your PDF or select fewer pages (e.g. 5–20 pages) for instant processing.`
      );
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
      const msg = err.message || '';
      if (msg.includes('413') || msg.toLowerCase().includes('payload') || msg.toLowerCase().includes('too large')) {
        setErrorMsg('The uploaded PDF exceeds Vercel\'s 4.5MB serverless payload limit. Please compress the file or upload 5–20 page sections.');
      } else if (msg.includes('504') || msg.toLowerCase().includes('timeout')) {
        setErrorMsg('The inspiro AI processing timed out. Try uploading a shorter excerpt or single chapter for faster processing.');
      } else {
        setErrorMsg(
          msg ||
            'Failed to convert PDF. Ensure GEMINI_API_KEY is configured in your Vercel Project Settings > Environment Variables.'
        );
      }
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
    <div className="min-h-screen p-4 md:p-8 bg-black text-zinc-100 transition-colors">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* inspiro LIVE Brand App Header */}
        <header className="border-b border-zinc-800/80 pb-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 select-none">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.4)] border border-zinc-800 bg-zinc-900 shrink-0">
                <img
                  src="/src/assets/images/inspiro_logo.png"
                  alt="inspiro logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-baseline gap-1.5 font-display text-xl md:text-2xl font-black tracking-tight">
                <span className="text-white">inspiro</span>
                <span className="text-red-600 drop-shadow-[0_0_12px_rgba(220,38,38,0.6)]">LIVE</span>
              </div>
            </div>
            <div className="hidden sm:block h-4 w-px bg-zinc-800" />
            <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider text-zinc-400">
              JEE Practice & CBT Test Hub
            </span>
          </div>

          {/* Right Status Badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
              <span className="text-white">NTA & MathonGo</span>
              <span className="text-red-500 font-extrabold">CBT</span>
            </span>
          </div>
        </header>

        {/* 7 Primary Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-zinc-800/80 pb-1 overflow-x-auto">
          <button
            onClick={() => setActiveTab('ROUTINE')}
            className={`px-3.5 py-2.5 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'ROUTINE'
                ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Zap className="w-4 h-4 fill-current text-amber-400" />
            Today's Live Desk
          </button>

          <button
            onClick={() => setActiveTab('MODULES')}
            className={`px-3.5 py-2.5 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'MODULES'
                ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Layers className="w-4 h-4 text-zinc-300" />
            Module Practice Sessions
          </button>

          <button
            onClick={() => setActiveTab('RACE')}
            className={`px-3.5 py-2.5 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 relative ${
              activeTab === 'RACE'
                ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Award className="w-4 h-4 text-red-400" />
            Allen RACE & Doubt Bank
            {taggedRaceQuestions.length > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-white text-black text-[10px] font-mono flex items-center justify-center font-black">
                {taggedRaceQuestions.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('SCHEDULE')}
            className={`px-3.5 py-2.5 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'SCHEDULE'
                ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Calendar className="w-4 h-4" />
            3–6M Test Series Roadmap
            {scheduledTests.some((t) => t.status === 'LIVE_NOW') && (
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('MENTOR')}
            className={`px-3.5 py-2.5 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'MENTOR'
                ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Bot className="w-4 h-4 text-red-400" />
            inspiro AI
          </button>

          <button
            onClick={() => setActiveTab('TESTS')}
            className={`px-3.5 py-2.5 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'TESTS'
                ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            Mock Papers & PDF Ingest
          </button>

          <button
            onClick={() => setActiveTab('MISTAKES')}
            className={`px-3.5 py-2.5 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 relative ${
              activeTab === 'MISTAKES'
                ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Mistake Notebook
            {mistakes.length > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-red-500 text-white text-[10px] font-mono flex items-center justify-center font-black">
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
            <div className="bg-zinc-950 rounded-2xl shadow-2xl border border-zinc-800 p-6 md:p-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                <div>
                  <h2 className="text-base md:text-lg font-bold font-display text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-red-500" />
                    Convert Question PDF / Coaching Module into Timed CBT
                  </h2>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Upload Allen modules (Exercise 1/2) or Test Papers to automatically build a timed computer-based practice room.
                  </p>
                </div>

                {/* Pattern selector */}
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-zinc-400 font-medium">Format:</span>
                  <div className="flex items-center p-1 bg-zinc-900 rounded-lg text-xs font-semibold border border-zinc-800">
                    <button
                      onClick={() => setSelectedPattern('JEE_MAIN')}
                      className={`px-3 py-1.5 rounded-md transition-all ${
                        selectedPattern === 'JEE_MAIN'
                          ? 'bg-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.4)]'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      JEE Main
                    </button>
                    <button
                      onClick={() => setSelectedPattern('JEE_ADVANCED')}
                      className={`px-3 py-1.5 rounded-md transition-all ${
                        selectedPattern === 'JEE_ADVANCED'
                          ? 'bg-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.4)]'
                          : 'text-zinc-400 hover:text-white'
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
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Session Title (Optional):
                  </label>
                  <input
                    type="text"
                    value={customTitle}
                    onChange={(e) => setCustomTitle(e.target.value)}
                    placeholder="e.g. Kinematics Module Ex 1 / Allen Leader Test 05"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-zinc-800 bg-black text-white placeholder:text-zinc-500 focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
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
                            ? 'bg-red-600 text-white border-red-500 shadow-[0_0_12px_rgba(220,38,38,0.4)]'
                            : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700 hover:text-white'
                        }`}
                      >
                        {mins === 180 ? '3 Hours (NTA Mock)' : `${mins} Mins`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Advanced AI Director Command & Custom Instructions Console */}
              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/60 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-xs">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        inspiro AI Command Console
                        <span className="text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                          Gemini 3.8 Flash Vision
                        </span>
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] text-zinc-400">
                    Give any specific instruction to inspiro AI
                  </span>
                </div>

                <div className="space-y-2">
                  <textarea
                    rows={2}
                    value={userCommand}
                    onChange={(e) => setUserCommand(e.target.value)}
                    placeholder='Type any custom directive, e.g.: "Extract all 30 questions without skipping. The answer key is in the table on the last page. Format all equations in LaTeX and provide step-by-step solutions."'
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-zinc-800 bg-black text-white placeholder:text-zinc-500 focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />

                  {/* 1-Click Command Preset Chips */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
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
                        className="text-[10px] font-semibold px-2 py-1 rounded-md bg-zinc-950 text-zinc-300 border border-zinc-800 hover:border-red-600 hover:text-white transition-all active:scale-95"
                      >
                        {preset.label}
                      </button>
                    ))}
                    {userCommand && (
                      <button
                        type="button"
                        onClick={() => setUserCommand('')}
                        className="text-[10px] text-red-500 hover:underline px-1 font-bold"
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
                      ? 'border-red-600 bg-red-950/20 text-white'
                      : 'border-zinc-800 hover:border-red-600/70 hover:bg-zinc-900/60 bg-zinc-900/30'
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
                    <div className="w-10 h-10 rounded-full bg-red-600/20 text-red-500 border border-red-600/30 flex items-center justify-center mx-auto shadow-xs">
                      {questionFile ? (
                        <FileCheck className="w-5 h-5 text-red-400" />
                      ) : (
                        <UploadCloud className="w-5 h-5" />
                      )}
                    </div>
                    <div className="font-semibold text-xs text-white">
                      {questionFile
                        ? questionFile.name
                        : 'Select Module / Question Paper PDF (Required)'}
                    </div>
                    <div className="text-[11px] text-zinc-400">
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
                      ? 'border-red-600 bg-red-950/20 text-white'
                      : 'border-zinc-800 hover:border-red-600/70 hover:bg-zinc-900/60 bg-zinc-900/30'
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
                    <div className="w-10 h-10 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700 flex items-center justify-center mx-auto shadow-xs">
                      {solutionFile ? (
                        <FileCheck className="w-5 h-5 text-red-400" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                    <div className="font-semibold text-xs text-white">
                      {solutionFile
                        ? solutionFile.name
                        : 'Attach Answer Key / Solution PDF (Optional)'}
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      {solutionFile
                        ? `${(solutionFile.size / (1024 * 1024)).toFixed(1)} MB • Click to replace`
                        : 'If omitted, Gemini 3.8 Flash solves questions automatically'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Start Conversion Trigger */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <div className="text-xs text-zinc-400">
                  {questionFile ? (
                    <span className="text-red-400 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-red-500" />
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
                      className="px-3 py-2 text-xs font-semibold text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-xl transition-all"
                    >
                      Reset
                    </button>
                  )}
                  <button
                    onClick={handleStartConversion}
                    disabled={!questionFile || isUploading}
                    className="px-6 py-2.5 text-xs font-black text-white bg-red-600 hover:bg-red-500 active:scale-95 rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.45)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-white animate-pulse" />
                    {isUploading ? 'inspiro AI is Extracting Questions...' : 'Extract Questions & Launch CBT Test'}
                  </button>
                </div>
              </div>

              {/* 4-Stage Visual Progress Tracker */}
              {isUploading && (
                <div className="p-5 bg-zinc-900/90 rounded-2xl border border-zinc-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full border-2 border-red-500 border-t-transparent animate-spin shrink-0" />
                      <span className="text-xs font-bold text-white">
                        {uploadProgress}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-red-400 font-bold">
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
                            ? 'bg-red-950/30 border-red-800/80 text-red-300 font-semibold'
                            : idx === activeStageIndex
                            ? 'bg-zinc-950 border-red-500 shadow-[0_0_12px_rgba(220,38,38,0.3)] text-white font-bold'
                            : 'bg-zinc-900/50 border-zinc-800 text-zinc-500'
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
                <div className="p-5 rounded-2xl bg-zinc-950 border-2 border-red-600 shadow-[0_0_25px_rgba(220,38,38,0.25)] space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded-full bg-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                          <CheckCircle2 className="w-4 h-4" />
                        </span>
                        <h3 className="text-sm md:text-base font-bold font-display text-white">
                          🎉 {extractedPaperResult.title} Extracted Successfully!
                        </h3>
                      </div>
                      <p className="text-xs text-zinc-300">
                        All questions, options, LaTeX mathematical formulas, and verified solutions have been structured into the CBT engine.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectExam(extractedPaperResult)}
                        className="px-5 py-2.5 text-xs font-black text-white bg-red-600 hover:bg-red-500 active:scale-95 rounded-xl shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all flex items-center gap-2 shrink-0"
                      >
                        <Play className="w-4 h-4 fill-white" />
                        Launch CBT Test Room
                      </button>
                    </div>
                  </div>

                  {/* Extracted Stats Breakdown */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    <div className="p-2.5 rounded-xl bg-black border border-zinc-800 text-center">
                      <div className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Total Questions</div>
                      <div className="text-lg font-black text-white">
                        {extractedPaperResult.sections.reduce((acc, s) => acc + s.questions.length, 0)}
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black border border-zinc-800 text-center">
                      <div className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Duration</div>
                      <div className="text-lg font-black text-red-500">
                        {extractedPaperResult.durationMinutes} Mins
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black border border-zinc-800 text-center">
                      <div className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Sections</div>
                      <div className="text-lg font-black text-white">
                        {extractedPaperResult.sections.length} ({extractedPaperResult.sections.map((s) => s.name).join(', ')})
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black border border-zinc-800 text-center">
                      <div className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Total Marks</div>
                      <div className="text-lg font-black text-red-500">
                        {extractedPaperResult.totalMarks}
                      </div>
                    </div>
                  </div>

                  {/* Toggle Preview Accordion */}
                  <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setShowPreviewQuestions(!showPreviewQuestions)}
                      className="text-xs font-bold text-red-400 hover:text-red-300 hover:underline flex items-center gap-1.5"
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
                      className="text-xs text-zinc-400 hover:text-white flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Convert Another PDF
                    </button>
                  </div>

                  {/* Preview Question List */}
                  {showPreviewQuestions && (
                    <div className="max-h-96 overflow-y-auto space-y-3 p-3 bg-black rounded-xl border border-zinc-800">
                      {extractedPaperResult.sections.flatMap((s) => s.questions).map((q, idx) => (
                        <div
                          key={q.id || idx}
                          className="p-3 rounded-lg border border-zinc-800/80 bg-zinc-900/60 space-y-2 text-xs"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-bold text-red-500">
                              Question {q.questionNumber || idx + 1} ({q.sectionId?.toUpperCase() || 'SECTION'})
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300">
                              {q.type} • +{q.positiveMarks}/-{q.negativeMarks}
                            </span>
                          </div>

                          <div className="text-white font-serif leading-relaxed">
                            <MathRenderer content={q.promptLatex} />
                          </div>

                          {q.diagramDescription && (
                            <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
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
                                      ? 'border-red-600 bg-red-950/30 text-white font-semibold'
                                      : 'border-zinc-800 text-zinc-300 bg-zinc-950'
                                  }`}
                                >
                                  <span className="font-bold shrink-0">{opt.id}.</span>
                                  <MathRenderer content={opt.labelLatex} />
                                </div>
                              ))}
                            </div>
                          )}

                          {q.explanationLatex && (
                            <div className="pt-2 text-[11px] text-zinc-400 border-t border-zinc-800">
                              <span className="font-bold text-red-400">Solution: </span>
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
                <h2 className="text-base md:text-lg font-bold font-display text-white">
                  Available Mock Tests
                </h2>
                <span className="text-xs text-zinc-400">
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
                      className="bg-zinc-950 rounded-xl p-5 md:p-6 border border-zinc-800 hover:border-red-600/60 shadow-lg hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] md:text-[11px] font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 uppercase">
                            {paper.pattern.replace('_', ' ')}
                          </span>
                          <span className="text-xs text-zinc-400 flex items-center gap-1 font-mono">
                            <Clock className="w-3.5 h-3.5 text-red-400" />
                            {paper.durationMinutes} Mins
                          </span>
                        </div>

                        <h3 className="font-bold text-sm md:text-base text-white leading-snug">
                          {paper.title}
                        </h3>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {paper.sections.map((sec) => (
                            <span
                              key={sec.id}
                              className="text-[10px] font-semibold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
                            >
                              {sec.name} ({sec.questions.length}Q)
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                        <div className="text-xs text-zinc-400 font-medium">
                          {paper.totalMarks} Marks • {questionCount} Qs
                        </div>

                        <button
                          onClick={() => onSelectExam(paper)}
                          className="px-4 py-2 text-xs font-black text-white bg-red-600 hover:bg-red-500 active:scale-95 rounded-lg shadow-[0_0_12px_rgba(220,38,38,0.35)] transition-all flex items-center gap-1.5"
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
              <div className="space-y-4 pt-4 border-t border-zinc-800">
                <h2 className="text-base md:text-lg font-bold font-display text-white flex items-center gap-2">
                  <History className="w-4 h-4 text-red-500" />
                  Your Past Test Attempts
                </h2>

                <div className="bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden shadow-xl">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-zinc-900 font-semibold text-zinc-300 border-b border-zinc-800">
                        <tr>
                          <th className="p-3">Test Name</th>
                          <th className="p-3">Date</th>
                          <th className="p-3">Score</th>
                          <th className="p-3 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-800/60 font-mono">
                        {savedAttempts.map((att) => {
                          const matchedPaper = allAvailablePapers.find(
                            (p) => p.id === att.examId
                          );

                          return (
                            <tr
                              key={att.id}
                              className="hover:bg-zinc-900/60 transition-colors"
                            >
                              <td className="p-3 font-sans font-medium text-white">
                                {att.examTitle}
                              </td>
                              <td className="p-3 text-zinc-400">
                                {new Date(att.submittedAt).toLocaleDateString()}
                              </td>
                              <td className="p-3 text-red-400 font-bold">
                                Completed
                              </td>
                              <td className="p-3 text-right">
                                <button
                                  onClick={() => {
                                    if (matchedPaper) {
                                      onViewAttempt(att, matchedPaper);
                                    }
                                  }}
                                  className="px-3 py-1.5 text-xs font-semibold text-red-400 hover:text-white hover:bg-red-600/20 rounded transition-colors"
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
