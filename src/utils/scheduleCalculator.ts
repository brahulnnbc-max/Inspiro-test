import { ExamPaper, ScheduledTest, SyllabusTopic } from '../types/exam';

// India Standard Time (IST = UTC+05:30) fixed offset in milliseconds
export const IST_OFFSET_MS = (5 * 60 + 30) * 60 * 1000;

/**
 * Returns YYYY-MM-DD strictly in India Standard Time (Asia/Kolkata, UTC+05:30),
 * regardless of the client browser or server OS local timezone.
 */
export function getIstIsoDate(date: Date = new Date()): string {
  const ist = new Date(date.getTime() + IST_OFFSET_MS);
  const y = ist.getUTCFullYear();
  const m = String(ist.getUTCMonth() + 1).padStart(2, '0');
  const d = String(ist.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function getTomorrowIstIso(date: Date = new Date()): string {
  return getIstIsoDate(new Date(date.getTime() + 24 * 60 * 60 * 1000));
}

export function formatIstTime(date: Date = new Date()): string {
  const ist = new Date(date.getTime() + IST_OFFSET_MS);
  const hh = String(ist.getUTCHours()).padStart(2, '0');
  const mm = String(ist.getUTCMinutes()).padStart(2, '0');
  const ss = String(ist.getUTCSeconds()).padStart(2, '0');
  return `${hh}:${mm}:${ss} IST`;
}

/**
 * Parses a YYYY-MM-DD date and HH:MM(:SS) clock string as an authoritative IST (+05:30) epoch timestamp (ms).
 * Guarantees every student's live test opens and ends at the exact same IST timestamp.
 */
export function parseIstTimestampMs(dateStr: string, timeStr: string = '09:00'): number {
  const cleanDate = (dateStr || getIstIsoDate()).trim();
  const parts = (timeStr || '09:00').trim().split(':');
  const hh = String(Math.max(0, Math.min(23, parseInt(parts[0] || '9', 10) || 0))).padStart(2, '0');
  const mm = String(Math.max(0, Math.min(59, parseInt(parts[1] || '0', 10) || 0))).padStart(2, '0');
  const ss = String(Math.max(0, Math.min(59, parseInt(parts[2] || '0', 10) || 0))).padStart(2, '0');
  return new Date(`${cleanDate}T${hh}:${mm}:${ss}+05:30`).getTime();
}

export function addDaysToIsoDate(baseDateStr: string, daysToAdd: number): string {
  const anchorMs = new Date(`${baseDateStr}T00:00:00Z`).getTime();
  const target = new Date(anchorMs + daysToAdd * 24 * 60 * 60 * 1000);
  const y = target.getUTCFullYear();
  const m = String(target.getUTCMonth() + 1).padStart(2, '0');
  const d = String(target.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function getIsoDate(date: Date = new Date()): string {
  return getIstIsoDate(date);
}

export function getTodayIso(): string {
  return getIstIsoDate(new Date());
}

export function getTomorrowIso(): string {
  return getTomorrowIstIso(new Date());
}

export function parseScheduleCommand(command: string): {
  mode: 'SINGLE' | 'ALTERNATE_DAYS' | 'WEEKLY' | 'BIWEEKLY' | 'MONTHLY';
  startDate?: string;
  startTime?: string;
  endTime?: string;
  durationMonths?: number;
} {
  const lower = command.toLowerCase();
  let mode: 'SINGLE' | 'ALTERNATE_DAYS' | 'WEEKLY' | 'BIWEEKLY' | 'MONTHLY' = 'ALTERNATE_DAYS';

  if (lower.includes('single') || lower.includes('one test') || lower.includes('once')) {
    mode = 'SINGLE';
  } else if (lower.includes('alternate') || lower.includes('every other') || lower.includes('2 days')) {
    mode = 'ALTERNATE_DAYS';
  } else if (lower.includes('weekly') || lower.includes('every week') || lower.includes('sunday')) {
    mode = 'WEEKLY';
  } else if (lower.includes('biweekly') || lower.includes('every two weeks') || lower.includes('fortnight')) {
    mode = 'BIWEEKLY';
  } else if (lower.includes('month')) {
    mode = 'MONTHLY';
  }

  let startTime = '09:00';
  let endTime = '12:00';
  const timeMatch = lower.match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\s*(?:to|-)\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/);
  if (timeMatch) {
    let h1 = parseInt(timeMatch[1], 10);
    const m1 = timeMatch[2] ? parseInt(timeMatch[2], 10) : 0;
    const p1 = timeMatch[3];
    if (p1 === 'pm' && h1 < 12) h1 += 12;
    if (p1 === 'am' && h1 === 12) h1 = 0;

    let h2 = parseInt(timeMatch[4], 10);
    const m2 = timeMatch[5] ? parseInt(timeMatch[5], 10) : 0;
    const p2 = timeMatch[6];
    if (p2 === 'pm' && h2 < 12) h2 += 12;
    if (p2 === 'am' && h2 === 12) h2 = 0;

    startTime = `${String(h1).padStart(2, '0')}:${String(m1).padStart(2, '0')}`;
    endTime = `${String(h2).padStart(2, '0')}:${String(m2).padStart(2, '0')}`;
  }

  let startDate: string | undefined;
  const dateMatch = command.match(/\b(202\d-\d{2}-\d{2})\b/);
  if (dateMatch) {
    startDate = dateMatch[1];
  } else if (lower.includes('tomorrow')) {
    startDate = getTomorrowIstIso();
  } else if (lower.includes('today')) {
    startDate = getIstIsoDate();
  }

  return { mode, startDate, startTime, endTime, durationMonths: 1 };
}

export interface GenerateScheduleOptions {
  paper: ExamPaper;
  mode?: string;
  startDate?: string;
  startTime?: string;
  endTime?: string;
  durationMonths?: number;
}

export function generateLockedSchedule(options: GenerateScheduleOptions): ScheduledTest[] {
  const { paper, mode = 'ALTERNATE_DAYS', startTime = '09:00', endTime = '12:00' } = options;
  const baseDateStr = options.startDate || getTomorrowIstIso();

  const syllabus: SyllabusTopic[] = paper.sections.map((s) => ({
    id: `syl-${s.id}`,
    subject: (s.id === 'chemistry' || s.id === 'mathematics' ? s.id : 'physics') as any,
    name: `${s.name} (${s.questions.length} Qs)`,
    completed: false,
  }));

  const tests: ScheduledTest[] = [];
  const count = mode === 'SINGLE' ? 1 : 4;
  const stepDays = mode === 'WEEKLY' ? 7 : mode === 'BIWEEKLY' ? 14 : mode === 'MONTHLY' ? 30 : 2;

  for (let i = 0; i < count; i++) {
    const dateStr = addDaysToIsoDate(baseDateStr, i * stepDays);
    const testId = `locked-sched-${Date.now()}-${i + 1}`;
    tests.push({
      id: testId,
      title: count === 1 ? paper.title : `${paper.title} (Part ${i + 1})`,
      pattern: paper.pattern,
      scheduledDate: dateStr,
      startTime,
      endTime,
      durationMinutes: paper.durationMinutes || 180,
      totalMarks: paper.totalMarks || 300,
      paperId: paper.id,
      paper,
      status: 'UPCOMING_LOCKED',
      isLocked: true,
      scheduledAt: Date.now() + i,
      syllabus,
    });
  }

  return tests;
}

export interface LiveTestWindowStatus {
  isLive: boolean;
  status: 'STARTING_SOON' | 'ENDING_SOON' | 'LIVE' | 'UPCOMING' | 'MISSED' | 'COMPLETED';
  timeRemainingMinutes: number;
  startTimestampMs: number;
  endTimestampMs: number;
  label: string;
}

export function getActiveLiveTestId(tests: ScheduledTest[], currentTime: Date = new Date()): string | null {
  const nowMs = currentTime.getTime();
  const todayStr = getIstIsoDate(currentTime);

  const eligible = tests.filter((test) => {
    if (test.status === 'COMPLETED') return false;
    const testDate = test.scheduledDate || todayStr;
    if (testDate !== todayStr) return false;
    const startMs = parseIstTimestampMs(testDate, test.startTime || '09:00');
    const endMs = parseIstTimestampMs(testDate, test.endTime || (test.id === 'sched-day-1-physics' ? '23:59' : '12:00'));
    return (nowMs >= startMs && nowMs < endMs) || test.status === 'LIVE_NOW';
  });

  if (eligible.length === 0) return null;
  // Strictly enforce: at one time only ONE test can be active
  return eligible[0].id;
}

export function getLiveTestWindowStatus(
  test: ScheduledTest,
  currentTime?: Date,
  activeLiveTestId?: string | null
): LiveTestWindowStatus {
  const scheduledDateStr = test.scheduledDate || getIstIsoDate();
  const startMs = parseIstTimestampMs(scheduledDateStr, test.startTime || '09:00');
  const endMs = parseIstTimestampMs(
    scheduledDateStr,
    test.endTime || (test.id === 'sched-day-1-physics' && scheduledDateStr === getIstIsoDate() ? '23:59' : '12:00')
  );

  if (test.status === 'COMPLETED') {
    return {
      isLive: false,
      status: 'COMPLETED',
      timeRemainingMinutes: 0,
      startTimestampMs: startMs,
      endTimestampMs: endMs,
      label: 'Completed (Single Attempt)',
    };
  }

  const now = currentTime || new Date();
  const todayStr = getIstIsoDate(now);
  const nowMs = now.getTime();

  // If this test is scheduled for today and is Day 1 or explicitly marked LIVE_NOW
  if (test.scheduledDate === todayStr && (test.status === 'LIVE_NOW' || test.id === 'sched-day-1-physics')) {
    if (nowMs < endMs) {
      return {
        isLive: true,
        status: 'LIVE',
        timeRemainingMinutes: Math.max(0, Math.round((endMs - nowMs) / 60000)),
        startTimestampMs: startMs,
        endTimestampMs: endMs,
        label: 'Live Exam Room Open (Today)',
      };
    }
  }

  // Strictly close the live window at the exact IST end timestamp
  if (nowMs >= endMs) {
    return {
      isLive: false,
      status: 'MISSED',
      timeRemainingMinutes: 0,
      startTimestampMs: startMs,
      endTimestampMs: endMs,
      label: 'Window Closed (IST)',
    };
  }

  if (nowMs >= startMs && nowMs < endMs) {
    // Single live test enforcement: if activeLiveTestId is specified, only that test is live
    if (activeLiveTestId !== undefined && activeLiveTestId !== null && activeLiveTestId !== test.id) {
      return {
        isLive: false,
        status: 'UPCOMING',
        timeRemainingMinutes: 0,
        startTimestampMs: startMs,
        endTimestampMs: endMs,
        label: 'Queued (Single Test Limit)',
      };
    }

    const minsToEnd = Math.max(1, Math.ceil((endMs - nowMs) / 60000));
    if (minsToEnd <= 30) {
      return {
        isLive: true,
        status: 'ENDING_SOON',
        timeRemainingMinutes: minsToEnd,
        startTimestampMs: startMs,
        endTimestampMs: endMs,
        label: `Closing Soon (${minsToEnd}m left • IST)`,
      };
    }
    return {
      isLive: true,
      status: 'LIVE',
      timeRemainingMinutes: minsToEnd,
      startTimestampMs: startMs,
      endTimestampMs: endMs,
      label: 'Live Now (IST)',
    };
  }

  const minsToStart = Math.max(1, Math.ceil((startMs - nowMs) / 60000));
  if (scheduledDateStr === todayStr && minsToStart <= 60 && minsToStart > 0) {
    return {
      isLive: false,
      status: 'STARTING_SOON',
      timeRemainingMinutes: minsToStart,
      startTimestampMs: startMs,
      endTimestampMs: endMs,
      label: `Starts in ${minsToStart}m (IST)`,
    };
  }

  return {
    isLive: false,
    status: 'UPCOMING',
    timeRemainingMinutes: minsToStart,
    startTimestampMs: startMs,
    endTimestampMs: endMs,
    label: 'Upcoming Locked (IST)',
  };
}
