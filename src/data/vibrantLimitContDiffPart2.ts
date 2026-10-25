import { Question } from '../types/exam';

export const LIMIT_CONT_DIFF_PART_2_QUESTIONS: Question[] = [
  {
    "id": "lcd-p2-q1",
    "questionNumber": 1,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "A circular arc of radius 1 subtends an angle of $x$ radians, $0 < x < \\frac{\\pi}{2}$ as shown in the figure. The point C is the intersection of the two tangent lines at A & B. Let $T(x)$ be the area of triangle ABC & let $S(x)$ be the area of the shaded region. Compute: (a) $T(x)$ (b) $S(x)$ & (c) the limit of $\\frac{T(x)}{S(x)}$ as $x \\to 0$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$T(x) = \\frac{1}{2}\\tan^2(x/2)\\sin x \\text{ or } \\tan(x/2)-\\sin x, S(x) = \\frac{1}{2}x - \\frac{1}{2}\\sin x, \\text{ limit} = \\frac{3}{2}$"
      },
      {
        "id": "B",
        "labelLatex": "limit = $1$"
      },
      {
        "id": "C",
        "labelLatex": "limit = $2$"
      },
      {
        "id": "D",
        "labelLatex": "limit = $3$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-II Q.16]** Computing triangle and sector areas geometrically yields the required ratio limit of $3/2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q2",
    "questionNumber": 2,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\displaystyle \\operatorname{Lim}_{x \\to \\frac{\\pi}{4}} \\frac{1 - \\tan x}{1 - \\sqrt{2} \\sin x}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "0"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{1}{2}$"
      },
      {
        "id": "C",
        "labelLatex": "1"
      },
      {
        "id": "D",
        "labelLatex": "2"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Limits • EX-III Q.1]** Rationalizing the denominator or using substitution $x = \\frac{\\pi}{4} + h$ yields 2.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q3",
    "questionNumber": 3,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the sum of an infinite geometric series whose first term is the limit of the function $f(x) = \\frac{\\tan x - \\sin x}{\\sin^3 x}$ as $x \\to 0$ and whose common ratio is the limit of the function $g(x) = \\frac{1-\\sqrt{x}}{(\\cos^{-1} x)^2}$ as $x \\to 1$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{2}{3}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{3}{2}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{3}{5}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{5}{3}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-III Q.2]** First term $a = \\frac{1}{2}$ and common ratio $r = \\frac{1}{4}$, so sum $S = \\frac{a}{1-r} = \\frac{2}{3}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q4",
    "questionNumber": 4,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\displaystyle \\operatorname{Lim}_{x \\to \\frac{\\pi}{4}} \\frac{\\sqrt{1} - \\sqrt{\\sin 2x}}{\\pi - 4x}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "0"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{\\pi}{4}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{4}{\\pi}$"
      },
      {
        "id": "D",
        "labelLatex": "does not exist"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Limits • EX-III Q.3]** The limit from left and right differ or yield indeterminate forms whose one-sided limits are inconsistent, so the limit does not exist.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q5",
    "questionNumber": 5,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\displaystyle \\operatorname{Lim}_{x \\to 0} \\frac{27^x - 9^x - 3^x + 1}{\\sqrt{2} - \\sqrt{1+\\cos x}}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$4\\sqrt{2}(\\ln 3)^2$"
      },
      {
        "id": "B",
        "labelLatex": "$8\\sqrt{2}(\\ln 3)^2$"
      },
      {
        "id": "C",
        "labelLatex": "$4\\sqrt{2}(\\ln 3)$"
      },
      {
        "id": "D",
        "labelLatex": "$8\\sqrt{2}(\\ln 3)$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Limits • EX-III Q.4]** Factoring numerator and rationalizing denominator gives $8\\sqrt{2}(\\ln 3)^2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q6",
    "questionNumber": 6,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\displaystyle \\operatorname{Lim}_{x \\to 0} \\left[ \\frac{(1+x)^{1/x}}{e} \\right]^{1/x}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$e$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{1}{e}$"
      },
      {
        "id": "C",
        "labelLatex": "$e^{-1/2}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\sqrt{e}$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Limits • EX-III Q.5]** Using expansion of $(1+x)^{1/x}$, we simplify the expression to $e^{-1/2}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q7",
    "questionNumber": 7,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\displaystyle \\operatorname{lim}_{x \\to 0} \\left[ \\frac{x^2}{\\sin x \\tan x} \\right]$, where $[.]$ denotes greatest integer function.",
    "options": [
      {
        "id": "A",
        "labelLatex": "0"
      },
      {
        "id": "B",
        "labelLatex": "-1"
      },
      {
        "id": "C",
        "labelLatex": "1"
      },
      {
        "id": "D",
        "labelLatex": "does not exist"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-III Q.6]** Since $\\frac{x^2}{\\sin x \\tan x} < 1$ near $x=0$, its greatest integer is 0.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q8",
    "questionNumber": 8,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\displaystyle \\operatorname{Lim}_{x \\to 1} \\left( \\tan \\frac{\\pi x}{4} \\right)^{\\tan \\frac{\\pi x}{2}}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$e$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{1}{e}$"
      },
      {
        "id": "C",
        "labelLatex": "$e^{-1/2}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\sqrt{e}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Limits • EX-III Q.7]** Evaluating $1^\\infty$ form limit using standard methods yields $1/e$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q9",
    "questionNumber": 9,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $x_0 = 2 \\cos \\frac{\\pi}{6}$ and $x_n = \\sqrt{2 + x_{n-1}}$, $n = 1, 2, 3, \\dots$, find $\\displaystyle \\operatorname{Lim}_{n \\to \\infty} 2^{(n+1)} \\cdot \\sqrt{2 - x_n}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{1}{2}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{1}{3}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{\\pi}{2}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{\\pi}{3}$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Limits • EX-III Q.8]** Expressing $x_n$ as $2 \\cos(\\frac{\\pi}{3 \\cdot 2^n})$, the limit evaluates to $\\frac{\\pi}{3}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q10",
    "questionNumber": 10,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\displaystyle \\operatorname{Lim}_{x \\to 0} \\frac{2(\\tan x - \\sin x) - x^3}{x^5}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$-\\frac{1}{2}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{2}{3}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{1}{4}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{5}{6}$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Limits • EX-III Q.9]** Using series expansions for $\\tan x$ and $\\sin x$ up to $x^5$ terms, the limit is $\\frac{1}{4}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q11",
    "questionNumber": 11,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Calculate $\\displaystyle \\lim_{x \\to 0} \\left( 1 + e^{-\\frac{1}{x^2}} \\arctan \\frac{1}{x^2} + xe^{-\\frac{1}{x^2}} \\sin \\frac{1}{x^4} \\right)^{e^{\\frac{1}{x^2}}}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$e$"
      },
      {
        "id": "B",
        "labelLatex": "$e^2$"
      },
      {
        "id": "C",
        "labelLatex": "$e^{\\pi/2}$"
      },
      {
        "id": "D",
        "labelLatex": "$e^{-\\pi/2}$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Limits • EX-III Q.10]** Using the limit definition of $e$ and bounded function properties, the limit evaluates to $e^{\\pi/2}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q12",
    "questionNumber": 12,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $f(x) = \\begin{cases} \\sin x, & x \\neq n\\pi, n \\in I \\\\ 2, & \\text{otherwise} \\end{cases}$ and $g(x) = \\begin{cases} x^2+1, & x \\neq 0 \\\\ 4, & x = 0 \\\\ 6, & x = 2 \\end{cases}$, then $\\displaystyle \\lim_{x \\to 0} g\\{f(x)\\}$ is:",
    "options": [
      {
        "id": "A",
        "labelLatex": "1"
      },
      {
        "id": "B",
        "labelLatex": "4"
      },
      {
        "id": "C",
        "labelLatex": "5"
      },
      {
        "id": "D",
        "labelLatex": "6"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-III Q.11]** As $x \\to 0$, $f(x) \\to 0$ through non-zero values where $f(x)=\\sin x \\to 0$, so $g(f(x)) \\to g(0) = 1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q13",
    "questionNumber": 13,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\displaystyle \\lim_{n \\to \\infty} \\left(1+\\frac{1}{5}\\right)\\left(1+\\frac{1}{5^2}\\right)\\left(1+\\frac{1}{5^4}\\right)\\dots\\left(1+\\frac{1}{5^{2^n}}\\right)$ is equal to:",
    "options": [
      {
        "id": "A",
        "labelLatex": "0"
      },
      {
        "id": "B",
        "labelLatex": "5/4"
      },
      {
        "id": "C",
        "labelLatex": "4/5"
      },
      {
        "id": "D",
        "labelLatex": "1/5"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Limits • EX-III Q.12]** Multiplying and dividing by $(1 - 1/5)$, we telescope the product to $\\frac{5}{4}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q14",
    "questionNumber": 14,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The value of the limit $\\displaystyle \\lim_{n \\to \\infty} n^2 \\left( a^{1/n} - a^{1/(n+1)} \\right)$ ($a > 0$) is:",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\ln a"
      },
      {
        "id": "B",
        "labelLatex": "e^a"
      },
      {
        "id": "C",
        "labelLatex": "e^{-a}"
      },
      {
        "id": "D",
        "labelLatex": "1"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-III Q.13]** Using differentiation or definition of derivative, the limit simplifies to $\\ln a$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q15",
    "questionNumber": 15,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\displaystyle \\lim_{n \\to \\infty} \\frac{1^6 + 2^6 + 3^6 + \\dots + n^6}{(1^2 + 2^2 + 3^2 + \\dots + n^2)(1^3 + 2^3 + 3^3 + \\dots + n^3)} =$",
    "options": [
      {
        "id": "A",
        "labelLatex": "2"
      },
      {
        "id": "B",
        "labelLatex": "\\frac{21}{8}"
      },
      {
        "id": "C",
        "labelLatex": "1"
      },
      {
        "id": "D",
        "labelLatex": "\\frac{12}{7}"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Limits • EX-III Q.14]** Using standard power sum formulas, the highest degree terms ratio gives $\\frac{12}{7}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q16",
    "questionNumber": 16,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $a, b, c$ are non zero constant numbers then $\\displaystyle \\lim_{r \\to \\infty} \\frac{\\cos \\frac{a}{r} - \\cos \\frac{b}{r} \\cos \\frac{c}{r}}{\\sin \\frac{b}{r} \\sin \\frac{c}{r}}$ equals:",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\frac{a^2 + b^2 - c^2}{2bc}"
      },
      {
        "id": "B",
        "labelLatex": "\\frac{c^2 + a^2 - b^2}{2bc}"
      },
      {
        "id": "C",
        "labelLatex": "\\frac{b^2 + c^2 - a^2}{2bc}"
      },
      {
        "id": "D",
        "labelLatex": "\\text{Independent of } a, b, c"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Limits • EX-III Q.15]** Using $\\cos \\theta \\approx 1 - \\theta^2/2$ and $\\sin \\theta \\approx \\theta$, we get $\\frac{b^2+c^2-a^2}{2bc}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q17",
    "questionNumber": 17,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $\\lim_{x\\to\\infty}\\left(1+\\frac{a}{x}+\\frac{b}{x^{2}}\\right)^{2x}=e^{2}$, then the values of $a$ and $b$ are",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a\\in\\mathbb{R},\\ b\\in\\mathbb{R}$"
      },
      {
        "id": "B",
        "labelLatex": "$a=1,\\ b\\in\\mathbb{R}$"
      },
      {
        "id": "C",
        "labelLatex": "$a\\in\\mathbb{R},\\ b=2$"
      },
      {
        "id": "D",
        "labelLatex": "$a=1,\\ b=2$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Limits • EX-IV Q.1]** Using the standard limit formula for $1^\\infty$ form, $\\lim_{x\\to\\infty} 2x\\left(\\frac{a}{x}+\\frac{b}{x^2}\\right) = 2a = 2 \\implies a=1$ and $b$ can be any real number.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q18",
    "questionNumber": 18,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $\\alpha$ and $\\beta$ be the distinct roots of $ax^{2}+bx+c=0$, then $\\lim_{x\\to\\alpha}\\frac{1-\\cos(ax^{2}+bx+c)}{(x-\\alpha)^{2}}$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{a^{2}}{2}(\\alpha-\\beta)^{2}$"
      },
      {
        "id": "B",
        "labelLatex": "$0$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{a}{2}(\\alpha-\\beta)^{2}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{1}{2}(\\alpha-\\beta)^{2}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-IV Q.2]** Since $ax^2+bx+c = a(x-\\alpha)(x-\\beta)$, using $\\lim_{t\\to 0}\\frac{1-\\cos t}{t^2}=\\frac{1}{2}$, we get $\\lim_{x\\to\\alpha}\\frac{1-\\cos(a(x-\\alpha)(x-\\beta))}{(x-\\alpha)^2} = \\frac{a^2(\\alpha-\\beta)^2}{2}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q19",
    "questionNumber": 19,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f:\\mathbb{R}\\to\\mathbb{R}$ be a positive, increasing function with $\\lim_{x\\to\\infty}\\frac{f(3x)}{f(x)}=1$. Then $\\lim_{x\\to\\infty}\\frac{f(2x)}{f(x)}$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "$3$"
      },
      {
        "id": "B",
        "labelLatex": "$1$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{2}{3}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{3}{2}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Limits • EX-IV Q.3]** Since $f$ is increasing, $f(x) \\le f(2x) \\le f(3x)$, so $1 \\le \\frac{f(2x)}{f(x)} \\le \\frac{f(3x)}{f(x)}$. By the squeeze theorem, the limit is $1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q20",
    "questionNumber": 20,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\lim_{x\\to 2}\\left(\\frac{\\sqrt{1-\\cos\\{2(x-2)\\}}}{x-2}\\right)$",
    "options": [
      {
        "id": "A",
        "labelLatex": "Equals $\\frac{1}{\\sqrt{2}}$"
      },
      {
        "id": "B",
        "labelLatex": "Does not exist"
      },
      {
        "id": "C",
        "labelLatex": "Equals $\\sqrt{2}$"
      },
      {
        "id": "D",
        "labelLatex": "Equals $-\\sqrt{2}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Limits • EX-IV Q.4]** Evaluating LHL and RHL as $x\\to 2^-$ and $x\\to 2^+$ yields $\\sqrt{2}$ and $-\\sqrt{2}$ respectively due to the square root of $1-\\cos$, hence the limit does not exist.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q21",
    "questionNumber": 21,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\lim_{x\\to 0}\\frac{\\sin(\\pi\\cos^{2}x)}{x^{2}}$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\pi$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{\\pi}{2}$"
      },
      {
        "id": "C",
        "labelLatex": "$1$"
      },
      {
        "id": "D",
        "labelLatex": "$-\\pi$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-IV Q.5]** Rewrite $\\sin(\\pi\\cos^2 x) = \\sin(\\pi(1-\\sin^2 x)) = \\sin(\\pi-\\pi\\sin^2 x) = \\sin(\\pi\\sin^2 x)$. Then the limit is $\\lim_{x\\to 0}\\frac{\\sin(\\pi\\sin^2 x)}{\\pi\\sin^2 x} \\cdot \\frac{\\pi\\sin^2 x}{x^2} = \\pi$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q22",
    "questionNumber": 22,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x)$ be a polynomial of degree four having extreme values at $x=1$ and $x=2$. If $\\lim_{x\\to 0}\\left[1+\\frac{f(x)}{x^{2}}\\right]=3$, then $f(2)$ is equal to:",
    "options": [
      {
        "id": "A",
        "labelLatex": "$4$"
      },
      {
        "id": "B",
        "labelLatex": "$-8$"
      },
      {
        "id": "C",
        "labelLatex": "$-4$"
      },
      {
        "id": "D",
        "labelLatex": "$0$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Limits • EX-IV Q.6]** Given limit implies $f(0)=0$ and $f'(0)=0$, and $f''(0)/2 = 3 \\implies f''(0)=6$. With extreme values at $1$ and $2$, $f'(x) = 4a x(x-1)(x-2)$. Integrating and using $f(2)=0$ yields $0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q23",
    "questionNumber": 23,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\lim_{x\\to 0}\\frac{(1-\\cos 2x)(3+\\cos x)}{x\\tan 4x}$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{1}{2}$"
      },
      {
        "id": "B",
        "labelLatex": "$4$"
      },
      {
        "id": "C",
        "labelLatex": "$3$"
      },
      {
        "id": "D",
        "labelLatex": "$2$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Limits • EX-IV Q.7]** Use standard limits: $\\lim_{x\\to 0}\\frac{1-\\cos 2x}{(2x)^2}\\cdot 4 \\cdot \\frac{4x}{\\tan 4x} \\cdot (3+\\cos x) = \\frac{1}{2} \\times 4 \\times 1 \\times 4 = 2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q24",
    "questionNumber": 24,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $p=\\lim_{x\\to 0^{+}}\\left(1+\\tan^{2}\\sqrt{x}\\right)^{\\frac{1}{2x}}$ then $\\log p$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2$"
      },
      {
        "id": "B",
        "labelLatex": "$1$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{1}{2}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{1}{4}$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Limits • EX-IV Q.8]** $p = e^{\\lim_{x\\to 0^+}\\frac{\\tan^2\\sqrt{x}}{2x}} = e^{\\frac{1}{2}}$, hence $\\log p = 1/2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q25",
    "questionNumber": 25,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\lim_{x\\to\\frac{\\pi}{2}}\\frac{\\cot x-\\cos x}{(\\pi-2x)^{3}}$ equals :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{1}{8}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{1}{4}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{1}{24}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{1}{16}$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Limits • EX-IV Q.9]** Substitute $x = \\pi/2 - h$ and expand using Taylor series to obtain $1/16$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q26",
    "questionNumber": 26,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "For each $t\\in\\mathbb{R}$, let $[t]$ be the greatest integer less than or equal to $t$. Then $\\lim_{x\\to 0}\\left(\\left[\\frac{1}{x}\\right]+\\left[\\frac{2}{x}\\right]+\\dots+\\left[\\frac{15}{x}\\right]\\right)$",
    "options": [
      {
        "id": "A",
        "labelLatex": "does not exist (in $\\mathbb{R}$)"
      },
      {
        "id": "B",
        "labelLatex": "is equal to $0$"
      },
      {
        "id": "C",
        "labelLatex": "is equal to $15$"
      },
      {
        "id": "D",
        "labelLatex": "is equal to $120$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Limits • EX-IV Q.10]** Using $t-1 < [t] \\le t$, we get $\\sum_{k=1}^{15}\\frac{k}{x} - 15 < \\sum \\left[\\frac{k}{x}\\right] \\le \\sum_{k=1}^{15}\\frac{k}{x}$. As $x\\to 0^+$, the limit evaluates to $120$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q27",
    "questionNumber": 27,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\lim_{x\\to 0}\\frac{x\\tan 2x-2x\\tan x}{(1-\\cos 2x)^{2}}$ is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2$"
      },
      {
        "id": "B",
        "labelLatex": "$-2$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{1}{2}$"
      },
      {
        "id": "D",
        "labelLatex": "$-\\frac{1}{2}$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Limits • EX-V Q.1]** Expand $\\tan x$ and $\\cos 2x$ in series near $x=0$ to find the limit is $1/2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q28",
    "questionNumber": 28,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "For $x\\in\\mathbb{R}$, $\\lim_{x\\to\\infty}\\left(\\frac{x-3}{x+2}\\right)^{x}=$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$e$"
      },
      {
        "id": "B",
        "labelLatex": "$e^{-1}$"
      },
      {
        "id": "C",
        "labelLatex": "$e^{-5}$"
      },
      {
        "id": "D",
        "labelLatex": "$e^{5}$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Limits • EX-V Q.2]** Evaluate $\\lim_{x\\to\\infty} x\\left(\\frac{x-3}{x+2}-1\\right) = \\lim_{x\\to\\infty} \\frac{-5x}{x+2} = -5$, giving $e^{-5}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q29",
    "questionNumber": 29,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Evaluate $\\lim_{x\\to 0}\\frac{a^{\\tan x}-a^{\\sin x}}{\\tan x-\\sin x}$, $a>0$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\ln a$"
      },
      {
        "id": "B",
        "labelLatex": "$a \\ln a$"
      },
      {
        "id": "C",
        "labelLatex": "$a^2 \\ln a$"
      },
      {
        "id": "D",
        "labelLatex": "$1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-V Q.3]** Factor $a^{\\sin x}$ and use standard limits to get $\\ln a$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q30",
    "questionNumber": 30,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The integer $n$ for which $\\lim_{x\\to 0}\\frac{(\\cos x-1)(\\cos x-e^{x})}{x^{n}}$ is a finite non-zero number is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1$"
      },
      {
        "id": "B",
        "labelLatex": "$2$"
      },
      {
        "id": "C",
        "labelLatex": "$3$"
      },
      {
        "id": "D",
        "labelLatex": "$4$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Limits • EX-V Q.4]** Since $\\cos x-1 \\sim -x^2/2$ and $\\cos x - e^x \\sim -x$, their product behaves as $x^3/2$, so $n=3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q31",
    "questionNumber": 31,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $\\lim_{x\\to 0}\\frac{\\sin(nx)[(a-n)n x-\\tan x]}{x^{2}}=0$ ($n>0$) then the value of '$a$' is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{1}{n}$"
      },
      {
        "id": "B",
        "labelLatex": "$n^{2}+1$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{n^{2}+1}{n}$"
      },
      {
        "id": "D",
        "labelLatex": "None"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Limits • EX-V Q.5]** Expanding $\\sin(nx)$ and $\\tan x$ and matching coefficients for the limit to be zero gives $a = \\frac{n^2+1}{n}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q32",
    "questionNumber": 32,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the value of $\\lim_{n\\to\\infty}\\left[\\frac{2}{\\pi}(n+1)\\cos^{-1}\\left(\\frac{1}{n}\\right)-n\\right]$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1-\\frac{2}{\\pi}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{2}{\\pi}$"
      },
      {
        "id": "C",
        "labelLatex": "$1$"
      },
      {
        "id": "D",
        "labelLatex": "$0$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Limits • EX-V Q.6]** Using series expansion for $\\cos^{-1}(1/n) = \\pi/2 - 1/n - \\dots$, the limit evaluates to $1 - 2/\\pi$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q33",
    "questionNumber": 33,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let $L=\\lim_{x\\to 0}\\frac{a-\\sqrt{a^{2}-x^{2}}-\\frac{x^{2}}{4}}{x^{4}}$, $a>0$. If $L$ is finite, then",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a=2$"
      },
      {
        "id": "B",
        "labelLatex": "$a=1$"
      },
      {
        "id": "C",
        "labelLatex": "$L=\\frac{1}{64}$"
      },
      {
        "id": "D",
        "labelLatex": "$L=\\frac{1}{32}$"
      }
    ],
    "correctAnswer": "A, C",
    "explanationLatex": "**[Limits • EX-V Q.7]** Binomial expansion of $\\sqrt{a^2-x^2}$ up to $x^4$ terms yields $a(1 - \\frac{x^2}{2a^2} - \\frac{x^4}{8a^4}) - \\frac{x^2}{4}$. Equating coefficient of $x^2$ to zero gives $a=2$, and then $L=1/64$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q34",
    "questionNumber": 34,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $\\lim_{x\\to 0}\\left[1+x\\ln(1+b^{2})\\right]^{1/x}=2b\\sin^{2}\\theta$, $b>0$ and $\\theta\\in(-\\pi,\\pi]$, then the value of $\\theta$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\pm\\frac{\\pi}{4}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\pm\\frac{\\pi}{3}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\pm\\frac{\\pi}{6}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\pm\\frac{\\pi}{2}$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Limits • EX-V Q.8]** The limit evaluates to $e^{\\ln(1+b^2)} = 1+b^2$. Thus $1+b^2 = 2b\\sin^2\\theta \\implies \\sin^2\\theta = \\frac{1+b^2}{2b} \\ge 1 \\implies \\sin^2\\theta=1 \\implies \\theta = \\pm\\pi/2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q35",
    "questionNumber": 35,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $\\alpha(a)$ and $\\beta(a)$ be the roots of the equation $\\sqrt[3]{1+a}-1)x^{2}+(\\sqrt{1+a}-1)x+(\\sqrt[6]{1+a}-1)=0$ where $a>-1$. Then $\\lim_{a\\to 0^{+}}\\alpha(a)$ and $\\lim_{a\\to 0^{+}}\\beta(a)$ are",
    "options": [
      {
        "id": "A",
        "labelLatex": "$-\\frac{5}{2}$ and $1$"
      },
      {
        "id": "B",
        "labelLatex": "$-\\frac{1}{2}$ and $-1$"
      },
      {
        "id": "C",
        "labelLatex": "$-\\frac{7}{2}$ and $2$"
      },
      {
        "id": "D",
        "labelLatex": "$-\\frac{9}{2}$ and $3$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Limits • EX-V Q.9]** Approximate coefficients using binomial expansions for small $a$: $a/3 x^2 + a/2 x + a/6 = 0 \\implies 2x^2 + 3x + 1 = 0$, giving roots $-1/2$ and $-1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q36",
    "questionNumber": 36,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $\\lim_{x\\to\\infty}\\left(\\frac{x^{2}+x+1}{x+1}-ax-b\\right)=4$, then",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a=1,\\ b=4$"
      },
      {
        "id": "B",
        "labelLatex": "$a=1,\\ b=-4$"
      },
      {
        "id": "C",
        "labelLatex": "$a=2,\\ b=-3$"
      },
      {
        "id": "D",
        "labelLatex": "$a=2,\\ b=3$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Limits • EX-V Q.10]** Rewrite $\\frac{x^2+x+1}{x+1} = x + \\frac{1}{x+1}$. Subtracting $ax+b$ gives $(1-a)x + (1-b)$ as $x\\to\\infty$, so $a=1$ and $1-b=4 \\implies b=-4$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q37",
    "questionNumber": 37,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "The largest value of the non-negative integer $a$ for which $\\lim_{x\\to 1}\\frac{\\left\\{-ax+\\sin(x-1)+a\\right\\}^{\\frac{1-x}{1-\\sqrt{x}}}}{x+\\sin(x-1)-1}=\\frac{1}{4}$ is",
    "correctAnswer": "0",
    "explanationLatex": "**[Limits • EX-V Q.11]** Evaluating the limit using series expansion around $x=1$ leads to $a=0$ as the largest non-negative integer satisfying the condition.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p2-q38",
    "questionNumber": 38,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let $m$ and $n$ be two positive integers greater than $1$. If $\\lim_{\\alpha\\to 0}\\frac{e^{\\cos(a^{n})}-e}{\\alpha^{m}}=\\left(-\\frac{e}{2}\\right)$ then the value of $\\frac{m}{n}$ is",
    "correctAnswer": "2",
    "explanationLatex": "**[Limits • EX-V Q.12]** Using series expansions, $e^{\\cos(\\alpha^n)}-e = e(e^{\\cos(\\alpha^n)-1}-1) \\approx e(-\\frac{\\alpha^{2n}}{2})$, matching with $\\alpha^m$ gives $m=2n \\implies m/n=2$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p2-q39",
    "questionNumber": 39,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let $\\alpha,\\beta\\in\\mathbb{R}$ be such that $\\lim_{x\\to 0}\\frac{x^{2}\\sin(\\beta x)}{\\alpha x-\\sin x}=1$. Then $6(\\alpha+\\beta)$ equals :",
    "correctAnswer": "7",
    "explanationLatex": "**[Limits • EX-V Q.13]** For the limit to exist and equal $1$, $\\alpha$ must be $1$, and using series expansions $\\beta=1/6$, leading to $6(1+1/6) = 7$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p2-q40",
    "questionNumber": 40,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let $f(x)=\\frac{1-x(1+|1-x|)}{|1-x|}\\cos\\left(\\frac{1}{1-x}\\right)$ for $x\\neq 1$. Then",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\lim_{x\\to 1^{-}}f(x)$ does not exist"
      },
      {
        "id": "B",
        "labelLatex": "$\\lim_{x\\to 1^{+}}f(x)$ does not exist"
      },
      {
        "id": "C",
        "labelLatex": "$\\lim_{x\\to 1^{-}}f(x)=0$"
      },
      {
        "id": "D",
        "labelLatex": "$\\lim_{x\\to 1^{+}}f(x)=0$"
      }
    ],
    "correctAnswer": "A, C",
    "explanationLatex": "**[Limits • EX-V Q.14]** Evaluating LHL ($x<1$) gives $0 \\times \\text{bounded} = 0$, while RHL ($x>1$) oscillates infinitely, thus LHL exists and is $0$ while RHL does not exist.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q41",
    "questionNumber": 41,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "For any positive integer $n$, define $f_n : (0, \\infty) \\to \\mathbb{R}$ as $f_n(x) = \\sum_{j=1}^{n} \\tan^{-1}\\left(\\frac{1}{1+(x+j)(x+j-1)}\\right)$ for all $x \\in (0, \\infty)$. (Here, the inverse trigonometric function $\\tan^{-1} x$ assumes values in $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$.) Then, which of the following statement(s) is (are) TRUE?",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\sum_{j=1}^{5} \\tan^2(f_j(0)) = 55$"
      },
      {
        "id": "B",
        "labelLatex": "$\\sum_{j=1}^{10} (1+f_j'(0))\\sec^2(f_j(0)) = 10$"
      },
      {
        "id": "C",
        "labelLatex": "For any fixed positive integer $n$, $\\lim_{x\\to\\infty} \\tan(f_n(x)) = \\frac{1}{n}$"
      },
      {
        "id": "D",
        "labelLatex": "For any fixed positive integer $n$, $\\lim_{x\\to\\infty} \\sec^2(f_n(x)) = 1$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Limits • EX-V Q.15]** Using telescoping sum for $\\tan^{-1}(\\frac{1}{1+(x+j)(x+j-1)}) = \\tan^{-1}(x+j) - \\tan^{-1}(x+j-1)$, $f_n(x) = \\tan^{-1}(x+n) - \\tan^{-1}(x)$. As $x\\to\\infty$, $f_n(x)\\to 0$, so $\\sec^2(f_n(x))\\to 1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q42",
    "questionNumber": 42,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "For any positive integer $n$, let $S_n : (0, \\infty) \\to \\mathbb{R}$ be defined by $S_n(x) = \\sum_{k=1}^{n} \\cot^{-1}\\left(\\frac{1+k(k+1)x^2}{x}\\right)$ where for any $x\\in\\mathbb{R}$, $\\cot^{-1}(x)\\in(0, \\pi)$ and $\\tan^{-1}(x)\\in(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$. Then which of the following statements is (are) TRUE?",
    "options": [
      {
        "id": "A",
        "labelLatex": "$S_{10}(x) = \\frac{\\pi}{2} - \\tan^{-1}\\left(\\frac{1+11x^2}{10x}\\right)$, for all $x>0$"
      },
      {
        "id": "B",
        "labelLatex": "$\\lim_{n\\to\\infty} \\cot(S_n(x)) = x$, for all $x>0$"
      },
      {
        "id": "C",
        "labelLatex": "The equation $S_3(x) = \\frac{\\pi}{4}$ has a root in $(0, \\infty)$"
      },
      {
        "id": "D",
        "labelLatex": "$\\tan(S_n(x)) \\le \\frac{1}{2}$, for all $n\\ge 1$ and $x>0$"
      }
    ],
    "correctAnswer": "A, B",
    "explanationLatex": "**[Limits • EX-V Q.16]** General term is $\\cot^{-1}(k x) - \\cot^{-1}((k+1)x)$, which telescopes to $\\cot^{-1}(x) - \\cot^{-1}((n+1)x)$. From this, $S_{10}(x) = \\pi/2 - \\tan^{-1}((1+11x^2)/(10x))$ and $\\lim_{n\\to\\infty}\\cot(S_n(x))=x$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q43",
    "questionNumber": 43,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $\\beta = \\lim_{x\\to 0} \\frac{e^{x^3} - (1-x^3)^{\\frac{1}{3}} + ((1-x^2)^{\\frac{1}{2}} - 1)\\sin x}{x \\sin^2 x}$ then the value of $6\\beta$ is ______.",
    "correctAnswer": "5",
    "explanationLatex": "**[Limits • EX-V Q.17]** Using series expansions for the numerator and denominator, $\\beta = 5/6$, hence $6\\beta = 5$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p2-q44",
    "questionNumber": 44,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $k\\in\\mathbb{R}$. If $\\lim_{x\\to 0^+} (\\sin(\\sin kx) + \\cos x + x)^{\\frac{2}{x}} = e^6$, then the value of $k$ is.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1$"
      },
      {
        "id": "B",
        "labelLatex": "$2$"
      },
      {
        "id": "C",
        "labelLatex": "$3$"
      },
      {
        "id": "D",
        "labelLatex": "$4$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Limits • EX-V Q.18]** Using the $1^\\infty$ limit form, $e^{\\lim_{x\\to 0^+} \\frac{2}{x}(\\sin(\\sin kx) + \\cos x + x - 1)} = e^6 \\implies 2(k + 0 + 1) = 6 \\implies k=2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q45",
    "questionNumber": 45,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let $S$ be the set of all $(\\alpha, \\beta) \\in \\mathbb{R} \\times \\mathbb{R}$ such that $\\lim_{x\\to\\infty} \\frac{\\sin(x^2)(\\log_e x)^\\alpha \\sin\\left(\\frac{1}{x^2}\\right)}{x^\\alpha (\\log_e(1+x))^\\beta} = 0$. Then which of the following is (are) correct?",
    "options": [
      {
        "id": "A",
        "labelLatex": "$(-1, 3) \\in S$"
      },
      {
        "id": "B",
        "labelLatex": "$(-1, 1) \\in S$"
      },
      {
        "id": "C",
        "labelLatex": "$(1, -1) \\in S$"
      },
      {
        "id": "D",
        "labelLatex": "$(1, -2) \\in S$"
      }
    ],
    "correctAnswer": "B, C",
    "explanationLatex": "**[Limits • EX-V Q.19]** Analyzing the asymptotic behavior as $x\\to\\infty$, the expression simplifies to powers of $x$ and $\\log x$. The condition for the limit to be zero yields $\\beta - \\alpha > 0$ and appropriate bounds, satisfied by $(-1, 1)$ and $(1, -1)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q46",
    "questionNumber": 46,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $x_0$ be the real number such that $e^{x_0} + x_0 = 0$. For a given real number $\\alpha$, define $g(x) = \\frac{3e^x + 3x - \\alpha e^x - \\alpha x}{3(e^x + 1)}$ for all real numbers $x$. Then which one of the following statements is TRUE?",
    "options": [
      {
        "id": "A",
        "labelLatex": "For $\\alpha = 2$, $\\lim_{x\\to x_0} \\left|\\frac{g(x) + e^{x_0}}{x - x_0}\\right| = 0$"
      },
      {
        "id": "B",
        "labelLatex": "For $\\alpha = 2$, $\\lim_{x\\to x_0} \\frac{g(x) + e^{x_0}}{x - x_0} = 1$"
      },
      {
        "id": "C",
        "labelLatex": "For $\\alpha = 3$, $\\lim_{x\\to x_0} \\left|\\frac{g(x) + e^{x_0}}{x - x_0}\\right| = 0$"
      },
      {
        "id": "D",
        "labelLatex": "For $\\alpha = 3$, $\\lim_{x\\to x_0} \\frac{g(x) + e^{x_0}}{x - x_0} = \\frac{2}{3}$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Limits • EX-V Q.20]** For $\\alpha=3$, $g(x) = \\frac{3(e^x+x-3(e^x+x))}{3(e^x+1)} = -e^x$. Thus $g(x_0) = -e^{x_0}$ and $g'(x_0) = -e^{x_0}$, so the derivative limit evaluates to $0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q47",
    "questionNumber": 47,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If the function $f(x) = \\frac{3x^2 + ax + a + 3}{x^2 + x - 2}$ is continuous at $x = -2$. Find $f(-2)$.",
    "correctAnswer": "-1",
    "explanationLatex": "**[Continuity • PT Q.1]** For continuity at $x=-2$, the numerator must be zero at $x=-2$, giving $a=15$; then $f(x) = \\frac{3(x+2)(x+3)}{(x+2)(x-1)}$, so $f(-2) = \\lim_{x \\to -2} \\frac{3(x+3)}{x-1} = -1$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p2-q48",
    "questionNumber": 48,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find all possible values of $a$ and $b$ so that $f(x)$ is continuous for all $x \\in R$ if $f(x) = \\begin{cases} |ax + 3| & \\text{if } x \\le -1 \\\\ |3x + a| & \\text{if } -1 < x \\le 0 \\\\ \\frac{b \\sin 2x}{x} - 2b & \\text{if } 0 < x < \\pi \\\\ \\cos^2 x - 3 & \\text{if } x \\ge \\pi \\end{cases}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a = 0, b = 1$"
      },
      {
        "id": "B",
        "labelLatex": "$a = 1, b = 0$"
      },
      {
        "id": "C",
        "labelLatex": "$a = 0, b = 0$"
      },
      {
        "id": "D",
        "labelLatex": "$a = 1, b = 1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • PT Q.2]** Continuity at $x=0$ implies $|a| = 0 \\Rightarrow a=0$, and continuity at $x=\\pi$ implies $-2b = -2 \\Rightarrow b=1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q49",
    "questionNumber": 49,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$f(x) = \\begin{cases} ax^2 + bx + c, & |x| > 1 \\\\ x + 3, & |x| \\le 1 \\end{cases}$. Find the values of $a, b, c$ so that $f(x)$ is continuous for all values of $x$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$b = 1$ and $a, c \\in R$ such that $a + c = 3$"
      },
      {
        "id": "B",
        "labelLatex": "$b = 0$ and $a, c \\in R$ such that $a + c = 4$"
      },
      {
        "id": "C",
        "labelLatex": "$b = 1$ and $a, c \\in R$ such that $a + c = 4$"
      },
      {
        "id": "D",
        "labelLatex": "$b = 0$ and $a, c \\in R$ such that $a + c = 3$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • PT Q.3]** Continuity at $x=1$ gives $a+b+c=4$ and at $x=-1$ gives $a-b+c=2$; solving these yields $b=1$ and $a+c=3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p2-q50",
    "questionNumber": 50,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Draw the graph of the function $f(x) = x - |x - x^2|$, $-1 \\le x \\le 1$ & discuss the continuity or discontinuity of $f$ in the interval $-1 \\le x \\le 1$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f$ is cont. in $-1 \\le x \\le 1$"
      },
      {
        "id": "B",
        "labelLatex": "$f$ is discontinuous at $x = 0$"
      },
      {
        "id": "C",
        "labelLatex": "$f$ is discontinuous at $x = 1$"
      },
      {
        "id": "D",
        "labelLatex": "$f$ is discontinuous at $x = -1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • PT Q.4]** The function $f(x)$ is a combination of continuous functions $x$ and $|x-x^2|$, making it continuous throughout its domain $[-1, 1]$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  }
];
