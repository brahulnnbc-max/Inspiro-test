import React, { useState, useMemo } from 'react';
import { MistakeEntry, MistakeReason, SubjectId } from '../types/exam';
import { MathRenderer } from './MathRenderer';
import {
  BookOpen,
  Sparkles,
  Trash2,
  Filter,
  CheckCircle2,
  Clock,
  Flame,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';

interface MistakeNotebookProps {
  mistakes: MistakeEntry[];
  onRemoveMistake: (id: string) => void;
  onUpdateMistakeReason: (id: string, reason: MistakeReason, notes?: string) => void;
  onPracticeSimilar: (entry: MistakeEntry) => void;
}

const REASON_LABELS: Record<MistakeReason, { label: string; color: string; badge: string }> = {
  CALCULATION_ERROR: {
    label: 'Calculation / Silly Mistake',
    color: 'text-amber-600 dark:text-amber-400',
    badge: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-300',
  },
  CONCEPT_GAP: {
    label: 'Conceptual Gap / Formula Forgotten',
    color: 'text-rose-600 dark:text-rose-400',
    badge: 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border-rose-300',
  },
  MISREAD_QUESTION: {
    label: 'Misread Question / Trap',
    color: 'text-purple-600 dark:text-purple-400',
    badge: 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-300',
  },
  TIME_PRESSURE: {
    label: 'Rushed / Time Pressure',
    color: 'text-blue-600 dark:text-blue-400',
    badge: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-300',
  },
  GUESS: {
    label: 'Blind Guess',
    color: 'text-slate-600 dark:text-slate-400',
    badge: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border-slate-300',
  },
};

export const MistakeNotebook: React.FC<MistakeNotebookProps> = ({
  mistakes,
  onRemoveMistake,
  onUpdateMistakeReason,
  onPracticeSimilar,
}) => {
  const [subjectFilter, setSubjectFilter] = useState<'ALL' | SubjectId>('ALL');
  const [reasonFilter, setReasonFilter] = useState<'ALL' | MistakeReason>('ALL');

  const filteredMistakes = useMemo(() => {
    return mistakes.filter((m) => {
      const matchSubject =
        subjectFilter === 'ALL' || m.question.sectionId === subjectFilter;
      const matchReason =
        reasonFilter === 'ALL' || m.reason === reasonFilter;
      return matchSubject && matchReason;
    });
  }, [mistakes, subjectFilter, reasonFilter]);

  // Breakdown statistics
  const stats = useMemo(() => {
    let calc = 0;
    let concept = 0;
    let misread = 0;
    let time = 0;

    mistakes.forEach((m) => {
      if (m.reason === 'CALCULATION_ERROR') calc++;
      else if (m.reason === 'CONCEPT_GAP') concept++;
      else if (m.reason === 'MISREAD_QUESTION') misread++;
      else if (m.reason === 'TIME_PRESSURE') time++;
    });

    return { calc, concept, misread, time, total: mistakes.length };
  }, [mistakes]);

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xs space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              Digital Mistake Notebook (Error Book)
            </div>
            <h2 className="text-xl font-bold font-display text-slate-900 dark:text-white mt-0.5">
              Targeted Root-Cause Analysis
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Every incorrect question across your tests is cataloged here so you never repeat the same error in the final exam.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200 dark:border-indigo-800">
              Total Logged: {mistakes.length} Errors
            </span>
          </div>
        </div>

        {/* Quick diagnosis bars */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100 dark:border-slate-700 text-xs">
          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40">
            <span className="text-[11px] text-amber-800 dark:text-amber-300 block font-medium">
              Silly / Calc Errors
            </span>
            <span className="text-xl font-bold font-mono text-amber-900 dark:text-amber-100">
              {stats.calc}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40">
            <span className="text-[11px] text-rose-800 dark:text-rose-300 block font-medium">
              Concept Gaps
            </span>
            <span className="text-xl font-bold font-mono text-rose-900 dark:text-rose-100">
              {stats.concept}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/40">
            <span className="text-[11px] text-purple-800 dark:text-purple-300 block font-medium">
              Misread Questions
            </span>
            <span className="text-xl font-bold font-mono text-purple-900 dark:text-purple-100">
              {stats.misread}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40">
            <span className="text-[11px] text-blue-800 dark:text-blue-300 block font-medium">
              Time Pressure / Rushed
            </span>
            <span className="text-xl font-bold font-mono text-blue-900 dark:text-blue-100">
              {stats.time}
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-700/60 rounded-lg text-xs font-semibold">
            <button
              onClick={() => setSubjectFilter('ALL')}
              className={`px-3 py-1 rounded-md transition-colors ${
                subjectFilter === 'ALL'
                  ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              All Subjects
            </button>
            <button
              onClick={() => setSubjectFilter('physics')}
              className={`px-3 py-1 rounded-md transition-colors ${
                subjectFilter === 'physics'
                  ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Physics
            </button>
            <button
              onClick={() => setSubjectFilter('chemistry')}
              className={`px-3 py-1 rounded-md transition-colors ${
                subjectFilter === 'chemistry'
                  ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Chemistry
            </button>
            <button
              onClick={() => setSubjectFilter('mathematics')}
              className={`px-3 py-1 rounded-md transition-colors ${
                subjectFilter === 'mathematics'
                  ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Mathematics
            </button>
          </div>
        </div>
      </div>

      {/* Mistake Entries List */}
      {filteredMistakes.length === 0 ? (
        <div className="p-12 text-center bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
          <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <p className="font-bold text-sm text-slate-800 dark:text-slate-200">
            No mistakes found in this category!
          </p>
          <p className="text-xs text-slate-500">
            Complete mock tests to automatically log and review missed questions here.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredMistakes.map((entry) => {
            const reasonData = entry.reason ? REASON_LABELS[entry.reason] : null;

            return (
              <div
                key={entry.id}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 space-y-4 shadow-xs"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-rose-500 text-white font-bold text-xs flex items-center justify-center">
                      Q.{entry.question.questionNumber}
                    </span>
                    <span className="font-semibold text-xs text-slate-700 dark:text-slate-300 capitalize">
                      {entry.question.sectionId} • {entry.examTitle}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Reason Tag */}
                    {reasonData && (
                      <span
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${reasonData.badge}`}
                      >
                        {reasonData.label}
                      </span>
                    )}

                    <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      {entry.timeSpentSeconds}s
                    </span>

                    <button
                      onClick={() => onRemoveMistake(entry.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                      title="Remove from mistake notebook (Mastered)"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question Prompt */}
                <div className="text-sm leading-relaxed p-3.5 bg-slate-50 dark:bg-slate-850 rounded-lg border border-slate-200 dark:border-slate-700">
                  <MathRenderer content={entry.question.promptLatex} />
                </div>

                {/* Response Comparison */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono bg-slate-50 dark:bg-slate-900/60 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div>
                    <span className="text-slate-500">Your Answer: </span>
                    <strong className="text-rose-600">
                      {entry.userAnswer ? JSON.stringify(entry.userAnswer) : 'Left Unattempted'}
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-500">Correct Answer: </span>
                    <strong className="text-emerald-600">
                      {entry.correctAnswer || 'N/A'}
                    </strong>
                  </div>
                </div>

                {/* Step-by-step solution */}
                {entry.question.explanationLatex && (
                  <div className="p-3.5 rounded-lg bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/40 text-xs text-slate-800 dark:text-slate-200">
                    <strong className="text-indigo-600 dark:text-indigo-400 block mb-1">
                      Official Method:
                    </strong>
                    <MathRenderer content={entry.question.explanationLatex} />
                  </div>
                )}

                {/* Action footer: AI Remedial Practice */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  {/* Quick Reason Selector */}
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="text-slate-500 font-medium">Tag Cause:</span>
                    <select
                      value={entry.reason || 'CONCEPT_GAP'}
                      onChange={(e) =>
                        onUpdateMistakeReason(entry.id, e.target.value as MistakeReason)
                      }
                      className="bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs px-2.5 py-1 rounded border border-slate-300 dark:border-slate-600 focus:outline-hidden"
                    >
                      <option value="CALCULATION_ERROR">Silly / Calculation Mistake</option>
                      <option value="CONCEPT_GAP">Concept Gap / Formula</option>
                      <option value="MISREAD_QUESTION">Misread Question / Trap</option>
                      <option value="TIME_PRESSURE">Time Pressure / Rushed</option>
                      <option value="GUESS">Blind Guess</option>
                    </select>
                  </div>

                  {/* Remedial Drill Trigger */}
                  <button
                    onClick={() => onPracticeSimilar(entry)}
                    className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-lg shadow-xs transition-all flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    Practice 3 Similar JEE PYQs (AI Drill)
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
