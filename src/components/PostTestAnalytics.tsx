import React, { useState, useMemo, useEffect } from 'react';
import {
  ExamPaper,
  StudentAttempt,
  Question,
  MistakeReason,
  RemedialPack,
} from '../types/exam';
import { MathRenderer } from './MathRenderer';
import { RemedialPracticeModal } from './RemedialPracticeModal';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  RotateCcw,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Download,
  ArrowLeft,
  Flame,
  AlertTriangle,
  Sparkles,
  BookmarkPlus,
  Zap,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PostTestAnalyticsProps {
  paper: ExamPaper;
  attempt: StudentAttempt;
  onRetake: () => void;
  onBackToHub: () => void;
  onLogMistake: (
    q: Question,
    userAnswer: any,
    correctAnswer: string,
    reason: MistakeReason,
    timeSpent: number
  ) => void;
}

export const PostTestAnalytics: React.FC<PostTestAnalyticsProps> = ({
  paper,
  attempt,
  onRetake,
  onBackToHub,
  onLogMistake,
}) => {
  const [filter, setFilter] = useState<
    'ALL' | 'CORRECT' | 'INCORRECT' | 'UNATTEMPTED'
  >('ALL');
  const [expandedQuestions, setExpandedQuestions] = useState<
    Record<string, boolean>
  >({});
  const [selectedReasons, setSelectedReasons] = useState<
    Record<string, MistakeReason>
  >({});

  // Remedial PYQ practice modal state
  const [remedialPack, setRemedialPack] = useState<RemedialPack | null>(null);
  const [isLoadingRemedial, setIsLoadingRemedial] = useState(false);

  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  }, []);

  // Compute detailed analytics & time management radar
  const analytics = useMemo(() => {
    let totalScore = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;
    let totalAttempted = 0;

    const timeTraps: Array<{ q: Question; timeSpent: number; reason: string }> = [];
    const rushedErrors: Array<{ q: Question; timeSpent: number }> = [];

    const subjectBreakdown: Record<
      string,
      {
        name: string;
        score: number;
        maxMarks: number;
        correct: number;
        incorrect: number;
        unattempted: number;
        timeSpent: number;
      }
    > = {};

    paper.sections.forEach((sec) => {
      subjectBreakdown[sec.id] = {
        name: sec.name,
        score: 0,
        maxMarks: sec.questions.length * 4,
        correct: 0,
        incorrect: 0,
        unattempted: 0,
        timeSpent: 0,
      };

      sec.questions.forEach((q) => {
        const userAnswer = attempt.answers[q.id];
        const hasAnswer = userAnswer !== undefined && userAnswer !== '';
        const qTime = attempt.timeSpentSeconds[q.id] || 0;
        subjectBreakdown[sec.id].timeSpent += qTime;

        if (!hasAnswer) {
          unattemptedCount++;
          subjectBreakdown[sec.id].unattempted++;
          if (qTime > 180) {
            timeTraps.push({
              q,
              timeSpent: qTime,
              reason: 'Spent >3 mins but left unattempted (Time Trap)',
            });
          }
          return;
        }

        totalAttempted++;

        // Evaluation
        let isCorrect = false;
        if (q.correctAnswer) {
          if (q.type === 'MULTIPLE_CORRECT') {
            const correctSet = q.correctAnswer
              .split(',')
              .map((s) => s.trim())
              .sort();
            const userSet = Array.isArray(userAnswer)
              ? [...userAnswer].sort()
              : [userAnswer];
            isCorrect = JSON.stringify(correctSet) === JSON.stringify(userSet);
          } else if (q.type === 'NUMERICAL') {
            const userNum = parseFloat(userAnswer);
            const correctNum = parseFloat(q.correctAnswer);
            if (!isNaN(userNum) && !isNaN(correctNum)) {
              isCorrect = Math.abs(userNum - correctNum) < 0.05;
            } else {
              isCorrect = userAnswer.toString().trim() === q.correctAnswer.trim();
            }
          } else {
            isCorrect =
              userAnswer.toString().trim().toUpperCase() ===
              q.correctAnswer.trim().toUpperCase();
          }
        }

        if (isCorrect) {
          totalScore += q.positiveMarks;
          correctCount++;
          subjectBreakdown[sec.id].score += q.positiveMarks;
          subjectBreakdown[sec.id].correct++;
        } else {
          totalScore -= q.negativeMarks;
          incorrectCount++;
          subjectBreakdown[sec.id].score -= q.negativeMarks;
          subjectBreakdown[sec.id].incorrect++;

          if (qTime > 210) {
            timeTraps.push({
              q,
              timeSpent: qTime,
              reason: 'Spent >3.5 mins and received -1 mark (Severe Time Trap)',
            });
          } else if (qTime < 35) {
            rushedErrors.push({ q, timeSpent: qTime });
          }
        }
      });
    });

    const accuracy =
      totalAttempted > 0
        ? Math.round((correctCount / totalAttempted) * 100)
        : 0;

    let estimatedPercentile = '85.0 - 90.0';
    const scoreFraction = Math.max(0, totalScore) / paper.totalMarks;
    if (scoreFraction >= 0.8) estimatedPercentile = '99.5 - 99.9+';
    else if (scoreFraction >= 0.65) estimatedPercentile = '98.5 - 99.4';
    else if (scoreFraction >= 0.5) estimatedPercentile = '96.0 - 98.4';
    else if (scoreFraction >= 0.35) estimatedPercentile = '90.0 - 95.9';

    const totalTimeSeconds = Object.values(attempt.timeSpentSeconds).reduce(
      (a, b) => a + b,
      0
    );
    const timeSpentMins = Math.round(totalTimeSeconds / 60);

    return {
      totalScore,
      correctCount,
      incorrectCount,
      unattemptedCount,
      totalAttempted,
      accuracy,
      estimatedPercentile,
      timeSpentMins,
      subjectBreakdown,
      timeTraps,
      rushedErrors,
    };
  }, [paper, attempt]);

  // Evaluated question list
  const evaluatedQuestions = useMemo(() => {
    const list: Array<{
      question: Question;
      userAnswer: any;
      isCorrect: boolean;
      status: 'CORRECT' | 'INCORRECT' | 'UNATTEMPTED';
      timeSpent: number;
    }> = [];

    paper.sections.forEach((sec) => {
      sec.questions.forEach((q) => {
        const userAnswer = attempt.answers[q.id];
        const hasAnswer = userAnswer !== undefined && userAnswer !== '';
        const timeSpent = attempt.timeSpentSeconds[q.id] || 0;

        let isCorrect = false;
        if (hasAnswer && q.correctAnswer) {
          if (q.type === 'MULTIPLE_CORRECT') {
            const correctSet = q.correctAnswer
              .split(',')
              .map((s) => s.trim())
              .sort();
            const userSet = Array.isArray(userAnswer)
              ? [...userAnswer].sort()
              : [userAnswer];
            isCorrect = JSON.stringify(correctSet) === JSON.stringify(userSet);
          } else if (q.type === 'NUMERICAL') {
            const userNum = parseFloat(userAnswer);
            const correctNum = parseFloat(q.correctAnswer);
            if (!isNaN(userNum) && !isNaN(correctNum)) {
              isCorrect = Math.abs(userNum - correctNum) < 0.05;
            } else {
              isCorrect = userAnswer.toString().trim() === q.correctAnswer.trim();
            }
          } else {
            isCorrect =
              userAnswer.toString().trim().toUpperCase() ===
              q.correctAnswer.trim().toUpperCase();
          }
        }

        const status = !hasAnswer
          ? 'UNATTEMPTED'
          : isCorrect
          ? 'CORRECT'
          : 'INCORRECT';

        list.push({
          question: q,
          userAnswer,
          isCorrect,
          status,
          timeSpent,
        });
      });
    });

    return list;
  }, [paper, attempt]);

  const filteredQuestions = useMemo(() => {
    if (filter === 'ALL') return evaluatedQuestions;
    return evaluatedQuestions.filter((item) => item.status === filter);
  }, [evaluatedQuestions, filter]);

  const toggleQuestionExpand = (qId: string) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  // Trigger Remedial PYQ generation from server
  const handleLaunchRemedialDrill = async (
    q: Question,
    userAnswer: any,
    reason: MistakeReason = 'CONCEPT_GAP'
  ) => {
    setIsLoadingRemedial(true);
    setRemedialPack(null);

    try {
      const response = await fetch('/api/generate-remedial-pyqs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          promptLatex: q.promptLatex,
          sectionId: q.sectionId,
          pattern: paper.pattern,
          missedReason: reason,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate remedial questions');
      }

      const resData = await response.json();
      if (resData.success && resData.data) {
        setRemedialPack(resData.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoadingRemedial(false);
    }
  };

  // Classify mistake handler
  const handleTagMistake = (
    q: Question,
    userAnswer: any,
    reason: MistakeReason,
    timeSpent: number
  ) => {
    setSelectedReasons((prev) => ({ ...prev, [q.id]: reason }));
    onLogMistake(q, userAnswer, q.correctAnswer || '', reason, timeSpent);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToHub}
            className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Test Hub
          </button>

          <button
            onClick={onRetake}
            className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-all flex items-center gap-1.5 active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Re-attempt Test
          </button>
        </div>

        {/* 1. HERO ANALYTICS SCORECARD */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase">
                <Trophy className="w-4 h-4 text-amber-400" />
                MathonGo CBT Performance Analysis
              </div>
              <h1 className="text-2xl md:text-3xl font-bold font-display mt-1">
                {paper.title}
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Submitted on {new Date(attempt.submittedAt).toLocaleDateString()}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 text-center shrink-0">
              <div className="text-xs text-slate-300 uppercase font-medium tracking-wider">
                Total Score
              </div>
              <div className="text-3xl md:text-4xl font-extrabold font-mono text-emerald-400 mt-0.5">
                {analytics.totalScore}{' '}
                <span className="text-lg font-normal text-slate-400">
                  / {paper.totalMarks}
                </span>
              </div>
              <div className="text-[11px] text-amber-300 mt-1 font-semibold">
                Est. Percentile: {analytics.estimatedPercentile}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 block">Accuracy</span>
              <span className="text-xl font-bold font-mono text-white">
                {analytics.accuracy}%
              </span>
            </div>
            <div>
              <span className="text-slate-400 block">Questions Attempted</span>
              <span className="text-xl font-bold font-mono text-white">
                {analytics.totalAttempted} / {evaluatedQuestions.length}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block">Correct / Incorrect</span>
              <span className="text-xl font-bold font-mono text-white">
                <span className="text-emerald-400">{analytics.correctCount}</span> /{' '}
                <span className="text-rose-400">{analytics.incorrectCount}</span>
              </span>
            </div>
            <div>
              <span className="text-slate-400 block">Total Time Spent</span>
              <span className="text-xl font-bold font-mono text-white">
                {analytics.timeSpentMins}m / {paper.durationMinutes}m
              </span>
            </div>
          </div>
        </div>

        {/* 2. TIME TRAP & NEGATIVE MARKING RADAR */}
        {(analytics.timeTraps.length > 0 || analytics.rushedErrors.length > 0) && (
          <div className="bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 rounded-2xl p-5 md:p-6 space-y-4">
            <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold text-sm">
              <Zap className="w-4 h-4 text-amber-600" />
              Exam Temperament & Time Trap Radar:
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Severe Time Sinks */}
              {analytics.timeTraps.length > 0 && (
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-900/40 space-y-2">
                  <span className="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Time Sinks ({analytics.timeTraps.length} Questions)
                  </span>
                  <p className="text-slate-600 dark:text-slate-300">
                    Questions where you spent more than 3.5 minutes and either received -1 or left them unattempted:
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {analytics.timeTraps.map((tt) => (
                      <span
                        key={tt.q.id}
                        className="px-2.5 py-1 rounded-md bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 font-mono text-[11px] border border-rose-200 dark:border-rose-800"
                      >
                        Q.{tt.q.questionNumber} ({Math.round(tt.timeSpent / 60)}m {tt.timeSpent % 60}s)
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Rushed Errors */}
              {analytics.rushedErrors.length > 0 && (
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-900/40 space-y-2">
                  <span className="font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Rushed Silly Mistakes ({analytics.rushedErrors.length} Questions)
                  </span>
                  <p className="text-slate-600 dark:text-slate-300">
                    Questions answered in less than 35 seconds and gotten wrong. Slowing down by 15s could have saved +5 marks (+4 instead of -1):
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {analytics.rushedErrors.map((re) => (
                      <span
                        key={re.q.id}
                        className="px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 font-mono text-[11px] border border-amber-200 dark:border-amber-800"
                      >
                        Q.{re.q.questionNumber} ({re.timeSpent}s)
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 3. SUBJECT-WISE SCORE CARD */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white">
            Subject-Wise Score Card
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(analytics.subjectBreakdown).map(([secId, secData]) => {
              const secAccuracy =
                secData.correct + secData.incorrect > 0
                  ? Math.round(
                      (secData.correct / (secData.correct + secData.incorrect)) * 100
                    )
                  : 0;

              return (
                <div
                  key={secId}
                  className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-xs flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      {secData.name}
                    </span>
                    <span className="text-lg font-extrabold font-mono text-indigo-600 dark:text-indigo-400">
                      {secData.score} Marks
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs my-4 py-2 bg-slate-50 dark:bg-slate-900/60 rounded-lg">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Correct</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">
                        {secData.correct}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Wrong</span>
                      <span className="font-bold text-rose-500">
                        {secData.incorrect}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Left</span>
                      <span className="font-bold text-slate-500">
                        {secData.unattempted}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-700">
                    <span>Accuracy: {secAccuracy}%</span>
                    <span>Time: {Math.round(secData.timeSpent / 60)} mins</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. QUESTION-BY-QUESTION DETAILED REVIEW */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-bold font-display text-slate-900 dark:text-white">
              Question-by-Question Detailed Review
            </h2>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-200 dark:bg-slate-800 rounded-lg text-xs font-semibold">
              <button
                onClick={() => setFilter('ALL')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  filter === 'ALL'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                All ({evaluatedQuestions.length})
              </button>
              <button
                onClick={() => setFilter('CORRECT')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  filter === 'CORRECT'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
                }`}
              >
                Correct ({analytics.correctCount})
              </button>
              <button
                onClick={() => setFilter('INCORRECT')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  filter === 'INCORRECT'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40'
                }`}
              >
                Incorrect ({analytics.incorrectCount})
              </button>
              <button
                onClick={() => setFilter('UNATTEMPTED')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  filter === 'UNATTEMPTED'
                    ? 'bg-slate-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Unattempted ({analytics.unattemptedCount})
              </button>
            </div>
          </div>

          {/* Question List */}
          <div className="space-y-4">
            {filteredQuestions.map(
              ({ question: q, userAnswer, isCorrect, status, timeSpent }) => {
                const isExpanded = !!expandedQuestions[q.id];
                const selectedReason = selectedReasons[q.id];

                return (
                  <div
                    key={q.id}
                    className={`bg-white dark:bg-slate-800 rounded-xl border transition-all ${
                      status === 'CORRECT'
                        ? 'border-emerald-200 dark:border-emerald-900/40'
                        : status === 'INCORRECT'
                        ? 'border-rose-200 dark:border-rose-900/40'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {/* Summary Bar */}
                    <div
                      onClick={() => toggleQuestionExpand(q.id)}
                      className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-750 rounded-xl transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs text-white shrink-0 ${
                            status === 'CORRECT'
                              ? 'bg-emerald-600'
                              : status === 'INCORRECT'
                              ? 'bg-rose-500'
                              : 'bg-slate-400'
                          }`}
                        >
                          {q.questionNumber}
                        </span>

                        <div>
                          <div className="text-xs font-semibold text-slate-500 uppercase">
                            {q.sectionId} • {q.type.replace('_', ' ')}
                          </div>
                          <div className="text-xs font-medium text-slate-800 dark:text-slate-200 line-clamp-1 mt-0.5">
                            {q.promptLatex.slice(0, 100)}...
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 md:gap-4 text-xs font-mono">
                        <span className="text-slate-500 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {timeSpent}s
                        </span>

                        <span
                          className={`px-2.5 py-1 rounded font-bold uppercase text-[10px] ${
                            status === 'CORRECT'
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                              : status === 'INCORRECT'
                              ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                              : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {status}
                        </span>

                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                    </div>

                    {/* Expanded details */}
                    {isExpanded && (
                      <div className="p-5 border-t border-slate-100 dark:border-slate-700 space-y-4 text-sm bg-slate-50/50 dark:bg-slate-900/30">
                        {/* Prompt */}
                        <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                          <MathRenderer content={q.promptLatex} />
                        </div>

                        {/* Options */}
                        {q.options && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                            {q.options.map((opt) => {
                              const isUserChoice =
                                Array.isArray(userAnswer)
                                  ? userAnswer.includes(opt.id)
                                  : userAnswer === opt.id;
                              const isCorrectChoice =
                                q.correctAnswer &&
                                q.correctAnswer.split(',').includes(opt.id);

                              return (
                                <div
                                  key={opt.id}
                                  className={`p-2.5 rounded-lg border flex items-center gap-2 ${
                                    isCorrectChoice
                                      ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-400 text-emerald-900 dark:text-emerald-200 font-semibold'
                                      : isUserChoice
                                      ? 'bg-rose-50 dark:bg-rose-950/30 border-rose-400 text-rose-900 dark:text-rose-200'
                                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                                  }`}
                                >
                                  <span className="font-bold">{opt.id}.</span>
                                  <MathRenderer content={opt.labelLatex} />
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Comparison */}
                        <div className="flex flex-wrap items-center gap-4 text-xs font-mono bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                          <div>
                            <span className="text-slate-500">Your Answer: </span>
                            <strong
                              className={
                                isCorrect ? 'text-emerald-600' : 'text-rose-600'
                              }
                            >
                              {userAnswer
                                ? JSON.stringify(userAnswer)
                                : 'Not Attempted'}
                            </strong>
                          </div>
                          <div>
                            <span className="text-slate-500">Correct: </span>
                            <strong className="text-emerald-600">
                              {q.correctAnswer || 'Not Specified'}
                            </strong>
                          </div>
                          <div>
                            <span className="text-slate-500">Marks: </span>
                            <strong>
                              {status === 'CORRECT'
                                ? `+${q.positiveMarks}`
                                : status === 'INCORRECT'
                                ? `-${q.negativeMarks}`
                                : '0'}
                            </strong>
                          </div>
                        </div>

                        {/* Step-by-Step Solution */}
                        {q.explanationLatex && (
                          <div className="p-4 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/50 text-xs">
                            <div className="font-bold text-indigo-900 dark:text-indigo-200 mb-1.5 flex items-center gap-1.5">
                              <Flame className="w-3.5 h-3.5 text-indigo-600" />
                              Official Step-by-Step Solution:
                            </div>
                            <div className="leading-relaxed text-slate-800 dark:text-slate-200">
                              <MathRenderer content={q.explanationLatex} />
                            </div>
                          </div>
                        )}

                        {/* Root-Cause Classification & AI Remedial Practice */}
                        {status !== 'CORRECT' && (
                          <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                                <BookmarkPlus className="w-3.5 h-3.5 text-indigo-500" />
                                Add to Mistake Book (Select Root Cause):
                              </div>

                              <button
                                onClick={() =>
                                  handleLaunchRemedialDrill(
                                    q,
                                    userAnswer,
                                    selectedReason || 'CONCEPT_GAP'
                                  )
                                }
                                className="px-3.5 py-1.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-lg shadow-xs transition-all flex items-center gap-1.5"
                              >
                                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                                Practice 3 Similar JEE PYQs (AI Drill)
                              </button>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              <button
                                onClick={() =>
                                  handleTagMistake(
                                    q,
                                    userAnswer,
                                    'CALCULATION_ERROR',
                                    timeSpent
                                  )
                                }
                                className={`p-2 text-xs font-medium rounded-lg border text-left transition-all ${
                                  selectedReason === 'CALCULATION_ERROR'
                                    ? 'bg-amber-100 border-amber-400 text-amber-900 font-bold dark:bg-amber-950/60 dark:text-amber-200'
                                    : 'bg-slate-50 dark:bg-slate-700/60 border-slate-200 dark:border-slate-600 hover:bg-slate-100'
                                }`}
                              >
                                🔴 Silly / Calc Error
                              </button>

                              <button
                                onClick={() =>
                                  handleTagMistake(
                                    q,
                                    userAnswer,
                                    'CONCEPT_GAP',
                                    timeSpent
                                  )
                                }
                                className={`p-2 text-xs font-medium rounded-lg border text-left transition-all ${
                                  selectedReason === 'CONCEPT_GAP'
                                    ? 'bg-rose-100 border-rose-400 text-rose-900 font-bold dark:bg-rose-950/60 dark:text-rose-200'
                                    : 'bg-slate-50 dark:bg-slate-700/60 border-slate-200 dark:border-slate-600 hover:bg-slate-100'
                                }`}
                              >
                                🟡 Concept Gap / Formula
                              </button>

                              <button
                                onClick={() =>
                                  handleTagMistake(
                                    q,
                                    userAnswer,
                                    'MISREAD_QUESTION',
                                    timeSpent
                                  )
                                }
                                className={`p-2 text-xs font-medium rounded-lg border text-left transition-all ${
                                  selectedReason === 'MISREAD_QUESTION'
                                    ? 'bg-purple-100 border-purple-400 text-purple-900 font-bold dark:bg-purple-950/60 dark:text-purple-200'
                                    : 'bg-slate-50 dark:bg-slate-700/60 border-slate-200 dark:border-slate-600 hover:bg-slate-100'
                                }`}
                              >
                                🟣 Misread Question
                              </button>

                              <button
                                onClick={() =>
                                  handleTagMistake(
                                    q,
                                    userAnswer,
                                    'TIME_PRESSURE',
                                    timeSpent
                                  )
                                }
                                className={`p-2 text-xs font-medium rounded-lg border text-left transition-all ${
                                  selectedReason === 'TIME_PRESSURE'
                                    ? 'bg-blue-100 border-blue-400 text-blue-900 font-bold dark:bg-blue-950/60 dark:text-blue-200'
                                    : 'bg-slate-50 dark:bg-slate-700/60 border-slate-200 dark:border-slate-600 hover:bg-slate-100'
                                }`}
                              >
                                🔵 Time Pressure / Guess
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      {/* Remedial Practice Modal */}
      <RemedialPracticeModal
        pack={remedialPack}
        isLoading={isLoadingRemedial}
        onClose={() => {
          setRemedialPack(null);
          setIsLoadingRemedial(false);
        }}
      />
    </div>
  );
};
