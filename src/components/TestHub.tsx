import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  ExamPaper,
  ExamPattern,
  StudentAttempt,
  ScheduledTest,
  DailyRoutineItem,
  TaggedQuestionEntry,
  QuestionTag,
  Question,
  MistakeEntry,
} from '../types/exam';
import { InspiroLogo } from './InspiroLogo';
import { MathRenderer } from './MathRenderer';
import { DailyRoutineDesk } from './DailyRoutineDesk';
import { ModulePracticeSection } from './ModulePracticeSection';
import { RaceQuestionBank } from './RaceQuestionBank';
import { SchedulePlanner } from './SchedulePlanner';
import { AIMentorSchedulerChat } from './AIMentorSchedulerChat';
import { MistakeNotebook } from './MistakeNotebook';
import { AdminPanelModal } from './AdminPanelModal';
import {
  SAMPLE_JEE_MAIN_MOCK,
  SAMPLE_JEE_ADVANCED_MOCK,
  SAMPLE_JEE_FIFTY_PART_1,
  SAMPLE_JEE_REMAINING_PART_2,
} from '../data/samplePapers';
import { VIBRANT_ELECTROSTATICS_PAPER_1 } from '../data/vibrantElectrostaticsData';
import { parsePastedQuestionsInstant } from '../utils/instantQuestionParser';
import {
  getTodayIso,
  getTomorrowIso,
  generateLockedSchedule,
  parseScheduleCommand,
  getLiveTestWindowStatus,
} from '../utils/scheduleCalculator';
import {
  Play,
  Clock,
  Sparkles,
  Calendar,
  Lock,
  CheckCircle2,
  AlertCircle,
  Plus,
  History,
  Award,
  X,
  BarChart3,
  CalendarDays,
  Zap,
  Activity,
  Layers,
  Bot,
  BookOpen,
  ShieldAlert,
  Flame,
  Bell,
  AlertTriangle,
  Shield,
} from 'lucide-react';

interface TestHubProps {
  onSelectExam: (paper: ExamPaper) => void;
  onViewAttempt: (attempt: StudentAttempt, paper: ExamPaper) => void;
  savedAttempts: StudentAttempt[];
  savedCustomPapers: ExamPaper[];
  onSaveCustomPaper: (paper: ExamPaper) => void;
  onDeleteCustomPaper?: (paperId: string) => void;
  mistakes: MistakeEntry[];
  onRemoveMistake?: (id: string) => void;
  onUpdateMistakeReason?: (id: string, reason: any, notes?: string) => void;
  onPracticeSimilar: (entry: MistakeEntry) => void;
  scheduledTests: ScheduledTest[];
  onToggleTopic: (testId: string, topicId: string) => void;
  onEnterLiveTest: (test: ScheduledTest) => void;
  onAttachPaper?: (testId: string, paper: ExamPaper) => void;
  onAddCustomSchedule: (newTests: ScheduledTest[]) => void;
  onDeleteScheduledTest?: (testId: string) => void;
  onClearAllScheduledTests?: () => void;
  routineItems?: DailyRoutineItem[];
  onStartRoutineTask?: (item: DailyRoutineItem) => void;
  onToggleRoutineComplete?: (itemId: string) => void;
  onAddCustomRoutine?: (items: DailyRoutineItem[]) => void;
  onDeleteRoutineItem?: (itemId: string) => void;
  taggedRaceQuestions?: TaggedQuestionEntry[];
  onRemoveTaggedQuestion?: (id: string) => void;
  onUpdateQuestionTags?: (id: string, tags: QuestionTag[]) => void;
  onToggleTagOnQuestion?: (question: Question, tag: QuestionTag) => void;
}

export const TestHub: React.FC<TestHubProps> = ({
  onSelectExam,
  onViewAttempt,
  savedAttempts = [],
  savedCustomPapers = [],
  onSaveCustomPaper,
  onDeleteCustomPaper,
  mistakes = [],
  onRemoveMistake = () => {},
  onUpdateMistakeReason = () => {},
  onPracticeSimilar,
  scheduledTests = [],
  onToggleTopic,
  onEnterLiveTest,
  onAttachPaper = () => {},
  onAddCustomSchedule,
  onDeleteScheduledTest = () => {},
  onClearAllScheduledTests = () => {},
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
  // Navigation Tabs for Students (Clean & focused)
  const [activeTab, setActiveTab] = useState<
    'TESTS' | 'ROUTINE' | 'MODULES' | 'RACE' | 'MENTOR' | 'MISTAKES' | 'HISTORY' | 'SCHEDULE'
  >('TESTS');

  // Admin Portal Modal State
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  // Available Mock Papers (Default JEE Main & Advanced + 50-Q Split CBT Papers + Custom Uploads)
  const allAvailablePapers: ExamPaper[] = useMemo(() => {
    const list: ExamPaper[] = [
      VIBRANT_ELECTROSTATICS_PAPER_1,
      SAMPLE_JEE_FIFTY_PART_1,
      SAMPLE_JEE_REMAINING_PART_2,
      SAMPLE_JEE_MAIN_MOCK,
      SAMPLE_JEE_ADVANCED_MOCK,
    ];
    savedCustomPapers.forEach((cp) => {
      if (!list.some((p) => p.id === cp.id)) {
        list.push(cp);
      }
    });
    return list;
  }, [savedCustomPapers]);

  // Input & AI Conversion State
  const [pastedText, setPastedText] = useState('');
  const [aiCommand, setAiCommand] = useState('');
  const [customTitle, setCustomTitle] = useState('');
  const [selectedPattern, setSelectedPattern] = useState<ExamPattern>('JEE_MAIN');
  const [durationMinutes, setDurationMinutes] = useState<number>(180);
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Clock Time Picker State
  const [clockStartTime, setClockStartTime] = useState('09:00');
  const [clockEndTime, setClockEndTime] = useState('12:00');
  const [scheduleTargetDate, setScheduleTargetDate] = useState(getTodayIso());
  const [scheduleCadence, setScheduleCadence] = useState<
    'SINGLE' | 'ALTERNATE_DAYS' | 'WEEKLY_SUNDAYS' | 'TWICE_WEEKLY'
  >('SINGLE');
  const [scheduleDurationMonths, setScheduleDurationMonths] = useState<1 | 3 | 6>(1);
  const [scheduleSuccessNotice, setScheduleSuccessNotice] = useState('');

  // Real-time ticking clock (updates every 30 seconds for live countdowns & window triggers)
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);

  const creatorRef = useRef<HTMLDivElement | null>(null);

  // Today and Tomorrow strings
  const todayStr = useMemo(() => getTodayIso(), []);
  const tomorrowStr = useMemo(() => getTomorrowIso(), []);

  // Categorize Tests and evaluate strict live window states
  const { todayTests, tomorrowTests, upcomingTests, missedTests, completedTests, activeReminders } = useMemo(() => {
    const today: { test: ScheduledTest; windowInfo: ReturnType<typeof getLiveTestWindowStatus> }[] = [];
    const tomorrow: { test: ScheduledTest; windowInfo: ReturnType<typeof getLiveTestWindowStatus> }[] = [];
    const upcoming: { test: ScheduledTest; windowInfo: ReturnType<typeof getLiveTestWindowStatus> }[] = [];
    const missed: { test: ScheduledTest; windowInfo: ReturnType<typeof getLiveTestWindowStatus> }[] = [];
    const completed: ScheduledTest[] = [];
    const reminders: { id: string; title: string; type: 'STARTING_SOON' | 'ENDING_SOON'; message: string }[] = [];

    // Sort scheduled tests chronologically
    const sorted = [...scheduledTests].sort((a, b) =>
      a.scheduledDate.localeCompare(b.scheduledDate)
    );

    sorted.forEach((test) => {
      const windowInfo = getLiveTestWindowStatus(test, currentTime);

      if (test.status === 'COMPLETED') {
        completed.push(test);
      } else if (windowInfo.status === 'MISSED') {
        missed.push({ test, windowInfo });
      } else if (test.scheduledDate === todayStr) {
        today.push({ test, windowInfo });

        // Check reminders for today
        if (windowInfo.status === 'STARTING_SOON') {
          reminders.push({
            id: `start-rem-${test.id}`,
            title: test.title,
            type: 'STARTING_SOON',
            message: `⏰ UPCOMING LIVE TEST REMINDER: Starts at ${test.startTime}! (Only ${windowInfo.timeRemainingMinutes} mins left to start).`,
          });
        } else if (windowInfo.status === 'ENDING_SOON') {
          reminders.push({
            id: `end-rem-${test.id}`,
            title: test.title,
            type: 'ENDING_SOON',
            message: `⚠️ LIVE TEST WINDOW CLOSING SOON: Only ${windowInfo.timeRemainingMinutes} mins remaining before test window closes at ${test.endTime}!`,
          });
        }
      } else if (test.scheduledDate === tomorrowStr) {
        tomorrow.push({ test, windowInfo });
      } else if (test.scheduledDate > tomorrowStr) {
        upcoming.push({ test, windowInfo });
      } else {
        missed.push({ test, windowInfo });
      }
    });

    return {
      todayTests: today,
      tomorrowTests: tomorrow,
      upcomingTests: upcoming,
      missedTests: missed,
      completedTests: completed,
      activeReminders: reminders,
    };
  }, [scheduledTests, todayStr, tomorrowStr, currentTime]);

  // Overall Stats
  const totalCompletedCount = savedAttempts.length;

  // 1-Click Fill Sample Questions
  const handleFillSample = () => {
    setPastedText(`1. A particle of mass $m$ undergoes SHM with displacement $x(t) = A \\cos(\\omega t + \\phi)$. What is the time period of oscillation if restoring force is $F = -kx$?
(A) $2\\pi \\sqrt{\\frac{m}{k}}$
(B) $\\pi \\sqrt{\\frac{m}{k}}$
(C) $2\\pi \\sqrt{\\frac{k}{m}}$
(D) $\\frac{1}{2\\pi} \\sqrt{\\frac{k}{m}}$
Answer: (A)
Solution: Comparing $F = -kx$ with $m a = -kx \\implies a = -\\frac{k}{m}x = -\\omega^2 x$. Hence $\\omega = \\sqrt{k/m}$, giving $T = \\frac{2\\pi}{\\omega} = 2\\pi \\sqrt{\\frac{m}{k}}$.

2. Which of the following molecules has a non-zero permanent dipole moment?
(A) $CO_2$
(B) $BF_3$
(C) $NH_3$
(D) $CH_4$
Answer: (C)
Solution: $NH_3$ has a trigonal pyramidal structure with a lone pair that reinforces bond dipoles. $CO_2$ (linear), $BF_3$ (trigonal planar), and $CH_4$ (tetrahedral) have dipole moments cancelling to zero by symmetry.

3. Evaluate the definite integral: $\\int_0^1 (3x^2 + 2x) dx$.
Answer: 2
Solution: $\\int_0^1 (3x^2 + 2x) dx = [x^3 + x^2]_0^1 = (1 + 1) - 0 = 2$.`);
    setAiCommand('Schedule on alternate days starting tomorrow at 9 AM');
    setCustomTitle('Mechanics & Chemistry Sprint');
  };

  // Convert Pasted Text using AI & Deterministic Parser with Command & Clock Support
  const handleConvertAndSchedule = async () => {
    if (!pastedText.trim()) {
      setErrorMessage('Please paste questions or syllabus chapters in the text box first.');
      return;
    }

    setErrorMessage('');
    setIsProcessing(true);
    setStatusMessage('inspiro AI is extracting questions, formulas & calculating locked schedule...');

    const combinedTitle = customTitle.trim() || 'JEE CBT Custom Mock';

    try {
      const response = await fetch('/api/parse-exam-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          textQuestions: pastedText.trim(),
          userCommand: aiCommand.trim(),
          examTitle: combinedTitle,
          pattern: selectedPattern,
          customDurationMinutes: durationMinutes,
          autoSchedule: true,
          scheduleOptions: {
            mode: scheduleCadence,
            startDate: scheduleTargetDate,
            startTime: clockStartTime,
            endTime: clockEndTime,
            durationMonths: scheduleDurationMonths,
          },
        }),
      });

      let paper: ExamPaper | null = null;
      let returnedScheduledTests: ScheduledTest[] | undefined = undefined;

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.examPaper) {
          paper = data.examPaper;
          returnedScheduledTests = data.scheduledTests;
        }
      }

      // If backend failed or key was absent, use our robust local parser & schedule calculator
      if (!paper) {
        console.log('[TestHub] Using local instant parser & clock scheduler...');
        const localRes = parsePastedQuestionsInstant(
          pastedText.trim(),
          combinedTitle,
          selectedPattern,
          durationMinutes
        );
        if (!localRes.success || !localRes.paper) {
          throw new Error(
            localRes.error ||
              'Could not parse questions. Ensure questions start with numbers like "1. ", "Q1.", or "(A)" options.'
          );
        }
        paper = localRes.paper;

        // Interpret scheduling command or use chosen clock times
        const parsedCmd = parseScheduleCommand(aiCommand);
        returnedScheduledTests = generateLockedSchedule({
          paper,
          mode: aiCommand.trim() ? parsedCmd.mode : scheduleCadence,
          startDate: (aiCommand.trim() && parsedCmd.startDate) || scheduleTargetDate,
          startTime: (aiCommand.trim() && parsedCmd.startTime) || clockStartTime,
          endTime: (aiCommand.trim() && parsedCmd.endTime) || clockEndTime,
          durationMonths: (aiCommand.trim() && parsedCmd.durationMonths) || scheduleDurationMonths,
        });
      }

      // Save custom paper
      onSaveCustomPaper(paper);

      // Add scheduled tests with strict lock
      if (returnedScheduledTests && returnedScheduledTests.length > 0) {
        onAddCustomSchedule([...returnedScheduledTests, ...scheduledTests]);
        setScheduleSuccessNotice(
          `🔒 Successfully locked ${returnedScheduledTests.length} test(s) in your live schedule! They will unlock strictly at their scheduled time window.`
        );
        setTimeout(() => setScheduleSuccessNotice(''), 7000);
      }
    } catch (err: any) {
      console.error('Extraction error:', err);
      setErrorMessage(err.message || 'Failed to convert text. Please check the question format.');
    } finally {
      setIsProcessing(false);
      setStatusMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 p-3 md:p-6 transition-colors">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* ======================================================== */}
        {/* HEADER: Small inspiro LIVE, NO API connected text        */}
        {/* ======================================================== */}
        <header className="flex items-center justify-between gap-4 border-b border-zinc-800/80 pb-3">
          <div className="flex items-center gap-2.5">
            {/* Small inspiro LIVE logo */}
            <InspiroLogo size="sm" showText />
            <div className="h-4 w-px bg-zinc-800 hidden sm:block" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 hidden sm:inline">
              JEE Live Test Series & Coaching Desk
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hidden sm:inline">
              Today: <strong className="text-white">{todayStr}</strong>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-bold bg-zinc-900 border border-zinc-800 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>NTA & MathonGo CBT</span>
            </span>
            <button
              onClick={() => setIsAdminModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.4)] transition-all cursor-pointer"
              title="Open Teacher & Administrator Console"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Admin Portal</span>
            </button>
          </div>
        </header>

        {/* Live Test Active Reminders Banner (Before Test Starts or Before End) */}
        {activeReminders.length > 0 && (
          <div className="space-y-2">
            {activeReminders.map((rem) => (
              <div
                key={rem.id}
                className={`p-3.5 rounded-xl border flex items-center gap-3 animate-in fade-in slide-in-from-top-1 ${
                  rem.type === 'ENDING_SOON'
                    ? 'bg-amber-950/70 border-amber-500/70 text-amber-200'
                    : 'bg-red-950/70 border-red-500/70 text-red-200'
                }`}
              >
                {rem.type === 'ENDING_SOON' ? (
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 animate-bounce" />
                ) : (
                  <Bell className="w-5 h-5 text-red-400 shrink-0 animate-pulse" />
                )}
                <div className="text-xs md:text-sm font-semibold">{rem.message}</div>
              </div>
            ))}
          </div>
        )}

        {/* Global Schedule Notice */}
        {scheduleSuccessNotice && (
          <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-200 flex items-center justify-between gap-3 animate-in fade-in">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-xs md:text-sm font-medium">{scheduleSuccessNotice}</span>
            </div>
            <button
              onClick={() => setScheduleSuccessNotice('')}
              className="text-emerald-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* ======================================================== */}
        {/* PRIMARY NAVIGATION TABS (STUDENT VIEW)                   */}
        {/* ======================================================== */}
        <div className="flex items-center gap-1.5 border-b border-zinc-800 pb-1 overflow-x-auto">
          <button
            onClick={() => setActiveTab('TESTS')}
            className={`px-3 py-2 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'TESTS'
                ? 'bg-red-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            CBT Tests & Mocks
          </button>

          <button
            onClick={() => setActiveTab('MODULES')}
            className={`px-3 py-2 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'MODULES'
                ? 'bg-red-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Module Practice
          </button>

          <button
            onClick={() => setActiveTab('ROUTINE')}
            className={`px-3 py-2 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'ROUTINE'
                ? 'bg-red-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-400 fill-current" />
            Daily Desk
          </button>

          <button
            onClick={() => setActiveTab('RACE')}
            className={`px-3 py-2 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 relative ${
              activeTab === 'RACE'
                ? 'bg-red-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-red-400" />
            RACE & Doubts
            {taggedRaceQuestions.length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-white text-black text-[10px] font-mono font-bold">
                {taggedRaceQuestions.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('MENTOR')}
            className={`px-3 py-2 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'MENTOR'
                ? 'bg-red-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Bot className="w-3.5 h-3.5 text-purple-400" />
            AI Academic Mentor
          </button>

          <button
            onClick={() => setActiveTab('MISTAKES')}
            className={`px-3 py-2 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 relative ${
              activeTab === 'MISTAKES'
                ? 'bg-red-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            Mistake Notebook
            {mistakes.length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-red-600 text-white text-[10px] font-mono font-bold">
                {mistakes.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('HISTORY')}
            className={`px-3 py-2 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'HISTORY'
                ? 'bg-red-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            History ({savedAttempts.length + missedTests.length})
          </button>

          <button
            onClick={() => setActiveTab('SCHEDULE')}
            className={`px-3 py-2 text-xs md:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'SCHEDULE'
                ? 'bg-red-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            Schedule Calendar
          </button>
        </div>

        {/* ======================================================== */}
        {/* TAB 1: STUDENT CBT TESTS & AVAILABLE MOCKS               */}
        {/* ======================================================== */}
        {activeTab === 'TESTS' && (
          <div className="space-y-7">
            {/* Alternate Day 50-Question Schedule Status Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/60 via-zinc-950 to-black border border-red-600/40 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-600/20 border border-red-500/50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white uppercase tracking-wider font-display">
                      50-Question Section CBT Schedule Active
                    </span>
                    <span className="px-2 py-0.2 rounded text-[10px] font-mono font-black bg-red-600 text-white">
                      ALTERNATE DAYS (09:00 - 12:00)
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Tests locked at 180 mins for 50 questions & (Questions × 4 mins) for remaining questions with scrambled MCQs, diagrams & verified solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setActiveTab('SCHEDULE')}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>View Calendar</span>
                </button>
                <button
                  onClick={() => setIsAdminModalOpen(true)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-red-600 hover:bg-red-500 text-white shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Chunk & Schedule</span>
                </button>
              </div>
            </div>

            {/* SUB-SECTION 1: AVAILABLE CBT MOCK EXAMS (STUDENT PORTAL) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-red-500 fill-current" />
                  <h3 className="text-base font-bold font-display uppercase tracking-wider text-white">
                    Available CBT Mock Exam Papers
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-400">
                  {allAvailablePapers.length} Paper(s) Ready
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {allAvailablePapers.map((paper) => {
                  const qCount = paper.sections.reduce(
                    (acc, s) => acc + (s.questions?.length || 0),
                    0
                  );
                  const isMain = paper.pattern === 'JEE_MAIN';
                  return (
                    <div
                      key={paper.id}
                      className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-4 group"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${
                              isMain
                                ? 'bg-red-600/20 border border-red-500/40 text-red-400'
                                : 'bg-purple-600/20 border border-purple-500/40 text-purple-400'
                            }`}
                          >
                            {paper.pattern}
                          </span>
                          <span className="text-xs font-mono text-zinc-400">
                            {paper.durationMinutes}m • {paper.totalMarks} Marks
                          </span>
                        </div>

                        <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2">
                          {paper.title}
                        </h4>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {paper.sections.map((sec) => (
                            <span
                              key={sec.id}
                              className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-300 capitalize font-medium"
                            >
                              {sec.name} ({sec.questions?.length || 0})
                            </span>
                          ))}
                        </div>

                        <div className="text-[11px] font-mono text-zinc-500 pt-0.5">
                          {qCount} Questions • {isMain ? '+4 / -1 Marking' : '+4 / -2 Advanced Pattern'}
                        </div>
                      </div>

                      <button
                        onClick={() => onSelectExam(paper)}
                        className="w-full py-2.5 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white flex items-center justify-center gap-2 shadow-[0_0_12px_rgba(220,38,38,0.3)] transition-all cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>START EXAMINATION</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ======================================================== */}
            {/* SUB-SECTION: TODAY'S LIVE TEST (STRICT DURATION CHECK)   */}
            {/* ======================================================== */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
                <h3 className="text-base font-bold font-display uppercase tracking-wider text-red-500">
                  Today's Scheduled Test ({todayStr})
                </h3>
              </div>

              {todayTests.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {todayTests.map(({ test, windowInfo }) => (
                    <div
                      key={test.id}
                      className={`p-5 rounded-2xl border-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 transition-all ${
                        windowInfo.isLive
                          ? 'bg-gradient-to-r from-red-950/50 via-zinc-950 to-black border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.3)]'
                          : 'bg-zinc-950 border-zinc-800'
                      }`}
                    >
                      <div className="space-y-2 max-w-2xl">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                              windowInfo.isLive
                                ? 'bg-red-600 text-white animate-pulse'
                                : 'bg-zinc-800 text-zinc-300'
                            }`}
                          >
                            {windowInfo.message}
                          </span>
                          <span className="text-xs font-mono text-zinc-400">
                            Slot: {test.startTime} - {test.endTime}
                          </span>
                        </div>

                        <h4 className="text-lg md:text-xl font-bold font-display text-white">
                          {test.title}
                        </h4>

                        <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                          <span>{test.durationMinutes} Mins</span>
                          <span>•</span>
                          <span>{test.totalMarks} Marks</span>
                          <span>•</span>
                          <span className="text-emerald-400 flex items-center gap-1">
                            <Lock className="w-3 h-3" />
                            Locked & Committed
                          </span>
                        </div>

                        {test.syllabus && test.syllabus.length > 0 && (
                          <div className="pt-1 flex flex-wrap gap-1.5">
                            {test.syllabus.map((top) => (
                              <button
                                key={top.id}
                                onClick={() => onToggleTopic(test.id, top.id)}
                                className={`text-[11px] px-2 py-0.5 rounded border transition-colors ${
                                  top.completed
                                    ? 'bg-emerald-950 border-emerald-600/60 text-emerald-300 line-through'
                                    : 'bg-zinc-900 border-zinc-800 text-zinc-300'
                                }`}
                              >
                                {top.completed ? '✓ ' : '○ '}
                                {top.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Start Live Test (Strict Duration Condition) */}
                      <div className="shrink-0 w-full md:w-auto text-right">
                        {windowInfo.canEnter ? (
                          <button
                            onClick={() => onEnterLiveTest(test)}
                            className="w-full md:w-auto px-6 py-3 rounded-xl text-sm font-bold bg-red-600 hover:bg-red-500 text-white transition-all flex items-center justify-center gap-2 shadow-[0_0_18px_rgba(220,38,38,0.5)] cursor-pointer"
                          >
                            <Play className="w-4 h-4 fill-current" />
                            <span>START LIVE TEST NOW</span>
                          </button>
                        ) : (
                          <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
                            <div className="text-xs font-mono text-amber-400 font-semibold flex items-center justify-center gap-1.5">
                              <Lock className="w-3.5 h-3.5" />
                              <span>{windowInfo.message}</span>
                            </div>
                            <div className="text-[10px] text-zinc-500 mt-1">
                              Will unlock automatically at {test.startTime}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800/80 text-xs text-zinc-500 text-center">
                  No live test scheduled for today. You can paste questions above to schedule one.
                </div>
              )}
            </div>

            {/* ======================================================== */}
            {/* SUB-SECTION: TOMORROW'S TEST                             */}
            {/* ======================================================== */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <h3 className="text-base font-bold font-display uppercase tracking-wider text-amber-400">
                  Tomorrow's Scheduled Test ({tomorrowStr})
                </h3>
              </div>

              {tomorrowTests.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {tomorrowTests.map(({ test }) => (
                    <div
                      key={test.id}
                      className="p-4 rounded-xl bg-zinc-950 border border-amber-600/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold uppercase">
                            Opens Tomorrow at {test.startTime}
                          </span>
                          <span className="text-xs font-mono text-zinc-400">
                            {test.startTime} - {test.endTime}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white">{test.title}</h4>
                        <div className="text-xs font-mono text-zinc-400">
                          {test.durationMinutes} Mins • {test.totalMarks} Marks • Rescheduling Disabled
                        </div>
                      </div>

                      <div className="text-xs font-mono text-zinc-500">
                        🔒 Locked in calendar
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-500 text-center">
                  No test scheduled for tomorrow.
                </div>
              )}
            </div>

            {/* ======================================================== */}
            {/* SUB-SECTION: UPCOMING 6-MONTH ROADMAP                    */}
            {/* ======================================================== */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-zinc-400" />
                  <h3 className="text-base font-bold font-display uppercase tracking-wider text-zinc-300">
                    Upcoming Tests (Up to 6 Months)
                  </h3>
                </div>
                <span className="text-xs font-mono text-zinc-500">{upcomingTests.length} Locked Tests</span>
              </div>

              {upcomingTests.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {upcomingTests.map(({ test }, idx) => (
                    <div
                      key={test.id}
                      className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1.5"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono font-bold text-red-400">{test.scheduledDate}</span>
                        <span className="font-mono text-zinc-500 text-[11px]">{test.startTime} - {test.endTime}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white line-clamp-1">{test.title}</h4>
                      <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-1">
                        <span className="flex items-center gap-1">
                          <Lock className="w-3 h-3 text-emerald-500" />
                          Committed (No Edit)
                        </span>
                        <span>#{idx + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-500 text-center">
                  No upcoming tests scheduled beyond tomorrow. Schedule alternate days or weekly tests above.
                </div>
              )}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: SCHEDULE PLANNER (Original Full Roadmap)          */}
        {/* ======================================================== */}
        {activeTab === 'SCHEDULE' && (
          <SchedulePlanner
            scheduledTests={scheduledTests}
            onToggleTopic={onToggleTopic}
            onEnterLiveTest={onEnterLiveTest}
            onAttachPaper={onAttachPaper}
            onAddCustomSchedule={onAddCustomSchedule}
            onDeleteTest={onDeleteScheduledTest}
            onSelectExamDirectly={onSelectExam}
            savedCustomPapers={savedCustomPapers}
            onSaveCustomPaper={onSaveCustomPaper}
          />
        )}

        {/* ======================================================== */}
        {/* TAB 4: DAILY ROUTINE DESK                                */}
        {/* ======================================================== */}
        {activeTab === 'ROUTINE' && (
          <DailyRoutineDesk
            routineItems={routineItems}
            onStartRoutineTask={onStartRoutineTask}
            onToggleRoutineComplete={onToggleRoutineComplete}
            onAddCustomRoutine={onAddCustomRoutine}
            onDeleteRoutineItem={onDeleteRoutineItem}
          />
        )}

        {/* ======================================================== */}
        {/* TAB 5: MODULE PRACTICE                                   */}
        {/* ======================================================== */}
        {activeTab === 'MODULES' && (
          <ModulePracticeSection
            onStartExam={onSelectExam}
            onAddCustomPaper={onSaveCustomPaper}
            onAddRoutineItems={onAddCustomRoutine}
            savedCustomPapers={savedCustomPapers}
          />
        )}

        {/* ======================================================== */}
        {/* TAB 6: ALLEN RACE & DOUBTS BANK                          */}
        {/* ======================================================== */}
        {activeTab === 'RACE' && (
          <RaceQuestionBank
            taggedQuestions={taggedRaceQuestions}
            onStartExam={onSelectExam}
            onRemoveTaggedQuestion={onRemoveTaggedQuestion}
            onUpdateTags={onUpdateQuestionTags}
            onScheduleRaceSession={(item) => onAddCustomRoutine([item])}
            onOpenAIMentorWithPrompt={() => setActiveTab('MENTOR')}
          />
        )}

        {/* ======================================================== */}
        {/* TAB 7: AI ACADEMIC MENTOR CHAT                           */}
        {/* ======================================================== */}
        {activeTab === 'MENTOR' && (
          <AIMentorSchedulerChat
            onApplyRoutine={(items) => {
              onAddCustomRoutine(items);
              setActiveTab('ROUTINE');
            }}
            currentRoutineItems={routineItems}
          />
        )}

        {/* ======================================================== */}
        {/* TAB 8: MISTAKE NOTEBOOK                                  */}
        {/* ======================================================== */}
        {activeTab === 'MISTAKES' && (
          <MistakeNotebook
            mistakes={mistakes}
            onRemoveMistake={onRemoveMistake}
            onUpdateMistakeReason={onUpdateMistakeReason}
            onPracticeSimilar={onPracticeSimilar}
          />
        )}

        {/* ======================================================== */}
        {/* TAB 9: TEST HISTORY & MISSED TESTS (BOLD RED MARKS)     */}
        {/* ======================================================== */}
        {activeTab === 'HISTORY' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-red-500" />
                <h3 className="text-lg font-bold font-display text-white">
                  Exam History & Performance Log
                </h3>
              </div>
              <div className="text-xs font-mono text-zinc-400">
                Completed: <strong className="text-emerald-400">{savedAttempts.length}</strong> |{' '}
                Missed: <strong className="text-red-500">{missedTests.length}</strong>
              </div>
            </div>

            {/* MISSED TESTS (PROMINENT BOLD RED MARKS) */}
            {missedTests.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4 text-red-500" />
                  <span>Missed Tests (Recorded as Incomplete — Rescheduling Permanently Disabled)</span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {missedTests.map(({ test }) => (
                    <div
                      key={test.id}
                      className="p-4 rounded-xl bg-red-950/40 border-2 border-red-600/80 shadow-[0_0_15px_rgba(220,38,38,0.3)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-red-600 text-white text-[10px] font-black tracking-wider uppercase">
                            ❌ MISSED (0 MARKS RECORDED)
                          </span>
                          <span className="text-xs font-mono text-red-400">
                            Closed on {test.scheduledDate} at {test.endTime}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white">{test.title}</h4>
                        <div className="text-xs font-mono text-zinc-400">
                          Scheduled Slot: {test.startTime} - {test.endTime} • Duration: {test.durationMinutes}m
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-bold text-red-400 font-mono">
                          Locked in History
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* COMPLETED ATTEMPTS */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Completed Exam Attempts
              </div>

              {savedAttempts.length > 0 ? (
                <div className="grid grid-cols-1 gap-3">
                  {savedAttempts.map((attempt) => {
                    const paper =
                      savedCustomPapers.find((p) => p.id === attempt.examId) ||
                      scheduledTests.find((t) => t.paperId === attempt.examId)?.paper || {
                        id: attempt.examId,
                        title: attempt.examTitle,
                        pattern: attempt.pattern,
                        durationMinutes: 180,
                        totalMarks: attempt.totalMarks,
                        sections: [],
                      };

                    return (
                      <div
                        key={attempt.id}
                        className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between gap-4"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-600/50 text-emerald-300 text-[10px] font-bold">
                              COMPLETED
                            </span>
                            <span className="text-xs font-mono text-zinc-500">
                              {new Date(attempt.submittedAt).toLocaleDateString()}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-white">{attempt.examTitle}</h4>
                          <div className="text-xs font-mono text-zinc-400">
                            Score:{' '}
                            <strong className="text-emerald-400 font-bold">
                              {attempt.totalMarks}
                            </strong>{' '}
                            Marks
                          </div>
                        </div>

                        <button
                          onClick={() => onViewAttempt(attempt, paper)}
                          className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 flex items-center gap-1.5 cursor-pointer"
                        >
                          <BarChart3 className="w-3.5 h-3.5" />
                          <span>View Analysis</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-500 text-center">
                  No completed attempts yet. Sit for a live test to log your performance.
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Admin Management Modal Console */}
      <AdminPanelModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        savedCustomPapers={savedCustomPapers}
        onSaveCustomPaper={onSaveCustomPaper}
        onDeleteCustomPaper={onDeleteCustomPaper}
        scheduledTests={scheduledTests}
        onAddCustomSchedule={onAddCustomSchedule}
        onDeleteScheduledTest={onDeleteScheduledTest}
        onClearAllScheduledTests={onClearAllScheduledTests}
        onStartTestDirectly={onSelectExam}
      />
    </div>
  );
};
