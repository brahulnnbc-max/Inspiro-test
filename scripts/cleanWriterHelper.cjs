const fs = require('fs');
const path = require('path');

// Helper to write formatted TypeScript questions file
function writeTsQuestions(filePath, exportName, questions) {
  let code = `import { Question } from '../types/exam.ts';\n\n`;
  code += `export const ${exportName}: Question[] = [\n`;

  questions.forEach((q) => {
    code += `  {\n`;
    code += `    id: ${JSON.stringify(q.id)},\n`;
    code += `    questionNumber: ${q.questionNumber},\n`;
    code += `    sectionId: ${JSON.stringify(q.sectionId || 'mathematics')},\n`;
    code += `    type: ${JSON.stringify(q.type || 'SINGLE_CORRECT')},\n`;
    code += `    promptLatex: ${JSON.stringify(q.promptLatex)},\n`;
    if (q.imageUrl) {
      code += `    imageUrl: ${JSON.stringify(q.imageUrl)},\n`;
    }
    if (q.options && q.options.length > 0) {
      code += `    options: [\n`;
      q.options.forEach((opt) => {
        code += `      { id: ${JSON.stringify(opt.id)}, labelLatex: ${JSON.stringify(opt.labelLatex)} },\n`;
      });
      code += `    ],\n`;
    }
    code += `    correctAnswer: ${JSON.stringify(q.correctAnswer || 'A')},\n`;
    code += `    explanationLatex: ${JSON.stringify(q.explanationLatex || `Vibrant Kota Faculty Solution for Question ${q.questionNumber}. Correct Answer: ${q.correctAnswer || 'A'}.`)},\n`;
    code += `    positiveMarks: ${q.positiveMarks ?? 4},\n`;
    code += `    negativeMarks: ${q.negativeMarks ?? (q.type === 'NUMERICAL' ? 0 : 1)},\n`;
    code += `  },\n`;
  });

  code += `];\n`;
  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`Generated ${questions.length} questions -> ${filePath}`);
}

module.exports = { writeTsQuestions };
