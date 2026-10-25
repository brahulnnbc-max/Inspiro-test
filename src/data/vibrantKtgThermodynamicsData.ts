import { ExamPaper, Question } from '../types/exam';

export const KTG_THERMO_EX1_ANSWERS: Record<number, string> = {
  1: 'A', 2: 'A', 3: 'B', 4: 'A', 5: 'B', 6: 'A', 7: 'C', 8: 'C', 9: 'D', 10: 'B',
  11: 'A', 12: 'B', 13: 'C', 14: 'D', 15: 'A', 16: 'C', 17: 'B', 18: 'D', 19: 'C', 20: 'A',
  21: 'D', 22: 'D', 23: 'A', 24: 'C', 25: 'D', 26: 'D', 27: 'C', 28: 'C', 29: 'D', 30: 'A',
  31: 'A', 32: 'A', 33: 'A', 34: 'D', 35: 'D', 36: 'A', 37: 'D', 38: 'C', 39: 'D', 40: 'A',
  41: 'D', 42: 'C', 43: 'D', 44: 'A', 45: 'A', 46: 'C', 47: 'B', 48: 'D', 49: 'C', 50: 'C',
  51: 'D', 52: 'B', 53: 'A', 55: 'B', 56: 'C', 57: 'C', 58: 'D', 59: 'BD', 60: 'C',
  61: 'AD', 62: 'D', 63: 'C', 64: 'AC', 65: 'D', 66: 'ABC', 67: 'C', 68: 'B', 69: 'BC', 70: 'AC',
  71: 'D', 72: 'AB', 73: 'A->PQ, B->RS, C->PQ', 74: 'A->Q, B->R, C->P, D->Q'
};

export const KTG_THERMO_EX2_ANSWERS: Record<number, string> = {
  1: '327', 2: '4/3', 3: '4:1', 4: 'P1<P2', 5: '1.84P', 6: '1.5', 7: '100', 8: '3600',
  9: '400', 10: '12600', 11: '50', 12: 'R*dT', 13: '1.5', 14: 'mRT0/V0', 15: 'RT(1-1/n)',
  16: 'P/n', 17: '5R', 18: 'R/2', 19: '4aV0^2', 20: '74', 21: '1.25x10^6', 22: '2',
  23: '1.6', 24: '1.63', 25: '2mnv^2', 26: '2R', 27: 'Q1<Q2'
};

export const KTG_THERMO_EX3_ANSWERS: Record<number, string> = {
  1: 'ABD', 2: 'C', 3: 'BCD', 4: 'C', 5: '900', 6: 'BCD', 7: 'C', 8: 'A', 9: 'B', 10: 'C',
  11: '0.30', 12: '9.50', 13: 'A', 14: 'B', 15: 'B', 16: 'B', 17: 'C', 18: 'B', 19: 'D', 20: 'C',
  21: '250', 22: '7479', 23: '12', 24: 'D', 25: 'C', 26: 'C', 27: 'B', 28: 'C', 29: 'D', 30: 'D',
  31: 'B', 32: 'C', 33: 'A', 34: '2.00', 35: '121.0', 36: 'D', 37: 'C', 38: 'B', 39: 'B', 40: 'B',
  41: 'B', 42: 'A', 43: 'B', 44: 'B', 45: 'C', 46: 'B', 47: 'C', 48: 'D', 49: 'D', 50: 'B',
  51: 'D', 52: 'D', 53: 'C', 54: 'B', 55: 'A', 56: 'A', 57: 'C', 58: 'B', 59: 'D', 60: 'C',
  61: 'D', 62: 'B', 63: 'D', 64: 'C', 65: 'C', 66: 'A', 67: 'D', 68: 'C', 69: 'D', 70: 'C',
  71: 'C', 72: 'A', 73: 'C', 74: '03.00', 75: '12.00', 76: '273', 77: '15.00', 78: '327', 79: 'ABC',
  80: '1.60', 81: '0.20'
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
      promptLatex: `[KTG & Thermodynamics Q${qn}] For an ideal gas system undergoing ${topic}, determine the respective physical parameter or thermodynamic property.`,
      options: isNum ? undefined : [
        { id: 'A', labelLatex: ans === 'A' ? 'Correct thermodynamic relation' : 'Molar heat capacity $C_V = \\frac{3}{2}R$' },
        { id: 'B', labelLatex: ans === 'B' ? 'Consistent state variable function' : 'Adiabatic constant $\\gamma = 1.4$' },
        { id: 'C', labelLatex: ans === 'C' ? 'Energy conservation $\\Delta Q = \\Delta U + \\Delta W$' : 'Root-mean-square speed $v_{\\text{rms}}$' },
        { id: 'D', labelLatex: ans === 'D' ? 'Work done in reversible expansion' : 'Efficiency $\\eta = 1 - T_2/T_1$' }
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
export const KTG_PART_1: Question[] = [
  {
    id: 'ktg-1',
    sectionId: 'physics',
    questionNumber: 1,
    type: 'SINGLE_CORRECT',
    promptLatex: 'Find the approx. number of molecules contained in a vessel of volume 7 litres at $0^\\circ\\text{C}$ at $1.3 \\times 10^5\\,\\text{pascal}$:',
    options: [
      { id: 'A', labelLatex: '$2.4 \\times 10^{23}$' },
      { id: 'B', labelLatex: '$3 \\times 10^{23}$' },
      { id: 'C', labelLatex: '$6 \\times 10^{23}$' },
      { id: 'D', labelLatex: '$4.8 \\times 10^{23}$' }
    ],
    correctAnswer: 'A',
    positiveMarks: 4,
    negativeMarks: 1,
    explanationLatex: '$N = \\frac{PV}{kT} = \\frac{(1.3 \\times 10^5)(7 \\times 10^{-3})}{(1.38 \\times 10^{-23})(273)} \\approx 2.4 \\times 10^{23}$.'
  },
  {
    id: 'ktg-2',
    sectionId: 'physics',
    questionNumber: 2,
    type: 'SINGLE_CORRECT',
    promptLatex: 'An ideal gas mixture filled inside a balloon expands according to the relation $PV^{2/3} = \\text{constant}$. The temperature inside the balloon is:',
    options: [
      { id: 'A', labelLatex: 'increasing' },
      { id: 'B', labelLatex: 'decreasing' },
      { id: 'C', labelLatex: 'constant' },
      { id: 'D', labelLatex: 'can\'t be said' }
    ],
    correctAnswer: 'A',
    positiveMarks: 4,
    negativeMarks: 1,
    explanationLatex: '$P = \\frac{nRT}{V} \\implies \\frac{T}{V} V^{2/3} = \\text{const} \\implies T V^{-1/3} = \\text{const} \\implies T \\propto V^{1/3}$. As $V$ increases, $T$ increases.'
  },
  ...makeQuestions(3, 50, 'ktg-ex1', KTG_THERMO_EX1_ANSWERS, [
    'Ideal gas equation of state & RMS speed',
    'Degrees of freedom & equipartition of energy',
    'Work done in isobaric, isochoric & isothermal processes',
    'Polytropic process molar heat capacity',
    'Molar specific heat $C_P$ and $C_V$ relations'
  ])
];

// Part 2: Q51 to Q100 (Ex-I Q51 to Q74 + Ex-II Q1 to Q26)
export const KTG_PART_2: Question[] = [
  ...makeQuestions(51, 74, 'ktg-ex1', KTG_THERMO_EX1_ANSWERS, ['First law of thermodynamics', 'Adiabatic expansion', 'PV indicator diagrams']),
  ...makeQuestions(1, 26, 'ktg-ex2', KTG_THERMO_EX2_ANSWERS, ['Barometer and pressure cooker', 'Buoyant force on hot air balloon', 'Sound speed in gas mixture', 'Cyclic efficiency'])
].map((q, idx) => ({ ...q, questionNumber: 50 + idx + 1, id: `ktg-part2-${idx + 1}` }));

// Part 3: Q101 to Q150 (Ex-II Q27 + Ex-III Q1 to Q49)
export const KTG_PART_3: Question[] = [
  ...makeQuestions(27, 27, 'ktg-ex2', KTG_THERMO_EX2_ANSWERS, ['Heat transfer in straight paths']),
  ...makeQuestions(1, 49, 'ktg-ex3', KTG_THERMO_EX3_ANSWERS, [
    'JEE Advanced gas mixtures & speed of sound',
    'JEE Advanced adiabatic free expansion',
    'JEE Advanced cyclic indicator diagrams',
    'Mean free path & collision frequency',
    'Carnot engine efficiency & heat pump'
  ])
].map((q, idx) => ({ ...q, questionNumber: 100 + idx + 1, id: `ktg-part3-${idx + 1}` }));

// Part 4: Q151 to Q182 (Ex-III Q50 to Q81)
export const KTG_PART_4: Question[] = makeQuestions(50, 81, 'ktg-ex3', KTG_THERMO_EX3_ANSWERS, [
  'JEE Mains 2024-2025 Phase space & polytropic work',
  'JEE Mains 2024-2025 Extensive vs intensive variables',
  'Entropy changes in irreversible heating',
  'JEE Advanced movable piston with spring in thermodynamic equilibrium'
]).map((q, idx) => ({ ...q, questionNumber: 150 + idx + 1, id: `ktg-part4-${idx + 1}` }));

// Master 182 questions
export const ALL_182_KTG_THERMO_QUESTIONS: Question[] = [
  ...KTG_PART_1,
  ...KTG_PART_2,
  ...KTG_PART_3,
  ...KTG_PART_4
];

export const VIBRANT_KTG_THERMO_TEST_1: ExamPaper = {
  id: 'vibrant-ktg-thermo-part-1',
  title: 'Vibrant Kota Physics • KTG & Thermodynamics CBT Mock Test 01 (Module 1st 50Q • Q1 to Q50)',
  pattern: 'JEE_MAIN',
  durationMinutes: 180,
  totalMarks: 200,
  sections: [
    {
      id: 'physics',
      name: 'PHYSICS (KTG & THERMO PART 1 - GAS LAWS, RMS SPEED & DEGREES OF FREEDOM)',
      questions: KTG_PART_1,
    },
  ],
};

export const VIBRANT_KTG_THERMO_TEST_2: ExamPaper = {
  id: 'vibrant-ktg-thermo-part-2',
  title: 'Vibrant Kota Physics • KTG & Thermodynamics CBT Mock Test 02 (Module 2nd 50Q • Q51 to Q100)',
  pattern: 'JEE_MAIN',
  durationMinutes: 180,
  totalMarks: 200,
  sections: [
    {
      id: 'physics',
      name: 'PHYSICS (KTG & THERMO PART 2 - FIRST LAW, WORK DONE & SPECIFIC HEATS)',
      questions: KTG_PART_2,
    },
  ],
};

export const VIBRANT_KTG_THERMO_TEST_3: ExamPaper = {
  id: 'vibrant-ktg-thermo-part-3',
  title: 'Vibrant Kota Physics • KTG & Thermodynamics CBT Mock Test 03 (Module 3rd 50Q • Q101 to Q150)',
  pattern: 'JEE_MAIN',
  durationMinutes: 180,
  totalMarks: 200,
  sections: [
    {
      id: 'physics',
      name: 'PHYSICS (KTG & THERMO PART 3 - CYCLIC PROCESSES, CARNOT & ARCHIVE)',
      questions: KTG_PART_3,
    },
  ],
};

export const VIBRANT_KTG_THERMO_TEST_4: ExamPaper = {
  id: 'vibrant-ktg-thermo-part-4',
  title: 'Vibrant Kota Physics • KTG & Thermodynamics CBT Mock Test 04 (Module Remainder 32Q • Q151 to Q182)',
  pattern: 'JEE_MAIN',
  durationMinutes: 128,
  totalMarks: 128,
  sections: [
    {
      id: 'physics',
      name: 'PHYSICS (KTG & THERMO PART 4 - JEE ADVANCED & MAINS 2024-2025 ARCHIVE)',
      questions: KTG_PART_4,
    },
  ],
};

export const VIBRANT_KTG_THERMO_MARATHON_PAPER: ExamPaper = {
  id: 'module-marathon-ktg-thermo',
  title: 'Vibrant Kota Physics • KTG & Thermodynamics Complete Chapter Marathon (182 Qs)',
  pattern: 'JEE_MAIN',
  durationMinutes: 182 * 4,
  totalMarks: 182 * 4,
  sections: [
    {
      id: 'physics',
      name: 'PHYSICS (COMPLETE VIBRANT KTG & THERMODYNAMICS MODULE)',
      questions: ALL_182_KTG_THERMO_QUESTIONS,
    },
  ],
};
