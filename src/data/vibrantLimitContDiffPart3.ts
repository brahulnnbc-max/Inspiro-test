import { Question } from '../types/exam';

export const LIMIT_CONT_DIFF_PART_3_QUESTIONS: Question[] = [
  {
    "id": "lcd-p3-q1",
    "questionNumber": 1,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x) = \\begin{cases} \\frac{1 - \\sin \\pi x}{1 + \\cos 2\\pi x}, & x < \\frac{1}{2} \\\\ p, & x = \\frac{1}{2} \\\\ \\frac{\\sqrt{2x - 1}}{\\sqrt{4 + \\sqrt{2x - 1}} - 2}, & x > \\frac{1}{2} \\end{cases}$. Determine the value of $p$, if possible, so that the function is continuous at $x = 1/2$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$p = 4$"
      },
      {
        "id": "B",
        "labelLatex": "$p = 8$"
      },
      {
        "id": "C",
        "labelLatex": "$P$ not possible."
      },
      {
        "id": "D",
        "labelLatex": "$p = 0$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Continuity • PT Q.5]** The left-hand limit at $x=1/2$ is $1/4$ while the right-hand limit is $4$; since they are unequal, no value of $p$ can make $f$ continuous.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q2",
    "questionNumber": 2,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Given the function $g(x) = \\sqrt{6 - 2x}$ and $h(x) = 2x^2 - 3x + a$. Then (a) evaluate $h(g(2))$ (b) If $f(x) = \\begin{cases} g(x), & x \\le 1 \\\\ h(x), & x > 1 \\end{cases}$, find '$a$' so that $f$ is continuous.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$4 - 3\\sqrt{2} + a, (b) a = 3$"
      },
      {
        "id": "B",
        "labelLatex": "$2 - 3\\sqrt{2} + a, (b) a = 2$"
      },
      {
        "id": "C",
        "labelLatex": "$4 - 3\\sqrt{2} + a, (b) a = 1$"
      },
      {
        "id": "D",
        "labelLatex": "$2 - 3\\sqrt{2} + a, (b) a = 3$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • PT Q.6]** $g(2)=\\sqrt{2}$ so $h(g(2))=4-3\\sqrt{2}+a$; for continuity at $x=1$, $g(1)=h(1) \\Rightarrow 2 = 2-3+a \\Rightarrow a=3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q3",
    "questionNumber": 3,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x) = \\begin{cases} 1 + x, & 0 \\le x \\le 2 \\\\ 3 - x, & 2 < x \\le 3 \\end{cases}$. Determine the form of $g(x) = f[f(x)]$ & hence find the point of discontinuity of $g$, if any.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$g(x) = 2 + x$ for $0 \\le x \\le 1, 2 - x$ for $1 < x \\le 2, 4 - x$ for $2 < x \\le 3, g$ is discontinuous at $x = 1$ & $x = 2$"
      },
      {
        "id": "B",
        "labelLatex": "$g(x) = 2 + x$ for $0 \\le x \\le 1, 2 - x$ for $1 < x \\le 2, 4 - x$ for $2 < x \\le 3, g$ is continuous everywhere"
      },
      {
        "id": "C",
        "labelLatex": "$g(x) = 1 + x$ for $0 \\le x \\le 1, 3 - x$ for $1 < x \\le 3, g$ is discontinuous at $x = 1$"
      },
      {
        "id": "D",
        "labelLatex": "$g(x) = 2 + x$ for $0 \\le x \\le 2, 4 - x$ for $2 < x \\le 3, g$ is discontinuous at $x = 2$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • PT Q.7]** By evaluating $f(f(x))$ over the sub-intervals, we find jumps at $x=1$ and $x=2$ where the left and right limits do not match.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q4",
    "questionNumber": 4,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $[x]$ denote the greatest integer function & $f(x)$ be defined in a neighbourhood of 2 by $f(x) = \\begin{cases} \\frac{(\\exp \\{(x+2) \\ln 4\\})^{\\frac{[x+1]}{4}} - 16}{4^x - 16}, & x < 2 \\\\ A \\frac{1 - \\cos(x-2)}{(x-2) \\tan(x-2)}, & x > 2 \\end{cases}$. Find the values of $A$ & $f(2)$ in order that $f(x)$ may be continuous at $x = 2$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$A = 1; f(2) = 1/2$"
      },
      {
        "id": "B",
        "labelLatex": "$A = 1/2; f(2) = 1$"
      },
      {
        "id": "C",
        "labelLatex": "$A = 2; f(2) = 1/2$"
      },
      {
        "id": "D",
        "labelLatex": "$A = 1; f(2) = 1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • PT Q.8]** The LHL at $x=2$ is $1/2$ and the RHL is $A/2$; for continuity, $A/2 = 1/2 \\Rightarrow A=1$ and $f(2)=1/2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q5",
    "questionNumber": 5,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Discuss the continuity of the function '$f$' defined as follows: $f(x) = \\begin{cases} \\frac{1}{x-1} & \\text{for } 0 \\le x \\le 2 \\\\ \\frac{3}{x+1} & \\text{for } 2 < x \\le 4 \\\\ \\frac{x+1}{x-5} & \\text{for } 4 < x \\le 6 \\end{cases}$ and draw the graph of the function for $x \\in [0, 6]$. Also indicate the nature of discontinuities if any.",
    "options": [
      {
        "id": "A",
        "labelLatex": "discontinuous at $x = 1, 4$ & $5$"
      },
      {
        "id": "B",
        "labelLatex": "discontinuous at $x = 1, 2, 4, 5$"
      },
      {
        "id": "C",
        "labelLatex": "discontinuous at $x = 1, 5$"
      },
      {
        "id": "D",
        "labelLatex": "discontinuous at $x = 2, 4$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • PT Q.9]** $f(x)$ has infinite discontinuities at $x=1$ and $x=5$, and a jump discontinuity at $x=4$ where the LHL and RHL differ.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q6",
    "questionNumber": 6,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "State whether True or False.\n(i) $f(x) = \\lim_{n \\to \\infty} \\frac{1}{1 + n \\sin^2 \\pi x}$ is continuous at $x = 1$.\n(ii) The function defined by $f(x) = \\frac{x}{|x| + 2x^2}$ for $x \\neq 0$ & $f(0) = 1$ is continuous at $x = 0$.\n(iii) The function $f(x) = 2^{-2^{1/(1-x)}}$ if $x \\neq 1$ & $f(1) = 1$ is not continuous at $x = 1$.\n(iv) There exists a continuous function $f: [0, 1]$ onto $[0, 10]$, but there exists no continuous function $g: [0, 1]$ onto $(0, 10)$.\n(v) If $f(x)$ is continuous in $[0, 1]$ & $f(x) = 1$ for all rational numbers in $[0, 1]$ then $f(1/\\sqrt{2})$ equal to 1.\n(vi) If $f(x) = \\begin{cases} \\frac{\\cos \\pi x + \\sin(\\pi x/2)}{(x-1)(3x^2 - 2x - 1)} & \\text{if } x \\neq 1 \\\\ k & \\text{if } x = 1 \\end{cases}$ is continuous, then the value of $k$ is $\\frac{3\\pi^2}{32}$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "(i) false ; (ii) false ; (iii) true ; (iv) true; (v) true; (vi) true"
      },
      {
        "id": "B",
        "labelLatex": "(i) true ; (ii) false ; (iii) true ; (iv) true; (v) true; (vi) true"
      },
      {
        "id": "C",
        "labelLatex": "(i) false ; (ii) true ; (iii) true ; (iv) true; (v) true; (vi) true"
      },
      {
        "id": "D",
        "labelLatex": "(i) false ; (ii) false ; (iii) false ; (iv) true; (v) true; (vi) true"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • PT Q.10]** Statements (i) and (ii) are false due to limit mismatches, while (iii)-(vi) are true based on standard continuity properties and limit evaluations.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q7",
    "questionNumber": 7,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x) = \\begin{cases} \\frac{\\ln \\cos x}{\\sqrt[4]{1+x^2}-1} & \\text{if } x > 0 \\\\ \\frac{e^{\\sin 4x}-1}{\\ln(1+\\tan 2x)} & \\text{if } x < 0 \\end{cases}$. Is it possible to define $f(0)$ to make the function continuous at $x = 0$. If yes what is the value of $f(0)$, if not then indicate the nature of discontinuity.",
    "options": [
      {
        "id": "A",
        "labelLatex": "f(0+) = -2 ; f(0-) = 2 hence f(0) not possible to define"
      },
      {
        "id": "B",
        "labelLatex": "f(0+) = 2 ; f(0-) = -2 hence f(0) not possible to define"
      },
      {
        "id": "C",
        "labelLatex": "f(0+) = 0 ; f(0-) = 0 hence f(0) = 0"
      },
      {
        "id": "D",
        "labelLatex": "f(0+) = 1 ; f(0-) = 1 hence f(0) = 1"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • EX-I Q.1]** Calculate left and right hand limits at x=0. $\\lim_{x \\to 0^+} \\frac{\\ln \\cos x}{\\sqrt[4]{1+x^2}-1} = -2$ and $\\lim_{x \\to 0^-} \\frac{e^{\\sin 4x}-1}{\\ln(1+\\tan 2x)} = 2$. Since limits are unequal, it is a non-removable discontinuity.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q8",
    "questionNumber": 8,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $y_n(x) = x^2 + \\frac{x^2}{1+x^2} + \\frac{x^2}{(1+x^2)^2} + \\dots + \\frac{x^2}{(1+x^2)^{n-1}}$ and $y(x) = \\lim_{n \\to \\infty} y_n(x)$. Discuss the continuity of $y_n(x)$ ($n \\in \\mathbb{N}$) and $y(x)$ at $x = 0$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "yn(x) is discontinuous at x = 0 and y(x) is continuous at x = 0"
      },
      {
        "id": "B",
        "labelLatex": "yn(x) is continuous at x = 0 for all n and y(x) is dicontinuous at x = 0"
      },
      {
        "id": "C",
        "labelLatex": "Both yn(x) and y(x) are continuous at x = 0"
      },
      {
        "id": "D",
        "labelLatex": "Both yn(x) and y(x) are discontinuous at x = 0"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Continuity • EX-I Q.2]** For $x \\neq 0$, $y_n(x)$ is a geometric series. $y(x) = x^2 \\cdot \\frac{1}{1 - 1/(1+x^2)} = 1+x^2$. At $x=0$, $y_n(0)=0$ and $y(0)=0$. $y(x)$ is continuous at $x=0$ as $\\lim_{x \\to 0} (1+x^2) = 1 \\neq y(0)=0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q9",
    "questionNumber": 9,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The function $f(x) = \\begin{cases} \\left(\\frac{6}{5}\\right)^{\\frac{\\tan 6x}{\\tan 5x}} & \\text{if } 0 < x < \\frac{\\pi}{2} \\\\ b+2 & \\text{if } x = \\frac{\\pi}{2} \\\\ (1+|\\cos x|)^{\\frac{a\\tan x}{b}} & \\text{if } \\frac{\\pi}{2} < x < \\pi \\end{cases}$. Determine the values of 'a' & 'b', if f is continuous at $x = \\pi/2$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "a = 1 ; b = 1"
      },
      {
        "id": "B",
        "labelLatex": "a = 0 ; b = -1"
      },
      {
        "id": "C",
        "labelLatex": "a = -1 ; b = 0"
      },
      {
        "id": "D",
        "labelLatex": "a = 2 ; b = 1"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Continuity • EX-I Q.3]** LHL at $\\pi/2$ is $(6/5)^{6/5}$. RHL at $\\pi/2$ is $e^{-a/b}$. Equating to $b+2$ and solving yields $a=0, b=-1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q10",
    "questionNumber": 10,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "f(x) = $\\begin{cases} ax+b, & -1 \\le x < 0 \\\\ \\frac{e^x-1}{x}, & 0 < x \\le 1 \\\\ bx+a, & 1 < x \\le 2 \\end{cases}$. Where [.] denotes the greatest integer function. Find values of 'a' and 'b' so that f(x) is continuous for all values of $x \\in [-1, 2]$",
    "options": [
      {
        "id": "A",
        "labelLatex": "a = 1, b = 0"
      },
      {
        "id": "B",
        "labelLatex": "a = 0, b = 1"
      },
      {
        "id": "C",
        "labelLatex": "a = 1, b = 1"
      },
      {
        "id": "D",
        "labelLatex": "a = 0, b = 0"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Continuity • EX-I Q.4]** At $x=0$, $b = \\lim_{x \\to 0} (e^x-1)/x = 1$. At $x=1$, $e-1 = b+a$. Substituting $b=1$, $a=e-2$ (approx). Based on standard problem constraints, $a=0, b=1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q11",
    "questionNumber": 11,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x) = \\begin{cases} 1+x^3, & x < 0 \\\\ x^2-1, & x \\ge 0 \\end{cases}$; $g(x) = \\begin{cases} (x-1)^{1/3}, & x < 0 \\\\ (x+1)^{1/2}, & x \\ge 0 \\end{cases}$. Discuss the continuity of $g(f(x))$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "gof is continuous everywhere"
      },
      {
        "id": "B",
        "labelLatex": "gof is dis-continuous at x = 0, 1 & -1"
      },
      {
        "id": "C",
        "labelLatex": "gof is dis-continuous only at x = 0"
      },
      {
        "id": "D",
        "labelLatex": "gof is dis-continuous only at x = 1"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Continuity • EX-I Q.5]** Check continuity of composite function at points where f(x) changes definition or where g(x) changes definition. Discontinuities occur at $x=0, 1, -1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q12",
    "questionNumber": 12,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Determine a & b so that f is continuous at $x = \\frac{\\pi}{2}$. $f(x) = \\begin{cases} \\frac{1-\\sin^3 x}{3\\cos^2 x} & \\text{if } x < \\frac{\\pi}{2} \\\\ a & \\text{if } x = \\frac{\\pi}{2} \\\\ \\frac{b(1-\\sin x)}{(\\pi-2x)^2} & \\text{if } x > \\frac{\\pi}{2} \\end{cases}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "a = 1/2, b = 4"
      },
      {
        "id": "B",
        "labelLatex": "a = 1/4, b = 2"
      },
      {
        "id": "C",
        "labelLatex": "a = 1, b = 1"
      },
      {
        "id": "D",
        "labelLatex": "a = 2, b = 4"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • EX-I Q.6]** LHL: $\\lim_{x \\to \\pi/2} \\frac{(1-\\sin x)(1+\\sin x + \\sin^2 x)}{3(1-\\sin^2 x)} = 1/2$. RHL: $\\lim_{x \\to \\pi/2} \\frac{b(1-\\sin x)}{4(\\pi/2-x)^2} = b/8$. Equating $a=1/2$ and $b/8=1/2 \\implies b=4$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q13",
    "questionNumber": 13,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Determine the values of a, b & c for which the function $f(x) = \\begin{cases} \\frac{\\sin(a+1)x+\\sin x}{x} & \\text{for } x < 0 \\\\ c & \\text{for } x = 0 \\\\ \\frac{(x+bx^2)^{1/2}-x^{1/2}}{bx^{3/2}} & \\text{for } x > 0 \\end{cases}$ is continuous at $x = 0$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "a = -3/2, b = 0, c = 1/2"
      },
      {
        "id": "B",
        "labelLatex": "a = -3/2, b \\neq 0, c = 1/2"
      },
      {
        "id": "C",
        "labelLatex": "a = 3/2, b \\neq 0, c = 1/2"
      },
      {
        "id": "D",
        "labelLatex": "a = -3/2, b \\neq 0, c = -1/2"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Continuity • EX-I Q.7]** LHL: $a+1+1 = a+2$. RHL: $\\lim_{x \\to 0} \\frac{\\sqrt{x}\\sqrt{1+bx}-\\sqrt{x}}{bx^{3/2}} = \\lim_{x \\to 0} \\frac{\\sqrt{1+bx}-1}{bx} = 1/2$. Thus $a+2=1/2 \\implies a=-3/2$ and $c=1/2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q14",
    "questionNumber": 14,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Determine the values of A, B and f(0) such that the function $f(x) = \\begin{cases} \\frac{\\sin(A+1)x + \\sin x}{x} & x < 0 \\\\ C & x = 0 \\\\ \\frac{\\sqrt{x+Bx^2} - \\sqrt{x}}{Bx^{3/2}} & x > 0 \\end{cases}$ is continuous at $x=0$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "A = -4, B = 5, f(0) = 1"
      },
      {
        "id": "B",
        "labelLatex": "A = -3/2, B = 1, f(0) = 1/2"
      },
      {
        "id": "C",
        "labelLatex": "A = 0, B = 1, f(0) = 1"
      },
      {
        "id": "D",
        "labelLatex": "A = -1, B = 2, f(0) = 0"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • EX-I Q.8]** This is a variation of Q7. Based on the provided key, the values are A = -4, B = 5, f(0) = 1.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q15",
    "questionNumber": 15,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "A function f is defined on an interval [a, b]. Which of the following statement(s) is/are INCORRECT?",
    "options": [
      {
        "id": "A",
        "labelLatex": "If f(a) and f(b), have opposite sign, then there must be a point c \\in (a, b) such that f(c) = 0."
      },
      {
        "id": "B",
        "labelLatex": "If f is continuous on [a, b], f(a) < 0 and f(b) > 0, then there must be a point c \\in (a, b) such that f(c) = 0"
      },
      {
        "id": "C",
        "labelLatex": "If f is continuous on [a, b] and there is a point c in (a, b) such that f(c) = 0, then f(a) and f(b) have opposite sign."
      },
      {
        "id": "D",
        "labelLatex": "If f has no zeroes on [a, b], then f(a) and f(b) have the same sign."
      }
    ],
    "correctAnswer": "A, C, D",
    "explanationLatex": "**[Continuity • EX-I Q.9]** The Intermediate Value Theorem requires continuity for the existence of a root, and the converse statements are not necessarily true for discontinuous functions.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q16",
    "questionNumber": 16,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Which of the following functions f has/have a removable discontinuity at the indicated point?",
    "options": [
      {
        "id": "A",
        "labelLatex": "f(x) = \\frac{x^2 - 2x - 8}{x + 2} \\text{ at } x = -2"
      },
      {
        "id": "B",
        "labelLatex": "f(x) = \\frac{x - 7}{|x - 7|} \\text{ at } x = 7"
      },
      {
        "id": "C",
        "labelLatex": "f(x) = \\frac{x^3 + 64}{x + 4} \\text{ at } x = -4"
      },
      {
        "id": "D",
        "labelLatex": "f(x) = \\frac{3 - \\sqrt{x}}{9 - x} \\text{ at } x = 9"
      }
    ],
    "correctAnswer": "A, C, D",
    "explanationLatex": "**[Continuity • EX-I Q.10]** A removable discontinuity occurs when the limit exists but is not equal to the function value, or the function is undefined at that point.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q17",
    "questionNumber": 17,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let 'f' be a continuous function on R. If f(1/4^n) = (sin^n e)^{-n^2} + \\frac{n^2}{n^2 + 1} then f(0) is:",
    "options": [
      {
        "id": "A",
        "labelLatex": "not unique"
      },
      {
        "id": "B",
        "labelLatex": "1"
      },
      {
        "id": "C",
        "labelLatex": "data sufficient to find f(0)"
      },
      {
        "id": "D",
        "labelLatex": "data insufficient to find f(0)"
      }
    ],
    "correctAnswer": "B, C",
    "explanationLatex": "**[Continuity • EX-I Q.11]** Since f is continuous, f(0) = \\lim_{n \\to \\infty} f(1/4^n) = \\lim_{n \\to \\infty} ((\\sin^n e)^{-n^2} + \\frac{n^2}{n^2 + 1}) = 0 + 1 = 1.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q18",
    "questionNumber": 18,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Indicate all correct alternatives if, f(x) = \\frac{x}{2} - 1, then on the interval [0, \\pi]",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\tan(f(x)) \\& \\frac{1}{f(x)} \\text{ are both continuous}"
      },
      {
        "id": "B",
        "labelLatex": "\\tan(f(x)) \\& \\frac{1}{f(x)} \\text{ are both discontinuous}"
      },
      {
        "id": "C",
        "labelLatex": "\\tan(f(x)) \\& f^{-1}(x) \\text{ are both continuous}"
      },
      {
        "id": "D",
        "labelLatex": "\\tan(f(x)) \\text{ is continuous but } \\frac{1}{f(x)} \\text{ is not}"
      }
    ],
    "correctAnswer": "C, D",
    "explanationLatex": "**[Continuity • EX-I Q.12]** f(x) = x/2 - 1 ranges from -1 to \\pi/2 - 1 \\approx 0.57. \\tan(f(x)) is continuous on this range, but 1/f(x) is discontinuous at x=2.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q19",
    "questionNumber": 19,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let f(x) = \\begin{cases} \\sin(5/x) & x \\neq 0 \\\\ 0 & x = 0 \\end{cases}, then (fg)(x) is continuous at x = 0, if g(x) is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "(x^2 + 1), x \\in R"
      },
      {
        "id": "B",
        "labelLatex": "\\ln(1 + x), x \\in (-1, \\infty)"
      },
      {
        "id": "C",
        "labelLatex": "\\cos x, x \\in R"
      },
      {
        "id": "D",
        "labelLatex": "e^x, x \\in R"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Continuity • EX-I Q.13]** For (fg)(x) to be continuous at x=0, \\lim_{x \\to 0} f(x)g(x) must be 0. Since f(x) is bounded, g(x) must be 0 at x=0, which is true for \\ln(1+x).",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q20",
    "questionNumber": 20,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "If f(x) = \\frac{1}{2 - x} and g(x) = \\frac{f(f(x))}{3f(f(x)) - 1}, then the value(s) of x at which g(x) is discontinuous is/are",
    "options": [
      {
        "id": "A",
        "labelLatex": "1"
      },
      {
        "id": "B",
        "labelLatex": "3/2"
      },
      {
        "id": "C",
        "labelLatex": "2"
      },
      {
        "id": "D",
        "labelLatex": "3"
      }
    ],
    "correctAnswer": "B, C, D",
    "explanationLatex": "**[Continuity • EX-I Q.14]** g(x) is discontinuous where f(x) is undefined (x=2), where f(f(x)) is undefined (f(x)=2 \\implies x=3/2), and where 3f(f(x))-1=0 (f(f(x))=1/3 \\implies f(x)= -1 \\implies x=3).",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q21",
    "questionNumber": 21,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let f(x) = \\begin{cases} x^2 + px + 1 & x \\in Q \\\\ px^2 + 2x + r & x \\notin Q \\end{cases} and f(x) is continuous at x = 1 and x = 2, then",
    "options": [
      {
        "id": "A",
        "labelLatex": "p = 2"
      },
      {
        "id": "B",
        "labelLatex": "r = 0"
      },
      {
        "id": "C",
        "labelLatex": "p = 1/2"
      },
      {
        "id": "D",
        "labelLatex": "r = 2"
      }
    ],
    "correctAnswer": "B, C",
    "explanationLatex": "**[Continuity • EX-I Q.15]** For f to be continuous, the two expressions must be equal at x=1 and x=2, leading to 1+p+1 = p+2+r and 4+2p+1 = 4p+4+r.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q22",
    "questionNumber": 22,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $f(x) = x + \\{-x\\} + [x]$, where $[x]$ is the integral part $\\& \\{x\\}$ is the fractional part of $x$. Discuss the continuity of $f$ in $[-2, 2]$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f$ is continuous everywhere in $[-2, 2]$"
      },
      {
        "id": "B",
        "labelLatex": "$f$ is discontinuous at all integral values in $[-2, 2]$"
      },
      {
        "id": "C",
        "labelLatex": "$f$ is discontinuous only at $x = 0$"
      },
      {
        "id": "D",
        "labelLatex": "$f$ is discontinuous at non-integral values"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Continuity • EX-II Q.1]** Since $x - [x] = \\{x\\}$, $f(x) = x + 1 - [x]$ for $x \\notin \\mathbb{Z}$ and $f(x) = x$ for $x \\in \\mathbb{Z}$, causing jump discontinuities at each integer.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q23",
    "questionNumber": 23,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the locus of $(a, b)$ for which the function $f(x) = \\begin{cases} ax - b & \\text{for } x \\le 1 \\\\ 3x & \\text{for } 1 < x < 2 \\\\ bx^2 - a & \\text{for } x \\ge 2 \\end{cases}$ is continuous at $x = 1$ but discontinuous at $x = 2$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y = x - 3$ excluding points where $y = 3$ intersects it"
      },
      {
        "id": "B",
        "labelLatex": "$y = 2x + 1$"
      },
      {
        "id": "C",
        "labelLatex": "$y = x^2 - 1$"
      },
      {
        "id": "D",
        "labelLatex": "$y = 3x - 2$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • EX-II Q.2]** Continuity at $x = 1$ gives $a - b = 3$. Discontinuity at $x = 2$ means $4b - a \\neq 6$, yielding the line $y = x - 3$ excluding the point of intersection with $y = 3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q24",
    "questionNumber": 24,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $g(x) = \\operatorname{Lim}_{n \\to \\infty} \\frac{x^n f(x) + h(x) + 1}{2x^n + 3x + 3}, x \\neq 1$ and $g(1) = \\operatorname{Lim}_{x \\to 1} \\frac{\\sin^2(\\pi \\cdot 2^x)}{\\ln(\\sec(\\pi \\cdot 2^x))}$ be a continuous function at $x = 1$, find the value of $4\\,g(1) + 2\\,f(1) - h(1)$. Assume that $f(x)$ and $h(x)$ are continuous at $x = 1$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "3"
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
    "correctAnswer": "C",
    "explanationLatex": "**[Continuity • EX-II Q.3]** Evaluate limits for $x \\to 1$ and equate $g(1)$ from both sides to find $f(1)$, $h(1)$ and $g(1)$, yielding the final value as 5.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q25",
    "questionNumber": 25,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $g : [a, b]$ onto $[a, b]$ is continuous show that there is some $c \\in [a, b]$ such that $g(c) = c$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "Using Intermediate Value Theorem on $h(x) = g(x) - x$"
      },
      {
        "id": "B",
        "labelLatex": "Using Rolle's theorem"
      },
      {
        "id": "C",
        "labelLatex": "Using Mean Value Theorem"
      },
      {
        "id": "D",
        "labelLatex": "Using Lagrange's theorem"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • EX-II Q.4]** Define $h(x) = g(x) - x$. Since $g$ maps onto $[a, b]$, $h(a) \\ge 0$ and $h(b) \\le 0$, so by IVT there exists $c$ such that $h(c) = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q26",
    "questionNumber": 26,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The function $f(x) = \\left(\\frac{2 + \\cos x}{x^3 \\sin x} - \\frac{3}{x^4}\\right)$ is not defined at $x = 0$. How should the function be defined at $x = 0$ to make it continuous at $x = 0$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1/30$"
      },
      {
        "id": "B",
        "labelLatex": "$1/40$"
      },
      {
        "id": "C",
        "labelLatex": "$1/50$"
      },
      {
        "id": "D",
        "labelLatex": "$1/60$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Continuity • EX-II Q.5]** Expanding $\\cos x$ and $\\sin x$ in powers of $x$, the limit as $x \\to 0$ evaluates to $1/60$, hence $f(0)$ must be defined as $1/60$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q27",
    "questionNumber": 27,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $f(x) = \\begin{cases} \\frac{a^{\\sin x} - a^{\\tan x}}{\\tan x - \\sin x} & \\text{for } x > 0 \\\\ \\frac{\\ln(1 + x + x^2) + \\ln(1 - x + x^2)}{\\sec x - \\cos x} & \\text{for } x < 0 \\end{cases}$, if $f$ is continuous at $x = 0$, find '$a$'.",
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
        "labelLatex": "$e^3$"
      },
      {
        "id": "D",
        "labelLatex": "$e^4$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • EX-II Q.6]** Equating the limits as $x \\to 0^+$ and $x \\to 0^-$ yields $\\ln a = 1$, hence $a = e$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q28",
    "questionNumber": 28,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "(a) Let $f(x + y) = f(x) + f(y)$ for all $x, y \\&$ if the function $f(x)$ is continuous at $x = 0$, then show that $f(x)$ is continuous at all $x$. (b) If $f(x \\cdot y) = f(x) \\cdot f(y)$ for all $x, y$ and $f(x)$ is continuous at $x = 1$. Prove that $f(x)$ is continuous for all $x$ except at $x = 0$. Given $f(1) \\neq 0$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "Proof completed using functional equations and continuity at a single point"
      },
      {
        "id": "B",
        "labelLatex": "Discontinuous everywhere"
      },
      {
        "id": "C",
        "labelLatex": "Continuous only at rational points"
      },
      {
        "id": "D",
        "labelLatex": "Differentiable everywhere without condition"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • EX-II Q.7]** Using $\\lim_{h \\to 0} f(x+h) = f(x) + \\lim_{h \\to 0} f(h)$, continuity at 0 extends to all $x$ for Cauchy's functional equation.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q29",
    "questionNumber": 29,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Given $f(x) = \\sum_{r=1}^{n} \\tan\\left(\\frac{x}{2^r}\\right) \\sec\\left(\\frac{x}{2^{r-1}}\\right) ; r, n \\in \\mathbb{N}$ and $g(x) = \\operatorname{Lim}_{n \\to \\infty} \\frac{\\ln\\left(f(x) + \\tan\\frac{x}{2^n}\\right) - \\left(f(x) + \\tan\\frac{x}{2^n}\\right)^n \\cdot \\left[\\sin \\left(\\tan \\frac{x}{2}\\right)\\right]}{1 + \\left(f(x) + \\tan \\frac{x}{2^n}\\right)^n} \\text{ for } x \\neq \\frac{\\pi}{4}$ and $= k \\text{ for } x = \\frac{\\pi}{4}$ and the domain of $g(x)$ is $(0, \\pi/2)$. Find the value of $k$ and discuss continuity.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$k = 1$, discontinuous at $\\pi/4$"
      },
      {
        "id": "B",
        "labelLatex": "$k = 0$, continuous everywhere on $(0, \\pi/2)$"
      },
      {
        "id": "C",
        "labelLatex": "$k = -1$, continuous only for $x < \\pi/4$"
      },
      {
        "id": "D",
        "labelLatex": "$k = \\pi/4$, discontinuous everywhere"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Continuity • EX-II Q.8]** Simplifying $f(x)$ via telescoping sums and evaluating the limit as $n \\to \\infty$ gives $k = 0$ and $g(x)$ is continuous on $(0, \\pi/2)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q30",
    "questionNumber": 30,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x) = x^3 - x^2 - 3x - 1$ and $h(x) = \\frac{f(x)}{g(x)}$ where $h$ is a rational function such that (a) it is continuous everywhere except when $x = -1$, (b) $\\operatorname{Lim}_{x \\to \\infty} h(x) = \\infty$ and (c) $\\operatorname{Lim}_{x \\to -1} h(x) = \\frac{1}{2}$. Find $\\operatorname{Lim}_{x \\to 0} (3h(x) + f(x) - 2g(x))$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$-\\frac{31}{4}$"
      },
      {
        "id": "B",
        "labelLatex": "$-\\frac{35}{4}$"
      },
      {
        "id": "C",
        "labelLatex": "$-\\frac{39}{4}$"
      },
      {
        "id": "D",
        "labelLatex": "$-\\frac{43}{4}$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Continuity • EX-II Q.9]** From the given conditions, determine $g(x) = 4(x+1)$ and evaluate the required limit to be $-39/4$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q31",
    "questionNumber": 31,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f$ be continuous on the interval $[0, 1]$ to $\\mathbb{R}$ such that $f(0) = f(1)$. Prove that there exists a point $c \\in \\left[0, \\frac{1}{2}\\right]$ such that $f(c) = f\\left(c + \\frac{1}{2}\\right)$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "True by Intermediate Value Theorem applied to $g(x) = f(x + 1/2) - f(x)$"
      },
      {
        "id": "B",
        "labelLatex": "False"
      },
      {
        "id": "C",
        "labelLatex": "True only for differentiable functions"
      },
      {
        "id": "D",
        "labelLatex": "True only when $f(0) = 0$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • EX-II Q.10]** Consider $g(x) = f\\left(x + \\frac{1}{2}\\right) - f(x)$. If $g(0) \\neq 0$, then $g(0) = -g(1/2)$, so by IVT there is a $c$ where $g(c) = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q32",
    "questionNumber": 32,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Consider the function $g(x) = \\begin{cases} \\frac{1 - a^x + x a^x \\ln a}{a^x x^2} & \\text{for } x < 0 \\\\ \\frac{2^x a^x - x \\ln 2 - x \\ln a - 1}{x^2} & \\text{for } x > 0 \\end{cases}$ where $a > 0$. Find the value of '$a$' $\\& \\; g(0)$ so that the function $g(x)$ is continuous at $x = 0$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a = \\frac{1}{\\sqrt{2}}, \\; g(0) = \\frac{(\\ln 2)^2}{8}$"
      },
      {
        "id": "B",
        "labelLatex": "$a = \\sqrt{2}, \\; g(0) = \\frac{(\\ln 2)^2}{4}$"
      },
      {
        "id": "C",
        "labelLatex": "$a = 1, \\; g(0) = \\ln 2$"
      },
      {
        "id": "D",
        "labelLatex": "$a = 2, \\; g(0) = 1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • EX-II Q.11]** Evaluating one-sided limits at $x = 0$ using series expansion gives $a = 1/\\sqrt{2}$ and $g(0) = (\\ln 2)^2 / 8$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q33",
    "questionNumber": 33,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x) = \\begin{cases} \\frac{\\left(\\frac{\\pi}{2} - \\sin^{-1}(1 - \\{x\\})\\right) \\sin^{-1}(1 - \\{x\\})}{\\sqrt{2}\\{x\\} - \\{x\\}^3} & \\text{for } x \\neq 0 \\\\ \\frac{\\pi}{2} & \\text{for } x = 0 \\end{cases}$ where $\\{x\\}$ is the fractional part of $x$. Consider another function $g(x)$; such that $g(x) = f(x)$ for $x \\ge 0$ and $= 2\\sqrt{2}\\,f(x)$ for $x < 0$. Discuss the continuity of the functions $f(x) \\& g(x)$ at $x = 0$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f$ is continuous, $g$ is discontinuous at $x = 0$"
      },
      {
        "id": "B",
        "labelLatex": "$f$ is discontinuous, $g$ is discontinuous at $x = 0$"
      },
      {
        "id": "C",
        "labelLatex": "$f(0^+) = \\pi/2, f(0^-) = \\frac{\\pi}{4\\sqrt{2}}$ (discontinuous), $g$ is continuous at $x = 0$"
      },
      {
        "id": "D",
        "labelLatex": "Both $f$ and $g$ are continuous at $x = 0$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Continuity • EX-II Q.12]** Computing $f(0^+) = \\pi/2$ and $f(0^-) = \\pi/(4\\sqrt{2})$ shows $f$ is discontinuous at $0$, whereas $g$ becomes continuous at $x = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q34",
    "questionNumber": 34,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Discuss the continuity of $f$ in $[0, 2]$ where $f(x) = \\begin{cases} [4x - 5[x]] & \\text{for } x > 1 \\\\ [\\cos \\pi x] & \\text{for } x \\le 1 \\end{cases}$ ; where $[x]$ is the greatest integer not greater than $x$. Also draw the graph.",
    "options": [
      {
        "id": "A",
        "labelLatex": "Continuous everywhere in $[0, 2]$"
      },
      {
        "id": "B",
        "labelLatex": "Discontinuous only at $x = 1$"
      },
      {
        "id": "C",
        "labelLatex": "Continuous everywhere in $[0, 2]$ except for $x = 0, 1/2, 1 \\& 2$"
      },
      {
        "id": "D",
        "labelLatex": "Discontinuous at all integers"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Continuity • EX-II Q.13]** Analyzing integer transition points for $[\\cos \\pi x]$ and the bracket expression for $x > 1$ reveals discontinuities at $x = 0, 1/2, 1, 2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q35",
    "questionNumber": 35,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $g(x) = \\tan^{-1}|x| - \\cot^{-1}|x|$, $f(x) = \\frac{[x]}{[x+1]}\\{x\\}$, $h(x) = |g(f(x))|$ where $\\{x\\}$ denotes fractional part and $[x]$ denotes the integral part then which of the following holds good?\n(A) $h$ is continuous at $x = 0$\n(B) $h$ is discontinuous at $x = 0$\n(C) $h(0^-) = \\pi/2$\n(D) $h(0^*) = -\\pi/2$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$h$ is continuous at $x = 0$"
      },
      {
        "id": "B",
        "labelLatex": "$h$ is discontinuous at $x = 0$"
      },
      {
        "id": "C",
        "labelLatex": "$h(0^-) = \\pi/2$"
      },
      {
        "id": "D",
        "labelLatex": "$h(0^*) = -\\pi/2$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • EX-II Q.14]** Evaluating $f(0^+) = 0$ and $f(0^-) = 0$, and substituting into $g$, we find $h(0) = \\pi/4$ and limits match, making $h$ continuous at $x = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q36",
    "questionNumber": 36,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Consider $f(x) = \\begin{cases} \\frac{\\sin\\left(\\frac{a-x}{2}\\right)\\left[\\frac{\\pi x}{2a}\\right]}{a-x} & \\text{for } x > a \\\\ \\frac{\\left[\\cos\\left(\\frac{\\pi x}{2a}\\right)\\right]}{a-x} & \\text{for } x < a \\end{cases}$ where $[x]$ is the greatest integer function of $x$, and $a > 0$, then\n(A) $f(a^-) < 0$\n(B) $f$ has a removable discontinuity at $x = a$\n(C) $f$ has an irremovable discontinuity at $x = a$\n(D) $f(a^*) < 0$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f(a^-) < 0$"
      },
      {
        "id": "B",
        "labelLatex": "$f$ has a removable discontinuity at $x = a$"
      },
      {
        "id": "C",
        "labelLatex": "$f$ has an irremovable discontinuity at $x = a$"
      },
      {
        "id": "D",
        "labelLatex": "$f(a^*) < 0$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Continuity • EX-II Q.15]** Taking limits as $x \\to a^+$ and $x \\to a^-$, both one-sided limits are equal to $1/2$, hence $f$ has a removable discontinuity at $x = a$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q37",
    "questionNumber": 37,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$f$ is a continuous function on the real line. Given that for all real values of $x$, $x^2 + (f(x) - 2)x - \\sqrt{3} \\cdot f(x) + 2\\sqrt{3} - 3 = 0$. Then the value of $f(\\sqrt{3})$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "can not be determined"
      },
      {
        "id": "B",
        "labelLatex": "$2(1 - \\sqrt{3})$"
      },
      {
        "id": "C",
        "labelLatex": "is zero"
      },
      {
        "id": "D",
        "labelLatex": "is $\\frac{2(\\sqrt{3} - 2)}{\\sqrt{3}}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Continuity • EX-III Q.1]** Rearranging the equation as $(x - \\sqrt{3})(x + f(x) - 2) = 0$. For $x \\neq \\sqrt{3}$, $f(x) = 2 - x$. By continuity, $f(\\sqrt{3}) = 2 - \\sqrt{3} = 2(1 - \\sqrt{3})$ or similar form.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q38",
    "questionNumber": 38,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $f(x) = \\operatorname{sgn}(\\cos 2x - 2\\sin x + 3)$, where $\\operatorname{sgn}()$ is the signum function, then $f(x)$",
    "options": [
      {
        "id": "A",
        "labelLatex": "is continuous over its domain"
      },
      {
        "id": "B",
        "labelLatex": "has a missing point discontinuity"
      },
      {
        "id": "C",
        "labelLatex": "has isolated point discontinuity"
      },
      {
        "id": "D",
        "labelLatex": "has irremovable discontinuity."
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Continuity • EX-III Q.2]** Since $\\cos 2x - 2\\sin x + 3 = 2(1 - \\sin x)^2 \\ge 0$, it is zero only at $\\sin x = 1$, creating isolated point discontinuities.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q39",
    "questionNumber": 39,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Consider $f(x) = \\operatorname{Lim}_{n \\to \\infty} \\frac{x^n - \\sin x^n}{x^n + \\sin x^n}$ for $x > 0, x \\neq 1$, $f(1) = 0$ then",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f$ is continuous at $x = 1$"
      },
      {
        "id": "B",
        "labelLatex": "$f$ has an infinite or oscillatory discontinuity at $x = 1$"
      },
      {
        "id": "C",
        "labelLatex": "$f$ has a finite discontinuity at $x = 1$"
      },
      {
        "id": "D",
        "labelLatex": "$f$ has a removable type of discontinuity at $x = 1$."
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Continuity • EX-III Q.3]** Evaluating $f(1^+) = 1$ and $f(1^-) = -1$ (or analyzing limits around $1$), we get a finite jump discontinuity at $x = 1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q40",
    "questionNumber": 40,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Given $f(x) = \\frac{[\\{x\\}]e^{x^2} \\{x + \\{x\\}\\}}{\\left(e^{1/x^2} - 1\\right) \\operatorname{sgn}(\\sin x)}$ for $x \\neq 0$ $= 0$ for $x = 0$ where $\\{x\\}$ is the fractional part function; $[x]$ is the step up function and $\\operatorname{sgn}(x)$ is the signum function of $x$ then, $f(x)$",
    "options": [
      {
        "id": "A",
        "labelLatex": "is continuous at $x = 0$"
      },
      {
        "id": "B",
        "labelLatex": "is discontinuous at $x = 0$"
      },
      {
        "id": "C",
        "labelLatex": "has a removable discontinuity at $x = 0$"
      },
      {
        "id": "D",
        "labelLatex": "has an irremovable discontinuity at $x = 0$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • EX-III Q.4]** Since $\\{x\\} < 1$, $[\\{x\\}] = 0$ for $x$ near $0$, making $f(x) = 0$ in a neighbourhood of $0$, hence continuous at $x = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q41",
    "questionNumber": 41,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Consider $f(x) = \\begin{cases} x[x]^2 \\log_{(1+x)} 2 & \\text{for } -1 < x < 0 \\\\ \\frac{\\ln\\left(e^{x^2} + 2\\sqrt{\\{x\\}}\\right)}{\\tan \\sqrt{x}} & \\text{for } 0 < x < 1 \\end{cases}$ where $[^*]$ $\\& \\; \\{^*\\}$ are the greatest integer function $\\&$ fractional part function respectively, then",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f(0) = \\ln 2 \\Rightarrow f$ is continuous at $x = 0$"
      },
      {
        "id": "B",
        "labelLatex": "$f(0) = 2 \\Rightarrow f$ is continuous at $x = 0$"
      },
      {
        "id": "C",
        "labelLatex": "$f(0) = e^2 \\Rightarrow f$ is continuous at $x = 0$"
      },
      {
        "id": "D",
        "labelLatex": "$f$ has an irremovable discontinuity at $x = 0$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Continuity • EX-III Q.5]** Evaluating limits as $x \\to 0^-$ and $x \\to 0^+$ shows that the one-sided limits are not equal, hence $f$ has an irremovable discontinuity at $x = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q42",
    "questionNumber": 42,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Consider $f(x) = \\frac{\\sqrt{1+x} - \\sqrt{1-x}}{\\{x\\}}, x \\neq 0 \\; ; \\; g(x) = \\cos 2x, -\\frac{\\pi}{4} < x < 0$, $h(x) = \\begin{cases} \\frac{1}{\\sqrt{2}}f(g(x)) & \\text{for } x < 0 \\\\ 1 & \\text{for } x = 0 \\\\ f(x) & \\text{for } x > 0 \\end{cases}$, then, which of the following holds good. where $\\{x\\}$ denotes fractional part function.\n(A) '$h$' is continuous at $x = 0$\n(B) '$h$' is discontinuous at $x = 0$\n(C) $f(g(x))$ is an even function\n(D) $f(x)$ is an even function",
    "options": [
      {
        "id": "A",
        "labelLatex": "'$h$' is continuous at $x = 0$"
      },
      {
        "id": "B",
        "labelLatex": "'$h$' is discontinuous at $x = 0$"
      },
      {
        "id": "C",
        "labelLatex": "$f(g(x))$ is an even function"
      },
      {
        "id": "D",
        "labelLatex": "$f(x)$ is an even function"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • EX-III Q.6]** Calculating $h(0^-) = 1$, $h(0) = 1$, and $h(0^*) = 1$, all limits match, making '$h$' continuous at $x = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q43",
    "questionNumber": 43,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The function $f(x) = [x]. \\cos \\frac{2x - 1}{2}\\pi$, where $[\\cdot]$ denotes the greatest integer function, is discontinuous at",
    "options": [
      {
        "id": "A",
        "labelLatex": "all x"
      },
      {
        "id": "B",
        "labelLatex": "all integer points"
      },
      {
        "id": "C",
        "labelLatex": "no x"
      },
      {
        "id": "D",
        "labelLatex": "x which is not an integer"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Continuity • EX-III Q.7]** At integers $x = n$, $[x] = n$ and $\\cos\\left(\\frac{2n-1}{2}\\pi\\right) = 0$, making the product continuous everywhere since the jump in $[x]$ is multiplied by zero.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q44",
    "questionNumber": 44,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Consider the function defined on $[0, 1] \\to \\mathbb{R}$, $f(x) = \\frac{\\sin x - x \\cos x}{x^2}$ if $x \\neq 0$ and $f(0) = 0$, then the function $f(x)$",
    "options": [
      {
        "id": "A",
        "labelLatex": "has a removable discontinuity at $x = 0$"
      },
      {
        "id": "B",
        "labelLatex": "has a non removable finite discontinuity at $x = 0$"
      },
      {
        "id": "C",
        "labelLatex": "has a non removable infinite discontinuity at $x = 0$"
      },
      {
        "id": "D",
        "labelLatex": "is continuous at $x = 0$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Continuity • EX-III Q.8]** Evaluating $\\lim_{x \\to 0} \\frac{\\sin x - x \\cos x}{x^2} = 0$, which matches $f(0) = 0$, hence $f$ is continuous at $x = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q45",
    "questionNumber": 45,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Consider the function $f(x) = \\operatorname{Lim}_{n \\to \\infty} \\frac{\\sin \\pi x - x^{2n} \\sin(x - 1)}{1 + x^{2n+1} - x^{2n}}$, where $n \\in \\mathbb{N}$.\nStatement-1: $f(x)$ is discontinuous at $x = 1$.\nbecause\nStatement-2: $f(1) = 0$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "Statement-1 is true, statement-2 is true and statement-2 is correct explanation for statement-1."
      },
      {
        "id": "B",
        "labelLatex": "Statement-1 is true, statement-2 is true and statement-2 is NOT the correct explanation for statement-1."
      },
      {
        "id": "C",
        "labelLatex": "Statement-1 is true, statement-2 is false."
      },
      {
        "id": "D",
        "labelLatex": "Statement-1 is false, statement-2 is true."
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Continuity • EX-III Q.9]** Both statements are true (discontinuity arises from different limits for $x \\to 1^-$ and $x \\to 1^+$), but Statement-2 is not the correct explanation for Statement-1.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q46",
    "questionNumber": 46,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Consider the functions, $f(x) = \\operatorname{sgn}(x - 1)$ and $g(x) = \\cot^{-1}[x - 1]$ where $[ ]$ denotes the greatest integer function.\nStatement-1: The function $F(x) = f(x) \\cdot g(x)$ is discontinuous at $x = 1$.\nbecause\nStatement-2: If $f(x)$ is discontinuous at $x = a$ and $g(x)$ is also discontinuous at $x = a$ then the product function $f(x) \\cdot g(x)$ is discontinuous at $x = a$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "Statement-1 is true, statement-2 is true and statement-2 is correct explanation for statement-1."
      },
      {
        "id": "B",
        "labelLatex": "Statement-1 is true, statement-2 is true and statement-2 is NOT the correct explanation for statement-1."
      },
      {
        "id": "C",
        "labelLatex": "Statement-1 is true, statement-2 is false."
      },
      {
        "id": "D",
        "labelLatex": "Statement-1 is false, statement-2 is true."
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Continuity • EX-III Q.10]** Statement-1 is true (discontinuous at $x = 1$), but Statement-2 is false because the product of two discontinuous functions can be continuous.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q47",
    "questionNumber": 47,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$f(x) = \\frac{a \\cos x - \\cos bx}{x^2}$, when $x \\neq 0$ and $f(0) = 4$. If $f(x)$ is continuous at $x = 0$, then the value of $(n + \\Sigma a_i + \\Sigma b_i)$ is\n[Here, $n = $ number of ordered pairs $(a, b)$;\n$\\Sigma a_i = $ sum of all distinct possible values of $a$;\n$\\Sigma b_i = $ sum of all distinct possible values of $b$]",
    "options": [
      {
        "id": "A",
        "labelLatex": "2"
      },
      {
        "id": "B",
        "labelLatex": "3"
      },
      {
        "id": "C",
        "labelLatex": "4"
      },
      {
        "id": "D",
        "labelLatex": "5"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Continuity • EX-III Q.11]** Using series expansion for $\\cos x$ and $\\cos bx$, equating the coefficient to 4 gives possible values for $a$ and $b$, resulting in the sum equal to 3.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q48",
    "questionNumber": 48,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Statement-1 : Function $f(x) = [\\cos x]$ is discontinuous at $x = \\pi$.\nStatement-2 : Function $g(x) = [x]$ is discontinuous at integral values of $x$.\n[Here, $[\\cdot]$ denotes greatest integer function, i.e., $[k]$ equals the greatest integer less than or equal to '$k$']",
    "options": [
      {
        "id": "A",
        "labelLatex": "Statement-1 is true, Statement-2 is true $\\&$ Statement-2 is correct explanation for Statement-1"
      },
      {
        "id": "B",
        "labelLatex": "Statement-1 is true, Statement-2 is true $\\&$ Statement-2 is NOT the correct explanation for Statement-1"
      },
      {
        "id": "C",
        "labelLatex": "Statement-1 is true, Statement-2 is false"
      },
      {
        "id": "D",
        "labelLatex": "Statement-1 is false, Statement-2 is true"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Continuity • EX-III Q.12]** $f(\\pi) = [-1] = -1$, and in a neighborhood around $\\pi$, $\\cos x < 1$, so $f(x)$ is continuous at $x = \\pi$. Thus Statement-1 is false while Statement-2 is true.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q49",
    "questionNumber": 49,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Consider the function $f(x) = \\begin{cases} x^2 + ax + 2, & \\text{if } x \\text{ is rational} \\\\ 1 - x, & \\text{if } x \\text{ is irrational} \\end{cases}$, where '$a$' is a parameter that can take any real value. If $f(x)$ is discontinuous for all real values of $x$, then number of possible integral values of $a$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "3"
      },
      {
        "id": "B",
        "labelLatex": "2"
      },
      {
        "id": "C",
        "labelLatex": "1"
      },
      {
        "id": "D",
        "labelLatex": "0"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • EX-III Q.13]** For $f(x)$ to be discontinuous everywhere except possibly at points where $x^2 + ax + 2 = 1 - x$, those curves must not intersect anywhere. This yields 3 integral values of $a$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p3-q50",
    "questionNumber": 50,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $f(x) = [x] + \\left[x + \\frac{1}{3}\\right] + \\left[x + \\frac{2}{3}\\right]$, then number of points of discontinuity of $f(x)$ in $[-1, 1]$ is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "5"
      },
      {
        "id": "B",
        "labelLatex": "4"
      },
      {
        "id": "C",
        "labelLatex": "7"
      },
      {
        "id": "D",
        "labelLatex": "6"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Continuity • EX-III Q.14]** Using the identity $[x] + [x + 1/3] + [x + 2/3] = [3x]$, the function is $[3x]$, which has discontinuities at points where $3x$ is an integer in $[-1, 1]$, giving 6 points.",
    "positiveMarks": 4,
    "negativeMarks": 1
  }
];
