import React, { useState, useRef } from 'react';
import { ExamPaper, ExamPattern, SubjectId, DailyRoutineItem, RoutineType } from '../types/exam';
import { SAMPLE_JEE_MAIN_MOCK } from '../data/samplePapers';
import {
  BookOpen,
  UploadCloud,
  Play,
  Clock,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight,
  Filter,
  Check,
  Zap,
  Flame,
  FileText,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

interface ModulePracticeSectionProps {
  onStartExam: (paper: ExamPaper) => void;
  onAddCustomPaper: (paper: ExamPaper) => void;
  onAddRoutineItems: (items: DailyRoutineItem[]) => void;
  savedCustomPapers: ExamPaper[];
}

interface CuratedModule {
  id: string;
  title: string;
  subject: SubjectId;
  chapter: string;
  totalQuestions: number;
  solvedQuestions: number;
  sprintDurationMinutes: number;
  sprintQuestionCount: number;
  difficulty: 'JEE Main' | 'JEE Advanced' | 'Allen Leader Ex-1';
  paper: ExamPaper;
}

export const ModulePracticeSection: React.FC<ModulePracticeSectionProps> = ({
  onStartExam,
  onAddCustomPaper,
  onAddRoutineItems,
  savedCustomPapers,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | 'ALL'>('ALL');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState('');
  const [uploadError, setUploadError] = useState('');
  const [moduleTitle, setModuleTitle] = useState('');
  const [moduleSubject, setModuleSubject] = useState<SubjectId>('physics');
  const [sprintDuration, setSprintDuration] = useState<number>(50);
  const [questionsPerSprint, setQuestionsPerSprint] = useState<number>(25);
  const [scheduledSlot, setScheduledSlot] = useState<string>('19:00 - 20:00');
  const [moduleUserCommand, setModuleUserCommand] = useState<string>('');

  const qFileInputRef = useRef<HTMLInputElement | null>(null);
  const solInputRef = useRef<HTMLInputElement | null>(null);
  const [questionFile, setQuestionFile] = useState<File | null>(null);
  const [solutionFile, setSolutionFile] = useState<File | null>(null);

  // Pre-curated high-yield coaching modules
  const defaultModules: CuratedModule[] = [
    {
      id: 'mod-kinematics',
      title: 'Allen Mechanics: Kinematics 1D & 2D (Exercise 1 & 2)',
      subject: 'physics',
      chapter: 'Kinematics',
      totalQuestions: 75,
      solvedQuestions: 35,
      sprintDurationMinutes: 50,
      sprintQuestionCount: 25,
      difficulty: 'Allen Leader Ex-1',
      paper: {
        ...SAMPLE_JEE_MAIN_MOCK,
        id: 'mod-paper-kinematics',
        title: 'Kinematics Module Practice Sprint 01',
        durationMinutes: 50,
      },
    },
    {
      id: 'mod-nlm',
      title: 'Laws of Motion, Pulley Systems & Friction Sprint',
      subject: 'physics',
      chapter: 'Newton\'s Laws of Motion',
      totalQuestions: 60,
      solvedQuestions: 20,
      sprintDurationMinutes: 50,
      sprintQuestionCount: 20,
      difficulty: 'JEE Main',
      paper: {
        ...SAMPLE_JEE_MAIN_MOCK,
        id: 'mod-paper-nlm',
        title: 'NLM & Friction Module Practice Sprint',
        durationMinutes: 50,
      },
    },
    {
      id: 'mod-mole',
      title: 'Mole Concept, Stoichiometry & Equivalent Weight Sheet',
      subject: 'chemistry',
      chapter: 'Physical Chemistry: Mole Concept',
      totalQuestions: 50,
      solvedQuestions: 30,
      sprintDurationMinutes: 45,
      sprintQuestionCount: 25,
      difficulty: 'Allen Leader Ex-1',
      paper: {
        ...SAMPLE_JEE_MAIN_MOCK,
        id: 'mod-paper-mole',
        title: 'Mole Concept Practice Sprint',
        durationMinutes: 45,
      },
    },
    {
      id: 'mod-bonding',
      title: 'Chemical Bonding, MOT & Hybridization Exercise 1',
      subject: 'chemistry',
      chapter: 'Inorganic Chemistry: Chemical Bonding',
      totalQuestions: 65,
      solvedQuestions: 15,
      sprintDurationMinutes: 45,
      sprintQuestionCount: 25,
      difficulty: 'JEE Main',
      paper: {
        ...SAMPLE_JEE_MAIN_MOCK,
        id: 'mod-paper-bonding',
        title: 'Chemical Bonding Module Practice Sprint',
        durationMinutes: 45,
      },
    },
    {
      id: 'mod-quadratic',
      title: 'Quadratic Equations, Location of Roots & Modulus',
      subject: 'mathematics',
      chapter: 'Algebra: Quadratic Equations',
      totalQuestions: 55,
      solvedQuestions: 25,
      sprintDurationMinutes: 50,
      sprintQuestionCount: 25,
      difficulty: 'JEE Main',
      paper: {
        ...SAMPLE_JEE_MAIN_MOCK,
        id: 'mod-paper-quadratic',
        title: 'Quadratic Equations Module Sprint',
        durationMinutes: 50,
      },
    },
    {
      id: 'mod-seq-series',
      title: 'Sequence & Series (AP, GP, AGP & Special Sums)',
      subject: 'mathematics',
      chapter: 'Algebra: Sequence & Series',
      totalQuestions: 60,
      solvedQuestions: 10,
      sprintDurationMinutes: 50,
      sprintQuestionCount: 25,
      difficulty: 'JEE Advanced',
      paper: {
        ...SAMPLE_JEE_MAIN_MOCK,
        id: 'mod-paper-seq',
        title: 'Sequence & Series Module Practice Sprint',
        durationMinutes: 50,
      },
    },
  ];

  const filteredModules =
    selectedSubject === 'ALL'
      ? defaultModules
      : defaultModules.filter((m) => m.subject === selectedSubject);

  // Upload and parse Module PDF
  const handleUploadModule = async () => {
    if (!questionFile) {
      setUploadError('Please select your Coaching Module PDF');
      return;
    }

    setIsUploading(true);
    setUploadError('');
    setUploadProgress('Reading Module PDF...');

    try {
      const readBase64 = (file: File): Promise<string> =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

      const fileBase64 = await readBase64(questionFile);
      let solutionFileBase64 = '';
      if (solutionFile) {
        setUploadProgress('Reading Module Solution PDF...');
        solutionFileBase64 = await readBase64(solutionFile);
      }

      const title =
        moduleTitle.trim() ||
        questionFile.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ') ||
        'Coaching Module Practice Sprint';

      setUploadProgress('Gemini Vision is extracting module questions & LaTeX formulas...');

      const response = await fetch('/api/parse-exam-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fileBase64,
          solutionFileBase64: solutionFileBase64 || undefined,
          mimeType: questionFile.type || 'application/pdf',
          examTitle: title,
          pattern: 'JEE_MAIN',
          userCommand: moduleUserCommand.trim() || undefined,
          customDurationMinutes: sprintDuration,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server status ${response.status}`);
      }

      setUploadProgress('Chunking module into timed CBT practice sprints...');
      const data = await response.json();

      if (!data.success || !data.examPaper) {
        throw new Error(data.error || 'Failed to parse module questions');
      }

      const generatedPaper: ExamPaper = {
        id: `module-paper-${Date.now()}`,
        title: `${title} (Sprint)`,
        pattern: 'JEE_MAIN',
        durationMinutes: sprintDuration,
        totalMarks: 100,
        sections: data.examPaper.sections || [],
        createdAt: new Date().toISOString(),
      };

      onAddCustomPaper(generatedPaper);

      // Auto-schedule sprint into daily routine checklist
      const newRoutineItem: DailyRoutineItem = {
        id: `rout-mod-${Date.now()}`,
        type: 'MODULE_PRACTICE',
        title: `${title} • Sprint 01`,
        chapterOrTopic: title,
        subject: moduleSubject,
        scheduledDate: new Date().toISOString().split('T')[0],
        scheduledSlot: scheduledSlot,
        durationMinutes: sprintDuration,
        questionCount: questionsPerSprint,
        paperId: generatedPaper.id,
        paper: generatedPaper,
        isCompleted: false,
        weekNumber: 1,
        dayName: 'Today',
      };

      onAddRoutineItems([newRoutineItem]);
      setQuestionFile(null);
      setSolutionFile(null);
      setModuleTitle('');
      alert(`Success! "${title}" has been converted into a CBT Practice Room and scheduled on Today's Live Desk.`);
    } catch (err: any) {
      console.error(err);
      setUploadError(err.message || 'Failed to process module PDF.');
    } finally {
      setIsUploading(false);
      setUploadProgress('');
    }
  };

  // Schedule a curated module sprint into the daily routine
  const handleScheduleCuratedSprint = (mod: CuratedModule) => {
    const newItem: DailyRoutineItem = {
      id: `rout-curated-${Date.now()}`,
      type: 'MODULE_PRACTICE',
      title: `${mod.title} • Timed Sprint`,
      chapterOrTopic: mod.chapter,
      subject: mod.subject,
      scheduledDate: new Date().toISOString().split('T')[0],
      scheduledSlot: '19:00 - 20:00',
      durationMinutes: mod.sprintDurationMinutes,
      questionCount: mod.sprintQuestionCount,
      paperId: mod.paper.id,
      paper: mod.paper,
      isCompleted: false,
      weekNumber: 1,
      dayName: 'Today',
    };

    onAddRoutineItems([newItem]);
    alert(`"${mod.title}" has been scheduled into Today's Live Desk (19:00 - 20:00). You can just sit down at 7 PM and practice!`);
  };

  return (
    <div className="space-y-8">
      {/* 1. HERO BANNER: The Coaching Module Solution */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 md:p-8 border border-emerald-800/60 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Dedicated Module Practice Section
          </div>

          <h2 className="text-xl md:text-3xl font-extrabold font-display text-white">
            Solve Massive Coaching Modules Under Real CBT Timer Pressure
          </h2>

          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            Stop passively staring at 200-question Allen / FIITJEE module PDFs on paper. Upload your module or pick a curated exercise below—the AI splits it into daily 50-minute CBT sprints so you finish every exercise on time with zero backlog!
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Auto-Split into 25-Q Sprints
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-amber-400" />
              Strict 50-Min CBT Timer
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Flame className="w-4 h-4 text-rose-400" />
              Scheduled Live into Daily Checklist
            </span>
          </div>
        </div>
      </div>

      {/* 2. UPLOAD MODULE PDF & AUTO-CHUNK TOOL */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8 space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-700 pb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            <UploadCloud className="w-4 h-4" />
            Module PDF Ingestion & Sprint Generator
          </div>
          <h3 className="text-base md:text-lg font-bold font-display text-slate-900 dark:text-white mt-1">
            Upload Your Coaching Module (Allen / Resonance / FIITJEE)
          </h3>
          <p className="text-xs text-slate-500">
            Gemini AI will extract all questions, formulas, and diagrams, and package them as an authentic CBT practice test.
          </p>
        </div>

        {uploadError && (
          <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-300 text-xs flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{uploadError}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Module / Chapter Title
            </label>
            <input
              type="text"
              value={moduleTitle}
              onChange={(e) => setModuleTitle(e.target.value)}
              placeholder="e.g. Allen Mechanics Exercise 1 (Q1-Q50)"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Subject
            </label>
            <select
              value={moduleSubject}
              onChange={(e) => setModuleSubject(e.target.value as SubjectId)}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 font-semibold"
            >
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="mathematics">Mathematics</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Sprint Time Slot
            </label>
            <input
              type="text"
              value={scheduledSlot}
              onChange={(e) => setScheduledSlot(e.target.value)}
              placeholder="e.g. 19:00 - 20:00 (7 PM - 8 PM)"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* AI Director Command Box for Module */}
        <div className="p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
              AI Director Custom Command (Optional)
            </span>
            <span className="text-[10px] text-slate-500">Gemini 3.8 Flash Vision</span>
          </div>
          <input
            type="text"
            value={moduleUserCommand}
            onChange={(e) => setModuleUserCommand(e.target.value)}
            placeholder='e.g. "Extract all 40 questions from Exercise 1. Answer key is on the last page. Format formulas in LaTeX."'
            className="w-full px-3 py-2 text-xs rounded-lg border border-emerald-200 dark:border-emerald-900/50 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Dual Files: Question Module + Optional Solution Key */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            onClick={() => qFileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
              questionFile
                ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20'
                : 'border-slate-300 dark:border-slate-600 hover:border-emerald-500 bg-slate-50 dark:bg-slate-900/50'
            }`}
          >
            <input
              type="file"
              ref={qFileInputRef}
              accept=".pdf,application/pdf"
              className="hidden"
              onChange={(e) => setQuestionFile(e.target.files?.[0] || null)}
            />
            <FileText className="w-6 h-6 mx-auto text-emerald-500 mb-1" />
            <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
              {questionFile ? questionFile.name : 'Select Module Questions PDF'}
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">
              {questionFile ? `${Math.round(questionFile.size / 1024)} KB` : 'Click to choose module file'}
            </div>
          </div>

          <div
            onClick={() => solInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
              solutionFile
                ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/20'
                : 'border-slate-300 dark:border-slate-600 hover:border-indigo-500 bg-slate-50 dark:bg-slate-900/50'
            }`}
          >
            <input
              type="file"
              ref={solInputRef}
              accept=".pdf,application/pdf"
              className="hidden"
              onChange={(e) => setSolutionFile(e.target.files?.[0] || null)}
            />
            <FileText className="w-6 h-6 mx-auto text-indigo-500 mb-1" />
            <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
              {solutionFile ? solutionFile.name : 'Optional Module Solutions / Answer Key'}
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">
              {solutionFile ? `${Math.round(solutionFile.size / 1024)} KB` : 'Pair solutions for post-practice review'}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="text-xs text-slate-500">
            Sprint Specs: <span className="font-bold text-slate-700 dark:text-slate-300">{questionsPerSprint} Questions</span> • <span className="font-bold text-slate-700 dark:text-slate-300">{sprintDuration} mins CBT timer</span>
          </div>

          <button
            onClick={handleUploadModule}
            disabled={!questionFile || isUploading}
            className="w-full sm:w-auto px-6 py-3 text-xs md:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 rounded-xl shadow-md transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            {isUploading ? (uploadProgress || 'Converting Module...') : 'Convert to CBT Sprints & Schedule'}
          </button>
        </div>
      </div>

      {/* 3. CURATED COACHING MODULES LIBRARY */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base md:text-lg font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-500" />
              Standard Kota Coaching Module Sprints (Instant Practice)
            </h3>
            <p className="text-xs text-slate-500">
              Choose any topic to launch an authentic 50-minute timed CBT sprint immediately or schedule it into today's slot.
            </p>
          </div>

          {/* Subject Filter */}
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            {(['ALL', 'physics', 'chemistry', 'mathematics'] as const).map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-colors ${
                  selectedSubject === sub
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {sub === 'ALL' ? 'All Subjects' : sub}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredModules.map((mod) => {
            const progress = Math.round((mod.solvedQuestions / mod.totalQuestions) * 100);

            return (
              <div
                key={mod.id}
                className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 shadow-xs hover:border-indigo-400 transition-all flex flex-col justify-between gap-4 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                      {mod.subject}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 font-mono">
                      {mod.difficulty}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold font-display text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {mod.title}
                  </h4>

                  <p className="text-xs text-slate-500">
                    Chapter: <span className="font-medium text-slate-700 dark:text-slate-300">{mod.chapter}</span>
                  </p>

                  {/* Progress bar */}
                  <div className="space-y-1 pt-1">
                    <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                      <span>Module Progress:</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">
                        {mod.solvedQuestions} / {mod.totalQuestions} Qs ({progress}%)
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Sprints Details & Action Buttons */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-700 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {mod.sprintDurationMinutes} mins
                    </span>
                    <span className="font-mono font-semibold text-slate-700 dark:text-slate-300">
                      {mod.sprintQuestionCount} Questions / Sprint
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => handleScheduleCuratedSprint(mod)}
                      className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      Schedule
                    </button>

                    <button
                      onClick={() => onStartExam(mod.paper)}
                      className="px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      Practice Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
