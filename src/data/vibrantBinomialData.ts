import { ExamPaper, ScheduledTest, Question } from '../types/exam';
import { BINOMIAL_PART_1_QUESTIONS } from './vibrantBinomialPart1';
import { BINOMIAL_PART_2_QUESTIONS } from './vibrantBinomialPart2';
import { BINOMIAL_PART_3_QUESTIONS } from './vibrantBinomialPart3';

export const ALL_BINOMIAL_QUESTIONS: Question[] = [
  ...BINOMIAL_PART_1_QUESTIONS,
  ...BINOMIAL_PART_2_QUESTIONS,
  ...BINOMIAL_PART_3_QUESTIONS,
].map((q, idx) => ({
  ...q,
  questionNumber: idx + 1,
  id: `bin-master-${idx + 1}`,
}));

export const VIBRANT_BINOMIAL_PAPER_1: ExamPaper = {
  id: 'vibrant-binomial-part-1',
  title: 'Vibrant Kota Mathematics - Binomial Theorem CBT Mock Test 01 (Part 1 - 40Q Sprint)',
  pattern: 'JEE_MAIN',
  durationMinutes: 180,
  totalMarks: 160,
  sections: [{ id: 'mathematics', name: 'MATHEMATICS (BINOMIAL THEOREM PART 1 - GENERAL TERM, MIDDLE TERM & COEFFS)', questions: BINOMIAL_PART_1_QUESTIONS }],
};

export const VIBRANT_BINOMIAL_PAPER_2: ExamPaper = {
  id: 'vibrant-binomial-part-2',
  title: 'Vibrant Kota Mathematics - Binomial Theorem CBT Mock Test 02 (Part 2 - 35Q Mastery)',
  pattern: 'JEE_MAIN',
  durationMinutes: 180,
  totalMarks: 140,
  sections: [{ id: 'mathematics', name: 'MATHEMATICS (BINOMIAL THEOREM PART 2 - SERIES OF COEFFICIENTS & REMAINDERS)', questions: BINOMIAL_PART_2_QUESTIONS }],
};

export const VIBRANT_BINOMIAL_PAPER_3: ExamPaper = {
  id: 'vibrant-binomial-part-3',
  title: 'Vibrant Kota Mathematics - Binomial Theorem CBT Mock Test 03 (Part 3 - 33Q JEE Archive)',
  pattern: 'JEE_MAIN',
  durationMinutes: 180,
  totalMarks: 132,
  sections: [{ id: 'mathematics', name: 'MATHEMATICS (BINOMIAL THEOREM PART 3 - MULTINOMIAL & JEE ADVANCED ARCHIVE)', questions: BINOMIAL_PART_3_QUESTIONS }],
};

export const VIBRANT_BINOMIAL_COMPLETE_PAPER: ExamPaper = {
  id: 'vibrant-binomial-complete-130',
  title: 'Vibrant Kota Mathematics - Binomial Theorem Complete Series (Full Chapter Grand Marathon)',
  pattern: 'JEE_MAIN',
  durationMinutes: 432,
  totalMarks: 432,
  sections: [{ id: 'mathematics', name: 'MATHEMATICS (COMPLETE VIBRANT BINOMIAL THEOREM MICRO XI)', questions: ALL_BINOMIAL_QUESTIONS }],
};

export const ALL_VIBRANT_BINOMIAL_PAPERS: ExamPaper[] = [
  VIBRANT_BINOMIAL_PAPER_1,
  VIBRANT_BINOMIAL_PAPER_2,
  VIBRANT_BINOMIAL_PAPER_3,
  VIBRANT_BINOMIAL_COMPLETE_PAPER,
];

export function getVibrantBinomialLockedTests(baseDateStr?: string): ScheduledTest[] {
  const anchor = baseDateStr || '2026-10-25';
  const [y, m, day] = anchor.split('-').map(Number);
  const d = new Date(y, m - 1, day);
  const formatIso = (date: Date) => {
    const yy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yy}-${mm}-${dd}`;
  };
  return ALL_VIBRANT_BINOMIAL_PAPERS.map((paper, idx) => {
    const testDate = new Date(d);
    testDate.setDate(d.getDate() + 65 + idx * 2);
    return {
      id: `locked-vibrant-binomial-${idx + 1}`,
      title: paper.title,
      pattern: 'JEE_MAIN',
      scheduledDate: formatIso(testDate),
      startTime: '09:00',
      endTime: '12:00',
      durationMinutes: paper.durationMinutes,
      totalMarks: paper.totalMarks,
      paperId: paper.id,
      paper,
      status: 'UPCOMING_LOCKED',
      isLocked: true,
      scheduledAt: idx + 1,
      syllabus: [{ id: `syl-bin-${idx}`, subject: 'mathematics', name: paper.sections[0].name, completed: false }],
    };
  });
}

