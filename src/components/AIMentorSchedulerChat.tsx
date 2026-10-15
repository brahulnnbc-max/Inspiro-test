import React, { useState } from 'react';
import { DailyRoutineItem, RoutineType } from '../types/exam';
import {
  Sparkles,
  Send,
  Calendar,
  Clock,
  CheckCircle2,
  Bot,
  User,
  Zap,
  Flame,
  ArrowRight,
  BookOpen,
  Award,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'mentor';
  text: string;
  timestamp: string;
  proposedRoutine?: {
    routineTitle: string;
    summary: string;
    items: DailyRoutineItem[];
  };
}

interface AIMentorSchedulerChatProps {
  onApplyRoutine: (items: DailyRoutineItem[]) => void;
  currentRoutineItems: DailyRoutineItem[];
  initialPrompt?: string;
}

export const AIMentorSchedulerChat: React.FC<AIMentorSchedulerChatProps> = ({
  onApplyRoutine,
  currentRoutineItems,
  initialPrompt = '',
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'mentor',
      text: "Namaste Aspirant! I am your AI Master Academic Director (modeled after Kota's top Allen & MathonGo coaches). Tell me your target exam, upcoming coaching test dates, or the module chapters you are stuck with. You can also command me to create custom tests from your tagged Doubts, Hard & Tricky questions (Allen RACE series)! I will schedule everything into your live checklist so you can just sit down, finish today's work, and relax!",
      timestamp: 'Just now',
    },
  ]);

  const [inputVal, setInputVal] = useState(initialPrompt);
  const [isLoading, setIsLoading] = useState(false);
  const [practiceSlot, setPracticeSlot] = useState('19:00 - 20:00');
  const [testSlot, setTestSlot] = useState('09:00 - 12:00');

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputVal;
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-academic-mentor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          practiceSlot,
          testSlot,
        }),
      });

      const resData = await response.json();
      if (!response.ok || !resData.success) {
        throw new Error(resData.error || 'Failed to consult AI Mentor');
      }
      const mentorData = resData.data;

      let mappedItems: DailyRoutineItem[] | undefined = undefined;
      if (mentorData.proposedRoutine && mentorData.proposedRoutine.items) {
        mappedItems = mentorData.proposedRoutine.items.map((item: any, idx: number) => ({
          id: `mentor-rout-${Date.now()}-${idx}`,
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
        }));
      }

      const mentorMsg: ChatMessage = {
        id: `mentor-${Date.now()}`,
        sender: 'mentor',
        text: mentorData.replyText || "Here is your strategic study roadmap:",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        proposedRoutine: mappedItems
          ? {
              routineTitle: mentorData.proposedRoutine.routineTitle || 'Personalized Coaching Schedule',
              summary: mentorData.proposedRoutine.summary || 'Coaching routine created',
              items: mappedItems,
            }
          : undefined,
      };

      setMessages((prev) => [...prev, mentorMsg]);
    } catch (e: any) {
      console.error('Mentor error:', e);
      const errorMsg: ChatMessage = {
        id: `mentor-err-${Date.now()}`,
        sender: 'mentor',
        text: `I encountered a momentary delay: "${e.message || 'Connection timeout'}". Please try resending or tap one of the quick command buttons below!`,
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplyProposedSchedule = (items: DailyRoutineItem[]) => {
    onApplyRoutine(items);
    alert(`Successfully applied ${items.length} scheduled practice sessions & tests to your Live Checklist!`);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col h-[700px]">
      {/* Mentor Header */}
      <div className="p-4 md:p-6 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shrink-0">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold font-display text-slate-900 dark:text-white">
                AI Master Academic Director
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                Online
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Command AI to arrange your module sprints, create multi-month checklists, and balance tests.
            </p>
          </div>
        </div>

        {/* Slot Controls */}
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
            <Clock className="w-3.5 h-3.5 text-indigo-500" />
            <span className="text-slate-500">Daily Slot:</span>
            <input
              type="text"
              value={practiceSlot}
              onChange={(e) => setPracticeSlot(e.target.value)}
              className="w-24 font-mono font-bold text-slate-900 dark:text-white bg-transparent focus:outline-hidden"
              title="Daily practice slot"
            />
          </div>
        </div>
      </div>

      {/* Chat Messages Body */}
      <div className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {m.sender === 'mentor' && (
              <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`max-w-2xl rounded-2xl p-4 text-xs md:text-sm space-y-3 leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800'
              }`}
            >
              <div>{m.text}</div>

              {/* Proposed Routine Box */}
              {m.proposedRoutine && (
                <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-indigo-200 dark:border-indigo-900/60 space-y-3 text-slate-900 dark:text-white">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                        Generated Coaching Roadmap
                      </div>
                      <div className="text-sm font-bold font-display">
                        {m.proposedRoutine.routineTitle}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                      {m.proposedRoutine.items.length} Sessions
                    </span>
                  </div>

                  <p className="text-xs text-slate-500">
                    {m.proposedRoutine.summary}
                  </p>

                  {/* Preview Items */}
                  <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                    {m.proposedRoutine.items.map((it, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              it.type === 'REAL_TEST' ? 'bg-rose-500' : 'bg-emerald-500'
                            }`}
                          />
                          <span className="font-bold">{it.dayName}:</span>
                          <span className="text-slate-600 dark:text-slate-400 truncate max-w-[200px]">
                            {it.title}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 shrink-0">
                          {it.scheduledSlot}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={() => handleApplyProposedSchedule(m.proposedRoutine!.items)}
                    className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    Apply This Routine Directly to My Live Checklist
                  </button>
                </div>
              )}

              <div
                className={`text-[10px] text-right font-mono ${
                  m.sender === 'user' ? 'text-indigo-200' : 'text-slate-400'
                }`}
              >
                {m.timestamp}
              </div>
            </div>

            {m.sender === 'user' && (
              <div className="w-8 h-8 rounded-xl bg-slate-700 text-white flex items-center justify-center shrink-0 mt-1">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-3 items-center text-xs text-slate-500 italic">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 animate-spin" />
            </div>
            <span>Academic Director is formulating your strategic schedule...</span>
          </div>
        )}
      </div>

      {/* Quick Prompts Suggestions */}
      <div className="p-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 overflow-x-auto text-xs">
        <span className="text-slate-400 font-medium text-[11px] shrink-0">Suggestions:</span>
        <button
          onClick={() =>
            handleSendMessage(
              "Schedule an Allen Leader 6-Month routine: Mon-Fri daily 1-hour module practice at 7 PM and alternate Sunday 3-hour tests."
            )
          }
          className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shrink-0 text-xs transition-colors"
        >
          Kota Leader 6-Month Routine
        </button>
        <button
          onClick={() =>
            handleSendMessage(
              "I have 80 questions in Kinematics and 60 in Mole Concept. Break them into 5 daily 50-minute practice sprints and schedule a test on Sunday."
            )
          }
          className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shrink-0 text-xs transition-colors"
        >
          Kinematics + Mole Concept Sprints
        </button>
        <button
          onClick={() =>
            handleSendMessage(
              "Schedule a daily 45-minute Allen RACE test slot at 7 PM for the next 7 days, pulling my tagged Doubt, Hard, and Tricky questions so I can repeat them until 100% mastered."
            )
          }
          className="px-3 py-1.5 rounded-lg bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 dark:hover:bg-purple-900 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 shrink-0 text-xs font-semibold transition-colors flex items-center gap-1"
        >
          <Award className="w-3.5 h-3.5 text-purple-500" />
          Schedule Daily RACE Repeat Tests
        </button>
      </div>

      {/* Input Bar */}
      <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex gap-2">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Command your AI Mentor (e.g. 'Schedule my Allen Physics module for next 2 weeks with a test on Sunday')..."
          disabled={isLoading}
          className="flex-1 px-4 py-3 text-xs md:text-sm rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={() => handleSendMessage()}
          disabled={!inputVal.trim() || isLoading}
          className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold text-xs transition-all disabled:opacity-50 flex items-center gap-1.5 shadow-md"
        >
          <Send className="w-4 h-4" />
          <span>Send</span>
        </button>
      </div>
    </div>
  );
};
