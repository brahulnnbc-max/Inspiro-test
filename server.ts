import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// High limit for handling multi-page PDF base64 payloads
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Parse question paper PDF (with optional Solution / Answer Key PDF)
app.post('/api/parse-exam-pdf', async (req, res) => {
  try {
    const {
      fileBase64,
      solutionFileBase64,
      mimeType = 'application/pdf',
      examTitle = 'JEE CBT Mock Test',
      pattern = 'JEE_MAIN',
    } = req.body;

    if (!fileBase64) {
      return res.status(400).json({ error: 'No question paper file provided' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server' });
    }

    const cleanBase64 = fileBase64.replace(/^data:[^;]+;base64,/, '');

    const systemInstruction = `You are an expert JEE (Joint Entrance Examination) Question Paper extractor and LaTeX formatter for Computer-Based Test (CBT) engines like NTA and MathonGo / Quizrr.
Analyze the provided document(s) carefully.
Extract every single question with utmost fidelity:
1. Identify the subject/section: "physics", "chemistry", or "mathematics".
2. Determine Question Type:
   - "SINGLE_CORRECT": Standard MCQ with 4 options (A, B, C, D), single choice. Positive: +4, Negative: -1.
   - "MULTIPLE_CORRECT": One or more options can be correct (JEE Advanced). Positive: +4, Negative: -2 (or partial).
   - "NUMERICAL": Non-MCQ question expecting an integer or decimal number (e.g. 5, 12.5). Positive: +4, Negative: 0 or -1.
   - "MATRIX_MATCH": Match lists (List I vs List II).
3. Question Prompt: Preserve all mathematical formulas, symbols, fractions, vectors, chemical formulas, sub/superscripts in valid standard LaTeX enclosed in $...$ for inline or $$...$$ for block. If there is a diagram/figure mentioned in the question, include a clear textual description of the diagram in parentheses, e.g. [Diagram: A circuit with resistor R1 in parallel with R2 connected to 12V battery].
4. Options: For MCQs, extract all options with LaTeX.
5. Correct Answer & Solution: If an answer key or solution is printed in the paper or in the attached solution document, pair it with the corresponding question!
6. Number questions sequentially within each section (e.g., Q1 to Q25 or Q30 for Physics, etc.).
7. Set standard durations: 180 minutes (3 hours) for JEE Main/Advanced.`;

    const parts: any[] = [
      {
        inlineData: {
          mimeType: mimeType,
          data: cleanBase64,
        },
      },
    ];

    if (solutionFileBase64) {
      const cleanSolBase64 = solutionFileBase64.replace(/^data:[^;]+;base64,/, '');
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

    const promptText = `Extract the full question paper into a complete structured CBT Exam paper for ${pattern}.
Exam title: "${examTitle}".
Include all questions across Physics, Chemistry, and Mathematics found in the paper. Make sure LaTeX notation ($...$) is correctly escaped.`;

    parts.push({ text: promptText });

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
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
                  id: { type: Type.STRING, description: "'physics', 'chemistry', or 'mathematics'" },
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

    const parsedJsonText = response.text?.trim() || '{}';
    const parsedData = JSON.parse(parsedJsonText);

    res.json({
      success: true,
      examPaper: parsedData,
    });
  } catch (error: any) {
    console.error('Error parsing exam PDF:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to process question paper with AI',
    });
  }
});

// Generate genuine JEE Main & Advanced PYQ-level Remedial Questions based on a student mistake
app.post('/api/generate-remedial-pyqs', async (req, res) => {
  try {
    const {
      promptLatex,
      sectionId = 'physics',
      pattern = 'JEE_MAIN',
      missedReason = 'Conceptual gap',
    } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server' });
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

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
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

    const parsedJsonText = response.text?.trim() || '{}';
    const parsedData = JSON.parse(parsedJsonText);

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
app.post('/api/generate-test-schedule', async (req, res) => {
  try {
    const {
      prompt = 'Create an Allen Leader 6-month test schedule with 8 periodic tests on Sundays',
      pattern = 'JEE_MAIN',
      numberOfTests = 8,
    } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server' });
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

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
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

    const parsedJsonText = response.text?.trim() || '{}';
    const parsedData = JSON.parse(parsedJsonText);

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
app.post('/api/generate-full-routine', async (req, res) => {
  try {
    const {
      commandPrompt = 'Create an Allen Leader daily module practice routine (Mon-Fri 7-8pm) and alternate Sunday real tests',
      targetExam = 'JEE_MAIN',
      practiceSlot = '19:00 - 20:00',
      testSlot = '09:00 - 12:00',
    } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server' });
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

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
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

    const parsedJsonText = response.text?.trim() || '{}';
    const parsedData = JSON.parse(parsedJsonText);

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
app.post('/api/ai-academic-mentor', async (req, res) => {
  try {
    const {
      message = '',
      history = [],
      practiceSlot = '19:00 - 20:00',
      testSlot = '09:00 - 12:00',
    } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server' });
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

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
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

    const parsedJsonText = response.text?.trim() || '{}';
    const parsedData = JSON.parse(parsedJsonText);

    res.json({
      success: true,
      data: parsedData,
    });
  } catch (error: any) {
    console.error('Error in AI Academic Mentor:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to consult AI Academic Mentor',
    });
  }
});

// Start Express server and mount Vite middleware
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (req, res) => {
        res.sendFile(path.resolve(distPath, 'index.html'));
      });
    }
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`JEE CBT Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
