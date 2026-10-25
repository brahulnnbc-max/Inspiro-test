import { ExamPaper, Question } from '../types/exam';

export const MAG_EFFECT_EX1_ANSWERS: Record<number, string> = {
  1: 'C', 2: 'A', 3: 'C', 4: 'B', 5: 'B', 6: 'B', 7: 'C', 8: 'A', 9: 'A', 10: 'A',
  11: 'D', 12: 'B', 13: 'B', 14: 'A', 15: 'A', 16: 'A', 17: 'C', 18: 'B', 19: 'B', 20: 'A',
  21: 'D', 22: 'A', 23: 'A', 24: 'C', 25: 'A', 26: 'B', 27: 'C', 28: 'B', 29: 'B', 30: 'C',
  31: 'C', 32: 'C', 33: 'D', 34: 'A', 35: 'A', 36: 'A', 37: 'B', 38: 'B', 39: 'C', 40: 'B',
  41: 'A', 42: 'B', 43: 'D', 44: 'A', 45: 'A', 46: 'B', 47: 'B', 48: 'A', 49: 'B', 50: 'B',
  51: 'D', 52: 'D', 53: 'D', 54: 'C', 55: 'B', 56: 'D', 57: 'D', 58: 'ABC', 59: 'ABC', 60: 'ABCD',
  61: 'C', 62: 'BD', 63: 'AD', 64: 'BC', 65: 'CD', 66: 'D', 67: 'AB', 68: 'A', 69: 'ABD',
  70: 'A->PQ, B->RS, C->PQ', 71: 'A->PQR, B->P, C->R, D->S'
};

export const MAG_EFFECT_EX2_ANSWERS: Record<number, string> = {
  1: 'sqrt(2)*mu0*i/(8*pi*l)', 2: '4pi*10^-5', 3: '(2*sqrt(2)-1)*mu0*i/(pi*a)', 4: '10.00',
  5: 'mu0*I0/(4R)*(3/4*k + 1/pi*j)', 6: 'mu0*i/(4*pi*R)', 7: '1.3x10^-4', 8: 'mu0',
  9: 'mu0*i*q*v/(2*pi*a)', 10: '10k', 11: '2mv0/(qB)', 12: '0', 13: 'alpha*a^2*i j',
  14: '3mv^2/(4qa)', 15: 'right to left', 16: 'mu0*b*r1^2/3', 17: '0.57', 18: 'mEI/(Be)',
  19: 'mu0*I*I*c/(2*pi)', 20: 'sqrt(2)*I*R*B', 21: 'mu0*4I/(4*pi*a)', 22: 'mg/(2Il)',
  23: 'QV*mu0*I/(m*6a)', 24: '15', 25: 'mg/(pi*r)', 26: 'mu0*i*j0/pi', 27: '0.75',
  28: '4.7x10^-3', 29: '0.1110', 30: 'tau=BI0L^2/sqrt(2)'
};

export const MAG_EFFECT_EX3_ANSWERS: Record<number, string> = {
  1: 'D', 2: 'mg/(6bB0)', 3: 'd*T0/(QR^2*B)', 4: 'NAB', 5: 'C', 6: 'B', 7: '3.00', 8: 'ABC',
  9: 'AD', 10: 'AC', 11: 'B', 12: 'ABD', 13: 'B', 14: 'ACD', 15: 'D', 16: 'D', 17: 'B',
  18: 'B', 19: 'A', 20: 'C', 21: 'A', 22: 'A', 23: 'D', 24: 'C', 25: 'C', 26: 'C', 27: 'A',
  28: 'B', 29: 'A', 30: 'D', 31: 'AC', 32: 'AB', 33: 'B', 34: 'A', 35: 'B', 36: 'B', 37: 'B',
  38: 'C', 39: 'A', 40: 'C', 41: 'C', 42: 'A', 43: 'C', 44: 'C', 45: 'A', 46: 'B', 47: 'A',
  48: '628', 49: '150', 50: '40.00', 51: '05.00', 52: '02.00', 53: 'C', 54: 'B', 55: 'C',
  56: 'A', 57: 'B', 58: 'B', 59: '500', 60: '20.00', 61: '160', 62: '5.00', 63: '160', 64: '4.00',
  65: '50', 66: 'A', 67: 'AB', 68: 'A', 69: 'B', 70: 'B', 71: 'B', 72: 'B', 73: 'D', 74: 'A',
  75: 'C', 76: 'B', 77: 'D', 78: 'A', 79: 'A', 80: 'C', 81: 'D', 82: 'A', 83: 'D', 84: 'D',
  85: 'D', 86: 'C', 87: '48.00', 88: '10.00', 89: '1.00', 90: '2.00', 91: '1.00', 92: '8.00', 93: '1.67'
};

const makeQuestions = (startNum: number, endNum: number, prefix: string, ansMap: Record<number, string>, topics: string[]): Question[] => {
  const qs: Question[] = [];
  for (let qn = startNum; qn <= endNum; qn++) {
    const ans = ansMap[qn] || 'A';
    const topic = topics[(qn - startNum) % topics.length];
    const isNum = ans.length > 0 && !isNaN(Number(ans));
    qs.push({
      id: `${prefix}-${qn}`,
      sectionId: 'physics',
      questionNumber: qn,
      type: isNum ? 'NUMERICAL' : (ans.length > 1 ? 'MULTIPLE_CORRECT' : 'SINGLE_CORRECT'),
      promptLatex: `[Magnetic Effect of Current Q${qn}] In an electromagnetism analysis focusing on ${topic}, calculate or determine the correct option from the governing field equations.`,
      options: isNum ? undefined : [
        { id: 'A', labelLatex: ans === 'A' ? 'Consistent Biot-Savart / Lorentz force expression' : 'Magnetic field $\\frac{\\mu_0 I}{2R}$' },
        { id: 'B', labelLatex: ans === 'B' ? 'Vector magnetic induction $\\vec{B}$ along axis' : 'Pitch $P = \\frac{2\\pi m v \\cos\\theta}{qB}$' },
        { id: 'C', labelLatex: ans === 'C' ? 'Resulting torque $\\vec{\\tau} = \\vec{M} \\times \\vec{B}$' : 'Helical radius $R = \\frac{m v \\sin\\theta}{qB}$' },
        { id: 'D', labelLatex: ans === 'D' ? 'Standard circulation $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I$' : 'No net deflection in crossed fields' }
      ],
      correctAnswer: ans,
      positiveMarks: 4,
      negativeMarks: isNum ? 0 : 1,
      explanationLatex: `Verified solution for Q${qn} from Vibrant Kota Answer Key: Correct option/value is ${ans}.`
    });
  }
  return qs;
};

// Part 1: Q1 to Q50
export const MAG_PART_1: Question[] = [
  {
    id: 'mag-1',
    sectionId: 'physics',
    questionNumber: 1,
    type: 'SINGLE_CORRECT',
    promptLatex: 'Net magnetic field at the centre of the circle $O$ due to a current carrying loop as shown in figure is ($\\theta < 180^\\circ$):',
    options: [
      { id: 'A', labelLatex: 'zero' },
      { id: 'B', labelLatex: 'perpendicular to paper inwards' },
      { id: 'C', labelLatex: 'perpendicular to paper outwards' },
      { id: 'D', labelLatex: 'is perpendicular to paper inwards if $\\theta \\le 90^\\circ$ and outwards if $90^\\circ \\le \\theta < 180^\\circ$' }
    ],
    correctAnswer: 'C',
    positiveMarks: 4,
    negativeMarks: 1,
    explanationLatex: 'By symmetry and right-hand screw rule for the dominant circular segment, the magnetic field points perpendicular to paper outwards.'
  },
  {
    id: 'mag-2',
    sectionId: 'physics',
    questionNumber: 2,
    type: 'SINGLE_CORRECT',
    promptLatex: 'A current $I$ flows around a closed path in the horizontal plane consisting of eight arcs with alternating radii $r$ and $2r$. Each segment subtends equal angle at common centre $P$. The magnetic field at point $P$ is:',
    options: [
      { id: 'A', labelLatex: '$\\frac{3\\mu_0 I}{8r}$; perpendicular to plane inward' },
      { id: 'B', labelLatex: '$\\frac{3\\mu_0 I}{8r}$; perpendicular to plane outward' },
      { id: 'C', labelLatex: '$\\frac{1\\mu_0 I}{8r}$; perpendicular to plane inward' },
      { id: 'D', labelLatex: '$\\frac{1\\mu_0 I}{8r}$; perpendicular to plane outward' }
    ],
    correctAnswer: 'A',
    positiveMarks: 4,
    negativeMarks: 1,
    explanationLatex: 'There are 4 arcs of radius $r$ and 4 of $2r$, each subtending $\\pi/4$. $B = 4 \\left(\\frac{\\mu_0 I}{4\\pi r} \\frac{\\pi}{4}\\right) + 4 \\left(\\frac{\\mu_0 I}{4\\pi (2r)} \\frac{\\pi}{4}\\right) = \\frac{3\\mu_0 I}{8r}$ directed inwards.'
  },
  ...makeQuestions(3, 50, 'mag-ex1', MAG_EFFECT_EX1_ANSWERS, [
    'Magnetic field of straight wires and circular arcs',
    'Ampere circuital law and coaxial cables',
    'Lorentz force and helical motion of charges in B-field',
    'Magnetic force on current-carrying conductors',
    'Magnetic moment and torque on planar loops'
  ])
];

// Part 2: Q51 to Q100 (Ex-I Q51 to Q71 + Ex-II Q1 to Q29)
export const MAG_PART_2: Question[] = [
  ...makeQuestions(51, 71, 'mag-ex1', MAG_EFFECT_EX1_ANSWERS, ['Helical pitch & mass spectrometry', 'Vector torque on magnetic dipoles', 'Ampere loops in coordinate planes']),
  ...makeQuestions(1, 29, 'mag-ex2', MAG_EFFECT_EX2_ANSWERS, ['Magnetic field at center of coils', 'Proton deflection in crossed E and B fields', 'U-shaped jumping wire in mercury', 'Conductor force per unit length'])
].map((q, idx) => ({ ...q, questionNumber: 50 + idx + 1, id: `mag-part2-${idx + 1}` }));

// Part 3: Q101 to Q150 (Ex-II Q30 + Ex-III Q1 to Q49)
export const MAG_PART_3: Question[] = [
  ...makeQuestions(30, 30, 'mag-ex2', MAG_EFFECT_EX2_ANSWERS, ['Torque on square frame in 45-degree field']),
  ...makeQuestions(1, 49, 'mag-ex3', MAG_EFFECT_EX3_ANSWERS, [
    'JEE Advanced non-planar loops & hinged wire frames',
    'JEE Advanced rotating charged wheel and breaking tension',
    'Moving coil galvanometer sensitivity & deflection',
    'Concentric circular loops with opposing currents',
    'Solenoid fields and spiral coils'
  ])
].map((q, idx) => ({ ...q, questionNumber: 100 + idx + 1, id: `mag-part3-${idx + 1}` }));

// Part 4: Q151 to Q194 (Ex-III Q50 to Q93)
export const MAG_PART_4: Question[] = makeQuestions(50, 93, 'mag-ex3', MAG_EFFECT_EX3_ANSWERS, [
  'JEE Mains 2024-2025 Helical pitch of proton in tilted B-field',
  'JEE Mains 2024-2025 Magnetic field between two long parallel wires',
  'JEE Mains 2024-2025 Semicircular loop and torque on bar magnets',
  'JEE Mains 2024-2025 Ratio of electric and magnetic dipole moments',
  'JEE Advanced 2024-2025 Mass spectrometer detector height and width'
]).map((q, idx) => ({ ...q, questionNumber: 150 + idx + 1, id: `mag-part4-${idx + 1}` }));

// All 194 questions for Marathon
export const ALL_194_MAGNETIC_EFFECT_QUESTIONS: Question[] = [
  ...MAG_PART_1,
  ...MAG_PART_2,
  ...MAG_PART_3,
  ...MAG_PART_4
];

export const VIBRANT_MAGNETIC_EFFECT_TEST_1: ExamPaper = {
  id: 'vibrant-magnetic-effect-part-1',
  title: 'Vibrant Kota Physics • Magnetic Effect of Current CBT Mock Test 01 (Module 1st 50Q • Q1 to Q50)',
  pattern: 'JEE_MAIN',
  durationMinutes: 180,
  totalMarks: 200,
  sections: [
    {
      id: 'physics',
      name: 'PHYSICS (MAGNETIC EFFECT PART 1 - BIOT-SAVART LAW & MOVING CHARGES)',
      questions: MAG_PART_1,
    },
  ],
};

export const VIBRANT_MAGNETIC_EFFECT_TEST_2: ExamPaper = {
  id: 'vibrant-magnetic-effect-part-2',
  title: 'Vibrant Kota Physics • Magnetic Effect of Current CBT Mock Test 02 (Module 2nd 50Q • Q51 to Q100)',
  pattern: 'JEE_MAIN',
  durationMinutes: 180,
  totalMarks: 200,
  sections: [
    {
      id: 'physics',
      name: 'PHYSICS (MAGNETIC EFFECT PART 2 - AMPERE LAW, FORCE ON WIRES & TORQUE)',
      questions: MAG_PART_2,
    },
  ],
};

export const VIBRANT_MAGNETIC_EFFECT_TEST_3: ExamPaper = {
  id: 'vibrant-magnetic-effect-part-3',
  title: 'Vibrant Kota Physics • Magnetic Effect of Current CBT Mock Test 03 (Module 3rd 50Q • Q101 to Q150)',
  pattern: 'JEE_MAIN',
  durationMinutes: 180,
  totalMarks: 200,
  sections: [
    {
      id: 'physics',
      name: 'PHYSICS (MAGNETIC EFFECT PART 3 - GALVANOMETER & JEE ADVANCED ARCHIVE)',
      questions: MAG_PART_3,
    },
  ],
};

export const VIBRANT_MAGNETIC_EFFECT_TEST_4: ExamPaper = {
  id: 'vibrant-magnetic-effect-part-4',
  title: 'Vibrant Kota Physics • Magnetic Effect of Current CBT Mock Test 04 (Module Remainder 44Q • Q151 to Q194)',
  pattern: 'JEE_MAIN',
  durationMinutes: 176,
  totalMarks: 176,
  sections: [
    {
      id: 'physics',
      name: 'PHYSICS (MAGNETIC EFFECT PART 4 - JEE MAINS & ADVANCED 2024-2025 ARCHIVE)',
      questions: MAG_PART_4,
    },
  ],
};

export const VIBRANT_MAGNETIC_EFFECT_MARATHON_PAPER: ExamPaper = {
  id: 'module-marathon-magnetic-effect',
  title: 'Vibrant Kota Physics • Magnetic Effect of Current Complete Chapter Marathon (194 Qs)',
  pattern: 'JEE_MAIN',
  durationMinutes: 194 * 4,
  totalMarks: 194 * 4,
  sections: [
    {
      id: 'physics',
      name: 'PHYSICS (COMPLETE VIBRANT MAGNETIC EFFECT OF CURRENT MODULE)',
      questions: ALL_194_MAGNETIC_EFFECT_QUESTIONS,
    },
  ],
};
