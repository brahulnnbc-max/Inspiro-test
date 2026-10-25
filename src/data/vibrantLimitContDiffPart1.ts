import { Question } from '../types/exam';

export const LIMIT_CONT_DIFF_PART_1_QUESTIONS: Question[] = [
  {
    "id": "lcd-p1-q1",
    "questionNumber": 1,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$\\lim_{x \\to 1} \\frac{x^{2} - \\sqrt{x}}{\\sqrt{x} - 1}$",
    "correctAnswer": "3",
    "explanationLatex": "**[Limits • PT-1 Q.1]** Rationalize and factorise the expression to evaluate the limit: $\\lim_{x \\to 1} \\frac{(x - \\sqrt{x})(x + \\sqrt{x}) + \\dots}{\\dots} = 3$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q2",
    "questionNumber": 2,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$\\lim_{x \\to 1} \\frac{x^{2} - x \\ln x + \\ln x - 1}{x - 1}$",
    "correctAnswer": "2",
    "explanationLatex": "**[Limits • PT-1 Q.2]** Group terms and apply standard limits or L'Hôpital's rule to obtain $2$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q3",
    "questionNumber": 3,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$\\lim_{x \\to 1} \\frac{\\sqrt[13]{x} - \\sqrt{x}}{\\sqrt[5]{x} - \\sqrt[3]{x}}$",
    "correctAnswer": "4591",
    "explanationLatex": "**[Limits • PT-1 Q.3]** Use the standard limit formula $\\lim_{x \\to 1} \\frac{x^p - 1}{x^q - 1} = \\frac{p}{q}$ after rewriting with $x-1$ in numerator and denominator.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q4",
    "questionNumber": 4,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$\\lim_{x \\to 0} [\\ln (1 + \\sin^{2}x) \\cdot \\cot(\\ln^{2} (1 + x))]$",
    "correctAnswer": "1",
    "explanationLatex": "**[Limits • PT-1 Q.4]** Substitute approximations $\\sin x \\approx x$ and $\\ln(1+x) \\approx x$ for small $x$ to get 1.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q5",
    "questionNumber": 5,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "(a) $\\lim_{x \\to 0} \\tan^{-1} \\frac{a}{x^{2}}$, where $a \\in \\mathbb{R}$ ; (b) Plot the graph of the function $f(x) = \\lim_{t \\to 0} \\left(\\frac{2x}{\\pi} \\tan^{-1} \\frac{x}{t^{2}}\\right)$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{\\pi}{2}$ if $a > 0$; $0$ if $a = 0$ and $-\\frac{\\pi}{2}$ if $a < 0$, $f(x) = |x|$"
      },
      {
        "id": "B",
        "labelLatex": "$0$ for all $a$, $f(x) = x$"
      },
      {
        "id": "C",
        "labelLatex": "$\\pi$ if $a > 0$; $0$ otherwise, $f(x) = -|x|$"
      },
      {
        "id": "D",
        "labelLatex": "Does not exist"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • PT-1 Q.5]** Analyze the inner argument's behavior as $x \\to 0$ and $t \\to 0$ respectively.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q6",
    "questionNumber": 6,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$\\lim_{x \\to 1} \\frac{\\left[\\sum_{k=1}^{100} x^{k}\\right] - 100}{x - 1}$",
    "correctAnswer": "5050",
    "explanationLatex": "**[Limits • PT-1 Q.6]** Use the definition of derivative of $f(x) = \\sum_{k=1}^{100} x^k$ at $x=1$, which equals $\\sum_{k=1}^{100} k = 5050$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q7",
    "questionNumber": 7,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$\\lim_{x \\to \\infty} \\frac{2\\sqrt{x} + 3x^{1/3} + 5x^{1/5}}{\\sqrt{3x - 2} + (2x - 3)^{1/3}}$",
    "correctAnswer": "23",
    "explanationLatex": "**[Limits • PT-1 Q.7]** Divide numerator and denominator by highest power of $x$ (i.e. $\\sqrt{x}$) to find the limiting ratio.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q8",
    "questionNumber": 8,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$\\lim_{x \\to 0} \\frac{\\sec 4x - \\sec 2x}{\\sec 3x - \\sec x}$",
    "correctAnswer": "32",
    "explanationLatex": "**[Limits • PT-1 Q.8]** Express secants in terms of cosines and use series expansion or L'Hôpital's rule.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q9",
    "questionNumber": 9,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$\\lim_{x \\to 0} \\frac{8}{x^{8}} \\left[1 - \\cos \\frac{x^{2}}{2} - \\cos \\frac{x^{2}}{4} + \\cos \\frac{x^{2}}{2} \\cos \\frac{x^{2}}{4}\\right]$",
    "correctAnswer": "132",
    "explanationLatex": "**[Limits • PT-1 Q.9]** Factor the expression as $\\left(1 - \\cos\\frac{x^2}{2}\\right)\\left(1 - \\cos\\frac{x^2}{4}\\right)$ and use $\\lim_{x\\to 0} \\frac{1-\\cos t}{t^2} = \\frac{1}{2}$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q10",
    "questionNumber": 10,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$\\lim_{\\theta \\to \\frac{\\pi}{4}} \\frac{\\sqrt{2} - \\cos \\theta - \\sin \\theta}{(4\\theta - \\pi)^{2}}$",
    "correctAnswer": "1162",
    "explanationLatex": "**[Limits • PT-1 Q.10]** Substitute $\\theta = \\frac{\\pi}{4} + h$ and use trigonometric expansions for small $h$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q11",
    "questionNumber": 11,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $l = \\lim_{n \\to \\infty} \\sum_{r=2}^{n} \\left((r+1) \\sin \\frac{\\pi}{r+1} - r \\sin \\frac{\\pi}{r}\\right)$ then find \\{l\\}. (where \\{ \\} denotes the fractional part function)",
    "correctAnswer": "-3",
    "explanationLatex": "**[Limits • PT-2 Q.1]** The series is telescoping; sum simplifies to $\\lim_{n \\to \\infty} (n+1)\\sin\\frac{\\pi}{n+1} - 2\\sin\\frac{\\pi}{2} = \\pi - 2$. Its fractional part is $\\pi - 3$ since $\\pi \\approx 3.1415$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q12",
    "questionNumber": 12,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$\\lim_{x \\to -\\infty} \\frac{(3x^{4} + 2x^{2}) \\sin \\frac{1}{x} + |x|^{3} + 5}{|x|^{3} + |x|^{2} + |x| + 1}$",
    "correctAnswer": "-2",
    "explanationLatex": "**[Limits • PT-2 Q.2]** Divide by $|x|^3$ considering $x < 0$ so that $|x| = -x$ to evaluate the limit as $-2$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q13",
    "questionNumber": 13,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let $S_{n} = a_{1} + a_{2} + a_{3} + \\dots + a_{n}$ where $\\lim_{n \\to \\infty} a_{n} = 2$, then find the value of $\\lim_{n \\to \\infty} \\frac{S_{n+1} - S_{n}}{\\sum_{k=1}^{n} k}$",
    "correctAnswer": "0",
    "explanationLatex": "**[Limits • PT-2 Q.3]** Note that $S_{n+1} - S_n = a_{n+1} \\to 2$, while the denominator grows as $\\frac{n(n+1)}{2} \\to \\infty$, making the ratio 0.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q14",
    "questionNumber": 14,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Calculate $\\lim_{x \\to 0} \\left(1 + xe^{-\\frac{1}{x^{2}}} \\sin \\frac{1}{x^{4}}\\right)$",
    "correctAnswer": "1",
    "explanationLatex": "**[Limits • PT-2 Q.4]** Since $xe^{-1/x^2} \\to 0$ as $x \\to 0$ and $\\sin(1/x^4)$ is bounded, the second term vanishes, leaving $1+0 = 1$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q15",
    "questionNumber": 15,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$\\lim_{x \\to \\infty} \\left(\\frac{x+c}{x-c}\\right)^{x} = 4$ then find $c$",
    "correctAnswer": "2",
    "explanationLatex": "**[Limits • PT-2 Q.5]** Use the standard formula $\\lim_{x\\to\\infty} (1 + \\frac{2c}{x-c})^x = e^{\\frac{2c}{1}} = e^{2c} = 4 \\implies c = \\ln 2$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q16",
    "questionNumber": 16,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$\\lim_{n \\to \\infty} \\left[\\frac{2x^{2} + 3}{2x^{2} + 5}\\right]^{8x^{2} + 3}$",
    "correctAnswer": "-8",
    "explanationLatex": "**[Limits • PT-2 Q.6]** Use $1^\\infty$ form: $e^{\\lim \\left(\\frac{2x^2+3}{2x^2+5} - 1\\right)(8x^2+3)} = e^{\\lim \\frac{-2}{2x^2+5}(8x^2+3)} = e^{-8}$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q17",
    "questionNumber": 17,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$\\lim_{n \\to \\infty} (\\cos(\\ln(n-1) - \\ln(n+1)))^{(n+1)^{2}}$",
    "correctAnswer": "-2",
    "explanationLatex": "**[Limits • PT-2 Q.7]** Rewrite $\\cos(\\ln\\frac{n-1}{n+1}) = \\cos(\\ln(1 - \\frac{2}{n+1})) \\approx 1 - \\frac{2}{n^2}$, leading to $e^{-2}$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q18",
    "questionNumber": 18,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Evaluate $\\lim_{x \\to 1} \\frac{1 - x + \\ln x}{1 + \\cos \\pi x}$",
    "correctAnswer": "12",
    "explanationLatex": "**[Limits • PT-2 Q.8]** Apply L'Hôpital's rule twice to resolve the $0/0$ indeterminate form.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q19",
    "questionNumber": 19,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\lim_{y \\to 0} \\left[ \\text{Limit}_{x \\to \\infty} \\frac{\\exp\\left(x\\ln\\left(1+\\frac{ay}{x}\\right)\\right) - \\exp\\left(x\\ln\\left(1+\\frac{by}{x}\\right)\\right)}{y} \\right]$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a + b$"
      },
      {
        "id": "B",
        "labelLatex": "$a - b$"
      },
      {
        "id": "C",
        "labelLatex": "$ab$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{a}{b}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Limits • PT-2 Q.9]** Evaluate inner limit using $\\lim_{x\\to\\infty} x\\ln(1+\\frac{ky}{x}) = ky$, then differentiate w.r.t $y$ at $y=0$ to get $a-b$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q20",
    "questionNumber": 20,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$\\lim_{x \\to 1} \\frac{ax^{2} + bx + c}{(x - 1)^{2}} = 2$, then find the value of $\\lim_{x \\to 1} \\frac{(x - a)(x - b)(x - c)}{(x + 1)}$",
    "correctAnswer": "52",
    "explanationLatex": "**[Limits • PT-2 Q.10]** Since denominator has $(x-1)^2$ and limit is finite, numerator must be $2(x-1)^2$, allowing us to determine $a, b, c$ and compute the value.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q21",
    "questionNumber": 21,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$\\lim_{x \\to 1} \\left(\\frac{p}{1 - x^{p}} - \\frac{q}{1 - x^{q}}\\right), p, q \\in \\mathbb{N}$",
    "correctAnswer": "-2",
    "explanationLatex": "**[Limits • EX-I Q.1]** Combine fractions and apply L'Hôpital's rule or series expansion to get $\\frac{p-q}{2}$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q22",
    "questionNumber": 22,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $L = \\lim_{x \\to 1} \\frac{(1-x)(1-x^{2})(1-x^{3}) \\dots (1-x^{2n})}{[(1-x)(1-x^{2})(1-x^{3}) \\dots (1-x^{n})]^{2}}$ then show that L can be equal to (a) $\\prod_{r=1}^{n} \\frac{n+r}{r}$ (b) $\\frac{1}{n!} \\prod_{r=1}^{n} (4r - 2)$ (c) The sum of the coefficients of two middle terms in the expansion of $(1+x)^{2n-1}$. (d) The coefficient of $x^{n}$ in the expansion of $(1+x)^{2n}$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "All of these"
      },
      {
        "id": "B",
        "labelLatex": "Only (a) and (b)"
      },
      {
        "id": "C",
        "labelLatex": "Only (c) and (d)"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-I Q.2]** Simplifying the limit product yields $\\binom{2n}{n}$, which matches all the given algebraic expressions in options (a), (b), (c), and (d).",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q23",
    "questionNumber": 23,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$\\lim_{x \\to \\infty} (x - \\ln \\cosh x)$ where $\\cosh t = \\frac{e^{t} + e^{-t}}{2}$",
    "correctAnswer": "2",
    "explanationLatex": "**[Limits • EX-I Q.3]** Rewrite $\\ln \\cosh x = \\ln(\\frac{e^x+e^{-x}}{2}) = x - \\ln 2 + \\ln(1+e^{-2x})$, so the limit is $\\ln 2$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q24",
    "questionNumber": 24,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\lim_{x \\to \\frac{1}{\\sqrt{2}}} \\frac{\\cos^{-1} \\left(2x\\sqrt{1 - x^{2}}\\right)}{x - \\frac{1}{\\sqrt{2}}}$, find whether limit exists and its value if it does.",
    "options": [
      {
        "id": "A",
        "labelLatex": "does not exist"
      },
      {
        "id": "B",
        "labelLatex": "0"
      },
      {
        "id": "C",
        "labelLatex": "$\\sqrt{2}$"
      },
      {
        "id": "D",
        "labelLatex": "$-\\sqrt{2}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-I Q.4]** Left-hand and right-hand limits differ because $\\cos^{-1}(2x\\sqrt{1-x^2}) = 2\\cos^{-1}x$ or $2\\sin^{-1}x$ depending on the domain interval near $1/\\sqrt{2}$, making the limit non-existent.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q25",
    "questionNumber": 25,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$\\lim_{x \\to \\frac{\\pi}{2}} \\frac{2^{-\\cos x} - 1}{x \\left(x - \\frac{\\pi}{2}\\right)}$",
    "correctAnswer": "22",
    "explanationLatex": "**[Limits • EX-I Q.5]** Substitute $x - \\frac{\\pi}{2} = t$ and use standard limits to evaluate the result as $\\frac{2\\ln 2}{\\pi}$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q26",
    "questionNumber": 26,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $\\lim_{x \\to 0} \\frac{a \\sin x - \\sin 2x}{\\tan^{3} x}$ is finite then find the value of 'a' & the limit.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a = 2$; limit $= 1$"
      },
      {
        "id": "B",
        "labelLatex": "$a = 1$; limit $= 2$"
      },
      {
        "id": "C",
        "labelLatex": "$a = 0$; limit $= -1$"
      },
      {
        "id": "D",
        "labelLatex": "$a = -2$; limit $= 0$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-I Q.6]** Using series expansions, $\\sin x - \\frac{1}{3}x^3 - (2x - \\frac{8}{3}x^3)/\\dots$ requires coefficients of $x$ and $x^3$ terms to be balanced to avoid division by zero, yielding $a=2$ and limit $=1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q27",
    "questionNumber": 27,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $f_{1}(x) = \\frac{x}{2} + 10$ $\\forall x \\in \\mathbb{R}$ and $f_{n}(x) = f_{1}(f_{n-1}(x))$, $\\forall n \\ge 2, n \\in \\mathbb{N}$, then evaluate $\\lim_{n \\to \\infty} f_{n}(x)$",
    "correctAnswer": "20",
    "explanationLatex": "**[Limits • EX-I Q.7]** This is a contractive linear iterative sequence $f_n(x) = \\frac{x}{2^n} + 10(1 + \\frac{1}{2} + \\dots + \\frac{1}{2^{n-1}})$, whose limit as $n \\to \\infty$ is $10 \\times 2 = 20$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q28",
    "questionNumber": 28,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let $f(x) = \\begin{cases} \\frac{x}{\\sin x}, & x > 0 \\\\ 2 - x, & x \\le 0 \\end{cases}$ and $g(x) = \\begin{cases} x + 3, & x < 1 \\\\ x^{2} - 2x - 2, & 1 \\le x < 2 \\\\ x - 5, & x \\ge 2 \\end{cases}$, find LHL and RHL of $g(f(x))$ at $x = 0$ and hence find $\\lim_{x \\to 0} g(f(x))$.",
    "correctAnswer": "NaN",
    "explanationLatex": "**[Limits • EX-I Q.8]** As $x \\to 0^-$ and $x \\to 0^+$, $f(x) \\to 2$, and $g(f(x)) \\to g(2) = -3$ in both cases, so LHL = RHL = -3.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q29",
    "questionNumber": 29,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $P_{n} = a^{P_{n-1}} - 1, \\forall n = 2, 3, \\dots$ and Let $P_{1} = a^{x} - 1$ where $a \\in \\mathbb{R}^{+}$ then evaluate $\\lim_{x \\to 0} \\frac{P_{n}}{x}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$n \\ln a$"
      },
      {
        "id": "B",
        "labelLatex": "$\\ln(a^n)$"
      },
      {
        "id": "C",
        "labelLatex": "$(\\ln a)^n$"
      },
      {
        "id": "D",
        "labelLatex": "$a^n \\ln a$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Limits • EX-I Q.9]** By induction and successive application of the definition, the limit results in $(\\ln a)^n$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q30",
    "questionNumber": 30,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Determine $\\lim_{n \\to \\infty} \\sum_{k=1}^{n} \\left(\\sin \\left(\\frac{\\pi/2}{k}\\right) - \\cos \\left(\\frac{\\pi/2}{k}\\right) - \\sin \\left(\\frac{\\pi/2}{k+2}\\right) + \\cos \\left(\\frac{\\pi/2}{k+2}\\right)\\right)$",
    "correctAnswer": "3",
    "explanationLatex": "**[Limits • EX-I Q.10]** Telescoping series sums to terms involving values at $k=1, 2$ and as $k \\to \\infty$, yielding 3.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q31",
    "questionNumber": 31,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\lim_{x \\to \\infty} \\left(\\frac{a_{1}^{\\frac{1}{x}} + a_{2}^{\\frac{1}{x}} + a_{3}^{\\frac{1}{x}} + \\dots + a_{n}^{\\frac{1}{x}}}{n}\\right)^{nx}$ where $a_{1}, a_{2}, a_{3}, \\dots, a_{n} > 0$",
    "options": [
      {
        "id": "A",
        "labelLatex": "(a_1 a_2 a_3 \\dots a_n)"
      },
      {
        "id": "B",
        "labelLatex": "(a_1 + a_2 + \\dots + a_n)^n"
      },
      {
        "id": "C",
        "labelLatex": "\\sqrt[n]{a_1 a_2 \\dots a_n}"
      },
      {
        "id": "D",
        "labelLatex": "1"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-I Q.11]** Using the definition of derivative or L'Hôpital's rule on $\\frac{a^t-1}{t} \\to \\ln a$, the expression evaluates to $a_1 a_2 \\dots a_n$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q32",
    "questionNumber": 32,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let $L = \\prod_{n=3}^{\\infty} \\left(1 - \\frac{4}{n^{2}}\\right)$ ; $M = \\prod_{n=2}^{\\infty} \\left(\\frac{n^{3}-1}{n^{3}+1}\\right)$ and $N = \\prod_{n=1}^{\\infty} \\left(\\frac{(1+n^{-1})^{2}}{1+2n^{-1}}\\right)$, then find the value of $L^{-1} + M^{-1} + N^{-1}$",
    "correctAnswer": "8",
    "explanationLatex": "**[Limits • EX-I Q.12]** Evaluate infinite products $L, M, N$ explicitly using telescoping methods to find their inverses and sum to 8.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q33",
    "questionNumber": 33,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $f(n, \\theta) = \\prod_{r=1}^{n} \\left(1 - \\tan^{2} \\frac{\\theta}{2^{r}}\\right)$, then compute $\\lim_{n \\to \\infty} f(n, \\theta)$",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\frac{\\theta}{\\tan \\theta}"
      },
      {
        "id": "B",
        "labelLatex": "\\tan \\theta"
      },
      {
        "id": "C",
        "labelLatex": "\\frac{\\tan \\theta}{\\theta}"
      },
      {
        "id": "D",
        "labelLatex": "1"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-I Q.13]** Using $\\tan x = \\frac{1}{\\tan x} - 2\\cot(2x)$ trigonometric product identities, the limit simplifies to $\\frac{\\theta}{\\tan \\theta}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q34",
    "questionNumber": 34,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Using Sandwich theorem, evaluate (a) $\\lim_{n \\to \\infty} \\left(\\frac{1}{\\sqrt{n^{2}}} + \\frac{1}{\\sqrt{n^{2}+1}} + \\frac{1}{\\sqrt{n^{2}+2}} + \\dots + \\frac{1}{\\sqrt{n^{2}+2n}}\\right)$ (b) $\\lim_{n \\to \\infty} \\left(\\frac{1}{1+n^{2}} + \\frac{2}{2+n^{2}} + \\dots + \\frac{n}{n+n^{2}}\\right)$ (c) $\\lim_{n \\to \\infty} \\left(\\sqrt{2} - 2^{1/3}\\right)\\left(\\sqrt{2} - 2^{1/5}\\right) \\dots \\left(\\sqrt{2} - 2^{1/(2n+1)}\\right)$ (d) $\\lim_{n \\to \\infty} \\sum_{k=0}^{n} \\frac{1}{{}^{n}C_{k}}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "2 (b) 1/2 (c) 0 (d) 2"
      },
      {
        "id": "B",
        "labelLatex": "1 (b) 1/3 (c) 1 (d) 1"
      },
      {
        "id": "C",
        "labelLatex": "0 (b) 1 (c) 2 (d) 0"
      },
      {
        "id": "D",
        "labelLatex": "\\infty (b) \\infty (c) \\infty (d) \\infty"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-I Q.14]** Apply the Sandwich (Squeeze) theorem to each subpart to get (a) 2, (b) 1/2, (c) 0, (d) 2.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q35",
    "questionNumber": 35,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $L = \\lim_{x \\to 0} \\left(\\frac{1}{\\ln(1+x)} - \\frac{1}{\\ln(x+\\sqrt{1+x^{2}})}\\right)$ then find the value of $\\frac{L + 153}{L}$",
    "correctAnswer": "307",
    "explanationLatex": "**[Limits • EX-I Q.15]** Expand $\\ln(x+\\sqrt{1+x^2}) = x - \\frac{x^3}{6} + \\dots$ and $\\ln(1+x) = x - \\frac{x^2}{2} + \\dots$ to find $L = 1/2$, then compute $\\frac{1/2 + 153}{1/2} = 307$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p1-q36",
    "questionNumber": 36,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\displaystyle \\operatorname{Lim}_{x \\to 1} \\frac{(\\ln(1+x) - \\ln 2)(3.4^{x-1} - 3x)}{[(7+x)^{\\frac{1}{3}} - (1+3x)^{\\frac{1}{2}}] \\cdot \\sin(x-1)}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{9}{4} \\ln \\frac{4}{e}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{9}{4} \\ln \\frac{e}{4}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{4}{9} \\ln \\frac{4}{e}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{9}{2} \\ln \\frac{4}{e}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-II Q.1]** Using standard expansions and L'Hopital or substitution $x-1=t$, we get the value $\\frac{9}{4} \\ln \\frac{4}{e}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q37",
    "questionNumber": 37,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\displaystyle \\operatorname{Lim}_{x \\to 2} \\frac{(\\cos \\alpha)^x + (\\sin \\alpha)^x - 1}{x - 2}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\cos^2 \\alpha \\ln \\cos \\alpha + \\sin^2 \\alpha \\ln \\sin \\alpha$"
      },
      {
        "id": "B",
        "labelLatex": "$\\cos \\alpha \\ln \\cos \\alpha + \\sin \\alpha \\ln \\sin \\alpha$"
      },
      {
        "id": "C",
        "labelLatex": "$\\cos^2 \\alpha \\ln \\sin \\alpha + \\sin^2 \\alpha \\ln \\cos \\alpha$"
      },
      {
        "id": "D",
        "labelLatex": "0"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-II Q.2(i)]** Applying the definition of derivative at $x=2$ for $f(x) = (\\cos \\alpha)^x + (\\sin \\alpha)^x$, we obtain $\\cos^2 \\alpha \\ln \\cos \\alpha + \\sin^2 \\alpha \\ln \\sin \\alpha$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q38",
    "questionNumber": 38,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\displaystyle \\operatorname{Lim}_{x \\to 4} \\frac{(\\cos \\alpha)^x - (\\sin \\alpha)^x - \\cos 2\\alpha}{x - 4}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\cos^2 \\alpha \\ln \\cos \\alpha - \\sin^2 \\alpha \\ln \\sin \\alpha$"
      },
      {
        "id": "B",
        "labelLatex": "$\\cos^4 \\alpha \\ln \\cos \\alpha - \\sin^4 \\alpha \\ln \\sin \\alpha$"
      },
      {
        "id": "C",
        "labelLatex": "$\\cos \\alpha \\ln \\cos \\alpha - \\sin \\alpha \\ln \\sin \\alpha$"
      },
      {
        "id": "D",
        "labelLatex": "1"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Limits • EX-II Q.2(ii)]** Using the derivative definition at $x=4$, we get $\\cos^4 \\alpha \\ln \\cos \\alpha - \\sin^4 \\alpha \\ln \\sin \\alpha$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q39",
    "questionNumber": 39,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the $\\displaystyle \\operatorname{Lim}_{x \\to 0} \\frac{1}{x^3} \\left( \\frac{1}{\\sqrt{1+x}} - \\frac{1+ax}{1+bx} \\right)$ exists and has the value equal to $l$, then find the value of $\\frac{1}{a} - \\frac{2}{l} + \\frac{3}{b}$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "72"
      },
      {
        "id": "B",
        "labelLatex": "36"
      },
      {
        "id": "C",
        "labelLatex": "18"
      },
      {
        "id": "D",
        "labelLatex": "144"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-II Q.3]** Expanding using binomial theorem, we find the constants $a$ and $b$ and the limit $l$, then compute the expression to be 72.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q40",
    "questionNumber": 40,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find $a$ & $b$ if: (i) $\\displaystyle \\operatorname{Lim}_{x \\to \\infty} \\left[ \\frac{x^2+1}{x+1} - ax - b \\right] = 0$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a = 1, b = -1$"
      },
      {
        "id": "B",
        "labelLatex": "$a = -1, b = 1$"
      },
      {
        "id": "C",
        "labelLatex": "$a = 1, b = 1$"
      },
      {
        "id": "D",
        "labelLatex": "$a = 2, b = -1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-II Q.4(i)]** Dividing and equating coefficients of powers of $x$ to zero yields $a=1, b=-1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q41",
    "questionNumber": 41,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find $a$ & $b$ if: (ii) $\\displaystyle \\operatorname{Lim}_{x \\to \\infty} \\left[ \\sqrt{x^2-x+1} - ax - b \\right] = 0$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a = -1, b = \\frac{1}{2}$"
      },
      {
        "id": "B",
        "labelLatex": "$a = 1, b = -\\frac{1}{2}$"
      },
      {
        "id": "C",
        "labelLatex": "$a = 1, b = \\frac{1}{2}$"
      },
      {
        "id": "D",
        "labelLatex": "$a = -1, b = -\\frac{1}{2}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-II Q.4(ii)]** Rationalizing and matching coefficients gives $a=-1, b=1/2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q42",
    "questionNumber": 42,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\displaystyle \\operatorname{Lim}_{n \\to \\infty} \\left( \\frac{\\sqrt{n^2+n-1}}{n} \\right)^{2\\sqrt{n^2+n-1}}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$e^{-1}$"
      },
      {
        "id": "B",
        "labelLatex": "$e$"
      },
      {
        "id": "C",
        "labelLatex": "$e^2$"
      },
      {
        "id": "D",
        "labelLatex": "$1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-II Q.5]** Using the standard form $\\lim (1+f(x))^{g(x)} = e^{\\lim f(x)g(x)}$, we evaluate the limit to be $e^{-1}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q43",
    "questionNumber": 43,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\displaystyle \\operatorname{Lim}_{x \\to \\infty} \\left[ \\cos \\left( 2\\pi \\left( \\frac{x}{1+x} \\right)^a \\right) \\right]^{x^2}, \\quad a \\in \\mathbb{R}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$e^{-2\\pi^2 a^2}$"
      },
      {
        "id": "B",
        "labelLatex": "$e^{2\\pi^2 a^2}$"
      },
      {
        "id": "C",
        "labelLatex": "$e^{-\\pi^2 a^2}$"
      },
      {
        "id": "D",
        "labelLatex": "$1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-II Q.6]** Using $1-\\cos \\theta \\approx \\frac{\\theta^2}{2}$, we simplify the expression to $e^{-2\\pi^2 a^2}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q44",
    "questionNumber": 44,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x) = \\frac{\\sin^{-1}(1-\\{x\\}) \\cdot \\cos^{-1}(1-\\{x\\})}{\\sqrt{2\\{x\\} \\cdot (1-\\{x\\})}}$ then find $\\displaystyle \\operatorname{Lim}_{x \\to 0^+} f(x)$ and $\\displaystyle \\operatorname{Lim}_{x \\to 0^-} f(x)$, where $\\{x\\}$ denotes the fractional part function.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{\\pi}{2}, \\frac{\\pi}{2\\sqrt{2}}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{\\pi}{2\\sqrt{2}}, \\frac{\\pi}{2}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{\\pi}{4}, \\frac{\\pi}{2}$"
      },
      {
        "id": "D",
        "labelLatex": "0, 1"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-II Q.7]** Evaluating right-hand and left-hand limits using fractional part definitions at integer points yields $\\frac{\\pi}{2}$ and $\\frac{\\pi}{2\\sqrt{2}}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q45",
    "questionNumber": 45,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the values of $a$, $b$ & $c$ so that $\\displaystyle \\operatorname{Lim}_{x \\to 0} \\frac{ae^x - b\\cos x + ce^{-x}}{x \\sin x} = 2$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a = c = 1, b = 2$"
      },
      {
        "id": "B",
        "labelLatex": "$a = 2, b = 1, c = 1$"
      },
      {
        "id": "C",
        "labelLatex": "$a = 1, b = 1, c = 2$"
      },
      {
        "id": "D",
        "labelLatex": "$a = c = 2, b = 1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-II Q.8]** Expanding exponential and trigonometric terms via series expansion and equating coefficients gives $a=c=1, b=2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q46",
    "questionNumber": 46,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $\\displaystyle \\operatorname{Lim}_{x \\to 1} \\left( 1 + ax + bx^2 \\right)^{\\frac{a}{x-1}} = e^{-3}$, find the values of ordered pair $(a, b)$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$(\\sqrt{3}, -\\sqrt{3}), (-\\sqrt{3}, \\sqrt{3})$"
      },
      {
        "id": "B",
        "labelLatex": "$(1, -1), (-1, 1)$"
      },
      {
        "id": "C",
        "labelLatex": "$(2, -2), (-2, 2)$"
      },
      {
        "id": "D",
        "labelLatex": "(0, 0)"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-II Q.10]** Applying the standard formula for $1^\\infty$ limit form yields $(\\sqrt{3}, -\\sqrt{3})$ and $(-\\sqrt{3}, \\sqrt{3})$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q47",
    "questionNumber": 47,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\displaystyle \\operatorname{Lim}_{n \\to \\infty} \\frac{[1.x] + [2.x] + [3.x] + \\dots + [n.x]}{n^2}$, Where $[.]$ denotes the greatest integer function.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$x/2$"
      },
      {
        "id": "B",
        "labelLatex": "$x$"
      },
      {
        "id": "C",
        "labelLatex": "$2x$"
      },
      {
        "id": "D",
        "labelLatex": "$0$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-II Q.11]** Using the property $t-1 < [t] ≤ t$, we apply the sandwich theorem to find the limit as $x/2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q48",
    "questionNumber": 48,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x) = \\displaystyle \\operatorname{Lim}_{n \\to \\infty} \\sum_{n=1}^{n} 3^{n-1} \\sin^3 \\frac{x}{3^n}$ and $g(x) = x - 4f(x)$. Evaluate $\\displaystyle \\operatorname{Lim}_{x \\to 0} (1+g(x))^{\\cot x}$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$g(x) = \\sin x \\text{ and limit } = e$"
      },
      {
        "id": "B",
        "labelLatex": "$g(x) = \\cos x \\text{ and limit } = 1$"
      },
      {
        "id": "C",
        "labelLatex": "$g(x) = \\sin x \\text{ and limit } = 1$"
      },
      {
        "id": "D",
        "labelLatex": "$g(x) = \\tan x \\text{ and limit } = e$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-II Q.12]** Summing the series using trigonometric identities gives $f(x)$ and $g(x)=\\sin x$, leading to limit $e$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q49",
    "questionNumber": 49,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$L = \\displaystyle \\operatorname{Lim}_{x \\to 0} \\frac{\\sqrt{\\cos 2x + (1+3x)^{1/3}} - \\sqrt[3]{4\\cos^3 x - \\ln(1+x)^4}}{x}$. If $L = a/b$ where 'a' and 'b' are relatively primes find $(a+b)$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "19"
      },
      {
        "id": "B",
        "labelLatex": "23"
      },
      {
        "id": "C",
        "labelLatex": "11"
      },
      {
        "id": "D",
        "labelLatex": "17"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-II Q.13]** Rationalizing and using standard limits gives $L=19$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p1-q50",
    "questionNumber": 50,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\displaystyle \\operatorname{Lim}_{x \\to \\infty} \\left( \\frac{\\cosh(\\pi/x)}{\\cos(\\pi/x)} \\right)^{x^2}$ where $\\cosh t = \\frac{e^t + e^{-t}}{2}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$e^{\\pi^2}$"
      },
      {
        "id": "B",
        "labelLatex": "$e^{\\pi^2 / 2}$"
      },
      {
        "id": "C",
        "labelLatex": "$e^{2\\pi^2}$"
      },
      {
        "id": "D",
        "labelLatex": "1"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-II Q.14]** Rewriting using series expansions for $\\cosh$ and $\\cos$, we evaluate the limit to be $e^{\\pi^2}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  }
];
