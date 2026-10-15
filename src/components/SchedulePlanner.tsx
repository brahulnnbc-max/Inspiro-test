import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  ScheduledTest,
  SyllabusTopic,
  ExamPaper,
  SubjectId,
} from '../types/exam';
import {
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  Lock,
  Unlock,
  Play,
  UploadCloud,
  FileCheck,
  AlertCircle,
  Plus,
  Trash2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Flame,
  Award,
} from 'lucide-react';

interface SchedulePlannerProps {
  scheduledTests: ScheduledTest[];
  onToggleTopic: (testId: string, topicId: string) => void;
  onEnterLiveTest: (test: ScheduledTest) => void;
  onAttachPaper: (testId: string, paper: ExamPaper) => void;
  onAddCustomSchedule: (newTests: ScheduledTest[]) => void;
  onDeleteTest: (testId: string) => void;
  onSelectExamDirectly: (paper: ExamPaper) => void;
}

export const SchedulePlanner: React.FC<SchedulePlannerProps> = ({
  scheduledTests,
  onToggleTopic,
  onEnterLiveTest,
  onAttachPaper,
  onAddCustomSchedule,
  onDeleteTest,
  onSelectExamDirectly,
}) => {
  const [filter, setFilter] = useState<'ALL' | 'UPCOMING' | 'LIVE' | 'COMPLETED'>('ALL');
  const [commandText, setCommandText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [genError, setGenError] = useState('');
  const [expandedTestIds, setExpandedTestIds] = useState<Record<string, boolean>>({});
  const [earlyUnlockOverrides, setEarlyUnlockOverrides] = useState<Record<string, boolean>>({});

  // Active target test (the first upcoming or live test)
  const nextTargetTest = useMemo(() => {
    return (
      scheduledTests.find((t) => t.status === 'LIVE_NOW') ||
      scheduledTests.find((t) => t.status === 'UPCOMING_LOCKED') ||
      scheduledTests[0]
    );
  }, [scheduledTests]);

  // Live countdown ticker
  const [currentTime, setCurrentTime] = useState<number>(Date.now());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Compute countdown string for a scheduled date
  const getCountdownString = (dateStr: string, timeStr: string) => {
    try {
      const targetDate = new Date(`${dateStr}T${timeStr}:00`).getTime();
      const diff = targetDate - currentTime;

      if (diff <= 0) return 'Live Window Open!';

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      return `${days}d : ${hours.toString().padStart(2, '0')}h : ${minutes
        .toString()
        .padStart(2, '0')}m : ${seconds.toString().padStart(2, '0')}s`;
    } catch {
      return dateStr;
    }
  };

  // Command AI to generate test series schedule
  const handleGenerateSchedule = async (promptOverride?: string) => {
    const promptToUse = promptOverride || commandText;
    if (!promptToUse.trim()) return;

    setIsGenerating(true);
    setGenError('');

    try {
      const response = await fetch('/api/generate-test-schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: promptToUse,
          pattern: 'JEE_MAIN',
          numberOfTests: 8,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate test schedule');
      }

      const resData = await response.json();
      if (resData.success && resData.data && resData.data.tests) {
        const generatedTests: ScheduledTest[] = resData.data.tests.map(
          (t: any, idx: number) => ({
            id: `sched-${Date.now()}-${idx}`,
            title: t.title,
            pattern: 'JEE_MAIN',
            scheduledDate: t.scheduledDate,
            startTime: t.startTime || '09:00',
            endTime: t.endTime || '12:00',
            durationMinutes: 180,
            totalMarks: 300,
            status: idx === 0 ? 'LIVE_NOW' : 'UPCOMING_LOCKED',
            syllabus: (t.syllabus || []).map((s: any, sIdx: number) => ({
              id: `top-${idx}-${sIdx}`,
              subject: s.subject || 'physics',
              name: s.name,
              completed: false,
            })),
          })
        );

        onAddCustomSchedule(generatedTests);
        setCommandText('');
      }
    } catch (e: any) {
      console.error(e);
      setGenError(e.message || 'Failed to arrange schedule with AI');
    } finally {
      setIsGenerating(false);
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedTestIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleUnlockOverride = (id: string) => {
    setEarlyUnlockOverrides((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredTests = useMemo(() => {
    if (filter === 'ALL') return scheduledTests;
    return scheduledTests.filter((t) => t.status === filter);
  }, [scheduledTests, filter]);

  return (
    <div className="space-y-8">
      {/* 1. AI COMMAND BAR: ARRANGE 3-6 MONTH SCHEDULE */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              AI Test Series Director & Roadmap Builder
            </div>
            <h2 className="text-lg md:text-xl font-bold font-display text-slate-900 dark:text-white mt-0.5">
              Command AI to Arrange Your 3 to 6-Month Test Schedule
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Tell the AI your coaching syllabus, test frequency, or paste your Allen / FIITJEE test schedule.
            </p>
          </div>
        </div>

        {/* Command Input Box */}
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={commandText}
            onChange={(e) => setCommandText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleGenerateSchedule()}
            placeholder="e.g. Schedule 8 Allen Leader periodic tests on alternate Sundays covering 11th then 12th syllabus with live 9am windows"
            disabled={isGenerating}
            className="flex-1 px-4 py-3 text-xs md:text-sm rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={() => handleGenerateSchedule()}
            disabled={!commandText.trim() || isGenerating}
            className="px-6 py-3 text-xs md:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-xl shadow-xs transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shrink-0"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            {isGenerating ? 'Arranging Schedule...' : 'Command AI to Build'}
          </button>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="text-slate-400 font-medium">Quick Presets:</span>
          <button
            onClick={() =>
              handleGenerateSchedule(
                'Create an Allen Leader 6-Month Test Series with 8 tests on alternate Sundays, covering class 11th and 12th physics, chemistry, and math syllabus progressively'
              )
            }
            className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
          >
            🎯 Allen Leader 6-Month (8 Tests)
          </button>
          <button
            onClick={() =>
              handleGenerateSchedule(
                'Create a 3-Month JEE Intensive Booster Series with 6 tests every 2 weeks, focusing on high-weightage chapters in mechanics, calculus, and physical chemistry'
              )
            }
            className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
          >
            ⚡ 3-Month High-Yield (6 Tests)
          </button>
          <button
            onClick={() =>
              handleGenerateSchedule(
                'Create an All India Open Mock Test Series with 6 Full Syllabus tests scheduled on consecutive Sundays'
              )
            }
            className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
          >
            🏆 Full Syllabus Ranker Mocks (6 Tests)
          </button>
        </div>

        {genError && (
          <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{genError}</span>
          </div>
        )}
      </div>

      {/* 2. NEXT LIVE TEST TARGET & INTERACTIVE SYLLABUS CHECKLIST */}
      {nextTargetTest && (
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white rounded-2xl p-6 md:p-8 border border-indigo-900 shadow-xl space-y-6 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Target Header */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-amber-300 uppercase">
                <Flame className="w-4 h-4 text-amber-400" />
                Immediate Target • Next Live Test
              </div>
              <h2 className="text-xl md:text-2xl font-bold font-display mt-1">
                {nextTargetTest.title}
              </h2>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                {nextTargetTest.scheduledDate} • Shift: {nextTargetTest.startTime} to{' '}
                {nextTargetTest.endTime} (IST)
              </p>
            </div>

            {/* Countdown / Live Indicator Pill */}
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20 text-center shrink-0">
              <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">
                {nextTargetTest.status === 'LIVE_NOW' ? 'Current Status' : 'Live Window Countdown'}
              </div>
              <div
                className={`text-lg md:text-xl font-mono font-extrabold mt-0.5 ${
                  nextTargetTest.status === 'LIVE_NOW'
                    ? 'text-emerald-400 animate-pulse'
                    : 'text-amber-300'
                }`}
              >
                {nextTargetTest.status === 'LIVE_NOW'
                  ? '● LIVE NOW'
                  : getCountdownString(nextTargetTest.scheduledDate, nextTargetTest.startTime)}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                Duration: {nextTargetTest.durationMinutes} Mins (3 Hours)
              </div>
            </div>
          </div>

          {/* Syllabus Revision Checklist for this target test */}
          <div className="relative z-10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-sm text-white">
                  Pre-Test Syllabus Checklist (Revision Tracker):
                </span>
              </div>

              {/* Progress counter */}
              {nextTargetTest.syllabus.length > 0 && (
                <div className="text-xs text-slate-300 font-mono">
                  Prepared:{' '}
                  <strong className="text-emerald-400">
                    {
                      nextTargetTest.syllabus.filter((t) => t.completed).length
                    }{' '}
                    / {nextTargetTest.syllabus.length} Topics
                  </strong>{' '}
                  (
                  {Math.round(
                    (nextTargetTest.syllabus.filter((t) => t.completed).length /
                      nextTargetTest.syllabus.length) *
                      100
                  )}
                  %)
                </div>
              )}
            </div>

            {/* Progress bar */}
            {nextTargetTest.syllabus.length > 0 && (
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-indigo-500 h-full transition-all duration-300"
                  style={{
                    width: `${
                      (nextTargetTest.syllabus.filter((t) => t.completed).length /
                        nextTargetTest.syllabus.length) *
                      100
                    }%`,
                  }}
                />
              </div>
            )}

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
              {nextTargetTest.syllabus.map((topic) => (
                <label
                  key={topic.id}
                  onClick={() => onToggleTopic(nextTargetTest.id, topic.id)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                    topic.completed
                      ? 'bg-emerald-950/40 border-emerald-500 text-white shadow-xs'
                      : 'bg-slate-800/60 border-slate-700/80 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={topic.completed}
                    onChange={() => {}} // handled by parent onClick
                    className="mt-0.5 w-4 h-4 text-emerald-500 rounded border-slate-600 focus:ring-emerald-500"
                  />
                  <div className="text-xs leading-snug">
                    <span className="font-bold uppercase text-[10px] text-indigo-400 block mb-0.5">
                      {topic.subject}
                    </span>
                    <span className={topic.completed ? 'line-through text-slate-300' : ''}>
                      {topic.name}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="relative z-10 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-slate-400">
              {nextTargetTest.paper ? (
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <FileCheck className="w-4 h-4" />
                  Question Paper Loaded ({nextTargetTest.paper.title})
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-amber-400">
                  <AlertCircle className="w-4 h-4" />
                  No paper attached yet (Using Sample Mock Paper)
                </span>
              )}

              {/* Early access unlock toggle */}
              <button
                onClick={() => toggleUnlockOverride(nextTargetTest.id)}
                className="text-[11px] text-slate-400 hover:text-white underline ml-2 flex items-center gap-1"
              >
                {earlyUnlockOverrides[nextTargetTest.id] ? (
                  <>
                    <Unlock className="w-3 h-3 text-amber-400" />
                    Early Access Unlocked
                  </>
                ) : (
                  <>
                    <Lock className="w-3 h-3" />
                    Preview / Unlock Early
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onEnterLiveTest(nextTargetTest)}
                disabled={
                  nextTargetTest.status !== 'LIVE_NOW' &&
                  !earlyUnlockOverrides[nextTargetTest.id]
                }
                className="px-6 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-xl shadow-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                {nextTargetTest.status === 'LIVE_NOW'
                  ? 'Enter Live CBT Examination Room'
                  : earlyUnlockOverrides[nextTargetTest.id]
                  ? 'Start Test (Early Access)'
                  : 'Test Locked Until Scheduled Window'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. SCHEDULED TIMELINE ROADMAP (3 TO 6 MONTHS) */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base md:text-lg font-bold font-display text-slate-900 dark:text-white">
              Full 3–6 Month Test Series Roadmap
            </h3>
            <p className="text-xs text-slate-500">
              {scheduledTests.length} tests scheduled with NTA live windows & chapter checklists.
            </p>
          </div>

          {/* Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filter === 'ALL'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              All Tests ({scheduledTests.length})
            </button>
            <button
              onClick={() => setFilter('LIVE')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filter === 'LIVE'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Live Now
            </button>
            <button
              onClick={() => setFilter('UPCOMING')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filter === 'UPCOMING'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Upcoming
            </button>
          </div>
        </div>

        {/* Test Cards List */}
        <div className="space-y-4">
          {filteredTests.map((test, index) => {
            const isExpanded = !!expandedTestIds[test.id];
            const isUnlocked =
              test.status === 'LIVE_NOW' || !!earlyUnlockOverrides[test.id];
            const completedTopics = test.syllabus.filter((t) => t.completed).length;

            return (
              <div
                key={test.id}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 md:p-6 shadow-xs space-y-4 transition-all"
              >
                {/* Test summary header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 uppercase">
                        Test #{index + 1}
                      </span>
                      {test.status === 'LIVE_NOW' ? (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 animate-pulse">
                          ● LIVE WINDOW
                        </span>
                      ) : (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center gap-1">
                          <Lock className="w-2.5 h-2.5" />
                          Locked
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-base text-slate-900 dark:text-white">
                      {test.title}
                    </h4>

                    <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
                      <span>Date: {test.scheduledDate}</span>
                      <span>Window: {test.startTime} - {test.endTime}</span>
                      <span>
                        Syllabus: {completedTopics}/{test.syllabus.length} Revised
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2 md:pt-0">
                    <button
                      onClick={() => toggleExpand(test.id)}
                      className="px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 rounded-lg flex items-center gap-1 transition-colors"
                    >
                      <span>Syllabus Checklist</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    <button
                      onClick={() => onEnterLiveTest(test)}
                      disabled={!isUnlocked}
                      className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-lg shadow-xs transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      {test.status === 'LIVE_NOW'
                        ? 'Take Live Test'
                        : isUnlocked
                        ? 'Take Test'
                        : 'Locked'}
                    </button>

                    <button
                      onClick={() => onDeleteTest(test.id)}
                      className="p-2 text-slate-400 hover:text-rose-500 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                      title="Remove from schedule"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Expandable Syllabus Checklist */}
                {isExpanded && (
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-700 space-y-3">
                    <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      Topics covered in this exam:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {test.syllabus.map((topic) => (
                        <label
                          key={topic.id}
                          onClick={() => onToggleTopic(test.id, topic.id)}
                          className={`p-2.5 rounded-lg border text-xs cursor-pointer flex items-center gap-2.5 transition-colors ${
                            topic.completed
                              ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                              : 'bg-slate-50 dark:bg-slate-750 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={topic.completed}
                            onChange={() => {}}
                            className="w-3.5 h-3.5 text-emerald-600 rounded"
                          />
                          <span className={topic.completed ? 'line-through' : ''}>
                            {topic.name}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
