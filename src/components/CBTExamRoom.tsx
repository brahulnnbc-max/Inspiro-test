import React, { useState, useEffect, useMemo } from 'react';
import {
  ExamPaper,
  Question,
  QuestionStatus,
  StudentAttempt,
  SubjectId,
  UIMode,
  QuestionTag,
} from '../types/exam';
import { MathRenderer } from './MathRenderer';
import { NumericalKeypad } from './NumericalKeypad';
import { ScratchpadModal } from './ScratchpadModal';
import {
  Clock,
  User,
  Monitor,
  FileText,
  HelpCircle,
  Edit3,
  CheckCircle2,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Menu,
  X,
  Grid,
  Star,
  Zap,
  Flame,
} from 'lucide-react';

interface CBTExamRoomProps {
  paper: ExamPaper;
  initialMode?: UIMode;
  onSubmitExam: (attempt: StudentAttempt) => void;
  onExit: () => void;
  onToggleTag?: (question: Question, tag: QuestionTag) => void;
}

export const CBTExamRoom: React.FC<CBTExamRoomProps> = ({
  paper,
  initialMode = 'MATHANGO',
  onSubmitExam,
  onExit,
  onToggleTag,
}) => {
  // Mode toggle: Official NTA vs Modern MathonGo
  const [uiMode, setUiMode] = useState<UIMode>(initialMode);
  // Day / Night mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Active section & question indices
  const [activeSectionId, setActiveSectionId] = useState<SubjectId>(
    paper.sections[0]?.id || 'physics'
  );
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  // Examination state
  const [secondsRemaining, setSecondsRemaining] = useState(
    paper.durationMinutes * 60
  );
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [statuses, setStatuses] = useState<Record<string, QuestionStatus>>({});
  const [timeSpent, setTimeSpent] = useState<Record<string, number>>({});
  const [startedAt] = useState<number>(Date.now());
  const [questionTags, setQuestionTags] = useState<Record<string, QuestionTag[]>>({});

  const handleToggleTag = (tag: QuestionTag) => {
    if (!currentQuestion) return;
    setQuestionTags((prev) => {
      const currentTags = prev[currentQuestion.id] || [];
      const updated = currentTags.includes(tag)
        ? currentTags.filter((t) => t !== tag)
        : [...currentTags, tag];
      return { ...prev, [currentQuestion.id]: updated };
    });
    if (onToggleTag && currentQuestion) {
      onToggleTag(currentQuestion, tag);
    }
  };

  // UI modals & Mobile Drawer
  const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
  const [isQuestionPaperModalOpen, setIsQuestionPaperModalOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(false);
  const [isMobilePaletteOpen, setIsMobilePaletteOpen] = useState(false);

  // Active section reference
  const currentSection = useMemo(() => {
    return (
      paper.sections.find((s) => s.id === activeSectionId) ||
      paper.sections[0]
    );
  }, [paper.sections, activeSectionId]);

  // Active question reference
  const currentQuestion: Question | undefined = useMemo(() => {
    return currentSection?.questions[activeQuestionIndex];
  }, [currentSection, activeQuestionIndex]);

  // Initialize questions as NOT_VISITED except the initial one (NOT_ANSWERED)
  useEffect(() => {
    const initialStatuses: Record<string, QuestionStatus> = {};
    paper.sections.forEach((sec) => {
      sec.questions.forEach((q) => {
        initialStatuses[q.id] = 'NOT_VISITED';
      });
    });

    const firstQ = paper.sections[0]?.questions[0];
    if (firstQ) {
      initialStatuses[firstQ.id] = 'NOT_ANSWERED';
    }
    setStatuses(initialStatuses);
  }, [paper]);

  // Track time spent per active question & overall countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinalSubmit();
          return 0;
        }
        return prev - 1;
      });

      if (currentQuestion) {
        setTimeSpent((prev) => ({
          ...prev,
          [currentQuestion.id]: (prev[currentQuestion.id] || 0) + 1,
        }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion]);

  // Format seconds into HH:MM:SS
  const formattedTimer = useMemo(() => {
    const hrs = Math.floor(secondsRemaining / 3600);
    const mins = Math.floor((secondsRemaining % 3600) / 60);
    const secs = secondsRemaining % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, [secondsRemaining]);

  // Move to a question and update visited status
  const navigateToQuestion = (secId: SubjectId, qIndex: number) => {
    const targetSection = paper.sections.find((s) => s.id === secId);
    if (!targetSection) return;
    const targetQ = targetSection.questions[qIndex];
    if (!targetQ) return;

    setActiveSectionId(secId);
    setActiveQuestionIndex(qIndex);
    setIsMobilePaletteOpen(false); // Close mobile drawer when selecting

    // If currently NOT_VISITED, change to NOT_ANSWERED
    setStatuses((prev) => {
      if (!prev[targetQ.id] || prev[targetQ.id] === 'NOT_VISITED') {
        return { ...prev, [targetQ.id]: 'NOT_ANSWERED' };
      }
      return prev;
    });
  };

  // Action: Save & Next
  const handleSaveAndNext = () => {
    if (!currentQuestion) return;
    const hasAnswer =
      answers[currentQuestion.id] !== undefined &&
      answers[currentQuestion.id] !== '';

    setStatuses((prev) => ({
      ...prev,
      [currentQuestion.id]: hasAnswer ? 'ANSWERED' : 'NOT_ANSWERED',
    }));

    goToNextQuestion();
  };

  // Action: Save & Mark for Review
  const handleSaveAndMarkForReview = () => {
    if (!currentQuestion) return;
    const hasAnswer =
      answers[currentQuestion.id] !== undefined &&
      answers[currentQuestion.id] !== '';

    setStatuses((prev) => ({
      ...prev,
      [currentQuestion.id]: hasAnswer
        ? 'ANSWERED_AND_MARKED_FOR_REVIEW'
        : 'MARKED_FOR_REVIEW',
    }));

    goToNextQuestion();
  };

  // Action: Mark for Review & Next
  const handleMarkForReviewAndNext = () => {
    if (!currentQuestion) return;

    setStatuses((prev) => ({
      ...prev,
      [currentQuestion.id]: 'MARKED_FOR_REVIEW',
    }));

    goToNextQuestion();
  };

  // Action: Clear Response
  const handleClearResponse = () => {
    if (!currentQuestion) return;
    setAnswers((prev) => {
      const updated = { ...prev };
      delete updated[currentQuestion.id];
      return updated;
    });

    setStatuses((prev) => ({
      ...prev,
      [currentQuestion.id]: 'NOT_ANSWERED',
    }));
  };

  // Advance to next question in current section or jump to next section
  const goToNextQuestion = () => {
    if (activeQuestionIndex < currentSection.questions.length - 1) {
      navigateToQuestion(activeSectionId, activeQuestionIndex + 1);
    } else {
      const currSecIdx = paper.sections.findIndex((s) => s.id === activeSectionId);
      if (currSecIdx < paper.sections.length - 1) {
        navigateToQuestion(paper.sections[currSecIdx + 1].id, 0);
      }
    }
  };

  const goToPreviousQuestion = () => {
    if (activeQuestionIndex > 0) {
      navigateToQuestion(activeSectionId, activeQuestionIndex - 1);
    } else {
      const currSecIdx = paper.sections.findIndex((s) => s.id === activeSectionId);
      if (currSecIdx > 0) {
        const prevSec = paper.sections[currSecIdx - 1];
        navigateToQuestion(prevSec.id, prevSec.questions.length - 1);
      }
    }
  };

  // Handle final submission
  const handleFinalSubmit = () => {
    const attempt: StudentAttempt = {
      id: `attempt-${Date.now()}`,
      examId: paper.id,
      examTitle: paper.title,
      pattern: paper.pattern,
      totalMarks: paper.totalMarks,
      startedAt,
      submittedAt: Date.now(),
      timeSpentSeconds: timeSpent,
      answers,
      statuses,
      questionTags,
    };
    setIsSubmitModalOpen(false);
    onSubmitExam(attempt);
  };

  // Status Counts across entire paper
  const overallCounts = useMemo(() => {
    let answered = 0;
    let notAnswered = 0;
    let notVisited = 0;
    let markedReview = 0;
    let answeredMarkedReview = 0;

    paper.sections.forEach((sec) => {
      sec.questions.forEach((q) => {
        const st = statuses[q.id] || 'NOT_VISITED';
        if (st === 'ANSWERED') answered++;
        else if (st === 'NOT_ANSWERED') notAnswered++;
        else if (st === 'MARKED_FOR_REVIEW') markedReview++;
        else if (st === 'ANSWERED_AND_MARKED_FOR_REVIEW') answeredMarkedReview++;
        else notVisited++;
      });
    });

    return {
      answered,
      notAnswered,
      notVisited,
      markedReview,
      answeredMarkedReview,
      total:
        answered + notAnswered + notVisited + markedReview + answeredMarkedReview,
    };
  }, [paper, statuses]);

  // Helper to render question palette button for NTA vs MathonGo
  const renderPaletteButton = (q: Question, idx: number) => {
    const st = statuses[q.id] || 'NOT_VISITED';
    const isCurrent = currentQuestion?.id === q.id;

    const qTags = questionTags[q.id] || [];

    if (uiMode === 'NTA_OFFICIAL') {
      let shapeClass = 'nta-shape-not-visited border border-slate-300';
      if (st === 'NOT_ANSWERED') shapeClass = 'nta-shape-not-answered';
      else if (st === 'ANSWERED') shapeClass = 'nta-shape-answered';
      else if (st === 'MARKED_FOR_REVIEW') shapeClass = 'nta-shape-review';
      else if (st === 'ANSWERED_AND_MARKED_FOR_REVIEW')
        shapeClass = 'nta-shape-answered-review';

      return (
        <button
          key={q.id}
          onClick={() => navigateToQuestion(q.sectionId, idx)}
          className={`w-9 h-9 min-w-[36px] text-xs font-bold flex items-center justify-center relative transition-transform active:scale-95 ${shapeClass} ${
            isCurrent ? 'ring-2 ring-blue-600 ring-offset-2' : ''
          }`}
          title={`Question ${q.questionNumber}: ${st.replace(/_/g, ' ')}${qTags.length ? ` [Tags: ${qTags.join(', ')}]` : ''}`}
        >
          {q.questionNumber}
          {st === 'ANSWERED_AND_MARKED_FOR_REVIEW' && (
            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border border-white flex items-center justify-center text-[7px] text-white">
              ✓
            </span>
          )}
          {qTags.length > 0 && (
            <span
              className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border border-white ${
                qTags.includes('HARD')
                  ? 'bg-rose-500'
                  : qTags.includes('TRICKY')
                  ? 'bg-purple-500'
                  : qTags.includes('RACE_STAR')
                  ? 'bg-emerald-500'
                  : 'bg-amber-400'
              }`}
            />
          )}
        </button>
      );
    }

    // Modern MathonGo / Quizrr Palette
    let bgBadge =
      'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700';
    if (st === 'ANSWERED') {
      bgBadge = 'bg-emerald-600 text-white font-bold shadow-xs border-emerald-600';
    } else if (st === 'NOT_ANSWERED') {
      bgBadge = 'bg-rose-500 text-white font-bold shadow-xs border-rose-500';
    } else if (st === 'MARKED_FOR_REVIEW') {
      bgBadge = 'bg-purple-600 text-white font-bold border-purple-600';
    } else if (st === 'ANSWERED_AND_MARKED_FOR_REVIEW') {
      bgBadge =
        'bg-purple-700 text-white ring-2 ring-emerald-400 font-bold border-purple-700';
    }

    return (
      <button
        key={q.id}
        onClick={() => navigateToQuestion(q.sectionId, idx)}
        className={`w-9 h-9 min-w-[36px] rounded-lg text-xs font-medium border flex items-center justify-center relative transition-all active:scale-95 ${bgBadge} ${
          isCurrent
            ? 'ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-slate-900 scale-105'
            : ''
        }`}
        title={`Question ${q.questionNumber}: ${st.replace(/_/g, ' ')}${qTags.length ? ` [Tags: ${qTags.join(', ')}]` : ''}`}
      >
        {q.questionNumber}
        {qTags.length > 0 && (
          <span
            className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border border-white ${
              qTags.includes('HARD')
                ? 'bg-rose-500'
                : qTags.includes('TRICKY')
                ? 'bg-purple-500'
                : qTags.includes('RACE_STAR')
                ? 'bg-emerald-500'
                : 'bg-amber-400'
            }`}
          />
        )}
      </button>
    );
  };

  // Palette View component (rendered in sidebar on desktop, inside drawer on mobile)
  const PaletteContent = (
    <div className="flex flex-col justify-between h-full p-4 space-y-4">
      <div>
        <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            Question Palette
          </span>
          <span className="text-xs text-slate-500 font-mono">
            {overallCounts.answered} / {overallCounts.total} Ans
          </span>
        </div>

        {/* Legend counts */}
        <div className="grid grid-cols-2 gap-2 text-[11px] my-3">
          <div className="flex items-center gap-2 bg-white dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-800">
            <span className="w-5 h-5 flex items-center justify-center font-bold text-[10px] bg-emerald-600 text-white rounded shrink-0">
              {overallCounts.answered}
            </span>
            <span className="truncate">Answered</span>
          </div>

          <div className="flex items-center gap-2 bg-white dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-800">
            <span className="w-5 h-5 flex items-center justify-center font-bold text-[10px] bg-rose-500 text-white rounded shrink-0">
              {overallCounts.notAnswered}
            </span>
            <span className="truncate">Not Answered</span>
          </div>

          <div className="flex items-center gap-2 bg-white dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-800">
            <span className="w-5 h-5 flex items-center justify-center font-bold text-[10px] bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded shrink-0">
              {overallCounts.notVisited}
            </span>
            <span className="truncate">Not Visited</span>
          </div>

          <div className="flex items-center gap-2 bg-white dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-800">
            <span className="w-5 h-5 flex items-center justify-center font-bold text-[10px] bg-purple-600 text-white rounded shrink-0">
              {overallCounts.markedReview}
            </span>
            <span className="truncate">Review</span>
          </div>

          <div className="col-span-2 flex items-center gap-2 bg-white dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-800">
            <span className="w-5 h-5 flex items-center justify-center font-bold text-[10px] bg-purple-700 ring-1 ring-emerald-400 text-white rounded shrink-0">
              {overallCounts.answeredMarkedReview}
            </span>
            <span className="truncate">Ans & Marked for Review</span>
          </div>
        </div>

        {/* Question Grid */}
        <div className="pt-2">
          <div className="text-xs font-semibold text-slate-500 mb-2 flex items-center justify-between">
            <span>{currentSection.name} Questions:</span>
            <span>{currentSection.questions.length} Total</span>
          </div>

          <div className="grid grid-cols-5 gap-2 max-h-[48vh] overflow-y-auto p-1">
            {currentSection.questions.map((q, idx) =>
              renderPaletteButton(q, idx)
            )}
          </div>
        </div>
      </div>

      <div className="space-y-2 pt-3 border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={() => setIsInstructionsModalOpen(true)}
          className="w-full py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded flex items-center justify-center gap-1.5 transition-colors"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          Instructions
        </button>

        <button
          onClick={() => setIsSubmitModalOpen(true)}
          className="w-full py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded shadow-xs uppercase tracking-wider transition-colors"
        >
          Submit Examination
        </button>
      </div>
    </div>
  );

  return (
    <div
      className={`min-h-screen flex flex-col select-none ${isDarkMode ? 'dark' : ''} ${
        uiMode === 'NTA_OFFICIAL'
          ? isDarkMode
            ? 'bg-slate-950 text-slate-100 font-sans'
            : 'bg-[#eaedf1] text-slate-900 font-sans'
          : isDarkMode
          ? 'bg-slate-950 text-slate-100 font-sans'
          : 'bg-slate-50 text-slate-900 font-sans'
      }`}
    >
      {/* 1. TOP BAR */}
      <header
        className={`px-3 md:px-4 py-2 md:py-2.5 flex items-center justify-between border-b ${
          uiMode === 'NTA_OFFICIAL'
            ? 'bg-[#1b5e20] text-white border-green-800 shadow-xs'
            : 'bg-slate-950 text-white border-slate-800'
        }`}
      >
        {/* Left: Branding & Paper title */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="bg-white/10 px-2 py-0.5 rounded text-[10px] md:text-xs font-bold uppercase tracking-wider shrink-0">
            {uiMode === 'NTA_OFFICIAL' ? 'NTA CBT' : 'MATHANGO'}
          </div>
          <span className="font-bold text-xs md:text-sm truncate max-w-[130px] sm:max-w-xs md:max-w-md">
            {paper.title}
          </span>
        </div>

        {/* Center: Live Timer */}
        <div
          className={`flex items-center gap-1.5 px-2.5 md:px-4 py-1 md:py-1.5 rounded-lg border font-mono font-bold text-xs md:text-base shrink-0 ${
            secondsRemaining < 300
              ? 'bg-rose-600/30 text-rose-300 border-rose-500 animate-pulse'
              : secondsRemaining < 900
              ? 'bg-amber-600/30 text-amber-300 border-amber-500'
              : 'bg-white/10 border-white/20 text-white'
          }`}
        >
          <Clock className="w-3.5 h-3.5 md:w-4 h-4" />
          <span>{formattedTimer}</span>
        </div>

        {/* Right: Quick Tools & Mode/DayNight Toggle */}
        <div className="flex items-center gap-1.5 md:gap-2">
          {/* Day / Night Mode Switcher */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-1.5 md:px-2.5 md:py-1 bg-white/15 hover:bg-white/25 rounded text-xs font-medium flex items-center gap-1 transition-colors"
            title={isDarkMode ? 'Switch to Day Mode' : 'Switch to Night Mode'}
          >
            {isDarkMode ? (
              <Sun className="w-3.5 h-3.5 text-amber-300" />
            ) : (
              <Moon className="w-3.5 h-3.5" />
            )}
            <span className="hidden sm:inline">{isDarkMode ? 'Day' : 'Night'}</span>
          </button>

          {/* Theme switcher */}
          <button
            onClick={() =>
              setUiMode(uiMode === 'NTA_OFFICIAL' ? 'MATHANGO' : 'NTA_OFFICIAL')
            }
            className="px-2 md:px-2.5 py-1 bg-white/15 hover:bg-white/25 rounded text-xs font-medium flex items-center gap-1 transition-colors"
            title="Toggle between NTA Official & MathonGo modern interface"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden md:inline">
              {uiMode === 'NTA_OFFICIAL' ? 'MathonGo' : 'NTA Official'}
            </span>
          </button>

          {/* Rough sheet scratchpad */}
          <button
            onClick={() => setIsScratchpadOpen(true)}
            className="px-2 md:px-2.5 py-1 bg-white/15 hover:bg-white/25 rounded text-xs font-medium flex items-center gap-1 transition-colors"
            title="Open virtual scratchpad for rough work"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Rough Sheet</span>
          </button>

          {/* Mobile Question Palette Drawer Button */}
          <button
            onClick={() => setIsMobilePaletteOpen(true)}
            className="lg:hidden p-1.5 bg-white/15 hover:bg-white/25 rounded text-xs font-medium flex items-center gap-1 transition-colors"
            title="Open Question Palette"
          >
            <Grid className="w-4 h-4 text-emerald-300" />
          </button>
        </div>
      </header>

      {/* 2. SUBJECT TABS & CANDIDATE STRIP */}
      <div
        className={`px-3 md:px-4 py-2 flex flex-wrap items-center justify-between gap-2 border-b ${
          uiMode === 'NTA_OFFICIAL'
            ? isDarkMode
              ? 'bg-slate-900 border-slate-800'
              : 'bg-white border-slate-300'
            : isDarkMode
            ? 'bg-slate-900 border-slate-800'
            : 'bg-white border-slate-200'
        }`}
      >
        {/* Subject Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 max-w-full">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mr-1 hidden sm:inline">
            Sections:
          </span>
          {paper.sections.map((section) => {
            const isActive = section.id === activeSectionId;
            const answeredInSec = section.questions.filter(
              (q) =>
                statuses[q.id] === 'ANSWERED' ||
                statuses[q.id] === 'ANSWERED_AND_MARKED_FOR_REVIEW'
            ).length;

            return (
              <button
                key={section.id}
                onClick={() => navigateToQuestion(section.id, 0)}
                className={`px-2.5 md:px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? uiMode === 'NTA_OFFICIAL'
                      ? 'bg-[#1b5e20] text-white shadow-xs'
                      : 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                <span>{section.name}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/20 text-white">
                  {answeredInSec}/{section.questions.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Candidate Identifier badge */}
        <div className="flex items-center gap-2 text-xs text-slate-500 shrink-0">
          <div className="w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-700 dark:text-slate-200">
            <User className="w-3.5 h-3.5" />
          </div>
          <div className="hidden sm:block leading-tight text-right">
            <div className="font-semibold text-slate-800 dark:text-slate-200">
              JEE Aspirant
            </div>
            <div className="text-[10px] text-slate-500">Roll: 240310084920</div>
          </div>
        </div>
      </div>

      {/* 3. MAIN WORKSPACE */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Pane: Question & Response Controls */}
        <div
          className={`flex-1 flex flex-col justify-between overflow-y-auto p-4 md:p-6 ${
            uiMode === 'NTA_OFFICIAL'
              ? isDarkMode
                ? 'bg-slate-900'
                : 'bg-white'
              : isDarkMode
              ? 'bg-slate-900'
              : 'bg-white'
          }`}
        >
          {currentQuestion ? (
            <div className="max-w-4xl w-full mx-auto space-y-5">
              {/* Question Header with In-Session Tagging Bar */}
              <div
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b ${
                  isDarkMode ? 'border-slate-800' : 'border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                  <span className="font-bold text-sm md:text-base text-indigo-600 dark:text-indigo-400">
                    Question No. {currentQuestion.questionNumber}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {currentQuestion.type === 'SINGLE_CORRECT' && 'MCQ (+4, -1)'}
                    {currentQuestion.type === 'MULTIPLE_CORRECT' && 'Multi (+4, -2)'}
                    {currentQuestion.type === 'NUMERICAL' && 'Numerical (+4, 0)'}
                    {currentQuestion.type === 'MATRIX_MATCH' && 'Match (+4, -1)'}
                  </span>
                  <span className="text-xs text-slate-500 hidden md:inline">
                    Section: <strong>{currentSection.name}</strong>
                  </span>
                </div>

                {/* Quick Question Tagging Bar (Doubt, Hard, Tricky, RACE Star) */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mr-1">
                    Tag:
                  </span>
                  <button
                    type="button"
                    onClick={() => handleToggleTag('DOUBT')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border flex items-center gap-1 transition-all ${
                      (questionTags[currentQuestion.id] || []).includes('DOUBT')
                        ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                    }`}
                    title="Mark as Doubt / Unclear concept"
                  >
                    <HelpCircle className="w-3 h-3" />
                    <span>Doubt</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleToggleTag('HARD')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border flex items-center gap-1 transition-all ${
                      (questionTags[currentQuestion.id] || []).includes('HARD')
                        ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                    }`}
                    title="Mark as Hard / Difficult question"
                  >
                    <Flame className="w-3 h-3" />
                    <span>Hard</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleToggleTag('TRICKY')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border flex items-center gap-1 transition-all ${
                      (questionTags[currentQuestion.id] || []).includes('TRICKY')
                        ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                    }`}
                    title="Mark as Tricky / Trap question"
                  >
                    <Zap className="w-3 h-3" />
                    <span>Tricky</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleToggleTag('RACE_STAR')}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border flex items-center gap-1 transition-all ${
                      (questionTags[currentQuestion.id] || []).includes('RACE_STAR')
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                    }`}
                    title="Save to Allen RACE (Daily Repeat & Consolidate Drill)"
                  >
                    <Star className="w-3 h-3 fill-current" />
                    <span>RACE Star</span>
                  </button>
                </div>
              </div>

              {/* Question Prompt with KaTeX */}
              <div className="space-y-4">
                <div className="text-sm md:text-base leading-relaxed">
                  <MathRenderer content={currentQuestion.promptLatex} />
                </div>

                {currentQuestion.diagramDescription && (
                  <div className="p-3 rounded-lg border border-dashed border-indigo-300 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/20 text-xs text-indigo-900 dark:text-indigo-200">
                    <strong>[Figure / Circuit Diagram]:</strong>{' '}
                    {currentQuestion.diagramDescription}
                  </div>
                )}
              </div>

              {/* Response Input Area */}
              <div
                className={`pt-4 border-t ${
                  isDarkMode ? 'border-slate-800' : 'border-slate-200'
                }`}
              >
                {currentQuestion.type === 'NUMERICAL' ? (
                  <div className="py-2">
                    <NumericalKeypad
                      value={answers[currentQuestion.id] || ''}
                      onChange={(val) =>
                        setAnswers((prev) => ({
                          ...prev,
                          [currentQuestion.id]: val,
                        }))
                      }
                    />
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      {currentQuestion.type === 'MULTIPLE_CORRECT'
                        ? 'Select One or More Option(s):'
                        : 'Choose One Correct Option:'}
                    </div>

                    <div className="grid grid-cols-1 gap-2.5">
                      {currentQuestion.options?.map((option) => {
                        const isSelected =
                          currentQuestion.type === 'MULTIPLE_CORRECT'
                            ? Array.isArray(answers[currentQuestion.id]) &&
                              answers[currentQuestion.id].includes(option.id)
                            : answers[currentQuestion.id] === option.id;

                        const handleSelect = () => {
                          if (currentQuestion.type === 'MULTIPLE_CORRECT') {
                            const cur = Array.isArray(answers[currentQuestion.id])
                              ? [...answers[currentQuestion.id]]
                              : [];
                            const next = cur.includes(option.id)
                              ? cur.filter((x) => x !== option.id)
                              : [...cur, option.id];
                            setAnswers((prev) => ({
                              ...prev,
                              [currentQuestion.id]: next,
                            }));
                          } else {
                            setAnswers((prev) => ({
                              ...prev,
                              [currentQuestion.id]: option.id,
                            }));
                          }
                        };

                        return (
                          <div
                            key={option.id}
                            onClick={handleSelect}
                            className={`p-3 md:p-3.5 rounded-lg border cursor-pointer transition-all flex items-start gap-3 ${
                              isSelected
                                ? 'bg-indigo-950/30 border-indigo-500 text-indigo-900 dark:text-white ring-1 ring-indigo-500'
                                : isDarkMode
                                ? 'bg-slate-800/70 hover:bg-slate-800 border-slate-700 text-slate-200'
                                : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                            }`}
                          >
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                                isSelected
                                  ? 'bg-indigo-600 text-white'
                                  : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              {option.id}
                            </div>
                            <div className="flex-1 text-xs md:text-sm pt-0.5">
                              <MathRenderer content={option.labelLatex} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-slate-400">
              Select a question to begin.
            </div>
          )}

          {/* Action Footer Navigation Strip (Mobile Sticky & Touch Friendly) */}
          <div
            className={`mt-6 pt-4 border-t flex flex-wrap items-center justify-between gap-2.5 ${
              isDarkMode
                ? 'border-slate-800 bg-slate-950 -mx-4 -mb-4 md:-mx-6 md:-mb-6 p-4'
                : 'border-slate-300 bg-slate-50 -mx-4 -mb-4 md:-mx-6 md:-mb-6 p-4'
            }`}
          >
            {/* Primary actions */}
            <div className="flex flex-wrap items-center gap-1.5 md:gap-2">
              <button
                onClick={handleSaveAndNext}
                className="px-3.5 md:px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 rounded-md shadow-xs transition-all uppercase tracking-wider"
              >
                Save & Next
              </button>

              <button
                onClick={handleSaveAndMarkForReview}
                className="px-3 md:px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-md shadow-xs transition-all"
              >
                Save & Review
              </button>

              <button
                onClick={handleClearResponse}
                className="px-3 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-600 active:scale-95 rounded-md transition-all"
              >
                Clear
              </button>

              <button
                onClick={handleMarkForReviewAndNext}
                className="px-3 py-2.5 text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/50 border border-purple-200 dark:border-purple-800 active:scale-95 rounded-md transition-all"
              >
                Review & Next
              </button>
            </div>

            {/* Stepper & Submit */}
            <div className="flex items-center gap-1.5 md:gap-2">
              <button
                onClick={goToPreviousQuestion}
                disabled={activeQuestionIndex === 0 && paper.sections[0].id === activeSectionId}
                className="px-3 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md disabled:opacity-40 transition-all flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Prev</span>
              </button>

              <button
                onClick={goToNextQuestion}
                className="px-3 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md transition-all flex items-center gap-1"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsSubmitModalOpen(true)}
                className="ml-1 px-4 md:px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-md shadow-xs transition-all uppercase tracking-wider"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Palette (Right Column) */}
        <div
          className={`hidden lg:block w-80 border-l overflow-y-auto ${
            uiMode === 'NTA_OFFICIAL'
              ? isDarkMode
                ? 'bg-slate-950 border-slate-800'
                : 'bg-[#f8f9fa] border-slate-300'
              : isDarkMode
              ? 'bg-slate-950 border-slate-800'
              : 'bg-slate-50 border-slate-200'
          }`}
        >
          {PaletteContent}
        </div>

        {/* Mobile Slide-Over Question Palette Drawer */}
        {isMobilePaletteOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <div
              onClick={() => setIsMobilePaletteOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            />
            {/* Drawer */}
            <div
              className={`relative ml-auto w-80 max-w-[85vw] h-full shadow-2xl flex flex-col z-10 ${
                isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
              }`}
            >
              <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="font-bold text-sm">Question Navigation</span>
                <button
                  onClick={() => setIsMobilePaletteOpen(false)}
                  className="p-1 rounded text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">{PaletteContent}</div>
            </div>
          </div>
        )}
      </div>

      {/* MODALS */}
      <ScratchpadModal
        isOpen={isScratchpadOpen}
        onClose={() => setIsScratchpadOpen(false)}
      />

      {isInstructionsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-xs p-4">
          <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl p-6 border border-slate-300 dark:border-slate-700">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-base">Examination Instructions</h3>
              <button
                onClick={() => setIsInstructionsModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="py-4 space-y-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              <p>• Correct answer: +4 marks.</p>
              <p>• Incorrect answer in MCQs: -1 mark (or -2 in JEE Advanced multiple correct).</p>
              <p>• Numerical questions: +4 marks, 0 negative marks.</p>
              <p>• To save your answer, click <strong>Save & Next</strong>.</p>
              <p>• Questions marked as "Answered and Marked for Review" WILL be considered for evaluation.</p>
            </div>
            <button
              onClick={() => setIsInstructionsModalOpen(false)}
              className="w-full py-2 bg-indigo-600 text-white rounded text-xs font-semibold"
            >
              Back To Test
            </button>
          </div>
        </div>
      )}

      {/* Submit Test Confirmation Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-xs p-4">
          <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-300 dark:border-slate-700 overflow-hidden">
            <div className="px-6 py-4 bg-slate-900 text-white font-bold text-sm flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Submit Examination Confirmation
            </div>

            <div className="p-6 space-y-4 text-xs text-slate-700 dark:text-slate-300">
              <p className="font-medium text-sm text-slate-900 dark:text-white">
                Exam Summary Before Submission:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-slate-200 dark:border-slate-800 text-center">
                  <thead className="bg-slate-100 dark:bg-slate-800 font-semibold text-slate-600 dark:text-slate-300">
                    <tr>
                      <th className="p-2 border-b">Section</th>
                      <th className="p-2 border-b">Total</th>
                      <th className="p-2 border-b text-emerald-600">Answered</th>
                      <th className="p-2 border-b text-rose-500">Not Answered</th>
                      <th className="p-2 border-b text-purple-600">Review</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {paper.sections.map((sec) => {
                      const totalSec = sec.questions.length;
                      const ansSec = sec.questions.filter(
                        (q) =>
                          statuses[q.id] === 'ANSWERED' ||
                          statuses[q.id] === 'ANSWERED_AND_MARKED_FOR_REVIEW'
                      ).length;
                      const notAnsSec = sec.questions.filter(
                        (q) => statuses[q.id] === 'NOT_ANSWERED'
                      ).length;
                      const revSec = sec.questions.filter(
                        (q) =>
                          statuses[q.id] === 'MARKED_FOR_REVIEW' ||
                          statuses[q.id] === 'ANSWERED_AND_MARKED_FOR_REVIEW'
                      ).length;

                      return (
                        <tr key={sec.id}>
                          <td className="p-2 text-left font-medium">{sec.name}</td>
                          <td className="p-2">{totalSec}</td>
                          <td className="p-2 text-emerald-600 font-bold">{ansSec}</td>
                          <td className="p-2 text-rose-500">{notAnsSec}</td>
                          <td className="p-2 text-purple-600">{revSec}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-amber-900 dark:text-amber-200">
                Are you sure you want to submit? You will not be able to change your responses once submitted.
              </div>
            </div>

            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors"
              >
                Resume Test
              </button>
              <button
                onClick={handleFinalSubmit}
                className="px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded uppercase tracking-wider shadow-xs transition-colors"
              >
                Yes, Submit Final
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
