import express from 'express';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// 1. CORS & Preflight headers for cross-origin or Vercel routing
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// 2. High limit body parsers with guard against Vercel pre-parsed bodies (prevents hanging stream reads)
const jsonParser = express.json({ limit: '50mb' });
const urlencodedParser = express.urlencoded({ extended: true, limit: '50mb' });

app.use((req, res, next) => {
  if (req.body && typeof req.body === 'object') {
    return next();
  }
  jsonParser(req, res, next);
});

app.use((req, res, next) => {
  if (req.body && typeof req.body === 'object') {
    return next();
  }
  urlencodedParser(req, res, next);
});

function getGeminiApiKey(): string | undefined {
  return process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
}

function getGeminiClient(): GoogleGenAI {
  const apiKey = getGeminiApiKey();
  return new GoogleGenAI({
    apiKey: apiKey || '',
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Resilient multi-model fallback: Flagship gemini-3.8-flash first, followed by fallbacks
async function generateContentWithFallback(options: {
  contents: any;
  config?: any;
}) {
  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured. Please add GEMINI_API_KEY in your Vercel Project Settings > Environment Variables.');
  }

  const ai = getGeminiClient();
  // Prioritize gemini-flash-latest for rapid, high-throughput document & math extraction, with gemini-3.8-flash and gemini-3.1-flash-lite fallbacks
  const candidateModels = ['gemini-flash-latest', 'gemini-3.8-flash', 'gemini-3.1-flash-lite'];
  let lastError: any = null;

  for (const model of candidateModels) {
    try {
      console.log(`[inspiro AI] Requesting model ${model}...`);
      const response = await ai.models.generateContent({
        model,
        contents: options.contents,
        config: options.config,
      });
      console.log(`[inspiro AI] Model ${model} succeeded!`);
      return response;
    } catch (err: any) {
      console.warn(`[inspiro AI] Model ${model} failed (${err.message || err}). Trying fallback model...`);
      lastError = err;
    }
  }

  throw lastError;
}

// Stack-based auto-closer for truncated JSON responses from LLM token cutoffs
function autoCloseTruncatedJSON(str: string): string {
  let inString = false;
  let escaped = false;
  const stack: string[] = [];

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (escaped) {
      escaped = false;
      continue;
    }
    if (ch === '\\') {
      escaped = true;
      continue;
    }
    if (ch === '"') {
      inString = !inString;
      continue;
    }
    if (!inString) {
      if (ch === '{' || ch === '[') {
        stack.push(ch);
      } else if (ch === '}' && stack[stack.length - 1] === '{') {
        stack.pop();
      } else if (ch === ']' && stack[stack.length - 1] === '[') {
        stack.pop();
      }
    }
  }

  let result = str;
  if (inString) {
    result += '"';
  }

  // Remove trailing comma or dangling colon before closing
  result = result.replace(/,\s*$/, '');
  result = result.replace(/:\s*$/, ': null');
  result = result.replace(/,\s*([}\]])/g, '$1');

  // Close remaining open brackets and braces in LIFO order
  while (stack.length > 0) {
    const open = stack.pop();
    result = result.replace(/,\s*$/, '');
    if (open === '{') result += '}';
    if (open === '[') result += ']';
  }

  return result;
}

// Ultra-robust JSON parser with automatic fence removal, LaTeX backslash repair, and truncated JSON completion
function cleanAndParseJSON(rawText: string | undefined): any {
  if (!rawText) return {};
  let clean = rawText.trim();
  clean = clean.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();

  // Try direct parse first
  try {
    return JSON.parse(clean);
  } catch (_err1) {
    // Proceed to repair pipeline
  }

  // Step 1: Find outermost JSON boundary
  const firstBrace = clean.indexOf('{');
  const firstBracket = clean.indexOf('[');
  let startIdx = 0;
  if (firstBrace !== -1 && (firstBracket === -1 || firstBrace < firstBracket)) {
    startIdx = firstBrace;
  } else if (firstBracket !== -1) {
    startIdx = firstBracket;
  }
  clean = clean.slice(startIdx);

  // Step 2: Sanitize unescaped LaTeX backslashes that break standard JSON.parse
  // (e.g. \alpha, \frac, \sqrt, \vec, \Delta, \theta, \sin, \cos)
  let sanitized = clean.replace(/\\(?!["\\/bfnrt]|u[0-9a-fA-F]{4})/g, '\\\\');

  // Step 3: Remove problematic unescaped ASCII control codes inside strings
  sanitized = sanitized.replace(/[\u0000-\u0009\u000B\u000C\u000E-\u001F]+/g, ' ');

  // Step 4: Strip trailing commas before closing braces/brackets
  sanitized = sanitized.replace(/,\s*([}\]])/g, '$1');

  try {
    return JSON.parse(sanitized);
  } catch (_err2) {
    // Step 5: Auto-close truncated JSON (e.g. if tokens ended mid-question)
    try {
      const repaired = autoCloseTruncatedJSON(sanitized);
      return JSON.parse(repaired);
    } catch (err3: any) {
      console.warn('[cleanAndParseJSON] Repair pipeline failed. Attempting structural recovery:', err3.message);
      // Last-ditch: extract whatever valid object can be found
      const lastValidBrace = sanitized.lastIndexOf('}');
      if (lastValidBrace > 0) {
        try {
          const cut = sanitized.slice(0, lastValidBrace + 1);
          return JSON.parse(autoCloseTruncatedJSON(cut));
        } catch {}
      }
      throw err3;
    }
  }
}

// Root & API status endpoint
app.get('/api', (req, res) => {
  const apiKey = getGeminiApiKey();
  res.json({
    status: 'ok',
    appName: 'inspiro LIVE • JEE Test & Module Practice',
    hasGeminiKey: Boolean(apiKey),
    aiEngine: 'inspiro AI Flash Vision & STEM Reasoner',
    serverTime: new Date().toISOString(),
    endpoints: [
      '/api/health',
      '/api/parse-exam-pdf',
      '/api/generate-remedial-pyqs',
      '/api/generate-test-schedule',
      '/api/generate-full-routine',
      '/api/ai-academic-mentor',
    ],
  });
});

// Health check endpoint (both /api/health and /health)
app.get(['/api/health', '/health'], (req, res) => {
  const apiKey = getGeminiApiKey();
  res.json({
    status: 'ok',
    appName: 'inspiro LIVE • JEE Test & Module Practice',
    hasGeminiKey: Boolean(apiKey),
    aiEngine: 'inspiro AI 3.8 Flash Vision & STEM Reasoner',
    serverTime: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    platform: process.env.VERCEL ? 'vercel' : 'node',
  });
});

// Advanced Question Paper & Module PDF Extraction Endpoint
app.post(['/api/parse-exam-pdf', '/parse-exam-pdf'], async (req, res) => {
  try {
    const rawFileBase64 =
      req.body.fileBase64 || req.body.pdfBase64 || req.body.questionFileBase64;
    const rawSolutionBase64 =
      req.body.solutionFileBase64 || req.body.solutionBase64;
    const mimeType =
      req.body.mimeType || req.body.pdfMimeType || 'application/pdf';
    const examTitle =
      req.body.examTitle ||
      req.body.customTitle ||
      req.body.title ||
      'JEE CBT Mock Test';
    const pattern = req.body.pattern || 'JEE_MAIN';
    const userCommand = req.body.userCommand || '';
    const customDurationMinutes =
      req.body.customDurationMinutes || req.body.customDuration;
    const defaultPositiveMarks = req.body.defaultPositiveMarks ?? 4;
    const defaultNegativeMarks = req.body.defaultNegativeMarks ?? 1;

    if (!rawFileBase64) {
      return res.status(400).json({ error: 'No question paper or module PDF provided' });
    }

    const apiKey = getGeminiApiKey();
    if (!apiKey) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY is not configured. Please add GEMINI_API_KEY in your Vercel Project Settings > Environment Variables.',
      });
    }

    const cleanBase64 = rawFileBase64.replace(/^data:[^;]+;base64,/, '');

    const systemInstruction = `You are the World's Premier JEE (Joint Entrance Examination) Question Paper & Coaching Module Extraction AI.
You have analyzed hundreds of thousands of test papers from Kota and Hyderabad (Allen, FIITJEE, MathonGo, Resonance, Narayana, Sri Chaitanya, PhysicsWallah, Motion, Competishun, and official NTA papers).

Your core mission:
1. FAITHFULLY EXTRACT EVERY SINGLE QUESTION from the uploaded document(s). Do not skip questions, do not stop halfway, and do not summarize.
2. PRESERVE AND FORMAT ALL MATHEMATICS, PHYSICS, AND CHEMISTRY with flawless standard LaTeX syntax:
   - Inline math: $formula$, e.g. $E = mc^2$, $\\vec{F} = m\\vec{a}$, $\\int_0^\\pi \\sin(x) dx$, $\\alpha, \\beta, \\gamma, \\theta$, $\\Delta H^\\circ$, $[Fe(CN)_6]^{4-}$.
   - Block equations: $$display formula$$.
   - Fractions: $\\frac{a}{b}$, square roots: $\\sqrt{x}$, vectors: $\\vec{v}$ or $\\mathbf{v}$.
3. DIAGRAM & FIGURE PRESERVATION:
   - If a question includes or refers to an image, graph, electrical circuit, free-body diagram, ray diagram, chemical apparatus, or geometry figure, include a comprehensive, vivid description in [Diagram: ...] within promptLatex, e.g. [Diagram: A uniform cylinder of mass M and radius R rolls without slipping down an inclined plane of angle theta].
4. QUESTION TYPES & ACCURATE CLASSIFICATION:
   - "SINGLE_CORRECT": Standard MCQ with options A, B, C, D (or 1, 2, 3, 4). Single option is correct. Standard marking: +4, -1.
   - "MULTIPLE_CORRECT": JEE Advanced multi-select where 1, 2, 3, or all 4 options can be correct. Marking: +4, -2.
   - "NUMERICAL": Integer or decimal answer (e.g., 5, 25, 0.75, -3). Non-MCQ question. Marking: +4, 0 or -1.
   - "MATRIX_MATCH": Column matching question (List I vs List II).
5. VERIFIED ANSWER KEY & MASTERCLASS SOLUTIONS:
   - Cross-reference the answer key if it appears on the last page of the paper, in an answer key table, or in the attached solution document.
   - If NO printed answer key is found in the document, you MUST solve each question step-by-step with rigorous physics/chemistry/math principles, determine the correct answer, and explain it clearly in explanationLatex.
   - For every question, write an insightful, step-by-step masterclass solution in explanationLatex so the student learns the concept and common traps.
6. SECTION ORGANIZATION:
   - If the paper contains multiple subjects, group them into:
     - Section "physics": Physics questions
     - Section "chemistry": Chemistry questions
     - Section "mathematics": Mathematics questions
   - If the document is a single subject or module exercise (e.g. only Physics, or only Kinematics Module), create a section matching the subject/topic.
7. COMPLIANCE WITH USER COMMANDS:
   - The user may supply specific directives (e.g. page numbers to extract, answer key mappings, duration overrides, section names). You MUST give their custom command the HIGHEST PRIORITY.`;

    const parts: any[] = [
      {
        inlineData: {
          mimeType: mimeType,
          data: cleanBase64,
        },
      },
    ];

    if (rawSolutionBase64) {
      const cleanSolBase64 = rawSolutionBase64.replace(/^data:[^;]+;base64,/, '');
      parts.push({
        inlineData: {
          mimeType: mimeType,
          data: cleanSolBase64,
        },
      });
      parts.push({
        text: 'The first file contains the question paper. The second file contains the official answer key and solutions. Cross-reference them to extract both questions, correct answers, and step-by-step solutions.',
      });
    }

    let promptText = `Extract the full question paper into a complete structured Computer-Based Test (CBT) paper.
Session Title: "${examTitle}"
Exam Pattern: ${pattern}
Target Duration: ${customDurationMinutes || (pattern === 'JEE_MAIN' ? 180 : 180)} minutes
`;

    if (userCommand && userCommand.trim()) {
      promptText += `\n\n🚨 USER CUSTOM COMMAND & SPECIAL DIRECTIVE (HIGHEST PRIORITY):
"""
${userCommand.trim()}
"""
You must strictly execute every instruction specified in the user's command above.`;
    }

    promptText += `\n\nEnsure that ALL questions found in the document are extracted sequentially, with accurate question numbers, proper LaTeX math formatting (with double-escaped backslashes like \\\\frac and \\\\sqrt), all 4 options (for MCQs), correct answers, and thorough step-by-step solutions.`;

    parts.push({ text: promptText });

    const response = await generateContentWithFallback({
      contents: { parts },
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            pattern: { type: Type.STRING },
            durationMinutes: { type: Type.INTEGER },
            totalMarks: { type: Type.INTEGER },
            sections: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING, description: "'physics', 'chemistry', 'mathematics', or custom topic id" },
                  name: { type: Type.STRING },
                  questions: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        id: { type: Type.STRING },
                        questionNumber: { type: Type.INTEGER },
                        sectionId: { type: Type.STRING },
                        type: { type: Type.STRING, description: "'SINGLE_CORRECT', 'MULTIPLE_CORRECT', 'NUMERICAL', 'MATRIX_MATCH'" },
                        promptLatex: { type: Type.STRING },
                        diagramDescription: { type: Type.STRING },
                        options: {
                          type: Type.ARRAY,
                          items: {
                            type: Type.OBJECT,
                            properties: {
                              id: { type: Type.STRING, description: "'A', 'B', 'C', or 'D'" },
                              labelLatex: { type: Type.STRING },
                            },
                            required: ['id', 'labelLatex'],
                          },
                        },
                        correctAnswer: { type: Type.STRING, description: "e.g. 'A', 'B', 'C', 'D' or numeric string like '25' or 'A,C' for multiple" },
                        explanationLatex: { type: Type.STRING },
                        positiveMarks: { type: Type.NUMBER },
                        negativeMarks: { type: Type.NUMBER },
                      },
                      required: ['id', 'questionNumber', 'sectionId', 'type', 'promptLatex'],
                    },
                  },
                },
                required: ['id', 'name', 'questions'],
              },
            },
          },
          required: ['title', 'pattern', 'durationMinutes', 'sections'],
        },
      },
    });

    const parsedData = cleanAndParseJSON(response.text);

    // Post-processing & Sanitization: Ensure sections and question numbering are robust
    if (!parsedData.sections || !Array.isArray(parsedData.sections) || parsedData.sections.length === 0) {
      parsedData.sections = [
        {
          id: 'physics',
          name: 'PHYSICS',
          questions: Array.isArray(parsedData.questions) ? parsedData.questions : [],
        },
      ];
    }

    let globalQuestionIndex = 1;
    let calculatedTotalMarks = 0;

    parsedData.sections.forEach((sec: any) => {
      const normId = String(sec.id || '').toLowerCase();
      if (normId.includes('chem')) sec.id = 'chemistry';
      else if (normId.includes('math')) sec.id = 'mathematics';
      else if (normId.includes('phys')) sec.id = 'physics';
      else if (!sec.id) sec.id = 'physics';

      if (!sec.name) sec.name = String(sec.id).toUpperCase();

      if (Array.isArray(sec.questions)) {
        sec.questions.forEach((q: any) => {
          if (!q.id) q.id = `q-${globalQuestionIndex}`;
          q.questionNumber = globalQuestionIndex;
          q.sectionId = sec.id;

          // Normalize Options
          if (Array.isArray(q.options) && q.options.length > 0) {
            q.options = q.options.map((opt: any, optIdx: number) => {
              const defaultId = ['A', 'B', 'C', 'D'][optIdx] || String.fromCharCode(65 + optIdx);
              if (typeof opt === 'string') {
                return { id: defaultId, labelLatex: opt };
              }
              let optId = String(opt.id || defaultId).toUpperCase().trim();
              if (optId === '1') optId = 'A';
              else if (optId === '2') optId = 'B';
              else if (optId === '3') optId = 'C';
              else if (optId === '4') optId = 'D';
              return {
                id: optId,
                labelLatex: String(opt.labelLatex || opt.text || opt.label || '').trim(),
              };
            });
            if (!q.type) q.type = 'SINGLE_CORRECT';
          } else {
            q.type = 'NUMERICAL';
          }

          // Normalize Correct Answer
          if (q.correctAnswer !== undefined && q.correctAnswer !== null) {
            let ca = String(q.correctAnswer).trim().toUpperCase();
            if (ca === '1') ca = 'A';
            else if (ca === '2') ca = 'B';
            else if (ca === '3') ca = 'C';
            else if (ca === '4') ca = 'D';
            q.correctAnswer = ca;
          } else {
            q.correctAnswer = q.type === 'NUMERICAL' ? '0' : 'A';
          }

          if (q.positiveMarks === undefined) q.positiveMarks = defaultPositiveMarks;
          if (q.negativeMarks === undefined) {
            q.negativeMarks = q.type === 'NUMERICAL' && pattern === 'JEE_MAIN' ? 0 : defaultNegativeMarks;
          }

          if (!q.explanationLatex) {
            q.explanationLatex = `Step-by-step solution for Question ${globalQuestionIndex}. Correct Answer: ${q.correctAnswer}.`;
          }

          calculatedTotalMarks += q.positiveMarks;
          globalQuestionIndex++;
        });
      }
    });

    parsedData.id = parsedData.id || `custom-paper-${Date.now()}`;
    parsedData.title = parsedData.title || examTitle;
    parsedData.pattern = parsedData.pattern || pattern;
    parsedData.durationMinutes = parsedData.durationMinutes || customDurationMinutes || 180;
    parsedData.totalMarks = calculatedTotalMarks > 0 ? calculatedTotalMarks : (pattern === 'JEE_MAIN' ? 300 : 180);

    res.json({
      success: true,
      examPaper: parsedData,
      data: parsedData,
    });
  } catch (error: any) {
    console.error('Error parsing exam PDF:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to process question paper with Advanced AI Engine',
    });
  }
});

// Generate genuine JEE Main & Advanced PYQ-level Remedial Questions based on a student mistake
app.post(['/api/generate-remedial-pyqs', '/generate-remedial-pyqs'], async (req, res) => {
  try {
    const {
      promptLatex,
      sectionId = 'physics',
      pattern = 'JEE_MAIN',
      missedReason = 'Conceptual gap',
    } = req.body;

    const apiKey = getGeminiApiKey();
    if (!apiKey) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY is not configured. Please add GEMINI_API_KEY in your Vercel Project Settings > Environment Variables.',
      });
    }

    const systemInstruction = `You are a premier senior JEE physics, chemistry, and mathematics master faculty member with 20+ years of experience training top 100 AIR rankers for JEE Main and JEE Advanced.
The student made a mistake or struggled with the following JEE question:
"${promptLatex}"
Subject: ${sectionId}
Target Exam: ${pattern}
Identified reason: ${missedReason}

Your task is to generate 3 high-yield, genuine JEE PYQ-level (or exact isomorphic PYQ variants from actual recent JEE Main 2019-2024 / JEE Advanced papers) practice questions that rigorously test the exact same concept, trick, or mathematical mechanism.
Do NOT generate trivial or generic textbook questions. These MUST be authentic, multi-step, rigorous JEE questions with tricky traps, proper standard units, and realistic numerical calculations.
For each question:
1. Provide the complete question text with authentic LaTeX formulas ($...$ for inline, $$...$$ for display).
2. For MCQs, provide 4 distinct plausible options (A, B, C, D) with LaTeX labels.
3. For Numerical, set type to "NUMERICAL" and provide the exact integer/decimal answer.
4. Specify the exact historical context or tag (e.g. "Similar to JEE Main 2023 29 Jan Shift 1" or "JEE Advanced Core Concept").
5. Provide a rigorous, step-by-step masterclass solution with LaTeX equations explaining the concept and the common pitfall to avoid.`;

    const promptText = `Generate 3 authentic, challenging JEE PYQ-level practice questions to remediate this student's mistake.`;

    const response = await generateContentWithFallback({
      contents: promptText,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            topicName: { type: Type.STRING },
            conceptSummary: { type: Type.STRING },
            remedialQuestions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  type: { type: Type.STRING, description: "'SINGLE_CORRECT' or 'NUMERICAL'" },
                  historicalTag: { type: Type.STRING, description: "e.g. 'JEE Main 2023 Shift 1 Variant' or 'JEE Advanced Model'" },
                  promptLatex: { type: Type.STRING },
                  options: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        id: { type: Type.STRING },
                        labelLatex: { type: Type.STRING },
                      },
                      required: ['id', 'labelLatex'],
                    },
                  },
                  correctAnswer: { type: Type.STRING },
                  solutionLatex: { type: Type.STRING },
                },
                required: ['id', 'type', 'historicalTag', 'promptLatex', 'correctAnswer', 'solutionLatex'],
              },
            },
          },
          required: ['topicName', 'conceptSummary', 'remedialQuestions'],
        },
      },
    });

    const parsedData = cleanAndParseJSON(response.text);

    res.json({
      success: true,
      data: parsedData,
    });
  } catch (error: any) {
    console.error('Error generating remedial PYQs:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to generate remedial questions',
    });
  }
});

// AI-Powered Long-Term Test Series Scheduler & Syllabus Checklist Generator
app.post(['/api/generate-test-schedule', '/generate-test-schedule', '/api/generate-roadmap-schedule'], async (req, res) => {
  try {
    const {
      prompt = req.body.command || 'Create an Allen Leader 6-month test schedule with 8 periodic tests on Sundays',
      pattern = 'JEE_MAIN',
      numberOfTests = 8,
    } = req.body;

    const apiKey = getGeminiApiKey();
    if (!apiKey) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY is not configured. Please add GEMINI_API_KEY in your Vercel Project Settings > Environment Variables.',
      });
    }

    const systemInstruction = `You are the Master Academic Director for premier JEE coaching institutes (Allen Career Institute, FIITJEE, MathonGo).
Your job is to generate a comprehensive, realistic, and highly organized 3 to 6 month Computer-Based Test (CBT) schedule for JEE Main / Advanced aspirants.
Follow strict coaching norms:
1. Space tests regularly (e.g. alternate Sundays or every 2-3 weeks).
2. Distribute the syllabus systematically from Class 11th fundamentals to advanced Class 12th topics, concluding with Full Syllabus / All India Mocks.
3. For EVERY scheduled test:
   - Provide an authentic coaching title (e.g. "Allen Leader Minor Test 01 - Mechanics & Physical Chem").
   - Set standard NTA live test time windows: "09:00" to "12:00" (Morning Shift) or "14:00" to "17:00" (Afternoon Shift).
   - Set scheduled dates starting from current upcoming Sunday onwards.
   - For EACH of the 3 subjects (Physics, Chemistry, Mathematics), provide specific chapter & topic checklists so the student can track their revision before the test!`;

    const response = await generateContentWithFallback({
      contents: `Generate a structured test series schedule based on user instructions: "${prompt}". Number of tests: ${numberOfTests}. Pattern: ${pattern}.`,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            seriesTitle: { type: Type.STRING },
            description: { type: Type.STRING },
            tests: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  title: { type: Type.STRING },
                  scheduledDate: { type: Type.STRING, description: "YYYY-MM-DD format" },
                  startTime: { type: Type.STRING, description: "HH:MM format, e.g. 09:00 or 14:00" },
                  endTime: { type: Type.STRING, description: "HH:MM format, e.g. 12:00 or 17:00" },
                  pattern: { type: Type.STRING },
                  syllabus: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        subject: { type: Type.STRING, description: "'physics', 'chemistry', or 'mathematics'" },
                        name: { type: Type.STRING, description: "Specific chapter or topics, e.g. 'Kinematics & NLM' or 'Thermodynamics'" },
                      },
                      required: ['subject', 'name'],
                    },
                  },
                },
                required: ['id', 'title', 'scheduledDate', 'startTime', 'endTime', 'syllabus'],
              },
            },
          },
          required: ['seriesTitle', 'description', 'tests'],
        },
      },
    });

    const parsedData = cleanAndParseJSON(response.text);

    res.json({
      success: true,
      data: parsedData,
    });
  } catch (error: any) {
    console.error('Error generating test schedule:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to generate test schedule with AI',
    });
  }
});

// AI-Powered Master Coaching Routine (Daily Module Practice Sprints + Weekend Real Tests)
app.post(['/api/generate-full-routine', '/generate-full-routine'], async (req, res) => {
  try {
    const {
      commandPrompt = 'Create an Allen Leader daily module practice routine (Mon-Fri 7-8pm) and alternate Sunday real tests',
      targetExam = 'JEE_MAIN',
      practiceSlot = '19:00 - 20:00',
      testSlot = '09:00 - 12:00',
    } = req.body;

    const apiKey = getGeminiApiKey();
    if (!apiKey) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY is not configured. Please add GEMINI_API_KEY in your Vercel Project Settings > Environment Variables.',
      });
    }

    const systemInstruction = `You are the Chief Academic Director at a premier JEE coaching institute (Allen Career Institute, Kota).
Your task is to design an integrated Daily Coaching Study & Test Schedule for a JEE aspirant based on their command.
Follow the proven Kota coaching methodology:
1. Monday through Friday: Daily "Module Practice Sprints" (20-30 questions, 45-60 minutes).
   - Alternate between Physics, Chemistry, and Mathematics (e.g. Mon: Physics Module Ex 1, Tue: Chemistry Module Ex 1, Wed: Math Module Ex 1, Thu: Physics Ex 2, Fri: Chem/Math Revision Drill).
2. Weekend (Saturday or Sunday): A "Real Test" (180 minutes, 300 marks, authentic CBT format) testing the exact chapters practiced during that week or fortnight.
3. Distribute topics systematically starting from current date onwards for 6-12 weeks.
4. Each item must have:
   - "type": "MODULE_PRACTICE" or "REAL_TEST"
   - "title": e.g. "Kinematics Module Exercise 1 Sprint" or "Allen Leader Minor Test 01"
   - "chapterOrTopic": e.g. "Kinematics 1D & 2D"
   - "subject": "physics", "chemistry", or "mathematics"
   - "scheduledDate": YYYY-MM-DD
   - "scheduledSlot": e.g. "19:00 - 20:00" for practice, "09:00 - 12:00" for test
   - "durationMinutes": 45-60 for practice, 180 for real test
   - "questionCount": 20-30 for practice, 75 for real test
   - "weekNumber": integer 1, 2, 3...
   - "dayName": "Monday", "Tuesday", etc.`;

    const response = await generateContentWithFallback({
      contents: `Generate a structured daily practice + real test routine based on command: "${commandPrompt}". Practice slot: ${practiceSlot}. Test slot: ${testSlot}.`,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            routineTitle: { type: Type.STRING },
            summary: { type: Type.STRING },
            items: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  type: { type: Type.STRING, description: "'MODULE_PRACTICE' or 'REAL_TEST'" },
                  title: { type: Type.STRING },
                  chapterOrTopic: { type: Type.STRING },
                  subject: { type: Type.STRING, description: "'physics', 'chemistry', or 'mathematics'" },
                  scheduledDate: { type: Type.STRING },
                  scheduledSlot: { type: Type.STRING },
                  durationMinutes: { type: Type.INTEGER },
                  questionCount: { type: Type.INTEGER },
                  weekNumber: { type: Type.INTEGER },
                  dayName: { type: Type.STRING },
                },
                required: [
                  'id',
                  'type',
                  'title',
                  'chapterOrTopic',
                  'subject',
                  'scheduledDate',
                  'scheduledSlot',
                  'durationMinutes',
                  'questionCount',
                  'weekNumber',
                  'dayName',
                ],
              },
            },
          },
          required: ['routineTitle', 'summary', 'items'],
        },
      },
    });

    const parsedData = cleanAndParseJSON(response.text);

    res.json({
      success: true,
      data: parsedData,
    });
  } catch (error: any) {
    console.error('Error generating full routine:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to generate routine with AI',
    });
  }
});

// Interactive AI Academic Mentor Chat & Dynamic Scheduler
app.post(['/api/ai-academic-mentor', '/ai-academic-mentor', '/api/mentor-chat-schedule'], async (req, res) => {
  try {
    const {
      message = '',
      practiceSlot = '19:00 - 20:00',
      testSlot = '09:00 - 12:00',
    } = req.body;

    const apiKey = getGeminiApiKey();
    if (!apiKey) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY is not configured. Please add GEMINI_API_KEY in your Vercel Project Settings > Environment Variables.',
      });
    }

    if (!message.trim()) {
      return res.status(400).json({ error: 'Message cannot be empty' });
    }

    const systemInstruction = `You are the Master JEE Academic Director & Personal Coach at Allen Career Institute Kota and MathonGo.
You help JEE Main & Advanced aspirants manage their huge module workloads, arrange timed CBT practice sprints, and organize live test series roadmaps.
Speak with the warmth, discipline, and strategic clarity of an elite Kota mentor.
When the user asks you to schedule, arrange, or plan module practice sessions and tests:
1. Provide an encouraging, tactical response explaining the reasoning (e.g. why solving 25 questions under a 50-minute timer prevents negative marking and builds exam speed).
2. You MUST also generate a structured list of actionable items (routine items) in the "proposedRoutine" field whenever the student is discussing scheduling or planning their work!
Each proposed routine item should alternate module practice sprints on weekdays and real CBT tests on weekends.`;

    const promptText = `Student message: "${message}". Practice time slot: "${practiceSlot}". Test time slot: "${testSlot}".
Respond thoughtfully as their JEE Academic Director. If this involves scheduling or planning modules/tests, provide the structured "proposedRoutine" items list so the student can apply it to their live checklist.`;

    const response = await generateContentWithFallback({
      contents: promptText,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            replyText: { type: Type.STRING },
            proposedRoutine: {
              type: Type.OBJECT,
              properties: {
                routineTitle: { type: Type.STRING },
                summary: { type: Type.STRING },
                items: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: { type: Type.STRING },
                      type: { type: Type.STRING, description: "'MODULE_PRACTICE' or 'REAL_TEST'" },
                      title: { type: Type.STRING },
                      chapterOrTopic: { type: Type.STRING },
                      subject: { type: Type.STRING, description: "'physics', 'chemistry', or 'mathematics'" },
                      scheduledDate: { type: Type.STRING },
                      scheduledSlot: { type: Type.STRING },
                      durationMinutes: { type: Type.INTEGER },
                      questionCount: { type: Type.INTEGER },
                      weekNumber: { type: Type.INTEGER },
                      dayName: { type: Type.STRING },
                    },
                    required: [
                      'id',
                      'type',
                      'title',
                      'chapterOrTopic',
                      'subject',
                      'scheduledDate',
                      'scheduledSlot',
                      'durationMinutes',
                      'questionCount',
                      'weekNumber',
                      'dayName',
                    ],
                  },
                },
              },
            },
          },
          required: ['replyText'],
        },
      },
    });

    const parsedData = cleanAndParseJSON(response.text);

    res.json({
      success: true,
      data: {
        ...parsedData,
        reply: parsedData.reply || parsedData.replyText,
        replyText: parsedData.replyText || parsedData.reply,
      },
    });
  } catch (error: any) {
    console.error('Error in AI Academic Mentor:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to consult AI Academic Mentor',
    });
  }
});

// 404 Handler for API endpoints
app.use('/api', (req, res) => {
  res.status(404).json({
    success: false,
    error: `API route not found: ${req.method} ${req.originalUrl || req.url}`,
  });
});

// Global error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('[API Error]', err);
  if (res.headersSent) {
    return next(err);
  }
  if (err.type === 'entity.too.large' || err.status === 413) {
    return res.status(413).json({
      success: false,
      error: 'Payload too large. On Vercel, requests are limited to 4.5MB. Please upload a smaller or compressed PDF.',
    });
  }
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error',
  });
});

export default app;
