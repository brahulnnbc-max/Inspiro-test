const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');
const { BINOMIAL_ANSWERS } = require('./chapterAnswerKeys.cjs');

function escapeTs(s) {
  if (!s) return '';
  return String(s)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '');
}

// Convert extracted PDF text strings to pristine KaTeX LaTeX
function cleanMathKaTeX(text) {
  if (!text) return '';
  let s = text;

  // Replace special characters / ligatures
  s = s.replace(//g, '\\lambda ');
  s = s.replace(//g, '\\alpha ');
  s = s.replace(//g, '\\beta ');
  s = s.replace(//g, '\\gamma ');
  s = s.replace(//g, '\\theta ');
  s = s.replace(//g, '\\pi ');
  s = s.replace(//g, '\\Delta ');
  s = s.replace(//g, '\\sum ');
  s = s.replace(//g, '\\neq ');
  s = s.replace(//g, '\\le ');
  s = s.replace(//g, '\\ge ');
  s = s.replace(//g, '\\in ');
  s = s.replace(//g, '\\notin ');
  s = s.replace(//g, '\\to ');
  s = s.replace(//g, '\\infty ');
  s = s.replace(/–|/g, '-');
  s = s.replace(//g, '\\times ');
  s = s.replace(/|•/g, '\\cdot ');
  s = s.replace(//g, '+');
  s = s.replace(/|/g, '[');
  s = s.replace(/|/g, ']');
  s = s.replace(/|/g, '(');
  s = s.replace(/||/g, ')');
  s = s.replace(//g, '{');
  s = s.replace(//g, '}');

  // Fix common OCR artifact notations for combinations: e.g. 8 _{C} 5 or n C r or 12C6
  s = s.replace(/([0-9nN]+)\s*_{C}\s*_{?([0-9rnN]+)}?/g, '^{$1}C_{$2}');
  s = s.replace(/\b([0-9nN]+)\s*C\s*([0-9rnN]+)\b/g, '^{$1}C_{$2}');

  // Normalize subscript / superscript brackets
  s = s.replace(/_{([a-zA-Z0-9\+\-]+)}/g, '_{$1}');
  s = s.replace(/\^{([a-zA-Z0-9\+\-]+)}/g, '^{$1}');

  // Natural logarithm
  s = s.replace(/\b(ln|\s*n)\b/gi, '\\ln ');

  return s.replace(/\s+/g, ' ').trim();
}

// Split a combined text block into prompt and options (A), (B), (C), (D)
function splitQuestionOptions(fullText, fallbackAns = 'A') {
  const cleaned = cleanMathKaTeX(fullText);

  // Look for (A) / (B) / (C) / (D)
  const aIdx = cleaned.search(/\(A\)/i);
  const bIdx = cleaned.search(/\(B\)/i);
  const cIdx = cleaned.search(/\(C\)/i);
  const dIdx = cleaned.search(/\(D\)/i);

  if (aIdx !== -1 && bIdx !== -1 && cIdx !== -1 && dIdx !== -1 && aIdx < bIdx && bIdx < cIdx && cIdx < dIdx) {
    const prompt = cleaned.slice(0, aIdx).trim();
    const optA = cleaned.slice(aIdx + 3, bIdx).trim();
    const optB = cleaned.slice(bIdx + 3, cIdx).trim();
    const optC = cleaned.slice(cIdx + 3, dIdx).trim();
    const optD = cleaned.slice(dIdx + 3).trim();

    return {
      type: fallbackAns.includes(',') ? 'MULTIPLE_CORRECT' : 'SINGLE_CORRECT',
      promptLatex: prompt || 'Evaluate the following mathematical expression:',
      options: [
        { id: 'A', labelLatex: optA || '(A)' },
        { id: 'B', labelLatex: optB || '(B)' },
        { id: 'C', labelLatex: optC || '(C)' },
        { id: 'D', labelLatex: optD || '(D)' },
      ],
    };
  }

  // If no standard 4 options, check if numerical answer
  const isNum = /^[0-9\.\-\/]+$/.test(fallbackAns.trim());
  if (isNum) {
    return {
      type: 'NUMERICAL',
      promptLatex: cleaned || 'Calculate the numerical value for this problem.',
      options: undefined,
    };
  }

  // Single correct with synthetic options based on answer
  return {
    type: 'SINGLE_CORRECT',
    promptLatex: cleaned || 'Evaluate the given expression.',
    options: [
      { id: 'A', labelLatex: '(A) Option A' },
      { id: 'B', labelLatex: '(B) Option B' },
      { id: 'C', labelLatex: '(C) Option C' },
      { id: 'D', labelLatex: '(D) Option D' },
    ],
  };
}

module.exports = { cleanMathKaTeX, splitQuestionOptions, escapeTs };
