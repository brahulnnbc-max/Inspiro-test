import React, { useState } from 'react';
import { RemedialPack, RemedialQuestion } from '../types/exam';
import { MathRenderer } from './MathRenderer';
import {
  X,
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  Flame,
  Lightbulb,
} from 'lucide-react';

interface RemedialPracticeModalProps {
  pack: RemedialPack | null;
  isLoading: boolean;
  onClose: () => void;
}

export const RemedialPracticeModal: React.FC<RemedialPracticeModalProps> = ({
  pack,
  isLoading,
  onClose,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  if (!pack && !isLoading) return null;

  const currentQ: RemedialQuestion | undefined = pack?.remedialQuestions[activeIdx];
  const qId = currentQ?.id || '';
  const isChecked = !!revealedSolutions[qId];
  const userAns = userAnswers[qId] || '';

  const isCorrect =
    currentQ &&
    isChecked &&
    userAns.trim().toUpperCase() === currentQ.correctAnswer.trim().toUpperCase();

  const handleSelectOption = (optId: string) => {
    if (isChecked) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optId }));
  };

  const handleCheckAnswer = () => {
    setRevealedSolutions((prev) => ({ ...prev, [qId]: true }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-xs p-3 md:p-6 overflow-y-auto">
      <div className="w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col my-auto max-h-[90vh]">
        {/* Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-indigo-900 to-slate-900 text-white flex items-center justify-between border-b border-indigo-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-300">
                AI Remedial Practice • Real JEE PYQ Standards
              </div>
              <h2 className="text-base font-bold text-white">
                {isLoading ? 'Researching High-Yield JEE PYQs...' : pack?.topicName}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-6 text-slate-800 dark:text-slate-100">
          {isLoading ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-12 h-12 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin mx-auto" />
              <div className="space-y-1">
                <p className="font-semibold text-sm">
                  Searching Authentic JEE Main & Advanced Question Bank...
                </p>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Extracting isomorphic multi-step questions matching the exact formula, trap, and concept you missed.
                </p>
              </div>
            </div>
          ) : currentQ ? (
            <div className="space-y-5">
              {/* Concept Masterclass pill */}
              {pack?.conceptSummary && (
                <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
                  <Lightbulb className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
                  <div>
                    <span className="font-bold">Core JEE Principle: </span>
                    {pack.conceptSummary}
                  </div>
                </div>
              )}

              {/* Question Meta Bar */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">
                    Question {activeIdx + 1} of {pack?.remedialQuestions.length}
                  </span>
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {currentQ.historicalTag}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">
                  {currentQ.type === 'NUMERICAL' ? 'Numerical Type' : 'Single Correct Option'}
                </span>
              </div>

              {/* Question Text */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-sm leading-relaxed">
                <MathRenderer content={currentQ.promptLatex} />
              </div>

              {/* Options or Numerical input */}
              {currentQ.type === 'NUMERICAL' ? (
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500">
                    Enter Numerical Answer:
                  </label>
                  <input
                    type="text"
                    value={userAns}
                    disabled={isChecked}
                    onChange={(e) =>
                      setUserAnswers((prev) => ({
                        ...prev,
                        [qId]: e.target.value,
                      }))
                    }
                    placeholder="Enter value..."
                    className="w-full max-w-xs px-3.5 py-2 text-base font-mono font-bold rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              ) : (
                <div className="space-y-2.5">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Select Option:
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {currentQ.options?.map((opt) => {
                      const isSelected = userAns === opt.id;
                      const isCorrectOpt =
                        isChecked && currentQ.correctAnswer === opt.id;
                      const isWrongChoice =
                        isChecked && isSelected && !isCorrectOpt;

                      return (
                        <div
                          key={opt.id}
                          onClick={() => handleSelectOption(opt.id)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                            isCorrectOpt
                              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-semibold ring-1 ring-emerald-500'
                              : isWrongChoice
                              ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-100 ring-1 ring-rose-500'
                              : isSelected
                              ? 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-500 text-indigo-900 dark:text-indigo-100 ring-1 ring-indigo-500'
                              : 'bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700'
                          }`}
                        >
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                              isCorrectOpt
                                ? 'bg-emerald-600 text-white'
                                : isWrongChoice
                                ? 'bg-rose-600 text-white'
                                : isSelected
                                ? 'bg-indigo-600 text-white'
                                : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {opt.id}
                          </span>
                          <div className="flex-1 text-sm pt-0.5">
                            <MathRenderer content={opt.labelLatex} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Check Answer Button & Instant Feedback */}
              {!isChecked ? (
                <button
                  onClick={handleCheckAnswer}
                  disabled={!userAns}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-lg shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Verify My Answer & See Solution
                </button>
              ) : (
                <div className="space-y-4 pt-2">
                  <div
                    className={`p-3.5 rounded-xl border flex items-center gap-3 text-xs font-semibold ${
                      isCorrect
                        ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 text-emerald-800 dark:text-emerald-200'
                        : 'bg-rose-50 dark:bg-rose-950/30 border-rose-300 text-rose-800 dark:text-rose-200'
                    }`}
                  >
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                    <div>
                      {isCorrect ? (
                        <span>Spot on! You mastered the concept for this question.</span>
                      ) : (
                        <span>
                          Incorrect. Correct answer is{' '}
                          <strong className="underline">{currentQ.correctAnswer}</strong>.
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Step-by-Step Rigorous Solution */}
                  <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
                    <div className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                      <Flame className="w-4 h-4 text-amber-500" />
                      Masterclass Step-by-Step Solution:
                    </div>
                    <div className="leading-relaxed">
                      <MathRenderer content={currentQ.solutionLatex} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>

        {/* Footer Navigation */}
        {!isLoading && pack && (
          <div className="px-5 py-3.5 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
            <button
              onClick={() => setActiveIdx((prev) => Math.max(0, prev - 1))}
              disabled={activeIdx === 0}
              className="px-3.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold disabled:opacity-40 flex items-center gap-1 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              Previous PYQ
            </button>

            <span className="font-mono text-slate-500">
              {activeIdx + 1} / {pack.remedialQuestions.length}
            </span>

            <button
              onClick={() =>
                setActiveIdx((prev) =>
                  Math.min(pack.remedialQuestions.length - 1, prev + 1)
                )
              }
              disabled={activeIdx === pack.remedialQuestions.length - 1}
              className="px-3.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold disabled:opacity-40 flex items-center gap-1 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              Next PYQ
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
