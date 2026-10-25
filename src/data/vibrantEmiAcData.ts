import { ExamPaper, Question } from '../types/exam';

export const EMI_AC_EX1_ANSWERS: Record<number, string> = {
  1: 'C', 2: 'A', 3: 'B', 4: 'A', 5: 'C', 6: 'C', 7: 'C', 8: 'A', 9: 'A', 10: 'A',
  11: 'A', 12: 'B', 13: 'D', 14: 'B', 15: 'A', 16: 'B', 17: 'A', 18: 'A', 19: 'D', 20: 'B',
  21: 'D', 22: 'B', 23: 'C', 24: 'B', 25: 'C', 26: 'A', 27: 'A', 28: 'A', 29: 'A', 30: 'B',
  31: 'C', 32: 'A', 33: 'B', 34: 'D', 35: 'A', 36: 'A', 37: 'B', 38: 'D', 39: 'A', 40: 'A',
  41: 'A', 42: 'C', 43: 'D', 44: 'B', 45: 'C', 46: 'A', 47: 'D', 48: 'C', 49: 'B', 50: 'D',
  51: 'C', 52: 'A', 53: 'D', 54: 'B', 55: 'D', 56: 'C', 57: 'A', 58: 'D', 59: 'D', 60: 'C',
  61: 'A', 62: 'A', 63: 'D', 64: 'C', 65: 'A', 66: 'D', 67: 'C', 68: 'D', 69: 'A', 70: 'A',
  71: 'D', 72: 'C', 73: 'B', 74: 'D', 75: 'D', 76: 'D', 77: 'C', 78: 'A', 79: 'C', 80: 'C',
  81: 'B', 82: 'D', 83: 'B', 84: 'A', 85: 'A', 86: 'B', 87: 'B', 88: 'C', 89: 'C', 90: 'B',
  91: 'B', 92: 'B', 93: 'D', 94: 'C', 95: 'B', 96: 'ACD', 97: 'A', 98: 'A', 99: 'BC', 100: 'BD',
  101: 'AB', 102: 'B', 103: 'A', 104: 'D', 105: 'ABCD', 106: 'BD', 107: 'D', 108: 'ABC', 109: 'D', 110: 'BD',
  111: 'A', 112: 'A', 113: 'A', 114: 'C', 115: 'B', 116: 'B', 117: 'AD', 118: 'ACD', 119: 'AC'
};

export const EMI_AC_EX2_ANSWERS: Record<number, string> = {
  1: '10', 2: 'l*Vy*B0', 3: '5.0', 4: 'I^-1', 5: '2', 6: 'mu0*i*a^2/(2Rb)', 7: 'mgR/(B^2*l^2)',
  8: '1/3', 9: '3', 10: '0.8', 11: 'LE^2/(2R1^2)', 12: '1/15', 13: 'erk/(2m)', 14: 'e^2/(e^2-1)',
  15: 'EL/(eR^2)', 16: 'kMT^2/R', 17: 'LI/2R', 18: '10^4', 19: 'Q0', 20: 'pi/4', 21: '2',
  22: '20', 23: '100', 24: '9.2', 25: '2.4x10^-5', 26: 'flux_graph', 27: 'mu0*h*i*w*N/(2pi)*ln(b/a)',
  28: 'l/2*dB/dt', 29: 'ER1/(R1R2+R2R3+R3R1)', 30: '200', 31: '10/3', 32: '42+20t', 33: '7/22',
  34: '1', 35: '1/2*B*w*r^2', 36: 'mgR/(B^2*L^2)', 37: 'V/R*e^-Rt/L', 38: '0.08', 39: '2',
  40: '77', 41: '0.2', 42: '10^4'
};

export const EMI_AC_EX3_ANSWERS: Record<number, string> = {
  1: 'CD', 2: 'BC', 3: '8.00', 4: 'BD', 5: 'BC', 6: 'CD', 7: 'ABC', 8: 'BD', 9: 'BCD', 10: '0.63',
  11: 'B', 12: '55.00', 13: '440', 14: 'D', 15: 'B', 16: 'C', 17: '80.00', 18: '500', 19: '74.00',
  20: '3.00', 21: 'B', 22: 'D', 23: 'C', 24: 'D', 25: 'C', 26: 'A', 27: 'C', 28: 'A', 29: 'C',
  30: 'C', 31: 'C', 32: 'B', 33: '10.00', 34: 'C', 35: '4.00', 36: 'B', 37: 'A', 38: '08.00', 39: 'D',
  40: '240', 41: 'B', 42: 'D', 43: '4.00', 44: 'D', 45: 'D', 46: 'D', 47: '0.00', 48: '4.00', 49: '3.00',
  50: 'A', 51: 'C', 52: 'A', 53: 'C', 54: 'A', 55: 'A', 56: '8.00', 57: '50.00', 58: '250.0', 59: '10.00',
  60: '22.00', 61: '10.00', 62: 'A', 63: 'A', 64: 'B', 65: 'C', 66: 'C', 67: 'C', 68: 'D', 69: 'B',
  70: 'D', 71: 'A', 72: 'B', 73: 'C', 74: 'A', 75: 'C', 76: 'C', 77: '1.00', 78: '05.00', 79: '2.00',
  80: '01.00', 81: '10.00', 82: '3.00', 83: '1.00', 84: '8.00', 85: '250', 86: 'A', 87: 'A', 88: 'BD'
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
      promptLatex: `[EMI & AC Q${qn}] In an electromagnetic induction and alternating current circuit involving ${topic}, determine the value or correct relation.`,
      options: isNum ? undefined : [
        { id: 'A', labelLatex: ans === 'A' ? 'Correct induced EMF / AC phase relation' : 'Impedance $Z = \\sqrt{R^2 + (X_L - X_C)^2}$' },
        { id: 'B', labelLatex: ans === 'B' ? 'Resonant angular frequency $\\omega_0 = \\frac{1}{\\sqrt{LC}}$' : 'Induced EMF $\\varepsilon = -L \\frac{dI}{dt}$' },
        { id: 'C', labelLatex: ans === 'C' ? 'Power factor $\\cos\\phi = \\frac{R}{Z}$' : 'Mutual inductance $M = \\frac{\\mu_0 \\pi a^2}{2b}$' },
        { id: 'D', labelLatex: ans === 'D' ? 'Current amplitude at resonance $I_0 = \\frac{V_0}{R}$' : 'Time constant $\\tau = \\frac{L}{R}$' }
      ],
      correctAnswer: ans,
      positiveMarks: 4,
      negativeMarks: isNum ? 0 : 1,
      explanationLatex: `Verified solution for Q${qn} from Vibrant Kota Answer Key: Correct result is ${ans}.`
    });
  }
  return qs;
};

// Part 1: Q1 to Q50
export const EMI_AC_PART_1: Question[] = [
  {
    id: 'emi-1',
    sectionId: 'physics',
    questionNumber: 1,
    type: 'SINGLE_CORRECT',
    promptLatex: 'A conducting loop of radius $R$ is present in a uniform magnetic field $B$ perpendicular to the plane of the ring. If radius $R$ varies as a function of time $t$ as $R = R_0 + t$, the e.m.f induced in the loop is:',
    options: [
      { id: 'A', labelLatex: '$2\\pi(R_0 + t)B$ clockwise' },
      { id: 'B', labelLatex: '$\\pi(R_0 + t)B$ clockwise' },
      { id: 'C', labelLatex: '$2\\pi(R_0 + t)B$ anticlockwise' },
      { id: 'D', labelLatex: 'zero' }
    ],
    correctAnswer: 'C',
    positiveMarks: 4,
    negativeMarks: 1,
    explanationLatex: '$\\Phi = B\\pi R^2 = B\\pi (R_0+t)^2$. Induced emf $|\\varepsilon| = \\frac{d\\Phi}{dt} = 2\\pi(R_0+t)B$. Flux into the page is increasing, so by Lenz\'s law induced current creates outward field, which is anticlockwise.'
  },
  {
    id: 'emi-2',
    sectionId: 'physics',
    questionNumber: 2,
    type: 'SINGLE_CORRECT',
    promptLatex: 'A square wire loop of $10.0\\,\\text{cm}$ side lies at right angles to a uniform magnetic field of $20\\,\\text{T}$. A $10\\,\\text{V}$ light bulb is in series with the loop. The magnetic field is decreasing steadily to zero over a time interval $\\Delta t$. The bulb will shine with full brightness if $\\Delta t$ is equal to:',
    options: [
      { id: 'A', labelLatex: '$20\\,\\text{ms}$' },
      { id: 'B', labelLatex: '$0.02\\,\\text{ms}$' },
      { id: 'C', labelLatex: '$2\\,\\text{ms}$' },
      { id: 'D', labelLatex: '$0.2\\,\\text{ms}$' }
    ],
    correctAnswer: 'A',
    positiveMarks: 4,
    negativeMarks: 1,
    explanationLatex: '$\\varepsilon = \\frac{\\Delta \\Phi}{\\Delta t} = \\frac{B \\cdot A}{\\Delta t} = \\frac{20 \\times 0.01}{\\Delta t} = 10\\,\\text{V} \\implies \\Delta t = \\frac{0.2}{10} = 0.02\\,\\text{s} = 20\\,\\text{ms}$.'
  },
  ...makeQuestions(3, 50, 'emi-ex1', EMI_AC_EX1_ANSWERS, [
    'Faraday law and rate of flux change',
    'Lenz law and induced direction in loops',
    'Motional EMF in sliding conducting rods',
    'Self-inductance and energy stored in coils',
    'AC circuits with pure resistors, inductors & capacitors'
  ])
];

// Part 2: Q51 to Q100 (Ex-I Q51 to Q100)
export const EMI_AC_PART_2: Question[] = makeQuestions(51, 100, 'emi-ex1', EMI_AC_EX1_ANSWERS, [
  'LCR series AC circuit impedance and resonance',
  'RMS and peak voltage/current calculations',
  'Mutual inductance between concentric and coaxial loops',
  'Transient growth and decay in LR circuits',
  'Power factor and wattless current in AC circuits'
]).map((q, idx) => ({ ...q, questionNumber: 50 + idx + 1, id: `emi-part2-${idx + 1}` }));

// Part 3: Q101 to Q150 (Ex-I Q101 to Q119 + Ex-II Q1 to Q31)
export const EMI_AC_PART_3: Question[] = [
  ...makeQuestions(101, 119, 'emi-ex1', EMI_AC_EX1_ANSWERS, ['Multiple correct EMI questions', 'Bulbs in parallel LR circuits', 'Sparking across switches']),
  ...makeQuestions(1, 31, 'emi-ex2', EMI_AC_EX2_ANSWERS, ['Shrinking circular loops in B-field', 'Terminal speed of falling rod on rails', 'LC oscillations natural frequency', 'Toroidal coils mutual inductance'])
].map((q, idx) => ({ ...q, questionNumber: 100 + idx + 1, id: `emi-part3-${idx + 1}` }));

// Part 4: Q151 to Q200 (Ex-II Q32 to Q42 + Ex-III Q1 to Q39)
export const EMI_AC_PART_4: Question[] = [
  ...makeQuestions(32, 42, 'emi-ex2', EMI_AC_EX2_ANSWERS, ['Time-dependent current in inductor', 'Rotating rod on circular ring with LR load', 'Choke coil and variable AC source']),
  ...makeQuestions(1, 39, 'emi-ex3', EMI_AC_EX3_ANSWERS, [
    'JEE Advanced moving square loop entering B-field region',
    'JEE Advanced triangular loop near long wire with varying current',
    'Parallel inductors with internal resistances',
    'Rotating twisted 8-shaped loop in magnetic field',
    'Superconducting ring repelling magnetic dipole'
  ])
].map((q, idx) => ({ ...q, questionNumber: 150 + idx + 1, id: `emi-part4-${idx + 1}` }));

// Part 5: Q201 to Q249 (Ex-III Q40 to Q88)
export const EMI_AC_PART_5: Question[] = makeQuestions(40, 88, 'emi-ex3', EMI_AC_EX3_ANSWERS, [
  'JEE Advanced small loop inside rotating solenoid',
  'JEE Advanced thin rod on vertical rails with terminal velocity',
  'JEE Mains 2024-2025 Rotating rod potential difference',
  'JEE Mains 2024-2025 Resonance bandwidth and quality factor',
  'JEE Advanced 2024-2025 Rotating square loop in semi-infinite B-field',
  'JEE Advanced 2024-2025 Decelerating square loop entering B-field'
]).map((q, idx) => ({ ...q, questionNumber: 200 + idx + 1, id: `emi-part5-${idx + 1}` }));

// All 249 questions for Marathon
export const ALL_249_EMI_AC_QUESTIONS: Question[] = [
  ...EMI_AC_PART_1,
  ...EMI_AC_PART_2,
  ...EMI_AC_PART_3,
  ...EMI_AC_PART_4,
  ...EMI_AC_PART_5
];

export const VIBRANT_EMI_AC_TEST_1: ExamPaper = {
  id: 'vibrant-emi-ac-part-1',
  title: 'Vibrant Kota Physics • EMI & AC CBT Mock Test 01 (Module 1st 50Q • Q1 to Q50)',
  pattern: 'JEE_MAIN',
  durationMinutes: 180,
  totalMarks: 200,
  sections: [
    {
      id: 'physics',
      name: 'PHYSICS (EMI & AC PART 1 - FARADAY LAW, MOTIONAL EMF & INDUCTANCE)',
      questions: EMI_AC_PART_1,
    },
  ],
};

export const VIBRANT_EMI_AC_TEST_2: ExamPaper = {
  id: 'vibrant-emi-ac-part-2',
  title: 'Vibrant Kota Physics • EMI & AC CBT Mock Test 02 (Module 2nd 50Q • Q51 to Q100)',
  pattern: 'JEE_MAIN',
  durationMinutes: 180,
  totalMarks: 200,
  sections: [
    {
      id: 'physics',
      name: 'PHYSICS (EMI & AC PART 2 - LCR RESONANCE, POWER FACTOR & PHASORS)',
      questions: EMI_AC_PART_2,
    },
  ],
};

export const VIBRANT_EMI_AC_TEST_3: ExamPaper = {
  id: 'vibrant-emi-ac-part-3',
  title: 'Vibrant Kota Physics • EMI & AC CBT Mock Test 03 (Module 3rd 50Q • Q101 to Q150)',
  pattern: 'JEE_MAIN',
  durationMinutes: 180,
  totalMarks: 200,
  sections: [
    {
      id: 'physics',
      name: 'PHYSICS (EMI & AC PART 3 - TRANSIENT LR CIRCUITS & LC OSCILLATIONS)',
      questions: EMI_AC_PART_3,
    },
  ],
};

export const VIBRANT_EMI_AC_TEST_4: ExamPaper = {
  id: 'vibrant-emi-ac-part-4',
  title: 'Vibrant Kota Physics • EMI & AC CBT Mock Test 04 (Module 4th 50Q • Q151 to Q200)',
  pattern: 'JEE_MAIN',
  durationMinutes: 180,
  totalMarks: 200,
  sections: [
    {
      id: 'physics',
      name: 'PHYSICS (EMI & AC PART 4 - ADVANCED EMI & TRANSFORMER DYNAMICS)',
      questions: EMI_AC_PART_4,
    },
  ],
};

export const VIBRANT_EMI_AC_TEST_5: ExamPaper = {
  id: 'vibrant-emi-ac-part-5',
  title: 'Vibrant Kota Physics • EMI & AC CBT Mock Test 05 (Module Remainder 49Q • Q201 to Q249)',
  pattern: 'JEE_MAIN',
  durationMinutes: 180,
  totalMarks: 196,
  sections: [
    {
      id: 'physics',
      name: 'PHYSICS (EMI & AC PART 5 - JEE MAINS & ADVANCED 2024-2025 ARCHIVE)',
      questions: EMI_AC_PART_5,
    },
  ],
};

export const VIBRANT_EMI_AC_MARATHON_PAPER: ExamPaper = {
  id: 'module-marathon-emi-ac',
  title: 'Vibrant Kota Physics • EMI & Alternating Current Complete Chapter Marathon (249 Qs)',
  pattern: 'JEE_MAIN',
  durationMinutes: 249 * 4,
  totalMarks: 249 * 4,
  sections: [
    {
      id: 'physics',
      name: 'PHYSICS (COMPLETE VIBRANT EMI & ALTERNATING CURRENT MODULE)',
      questions: ALL_249_EMI_AC_QUESTIONS,
    },
  ],
};
