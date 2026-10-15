import React, { useState } from 'react';
import {
  Question,
  QuestionTag,
  SubjectId,
  TaggedQuestionEntry,
  ExamPaper,
  DailyRoutineItem,
} from '../types/exam';
import { MathRenderer } from './MathRenderer';
import {
  HelpCircle,
  Flame,
  Zap,
  Star,
  Play,
  Calendar,
  Sparkles,
  Layers,
  Clock,
  RotateCcw,
  CheckCircle2,
  Trash2,
  Filter,
  Check,
  Bot,
  Award,
} from 'lucide-react';

interface RaceQuestionBankProps {
  taggedQuestions: TaggedQuestionEntry[];
  onStartExam: (paper: ExamPaper) => void;
  onRemoveTaggedQuestion: (id: string) => void;
  onUpdateTags: (id: string, tags: QuestionTag[]) => void;
  onScheduleRaceSession: (item: DailyRoutineItem) => void;
  onOpenAIMentorWithPrompt: (prompt: string) => void;
}

export const RaceQuestionBank: React.FC<RaceQuestionBankProps> = ({
  taggedQuestions,
  onStartExam,
  onRemoveTaggedQuestion,
  onUpdateTags,
  onScheduleRaceSession,
  onOpenAIMentorWithPrompt,
}) => {
  const [selectedTagFilter, setSelectedTagFilter] = useState<QuestionTag | 'ALL'>('ALL');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<SubjectId | 'ALL'>('ALL');
  const [drillSize, setDrillSize] = useState<number>(15);
  const [drillDuration, setDrillDuration] = useState<number>(30);

  // Filtered entries
  const filteredEntries = taggedQuestions.filter((item) => {
    const matchesTag =
      selectedTagFilter === 'ALL' ? true : item.tags.includes(selectedTagFilter);
    const matchesSub =
      selectedSubjectFilter === 'ALL' ? true : item.subject === selectedSubjectFilter;
    return matchesTag && matchesSub;
  });

  // Counts by tag
  const totalCount = taggedQuestions.length;
  const doubtCount = taggedQuestions.filter((q) => q.tags.includes('DOUBT')).length;
  const hardCount = taggedQuestions.filter((q) => q.tags.includes('HARD')).length;
  const trickyCount = taggedQuestions.filter((q) => q.tags.includes('TRICKY')).length;
  const starCount = taggedQuestions.filter((q) => q.tags.includes('RACE_STAR')).length;

  // Build a custom CBT Exam Paper from tagged questions for instant timed practice!
  const handleLaunchRaceDrill = () => {
    if (filteredEntries.length === 0) {
      alert('No tagged questions match your current filter. Tag questions during tests or sprints first!');
      return;
    }

    const questionsToInclude = filteredEntries
      .slice(0, drillSize)
      .map((entry, idx) => ({
        ...entry.question,
        questionNumber: idx + 1,
      }));

    // Group into physics, chemistry, mathematics sections
    const secPhys = questionsToInclude.filter((q) => q.sectionId === 'physics');
    const secChem = questionsToInclude.filter((q) => q.sectionId === 'chemistry');
    const secMath = questionsToInclude.filter((q) => q.sectionId === 'mathematics');

    const sections = [];
    if (secPhys.length) sections.push({ id: 'physics' as SubjectId, name: 'Physics', questions: secPhys });
    if (secChem.length) sections.push({ id: 'chemistry' as SubjectId, name: 'Chemistry', questions: secChem });
    if (secMath.length) sections.push({ id: 'mathematics' as SubjectId, name: 'Mathematics', questions: secMath });

    // Fallback if all in one subject
    if (!sections.length) {
      sections.push({
        id: 'physics' as SubjectId,
        name: 'Mixed RACE Drill',
        questions: questionsToInclude,
      });
    }

    const racePaper: ExamPaper = {
      id: `race-drill-${Date.now()}`,
      title: `Allen RACE Daily Drill (Repeat & Consolidate #0${Math.floor(Math.random() * 90) + 10})`,
      pattern: 'JEE_MAIN',
      durationMinutes: drillDuration,
      totalMarks: questionsToInclude.length * 4,
      sections,
      createdAt: new Date().toISOString(),
    };

    onStartExam(racePaper);
  };

  // Schedule RACE Drill into Daily Checklist (e.g. today at 7pm)
  const handleScheduleRaceDrill = () => {
    if (filteredEntries.length === 0) {
      alert('No questions available to schedule.');
      return;
    }

    const questionsToInclude = filteredEntries
      .slice(0, drillSize)
      .map((entry, idx) => ({
        ...entry.question,
        questionNumber: idx + 1,
      }));

    const racePaper: ExamPaper = {
      id: `race-paper-${Date.now()}`,
      title: `Allen RACE Repeat Drill (${questionsToInclude.length} Key Qs)`,
      pattern: 'JEE_MAIN',
      durationMinutes: drillDuration,
      totalMarks: questionsToInclude.length * 4,
      sections: [
        {
          id: 'physics',
          name: 'RACE Revision',
          questions: questionsToInclude,
        },
      ],
    };

    const newRoutineItem: DailyRoutineItem = {
      id: `rout-race-${Date.now()}`,
      type: 'MODULE_PRACTICE',
      title: `Allen RACE Daily Repeat Drill (${questionsToInclude.length} Best Qs)`,
      chapterOrTopic: 'Repetition of Hard, Doubt & Tricky Questions',
      subject: 'physics',
      scheduledDate: new Date().toISOString().split('T')[0],
      scheduledSlot: '19:00 - 20:00',
      durationMinutes: drillDuration,
      questionCount: questionsToInclude.length,
      paperId: racePaper.id,
      paper: racePaper,
      isCompleted: false,
      weekNumber: 1,
      dayName: 'Today',
    };

    onScheduleRaceSession(newRoutineItem);
    alert('RACE Daily Drill has been scheduled to Today\'s Live Desk (19:00 - 20:00)!');
  };

  return (
    <div className="space-y-8">
      {/* 1. HERO BANNER: Allen RACE Concept */}
      <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 md:p-8 border border-purple-800 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            Allen RACE & Doubt Question Bank
          </div>

          <h2 className="text-xl md:text-3xl font-extrabold font-display text-white">
            Regular Analysis through Continuous Exercises (RACE)
          </h2>

          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            Every question you tag as <strong>Doubt, Hard, Tricky, or RACE Star</strong> during test series and module practice sessions is consolidated here. Practice them again and again in timed CBT test format so you never forget derivations, formulas, and tricky problem-solving mechanisms.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleLaunchRaceDrill}
              className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 active:scale-95 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" />
              Launch Timed RACE Drill in CBT Mode
            </button>

            <button
              onClick={handleScheduleRaceDrill}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-xs font-bold transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Schedule Daily RACE Slot (7–8 PM)
            </button>

            <button
              onClick={() =>
                onOpenAIMentorWithPrompt(
                  `I have ${totalCount} saved questions in my Allen RACE & Doubt Bank (${doubtCount} Doubts, ${hardCount} Hard, ${trickyCount} Tricky). Please construct an authentic 3-hour Sunday test using these exact hard and tricky questions, and arrange 2 daily 45-minute practice sessions this week to resolve the doubts.`
                )
              }
              className="px-4 py-2.5 bg-indigo-600/60 hover:bg-indigo-600 text-indigo-200 hover:text-white border border-indigo-400/40 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <Bot className="w-4 h-4" />
              Command AI to Build Test From These
            </button>
          </div>
        </div>
      </div>

      {/* 2. STAT PILLS & DRILL CONFIGURATOR */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div
          onClick={() => setSelectedTagFilter('DOUBT')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
            selectedTagFilter === 'DOUBT'
              ? 'bg-amber-500/10 border-amber-500 ring-2 ring-amber-500/30'
              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-amber-400'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-500 uppercase">Doubts</span>
            <HelpCircle className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white mt-1">
            {doubtCount}
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">Unclear concepts to resolve</div>
        </div>

        <div
          onClick={() => setSelectedTagFilter('HARD')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
            selectedTagFilter === 'HARD'
              ? 'bg-rose-500/10 border-rose-500 ring-2 ring-rose-500/30'
              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-rose-400'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-rose-500 uppercase">Hard</span>
            <Flame className="w-4 h-4 text-rose-500" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white mt-1">
            {hardCount}
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">High-difficulty challenges</div>
        </div>

        <div
          onClick={() => setSelectedTagFilter('TRICKY')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
            selectedTagFilter === 'TRICKY'
              ? 'bg-purple-500/10 border-purple-500 ring-2 ring-purple-500/30'
              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-purple-400'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-purple-500 uppercase">Tricky</span>
            <Zap className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white mt-1">
            {trickyCount}
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">Trap mechanisms & catches</div>
        </div>

        <div
          onClick={() => setSelectedTagFilter('RACE_STAR')}
          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
            selectedTagFilter === 'RACE_STAR'
              ? 'bg-emerald-500/10 border-emerald-500 ring-2 ring-emerald-500/30'
              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-500 uppercase">RACE Star</span>
            <Star className="w-4 h-4 text-emerald-500 fill-current" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white mt-1">
            {starCount}
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">Must-repeat derivations</div>
        </div>
      </div>

      {/* 3. DRILL CONTROLS & FILTER BAR */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 md:p-6 border border-slate-200 dark:border-slate-700 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Tag:
          </span>

          {(['ALL', 'DOUBT', 'HARD', 'TRICKY', 'RACE_STAR'] as const).map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTagFilter(tag)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                selectedTagFilter === tag
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
              }`}
            >
              {tag === 'ALL'
                ? 'All Tags'
                : tag === 'RACE_STAR'
                ? 'RACE Star'
                : tag}
            </button>
          ))}

          <span className="text-xs font-semibold text-slate-400 mx-2">|</span>

          {(['ALL', 'physics', 'chemistry', 'mathematics'] as const).map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubjectFilter(sub)}
              className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-all ${
                selectedSubjectFilter === sub
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
              }`}
            >
              {sub === 'ALL' ? 'All Subjects' : sub}
            </button>
          ))}
        </div>

        {/* Drill Settings */}
        <div className="flex items-center gap-3 text-xs shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 font-medium">Questions:</span>
            <select
              value={drillSize}
              onChange={(e) => setDrillSize(parseInt(e.target.value, 10))}
              className="px-2.5 py-1 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 font-bold"
            >
              <option value={10}>10 Qs</option>
              <option value={15}>15 Qs</option>
              <option value={20}>20 Qs</option>
              <option value={25}>25 Qs</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 font-medium">Timer:</span>
            <select
              value={drillDuration}
              onChange={(e) => setDrillDuration(parseInt(e.target.value, 10))}
              className="px-2.5 py-1 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 font-bold"
            >
              <option value={25}>25 Mins</option>
              <option value={30}>30 Mins</option>
              <option value={45}>45 Mins</option>
              <option value={60}>60 Mins</option>
            </select>
          </div>

          <button
            onClick={handleLaunchRaceDrill}
            disabled={filteredEntries.length === 0}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 active:scale-95 text-white rounded-xl font-bold transition-all disabled:opacity-50 flex items-center gap-1.5"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            Start Drill
          </button>
        </div>
      </div>

      {/* 4. QUESTION LIST */}
      {filteredEntries.length === 0 ? (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-10 border border-slate-200 dark:border-slate-700 text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto">
            <Award className="w-6 h-6" />
          </div>
          <h4 className="text-base font-bold font-display text-slate-800 dark:text-slate-200">
            No questions tagged in this category yet!
          </h4>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            While taking any practice sprint or CBT mock test, click <strong>Doubt</strong>, <strong>Hard</strong>, <strong>Tricky</strong>, or <strong>RACE Star</strong> on the top bar. They will automatically be stored here for daily repetition.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="text-xs font-semibold text-slate-500 flex items-center justify-between">
            <span>Showing {filteredEntries.length} Tagged Questions:</span>
            <span>Repetition builds speed & accuracy</span>
          </div>

          <div className="space-y-4">
            {filteredEntries.map((entry) => (
              <div
                key={entry.id}
                className="bg-white dark:bg-slate-800 rounded-2xl p-5 md:p-6 border border-slate-200 dark:border-slate-700 shadow-xs space-y-4 hover:border-purple-300 dark:hover:border-purple-800 transition-all"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700 pb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      {entry.subject}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500 font-medium">
                      From: {entry.examTitle}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 font-mono text-slate-600 dark:text-slate-300">
                      Q{entry.question.questionNumber} ({entry.question.type})
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                          tag === 'HARD'
                            ? 'bg-rose-500/20 text-rose-500'
                            : tag === 'TRICKY'
                            ? 'bg-purple-500/20 text-purple-400'
                            : tag === 'RACE_STAR'
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'bg-amber-500/20 text-amber-400'
                        }`}
                      >
                        {tag === 'HARD' && <Flame className="w-3 h-3" />}
                        {tag === 'TRICKY' && <Zap className="w-3 h-3" />}
                        {tag === 'RACE_STAR' && <Star className="w-3 h-3 fill-current" />}
                        {tag === 'DOUBT' && <HelpCircle className="w-3 h-3" />}
                        {tag === 'RACE_STAR' ? 'RACE Star' : tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Prompt */}
                <div className="text-sm md:text-base leading-relaxed text-slate-900 dark:text-slate-100">
                  <MathRenderer content={entry.question.promptLatex} />
                </div>

                {/* Options if MCQ */}
                {entry.question.options && entry.question.options.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {entry.question.options.map((opt) => (
                      <div
                        key={opt.id}
                        className="p-2.5 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 text-xs flex items-center gap-2"
                      >
                        <span className="font-bold text-slate-500">{opt.id}.</span>
                        <MathRenderer content={opt.labelLatex} />
                      </div>
                    ))}
                  </div>
                )}

                {/* Actions & Repetition Counter */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-500">
                    <span className="font-mono">
                      Repetition Count: <strong>{entry.practiceCount || 1}x</strong>
                    </span>
                    {entry.correctAnswer && (
                      <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-bold font-mono text-[11px]">
                        Correct: {entry.correctAnswer}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        const singlePaper: ExamPaper = {
                          id: `single-resolve-${Date.now()}`,
                          title: `Re-Solving Q${entry.question.questionNumber} (${entry.subject})`,
                          pattern: 'JEE_MAIN',
                          durationMinutes: 5,
                          totalMarks: 4,
                          sections: [
                            {
                              id: entry.subject,
                              name: entry.subject,
                              questions: [{ ...entry.question, questionNumber: 1 }],
                            },
                          ],
                        };
                        onStartExam(singlePaper);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all flex items-center gap-1.5 shadow-xs"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Re-solve Now (5m)
                    </button>

                    <button
                      onClick={() => onRemoveTaggedQuestion(entry.id)}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-rose-50 text-slate-500 hover:text-rose-600 dark:bg-slate-700 dark:hover:bg-rose-950 dark:hover:text-rose-400 font-semibold transition-all flex items-center gap-1"
                      title="Mastered this question (Remove from bank)"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Mastered</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
