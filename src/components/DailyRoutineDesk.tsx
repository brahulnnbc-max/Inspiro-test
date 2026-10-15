import React, { useState, useMemo } from 'react';
import { DailyRoutineItem, ExamPaper, RoutineType } from '../types/exam';
import {
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  Play,
  Flame,
  Award,
  Zap,
  ChevronRight,
  BookOpen,
  Plus,
  Trash2,
  Filter,
  Check,
  Smile,
} from 'lucide-react';

interface DailyRoutineDeskProps {
  routineItems: DailyRoutineItem[];
  onStartRoutineTask: (item: DailyRoutineItem) => void;
  onToggleRoutineComplete: (itemId: string) => void;
  onAddCustomRoutine: (items: DailyRoutineItem[]) => void;
  onDeleteRoutineItem: (itemId: string) => void;
}

export const DailyRoutineDesk: React.FC<DailyRoutineDeskProps> = ({
  routineItems = [],
  onStartRoutineTask,
  onToggleRoutineComplete,
  onAddCustomRoutine,
  onDeleteRoutineItem,
}) => {
  const [selectedWeek, setSelectedWeek] = useState<number | 'ALL'>(1);
  const [commandPrompt, setCommandPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [genError, setGenError] = useState('');

  const safeItems = routineItems || [];

  // Find today's scheduled action item (first uncompleted item or today's date item)
  const todayItem: DailyRoutineItem | undefined = useMemo(() => {
    return (
      safeItems.find((item) => !item.isCompleted) ||
      safeItems[0]
    );
  }, [safeItems]);

  // Available weeks list
  const weeksList = useMemo(() => {
    const set = new Set(safeItems.map((item) => item.weekNumber));
    return Array.from(set).sort((a, b) => a - b);
  }, [safeItems]);

  // Filtered items
  const displayItems = useMemo(() => {
    if (selectedWeek === 'ALL') return safeItems;
    return safeItems.filter((item) => item.weekNumber === selectedWeek);
  }, [safeItems, selectedWeek]);

  // Overall checklist progress
  const completedCount = safeItems.filter((i) => i.isCompleted).length;
  const totalCount = safeItems.length;
  const progressPercent =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Handle AI Command Routine Generation
  const handleGenerateRoutine = async (presetText?: string) => {
    const textToUse = presetText || commandPrompt;
    if (!textToUse.trim()) return;

    setIsGenerating(true);
    setGenError('');

    try {
      const response = await fetch('/api/generate-full-routine', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          commandPrompt: textToUse,
          targetExam: 'JEE_MAIN',
          practiceSlot: '19:00 - 20:00',
          testSlot: '09:00 - 12:00',
        }),
      });

      const resData = await response.json();
      if (!response.ok || !resData.success) {
        throw new Error(resData.error || 'Failed to generate master routine');
      }

      if (resData.success && resData.data && resData.data.items) {
        const generated: DailyRoutineItem[] = resData.data.items.map(
          (item: any, idx: number) => ({
            id: `gen-rout-${Date.now()}-${idx}`,
            type: item.type as RoutineType,
            title: item.title,
            chapterOrTopic: item.chapterOrTopic,
            subject: item.subject,
            scheduledDate: item.scheduledDate,
            scheduledSlot: item.scheduledSlot,
            durationMinutes: item.durationMinutes || 50,
            questionCount: item.questionCount || 25,
            weekNumber: item.weekNumber || 1,
            dayName: item.dayName || 'Day',
            isCompleted: false,
          })
        );

        onAddCustomRoutine(generated);
        setCommandPrompt('');
      }
    } catch (e: any) {
      console.error(e);
      setGenError(e.message || 'Failed to arrange routine with AI');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* 1. TODAY'S LIVE WORK DESK (The "Just Sit Down & Relax" Hero) */}
      {todayItem ? (
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 md:p-8 border border-indigo-800 shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  Today's Live Scheduled Action
                </span>

                <span className="text-xs text-slate-400 font-mono">
                  {todayItem.dayName} • Slot: {todayItem.scheduledSlot}
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold font-display text-white">
                {todayItem.title}
              </h2>

              <p className="text-xs md:text-sm text-slate-300 flex items-center gap-2">
                <span className="font-bold text-indigo-400 uppercase">
                  {todayItem.subject}
                </span>
                <span>•</span>
                <span>{todayItem.chapterOrTopic}</span>
              </p>
            </div>

            {/* Quick Stats Pill & Action Button */}
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 text-center">
                <div className="text-[10px] text-slate-300 uppercase font-semibold">
                  Format
                </div>
                <div className="text-sm font-mono font-bold text-white">
                  {todayItem.durationMinutes}m • {todayItem.questionCount} Qs
                </div>
              </div>

              {todayItem.isCompleted ? (
                <div className="px-5 py-3 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Completed! Sit Back & Relax.
                </div>
              ) : (
                <button
                  onClick={() => onStartRoutineTask(todayItem)}
                  className="px-6 py-3.5 text-xs md:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current" />
                  {todayItem.type === 'REAL_TEST'
                    ? 'Enter Live Test Hall'
                    : 'Enter Today\'s Practice Room'}
                </button>
              )}
            </div>
          </div>

          {/* Quick checklist toggle */}
          <div className="relative z-10 mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">
              When done with this session, mark it finished to unlock relaxation mode:
            </span>

            <button
              onClick={() => onToggleRoutineComplete(todayItem.id)}
              className={`px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-colors ${
                todayItem.isCompleted
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-slate-300'
              }`}
            >
              <Check className="w-3.5 h-3.5" />
              {todayItem.isCompleted ? 'Marked as Done' : 'Mark Done'}
            </button>
          </div>
        </div>
      ) : null}

      {/* 2. COMMAND AI: INTEGRATED COACHING ROUTINE BUILDER */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              AI Master Routine Director
            </div>
            <h3 className="text-base md:text-lg font-bold font-display text-slate-900 dark:text-white mt-0.5">
              Command AI to Arrange Your Multi-Month Module Practice & Test Schedule
            </h3>
            <p className="text-xs text-slate-500">
              Tell AI your daily practice slot (e.g. 7-8 PM) and test frequency to create an integrated weekly checklist.
            </p>
          </div>
        </div>

        {/* Command Box */}
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={commandPrompt}
            onChange={(e) => setCommandPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleGenerateRoutine()}
            placeholder="e.g. Schedule daily 50-minute module practice from Monday to Friday at 7pm, and a full CBT test every alternate Sunday"
            disabled={isGenerating}
            className="flex-1 px-4 py-3 text-xs md:text-sm rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={() => handleGenerateRoutine()}
            disabled={!commandPrompt.trim() || isGenerating}
            className="px-6 py-3 text-xs md:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-xl shadow-xs transition-all disabled:opacity-50 flex items-center justify-center gap-2 shrink-0"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            {isGenerating ? 'Arranging Routine...' : 'Command AI to Build'}
          </button>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center gap-2 text-xs pt-1">
          <span className="text-slate-400 font-medium">Quick Presets:</span>
          <button
            onClick={() =>
              handleGenerateRoutine(
                'Create an Allen Leader 6-Month integrated routine: Mon-Fri daily 1-hour module practice at 7pm, and alternate Sunday 3-hour tests covering Class 11 and 12'
              )
            }
            className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 transition-colors"
          >
            🎯 Daily Module Sprints + Sunday Tests
          </button>
          <button
            onClick={() =>
              handleGenerateRoutine(
                'Create an Intensive 3-Month Revision Sprint: 4 daily module practice sessions every week and a weekly Sunday CBT mock test'
              )
            }
            className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 transition-colors"
          >
            ⚡ 3-Month Daily Sprint
          </button>
        </div>

        {genError && (
          <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 text-xs text-rose-700 dark:text-rose-300">
            {genError}
          </div>
        )}
      </div>

      {/* 3. WEEKLY CHECKLIST & 3-6 MONTH TIMELINE */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base md:text-lg font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-500" />
              Master Coaching Routine Checklist
            </h3>
            <p className="text-xs text-slate-500">
              Completed: {completedCount} / {totalCount} Sessions ({progressPercent}%)
            </p>
          </div>

          {/* Week Selector Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            <button
              onClick={() => setSelectedWeek('ALL')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg shrink-0 transition-colors ${
                selectedWeek === 'ALL'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              All Weeks
            </button>
            {weeksList.map((w) => (
              <button
                key={w}
                onClick={() => setSelectedWeek(w)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg shrink-0 transition-colors ${
                  selectedWeek === w
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                Week {w}
              </button>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
          <div
            className="bg-emerald-500 h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Routine Cards List */}
        <div className="space-y-3">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className={`p-4 md:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                item.isCompleted
                  ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/40 opacity-80'
                  : item.type === 'REAL_TEST'
                  ? 'bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-900/50 shadow-xs'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-xs'
              }`}
            >
              {/* Left Details */}
              <div className="flex items-start gap-3.5">
                {/* Complete Checkbox */}
                <button
                  onClick={() => onToggleRoutineComplete(item.id)}
                  className={`w-6 h-6 rounded-lg flex items-center justify-center border mt-0.5 shrink-0 transition-colors ${
                    item.isCompleted
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'border-slate-300 dark:border-slate-600 hover:border-indigo-500'
                  }`}
                  title={item.isCompleted ? 'Mark as pending' : 'Mark as completed'}
                >
                  {item.isCompleted && <Check className="w-4 h-4 stroke-[3]" />}
                </button>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        item.type === 'REAL_TEST'
                          ? 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-300'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300'
                      }`}
                    >
                      {item.type === 'REAL_TEST' ? '🏆 Real CBT Test' : '⚡ Module Practice Sprint'}
                    </span>

                    <span className="text-xs text-slate-500 font-mono">
                      Week {item.weekNumber} • {item.dayName} ({item.scheduledDate})
                    </span>

                    <span className="text-xs text-slate-500 font-mono">
                      Slot: {item.scheduledSlot}
                    </span>
                  </div>

                  <h4
                    className={`font-bold text-sm md:text-base ${
                      item.isCompleted
                        ? 'line-through text-slate-500 dark:text-slate-400'
                        : 'text-slate-900 dark:text-white'
                    }`}
                  >
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-500 flex items-center gap-1.5">
                    <span className="capitalize font-semibold text-indigo-600 dark:text-indigo-400">
                      {item.subject}
                    </span>
                    <span>•</span>
                    <span>{item.chapterOrTopic}</span>
                    <span>•</span>
                    <span className="font-mono">{item.questionCount} Questions</span>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0 shrink-0 self-end sm:self-center">
                <button
                  onClick={() => onStartRoutineTask(item)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg shadow-xs transition-all flex items-center gap-1.5 active:scale-95 ${
                    item.type === 'REAL_TEST'
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  {item.type === 'REAL_TEST' ? 'Enter Test Hall' : 'Start Practice Sprint'}
                </button>

                <button
                  onClick={() => onDeleteRoutineItem(item.id)}
                  className="p-2 text-slate-400 hover:text-rose-500 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                  title="Remove from routine"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
