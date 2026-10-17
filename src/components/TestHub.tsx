import React, { useState, useRef, useMemo } from 'react';
import {
  ExamPaper,
  ExamPattern,
  StudentAttempt,
  ScheduledTest,
  SyllabusTopic,
  MistakeEntry,
} from '../types/exam';
import { InspiroLogo } from './InspiroLogo';
import { MathRenderer } from './MathRenderer';
import { parsePastedQuestionsInstant } from '../utils/instantQuestionParser';
import {
  getTodayIso,
  getTomorrowIso,
  generateLockedSchedule,
  parseScheduleCommand,
  buildSyllabusFromPaper,
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
  Send,
  History,
  Award,
  ChevronRight,
  X,
  FileText,
  BarChart3,
  CalendarDays,
  Zap,
  Flame,
  ShieldAlert,
} from 'lucide-react';

interface TestHubProps {
  onSelectExam: (paper: ExamPaper) => void;
  onViewAttempt: (attempt: StudentAttempt, paper: ExamPaper) => void;
  savedAttempts: StudentAttempt[];
  savedCustomPapers: ExamPaper[];
  onSaveCustomPaper: (paper: ExamPaper) => void;
  scheduledTests: ScheduledTest[];
  onToggleTopic: (testId: string, topicId: string) => void;
  onEnterLiveTest: (test: ScheduledTest) => void;
  onAddCustomSchedule: (newTests: ScheduledTest[]) => void;
  onDeleteScheduledTest?: (testId: string) => void;
  mistakes?: MistakeEntry[];
  onPracticeSimilar?: (entry: MistakeEntry) => void;
}

export const TestHub: React.FC<TestHubProps> = ({
  onSelectExam,
  onViewAttempt,
  savedAttempts = [],
  savedCustomPapers = [],
  onSaveCustomPaper,
  scheduledTests = [],
  onToggleTopic,
  onEnterLiveTest,
  onAddCustomSchedule,
}) => {
  // Input & AI Conversion State
  const [pastedText, setPastedText] = useState('');
  const [aiCommand, setAiCommand] = useState('');
  const [customTitle, setCustomTitle] = useState('');
  const [selectedPattern, setSelectedPattern] = useState<ExamPattern>('JEE_MAIN');
  const [durationMinutes, setDurationMinutes] = useState<number>(180);
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Scheduling Modal / Configuration State
  const [createdPaper, setCreatedPaper] = useState<ExamPaper | null>(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [scheduleTargetDate, setScheduleTargetDate] = useState(getTodayIso());
  const [scheduleTimeSlot, setScheduleTimeSlot] = useState('09:00 - 12:00');
  const [scheduleCadence, setScheduleCadence] = useState<
    'SINGLE' | 'ALTERNATE_DAYS' | 'WEEKLY_SUNDAYS' | 'TWICE_WEEKLY'
  >('SINGLE');
  const [scheduleDurationMonths, setScheduleDurationMonths] = useState<1 | 3 | 6>(1);
  const [scheduleSuccessNotice, setScheduleSuccessNotice] = useState('');

  // Active view tab filter
  const [activeViewFilter, setActiveViewFilter] = useState<
    'ALL' | 'TODAY' | 'TOMORROW' | 'UPCOMING' | 'HISTORY'
  >('ALL');

  const creatorRef = useRef<HTMLDivElement | null>(null);

  // Today and Tomorrow strings
  const todayStr = useMemo(() => getTodayIso(), []);
  const tomorrowStr = useMemo(() => getTomorrowIso(), []);

  // Categorize Tests strictly
  const { todayTests, tomorrowTests, upcomingTests, missedTests, completedTests } = useMemo(() => {
    const today: ScheduledTest[] = [];
    const tomorrow: ScheduledTest[] = [];
    const upcoming: ScheduledTest[] = [];
    const missed: ScheduledTest[] = [];
    const completed: ScheduledTest[] = [];

    // Sort scheduled tests chronologically
    const sorted = [...scheduledTests].sort((a, b) =>
      a.scheduledDate.localeCompare(b.scheduledDate)
    );

    sorted.forEach((test) => {
      if (test.status === 'COMPLETED') {
        completed.push(test);
      } else if (test.scheduledDate === todayStr) {
        today.push(test);
      } else if (test.scheduledDate === tomorrowStr) {
        tomorrow.push(test);
      } else if (test.scheduledDate > tomorrowStr) {
        upcoming.push(test);
      } else if (test.scheduledDate < todayStr) {
        missed.push({ ...test, status: 'MISSED_PRACTICE' });
      }
    });

    return {
      todayTests: today,
      tomorrowTests: tomorrow,
      upcomingTests: upcoming,
      missedTests: missed,
      completedTests: completed,
    };
  }, [scheduledTests, todayStr, tomorrowStr]);

  // Overall Stats
  const totalCompletedCount = savedAttempts.length;
  const avgScore = totalCompletedCount > 0
    ? Math.round(savedAttempts.reduce((sum, a) => sum + (a.totalMarks || 0), 0) / totalCompletedCount)
    : 0;

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

  // Convert Pasted Text using AI & Deterministic Parser with Command Support
  const handleConvertText = async (autoScheduleImmediately: boolean = false) => {
    if (!pastedText.trim()) {
      setErrorMessage('Please paste questions, syllabus chapters, or an AI prompt in the text box.');
      return;
    }

    setErrorMessage('');
    setIsProcessing(true);
    setStatusMessage('inspiro AI is extracting questions, options, LaTeX formulas & solutions...');

    const combinedTitle = customTitle.trim() || 'JEE CBT Custom Mock';

    try {
      // 1. Send request to backend
      const response = await fetch('/api/parse-exam-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          textQuestions: pastedText.trim(),
          userCommand: aiCommand.trim(),
          examTitle: combinedTitle,
          pattern: selectedPattern,
          customDurationMinutes: durationMinutes,
          autoSchedule: autoScheduleImmediately,
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
        console.log('[TestHub] Using local instant parser and command interpreter...');
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

        // Interpret scheduling command locally
        const parsedCmd = parseScheduleCommand(aiCommand);
        if (autoScheduleImmediately || aiCommand.trim()) {
          returnedScheduledTests = generateLockedSchedule({
            paper,
            mode: parsedCmd.mode,
            startDate: parsedCmd.startDate || getTodayIso(),
            startTime: parsedCmd.startTime || '09:00',
            endTime: parsedCmd.endTime || '12:00',
            durationMonths: parsedCmd.durationMonths || 1,
          });
        }
      }

      // Save custom paper
      onSaveCustomPaper(paper);
      setCreatedPaper(paper);

      // If scheduled tests were generated from command
      if (returnedScheduledTests && returnedScheduledTests.length > 0) {
        onAddCustomSchedule([...returnedScheduledTests, ...scheduledTests]);
        setScheduleSuccessNotice(
          `🔒 Successfully scheduled ${returnedScheduledTests.length} live test(s)! They are locked in your schedule.`
        );
        setTimeout(() => setScheduleSuccessNotice(''), 7000);
      } else {
        // Open scheduling modal so user can schedule themselves
        setShowScheduleModal(true);
      }
    } catch (err: any) {
      console.error('Extraction error:', err);
      setErrorMessage(err.message || 'Failed to convert text. Please check the question format.');
    } finally {
      setIsProcessing(false);
      setStatusMessage('');
    }
  };

  // Lock and Schedule the created paper
  const handleConfirmSchedule = () => {
    if (!createdPaper) return;

    const [start, end] = scheduleTimeSlot.split(' - ').map((s) => s.trim());

    const newTests = generateLockedSchedule({
      paper: createdPaper,
      mode: scheduleCadence,
      startDate: scheduleTargetDate,
      startTime: start || '09:00',
      endTime: end || '12:00',
      durationMonths: scheduleDurationMonths,
    });

    onAddCustomSchedule([...newTests, ...scheduledTests]);
    setShowScheduleModal(false);
    setScheduleSuccessNotice(
      `🔒 Committed & Locked ${newTests.length} test(s) up to ${scheduleDurationMonths} month(s). Rescheduling is permanently disabled.`
    );
    setTimeout(() => setScheduleSuccessNotice(''), 7000);
  };

  const scrollToCreator = () => {
    creatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Sleek Minimal Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-5">
          <div className="flex items-center gap-3.5">
            <InspiroLogo size="md" showText />
            <div className="h-5 w-px bg-zinc-800 hidden sm:block" />
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              JEE Live Test Series & Schedule
            </div>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
              Today: <strong className="text-white">{todayStr}</strong>
            </span>
            <button
              onClick={scrollToCreator}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-red-600 hover:bg-red-500 text-white transition-all shadow-[0_0_12px_rgba(220,38,38,0.4)] cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Paste Text to Test</span>
            </button>
          </div>
        </header>

        {/* Global Success / Locked Notice */}
        {scheduleSuccessNotice && (
          <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-200 flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-sm font-medium">{scheduleSuccessNotice}</span>
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
        {/* AI TEXT-TO-TEST CREATOR & LIVE SCHEDULER                */}
        {/* ======================================================== */}
        <section
          ref={creatorRef}
          className="rounded-2xl bg-zinc-950 border border-zinc-800 p-5 md:p-6 shadow-xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-500" />
                <h2 className="text-lg md:text-xl font-bold font-display text-white">
                  Paste Text to Create Live Test
                </h2>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Paste any question text, syllabus topics, or an AI scheduling command.
              </p>
            </div>

            <button
              onClick={handleFillSample}
              className="text-xs text-red-400 hover:text-red-300 font-mono underline self-start md:self-auto cursor-pointer"
            >
              Paste Sample Questions
            </button>
          </div>

          {/* Text Area Input */}
          <div className="space-y-3">
            <div className="relative">
              <textarea
                value={pastedText}
                onChange={(e) => setPastedText(e.target.value)}
                rows={6}
                placeholder="Paste question text, syllabus outline, or type a command...
Example:
1. A block of mass 2kg slides down an inclined plane...
(A) 10 N
(B) 20 N
(C) 5 N
(D) 15 N
Answer: (A)
Solution: Standard normal reaction $N = mg \\cos\\theta$..."
                className="w-full rounded-xl bg-black border border-zinc-800 p-3.5 text-xs md:text-sm font-mono text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
              />
            </div>

            {/* AI Command Bar (Optional instruction to AI) */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <div className="relative w-full">
                <input
                  type="text"
                  value={aiCommand}
                  onChange={(e) => setAiCommand(e.target.value)}
                  placeholder="AI Scheduling Command (e.g., 'Schedule on alternate days', 'Schedule for tomorrow at 9 AM', 'Every Sunday for 3 months')"
                  className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-3.5 py-2 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-red-500 font-sans"
                />
              </div>

              {/* Quick Prompt Badges */}
              <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setAiCommand('Schedule on alternate days starting tomorrow at 9 AM')}
                  className="px-2 py-1 text-[11px] rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 whitespace-nowrap"
                >
                  Alternate Days
                </button>
                <button
                  type="button"
                  onClick={() => setAiCommand('Schedule every Sunday for 3 months at 9 AM')}
                  className="px-2 py-1 text-[11px] rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 whitespace-nowrap"
                >
                  Every Sunday
                </button>
                <button
                  type="button"
                  onClick={() => setAiCommand('Schedule for tomorrow at 9 AM')}
                  className="px-2 py-1 text-[11px] rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 whitespace-nowrap"
                >
                  Tomorrow
                </button>
              </div>
            </div>

            {/* Configuration Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-zinc-500">Pattern:</span>
                  <select
                    value={selectedPattern}
                    onChange={(e) => setSelectedPattern(e.target.value as ExamPattern)}
                    className="rounded bg-zinc-900 border border-zinc-800 px-2 py-1 text-xs text-zinc-200 focus:outline-none focus:border-red-500"
                  >
                    <option value="JEE_MAIN">JEE Main (300 Marks)</option>
                    <option value="JEE_ADVANCED">JEE Advanced (180 Marks)</option>
                  </select>
                </div>

                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-zinc-500">Duration:</span>
                  <select
                    value={durationMinutes}
                    onChange={(e) => setDurationMinutes(Number(e.target.value))}
                    className="rounded bg-zinc-900 border border-zinc-800 px-2 py-1 text-xs text-zinc-200 focus:outline-none focus:border-red-500"
                  >
                    <option value={180}>180 Mins (3 Hours Full Mock)</option>
                    <option value={60}>60 Mins (1 Hour Sprint)</option>
                    <option value={90}>90 Mins (1.5 Hours)</option>
                  </select>
                </div>

                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-zinc-500">Test Title:</span>
                  <input
                    type="text"
                    value={customTitle}
                    onChange={(e) => setCustomTitle(e.target.value)}
                    placeholder="Custom Title"
                    className="w-40 rounded bg-zinc-900 border border-zinc-800 px-2 py-1 text-xs text-zinc-200 focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={() => handleConvertText(true)}
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-red-600 hover:bg-red-500 text-white transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(220,38,38,0.4)] disabled:opacity-50 cursor-pointer"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-3.5 h-3.5 fill-current" />
                      <span>Convert & Lock Schedule</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Status & Error Messages */}
            {statusMessage && (
              <div className="text-xs text-zinc-400 font-mono animate-pulse pt-1">
                {statusMessage}
              </div>
            )}
            {errorMessage && (
              <div className="text-xs text-red-400 font-mono flex items-center gap-1.5 pt-1">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>
        </section>

        {/* View Filter Bar (Clean & Focused Navigation) */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
          <div className="flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveViewFilter('ALL')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeViewFilter === 'ALL'
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All Tests ({scheduledTests.length})
            </button>
            <button
              onClick={() => setActiveViewFilter('TODAY')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeViewFilter === 'TODAY'
                  ? 'bg-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.4)]'
                  : 'text-red-400 hover:text-red-300'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Today's Test ({todayTests.length})
            </button>
            <button
              onClick={() => setActiveViewFilter('TOMORROW')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeViewFilter === 'TOMORROW'
                  ? 'bg-amber-600 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Tomorrow ({tomorrowTests.length})
            </button>
            <button
              onClick={() => setActiveViewFilter('UPCOMING')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeViewFilter === 'UPCOMING'
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Upcoming 6-Month Roadmap ({upcomingTests.length})
            </button>
            <button
              onClick={() => setActiveViewFilter('HISTORY')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeViewFilter === 'HISTORY'
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              History & Results ({savedAttempts.length + missedTests.length})
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SECTION 1: TODAY'S LIVE TEST (🔴 HIGH PRIORITY)          */}
        {/* ======================================================== */}
        {(activeViewFilter === 'ALL' || activeViewFilter === 'TODAY') && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
                <h3 className="text-base font-bold font-display uppercase tracking-wider text-red-500">
                  Today's Live Test
                </h3>
                <span className="text-xs font-mono text-zinc-500">({todayStr})</span>
              </div>
            </div>

            {todayTests.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {todayTests.map((test) => (
                  <div
                    key={test.id}
                    className="p-5 md:p-6 rounded-2xl bg-gradient-to-r from-red-950/40 via-zinc-950 to-black border-2 border-red-600/70 shadow-[0_0_25px_rgba(220,38,38,0.25)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                  >
                    <div className="space-y-2 max-w-2xl">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-wider animate-pulse">
                          🔴 LIVE TEST NOW
                        </span>
                        <span className="text-xs font-mono text-zinc-400">
                          Slot: {test.startTime} - {test.endTime}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-900 text-zinc-300">
                          {test.pattern}
                        </span>
                      </div>

                      <h4 className="text-xl md:text-2xl font-bold font-display text-white">
                        {test.title}
                      </h4>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                        <span>Duration: {test.durationMinutes} Mins</span>
                        <span>•</span>
                        <span>Total Marks: {test.totalMarks}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-emerald-400">
                          <Lock className="w-3.5 h-3.5" />
                          Strictly Committed (No Rescheduling)
                        </span>
                      </div>

                      {/* Syllabus preview */}
                      {test.syllabus && test.syllabus.length > 0 && (
                        <div className="pt-2">
                          <div className="text-[11px] font-semibold uppercase text-zinc-500 mb-1">
                            Syllabus Checklist:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {test.syllabus.map((top) => (
                              <button
                                key={top.id}
                                onClick={() => onToggleTopic(test.id, top.id)}
                                className={`text-[11px] px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                                  top.completed
                                    ? 'bg-emerald-950 border-emerald-600/60 text-emerald-300 line-through'
                                    : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                                }`}
                              >
                                {top.completed ? '✓ ' : '○ '}
                                {top.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Start Live Test Button */}
                    <div className="flex flex-col items-center gap-2 shrink-0 w-full md:w-auto">
                      <button
                        onClick={() => onEnterLiveTest(test)}
                        className="w-full md:w-auto px-6 py-3.5 rounded-xl text-sm font-bold bg-red-600 hover:bg-red-500 text-white transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.5)] cursor-pointer"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        <span>START LIVE CBT TEST</span>
                      </button>
                      <span className="text-[10px] text-zinc-500 font-mono">
                        Official NTA / MathonGo CBT Screen
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/80 text-center space-y-2">
                <p className="text-sm text-zinc-400">
                  No live test scheduled for today ({todayStr}).
                </p>
                <p className="text-xs text-zinc-600">
                  You are free to prepare for tomorrow's scheduled test or convert text into a new test above.
                </p>
              </div>
            )}
          </section>
        )}

        {/* ======================================================== */}
        {/* SECTION 2: TOMORROW'S TEST                               */}
        {/* ======================================================== */}
        {(activeViewFilter === 'ALL' || activeViewFilter === 'TOMORROW') && (
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <h3 className="text-base font-bold font-display uppercase tracking-wider text-amber-400">
                Tomorrow's Scheduled Test
              </h3>
              <span className="text-xs font-mono text-zinc-500">({tomorrowStr})</span>
            </div>

            {tomorrowTests.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {tomorrowTests.map((test) => (
                  <div
                    key={test.id}
                    className="p-5 rounded-2xl bg-zinc-950 border border-amber-600/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
                  >
                    <div className="space-y-1.5 max-w-2xl">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                          Locked for Tomorrow
                        </span>
                        <span className="text-xs font-mono text-zinc-400">
                          {test.startTime} - {test.endTime}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold font-display text-white">{test.title}</h4>

                      <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                        <span>{test.durationMinutes} Mins</span>
                        <span>•</span>
                        <span>{test.totalMarks} Marks</span>
                        <span>•</span>
                        <span className="text-zinc-500 flex items-center gap-1">
                          <Lock className="w-3 h-3" />
                          Rescheduling Disabled
                        </span>
                      </div>

                      {/* Syllabus preview */}
                      {test.syllabus && test.syllabus.length > 0 && (
                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {test.syllabus.map((top) => (
                            <button
                              key={top.id}
                              onClick={() => onToggleTopic(test.id, top.id)}
                              className={`text-[11px] px-2 py-0.5 rounded border transition-colors cursor-pointer ${
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

                    <div className="text-right">
                      <div className="text-xs font-mono text-amber-300/90 font-medium">
                        Opens Tomorrow at {test.startTime}
                      </div>
                      <div className="text-[11px] text-zinc-500 mt-1">
                        Locked into your study calendar
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs text-zinc-500">
                  No test scheduled for tomorrow ({tomorrowStr}).
                </span>
                <button
                  onClick={() => {
                    setScheduleTargetDate(tomorrowStr);
                    scrollToCreator();
                  }}
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
                >
                  + Schedule for Tomorrow
                </button>
              </div>
            )}
          </section>
        )}

        {/* ======================================================== */}
        {/* SECTION 3: UPCOMING 6-MONTH ROADMAP                      */}
        {/* ======================================================== */}
        {(activeViewFilter === 'ALL' || activeViewFilter === 'UPCOMING') && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-zinc-400" />
                <h3 className="text-base font-bold font-display uppercase tracking-wider text-zinc-300">
                  Upcoming Tests (Up to 6 Months Roadmap)
                </h3>
              </div>
              <span className="text-xs font-mono text-zinc-500">
                {upcomingTests.length} Locked Tests
              </span>
            </div>

            {upcomingTests.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {upcomingTests.map((test, idx) => (
                  <div
                    key={test.id}
                    className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between gap-3 hover:border-zinc-700 transition-colors"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono font-bold text-red-400">
                          {test.scheduledDate}
                        </span>
                        <span className="text-zinc-500 font-mono text-[11px]">
                          {test.startTime} - {test.endTime}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-white line-clamp-1">{test.title}</h4>

                      <div className="flex items-center gap-2 text-[11px] text-zinc-400 font-mono">
                        <span>{test.pattern}</span>
                        <span>•</span>
                        <span>{test.durationMinutes}m</span>
                        <span>•</span>
                        <span>{test.totalMarks} Marks</span>
                      </div>

                      {test.syllabus && test.syllabus.length > 0 && (
                        <div className="text-[11px] text-zinc-500 line-clamp-2 pt-1">
                          {test.syllabus.map((s) => s.name).join(' • ')}
                        </div>
                      )}
                    </div>

                    <div className="pt-2 border-t border-zinc-900 flex items-center justify-between text-[11px]">
                      <span className="flex items-center gap-1 text-zinc-500">
                        <Lock className="w-3 h-3 text-emerald-500" />
                        Committed (No Edit)
                      </span>
                      <span className="text-zinc-600 font-mono">#{idx + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 text-center space-y-1">
                <p className="text-xs text-zinc-500">
                  No upcoming tests scheduled beyond tomorrow.
                </p>
                <p className="text-[11px] text-zinc-600">
                  Use the text box above to schedule alternate days or a full 6-month test series.
                </p>
              </div>
            )}
          </section>
        )}

        {/* ======================================================== */}
        {/* SECTION 4: TEST HISTORY & ATTEMPT RECORDS                */}
        {/* ======================================================== */}
        {(activeViewFilter === 'ALL' || activeViewFilter === 'HISTORY') && (
          <section className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-zinc-400" />
                <h3 className="text-base font-bold font-display uppercase tracking-wider text-zinc-300">
                  Test History & Performance Records
                </h3>
              </div>
              <div className="text-xs font-mono text-zinc-500">
                Completed: {totalCompletedCount} | Missed: {missedTests.length}
              </div>
            </div>

            {/* Completed Attempts */}
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
                        className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <BarChart3 className="w-3.5 h-3.5" />
                        <span>View Analysis</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 text-xs text-zinc-500 text-center">
                No completed test attempts yet. Start today's live test above to record your score!
              </div>
            )}

            {/* Missed Tests (Strict discipline - cannot be rescheduled) */}
            {missedTests.length > 0 && (
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Missed Tests (Recorded as Incomplete — No Rescheduling Allowed)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {missedTests.map((missed) => (
                    <div
                      key={missed.id}
                      className="p-3 rounded-lg bg-zinc-950 border border-red-950/60 text-xs flex items-center justify-between text-zinc-400"
                    >
                      <span className="line-clamp-1">{missed.title}</span>
                      <span className="text-red-400 font-mono text-[11px] shrink-0">
                        Missed on {missed.scheduledDate}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* ======================================================== */}
        {/* SCHEDULE SELECTION MODAL (When test is created)          */}
        {/* ======================================================== */}
        {showScheduleModal && createdPaper && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
            <div className="w-full max-w-lg rounded-2xl bg-zinc-950 border border-zinc-800 p-6 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-red-500" />
                  <h3 className="text-lg font-bold font-display text-white">
                    Schedule Live Test Series
                  </h3>
                </div>
                <button
                  onClick={() => setShowScheduleModal(false)}
                  className="text-zinc-500 hover:text-white p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="font-semibold text-zinc-300 mb-1">Test Paper:</div>
                  <div className="p-2.5 rounded-lg bg-zinc-900 font-mono text-zinc-200">
                    {createdPaper.title} ({createdPaper.sections.reduce((a, b) => a + b.questions.length, 0)} Questions • {createdPaper.totalMarks} Marks)
                  </div>
                </div>

                {/* Cadence Selection */}
                <div>
                  <label className="font-semibold text-zinc-300 block mb-1.5">
                    Scheduling Cadence:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setScheduleCadence('SINGLE')}
                      className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                        scheduleCadence === 'SINGLE'
                          ? 'bg-red-950/60 border-red-500 text-white'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                      }`}
                    >
                      <div className="font-bold">Single Test</div>
                      <div className="text-[10px] text-zinc-500">One-time live test session</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setScheduleCadence('ALTERNATE_DAYS')}
                      className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                        scheduleCadence === 'ALTERNATE_DAYS'
                          ? 'bg-red-950/60 border-red-500 text-white'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                      }`}
                    >
                      <div className="font-bold">Alternate Days</div>
                      <div className="text-[10px] text-zinc-500">Every 2 days (Kota style)</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setScheduleCadence('WEEKLY_SUNDAYS')}
                      className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                        scheduleCadence === 'WEEKLY_SUNDAYS'
                          ? 'bg-red-950/60 border-red-500 text-white'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                      }`}
                    >
                      <div className="font-bold">Every Sunday</div>
                      <div className="text-[10px] text-zinc-500">Weekend All-India Mock</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setScheduleCadence('TWICE_WEEKLY')}
                      className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                        scheduleCadence === 'TWICE_WEEKLY'
                          ? 'bg-red-950/60 border-red-500 text-white'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                      }`}
                    >
                      <div className="font-bold">Twice a Week</div>
                      <div className="text-[10px] text-zinc-500">Wednesdays & Saturdays</div>
                    </button>
                  </div>
                </div>

                {/* Duration Months (for series) */}
                {scheduleCadence !== 'SINGLE' && (
                  <div>
                    <label className="font-semibold text-zinc-300 block mb-1">
                      Series Duration Roadmap:
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 3, 6].map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setScheduleDurationMonths(m as 1 | 3 | 6)}
                          className={`flex-1 py-2 rounded-lg border text-center font-bold text-xs cursor-pointer ${
                            scheduleDurationMonths === m
                              ? 'bg-red-600 border-red-500 text-white'
                              : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                          }`}
                        >
                          {m} Month{m > 1 ? 's' : ''}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Start Date & Time Window */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-semibold text-zinc-300 block mb-1">
                      {scheduleCadence === 'SINGLE' ? 'Scheduled Date:' : 'Starting Date:'}
                    </label>
                    <input
                      type="date"
                      value={scheduleTargetDate}
                      onChange={(e) => setScheduleTargetDate(e.target.value)}
                      className="w-full rounded-lg bg-zinc-900 border border-zinc-800 p-2 text-zinc-200 font-mono text-xs focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-zinc-300 block mb-1">Time Slot:</label>
                    <select
                      value={scheduleTimeSlot}
                      onChange={(e) => setScheduleTimeSlot(e.target.value)}
                      className="w-full rounded-lg bg-zinc-900 border border-zinc-800 p-2 text-zinc-200 text-xs focus:outline-none focus:border-red-500"
                    >
                      <option value="09:00 - 12:00">Morning (09:00 - 12:00)</option>
                      <option value="14:00 - 17:00">Afternoon (14:00 - 17:00)</option>
                      <option value="19:00 - 22:00">Evening (19:00 - 22:00)</option>
                    </select>
                  </div>
                </div>

                {/* Strict Locking Warning */}
                <div className="p-3 rounded-lg bg-red-950/40 border border-red-800/50 flex items-start gap-2.5">
                  <Lock className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div className="text-[11px] text-red-300">
                    <strong>Strict Exam Commitment:</strong> Once scheduled, tests cannot be edited, skipped, or rescheduled. They are locked into your official exam history.
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowScheduleModal(false)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-zinc-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleConfirmSchedule}
                  className="px-5 py-2.5 rounded-lg text-xs font-bold bg-red-600 hover:bg-red-500 text-white transition-all shadow-[0_0_15px_rgba(220,38,38,0.5)] cursor-pointer"
                >
                  🔒 Lock & Confirm Schedule
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
