const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

function escapeStr(s) {
  if (!s) return '';
  return s
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '');
}

function writeQuestionsFile(filePath, exportName, questions) {
  let content = `import { Question } from '../types/exam.ts';\n\n`;
  content += `export const ${exportName}: Question[] = [\n`;

  questions.forEach((q) => {
    content += `  {\n`;
    content += `    id: '${escapeStr(q.id)}',\n`;
    content += `    questionNumber: ${q.questionNumber},\n`;
    content += `    sectionId: '${escapeStr(q.sectionId || 'mathematics')}',\n`;
    content += `    type: '${escapeStr(q.type || 'SINGLE_CORRECT')}',\n`;
    content += `    promptLatex: '${escapeStr(q.promptLatex)}',\n`;
    if (q.imageUrl) {
      content += `    imageUrl: '${escapeStr(q.imageUrl)}',\n`;
    }
    if (q.options && q.options.length > 0) {
      content += `    options: [\n`;
      q.options.forEach((opt) => {
        content += `      { id: '${escapeStr(opt.id)}', labelLatex: '${escapeStr(opt.labelLatex)}' },\n`;
      });
      content += `    ],\n`;
    }
    content += `    correctAnswer: '${escapeStr(q.correctAnswer || 'A')}',\n`;
    content += `    explanationLatex: '${escapeStr(q.explanationLatex || '')}',\n`;
    content += `    positiveMarks: ${q.positiveMarks ?? 4},\n`;
    content += `    negativeMarks: ${q.negativeMarks ?? (q.type === 'NUMERICAL' ? 0 : 1)},\n`;
    content += `  },\n`;
  });

  content += `];\n`;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Saved ${questions.length} questions to ${filePath}`);
}

module.exports = {
  escapeStr,
  writeQuestionsFile,
};
