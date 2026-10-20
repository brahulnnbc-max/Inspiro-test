import React, { useState, useRef } from 'react';
import { ExamPaper, ExamPattern, SubjectId, DailyRoutineItem, RoutineType } from '../types/exam';
import { SAMPLE_JEE_MAIN_MOCK } from '../data/samplePapers';
import { VIBRANT_GEOMETRICAL_OPTICS_COMPLETE_PAPER } from '../data/vibrantGeometricalOpticsData';
import { VIBRANT_MATRICES_COMPLETE_PAPER } from '../data/vibrantMatricesData';
import { VIBRANT_DETERMINANT_COMPLETE_PAPER } from '../data/vibrantDeterminantData';
import { VIBRANT_DIFF_EQ_AUC_COMPLETE_PAPER } from '../data/vibrantDiffEqAucData';
import { VIBRANT_LIMIT_CONT_DIFF_COMPLETE_PAPER } from '../data/vibrantLimitContDiffData';
import { VIBRANT_BINOMIAL_COMPLETE_PAPER } from '../data/vibrantBinomialData';
import { VIBRANT_ELECTROSTATICS_COMPLETE_PAPER } from '../data/vibrantElectrostaticsData';
import { VIBRANT_CURRENT_ELECTRICITY_COMPLETE_PAPER } from '../data/vibrantCurrentElectricityData';
import { VIBRANT_MODERN_PHYSICS_COMPLETE_PAPER } from '../data/vibrantModernPhysicsData';
import { VIBRANT_VECTORS_3D_COMPLETE_PAPER } from '../data/vibrantVectors3DData';
import { VIBRANT_INTEGRATION_COMPLETE_PAPER } from '../data/vibrantIntegrationData';
import { VIBRANT_KINEMATICS_COMPLETE_PAPER } from '../data/vibrantKinematicsData';
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
  RotateCcw,
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
  const [successNotice, setSuccessNotice] = useState('');
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
  // Pre-curated high-yield coaching modules: All chapter questions in ONE unlocked test series (4 min/question)
  const defaultModules: CuratedModule[] = [
    {
      id: 'mod-matrices',
      title: 'Vibrant Kota: Matrices Mega XII Master Collection (All 150 Qs)',
      subject: 'mathematics',
      chapter: 'Matrices',
      totalQuestions: 150,
      solvedQuestions: 0,
      sprintDurationMinutes: 600, // 150 * 4 = 600 mins (10 hours)
      sprintQuestionCount: 150,
      difficulty: 'Allen Leader Ex-1',
      paper: {
        ...VIBRANT_MATRICES_COMPLETE_PAPER,
        durationMinutes: 600,
      },
    },
    {
      id: 'mod-determinant',
      title: 'Vibrant Kota: Determinant Mega XII Master Collection (All 140 Qs)',
      subject: 'mathematics',
      chapter: 'Determinant',
      totalQuestions: 140,
      solvedQuestions: 0,
      sprintDurationMinutes: 560, // 140 * 4 = 560 mins (9h 20m)
      sprintQuestionCount: 140,
      difficulty: 'JEE Advanced',
      paper: {
        ...VIBRANT_DETERMINANT_COMPLETE_PAPER,
        durationMinutes: 560,
      },
    },
    {
      id: 'mod-diffeq-auc',
      title: 'Vibrant Kota: Differential Equation & AUC Mega XII (All 200 Qs)',
      subject: 'mathematics',
      chapter: 'Differential Equations & Area',
      totalQuestions: 200,
      solvedQuestions: 0,
      sprintDurationMinutes: 800, // 200 * 4 = 800 mins (13h 20m)
      sprintQuestionCount: 200,
      difficulty: 'JEE Advanced',
      paper: {
        ...VIBRANT_DIFF_EQ_AUC_COMPLETE_PAPER,
        durationMinutes: 800,
      },
    },
    {
      id: 'mod-lcd',
      title: 'Vibrant Kota: Limit, Continuity & Differentiability (All 250 Qs)',
      subject: 'mathematics',
      chapter: 'Limit, Continuity & Differentiability',
      totalQuestions: 250,
      solvedQuestions: 0,
      sprintDurationMinutes: 1000, // 250 * 4 = 1000 mins (16h 40m)
      sprintQuestionCount: 250,
      difficulty: 'Allen Leader Ex-1',
      paper: {
        ...VIBRANT_LIMIT_CONT_DIFF_COMPLETE_PAPER,
        durationMinutes: 1000,
      },
    },
    {
      id: 'mod-binomial',
      title: 'Vibrant Kota: Binomial Theorem Micro XI Collection (All 130 Qs)',
      subject: 'mathematics',
      chapter: 'Binomial Theorem',
      totalQuestions: 130,
      solvedQuestions: 0,
      sprintDurationMinutes: 520, // 130 * 4 = 520 mins (8h 40m)
      sprintQuestionCount: 130,
      difficulty: 'JEE Main',
      paper: {
        ...VIBRANT_BINOMIAL_COMPLETE_PAPER,
        durationMinutes: 520,
      },
    },
    {
      id: 'mod-geometrical-optics',
      title: 'Vibrant Kota: Geometrical Optics Master Collection (All 229 Qs)',
      subject: 'physics',
      chapter: 'Geometrical Optics',
      totalQuestions: 229,
      solvedQuestions: 0,
      sprintDurationMinutes: 916, // 229 * 4 = 916 mins (15h 16m)
      sprintQuestionCount: 229,
      difficulty: 'Allen Leader Ex-1',
      paper: {
        ...VIBRANT_GEOMETRICAL_OPTICS_COMPLETE_PAPER,
        durationMinutes: 916,
      },
    },
    {
      id: 'mod-electrostatics',
      title: 'Vibrant Kota: Electrostatics Master Collection (All 259 Qs)',
      subject: 'physics',
      chapter: 'Electrostatics',
      totalQuestions: 259,
      solvedQuestions: 0,
      sprintDurationMinutes: 1036, // 259 * 4 = 1036 mins (17h 16m)
      sprintQuestionCount: 259,
      difficulty: 'JEE Advanced',
      paper: {
        ...VIBRANT_ELECTROSTATICS_COMPLETE_PAPER,
        durationMinutes: 1036,
      },
    },
    {
      id: 'mod-current-electricity',
      title: 'Vibrant Kota: Current Electricity Master Collection (All 224 Qs)',
      subject: 'physics',
      chapter: 'Current Electricity',
      totalQuestions: 224,
      solvedQuestions: 0,
      sprintDurationMinutes: 896, // 224 * 4 = 896 mins (14h 56m)
      sprintQuestionCount: 224,
      difficulty: 'Allen Leader Ex-1',
      paper: {
        ...VIBRANT_CURRENT_ELECTRICITY_COMPLETE_PAPER,
        durationMinutes: 896,
      },
    },
    {
      id: 'mod-modern-physics',
      title: 'Vibrant Kota: Modern Physics Master Collection (All 243 Qs)',
      subject: 'physics',
      chapter: 'Modern Physics',
      totalQuestions: 243,
      solvedQuestions: 0,
      sprintDurationMinutes: 972, // 243 * 4 = 972 mins (16h 12m)
      sprintQuestionCount: 243,
      difficulty: 'JEE Main',
      paper: {
        ...VIBRANT_MODERN_PHYSICS_COMPLETE_PAPER,
        durationMinutes: 972,
      },
    },
    {
      id: 'mod-vectors-3d',
      title: 'Vibrant Kota: Vectors & 3-D Geometry Master Archive (All 113 Qs)',
      subject: 'mathematics',
      chapter: 'Vectors & 3D Geometry',
      totalQuestions: 113,
      solvedQuestions: 0,
      sprintDurationMinutes: 452, // 113 * 4 = 452 mins (7h 32m)
      sprintQuestionCount: 113,
      difficulty: 'JEE Advanced',
      paper: {
        ...VIBRANT_VECTORS_3D_COMPLETE_PAPER,
        durationMinutes: 452,
      },
    },
    {
      id: 'mod-integration',
      title: 'Vibrant Kota: Indefinite & Definite Integration (All 185 Qs)',
      subject: 'mathematics',
      chapter: 'Integration',
      totalQuestions: 185,
      solvedQuestions: 0,
      sprintDurationMinutes: 740, // 185 * 4 = 740 mins (12h 20m)
      sprintQuestionCount: 185,
      difficulty: 'JEE Advanced',
      paper: {
        ...VIBRANT_INTEGRATION_COMPLETE_PAPER,
        durationMinutes: 740,
      },
    },
    {
      id: 'mod-kinematics',
      title: 'Vibrant Kota: Kinematics 1D & 2D Master Collection (All 88 Qs)',
      subject: 'physics',
      chapter: 'Kinematics',
      totalQuestions: 88,
      solvedQuestions: 0,
      sprintDurationMinutes: 352, // 88 * 4 = 352 mins (5h 52m)
      sprintQuestionCount: 88,
      difficulty: 'Allen Leader Ex-1',
      paper: {
        ...VIBRANT_KINEMATICS_COMPLETE_PAPER,
        durationMinutes: 352,
      },
    },
  ];

  const filteredModules = defaultModules.filter(
    (m) => selectedSubject === 'ALL' || m.subject === selectedSubject
  );

  // Helper: Convert File to Base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const res = reader.result as string;
        const base64Data = res.split(',')[1] || '';
        resolve(base64Data);
      };
      reader.onerror = (e) => reject(e);
      reader.readAsDataURL(file);
    });
  };

  // Upload and process module PDF
  const handleUploadModule = async () => {
    if (!questionFile) {
      setUploadError('Please select a Module Questions PDF first');
      return;
    }

    setIsUploading(true);
    setUploadError('');
    setUploadProgress('Extracting questions with Gemini Vision...');

    try {
      const qBase64 = await fileToBase64(questionFile);
      let solBase64: string | undefined;

      if (solutionFile) {
        solBase64 = await fileToBase64(solutionFile);
      }

      const title =
        moduleTitle.trim() ||
        questionFile.name.replace(/\.[^/.]+$/, '') ||
        'Coaching Module Sprint';

      const response = await fetch('/api/parse-exam-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pdfBase64: qBase64,
          pdfMimeType: questionFile.type || 'application/pdf',
          solutionBase64: solBase64,
          solutionMimeType: solutionFile?.type || 'application/pdf',
          pattern: 'JEE_MAIN',
          customTitle: title,
          userCommand:
            moduleUserCommand ||
            'Extract all exercise questions sequentially. Split into a clean CBT sprint with proper LaTeX formulas.',
          customDuration: sprintDuration,
        }),
      });

      const resData = await response.json();
      if (!response.ok || !resData.success) {
        throw new Error(resData.error || 'Failed to parse module PDF');
      }

      const generatedPaper: ExamPaper = resData.data || resData.examPaper;
      onAddCustomPaper(generatedPaper);

      const allQuestions = (generatedPaper.sections || []).flatMap((s) => s.questions || []);
      const totalQCount = allQuestions.length;
      const routineItemsToAdd: DailyRoutineItem[] = [];

      if (totalQCount > questionsPerSprint) {
        const totalSprints = Math.ceil(totalQCount / questionsPerSprint);
        for (let sIdx = 0; sIdx < totalSprints; sIdx++) {
          const sliceStart = sIdx * questionsPerSprint;
          const sliceEnd = Math.min(sliceStart + questionsPerSprint, totalQCount);
          const sprintQuestions = allQuestions.slice(sliceStart, sliceEnd);

          const sprintPaper: ExamPaper = {
            id: `${generatedPaper.id}-sprint-${sIdx + 1}`,
            title: `${title} • Sprint 0${sIdx + 1} (Q${sliceStart + 1}–Q${sliceEnd})`,
            pattern: 'JEE_MAIN',
            durationMinutes: sprintDuration,
            totalMarks: sprintQuestions.reduce((acc, q) => acc + (q.positiveMarks || 4), 0) || (sprintQuestions.length * 4),
            sections: [
              {
                id: moduleSubject,
                name: moduleSubject.toUpperCase(),
                questions: sprintQuestions.map((q, qIdx) => ({
                  ...q,
                  questionNumber: qIdx + 1,
                  sectionId: moduleSubject,
                })),
              },
            ],
            createdAt: new Date().toISOString(),
          };

          onAddCustomPaper(sprintPaper);

          const schedDate = new Date();
          schedDate.setDate(schedDate.getDate() + sIdx);
          const dateStr = schedDate.toISOString().split('T')[0];
          const dayName = sIdx === 0 ? 'Today' : schedDate.toLocaleDateString('en-US', { weekday: 'long' });

          routineItemsToAdd.push({
            id: `rout-mod-${Date.now()}-${sIdx}`,
            type: 'MODULE_PRACTICE',
            title: sprintPaper.title,
            chapterOrTopic: title,
            subject: moduleSubject,
            scheduledDate: dateStr,
            scheduledSlot: scheduledSlot,
            durationMinutes: sprintDuration,
            questionCount: sprintQuestions.length,
            paperId: sprintPaper.id,
            paper: sprintPaper,
            isCompleted: false,
            weekNumber: Math.floor(sIdx / 7) + 1,
            dayName: dayName,
          });
        }
      } else {
        routineItemsToAdd.push({
          id: `rout-mod-${Date.now()}`,
          type: 'MODULE_PRACTICE',
          title: `${title} • Sprint 01`,
          chapterOrTopic: title,
          subject: moduleSubject,
          scheduledDate: new Date().toISOString().split('T')[0],
          scheduledSlot: scheduledSlot,
          durationMinutes: sprintDuration,
          questionCount: totalQCount || questionsPerSprint,
          paperId: generatedPaper.id,
          paper: generatedPaper,
          isCompleted: false,
          weekNumber: 1,
          dayName: 'Today',
        });
      }

      onAddRoutineItems(routineItemsToAdd);
      setQuestionFile(null);
      setSolutionFile(null);
      setModuleTitle('');
      setSuccessNotice(
        routineItemsToAdd.length > 1
          ? `Success! "${title}" (${totalQCount} Qs) has been auto-split into ${routineItemsToAdd.length} daily timed sprints and scheduled into your Live Desk!`
          : `Success! "${title}" has been converted into a CBT Practice Room and scheduled on Today's Live Desk.`
      );
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
    setSuccessNotice(`"${mod.title}" has been scheduled into Today's Live Desk (19:00 - 20:00). You can just sit down at 7 PM and practice!`);
  };

  return (
    <div className="space-y-8 text-white">
      {/* 1. HERO BANNER */}
      <div className="bg-zinc-950 text-white rounded-3xl p-6 md:p-8 border-2 border-red-600/80 shadow-[0_0_30px_rgba(220,38,38,0.25)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.5)] text-xs font-black uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Dedicated Module Practice Section
          </div>

          <h2 className="text-xl md:text-3xl font-extrabold font-display text-white">
            Solve Massive Coaching Modules Under Real CBT Timer Pressure
          </h2>

          <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
            Stop passively staring at 200-question Allen / FIITJEE module PDFs on paper. Upload your module or pick a curated exercise below—inspiro AI splits it into daily 50-minute CBT sprints so you finish every exercise on time with zero backlog!
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-zinc-300">
            <span className="flex items-center gap-1.5 font-bold">
              <CheckCircle2 className="w-4 h-4 text-red-500" />
              Auto-Split into 25-Q Sprints
            </span>
            <span className="flex items-center gap-1.5 font-bold">
              <Clock className="w-4 h-4 text-red-500" />
              Strict 50-Min CBT Timer
            </span>
            <span className="flex items-center gap-1.5 font-bold">
              <Flame className="w-4 h-4 text-red-500 fill-red-500" />
              Scheduled Live into Daily Checklist
            </span>
          </div>
        </div>
      </div>

      {/* 2. UPLOAD MODULE PDF & AUTO-CHUNK TOOL */}
      <div className="bg-zinc-950 rounded-2xl shadow-xl border border-zinc-800 p-6 md:p-8 space-y-6">
        <div className="border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider">
            <UploadCloud className="w-4 h-4" />
            Module PDF Ingestion & Sprint Generator
          </div>
          <h3 className="text-base md:text-lg font-bold font-display text-white mt-1">
            Upload Your Coaching Module (Allen / Resonance / FIITJEE)
          </h3>
          <p className="text-xs text-zinc-400">
            inspiro AI will extract all questions, formulas, and diagrams, and package them as an authentic CBT practice test.
          </p>
        </div>

        {successNotice && (
          <div className="p-3.5 rounded-xl bg-green-950/40 border border-green-800/80 text-green-300 text-xs flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-green-500" />
              <span>{successNotice}</span>
            </div>
            <button
              onClick={() => setSuccessNotice('')}
              className="text-green-400 hover:text-white font-bold px-1"
            >
              ✕
            </button>
          </div>
        )}

        {uploadError && (
          <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800/80 text-red-300 text-xs flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
            <span>{uploadError}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-zinc-300">
              Module / Chapter Title
            </label>
            <input
              type="text"
              value={moduleTitle}
              onChange={(e) => setModuleTitle(e.target.value)}
              placeholder="e.g. Allen Mechanics Exercise 1 (Q1-Q50)"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-zinc-800 bg-black text-white placeholder:text-zinc-500 focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-zinc-300">
              Subject
            </label>
            <select
              value={moduleSubject}
              onChange={(e) => setModuleSubject(e.target.value as SubjectId)}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-zinc-800 bg-black text-white focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600 font-semibold"
            >
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="mathematics">Mathematics</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-zinc-300">
              Sprint Time Slot
            </label>
            <input
              type="text"
              value={scheduledSlot}
              onChange={(e) => setScheduledSlot(e.target.value)}
              placeholder="e.g. 19:00 - 20:00 (7 PM - 8 PM)"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-zinc-800 bg-black text-white placeholder:text-zinc-500 focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />
          </div>
        </div>

        {/* AI Director Command Box for Module */}
        <div className="p-3.5 rounded-xl border border-zinc-800 bg-black/60 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-red-500" />
              inspiro AI Custom Command (Optional)
            </span>
            <span className="text-[10px] text-zinc-400">Gemini 3.8 Flash Vision</span>
          </div>
          <input
            type="text"
            value={moduleUserCommand}
            onChange={(e) => setModuleUserCommand(e.target.value)}
            placeholder='e.g. "Extract all 40 questions from Exercise 1. Answer key is on the last page. Format formulas in LaTeX."'
            className="w-full px-3 py-2 text-xs rounded-lg border border-zinc-800 bg-zinc-950 text-white placeholder:text-zinc-500 focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600"
          />
        </div>

        {/* Dual Files: Question Module + Optional Solution Key */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            onClick={() => qFileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
              questionFile
                ? 'border-red-600 bg-red-950/20 text-white'
                : 'border-zinc-800 hover:border-red-600/70 bg-black/40 hover:bg-zinc-900/50'
            }`}
          >
            <input
              type="file"
              ref={qFileInputRef}
              accept=".pdf,application/pdf,image/png,image/jpeg,image/webp"
              className="hidden"
              onChange={(e) => setQuestionFile(e.target.files?.[0] || null)}
            />
            <FileText className="w-6 h-6 mx-auto text-red-500 mb-1" />
            <div className="text-xs font-bold text-white">
              {questionFile ? questionFile.name : 'Select Module Questions PDF or Image'}
            </div>
            <div className="text-[10px] text-zinc-400 mt-0.5">
              {questionFile ? `${Math.round(questionFile.size / 1024)} KB` : 'PDF or images of questions / DPP'}
            </div>
          </div>

          <div
            onClick={() => solInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
              solutionFile
                ? 'border-red-600 bg-red-950/20 text-white'
                : 'border-zinc-800 hover:border-red-600/70 bg-black/40 hover:bg-zinc-900/50'
            }`}
          >
            <input
              type="file"
              ref={solInputRef}
              accept=".pdf,application/pdf,image/png,image/jpeg,image/webp"
              className="hidden"
              onChange={(e) => setSolutionFile(e.target.files?.[0] || null)}
            />
            <FileText className="w-6 h-6 mx-auto text-zinc-400 mb-1" />
            <div className="text-xs font-bold text-white">
              {solutionFile ? solutionFile.name : 'Optional Module Solutions / Answer Key'}
            </div>
            <div className="text-[10px] text-zinc-400 mt-0.5">
              {solutionFile ? `${Math.round(solutionFile.size / 1024)} KB` : 'Pair solutions for post-practice review'}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="text-xs text-zinc-400">
            Sprint Specs: <span className="font-bold text-white">{questionsPerSprint} Questions</span> • <span className="font-bold text-white">{sprintDuration} mins CBT timer</span>
          </div>

          <button
            onClick={handleUploadModule}
            disabled={!questionFile || isUploading}
            className="w-full sm:w-auto px-6 py-3 text-xs md:text-sm font-black uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 active:scale-95 rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-white" />
            {isUploading ? (uploadProgress || 'Converting Module...') : 'Convert to CBT Sprints & Schedule'}
          </button>
        </div>
      </div>

      {/* 3. CURATED COACHING MODULES LIBRARY */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base md:text-lg font-bold font-display text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-red-500" />
              Standard Kota Coaching Module Sprints (Instant Practice)
            </h3>
            <p className="text-xs text-zinc-400">
              Choose any topic to launch an authentic 50-minute timed CBT sprint immediately or schedule it into today's slot.
            </p>
          </div>

          {/* Subject Filter */}
          <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 p-1 rounded-xl">
            {(['ALL', 'physics', 'chemistry', 'mathematics'] as const).map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-colors ${
                  selectedSubject === sub
                    ? 'bg-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.4)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {sub === 'ALL' ? 'All Subjects' : sub}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredModules.map((mod) => {
            const hrs = Math.floor(mod.sprintDurationMinutes / 60);
            const mins = mod.sprintDurationMinutes % 60;
            const timeStr = hrs > 0 ? `${hrs}h ${mins > 0 ? mins + 'm' : ''}` : `${mins}m`;

            // Check for existing saved in-progress session in localStorage
            const sessionKey = `jee_live_session_${mod.paper.id}`;
            let savedSession: any = null;
            try {
              const raw = localStorage.getItem(sessionKey);
              if (raw) savedSession = JSON.parse(raw);
            } catch {}

            const hasActiveSession = !!savedSession;
            const answeredCount = savedSession?.answers ? Object.keys(savedSession.answers).length : 0;
            const remSeconds = savedSession?.secondsRemaining !== undefined
              ? savedSession.secondsRemaining
              : (savedSession?.scheduledEndTimestamp ? Math.max(0, Math.floor((savedSession.scheduledEndTimestamp - Date.now()) / 1000)) : null);
            const remH = remSeconds !== null ? Math.floor(remSeconds / 3600) : 0;
            const remM = remSeconds !== null ? Math.floor((remSeconds % 3600) / 60) : 0;

            const progress = mod.totalQuestions > 0 ? Math.round((answeredCount / mod.totalQuestions) * 100) : 0;

            const handleRestartFresh = (e: React.MouseEvent) => {
              e.stopPropagation();
              try {
                localStorage.removeItem(sessionKey);
              } catch {}
              onStartExam(mod.paper);
            };

            return (
              <div
                key={mod.id}
                className={`bg-zinc-950 rounded-2xl p-5 border shadow-xl transition-all flex flex-col justify-between gap-4 group ${
                  hasActiveSession
                    ? 'border-amber-500/80 shadow-[0_0_20px_rgba(245,158,11,0.25)]'
                    : 'border-zinc-800 hover:border-red-600/70 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-red-950/60 text-red-400 border border-red-800/80">
                      {mod.subject}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 px-2 py-0.5 rounded-md font-mono">
                      🔓 UNLOCKED
                    </span>
                  </div>

                  <h4 className="text-sm font-bold font-display text-white group-hover:text-red-400 transition-colors">
                    {mod.title}
                  </h4>

                  <p className="text-xs text-zinc-400">
                    Chapter: <span className="font-medium text-zinc-200">{mod.chapter}</span>
                  </p>

                  {/* Active In-Progress Banner */}
                  {hasActiveSession ? (
                    <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-600/60 text-amber-200 text-xs space-y-1">
                      <div className="flex items-center justify-between font-bold text-[11px]">
                        <span className="flex items-center gap-1.5 text-amber-400">
                          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                          Session In Progress
                        </span>
                        <span className="font-mono text-white">
                          {remH}h {remM}m Left
                        </span>
                      </div>
                      <div className="text-[10px] text-amber-300/80">
                        {answeredCount} / {mod.totalQuestions} questions solved ({progress}%)
                      </div>
                    </div>
                  ) : (
                    <div className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-[11px] text-zinc-300 flex items-center justify-between font-mono">
                      <span>Rate: 4 min/Q</span>
                      <span className="text-white font-bold">{mod.totalQuestions} × 4m = {timeStr}</span>
                    </div>
                  )}

                  {/* Progress bar */}
                  <div className="space-y-1 pt-1">
                    <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono">
                      <span>{hasActiveSession ? 'Active Session Progress:' : 'All Questions Included:'}</span>
                      <span className="font-bold text-white">
                        {hasActiveSession ? `${answeredCount} / ${mod.totalQuestions} Qs (${progress}%)` : `${mod.totalQuestions} Questions`}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          hasActiveSession ? 'bg-amber-500 shadow-[0_0_8px_#f59e0b]' : 'bg-red-600 shadow-[0_0_8px_#dc2626]'
                        }`}
                        style={{ width: `${hasActiveSession ? progress : 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Sprints Details & Action Buttons */}
                <div className="pt-3 border-t border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="flex items-center gap-1 font-mono text-zinc-200">
                      <Clock className="w-3.5 h-3.5 text-red-400" />
                      {timeStr} ({mod.sprintDurationMinutes} mins)
                    </span>
                    <span className="font-mono font-semibold text-emerald-400">
                      All {mod.totalQuestions} Qs Unlocked
                    </span>
                  </div>

                  {hasActiveSession ? (
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={handleRestartFresh}
                        className="px-3 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        title="Discard paused session and restart fresh with full time"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-zinc-400" />
                        Restart
                      </button>

                      <button
                        onClick={() => onStartExam(mod.paper)}
                        className="px-3 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.5)] cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Resume Test
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-2 pt-1">
                      <button
                        onClick={() => onStartExam(mod.paper)}
                        className="w-full px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 active:scale-95 text-white text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_12px_rgba(220,38,38,0.4)] cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Start Unlocked Chapter Test ({mod.totalQuestions} Qs • {timeStr})</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
