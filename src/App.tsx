import React, { useState, useEffect } from 'react';
import {
  ExamPaper,
  StudentAttempt,
  UIMode,
  MistakeEntry,
  MistakeReason,
  Question,
  RemedialPack,
  ScheduledTest,
  DailyRoutineItem,
  TaggedQuestionEntry,
  QuestionTag,
} from './types/exam';
import { SAMPLE_JEE_MAIN_MOCK } from './data/samplePapers';
import {
  SAMPLE_SCHEDULED_TESTS,
  SAMPLE_DAILY_ROUTINE,
  SAMPLE_TAGGED_RACE_QUESTIONS,
  SCHEDULE_BASE_DATE,
  buildMasterAlternateSchedule,
} from './data/sampleSchedules';
import { TestHub } from './components/TestHub';
import { ExamInstructions } from './components/ExamInstructions';
import { CBTExamRoom } from './components/CBTExamRoom';
import { PostTestAnalytics } from './components/PostTestAnalytics';
import { RemedialPracticeModal } from './components/RemedialPracticeModal';
import { getLiveTestWindowStatus } from './utils/scheduleCalculator';

type AppView = 'HUB' | 'INSTRUCTIONS' | 'CBT_ROOM' | 'ANALYTICS';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('HUB');
  const [selectedPaper, setSelectedPaper] = useState<ExamPaper | null>(null);
  const [activeScheduledTest, setActiveScheduledTest] = useState<ScheduledTest | null>(null);
  const [isReattemptMode, setIsReattemptMode] = useState<boolean>(false);
  const [selectedMode, setSelectedMode] = useState<UIMode>('NTA_OFFICIAL');
  const [activeAttempt, setActiveAttempt] = useState<StudentAttempt | null>(null);

  // Persistent custom papers
  const [customPapers, setCustomPapers] = useState<ExamPaper[]>(() => {
    try {
      const stored = localStorage.getItem('jee_custom_papers');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Persistent attempts
  const [savedAttempts, setSavedAttempts] = useState<StudentAttempt[]>(() => {
    try {
      const stored = localStorage.getItem('jee_saved_attempts');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Persistent Mistake Notebook entries
  const [mistakes, setMistakes] = useState<MistakeEntry[]>(() => {
    try {
      const stored = localStorage.getItem('jee_mistakes');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Persistent Scheduled Tests (Fixed Static Anchor Series starting 2026-10-25, 09:00-12:00 Window)
  const [scheduledTests, setScheduledTests] = useState<ScheduledTest[]>(() => {
    try {
      const stored = localStorage.getItem('jee_scheduled_tests');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const storedById = new Map<string, any>();
          const customUserTests: ScheduledTest[] = [];
          parsed.forEach((t: any) => {
            if (t && typeof t.id === 'string') {
              storedById.set(t.id, t);
              if (!t.id.startsWith('sched-day-')) {
                customUserTests.push({
                  ...t,
                  status: t.status === 'COMPLETED' ? 'COMPLETED' : 'UPCOMING_LOCKED',
                });
              }
            }
          });

          // Always refresh master schedule entries with latest scanned papers, fixed dates, and 09:00-12:00 window
          const refreshedMaster = SAMPLE_SCHEDULED_TESTS.map((freshTest) => {
            const prev = storedById.get(freshTest.id);
            if (!prev) return freshTest;
            const prevCompletedById = new Map<string, boolean>(
              Array.isArray(prev.syllabus)
                ? prev.syllabus.map((s: any) => [s.id, Boolean(s.completed)])
                : []
            );
            return {
              ...freshTest,
              status: prev.status === 'COMPLETED' ? ('COMPLETED' as const) : ('UPCOMING_LOCKED' as const),
              score: prev.score,
              syllabus: freshTest.syllabus.map((top) => ({
                ...top,
                completed: prevCompletedById.get(top.id) ?? top.completed,
              })),
            };
          });

          return [...customUserTests, ...refreshedMaster];
        }
      }
      return SAMPLE_SCHEDULED_TESTS;
    } catch {
      return SAMPLE_SCHEDULED_TESTS;
    }
  });

  // Re-align coaching roadmap fresh:
  // Physics: Kinematics, Electrostatics, Current Electricity, Geometrical Optics, Modern Physics
  // Mathematics: Matrices, Determinant, Binomial Theorem, Vectors & 3-D, Integration, Diff Eq & AUC, LCD
  const handleResetCoachingSchedule = () => {
    const fresh = buildMasterAlternateSchedule(SCHEDULE_BASE_DATE);
    setScheduledTests(fresh);
    try {
      localStorage.setItem('jee_scheduled_tests', JSON.stringify(fresh));
    } catch (e) {
      console.warn('Failed to reset scheduled tests', e);
    }
  };

  // Persistent Daily Coaching Routine Checklist (always refresh default routine papers)
  const [routineItems, setRoutineItems] = useState<DailyRoutineItem[]>(() => {
    try {
      const stored = localStorage.getItem('jee_daily_routine');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          const sampleIds = new Set(SAMPLE_DAILY_ROUTINE.map((r) => r.id));
          const storedById = new Map(parsed.map((r: any) => [r.id, r]));
          const customItems = parsed.filter((r: any) => r && !sampleIds.has(r.id));
          const refreshedSample = SAMPLE_DAILY_ROUTINE.map((sample) => {
            const prev: any = storedById.get(sample.id);
            return prev ? { ...sample, isCompleted: Boolean(prev.isCompleted) } : sample;
          });
          return [...customItems, ...refreshedSample];
        }
      }
      return SAMPLE_DAILY_ROUTINE;
    } catch {
      return SAMPLE_DAILY_ROUTINE;
    }
  });

  // Persistent Tagged RACE & Doubt Bank Questions (refresh preset sample question objects)
  const [taggedRaceQuestions, setTaggedRaceQuestions] = useState<TaggedQuestionEntry[]>(() => {
    try {
      const stored = localStorage.getItem('jee_tagged_race_bank');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          const sampleById = new Map(SAMPLE_TAGGED_RACE_QUESTIONS.map((q) => [q.id, q]));
          return parsed.map((entry: TaggedQuestionEntry) => {
            const freshSample = sampleById.get(entry.id);
            return freshSample
              ? {
                  ...entry,
                  question: freshSample.question,
                  correctAnswer: freshSample.question.correctAnswer,
                }
              : entry;
          });
        }
      }
      return SAMPLE_TAGGED_RACE_QUESTIONS;
    } catch {
      return SAMPLE_TAGGED_RACE_QUESTIONS;
    }
  });

  // Global Remedial Drill Modal State
  const [globalRemedialPack, setGlobalRemedialPack] = useState<RemedialPack | null>(null);
  const [isGlobalLoadingRemedial, setIsGlobalLoadingRemedial] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('jee_tagged_race_bank', JSON.stringify(taggedRaceQuestions));
    } catch (e) {
      console.warn('Failed to save tagged race bank', e);
    }
  }, [taggedRaceQuestions]);
  useEffect(() => {
    try {
      localStorage.setItem('jee_daily_routine', JSON.stringify(routineItems));
    } catch (e) {
      console.warn('Failed to save daily routine', e);
    }
  }, [routineItems]);
  useEffect(() => {
    try {
      localStorage.setItem('jee_custom_papers', JSON.stringify(customPapers));
    } catch (e) {
      console.warn('Failed to save custom papers', e);
    }
  }, [customPapers]);

  useEffect(() => {
    try {
      localStorage.setItem('jee_saved_attempts', JSON.stringify(savedAttempts));
    } catch (e) {
      console.warn('Failed to save attempts', e);
    }
  }, [savedAttempts]);

  useEffect(() => {
    try {
      localStorage.setItem('jee_mistakes', JSON.stringify(mistakes));
    } catch (e) {
      console.warn('Failed to save mistakes', e);
    }
  }, [mistakes]);

  useEffect(() => {
    try {
      localStorage.setItem('jee_scheduled_tests', JSON.stringify(scheduledTests));
    } catch (e) {
      console.warn('Failed to save scheduled tests', e);
    }
  }, [scheduledTests]);

  // Handler: Select an exam from the hub -> Go to Instructions (or direct to CBT_ROOM if resuming)
  const handleSelectExam = (paper: ExamPaper, directToRoom = false) => {
    setActiveScheduledTest(null);
    setIsReattemptMode(false);
    setSelectedPaper(paper);
    if (directToRoom) {
      setCurrentView('CBT_ROOM');
    } else {
      setCurrentView('INSTRUCTIONS');
    }
  };

  // Handler: Start examination after reading instructions
  const handleStartExam = (mode: UIMode) => {
    setSelectedMode(mode);
    setCurrentView('CBT_ROOM');
  };

  // Handler: Submit examination -> Save attempt and view analytics
  const handleSubmitExam = (attempt: StudentAttempt) => {
    let earnedScore = typeof attempt.score === 'number' ? attempt.score : 0;
    if (typeof attempt.score !== 'number' && selectedPaper) {
      let calc = 0;
      selectedPaper.sections.forEach((sec) => {
        sec.questions.forEach((q) => {
          const ua = attempt.answers[q.id];
          const hasAns = ua !== undefined && ua !== '' && !(Array.isArray(ua) && ua.length === 0);
          if (!hasAns) return;
          let ok = false;
          const sc = String(q.correctAnswer ?? '').trim();
          if (q.type === 'MULTIPLE_CORRECT') {
            const cSet = sc.split(',').map((s) => s.trim().toUpperCase()).sort();
            const uSet = Array.isArray(ua)
              ? [...ua].map((s) => String(s).trim().toUpperCase()).sort()
              : String(ua).split(',').map((s) => s.trim().toUpperCase()).sort();
            ok = JSON.stringify(cSet) === JSON.stringify(uSet);
          } else if (q.type === 'NUMERICAL') {
            const un = parseFloat(String(ua).trim());
            const cn = parseFloat(sc);
            ok = !isNaN(un) && !isNaN(cn) ? Math.abs(un - cn) < 0.05 : String(ua).trim() === sc;
          } else {
            ok = String(ua).trim().toUpperCase() === sc.toUpperCase();
          }
          calc += ok ? (q.positiveMarks || 4) : -(q.negativeMarks ?? (q.type === 'NUMERICAL' ? 0 : 1));
        });
      });
      earnedScore = calc;
    }
    const isScheduledLiveSubmission = Boolean(
      activeScheduledTest &&
        !attempt.examId.startsWith('module-marathon-') &&
        !attempt.examId.startsWith('mod-')
    );

    const scoredAttempt: StudentAttempt = {
      ...attempt,
      score: earnedScore,
      scheduledTestId: isScheduledLiveSubmission ? activeScheduledTest?.id : attempt.scheduledTestId,
      isLiveScheduled: isScheduledLiveSubmission ? true : Boolean(attempt.isLiveScheduled),
    };
    setSavedAttempts((prev) => [scoredAttempt, ...prev]);
    setActiveAttempt(scoredAttempt);

    // Only mark a scheduled test as COMPLETED if activeScheduledTest is explicitly set
    // AND the attempt is NOT a module marathon or module practice test
    if (isScheduledLiveSubmission && activeScheduledTest) {
      setScheduledTests((prev) =>
        prev.map((t) => {
          if (t.id === activeScheduledTest.id) {
            return { ...t, status: 'COMPLETED', score: earnedScore };
          }
          return t;
        })
      );
      setActiveScheduledTest(null);
    }

    setCurrentView('ANALYTICS');
  };

  // Handler: View previous attempt analysis
  const handleViewAttempt = (attempt: StudentAttempt, paper: ExamPaper) => {
    setSelectedPaper(paper);
    setActiveAttempt(attempt);
    setCurrentView('ANALYTICS');
  };

  // Handler: Save newly extracted custom paper from PDF
  const handleSaveCustomPaper = (paper: ExamPaper) => {
    setCustomPapers((prev) => [paper, ...prev.filter((p) => p.id !== paper.id)]);
  };

  // Handler: Delete custom paper from repository
  const handleDeleteCustomPaper = (paperId: string) => {
    setCustomPapers((prev) => prev.filter((p) => p.id !== paperId));
  };

  // Handler: Log a mistake into the Mistake Notebook
  const handleLogMistake = (
    q: Question,
    userAnswer: any,
    correctAnswer: string,
    reason: MistakeReason,
    timeSpent: number
  ) => {
    setMistakes((prev) => {
      const existingIdx = prev.findIndex((m) => m.question.id === q.id);
      const newEntry: MistakeEntry = {
        id: `mistake-${q.id}-${Date.now()}`,
        question: q,
        examTitle: selectedPaper?.title || 'JEE Mock Test',
        userAnswer,
        correctAnswer,
        reason,
        timeSpentSeconds: timeSpent,
        createdAt: Date.now(),
      };

      if (existingIdx >= 0) {
        const copy = [...prev];
        copy[existingIdx] = { ...copy[existingIdx], reason, timeSpentSeconds: timeSpent };
        return copy;
      }
      return [newEntry, ...prev];
    });
  };

  // Handler: Remove mistake from notebook (when mastered)
  const handleRemoveMistake = (id: string) => {
    setMistakes((prev) => prev.filter((m) => m.id !== id));
  };

  // Handler: Update reason in mistake notebook
  const handleUpdateMistakeReason = (id: string, reason: MistakeReason, notes?: string) => {
    setMistakes((prev) =>
      prev.map((m) => (m.id === id ? { ...m, reason, notes: notes ?? m.notes } : m))
    );
  };

  // Handler: Launch AI Remedial PYQs from the Mistake Notebook
  const handlePracticeSimilarFromNotebook = async (entry: MistakeEntry) => {
    setIsGlobalLoadingRemedial(true);
    setGlobalRemedialPack(null);

    try {
      const response = await fetch('/api/generate-remedial-pyqs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          promptLatex: entry.question.promptLatex,
          sectionId: entry.question.sectionId,
          pattern: selectedPaper?.pattern || 'JEE_MAIN',
          missedReason: entry.reason || 'CONCEPT_GAP',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate remedial questions');
      }

      const resData = await response.json();
      if (resData.success && resData.data) {
        setGlobalRemedialPack(resData.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsGlobalLoadingRemedial(false);
    }
  };

  // Schedule Handlers
  const handleToggleTopic = (testId: string, topicId: string) => {
    setScheduledTests((prev) =>
      prev.map((test) => {
        if (test.id !== testId) return test;
        return {
          ...test,
          syllabus: test.syllabus.map((top) =>
            top.id === topicId ? { ...top, completed: !top.completed } : top
          ),
        };
      })
    );
  };

  const handleEnterLiveTest = (test: ScheduledTest) => {
    const paperToUse: ExamPaper =
      test.paper ||
      customPapers.find((p) => p.id === test.paperId) || {
        ...SAMPLE_JEE_MAIN_MOCK,
        id: `live-${test.id}`,
        title: test.title,
      };

    // Single-attempt policy: if already completed, redirect to submitted analytics instead of launching again
    if (test.status === 'COMPLETED') {
      const existingAttempt = savedAttempts.find(
        (a) =>
          a.scheduledTestId === test.id ||
          (a.isLiveScheduled && a.examId === test.paperId) ||
          a.examId === paperToUse.id
      );
      if (existingAttempt) {
        handleViewAttempt(existingAttempt, paperToUse);
      }
      return;
    }

    // Enforce strict IST live window (09:00 - 12:00 IST)
    const windowInfo = getLiveTestWindowStatus(test, new Date());
    if (!windowInfo.isLive) {
      return;
    }

    setActiveScheduledTest(test);
    setIsReattemptMode(false);
    setSelectedPaper(paperToUse);
    setCurrentView('INSTRUCTIONS');
  };

  const handleReattemptExam = (paper: ExamPaper, test?: ScheduledTest) => {
    // Reattempting scheduled live tests is strictly disabled
    const isPracticePaper =
      paper.id.startsWith('module-marathon-') || paper.id.startsWith('mod-');
    if (
      test ||
      (!isPracticePaper &&
        scheduledTests.some((t) => t.paperId === paper.id || `live-${t.id}` === paper.id))
    ) {
      return;
    }

    try {
      localStorage.removeItem(`jee_live_session_${paper.id}`);
    } catch (e) {
      console.warn(e);
    }
    setActiveScheduledTest(null);
    setIsReattemptMode(true);
    setSelectedPaper(paper);
    setCurrentView('INSTRUCTIONS');
  };

  const handleAttachPaper = (testId: string, paper: ExamPaper) => {
    setScheduledTests((prev) =>
      prev.map((t) => (t.id === testId ? { ...t, paperId: paper.id, paper } : t))
    );
  };

  const handleAddCustomSchedule = (newTests: ScheduledTest[]) => {
    setScheduledTests(newTests);
  };

  const handleDeleteScheduledTest = (testId: string) => {
    setScheduledTests((prev) => prev.filter((t) => t.id !== testId));
  };

  const handleClearAllScheduledTests = () => {
    setScheduledTests([]);
    try {
      localStorage.removeItem('jee_scheduled_tests');
    } catch (e) {
      console.warn('Failed to clear scheduled tests from localStorage', e);
    }
  };

  // Routine Handlers
  const handleStartRoutineTask = (item: DailyRoutineItem) => {
    const paperToUse: ExamPaper =
      item.paper ||
      customPapers.find((p) => p.id === item.paperId) || {
        ...SAMPLE_JEE_MAIN_MOCK,
        id: `rout-${item.id}`,
        title: item.title,
        durationMinutes: item.durationMinutes || 50,
      };
    setSelectedPaper(paperToUse);
    setCurrentView('INSTRUCTIONS');
  };

  const handleToggleRoutineComplete = (itemId: string) => {
    setRoutineItems((prev) =>
      prev.map((it) => (it.id === itemId ? { ...it, isCompleted: !it.isCompleted } : it))
    );
  };

  const handleAddCustomRoutine = (newItems: DailyRoutineItem[]) => {
    setRoutineItems((prev) => [...newItems, ...prev]);
  };

  const handleDeleteRoutineItem = (itemId: string) => {
    setRoutineItems((prev) => prev.filter((it) => it.id !== itemId));
  };

  // RACE & Doubt Question Bank Handlers
  const handleToggleTagOnQuestion = (question: Question, tag: QuestionTag) => {
    setTaggedRaceQuestions((prev) => {
      const existingIdx = prev.findIndex((entry) => entry.question.id === question.id);
      if (existingIdx >= 0) {
        const entry = prev[existingIdx];
        const updatedTags = entry.tags.includes(tag)
          ? entry.tags.filter((t) => t !== tag)
          : [...entry.tags, tag];

        if (updatedTags.length === 0) {
          return prev.filter((_, idx) => idx !== existingIdx);
        }
        const copy = [...prev];
        copy[existingIdx] = { ...entry, tags: updatedTags };
        return copy;
      } else {
        const newEntry: TaggedQuestionEntry = {
          id: `tag-${question.id}-${Date.now()}`,
          question,
          examId: selectedPaper?.id || 'exam',
          examTitle: selectedPaper?.title || 'JEE Mock / Practice Sprint',
          subject: question.sectionId,
          tags: [tag],
          correctAnswer: question.correctAnswer,
          addedAt: Date.now(),
          practiceCount: 1,
        };
        return [newEntry, ...prev];
      }
    });
  };

  const handleRemoveTaggedQuestion = (id: string) => {
    setTaggedRaceQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  const handleUpdateQuestionTags = (id: string, tags: QuestionTag[]) => {
    setTaggedRaceQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, tags } : q))
    );
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      {/* 1. TEST HUB */}
      {currentView === 'HUB' && (
        <TestHub
          onSelectExam={handleSelectExam}
          onViewAttempt={handleViewAttempt}
          savedAttempts={savedAttempts}
          savedCustomPapers={customPapers}
          onSaveCustomPaper={handleSaveCustomPaper}
          onDeleteCustomPaper={handleDeleteCustomPaper}
          mistakes={mistakes}
          onRemoveMistake={handleRemoveMistake}
          onUpdateMistakeReason={handleUpdateMistakeReason}
          onPracticeSimilar={handlePracticeSimilarFromNotebook}
          scheduledTests={scheduledTests}
          onToggleTopic={handleToggleTopic}
          onEnterLiveTest={handleEnterLiveTest}
          onAttachPaper={handleAttachPaper}
          onAddCustomSchedule={handleAddCustomSchedule}
          onDeleteScheduledTest={handleDeleteScheduledTest}
          onClearAllScheduledTests={handleClearAllScheduledTests}
          routineItems={routineItems}
          onStartRoutineTask={handleStartRoutineTask}
          onToggleRoutineComplete={handleToggleRoutineComplete}
          onAddCustomRoutine={handleAddCustomRoutine}
          onDeleteRoutineItem={handleDeleteRoutineItem}
          taggedRaceQuestions={taggedRaceQuestions}
          onRemoveTaggedQuestion={handleRemoveTaggedQuestion}
          onUpdateQuestionTags={handleUpdateQuestionTags}
          onToggleTagOnQuestion={handleToggleTagOnQuestion}
          onResetCoachingSchedule={handleResetCoachingSchedule}
          onReattemptTest={handleReattemptExam}
        />
      )}

      {/* 2. EXAM INSTRUCTIONS & DECLARATION */}
      {currentView === 'INSTRUCTIONS' && selectedPaper && (
        <ExamInstructions
          paper={selectedPaper}
          scheduledTest={activeScheduledTest}
          onStartExam={handleStartExam}
          onCancel={() => setCurrentView('HUB')}
        />
      )}

      {/* 3. ACTIVE CBT EXAM ROOM */}
      {currentView === 'CBT_ROOM' && selectedPaper && (
        <CBTExamRoom
          paper={selectedPaper}
          scheduledTest={activeScheduledTest}
          isReattempt={isReattemptMode}
          initialMode={selectedMode}
          onSubmitExam={handleSubmitExam}
          onExit={() => setCurrentView('HUB')}
          onToggleTag={handleToggleTagOnQuestion}
        />
      )}

      {/* 4. POST-TEST PERFORMANCE ANALYTICS */}
      {currentView === 'ANALYTICS' && selectedPaper && activeAttempt && (() => {
        const isPracticePaper =
          activeAttempt.examId.startsWith('module-marathon-') ||
          activeAttempt.examId.startsWith('mod-');
        const isLiveScheduledAttempt = Boolean(
          activeAttempt.isLiveScheduled ||
            activeAttempt.scheduledTestId ||
            (!isPracticePaper &&
              scheduledTests.some(
                (t) =>
                  t.id === activeAttempt.scheduledTestId ||
                  t.paperId === activeAttempt.examId ||
                  `live-${t.id}` === activeAttempt.examId
              ))
        );
        return (
          <PostTestAnalytics
            paper={selectedPaper}
            attempt={activeAttempt}
            allowRetake={!isLiveScheduledAttempt}
            onRetake={!isLiveScheduledAttempt ? () => setCurrentView('INSTRUCTIONS') : undefined}
            onBackToHub={() => setCurrentView('HUB')}
            onLogMistake={handleLogMistake}
          />
        );
      })()}

      {/* Global Remedial PYQs Modal */}
      <RemedialPracticeModal
        pack={globalRemedialPack}
        isLoading={isGlobalLoadingRemedial}
        onClose={() => {
          setGlobalRemedialPack(null);
          setIsGlobalLoadingRemedial(false);
        }}
      />
    </div>
  );
}
