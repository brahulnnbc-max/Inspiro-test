/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Web Audio API Sound Synthesizer for JEE CBT Exam Alarms & Reminders
// Supports:
// 1. 10 minutes before test live alarm (08:50 AM IST)
// 2. Test Live started alarm (09:00 AM IST)
// 3. 15 minutes before test end warning alarm (11:45 AM IST / 15m remaining in CBT room)
// 4. After exam submission completion chime

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    if (!audioCtx) {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtxClass) {
        audioCtx = new AudioCtxClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  } catch (e) {
    console.warn('AudioContext not supported or blocked:', e);
    return null;
  }
}

const SOUND_PREF_KEY = 'jee_cbt_alarm_sound_enabled';

export function isAlarmSoundEnabled(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    const val = localStorage.getItem(SOUND_PREF_KEY);
    return val === null ? true : val === 'true';
  } catch {
    return true;
  }
}

export function setAlarmSoundEnabled(enabled: boolean): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SOUND_PREF_KEY, String(enabled));
  } catch (e) {
    console.warn(e);
  }
}

// Memory set of triggered alarms during the active session to avoid ringing repeatedly every second
const rungAlarmsCache = new Set<string>();

export function hasAlarmRung(testId: string, alarmType: '10_MIN_BEFORE' | 'LIVE_START' | '15_MIN_BEFORE_END' | 'AFTER_SUBMIT'): boolean {
  return rungAlarmsCache.has(`${testId}::${alarmType}`);
}

export function markAlarmAsRung(testId: string, alarmType: '10_MIN_BEFORE' | 'LIVE_START' | '15_MIN_BEFORE_END' | 'AFTER_SUBMIT'): void {
  rungAlarmsCache.add(`${testId}::${alarmType}`);
}

export function resetAlarmCache(testId?: string): void {
  if (testId) {
    Array.from(rungAlarmsCache).forEach((key) => {
      if (key.startsWith(`${testId}::`)) {
        rungAlarmsCache.delete(key);
      }
    });
  } else {
    rungAlarmsCache.clear();
  }
}

// Synthesize pleasant, professional exam-hall bell tones
function playToneSequence(tones: Array<{ freq: number; start: number; duration: number; gain?: number; type?: OscillatorType }>) {
  if (!isAlarmSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  tones.forEach(({ freq, start, duration, gain = 0.3, type = 'sine' }) => {
    try {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now + start);

      gainNode.gain.setValueAtTime(0, now + start);
      gainNode.gain.linearRampToValueAtTime(gain, now + start + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + start + duration);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now + start);
      osc.stop(now + start + duration);
    } catch (e) {
      console.warn('Failed playing note:', e);
    }
  });
}

/**
 * 1. 10 Minutes Before Test Live Alarm (08:50 AM IST)
 * Dual-tone chime: High gentle bell alerting student to take seat.
 */
export function playTenMinuteWarningAlarm(): void {
  playToneSequence([
    { freq: 523.25, start: 0.0, duration: 0.6, gain: 0.35, type: 'triangle' }, // C5
    { freq: 659.25, start: 0.25, duration: 0.8, gain: 0.35, type: 'sine' },     // E5
    { freq: 783.99, start: 0.55, duration: 1.2, gain: 0.4, type: 'sine' },      // G5
    { freq: 1046.5, start: 0.9, duration: 1.5, gain: 0.45, type: 'triangle' },  // C6
  ]);
}

/**
 * 2. Before Live / Live Starts Now Alarm (09:00 AM IST)
 * Resonant, energetic school/CBT official bell announcing exam is now live.
 */
export function playLiveStartedAlarm(): void {
  playToneSequence([
    { freq: 659.25, start: 0.0, duration: 0.5, gain: 0.4, type: 'sine' },     // E5
    { freq: 880.00, start: 0.2, duration: 0.6, gain: 0.45, type: 'triangle' }, // A5
    { freq: 1046.5, start: 0.45, duration: 1.0, gain: 0.5, type: 'sine' },     // C6
    { freq: 1318.5, start: 0.75, duration: 1.6, gain: 0.55, type: 'triangle' },// E6
  ]);
}

/**
 * 3. 15 Minutes Before Test Ends Warning Alarm (11:45 AM IST / 15m remaining in CBT room)
 * Urgent double chime alerting candidate that 15 minutes are left.
 */
export function playFifteenMinuteClosingAlarm(): void {
  playToneSequence([
    { freq: 783.99, start: 0.0, duration: 0.4, gain: 0.4, type: 'triangle' }, // G5
    { freq: 659.25, start: 0.15, duration: 0.5, gain: 0.4, type: 'sine' },     // E5
    { freq: 783.99, start: 0.45, duration: 0.4, gain: 0.45, type: 'triangle' },// G5
    { freq: 523.25, start: 0.6, duration: 1.2, gain: 0.5, type: 'sine' },      // C5
  ]);
}

/**
 * 4. After Submitting Exam Chime
 * Harmonious celebratory chord confirming test responses are safely submitted.
 */
export function playExamSubmittedChime(): void {
  playToneSequence([
    { freq: 523.25, start: 0.0, duration: 0.7, gain: 0.35, type: 'sine' },     // C5
    { freq: 659.25, start: 0.15, duration: 0.7, gain: 0.35, type: 'sine' },    // E5
    { freq: 783.99, start: 0.3, duration: 0.8, gain: 0.4, type: 'sine' },      // G5
    { freq: 1046.5, start: 0.45, duration: 1.8, gain: 0.45, type: 'triangle' },// C6
  ]);
}

export function playTestAlarm(type: '10_MIN_BEFORE' | 'LIVE_START' | '15_MIN_BEFORE_END' | 'AFTER_SUBMIT'): void {
  if (type === '10_MIN_BEFORE') playTenMinuteWarningAlarm();
  else if (type === 'LIVE_START') playLiveStartedAlarm();
  else if (type === '15_MIN_BEFORE_END') playFifteenMinuteClosingAlarm();
  else if (type === 'AFTER_SUBMIT') playExamSubmittedChime();
}
