import { ScheduledTest, DailyRoutineItem, TaggedQuestionEntry, ExamPaper, SyllabusTopic } from '../types/exam';
import { SAMPLE_JEE_MAIN_MOCK } from './samplePapers';

// Physics Papers
import {
  VIBRANT_KINEMATICS_PAPER_1,
  VIBRANT_KINEMATICS_PAPER_2,
  VIBRANT_KINEMATICS_COMPLETE_PAPER,
} from './vibrantKinematicsData';
import {
  VIBRANT_ELECTROSTATICS_PAPER_1,
  VIBRANT_ELECTROSTATICS_PAPER_2,
  VIBRANT_ELECTROSTATICS_PAPER_3,
  VIBRANT_ELECTROSTATICS_PAPER_4,
  VIBRANT_ELECTROSTATICS_PAPER_5,
  VIBRANT_ELECTROSTATICS_PAPER_6,
} from './vibrantElectrostaticsData';
import {
  VIBRANT_CURRENT_ELECTRICITY_PAPER_1,
  VIBRANT_CURRENT_ELECTRICITY_PAPER_2,
  VIBRANT_CURRENT_ELECTRICITY_PAPER_3,
  VIBRANT_CURRENT_ELECTRICITY_COMPLETE_PAPER,
} from './vibrantCurrentElectricityData';
import {
  VIBRANT_GEOMETRICAL_OPTICS_PAPER_1,
  VIBRANT_GEOMETRICAL_OPTICS_PAPER_2,
  VIBRANT_GEOMETRICAL_OPTICS_PAPER_3,
  VIBRANT_GEOMETRICAL_OPTICS_COMPLETE_PAPER,
} from './vibrantGeometricalOpticsData';
import {
  VIBRANT_MODERN_PHYSICS_PAPER_1,
  VIBRANT_MODERN_PHYSICS_PAPER_2,
  VIBRANT_MODERN_PHYSICS_PAPER_3,
  VIBRANT_MODERN_PHYSICS_COMPLETE_PAPER,
} from './vibrantModernPhysicsData';
import {
  VIBRANT_CAPACITANCE_TEST_1,
  VIBRANT_CAPACITANCE_TEST_2,
  VIBRANT_CAPACITANCE_TEST_3,
  VIBRANT_CAPACITANCE_MARATHON_PAPER,
} from './vibrantCapacitancePapers';
import {
  VIBRANT_ROTATIONAL_DYNAMICS_TEST_1,
  VIBRANT_ROTATIONAL_DYNAMICS_TEST_2,
  VIBRANT_ROTATIONAL_DYNAMICS_TEST_3,
  VIBRANT_ROTATIONAL_DYNAMICS_MARATHON_PAPER,
} from './vibrantRotationalDynamicsData';
import {
  VIBRANT_KTG_THERMO_TEST_1,
  VIBRANT_KTG_THERMO_TEST_2,
  VIBRANT_KTG_THERMO_TEST_3,
  VIBRANT_KTG_THERMO_TEST_4,
  VIBRANT_KTG_THERMO_MARATHON_PAPER,
} from './vibrantKtgThermodynamicsData';
import {
  VIBRANT_MAGNETIC_EFFECT_TEST_1,
  VIBRANT_MAGNETIC_EFFECT_TEST_2,
  VIBRANT_MAGNETIC_EFFECT_TEST_3,
  VIBRANT_MAGNETIC_EFFECT_TEST_4,
  VIBRANT_MAGNETIC_EFFECT_MARATHON_PAPER,
} from './vibrantMagneticEffectData';
import {
  VIBRANT_EMI_AC_TEST_1,
  VIBRANT_EMI_AC_TEST_2,
  VIBRANT_EMI_AC_TEST_3,
  VIBRANT_EMI_AC_TEST_4,
  VIBRANT_EMI_AC_TEST_5,
  VIBRANT_EMI_AC_MARATHON_PAPER,
} from './vibrantEmiAcData';

// Mathematics Papers
import {
  VIBRANT_MATRICES_PAPER_1,
  VIBRANT_MATRICES_PAPER_2,
  VIBRANT_MATRICES_PAPER_3,
  VIBRANT_MATRICES_COMPLETE_PAPER,
} from './vibrantMatricesData';
import {
  VIBRANT_DETERMINANT_PAPER_1,
  VIBRANT_DETERMINANT_PAPER_2,
  VIBRANT_DETERMINANT_PAPER_3,
  VIBRANT_DETERMINANT_COMPLETE_PAPER,
} from './vibrantDeterminantData';
import {
  VIBRANT_BINOMIAL_PAPER_1,
  VIBRANT_BINOMIAL_PAPER_2,
  VIBRANT_BINOMIAL_PAPER_3,
  VIBRANT_BINOMIAL_COMPLETE_PAPER,
} from './vibrantBinomialData';
import {
  VIBRANT_VECTORS_3D_PAPER_1,
  VIBRANT_VECTORS_3D_PAPER_2,
  VIBRANT_VECTORS_3D_PAPER_3,
  VIBRANT_VECTORS_3D_COMPLETE_PAPER,
} from './vibrantVectors3DData';
import {
  VIBRANT_INTEGRATION_PAPER_1,
  VIBRANT_INTEGRATION_PAPER_2,
  VIBRANT_INTEGRATION_PAPER_3,
  VIBRANT_INTEGRATION_PAPER_4,
  VIBRANT_INTEGRATION_COMPLETE_PAPER,
} from './vibrantIntegrationData';
import {
  VIBRANT_DIFF_EQ_AUC_PAPER_1,
  VIBRANT_DIFF_EQ_AUC_PAPER_2,
  VIBRANT_DIFF_EQ_AUC_PAPER_3,
  VIBRANT_DIFF_EQ_AUC_PAPER_4,
  VIBRANT_DIFF_EQ_AUC_COMPLETE_PAPER,
} from './vibrantDiffEqAucData';
import {
  VIBRANT_LIMIT_CONT_DIFF_PAPER_1,
  VIBRANT_LIMIT_CONT_DIFF_PAPER_2,
  VIBRANT_LIMIT_CONT_DIFF_PAPER_3,
  VIBRANT_LIMIT_CONT_DIFF_PAPER_4,
  VIBRANT_LIMIT_CONT_DIFF_PAPER_5,
  VIBRANT_LIMIT_CONT_DIFF_COMPLETE_PAPER,
} from './vibrantLimitContDiffData';

// Marathon Papers
import {
  VIBRANT_KINEMATICS_MARATHON_PAPER,
  VIBRANT_ELECTROSTATICS_MARATHON_PAPER,
  VIBRANT_CURRENT_ELECTRICITY_MARATHON_PAPER,
  VIBRANT_GEOMETRICAL_OPTICS_MARATHON_PAPER,
  VIBRANT_MODERN_PHYSICS_MARATHON_PAPER,
  VIBRANT_MATRICES_MARATHON_PAPER,
  VIBRANT_DETERMINANT_MARATHON_PAPER,
  VIBRANT_BINOMIAL_MARATHON_PAPER,
  VIBRANT_VECTORS_3D_MARATHON_PAPER,
  VIBRANT_INTEGRATION_MARATHON_PAPER,
  VIBRANT_DIFF_EQ_AUC_MARATHON_PAPER,
  VIBRANT_LIMIT_CONT_DIFF_MARATHON_PAPER,
} from './moduleMarathonPapers';

// Fixed permanent anchor date so the schedule NEVER auto-shifts forward at midnight:
// Day 1 (2026-10-27): Physics - Kinematics CBT Mock Test 01 (09:00 - 12:00)
// Day 2 (2026-10-28): Math - Matrices CBT Mock Test 01 (09:00 - 12:00)
// Strict 1-test-per-day alternate Physics/Math cadence with zero date collisions.
export const SCHEDULE_BASE_DATE = '2026-10-27';

export function getScheduleBaseDate(): string {
  return SCHEDULE_BASE_DATE;
}

export function getDateForDay(baseDateStr: string, dayIndex: number): string {
  const [year, month, day] = baseDateStr.split('-').map(Number);
  const d = new Date(Date.UTC(year, month - 1, day));
  d.setUTCDate(d.getUTCDate() + dayIndex);

  const y = d.getUTCFullYear();
  const m = d.getUTCMonth() + 1;
  const dt = d.getUTCDate();
  const isoStr = `${y}-${String(m).padStart(2, '0')}-${String(dt).padStart(2, '0')}`;

  // If date falls after December 31, 2026:
  // "till dec after dec from Feb 1 remaining schedule"
  if (isoStr > '2026-12-31') {
    const dec31 = Date.UTC(2026, 11, 31);
    const diffDays = Math.round((d.getTime() - dec31) / (24 * 60 * 60 * 1000));
    // Start remaining schedule from Feb 1, 2027
    const feb1 = new Date(Date.UTC(2027, 1, 1));
    feb1.setUTCDate(feb1.getUTCDate() + (diffDays - 1));
    const fy = feb1.getUTCFullYear();
    const fm = String(feb1.getUTCMonth() + 1).padStart(2, '0');
    const fdt = String(feb1.getUTCDate()).padStart(2, '0');
    return `${fy}-${fm}-${fdt}`;
  }

  return isoStr;
}

export function buildMasterAlternateSchedule(baseDateStr: string = SCHEDULE_BASE_DATE): ScheduledTest[] {
  // Phase 1: Ordered Physics Chapter Papers (Scheduled till Dec 31)
  const physicsPapers: { paper: ExamPaper; title: string; syllabus: string }[] = [
    { paper: VIBRANT_KINEMATICS_PAPER_1, title: 'Day 1 • Physics: Kinematics CBT Mock Test 01 (1st 50Q Sprint • Q1 to Q50)', syllabus: 'Kinematics 1D, Graphs & Rectilinear Motion (Q1 to Q50)' },
    { paper: VIBRANT_KINEMATICS_PAPER_2, title: 'Day 3 • Physics: Kinematics CBT Mock Test 02 (Remainder 38Q • Q51 to Q88)', syllabus: '2D Projectile Motion & Relative Velocity (Q51 to Q88)' },
    { paper: VIBRANT_ELECTROSTATICS_PAPER_1, title: 'Day 5 • Physics: Electrostatics CBT Mock Test 01 (Module 1st 50Q • Q1 to Q50)', syllabus: 'Coulomb Law, Electric Field & Continuous Charge (Q1 to Q50)' },
    { paper: VIBRANT_ELECTROSTATICS_PAPER_2, title: 'Day 7 • Physics: Electrostatics CBT Mock Test 02 (Module 2nd 50Q • Q51 to Q100)', syllabus: 'Gauss Law, Flux & Conductor Electrostatics (Q51 to Q100)' },
    { paper: VIBRANT_ELECTROSTATICS_PAPER_3, title: 'Day 9 • Physics: Electrostatics CBT Mock Test 03 (Module 3rd 50Q • Q101 to Q150)', syllabus: 'Electric Potential, Energy & Dipole Systems (Q101 to Q150)' },
    { paper: VIBRANT_CURRENT_ELECTRICITY_PAPER_1, title: 'Day 11 • Physics: Current Electricity CBT Mock Test 01 (Module 1st 50Q • Q1 to Q50)', syllabus: 'Ohm Law, Drift Velocity, Resistance & DC Circuits (Q1 to Q50)' },
    { paper: VIBRANT_CURRENT_ELECTRICITY_PAPER_2, title: 'Day 13 • Physics: Current Electricity CBT Mock Test 02 (Module 2nd 50Q • Q51 to Q100)', syllabus: 'Kirchhoff Laws, Cube/Bridge Symmetries & Cells (Q51 to Q100)' },
    { paper: VIBRANT_CURRENT_ELECTRICITY_PAPER_3, title: 'Day 15 • Physics: Current Electricity CBT Mock Test 03 (Module 3rd 50Q • Q101 to Q150)', syllabus: 'Potentiometer, Meter Bridge, Galvanometer & RC (Q101 to Q150)' },
    { paper: VIBRANT_CAPACITANCE_TEST_1, title: 'Day 17 • Physics: Capacitance CBT Mock Test 01 (Module 1st 50Q • Q1 to Q50 • Ex-I)', syllabus: 'Capacitance, Parallel Plates, Dielectric Slabs & Circuits (Q1 to Q50)' },
    { paper: VIBRANT_CAPACITANCE_TEST_2, title: 'Day 19 • Physics: Capacitance CBT Mock Test 02 (Module 2nd 50Q • Q51 to Q100 • JEE Archive)', syllabus: 'JEE Advanced & JEE Mains 2016-2025 Archive (Q51 to Q100)' },
    { paper: VIBRANT_CAPACITANCE_TEST_3, title: 'Day 21 • Physics: Capacitance CBT Mock Test 03 (Module Remainder 31Q • Q101 to Q131 • Ex-II & Numerical)', syllabus: 'Numerical Problems & Analytical Circuits (Q101 to Q131)' },
    { paper: VIBRANT_GEOMETRICAL_OPTICS_PAPER_1, title: 'Day 23 • Physics: Geometrical Optics CBT Mock Test 01 (Module 1st 50Q Mirrors • Q1 to Q50)', syllabus: 'Reflection, Plane & Spherical Mirrors (Q1 to Q50)' },
    { paper: VIBRANT_GEOMETRICAL_OPTICS_PAPER_2, title: 'Day 25 • Physics: Geometrical Optics CBT Mock Test 02 (Module 2nd 50Q Refraction & Lenses • Q51 to Q100)', syllabus: 'Snell Law, Total Internal Reflection & Thin Lenses (Q51 to Q100)' },
    { paper: VIBRANT_GEOMETRICAL_OPTICS_PAPER_3, title: 'Day 27 • Physics: Geometrical Optics CBT Mock Test 03 (Module 3rd 50Q Prisms & Instruments • Q101 to Q150)', syllabus: 'Prisms, Dispersion & Optical Instruments (Q101 to Q150)' },
    { paper: VIBRANT_MODERN_PHYSICS_PAPER_1, title: 'Day 29 • Physics: Modern Physics CBT Mock Test 01 (Module 1st 50Q Quantum & Photoelectric • Q1 to Q50)', syllabus: 'Photoelectric Effect & de Broglie Wavelength (Q1 to Q50)' },
    { paper: VIBRANT_MODERN_PHYSICS_PAPER_2, title: 'Day 31 • Physics: Modern Physics CBT Mock Test 02 (Module 2nd 50Q Bohr Model & X-Rays • Q51 to Q100)', syllabus: 'Bohr Hydrogen Atom & Characteristic X-Rays (Q51 to Q100)' },
    { paper: VIBRANT_MODERN_PHYSICS_PAPER_3, title: 'Day 33 • Physics: Modern Physics CBT Mock Test 03 (Module 3rd 50Q Nuclear & Radioactivity • Q101 to Q150)', syllabus: 'Mass Defect, Binding Energy & Radioactive Decay (Q101 to Q150)' },
    // 1. Rotational Dynamics
    { paper: VIBRANT_ROTATIONAL_DYNAMICS_TEST_1, title: 'Day 35 • Physics: Rotational Dynamics CBT Mock Test 01 (Module 1st 50Q • Q1 to Q50)', syllabus: 'Rotational Kinematics, Moment of Inertia, Radius of Gyration & Torque (Q1 to Q50)' },
    { paper: VIBRANT_ROTATIONAL_DYNAMICS_TEST_2, title: 'Day 37 • Physics: Rotational Dynamics CBT Mock Test 02 (Module 2nd 50Q • Q51 to Q100)', syllabus: 'Angular Momentum, Pure Rolling & Toppling Dynamics (Q51 to Q100)' },
    { paper: VIBRANT_ROTATIONAL_DYNAMICS_TEST_3, title: 'Day 39 • Physics: Rotational Dynamics CBT Mock Test 03 (Module Remainder 54Q • Q101 to Q154)', syllabus: 'Rigid Body Collisions & JEE Advanced/Mains Archive (Q101 to Q154)' },
    // 2. KTG & Thermodynamics
    { paper: VIBRANT_KTG_THERMO_TEST_1, title: 'Day 41 • Physics: KTG & Thermodynamics CBT Mock Test 01 (Module 1st 50Q • Q1 to Q50)', syllabus: 'Kinetic Theory of Gases, Ideal Gas Laws & RMS Speeds (Q1 to Q50)' },
    { paper: VIBRANT_KTG_THERMO_TEST_2, title: 'Day 43 • Physics: KTG & Thermodynamics CBT Mock Test 02 (Module 2nd 50Q • Q51 to Q100)', syllabus: 'First Law of Thermodynamics, Specific Heats & Work Done (Q51 to Q100)' },
    { paper: VIBRANT_KTG_THERMO_TEST_3, title: 'Day 45 • Physics: KTG & Thermodynamics CBT Mock Test 03 (Module 3rd 50Q • Q101 to Q150)', syllabus: 'Adiabatic, Polytropic & Cyclic Processes (Q101 to Q150)' },
    { paper: VIBRANT_KTG_THERMO_TEST_4, title: 'Day 47 • Physics: KTG & Thermodynamics CBT Mock Test 04 (Module Remainder 32Q • Q151 to Q182)', syllabus: 'Second Law, Carnot Engines, Entropy & JEE Archive (Q151 to Q182)' },
    // 3. Magnetic Effect of Current
    { paper: VIBRANT_MAGNETIC_EFFECT_TEST_1, title: 'Day 49 • Physics: Magnetic Effect of Current CBT Mock Test 01 (Module 1st 50Q • Q1 to Q50)', syllabus: 'Biot-Savart Law, Moving Charges & Magnetic Induction (Q1 to Q50)' },
    { paper: VIBRANT_MAGNETIC_EFFECT_TEST_2, title: 'Day 51 • Physics: Magnetic Effect of Current CBT Mock Test 02 (Module 2nd 50Q • Q51 to Q100)', syllabus: 'Ampere Law, Solenoid, Toroid & Force on Conductor (Q51 to Q100)' },
    { paper: VIBRANT_MAGNETIC_EFFECT_TEST_3, title: 'Day 53 • Physics: Magnetic Effect of Current CBT Mock Test 03 (Module 3rd 50Q • Q101 to Q150)', syllabus: 'Lorentz Force, Helical Motion & Torque on Loops (Q101 to Q150)' },
    { paper: VIBRANT_MAGNETIC_EFFECT_TEST_4, title: 'Day 55 • Physics: Magnetic Effect of Current CBT Mock Test 04 (Module Remainder 44Q • Q151 to Q194)', syllabus: 'Galvanometer, Cyclotron & JEE Advanced Archive (Q151 to Q194)' },
    // 4. Electromagnetic Induction & Alternating Current
    { paper: VIBRANT_EMI_AC_TEST_1, title: 'Day 57 • Physics: EMI & AC CBT Mock Test 01 (Module 1st 50Q • Q1 to Q50)', syllabus: 'Faraday Law, Lenz Law & Motional EMF (Q1 to Q50)' },
    { paper: VIBRANT_EMI_AC_TEST_2, title: 'Day 59 • Physics: EMI & AC CBT Mock Test 02 (Module 2nd 50Q • Q51 to Q100)', syllabus: 'Self & Mutual Inductance, Solenoid Flux & Growth/Decay (Q51 to Q100)' },
    { paper: VIBRANT_EMI_AC_TEST_3, title: 'Day 61 • Physics: EMI & AC CBT Mock Test 03 (Module 3rd 50Q • Q101 to Q150)', syllabus: 'AC Circuit Fundamentals, Phasors & RMS Values (Q101 to Q150)' },
    { paper: VIBRANT_EMI_AC_TEST_4, title: 'Day 63 • Physics: EMI & AC CBT Mock Test 04 (Module 4th 50Q • Q151 to Q200)', syllabus: 'LCR Resonance, Power Factor, Transformers & Choke (Q151 to Q200)' },
    { paper: VIBRANT_EMI_AC_TEST_5, title: 'Day 65 • Physics: EMI & AC CBT Mock Test 05 (Module Remainder 49Q • Q201 to Q249)', syllabus: 'LC Oscillations, Analytical Circuits & JEE Archive (Q201 to Q249)' },
  ];

  // Phase 1: Ordered Mathematics Chapter Papers (Scheduled till Dec 31)
  const mathPapers: { paper: ExamPaper; title: string; syllabus: string }[] = [
    { paper: VIBRANT_MATRICES_PAPER_1, title: 'Day 2 • Math: Matrices CBT Mock Test 01 (Module 1st 50Q • Q1 to Q50)', syllabus: 'Matrix Algebra, Symmetric, Skew-Symmetric & Orthogonal (Q1 to Q50)' },
    { paper: VIBRANT_MATRICES_PAPER_2, title: 'Day 4 • Math: Matrices CBT Mock Test 02 (Module 2nd 50Q • Q51 to Q100)', syllabus: 'Adjoint Matrix, Inverse & System of Equations (Q51 to Q100)' },
    { paper: VIBRANT_MATRICES_PAPER_3, title: 'Day 6 • Math: Matrices CBT Mock Test 03 (Module 3rd 46Q • Q101 to Q146)', syllabus: 'Cayley-Hamilton, Higher Powers & Advanced Archive (Q101 to Q146)' },
    { paper: VIBRANT_DETERMINANT_PAPER_1, title: 'Day 8 • Math: Determinant CBT Mock Test 01 (Module 1st 50Q • Q1 to Q50)', syllabus: 'Determinant Expansions & Elementary Row Operations (Q1 to Q50)' },
    { paper: VIBRANT_DETERMINANT_PAPER_2, title: 'Day 10 • Math: Determinant CBT Mock Test 02 (Module 2nd 50Q • Q51 to Q100)', syllabus: 'Multiplication of Determinants & Factor Theorem (Q51 to Q100)' },
    { paper: VIBRANT_DETERMINANT_PAPER_3, title: 'Day 12 • Math: Determinant CBT Mock Test 03 (Module 3rd 41Q • Q101 to Q141)', syllabus: 'Cramer Rule, Inconsistency & JEE Advanced Archive (Q101 to Q141)' },
    { paper: VIBRANT_BINOMIAL_PAPER_1, title: 'Day 14 • Math: Binomial Theorem CBT Mock Test 01 (Module 1st 40Q • Q1 to Q40)', syllabus: 'General Term, Middle Term & Specific Coefficients (Q1 to Q40)' },
    { paper: VIBRANT_BINOMIAL_PAPER_2, title: 'Day 16 • Math: Binomial Theorem CBT Mock Test 02 (Module 2nd 35Q • Q41 to Q75)', syllabus: 'Binomial Coefficients Summation, Differentiation & Integration (Q41 to Q75)' },
    { paper: VIBRANT_BINOMIAL_PAPER_3, title: 'Day 18 • Math: Binomial Theorem CBT Mock Test 03 (Module 3rd 33Q • Q76 to Q108)', syllabus: 'Divisibility, Remainder & Advanced Archive (Q76 to Q108)' },
    { paper: VIBRANT_VECTORS_3D_PAPER_1, title: 'Day 20 • Math: Vectors & 3-D CBT Mock Test 01 (Module 1st 50Q • Q1 to Q50)', syllabus: 'Dot & Cross Products, Scalar Triple Product (Q1 to Q50)' },
    { paper: VIBRANT_VECTORS_3D_PAPER_2, title: 'Day 22 • Math: Vectors & 3-D CBT Mock Test 02 (Module 2nd 50Q • Q51 to Q100)', syllabus: 'Direction Cosines, Lines in Space, Planes & Distances (Q51 to Q100)' },
    { paper: VIBRANT_VECTORS_3D_PAPER_3, title: 'Day 24 • Math: Vectors & 3-D CBT Mock Test 03 (Module 3rd 38Q • Q101 to Q138)', syllabus: 'Coplanarity, Shortest Distance & Advanced Archive (Q101 to Q138)' },
    { paper: VIBRANT_INTEGRATION_PAPER_1, title: 'Day 26 • Math: Integration CBT Mock Test 01 (Module 1st 50Q • Q1 to Q50)', syllabus: 'Standard Forms, Substitution & By Parts (Q1 to Q50)' },
    { paper: VIBRANT_INTEGRATION_PAPER_2, title: 'Day 28 • Math: Integration CBT Mock Test 02 (Module 2nd 50Q • Q51 to Q100)', syllabus: 'Definite Integrals, Kings Rule & Periodicity (Q51 to Q100)' },
    { paper: VIBRANT_INTEGRATION_PAPER_3, title: 'Day 30 • Math: Integration CBT Mock Test 03 (Module 3rd 50Q • Q101 to Q150)', syllabus: 'Leibniz Differentiation under Integral & Limit as Sum (Q101 to Q150)' },
    { paper: VIBRANT_INTEGRATION_PAPER_4, title: 'Day 32 • Math: Integration CBT Mock Test 04 (Module 4th 40Q • Q151 to Q190)', syllabus: 'IIT Advanced Definite Integration Archive (Q151 to Q190)' },
    { paper: VIBRANT_DIFF_EQ_AUC_PAPER_1, title: 'Day 34 • Math: Diff Eq & Area CBT Mock Test 01 (Module 1st 50Q • Q1 to Q50)', syllabus: 'Order, Degree, Variable Separable & Homogeneous (Q1 to Q50)' },
    { paper: VIBRANT_DIFF_EQ_AUC_PAPER_2, title: 'Day 36 • Math: Diff Eq & Area CBT Mock Test 02 (Module 2nd 50Q • Q51 to Q100)', syllabus: 'Linear Differential Equations & Integrating Factor (Q51 to Q100)' },
    { paper: VIBRANT_DIFF_EQ_AUC_PAPER_3, title: 'Day 38 • Math: Diff Eq & Area CBT Mock Test 03 (Module 3rd 50Q • Q101 to Q150)', syllabus: 'Area Under Curves, Intersecting Curves & Bounded Regions (Q101 to Q150)' },
    { paper: VIBRANT_DIFF_EQ_AUC_PAPER_4, title: 'Day 40 • Math: Diff Eq & Area CBT Mock Test 04 (Module 4th 42Q • Q151 to Q192)', syllabus: 'Differential Equations & Area Advanced Archive (Q151 to Q192)' },
    { paper: VIBRANT_LIMIT_CONT_DIFF_PAPER_1, title: 'Day 42 • Math: LCD CBT Mock Test 01 (Module 1st 50Q • Q1 to Q50)', syllabus: 'Standard Limits, Algebraic & Trigonometric Forms (Q1 to Q50)' },
    { paper: VIBRANT_LIMIT_CONT_DIFF_PAPER_2, title: 'Day 44 • Math: LCD CBT Mock Test 02 (Module 2nd 50Q • Q51 to Q100)', syllabus: 'Exp/Log Limits, 1^Infinity & Series Expansion (Q51 to Q100)' },
    { paper: VIBRANT_LIMIT_CONT_DIFF_PAPER_3, title: 'Day 46 • Math: LCD CBT Mock Test 03 (Module 3rd 50Q • Q101 to Q150)', syllabus: 'Continuity, Types of Discontinuity & Intermediate Value (Q101 to Q150)' },
    { paper: VIBRANT_LIMIT_CONT_DIFF_PAPER_4, title: 'Day 48 • Math: LCD CBT Mock Test 04 (Module 4th 50Q • Q151 to Q200)', syllabus: 'Differentiability, Sharp Corners & Functional Equations (Q151 to Q200)' },
    { paper: VIBRANT_LIMIT_CONT_DIFF_PAPER_5, title: 'Day 50 • Math: LCD CBT Mock Test 05 (Module 5th 45Q • Q201 to Q245)', syllabus: 'Limits, Continuity & Differentiability IIT Archive (Q201 to Q245)' },
    { paper: VIBRANT_MATRICES_COMPLETE_PAPER, title: 'Day 52 • Math: Matrices Comprehensive Master Drill', syllabus: 'Full Matrices Master Review & Advanced Drill' },
    { paper: VIBRANT_DETERMINANT_COMPLETE_PAPER, title: 'Day 54 • Math: Determinant Comprehensive Master Drill', syllabus: 'Full Determinants Master Review & Properties' },
    { paper: VIBRANT_BINOMIAL_COMPLETE_PAPER, title: 'Day 56 • Math: Binomial Theorem Comprehensive Master Drill', syllabus: 'Full Binomial Expansion & Series Review' },
    { paper: VIBRANT_VECTORS_3D_COMPLETE_PAPER, title: 'Day 58 • Math: Vectors & 3-D Comprehensive Master Drill', syllabus: 'Full Vectors & 3D Geometry Problem Drill' },
    { paper: VIBRANT_INTEGRATION_COMPLETE_PAPER, title: 'Day 60 • Math: Integration Comprehensive Master Drill', syllabus: 'Full Definite & Indefinite Integration Drill' },
    { paper: VIBRANT_DIFF_EQ_AUC_COMPLETE_PAPER, title: 'Day 62 • Math: Diff Eq & AUC Comprehensive Master Drill', syllabus: 'Full Differential Equations & Area Drill' },
    { paper: VIBRANT_LIMIT_CONT_DIFF_COMPLETE_PAPER, title: 'Day 64 • Math: LCD Comprehensive Master Drill', syllabus: 'Full Limits, Continuity & Differentiability Drill' },
  ];

  // Phase 2: Remaining Schedule (Grand Marathons & Revisions Scheduled from Feb 1)
  const remainingPhysicsPapers: { paper: ExamPaper; title: string; syllabus: string }[] = [
    { paper: VIBRANT_KINEMATICS_MARATHON_PAPER, title: 'Day 69 (Feb 1) • Physics: Kinematics Complete Module Marathon (All 88 Qs)', syllabus: 'All Kinematics Exercise I, II & III Modules' },
    { paper: VIBRANT_ELECTROSTATICS_MARATHON_PAPER, title: 'Day 71 (Feb 3) • Physics: Electrostatics Complete Chapter Marathon (All 265 Qs)', syllabus: 'Complete Vibrant Kota Electrostatics Module Archive' },
    { paper: VIBRANT_CURRENT_ELECTRICITY_MARATHON_PAPER, title: 'Day 73 (Feb 5) • Physics: Current Electricity Complete Chapter Marathon (All 224 Qs)', syllabus: 'Complete Vibrant Kota Current Electricity Module' },
    { paper: VIBRANT_CAPACITANCE_MARATHON_PAPER, title: 'Day 75 (Feb 7) • Physics: Capacitance Complete Chapter Marathon (All 131 Qs)', syllabus: 'Complete Vibrant Kota Capacitance Mega XII Module' },
    { paper: VIBRANT_GEOMETRICAL_OPTICS_MARATHON_PAPER, title: 'Day 77 (Feb 9) • Physics: Geometrical Optics Complete Chapter Marathon (All 229 Qs)', syllabus: 'Complete Vibrant Kota Geometrical Optics Module' },
    { paper: VIBRANT_MODERN_PHYSICS_MARATHON_PAPER, title: 'Day 79 (Feb 11) • Physics: Modern Physics Complete Chapter Marathon (All 243 Qs)', syllabus: 'Complete Vibrant Kota Modern Physics Module' },
    { paper: VIBRANT_ROTATIONAL_DYNAMICS_MARATHON_PAPER, title: 'Day 81 (Feb 13) • Physics: Rotational Dynamics Complete Chapter Marathon (All 154 Qs)', syllabus: 'Complete Vibrant Kota Rotational Dynamics Module' },
    { paper: VIBRANT_KTG_THERMO_MARATHON_PAPER, title: 'Day 83 (Feb 15) • Physics: KTG & Thermodynamics Complete Chapter Marathon (All 182 Qs)', syllabus: 'Complete Vibrant Kota KTG & Thermodynamics Module' },
    { paper: VIBRANT_MAGNETIC_EFFECT_MARATHON_PAPER, title: 'Day 85 (Feb 17) • Physics: Magnetic Effect of Current Complete Chapter Marathon (All 194 Qs)', syllabus: 'Complete Vibrant Kota Magnetic Effect Module' },
    { paper: VIBRANT_EMI_AC_MARATHON_PAPER, title: 'Day 87 (Feb 19) • Physics: EMI & Alternating Current Complete Chapter Marathon (All 249 Qs)', syllabus: 'Complete Vibrant Kota EMI & AC Module' },
    { paper: VIBRANT_KINEMATICS_COMPLETE_PAPER, title: 'Day 89 (Feb 21) • Physics: Kinematics Master Grand Revision', syllabus: 'Full Kinematics Master Revision' },
    { paper: VIBRANT_CURRENT_ELECTRICITY_COMPLETE_PAPER, title: 'Day 91 (Feb 23) • Physics: Current Electricity Master Grand Revision', syllabus: 'Full Current Electricity Master Revision' },
    { paper: VIBRANT_GEOMETRICAL_OPTICS_COMPLETE_PAPER, title: 'Day 93 (Feb 25) • Physics: Geometrical Optics Master Grand Revision', syllabus: 'Full Geometrical Optics Master Revision' },
    { paper: VIBRANT_MODERN_PHYSICS_COMPLETE_PAPER, title: 'Day 95 (Feb 27) • Physics: Modern Physics Master Grand Revision', syllabus: 'Full Modern Physics Master Revision' },
  ];

  const remainingMathPapers: { paper: ExamPaper; title: string; syllabus: string }[] = [
    { paper: VIBRANT_MATRICES_MARATHON_PAPER, title: 'Day 70 (Feb 2) • Math: Matrices Complete Chapter Marathon (All 146 Qs)', syllabus: 'Complete Vibrant Kota Matrices Mega XII Module' },
    { paper: VIBRANT_DETERMINANT_MARATHON_PAPER, title: 'Day 72 (Feb 4) • Math: Determinant Complete Chapter Marathon (All 141 Qs)', syllabus: 'Complete Vibrant Kota Determinant Mega XII Module' },
    { paper: VIBRANT_BINOMIAL_MARATHON_PAPER, title: 'Day 74 (Feb 6) • Math: Binomial Theorem Complete Chapter Marathon (All 108 Qs)', syllabus: 'Complete Vibrant Kota Binomial Micro XI Module' },
    { paper: VIBRANT_VECTORS_3D_MARATHON_PAPER, title: 'Day 76 (Feb 8) • Math: Vectors & 3-D Complete Chapter Marathon (All 138 Qs)', syllabus: 'Complete Vibrant Kota Vectors & 3D Module' },
    { paper: VIBRANT_INTEGRATION_MARATHON_PAPER, title: 'Day 78 (Feb 10) • Math: Integration Complete Chapter Marathon (All 190 Qs)', syllabus: 'Complete Vibrant Kota Indefinite & Definite Module' },
    { paper: VIBRANT_DIFF_EQ_AUC_MARATHON_PAPER, title: 'Day 80 (Feb 12) • Math: Diff Eq & AUC Complete Chapter Marathon (All 192 Qs)', syllabus: 'Complete Vibrant Kota Diff Eq & AUC Mega XII Module' },
    { paper: VIBRANT_LIMIT_CONT_DIFF_MARATHON_PAPER, title: 'Day 82 (Feb 14) • Math: LCD Complete Chapter Marathon (All 245 Qs)', syllabus: 'Complete Vibrant Kota LCD Mega XII Module' },
  ];

  // 1. Schedule Chapter Tests Alternate Days till December 31
  const scheduledTests: ScheduledTest[] = [];
  const chapterTotalDays = Math.max(physicsPapers.length * 2, mathPapers.length * 2);

  let pIdx = 0;
  let mIdx = 0;

  for (let day = 1; day <= chapterTotalDays; day++) {
    const isPhysicsDay = day % 2 === 1; // Odd days: Day 1, Day 3, Day 5...
    const dateStr = getDateForDay(baseDateStr, day - 1);
    if (dateStr > '2026-12-31') break;

    if (isPhysicsDay && pIdx < physicsPapers.length) {
      const item = physicsPapers[pIdx];
      const syllabusTopic: SyllabusTopic = {
        id: `syl-day-${day}`,
        subject: 'physics',
        name: item.syllabus,
        completed: false,
      };
      scheduledTests.push({
        id: `sched-day-${day}-physics`,
        title: item.title,
        pattern: 'JEE_MAIN',
        scheduledDate: dateStr,
        startTime: '09:00',
        endTime: '12:00',
        durationMinutes: item.paper.durationMinutes || 180,
        totalMarks: item.paper.totalMarks || 200,
        paperId: item.paper.id,
        paper: item.paper,
        status: 'UPCOMING_LOCKED',
        isLocked: true,
        scheduledAt: day,
        syllabus: [syllabusTopic],
      });
      pIdx++;
    } else if (!isPhysicsDay && mIdx < mathPapers.length) {
      const item = mathPapers[mIdx];
      const syllabusTopic: SyllabusTopic = {
        id: `syl-day-${day}`,
        subject: 'mathematics',
        name: item.syllabus,
        completed: false,
      };
      scheduledTests.push({
        id: `sched-day-${day}-math`,
        title: item.title,
        pattern: 'JEE_MAIN',
        scheduledDate: dateStr,
        startTime: '09:00',
        endTime: '12:00',
        durationMinutes: item.paper.durationMinutes || 180,
        totalMarks: item.paper.totalMarks || 200,
        paperId: item.paper.id,
        paper: item.paper,
        status: 'UPCOMING_LOCKED',
        isLocked: true,
        scheduledAt: day,
        syllabus: [syllabusTopic],
      });
      mIdx++;
    }
  }

  // 2. Schedule Remaining Schedule (Grand Marathons & Master Revisions) strictly from Feb 1
  const remainingTotalDays = Math.max(remainingPhysicsPapers.length * 2, remainingMathPapers.length * 2);
  let remPIdx = 0;
  let remMIdx = 0;

  for (let remDay = 1; remDay <= remainingTotalDays; remDay++) {
    const isPhysicsDay = remDay % 2 === 1;
    // Date begins strictly from Feb 1, 2027
    const feb1 = new Date(Date.UTC(2027, 1, 1));
    feb1.setUTCDate(feb1.getUTCDate() + (remDay - 1));
    const fy = feb1.getUTCFullYear();
    const fm = String(feb1.getUTCMonth() + 1).padStart(2, '0');
    const fdt = String(feb1.getUTCDate()).padStart(2, '0');
    const dateStr = `${fy}-${fm}-${fdt}`;

    const scheduledDayNumber = chapterTotalDays + remDay;

    if (isPhysicsDay && remPIdx < remainingPhysicsPapers.length) {
      const item = remainingPhysicsPapers[remPIdx];
      scheduledTests.push({
        id: `sched-rem-${remDay}-physics`,
        title: item.title,
        pattern: 'JEE_MAIN',
        scheduledDate: dateStr,
        startTime: '09:00',
        endTime: '12:00',
        durationMinutes: item.paper.durationMinutes || 180,
        totalMarks: item.paper.totalMarks || 200,
        paperId: item.paper.id,
        paper: item.paper,
        status: 'UPCOMING_LOCKED',
        isLocked: true,
        scheduledAt: scheduledDayNumber,
        syllabus: [{
          id: `syl-rem-${remDay}`,
          subject: 'physics',
          name: item.syllabus,
          completed: false,
        }],
      });
      remPIdx++;
    } else if (!isPhysicsDay && remMIdx < remainingMathPapers.length) {
      const item = remainingMathPapers[remMIdx];
      scheduledTests.push({
        id: `sched-rem-${remDay}-math`,
        title: item.title,
        pattern: 'JEE_MAIN',
        scheduledDate: dateStr,
        startTime: '09:00',
        endTime: '12:00',
        durationMinutes: item.paper.durationMinutes || 180,
        totalMarks: item.paper.totalMarks || 200,
        paperId: item.paper.id,
        paper: item.paper,
        status: 'UPCOMING_LOCKED',
        isLocked: true,
        scheduledAt: scheduledDayNumber,
        syllabus: [{
          id: `syl-rem-${remDay}`,
          subject: 'mathematics',
          name: item.syllabus,
          completed: false,
        }],
      });
      remMIdx++;
    }
  }

  return scheduledTests;
}

export const SAMPLE_SCHEDULED_TESTS: ScheduledTest[] = buildMasterAlternateSchedule(SCHEDULE_BASE_DATE);

export const SAMPLE_DAILY_ROUTINE: DailyRoutineItem[] = [
  // Day 1 (Today: 2026-10-22) - Physics
  {
    id: 'rout-day-1-phy',
    type: 'MODULE_PRACTICE',
    title: 'Kinematics 1D & Graphs Module Exercise 1 Sprint',
    chapterOrTopic: 'Kinematics 1D, Rectilinear Motion & v-t Graphs',
    subject: 'physics',
    scheduledDate: getDateForDay(SCHEDULE_BASE_DATE, 0), // Today
    scheduledSlot: '19:00 - 20:00',
    durationMinutes: 50,
    questionCount: 25,
    isCompleted: false,
    weekNumber: 1,
    dayName: 'Day 1 (Today)',
    paper: VIBRANT_KINEMATICS_PAPER_1,
  },
  // Day 2 (Tomorrow: 2026-10-23) - Mathematics
  {
    id: 'rout-day-2-mat',
    type: 'MODULE_PRACTICE',
    title: 'Matrices Types & Transpose Module Exercise 1 Sprint',
    chapterOrTopic: 'Matrices Algebra, Symmetric & Skew-Symmetric',
    subject: 'mathematics',
    scheduledDate: getDateForDay(SCHEDULE_BASE_DATE, 1), // Tomorrow
    scheduledSlot: '19:00 - 20:00',
    durationMinutes: 50,
    questionCount: 25,
    isCompleted: false,
    weekNumber: 1,
    dayName: 'Day 2 (Tomorrow)',
    paper: VIBRANT_MATRICES_PAPER_1,
  },
  // Day 3 (2026-10-24) - Physics
  {
    id: 'rout-day-3-phy',
    type: 'MODULE_PRACTICE',
    title: 'Kinematics 2D & Relative Motion Sprint',
    chapterOrTopic: 'Projectile Motion, River-Boat & Relative Acceleration',
    subject: 'physics',
    scheduledDate: getDateForDay(SCHEDULE_BASE_DATE, 2),
    scheduledSlot: '19:00 - 20:00',
    durationMinutes: 50,
    questionCount: 20,
    isCompleted: false,
    weekNumber: 1,
    dayName: 'Day 3',
    paper: VIBRANT_KINEMATICS_PAPER_2,
  },
  // Day 4 (2026-10-25) - Mathematics
  {
    id: 'rout-day-4-mat',
    type: 'MODULE_PRACTICE',
    title: 'Matrices Inversion & Linear Equations Drill',
    chapterOrTopic: 'Adjoint Matrix, System of Linear Equations & Consistency',
    subject: 'mathematics',
    scheduledDate: getDateForDay(SCHEDULE_BASE_DATE, 3),
    scheduledSlot: '19:00 - 20:00',
    durationMinutes: 50,
    questionCount: 25,
    isCompleted: false,
    weekNumber: 1,
    dayName: 'Day 4',
    paper: VIBRANT_MATRICES_PAPER_2,
  },
  // Day 5 (2026-10-26) - Physics
  {
    id: 'rout-day-5-phy',
    type: 'MODULE_PRACTICE',
    title: 'Electrostatics Coulomb & Electric Field Sprint',
    chapterOrTopic: 'Coulomb Force, Ring/Disk Field & Continuous Charge',
    subject: 'physics',
    scheduledDate: getDateForDay(SCHEDULE_BASE_DATE, 4),
    scheduledSlot: '19:00 - 20:00',
    durationMinutes: 50,
    questionCount: 25,
    isCompleted: false,
    weekNumber: 1,
    dayName: 'Day 5',
    paper: VIBRANT_ELECTROSTATICS_PAPER_1,
  },
  // Day 6 (2026-10-27) - Mathematics
  {
    id: 'rout-day-6-mat',
    type: 'MODULE_PRACTICE',
    title: 'Matrices Cayley-Hamilton & Advanced Archive',
    chapterOrTopic: 'Characteristic Equations & Higher Power Matrices',
    subject: 'mathematics',
    scheduledDate: getDateForDay(SCHEDULE_BASE_DATE, 5),
    scheduledSlot: '19:00 - 20:00',
    durationMinutes: 50,
    questionCount: 25,
    isCompleted: false,
    weekNumber: 1,
    dayName: 'Day 6',
    paper: VIBRANT_MATRICES_PAPER_3,
  },
  // Day 7 (2026-10-28) - Physics
  {
    id: 'rout-day-7-phy',
    type: 'MODULE_PRACTICE',
    title: 'Electrostatics Gauss Law & Flux Analysis',
    chapterOrTopic: 'Spherical Shells, Gauss Surfaces & Conductor Cavities',
    subject: 'physics',
    scheduledDate: getDateForDay(SCHEDULE_BASE_DATE, 6),
    scheduledSlot: '19:00 - 20:00',
    durationMinutes: 50,
    questionCount: 25,
    isCompleted: false,
    weekNumber: 1,
    dayName: 'Day 7',
    paper: VIBRANT_ELECTROSTATICS_PAPER_2,
  },
  // Day 8 (2026-10-29) - Mathematics
  {
    id: 'rout-day-8-mat',
    type: 'MODULE_PRACTICE',
    title: 'Determinant Properties & Factor Theorem Sprint',
    chapterOrTopic: 'Determinant Operations, Factoring & Cyclical Forms',
    subject: 'mathematics',
    scheduledDate: getDateForDay(SCHEDULE_BASE_DATE, 7),
    scheduledSlot: '19:00 - 20:00',
    durationMinutes: 50,
    questionCount: 25,
    isCompleted: false,
    weekNumber: 2,
    dayName: 'Day 8',
    paper: VIBRANT_DETERMINANT_PAPER_1,
  },
  // Day 9 (2026-10-30) - Physics
  {
    id: 'rout-day-9-phy',
    type: 'MODULE_PRACTICE',
    title: 'Electrostatics Potential Energy & Dipole Drill',
    chapterOrTopic: 'Electrostatic Potential, Dipole Torque & Potential Energy',
    subject: 'physics',
    scheduledDate: getDateForDay(SCHEDULE_BASE_DATE, 8),
    scheduledSlot: '19:00 - 20:00',
    durationMinutes: 50,
    questionCount: 25,
    isCompleted: false,
    weekNumber: 2,
    dayName: 'Day 9',
    paper: VIBRANT_ELECTROSTATICS_PAPER_3,
  },
  // Day 10 (2026-10-31) - Mathematics
  {
    id: 'rout-day-10-mat',
    type: 'MODULE_PRACTICE',
    title: 'Determinant Cramer Rule & Inconsistency Drill',
    chapterOrTopic: 'Non-Trivial Solutions, Cramer Determinants & Systems',
    subject: 'mathematics',
    scheduledDate: getDateForDay(SCHEDULE_BASE_DATE, 9),
    scheduledSlot: '19:00 - 20:00',
    durationMinutes: 50,
    questionCount: 25,
    isCompleted: false,
    weekNumber: 2,
    dayName: 'Day 10',
    paper: VIBRANT_DETERMINANT_PAPER_2,
  },
  // Day 11 (2026-11-01) - Physics
  {
    id: 'rout-day-11-phy',
    type: 'MODULE_PRACTICE',
    title: 'Current Electricity Circuits & Resistance Sprint',
    chapterOrTopic: 'Drift Velocity, Colour Codes, Series/Parallel Resistors',
    subject: 'physics',
    scheduledDate: getDateForDay(SCHEDULE_BASE_DATE, 10),
    scheduledSlot: '19:00 - 20:00',
    durationMinutes: 50,
    questionCount: 25,
    isCompleted: false,
    weekNumber: 2,
    dayName: 'Day 11',
    paper: VIBRANT_CURRENT_ELECTRICITY_PAPER_1,
  },
  // Day 12 (2026-11-02) - Mathematics
  {
    id: 'rout-day-12-mat',
    type: 'MODULE_PRACTICE',
    title: 'Binomial Theorem General & Middle Term Sprint',
    chapterOrTopic: 'Expansion of Binomial, Middle Terms, Greatest Term',
    subject: 'mathematics',
    scheduledDate: getDateForDay(SCHEDULE_BASE_DATE, 11),
    scheduledSlot: '19:00 - 20:00',
    durationMinutes: 50,
    questionCount: 25,
    isCompleted: false,
    weekNumber: 2,
    dayName: 'Day 12',
    paper: VIBRANT_BINOMIAL_PAPER_1,
  },
];

export const SAMPLE_TAGGED_RACE_QUESTIONS: TaggedQuestionEntry[] = [
  {
    id: 'race-tag-1',
    question: VIBRANT_KINEMATICS_PAPER_1.sections[0].questions[0],
    examId: VIBRANT_KINEMATICS_PAPER_1.id,
    examTitle: 'Kinematics 1D & 2D CBT Mock Test 01',
    subject: 'physics',
    tags: ['HARD', 'RACE_STAR'],
    correctAnswer: 'A',
    addedAt: Date.now() - 86400000,
    practiceCount: 2,
    notes: 'Acceleration and deceleration alpha-beta relation: v_max = (alpha * beta) / (alpha + beta) * T',
  },
  {
    id: 'race-tag-2',
    question: VIBRANT_MATRICES_PAPER_1.sections[0].questions[0],
    examId: VIBRANT_MATRICES_PAPER_1.id,
    examTitle: 'Matrices CBT Mock Test 01',
    subject: 'mathematics',
    tags: ['TRICKY', 'DOUBT'],
    correctAnswer: VIBRANT_MATRICES_PAPER_1.sections[0].questions[0]?.correctAnswer || 'B',
    addedAt: Date.now() - 43200000,
    practiceCount: 1,
    notes: 'Upper triangular matrix identification: a_ij = 0 for all i > j',
  },
  {
    id: 'race-tag-3',
    question: VIBRANT_ELECTROSTATICS_PAPER_1.sections[0].questions[0],
    examId: VIBRANT_ELECTROSTATICS_PAPER_1.id,
    examTitle: 'Electrostatics CBT Mock Test 01',
    subject: 'physics',
    tags: ['TRICKY', 'HARD'],
    correctAnswer: 'A',
    addedAt: Date.now() - 172800000,
    practiceCount: 3,
    notes: 'Electric flux through cubical surfaces and Gauss Law application',
  },
  {
    id: 'race-tag-4',
    question: VIBRANT_DETERMINANT_PAPER_1.sections[0].questions[0],
    examId: VIBRANT_DETERMINANT_PAPER_1.id,
    examTitle: 'Determinant CBT Mock Test 01',
    subject: 'mathematics',
    tags: ['DOUBT', 'RACE_STAR'],
    correctAnswer: VIBRANT_DETERMINANT_PAPER_1.sections[0].questions[0]?.correctAnswer || 'A',
    addedAt: Date.now() - 3600000,
    practiceCount: 1,
    notes: 'Determinant expansion and elementary row-column properties',
  },
];
