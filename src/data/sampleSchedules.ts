import { ScheduledTest, DailyRoutineItem, TaggedQuestionEntry, ExamPaper } from '../types/exam';
import { SAMPLE_JEE_MAIN_MOCK } from './samplePapers';

// Physics Mock Papers
import {
  VIBRANT_ELECTROSTATICS_PAPER_1,
  VIBRANT_ELECTROSTATICS_PAPER_2,
  VIBRANT_ELECTROSTATICS_PAPER_3,
  VIBRANT_ELECTROSTATICS_PAPER_4,
  VIBRANT_ELECTROSTATICS_PAPER_5,
  VIBRANT_ELECTROSTATICS_PAPER_6,
  getVibrantElectrostaticsLockedTests,
} from './vibrantElectrostaticsData';

import {
  VIBRANT_KINEMATICS_PAPER_1,
  VIBRANT_KINEMATICS_PAPER_2,
  getVibrantKinematicsLockedTests,
} from './vibrantKinematicsData';

import {
  VIBRANT_GEOMETRICAL_OPTICS_PAPER_1,
  VIBRANT_GEOMETRICAL_OPTICS_PAPER_2,
  VIBRANT_GEOMETRICAL_OPTICS_PAPER_3,
  VIBRANT_GEOMETRICAL_OPTICS_PAPER_4,
  VIBRANT_GEOMETRICAL_OPTICS_PAPER_5,
  getVibrantGeometricalOpticsLockedTests,
} from './vibrantGeometricalOpticsData';

import {
  VIBRANT_MODERN_PHYSICS_PAPER_1,
  VIBRANT_MODERN_PHYSICS_PAPER_2,
  VIBRANT_MODERN_PHYSICS_PAPER_3,
  VIBRANT_MODERN_PHYSICS_PAPER_4,
  VIBRANT_MODERN_PHYSICS_PAPER_5,
  getVibrantModernPhysicsLockedTests,
} from './vibrantModernPhysicsData';

import {
  VIBRANT_CURRENT_ELECTRICITY_PAPER_1,
  VIBRANT_CURRENT_ELECTRICITY_PAPER_2,
  VIBRANT_CURRENT_ELECTRICITY_PAPER_3,
  VIBRANT_CURRENT_ELECTRICITY_PAPER_4,
  VIBRANT_CURRENT_ELECTRICITY_PAPER_5,
  getVibrantCurrentElectricityLockedTests,
} from './vibrantCurrentElectricityData';

// Mathematics Mock Papers
import {
  VIBRANT_VECTORS_3D_PAPER_1,
  VIBRANT_VECTORS_3D_PAPER_2,
  VIBRANT_VECTORS_3D_PAPER_3,
  getVibrantVectors3DLockedTests,
} from './vibrantVectors3DData';

import {
  VIBRANT_INTEGRATION_PAPER_1,
  VIBRANT_INTEGRATION_PAPER_2,
  VIBRANT_INTEGRATION_PAPER_3,
  VIBRANT_INTEGRATION_PAPER_4,
  getVibrantIntegrationLockedTests,
} from './vibrantIntegrationData';

import {
  VIBRANT_MATRICES_PAPER_1,
  VIBRANT_MATRICES_PAPER_2,
  VIBRANT_MATRICES_PAPER_3,
  getVibrantMatricesLockedTests,
} from './vibrantMatricesData';

import {
  VIBRANT_DETERMINANT_PAPER_1,
  VIBRANT_DETERMINANT_PAPER_2,
  VIBRANT_DETERMINANT_PAPER_3,
  getVibrantDeterminantLockedTests,
} from './vibrantDeterminantData';

import {
  VIBRANT_DIFF_EQ_AUC_PAPER_1,
  VIBRANT_DIFF_EQ_AUC_PAPER_2,
  VIBRANT_DIFF_EQ_AUC_PAPER_3,
  VIBRANT_DIFF_EQ_AUC_PAPER_4,
  getVibrantDiffEqAucLockedTests,
} from './vibrantDiffEqAucData';

import {
  VIBRANT_LIMIT_CONT_DIFF_PAPER_1,
  VIBRANT_LIMIT_CONT_DIFF_PAPER_2,
  VIBRANT_LIMIT_CONT_DIFF_PAPER_3,
  VIBRANT_LIMIT_CONT_DIFF_PAPER_4,
  VIBRANT_LIMIT_CONT_DIFF_PAPER_5,
  getVibrantLimitContDiffLockedTests,
} from './vibrantLimitContDiffData';

import {
  VIBRANT_BINOMIAL_PAPER_1,
  VIBRANT_BINOMIAL_PAPER_2,
  VIBRANT_BINOMIAL_PAPER_3,
  getVibrantBinomialLockedTests,
} from './vibrantBinomialData';

// Helper to format Date -> YYYY-MM-DD
function formatIso(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// Calculate endTime from 09:00 + durationMinutes
function calculateEndTime(startH: number, startM: number, durationMinutes: number): string {
  const totalM = startH * 60 + startM + durationMinutes;
  const endH = Math.floor(totalM / 60) % 24;
  const endM = totalM % 60;
  return `${String(endH).padStart(2, '0')}:${String(endM).padStart(2, '0')}`;
}

/**
 * Creates the collision-free, strictly ALTERNATE-DAY scheduled test sequence.
 * Every test is on its own unique day (Day 1, Day 3, Day 5, Day 7, Day 9...).
 * Strictly 1 full rest/revision day between EVERY single test.
 * Zero duplicate dates. Zero overlapping time windows. All tests start at 09:00 AM.
 * All tests are locked (isLocked: true, status: 'UPCOMING_LOCKED').
 */
export function buildPristineAlternateDaySchedule(baseDateStr?: string): ScheduledTest[] {
  const base = new Date();
  if (baseDateStr) {
    const parsed = new Date(baseDateStr);
    if (!isNaN(parsed.getTime())) {
      base.setTime(parsed.getTime());
    }
  } else {
    // Tomorrow as Day 1
    base.setDate(base.getDate() + 1);
  }
  base.setHours(9, 0, 0, 0);

  // Discrete Mock Papers alternating Physics and Mathematics
  const paperSequence: { paper: ExamPaper; subject: 'physics' | 'chemistry' | 'mathematics'; syllabusSummary: string }[] = [
    // 1-6: Electrostatics & Vectors 3D
    { paper: VIBRANT_ELECTROSTATICS_PAPER_1, subject: 'physics', syllabusSummary: "Coulomb's Law, Electric Field of Point Charges, Rings & Sheets" },
    { paper: VIBRANT_VECTORS_3D_PAPER_1, subject: 'mathematics', syllabusSummary: 'Vector Algebra, Dot & Cross Product, Triple Products' },
    { paper: VIBRANT_ELECTROSTATICS_PAPER_2, subject: 'physics', syllabusSummary: 'Gauss Law, Conductor Properties & Energy Density' },
    { paper: VIBRANT_VECTORS_3D_PAPER_2, subject: 'mathematics', syllabusSummary: '3D Lines, Shortest Distance, Direction Cosines & Planes' },
    { paper: VIBRANT_ELECTROSTATICS_PAPER_3, subject: 'physics', syllabusSummary: 'Variable Charge Density Non-Uniform Spheres & Cylinders' },
    { paper: VIBRANT_VECTORS_3D_PAPER_3, subject: 'mathematics', syllabusSummary: 'Intersection of Planes, Coplanarity & Skew Lines Archive' },

    // 7-12: Electrostatics continued, Kinematics, Integration
    { paper: VIBRANT_ELECTROSTATICS_PAPER_4, subject: 'physics', syllabusSummary: 'JEE Main & Advanced 2021-2023 Conductor Systems' },
    { paper: VIBRANT_INTEGRATION_PAPER_1, subject: 'mathematics', syllabusSummary: 'Indefinite Integration: Substitution, By Parts & Partial Fractions' },
    { paper: VIBRANT_ELECTROSTATICS_PAPER_5, subject: 'physics', syllabusSummary: 'Three-Axis Orthogonal Line Charge Equipotentials' },
    { paper: VIBRANT_INTEGRATION_PAPER_2, subject: 'mathematics', syllabusSummary: 'Definite Integration: King Property, Periodic & Modulus Integrals' },
    { paper: VIBRANT_ELECTROSTATICS_PAPER_6, subject: 'physics', syllabusSummary: 'Multi-Sheet & Grounding Final Challenge (9 Qs)' },
    { paper: VIBRANT_INTEGRATION_PAPER_3, subject: 'mathematics', syllabusSummary: 'Leibnitz Rule, Summation of Series as Definite Integral' },

    // 13-16: Kinematics & Integration
    { paper: VIBRANT_KINEMATICS_PAPER_1, subject: 'physics', syllabusSummary: 'Kinematics 1D & 2D Graphs, Projectile & Relative Motion' },
    { paper: VIBRANT_INTEGRATION_PAPER_4, subject: 'mathematics', syllabusSummary: 'JEE Advanced Master Integration Archive' },
    { paper: VIBRANT_KINEMATICS_PAPER_2, subject: 'physics', syllabusSummary: 'Constrained Motion, Inclined Plane Launch & Rain-Man Problems' },
    { paper: VIBRANT_MATRICES_PAPER_1, subject: 'mathematics', syllabusSummary: 'Types of Matrices, Multiplication & Transpose Theorems' },

    // 17-26: Geometrical Optics & Matrices / Determinants
    { paper: VIBRANT_GEOMETRICAL_OPTICS_PAPER_1, subject: 'physics', syllabusSummary: 'Plane & Spherical Mirrors, Reflection & Field of View' },
    { paper: VIBRANT_MATRICES_PAPER_2, subject: 'mathematics', syllabusSummary: 'Adjoint, Inverse Matrix & System of Linear Equations' },
    { paper: VIBRANT_GEOMETRICAL_OPTICS_PAPER_2, subject: 'physics', syllabusSummary: 'Refraction at Spherical Surfaces, Lens Maker Formula & Cutting' },
    { paper: VIBRANT_MATRICES_PAPER_3, subject: 'mathematics', syllabusSummary: 'Cayley-Hamilton Theorem & High Power Matrices Archive' },
    { paper: VIBRANT_GEOMETRICAL_OPTICS_PAPER_3, subject: 'physics', syllabusSummary: 'Prisms, Dispersion, Total Internal Reflection & Optical Fibres' },
    { paper: VIBRANT_DETERMINANT_PAPER_1, subject: 'mathematics', syllabusSummary: 'Vandermonde, Cyclic Determinants & Elementary Transformations' },
    { paper: VIBRANT_GEOMETRICAL_OPTICS_PAPER_4, subject: 'physics', syllabusSummary: 'JEE Main & Advanced PYQ Collection 2020-2023' },
    { paper: VIBRANT_DETERMINANT_PAPER_2, subject: 'mathematics', syllabusSummary: 'Cramer Rule, Homogeneous Systems & Matrix Determinant Relations' },
    { paper: VIBRANT_GEOMETRICAL_OPTICS_PAPER_5, subject: 'physics', syllabusSummary: '2024-2025 Recent Master Archive & Silvered Lenses (29 Qs)' },
    { paper: VIBRANT_DETERMINANT_PAPER_3, subject: 'mathematics', syllabusSummary: 'JEE Advanced Determinant Archive & System Consistency (40 Qs)' },

    // 27-36: Modern Physics & Differential Equations / AUC
    { paper: VIBRANT_MODERN_PHYSICS_PAPER_1, subject: 'physics', syllabusSummary: 'Photoelectric Effect, Work Function & de Broglie Wavelength' },
    { paper: VIBRANT_DIFF_EQ_AUC_PAPER_1, subject: 'mathematics', syllabusSummary: 'Order, Degree & Formation of Differential Equations' },
    { paper: VIBRANT_MODERN_PHYSICS_PAPER_2, subject: 'physics', syllabusSummary: 'Bohr Hydrogen Model, Energy Levels & Spectral Transitions' },
    { paper: VIBRANT_DIFF_EQ_AUC_PAPER_2, subject: 'mathematics', syllabusSummary: 'Variables Separable & Homogeneous Differential Equations' },
    { paper: VIBRANT_MODERN_PHYSICS_PAPER_3, subject: 'physics', syllabusSummary: 'Nuclear Physics, Mass Defect, Binding Energy & Radioactivity' },
    { paper: VIBRANT_DIFF_EQ_AUC_PAPER_3, subject: 'mathematics', syllabusSummary: 'Linear Differential Equations & Integrating Factor Methods' },
    { paper: VIBRANT_MODERN_PHYSICS_PAPER_4, subject: 'physics', syllabusSummary: 'X-Rays (Continuous & Characteristic), Bragg Diffraction' },
    { paper: VIBRANT_DIFF_EQ_AUC_PAPER_4, subject: 'mathematics', syllabusSummary: 'Area Under Bounded Curves & Advanced Integral Quadratures' },
    { paper: VIBRANT_MODERN_PHYSICS_PAPER_5, subject: 'physics', syllabusSummary: 'JEE Advanced 2024-2025 Modern Physics Master Archive (43 Qs)' },

    // 37-45: Current Electricity & Limits / Continuity / Diff
    { paper: VIBRANT_CURRENT_ELECTRICITY_PAPER_1, subject: 'physics', syllabusSummary: 'Drift Velocity, Resistance Networks & Kirchhoff Laws' },
    { paper: VIBRANT_LIMIT_CONT_DIFF_PAPER_1, subject: 'mathematics', syllabusSummary: 'Limits: Standard Forms, L-Hopital Rule & Rationalization' },
    { paper: VIBRANT_CURRENT_ELECTRICITY_PAPER_2, subject: 'physics', syllabusSummary: 'Potentiometer, Meter Bridge & Galvanometer Conversions' },
    { paper: VIBRANT_LIMIT_CONT_DIFF_PAPER_2, subject: 'mathematics', syllabusSummary: 'Limits: Series Expansions & 1^Infinity Indeterminate Forms' },
    { paper: VIBRANT_CURRENT_ELECTRICITY_PAPER_3, subject: 'physics', syllabusSummary: 'Symmetrical Circuit Folding & Delta-Wye Transformations' },
    { paper: VIBRANT_LIMIT_CONT_DIFF_PAPER_3, subject: 'mathematics', syllabusSummary: 'Continuity: Piecewise Functions, Intermediate Value Theorem' },
    { paper: VIBRANT_CURRENT_ELECTRICITY_PAPER_4, subject: 'physics', syllabusSummary: 'JEE Main & Advanced Recent Circuit Archive' },
    { paper: VIBRANT_LIMIT_CONT_DIFF_PAPER_4, subject: 'mathematics', syllabusSummary: 'Differentiability: Corner Points, Tangency & Functional Equations' },
    { paper: VIBRANT_CURRENT_ELECTRICITY_PAPER_5, subject: 'physics', syllabusSummary: 'Final 2025 Current Electricity Archive (24 Qs)' },
    { paper: VIBRANT_LIMIT_CONT_DIFF_PAPER_5, subject: 'mathematics', syllabusSummary: 'JEE Advanced Archive on Limits & Differentiability' },

    // 46-48: Binomial Theorem
    { paper: VIBRANT_BINOMIAL_PAPER_1, subject: 'mathematics', syllabusSummary: 'General Term, Middle Term & Binomial Coefficient Properties' },
    { paper: VIBRANT_BINOMIAL_PAPER_2, subject: 'mathematics', syllabusSummary: 'Summation of Binomial Series, Calculus & Remainder Theorems' },
    { paper: VIBRANT_BINOMIAL_PAPER_3, subject: 'mathematics', syllabusSummary: 'Multinomial Theorem & JEE Advanced Binomial Archive (30 Qs)' },
  ];

  return paperSequence.map((item, idx) => {
    // Strictly alternate day: Day 1, Day 3, Day 5, Day 7, Day 9... (2 days per test)
    const dayOffset = idx * 2;
    const testDate = new Date(base);
    testDate.setDate(base.getDate() + dayOffset);
    const dateStr = formatIso(testDate);

    const startTime = '09:00';
    const endTime = calculateEndTime(9, 0, item.paper.durationMinutes);

    return {
      id: `locked-alt-test-${idx + 1}-${item.paper.id}`,
      title: item.paper.title,
      pattern: item.paper.pattern || 'JEE_MAIN',
      scheduledDate: dateStr,
      startTime: startTime,
      endTime: endTime,
      durationMinutes: item.paper.durationMinutes,
      totalMarks: item.paper.totalMarks,
      status: 'UPCOMING_LOCKED',
      isLocked: true,
      paperId: item.paper.id,
      paper: item.paper,
      syllabus: [
        {
          id: `syl-${idx + 1}-1`,
          subject: item.subject,
          name: item.syllabusSummary,
          completed: false,
        },
      ],
      scheduledAt: Date.now() + idx,
    };
  });
}

// Global default scheduled tests
export const SAMPLE_SCHEDULED_TESTS: ScheduledTest[] = buildPristineAlternateDaySchedule();

export const SAMPLE_DAILY_ROUTINE: DailyRoutineItem[] = [
  // Week 1 Routine
  {
    id: 'rout-w1-mon',
    type: 'MODULE_PRACTICE',
    title: 'Kinematics 1D & 2D Module Exercise 1 Sprint',
    chapterOrTopic: 'Kinematics (Vectors, Projectile, Relative Motion)',
    subject: 'physics',
    scheduledDate: '2026-10-21',
    scheduledSlot: '19:00 - 20:00',
    durationMinutes: 50,
    questionCount: 25,
    isCompleted: false,
    weekNumber: 1,
    dayName: 'Wednesday',
    paper: VIBRANT_KINEMATICS_PAPER_1,
  },
  {
    id: 'rout-w1-tue',
    type: 'MODULE_PRACTICE',
    title: 'Vectors & 3-D Module Practice Sprint',
    chapterOrTopic: 'Vector Algebra, Dot & Cross Product',
    subject: 'mathematics',
    scheduledDate: '2026-10-22',
    scheduledSlot: '19:00 - 20:00',
    durationMinutes: 50,
    questionCount: 25,
    isCompleted: false,
    weekNumber: 1,
    dayName: 'Thursday',
    paper: VIBRANT_VECTORS_3D_PAPER_1,
  },
  {
    id: 'rout-w1-wed',
    type: 'MODULE_PRACTICE',
    title: 'Electrostatics Gauss Law Sprint',
    chapterOrTopic: 'Flux, Gauss Law & Conductor Cavities',
    subject: 'physics',
    scheduledDate: '2026-10-23',
    scheduledSlot: '19:00 - 20:00',
    durationMinutes: 50,
    questionCount: 25,
    isCompleted: false,
    weekNumber: 1,
    dayName: 'Friday',
    paper: VIBRANT_ELECTROSTATICS_PAPER_1,
  },
  {
    id: 'rout-w1-thu',
    type: 'MODULE_PRACTICE',
    title: 'Integration Substitution & Parts Sprint',
    chapterOrTopic: 'Integration by Parts & Partial Fractions',
    subject: 'mathematics',
    scheduledDate: '2026-10-24',
    scheduledSlot: '19:00 - 20:00',
    durationMinutes: 50,
    questionCount: 25,
    isCompleted: false,
    weekNumber: 1,
    dayName: 'Saturday',
    paper: VIBRANT_INTEGRATION_PAPER_1,
  },
];

export const SAMPLE_TAGGED_RACE_QUESTIONS: TaggedQuestionEntry[] = [];
