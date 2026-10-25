import { Question } from '../types/exam';

export const LIMIT_CONT_DIFF_PART_4_QUESTIONS: Question[] = [
  {
    "id": "lcd-p4-q1",
    "questionNumber": 1,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $f(x) = \\operatorname{sgn}(\\sin^2 x - \\sin x - 1)$ has exactly four points of discontinuity for $x \\in (0, n\\pi)$, $n \\in \\mathbb{N}$, then\n(A) the minimum possible value of $n$ is 5\n(B) the maximum possible value of $n$ is 6\n(C) there are exactly two possible values of $n$\n(D) None of these",
    "options": [
      {
        "id": "A",
        "labelLatex": "the minimum possible value of $n$ is 5"
      },
      {
        "id": "B",
        "labelLatex": "the maximum possible value of $n$ is 6"
      },
      {
        "id": "C",
        "labelLatex": "there are exactly two possible values of $n$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Continuity • EX-III Q.15]** Analyzing roots of $\\sin^2 x - \\sin x - 1 = 0$ in each interval $\\pi$, we find valid integer values for $n$ to be 4 and 5 (or exactly two possible values).",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q2",
    "questionNumber": 2,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x) = \\frac{1-\\tan x}{4x-\\pi}, x \\neq \\frac{\\pi}{4}, x \\in \\left[0, \\frac{\\pi}{2}\\right]$. If $f(x)$ is continuous in $\\left[0, \\frac{\\pi}{2}\\right]$, then $f\\left(\\frac{\\pi}{4}\\right)$ is-",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{1}{2}$"
      },
      {
        "id": "C",
        "labelLatex": "$-\\frac{1}{2}$"
      },
      {
        "id": "D",
        "labelLatex": "$-1$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Continuity • EX-IV Q.1]** Evaluate the limit as $x \\to \\frac{\\pi}{4}$ using substitution $x = \\frac{\\pi}{4} + h$ to get $-\\frac{1}{2}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q3",
    "questionNumber": 3,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The function $f: \\mathbb{R}-\\{0\\} \\to \\mathbb{R}$ given by $f(x) = \\frac{1}{x} - \\frac{2}{e^{2x}-1}$ can be made continuous at $x = 0$ by defining $f(0)$ as",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2$"
      },
      {
        "id": "B",
        "labelLatex": "$-1$"
      },
      {
        "id": "C",
        "labelLatex": "$0$"
      },
      {
        "id": "D",
        "labelLatex": "$1$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Continuity • EX-IV Q.2]** Taking the limit as $x \\to 0$, we get $\\lim_{x \\to 0} \\left(\\frac{1}{x} - \\frac{2}{e^{2x}-1}\\right) = 1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q4",
    "questionNumber": 4,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The value of $p$ and $q$ for which the function $f(x) = \\begin{cases} \\frac{\\sin(p+1)x + \\sin x}{x} & x < 0 \\\\ q & x = 0 \\\\ \\frac{\\sqrt{x+x^2} - \\sqrt{x}}{x^{3/2}} & x > 0 \\end{cases}$ is continuous for all $x \\in \\mathbb{R}$, are :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$p = \\frac{1}{2}, q = \\frac{3}{2}$"
      },
      {
        "id": "B",
        "labelLatex": "$p = \\frac{1}{2}, q = -\\frac{3}{2}$"
      },
      {
        "id": "C",
        "labelLatex": "$p = \\frac{5}{2}, q = \\frac{1}{2}$"
      },
      {
        "id": "D",
        "labelLatex": "$p = -\\frac{3}{2}, q = \\frac{1}{2}$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Continuity • EX-IV Q.3]** Equating left-hand limit and right-hand limit to $q$, we find $p = -\\frac{3}{2}$ and $q = \\frac{1}{2}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q5",
    "questionNumber": 5,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $f: \\mathbb{R} \\to \\mathbb{R}$ is a function defined by $f(x) = [x]\\cos\\left(\\frac{2x-1}{2}\\right)\\pi$, where $[x]$ denotes the greatest integer function, then $f$ is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "continuous for every real x."
      },
      {
        "id": "B",
        "labelLatex": "discontinuous only at $x = 0$"
      },
      {
        "id": "C",
        "labelLatex": "discontinuous only at non-zero integral values of $x$."
      },
      {
        "id": "D",
        "labelLatex": "continuous only at $x = 0$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • EX-IV Q.4]** At integers $x = n$, $[x]$ jumps, but $\\cos\\left(\\frac{2n-1}{2}\\right)\\pi = 0$, making the function continuous everywhere.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q6",
    "questionNumber": 6,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x) = \\begin{cases} (x-1)^{\\frac{1}{2-x}} &, x > 1, x \\neq 2 \\\\ k &, x = 2 \\end{cases}$ The value of $k$ for which $f$ is continuous at $x = 2$ is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1$"
      },
      {
        "id": "B",
        "labelLatex": "$e$"
      },
      {
        "id": "C",
        "labelLatex": "$e^{-1}$"
      },
      {
        "id": "D",
        "labelLatex": "$e^{-2}$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Continuity • EX-IV Q.5]** Evaluate $\\lim_{x \\to 2} (x-1)^{\\frac{1}{2-x}} = e^{\\lim_{x \\to 2} \\frac{x-2}{2-x}} = e^{-1}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q7",
    "questionNumber": 7,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the function $f$ defined as $f(x) = \\frac{1}{x} - \\frac{k-1}{e^{2x}-1}, x \\neq 0$, is continuous at $x = 0$, then the ordered pair $(k, f(0))$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "$(2, 1)$"
      },
      {
        "id": "B",
        "labelLatex": "$(3, 1)$"
      },
      {
        "id": "C",
        "labelLatex": "$\\left(\\frac{1}{3}, 2\\right)$"
      },
      {
        "id": "D",
        "labelLatex": "$(3, 2)$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Continuity • EX-IV Q.6]** For the limit to exist finitely as $x \\to 0$, the numerator must vanish at $x=0$, giving $k=3$ and $f(0) = 1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q8",
    "questionNumber": 8,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The function $f(x) = [x]^2 - [x^2]$ (where $[y]$ is the greatest integer less than or equal to $y$), is discontinuous at :",
    "options": [
      {
        "id": "A",
        "labelLatex": "all integers"
      },
      {
        "id": "B",
        "labelLatex": "all integers except $0 \\& 1$"
      },
      {
        "id": "C",
        "labelLatex": "all integers except $0$"
      },
      {
        "id": "D",
        "labelLatex": "all integers except $1$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Continuity • EX-V Q.1]** Testing continuity at integers shows that $f(x)$ is continuous at $x=1$ and discontinuous at all other integers.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q9",
    "questionNumber": 9,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Determine the constants $a, b \\& c$ for which the function $f(x) = \\begin{cases} (1+ax)^{1/x} & \\text{for } x < 0 \\\\ b & \\text{for } x = 0 \\\\ \\frac{(x+c)^{1/3}-1}{(x+1)^{1/2}-1} & \\text{for } x > 0 \\end{cases}$ is continuous at $x = 0$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a = \\frac{2}{3}, b = \\frac{2}{3}, c = 1$"
      },
      {
        "id": "B",
        "labelLatex": "$a = 1, b = 2, c = 0$"
      },
      {
        "id": "C",
        "labelLatex": "$a = \\frac{1}{3}, b = \\frac{1}{3}, c = 2$"
      },
      {
        "id": "D",
        "labelLatex": "$a = 2, b = 1, c = 1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • EX-V Q.2]** Using left-hand limit $e^a$ and evaluating right-hand limit gives $a = 2/3, b = 2/3, c = 1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q10",
    "questionNumber": 10,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Discuss the continuity of the function $f(x) = \\begin{cases} \\frac{e^{1/(x-1)}-2}{e^{1/(x-1)}+2} & x \\neq 1 \\\\ 1 & x = 1 \\end{cases}$ at $x = 1$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "Discontinuous at $x = 1; f(1^+) = 1 \\text{ and } f(1^-) = -1$"
      },
      {
        "id": "B",
        "labelLatex": "Continuous at $x = 1$"
      },
      {
        "id": "C",
        "labelLatex": "Discontinuous at $x = 1; f(1^+) = -1 \\text{ and } f(1^-) = 1$"
      },
      {
        "id": "D",
        "labelLatex": "Discontinuous with removable discontinuity at $x = 1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Continuity • EX-V Q.3]** Evaluating one-sided limits at $x=1$ yields $f(1^+) = 1$ and $f(1^-) = -1$, hence discontinuous.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q11",
    "questionNumber": 11,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "For every integer $n$, let $a_n$ and $b_n$ be real numbers. Let function $f: \\mathbb{R} \\to \\mathbb{R}$ be given by $f(x) = \\begin{cases} a_n + \\sin \\pi x, & \\text{for } x \\in [2n, 2n+1] \\\\ b_n + \\cos \\pi x, & \\text{for } x \\in (2n-1, 2n) \\end{cases}$, for all integers $n$. If $f$ is continuous, then which of the following hold(s) for all $n$ ?",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a_{n-1} - b_{n-1} = 0$"
      },
      {
        "id": "B",
        "labelLatex": "$a_n - b_n = 1$"
      },
      {
        "id": "C",
        "labelLatex": "$a_n - b_{n+1} = 1$"
      },
      {
        "id": "D",
        "labelLatex": "$a_{n-1} - b_n = -1$"
      }
    ],
    "correctAnswer": "B, D",
    "explanationLatex": "**[Continuity • EX-V Q.4]** Applying continuity conditions at boundary points $x = 2n$ gives relations $a_n - b_n = 1$ and $a_{n-1} - b_n = -1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q12",
    "questionNumber": 12,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "For every pair of continuous functions $f, g: [0, 1] \\to \\mathbb{R}$, such that $\\max\\{f(x) : x \\in [0, 1]\\} = \\max\\{g(x) : x \\in [0, 1]\\}$, the correct statement(s) is(are) :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$(f(c))^2 + 3f(c) = (g(c))^2 + 3g(c) \\text{ for some } c \\in [0, 1]$"
      },
      {
        "id": "B",
        "labelLatex": "$(f(c))^2 + f(c) = (g(c))^2 + 3g(c) \\text{ for some } c \\in [0, 1]$"
      },
      {
        "id": "C",
        "labelLatex": "$(f(c))^2 + 3f(c) = (g(c))^2 + g(c) \\text{ for some } c \\in [0, 1]$"
      },
      {
        "id": "D",
        "labelLatex": "$(f(c))^2 = (g(c))^2 \\text{ for some } c \\in [0, 1]$"
      }
    ],
    "correctAnswer": "A, D",
    "explanationLatex": "**[Continuity • EX-V Q.5]** By applying the Extreme Value Theorem and Intermediate Value Property on the functions, options (A) and (D) are satisfied for some $c \\in [0,1]$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q13",
    "questionNumber": 13,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let $[x]$ be the greatest integer less than or equal to $x$. Then, at which of the following point(s) the function $f(x) = x \\cos(\\pi(x + [x]))$ is discontinuous?",
    "options": [
      {
        "id": "A",
        "labelLatex": "$x = 1$"
      },
      {
        "id": "B",
        "labelLatex": "$x = -1$"
      },
      {
        "id": "C",
        "labelLatex": "$x = 0$"
      },
      {
        "id": "D",
        "labelLatex": "$x = 2$"
      }
    ],
    "correctAnswer": "A, B, D",
    "explanationLatex": "**[Continuity • EX-V Q.6]** The function has discontinuities at non-zero integers where $[x]$ has jump discontinuities, specifically at $x = \\pm 1, 2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q14",
    "questionNumber": 14,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Discuss the continuity & differentiability of the function $f(x) = \\sin x + \\sin |x| \\ , \\ x \\in \\mathbb{R}$. Draw a rough sketch of the graph of $f(x)$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f(x)$ is continuous but not derivable at $x = 0$"
      },
      {
        "id": "B",
        "labelLatex": "$f(x)$ is discontinuous at $x = 0$"
      },
      {
        "id": "C",
        "labelLatex": "$f(x)$ is everywhere derivable"
      },
      {
        "id": "D",
        "labelLatex": "$f(x)$ is neither continuous nor derivable at $x = 0$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • PT-1 Q.1]** For $x < 0$, $f(x) = \\sin x - \\sin x = 0$, and for $x \\ge 0$, $f(x) = 2\\sin x$, making it continuous everywhere but not differentiable at $x = 0$ due to a sharp corner.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q15",
    "questionNumber": 15,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Examine the continuity and differentiability of $f(x) = |x| + |x - 1| + |x - 2| \\ , \\ x \\in \\mathbb{R}$. Also draw the graph of $f(x)$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "continuous $\\forall\\ x \\in \\mathbb{R}$, not derivable at $x = 0, 1$ & $2$"
      },
      {
        "id": "B",
        "labelLatex": "discontinuous at $x = 0, 1, 2$"
      },
      {
        "id": "C",
        "labelLatex": "continuous $\\forall\\ x \\in \\mathbb{R}$, derivable everywhere"
      },
      {
        "id": "D",
        "labelLatex": "not continuous at $x = 1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • PT-1 Q.2]** The function is a sum of absolute value functions, which are continuous everywhere and fail to be differentiable at their critical points $x = 0, 1, 2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q16",
    "questionNumber": 16,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "A function $f$ is defined as follows : $f(x) = \\begin{cases} 1 & \\text{for} & -\\infty < x < 0 \\\\ 1 + |\\sin x| & \\text{for} & 0 \\le x < \\frac{\\pi}{2} \\\\ 2 + \\left(x-\\frac{\\pi}{2}\\right)^2 & \\text{for} & \\frac{\\pi}{2} \\le x < +\\infty \\end{cases}$. Discuss the continuity & differentiability at $x = 0$ & $x = \\pi/2$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "continuous but not derivable at $x = 0$; derivable & continuous at $x = \\pi/2$"
      },
      {
        "id": "B",
        "labelLatex": "discontinuous at $x = 0$ and $x = \\pi/2$"
      },
      {
        "id": "C",
        "labelLatex": "derivable at both $x = 0$ and $x = \\pi/2$"
      },
      {
        "id": "D",
        "labelLatex": "continuous but not derivable at both points"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • PT-1 Q.3]** At $x = 0$, left limit is $1$ and right limit is $1$, but $f'(0^+) = \\cos(0) = 1$ while $f'(0^-) = 0$. At $x = \\pi/2$, both limits and derivatives match.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q17",
    "questionNumber": 17,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Examine the origin for continuity & derrivability in the case of the function f defined by $f(x) = x \\tan^{-1}(1/x) \\ , \\ x \\neq 0$ and $f(0) = 0$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "continuous but not derivable at $x = 0$"
      },
      {
        "id": "B",
        "labelLatex": "discontinuous at $x = 0$"
      },
      {
        "id": "C",
        "labelLatex": "derivable at $x = 0$"
      },
      {
        "id": "D",
        "labelLatex": "neither continuous nor derivable at $x = 0$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • PT-1 Q.4]** Limit as $x \\to 0$ of $x \\tan^{-1}(1/x)$ is $0$, hence continuous. The derivative limit oscillates between $-\\pi/2$ and $\\pi/2$, so it is not derivable at $x = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q18",
    "questionNumber": 18,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Discuss the continuity & the derivability of 'f' where f(x) = degree of $(u^2 + u^2 + 2u - 3)$ at $x = \\sqrt{2}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "continuous but not derivable at $x = \\sqrt{2}$"
      },
      {
        "id": "B",
        "labelLatex": "discontinuous at $x = \\sqrt{2}$"
      },
      {
        "id": "C",
        "labelLatex": "derivable at $x = \\sqrt{2}$"
      },
      {
        "id": "D",
        "labelLatex": "none of these"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • PT-1 Q.5]** The function involves greatest integer or fractional limits resulting in continuity with a sharp change in slope at $\\sqrt{2}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q19",
    "questionNumber": 19,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If f(x) is derivable at $x = 3$ & $f'(3) = 2$, then $\\lim_{h \\to 0} \\frac{f(3+h^2) - f(3-h^2)}{2h^2} = \\rule{1cm}{0.15mm}$.",
    "correctAnswer": "2",
    "explanationLatex": "**[Differentiability • PT-1 Q.6]** Using L'Hopital's rule or definition of derivative: $\\lim_{h\\to0} \\frac{f'(3+h^2)(2h) - f'(3-h^2)(-2h)}{4h} = \\frac{2f'(3) + 2f'(3)}{4} = f'(3) = 2$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p4-q20",
    "questionNumber": 20,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $f(x) = |\\sin x|$ & $g(x) = x^3$ then f[g(x)] is $\\rule{1cm}{0.15mm}$ & $\\rule{1cm}{0.15mm}$ at $x = 0$. (State continuity and derivability)",
    "options": [
      {
        "id": "A",
        "labelLatex": "continuous & derivable"
      },
      {
        "id": "B",
        "labelLatex": "discontinuous & not derivable"
      },
      {
        "id": "C",
        "labelLatex": "continuous & not derivable"
      },
      {
        "id": "D",
        "labelLatex": "discontinuous & derivable"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • PT-1 Q.7]** $f(g(x)) = |\\sin(x^3)|$, whose derivative at $x=0$ evaluates to $0$, making it both continuous and derivable.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q21",
    "questionNumber": 21,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let f(x) be a function satisfying the condition $f(-x) = f(x)$ for all real x. If $f'(0)$ exists, then its value is $\\rule{1cm}{0.15mm}$.",
    "correctAnswer": "0",
    "explanationLatex": "**[Differentiability • PT-1 Q.8]** Since $f(x)$ is an even function, $f'(x)$ is an odd function, so $f'(0) = -f'(0) \\implies 2f'(0) = 0 \\implies f'(0) = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p4-q22",
    "questionNumber": 22,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "For the function $f(x) = \\begin{cases} \\frac{x}{1 + e^{1/x}} \\ , & x \\neq 0 \\\\ 0 \\ , & x = 0 \\end{cases}$, the derivative from the right, $f'(0^+) = \\rule{1cm}{0.15mm}$ & the derivative from the left, $f'(0^-) = \\rule{1cm}{0.15mm}$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f'(0^+) = 0$, $f'(0^-) = 1$"
      },
      {
        "id": "B",
        "labelLatex": "$f'(0^+) = 1$, $f'(0^-) = 0$"
      },
      {
        "id": "C",
        "labelLatex": "$f'(0^+) = 1$, $f'(0^-) = 1$"
      },
      {
        "id": "D",
        "labelLatex": "$f'(0^+) = 0$, $f'(0^-) = 0$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • PT-1 Q.9]** Right hand limit of difference quotient gives $0$ and left hand limit gives $1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q23",
    "questionNumber": 23,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "The number of points at which the function $f(x) = \\max. \\{a-x, a+x, b\\} \\ , -\\infty < x < \\infty \\ , 0 < a < b$ cannot be differentiable is $\\rule{1cm}{0.15mm}$.",
    "correctAnswer": "2",
    "explanationLatex": "**[Differentiability • PT-1 Q.10]** The function intersects at two distinct points where the active maximum branch changes, leading to exactly 2 non-differentiable points.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p4-q24",
    "questionNumber": 24,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Given a differentiable function $f(x)$ defined for all real x, and is such that $f(x+h) - f(x) \\le 6h^2$ for all real $h$ and $x$. Show that $f(x)$ is constant.",
    "options": [
      {
        "id": "A",
        "labelLatex": "f is constant"
      },
      {
        "id": "B",
        "labelLatex": "f is linear"
      },
      {
        "id": "C",
        "labelLatex": "f is periodic"
      },
      {
        "id": "D",
        "labelLatex": "f is zero everywhere"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-I Q.1]** Dividing by $h$ and taking limits gives $0 \\le f'(x) \\le 0$, hence $f'(x) = 0$, meaning $f(x)$ is constant.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q25",
    "questionNumber": 25,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(0) = 0$ and $f'(0) = 1$. For a positive integer k, show that $\\lim_{x \\to 0} \\frac{1}{x} \\left(f(x) + f\\left(\\frac{x}{2}\\right) + \\dots + f\\left(\\frac{x}{k}\\right)\\right) = 1 + \\frac{1}{2} + \\frac{1}{3} + \\dots + \\frac{1}{k}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "The limit evaluates to the harmonic sum"
      },
      {
        "id": "B",
        "labelLatex": "The limit is zero"
      },
      {
        "id": "C",
        "labelLatex": "The limit diverges"
      },
      {
        "id": "D",
        "labelLatex": "The limit is 1"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-I Q.2]** Applying L'Hopital's rule or definition of derivative term by term yields $f'(0)(1 + 1/2 + \\dots + 1/k)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q26",
    "questionNumber": 26,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x) = xe^{-\\left(\\frac{1}{|x|} + \\frac{1}{x}\\right)} \\ , x \\neq 0 \\ ; f(0) = 0$. Test the continuity & differentiability at $x = 0$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "f is continuous but not derivable at x = 0"
      },
      {
        "id": "B",
        "labelLatex": "f is discontinuous at x = 0"
      },
      {
        "id": "C",
        "labelLatex": "f is derivable at x = 0"
      },
      {
        "id": "D",
        "labelLatex": "f is neither continuous nor derivable at x = 0"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-I Q.3]** Limit as $x \\to 0$ is $0$, but left and right derivatives do not match.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q27",
    "questionNumber": 27,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $f(x) = |x - 1| \\cdot ([x] - [-x])$, then find $f'(1^+)$ & $f'(1^-)$ where $[x]$ denotes greatest integer function.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f'(1^+) = 3$, $f'(1^-) = -1$"
      },
      {
        "id": "B",
        "labelLatex": "$f'(1^+) = 1$, $f'(1^-) = -3$"
      },
      {
        "id": "C",
        "labelLatex": "$f'(1^+) = 0$, $f'(1^-) = 0$"
      },
      {
        "id": "D",
        "labelLatex": "$f'(1^+) = 2$, $f'(1^-) = -2$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-I Q.4]** Evaluating right and left derivatives near $x = 1$ using the value of $[x] - [-x]$ yields $3$ and $-1$ respectively.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q28",
    "questionNumber": 28,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $f(x) = \\begin{cases} ax^2 - b & \\text{if} & |x| < 1 \\\\ -\\frac{1}{|x|} & \\text{if} & |x| \\ge 1 \\end{cases}$ is derivable at $x = 1$. Find the values of $a \\& \\ b$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a = 1/2$, $b = 3/2$"
      },
      {
        "id": "B",
        "labelLatex": "$a = 1$, $b = 1$"
      },
      {
        "id": "C",
        "labelLatex": "$a = 3/2$, $b = 1/2$"
      },
      {
        "id": "D",
        "labelLatex": "$a = 2$, $b = 1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-I Q.5]** Equating function values and derivatives at $x = 1$ gives $a - b = -1$ and $2a = 1$, solving to $a = 1/2, b = 3/2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q29",
    "questionNumber": 29,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Consider the functions $f(x) = x^2 - 2x$ and $g(x) = -|x|$ Statement-1: The composite function $F(x) = f(g(x))$ is not derivable at $x = 0$. because Statement-2: $F'(0^+) = 2$ and $F'(0^-) = -2$.",
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
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-I Q.6]** Both statements are correct and the left/right derivatives directly show non-differentiability at $x = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q30",
    "questionNumber": 30,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Select the correct alternative : (More than one are correct)\n$f(x) = |x|[x] \\text{ in } -1 \\le x \\le 2 \\ , \\text{ where } [x] \\text{ is greatest integer } \\le x \\text{ then } f(x) \\text{ is} :$",
    "options": [
      {
        "id": "A",
        "labelLatex": "continuous at $x = 0$"
      },
      {
        "id": "B",
        "labelLatex": "discontinuous $x = 0$"
      },
      {
        "id": "C",
        "labelLatex": "not differentiable at $x = 2$"
      },
      {
        "id": "D",
        "labelLatex": "differentiable at $x = 2$"
      }
    ],
    "correctAnswer": "A, C",
    "explanationLatex": "**[Differentiability • EX-I Q.7]** Check continuity and differentiability at integer boundaries using limits.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q31",
    "questionNumber": 31,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Select the correct alternative : (More than one are correct)\n$f(x) = 1 + x.[coxn] \\text{ in } 0 < x \\le \\pi/2 \\ , \\text{ where } [ ] \\text{ denotes greatest integer function then } ,$",
    "options": [
      {
        "id": "A",
        "labelLatex": "It is continuous in $0 < x < \\pi/2$"
      },
      {
        "id": "B",
        "labelLatex": "It is differentiable in $0 < x < \\pi/2$"
      },
      {
        "id": "C",
        "labelLatex": "Its maximum value is 2"
      },
      {
        "id": "D",
        "labelLatex": "It is not differentiable in $0 < x < \\pi/2$"
      }
    ],
    "correctAnswer": "A, B",
    "explanationLatex": "**[Differentiability • EX-I Q.8]** Within the interval, $[coxn]$ evaluates to a constant depending on the range of $x$, making it continuous and differentiable.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q32",
    "questionNumber": 32,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Select the correct alternative : (More than one are correct)\n$f(x) = (\\sin^{-1}x)^2 \\cdot \\cos(1/x) \\text{ if } x \\neq 0 \\ ; f(0) = 0 \\ , \\text{ f(x) is} :$",
    "options": [
      {
        "id": "A",
        "labelLatex": "continuous no where in $-1 \\le x \\le 1$"
      },
      {
        "id": "B",
        "labelLatex": "continuous every where in $-1 \\le x \\le 1$"
      },
      {
        "id": "C",
        "labelLatex": "differentiable no where in $-1 \\le x \\le 1$"
      },
      {
        "id": "D",
        "labelLatex": "differentiable everywhere in $-1 < x < 1$"
      }
    ],
    "correctAnswer": "B, D",
    "explanationLatex": "**[Differentiability • EX-I Q.9]** The bounded oscillatory term multiplied by a function squaring to zero at $0$ ensures continuity and differentiability on the open interval.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q33",
    "questionNumber": 33,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Select the correct alternative : (More than one are correct)\n$f(x) = |x| + |\\sin x| \\text{ in } \\left(-\\frac{\\pi}{2} , \\frac{\\pi}{2}\\right) \\text{. It is} :$",
    "options": [
      {
        "id": "A",
        "labelLatex": "Continuous no where"
      },
      {
        "id": "B",
        "labelLatex": "Continuous every where"
      },
      {
        "id": "C",
        "labelLatex": "Differentiable no where"
      },
      {
        "id": "D",
        "labelLatex": "Differentiable everywhere except at $x = 0$"
      }
    ],
    "correctAnswer": "B, D",
    "explanationLatex": "**[Differentiability • EX-I Q.10]** Sum of continuous absolute value functions is continuous everywhere and differentiable everywhere except at $x=0$ where there is a sharp corner.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q34",
    "questionNumber": 34,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Select the correct alternative : (More than one are correct)\nIf $f(x) = 2 + |\\sin^{-1}x| \\ , \\text{ it is} :$",
    "options": [
      {
        "id": "A",
        "labelLatex": "continuous no where"
      },
      {
        "id": "B",
        "labelLatex": "continuous everywhere in its domain"
      },
      {
        "id": "C",
        "labelLatex": "differentiable no where in its domain"
      },
      {
        "id": "D",
        "labelLatex": "Not differentiable at $x = 0$"
      }
    ],
    "correctAnswer": "B, D",
    "explanationLatex": "**[Differentiability • EX-I Q.11]** Domain is $[-1, 1]$. Continuous everywhere in domain, but has a sharp point at $x=0$ due to absolute value.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q35",
    "questionNumber": 35,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Select the correct alternative : (More than one are correct)\nIf $f(x) = x^2 \\cdot \\sin(1/x) \\ , x \\neq 0 \\text{ and } f(0) = 0 \\text{ then } ,$",
    "options": [
      {
        "id": "A",
        "labelLatex": "f(x) is continuous at $x = 0$"
      },
      {
        "id": "B",
        "labelLatex": "f(x) is derivable at $x = 0$"
      },
      {
        "id": "C",
        "labelLatex": "f'(x) is continuous at $x = 0$"
      },
      {
        "id": "D",
        "labelLatex": "f'(x) is not derivable at $x = 0$"
      }
    ],
    "correctAnswer": "A, B, D",
    "explanationLatex": "**[Differentiability • EX-I Q.12]** Standard properties of $x^2 \\sin(1/x)$ show continuity and differentiability at $0$, but derivative is not continuous at $0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q36",
    "questionNumber": 36,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Select the correct alternative : (More than one are correct)\nA function which is continuous & not differentiable at $x = 0$ is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f(x) = x \\text{ for } x < 0 \\ \\& \\ f(x) = x^2 \\text{ for } x \\ge 0$"
      },
      {
        "id": "B",
        "labelLatex": "$g(x) = x \\text{ for } x < 0 \\ \\& \\ g(x) = 2x \\text{ for } x \\ge 0$"
      },
      {
        "id": "C",
        "labelLatex": "$h(x) = x \\ | \\ x \\ | \\ , x \\in \\mathbb{R}$"
      },
      {
        "id": "D",
        "labelLatex": "$K(x) = 1 + | \\ x \\ | \\ , x \\in \\mathbb{R}$"
      }
    ],
    "correctAnswer": "A, B, D",
    "explanationLatex": "**[Differentiability • EX-I Q.13]** Options A, B, and D have mismatched left and right slopes at $x=0$ while remaining continuous.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q37",
    "questionNumber": 37,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Select the correct alternative : (More than one are correct)\nIf $\\sin^{-1}x + | \\ y \\ | = 2y \\text{ then } y \\text{ as a function of } x \\text{ is} :$",
    "options": [
      {
        "id": "A",
        "labelLatex": "defined for $-1 \\le x \\le 1$"
      },
      {
        "id": "B",
        "labelLatex": "continuous at $x = 0$"
      },
      {
        "id": "C",
        "labelLatex": "differentiable for all x"
      },
      {
        "id": "D",
        "labelLatex": "such that $\\frac{dy}{dx} = \\frac{1}{3\\sqrt{1-x^2}} \\text{ for } -1 < x < 0$"
      }
    ],
    "correctAnswer": "A, B, D",
    "explanationLatex": "**[Differentiability • EX-I Q.14]** Solving explicitly for $y$ in regions of $y>0$ and $y<0$ yields the specified domain and derivative properties.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q38",
    "questionNumber": 38,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Select the correct alternative : (More than one are correct)\nLet $f(x) = \\cos(x) \\ \\& \\ H(x) = \\begin{cases} \\operatorname{Min}[f(t) / 0 \\le t \\le x] & \\text{for } 0 \\le x \\le \\frac{\\pi}{2} \\\\ \\frac{\\pi}{2} - x & \\text{for } \\frac{\\pi}{2} < x \\le 3 \\end{cases} \\ , \\text{ then}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$H(x)$ is continuous & derivable in $[0, 3]$"
      },
      {
        "id": "B",
        "labelLatex": "$H(x)$ is continuous but not derivable at $x = \\pi/2$"
      },
      {
        "id": "C",
        "labelLatex": "$H(x)$ is neither continuous nor derivable at $x = \\pi/2$"
      },
      {
        "id": "D",
        "labelLatex": "Maximum value of $H(x)$ in $[0, 3]$ is 1"
      }
    ],
    "correctAnswer": "A, D",
    "explanationLatex": "**[Differentiability • EX-I Q.15]** Analyzing the minimum values of cosine on the intervals shows continuity and smoothness at the junction.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q39",
    "questionNumber": 39,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x)$ be defined in the interval $[-2, 2]$ such that $f(x) = \\begin{cases} -1 & , -2 \\le x \\le 0 \\\\ x - 1 & , \\ \\ 0 < x \\le 2 \\end{cases} \\ \\& \\ g(x) = f(|x|) + |f(x)|$. Test the differentiability of $g(x)$ in $(-2, 2)$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "not derivable at $x = 0$ & $x = 1$"
      },
      {
        "id": "B",
        "labelLatex": "derivable everywhere"
      },
      {
        "id": "C",
        "labelLatex": "discontinuous at $x = 0$"
      },
      {
        "id": "D",
        "labelLatex": "not derivable at $x = -1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-II Q.1]** Constructing $g(x)$ explicitly reveals corners/discontinuities leading to non-differentiability at $x = 0$ and $x = 1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q40",
    "questionNumber": 40,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Given $f(x) = \\cos^{-1}\\left(\\operatorname{sgn}\\left(\\frac{2[x]}{3x - [x]}\\right)\\right)$ where $\\operatorname{sgn}(.)$ denotes the signum function & $[.]$ denotes the greatest integer function. Discuss the continuity & differentiability of $f(x)$ at $x = \\pm 1$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "f is continuous & derivable at $x = -1$ but f is neither continuous nor derivable at $x = 1$"
      },
      {
        "id": "B",
        "labelLatex": "f is continuous and derivable at both points"
      },
      {
        "id": "C",
        "labelLatex": "f is discontinuous at both points"
      },
      {
        "id": "D",
        "labelLatex": "f is neither continuous nor derivable at both points"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-II Q.2]** Evaluating the function values and limits at $x = 1$ and $x = -1$ confirms continuity and differentiability at $-1$ and failure at $1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q41",
    "questionNumber": 41,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Examine for continuity & differentiability the points $x = 1 \\ \\& \\ x = 2$, the function $f$ defined by $f(x) = \\begin{cases} x[x] & , 0 \\le x < 2 \\\\ (x - 1)[x] & , 2 \\le x \\le 3 \\end{cases}$ where $[x]$ = greatest integer less than or equal to $x$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "discontinuous & not derivable at $x = 1$, continuous but not derivable at $x = 2$"
      },
      {
        "id": "B",
        "labelLatex": "continuous and derivable at both points"
      },
      {
        "id": "C",
        "labelLatex": "discontinuous at both points"
      },
      {
        "id": "D",
        "labelLatex": "continuous at $x=1$ and discontinuous at $x=2$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-II Q.3]** Check limits from left and right at $x = 1$ and $x = 2$ using the definition of $[x]$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q42",
    "questionNumber": 42,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x) = x \\cdot \\left(\\frac{e^{\\frac{[x] + |x| - 2}{[x] + |x|}}}{}\\right) \\ , x \\neq 0 \\ \\& \\ f(0) = -1$ where $[x]$ denotes greatest integer less than or equal to $x$. Test the differentiability of $f(x)$ at $x = 0$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "not derivable at $x = 0$"
      },
      {
        "id": "B",
        "labelLatex": "derivable at $x = 0$"
      },
      {
        "id": "C",
        "labelLatex": "discontinuous at $x = 0$"
      },
      {
        "id": "D",
        "labelLatex": "none of these"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-II Q.4]** The limit expression changes behavior across $0$, resulting in non-differentiability at $x = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q43",
    "questionNumber": 43,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Discuss the continuity & the derivability in $[0, 2]$ of $f(x) = \\begin{cases} |2x - 3|[x] & \\text{for } x \\ge 1 \\\\ \\sin \\frac{\\pi x}{2} & \\text{for } x < 1 \\end{cases}$ where [ ] denote greatest integer function .",
    "options": [
      {
        "id": "A",
        "labelLatex": "f is continuous at $x = 1, 3/2$ & discontinuous at $x = 2$, f is not derivable at $x = 1, 3/2, 2$"
      },
      {
        "id": "B",
        "labelLatex": "f is continuous everywhere"
      },
      {
        "id": "C",
        "labelLatex": "f is derivable everywhere"
      },
      {
        "id": "D",
        "labelLatex": "f is discontinuous everywhere"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-II Q.5]** Checking points of definition change and integer values reveals continuity at $1, 3/2$ and discontinuity at $2$, with non-differentiability at $1, 3/2, 2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q44",
    "questionNumber": 44,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $f(x) = -1 + |x - 1| \\ , -1 \\le x \\le 3 \\ ; g(x) = 2 - |x + 1| \\ , -2 \\le x \\le 2$, then calculate $(fog)(x) \\ \\& \\ (gof)(x)$. Draw their graph. Discuss the continuity of $(fog)(x)$ at $x = -1$ and the differentiability of $(gof)(x)$ at $x = 1$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$(\\text{fog})(x) = x+1 \\text{ for } -2 \\le x \\le -1, -(+1) \\dots$ and $(\\text{gof})(x)$ is not differentiable at $x = 1$"
      },
      {
        "id": "B",
        "labelLatex": "$(\\text{fog})(x)$ is discontinuous at $x = -1$"
      },
      {
        "id": "C",
        "labelLatex": "$(\\text{gof})(x)$ is differentiable at $x = 1$"
      },
      {
        "id": "D",
        "labelLatex": "none of these"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-II Q.6]** Combining the piecewise functions reveals the composite definitions and confirms continuity at $x=-1$ for fog and non-differentiability at $x=1$ for gof.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q45",
    "questionNumber": 45,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The function $f(x) = \\begin{cases} ax(x - 1) + b & \\text{when } x < 1 \\\\ x - 1 & \\text{when } 1 \\le x \\le 3 \\\\ px^2 + qx + 2 & \\text{when } x > 3 \\end{cases}$. Find the values of the constants a, b, p, q so that (i) $f(x)$ is continuous for all x (ii) $f'(1)$ does not exist (iii) $f'(x)$ is continuous at $x = 3$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a \\neq 1$, $b = 0$, $p = \\frac{1}{3}$ and $q = -1$"
      },
      {
        "id": "B",
        "labelLatex": "$a = 1$, $b = 1$, $p = 1$ and $q = 1$"
      },
      {
        "id": "C",
        "labelLatex": "$a = 0$, $b = 0$, $p = 0$ and $q = 0$"
      },
      {
        "id": "D",
        "labelLatex": "none of these"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-II Q.7]** Using continuity and differentiability conditions at boundary points $x=1$ and $x=3$ yields the required constants.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q46",
    "questionNumber": 46,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Examine the function , $f(x) = x \\cdot \\frac{a^{1/x} - a^{-1/x}}{a^{1/x} + a^{-1/x}} \\ , x \\neq 0 \\ (a > 0)$ and $f(0) = 0$ for continuity and existence of the derivative at the origin.",
    "options": [
      {
        "id": "A",
        "labelLatex": "If $a \\in (0, 1)$ $f'(0^+) = -1$; $f'(0^-) = 1 \\implies$ continuous but not derivable; $a = 1 \\implies$ continuous and derivable; If $a > 1 \\implies$ continuous but not derivable"
      },
      {
        "id": "B",
        "labelLatex": "Discontinuous for all $a$"
      },
      {
        "id": "C",
        "labelLatex": "Differentiable for all $a > 0$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-II Q.8]** Evaluating limits of the ratio based on whether $a < 1$, $a = 1$, or $a > 1$ gives the respective continuity and derivative properties.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q47",
    "questionNumber": 47,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Evaluate $f(x) = \\begin{cases} 1 - x & , (0 \\le x \\le 1) \\\\ x + 2 & , (1 < x < 2) \\\\ 4 - x & , (2 \\le x \\le 4) \\end{cases}$. Discuss the continuity & differentiability of $y = f[f(x)]$ for $0 \\le x \\le 4$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "f is continuous but not derivable at $x = 1$, discontinuous at $x = 2$ & $x = 3$. continuous & derivable at all other points"
      },
      {
        "id": "B",
        "labelLatex": "Continuous everywhere"
      },
      {
        "id": "C",
        "labelLatex": "Discontinuous everywhere"
      },
      {
        "id": "D",
        "labelLatex": "Differentiable everywhere"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-II Q.9]** Tracing the composite function $f(f(x))$ across subintervals reveals continuity breaks and corner points.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q48",
    "questionNumber": 48,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$f : \\mathbb{R} \\to \\mathbb{R}$ be a function satisfying $f(x + 2y) = f(x) + f(2y) + 4xy + e^x \\cdot e^{2y} - e^x - e^{2y} \\ \\forall \\ x, y \\in \\mathbb{R}$. If $f'(0) = 1$, find $f(x)$ in terms of $x$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f(x) = x^2 + e^x \\ \\forall\\ x \\in \\mathbb{R}$"
      },
      {
        "id": "B",
        "labelLatex": "$f(x) = x + e^x$"
      },
      {
        "id": "C",
        "labelLatex": "$f(x) = x^2 + e^{2x}$"
      },
      {
        "id": "D",
        "labelLatex": "$f(x) = 2x^2 + e^x$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-II Q.10]** Using functional equation techniques and partial differentiation with respect to $y$, we integrate to find $f(x) = x^2 + e^x$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q49",
    "questionNumber": 49,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x)$ be a function defined on $(-a, a)$ with $a > 0$. Assume that $f(x)$ is continuous at $x = 0$ and $\\lim_{x \\to 0} \\frac{f(x) - f(kx)}{x} = \\alpha$, where $k \\in (0, 1)$ then compute $f'(0^+)$ and $f'(0^-)$, and comment upon the differentiability of $f$ at $x = 0$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f'(0) = \\frac{\\alpha}{1-k}$"
      },
      {
        "id": "B",
        "labelLatex": "$f'(0) = \\alpha(1-k)$"
      },
      {
        "id": "C",
        "labelLatex": "$f'(0) = 0$"
      },
      {
        "id": "D",
        "labelLatex": "Does not exist"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-II Q.11]** Expanding the limit relation via telescoping or series expansion yields $f'(0) = \\frac{\\alpha}{1-k}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p4-q50",
    "questionNumber": 50,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Consider the function, $f(x) = \\begin{cases} x^2 \\left|\\cos \\frac{\\pi}{2x}\\right| & \\text{if } x \\neq 0 \\\\ 0 & \\text{if } x = 0 \\end{cases}$ (a) Show that $f'(0)$ exists and find its value (b) Show that $f'\\left(\\frac{1}{3}\\right)$ does not exist (c) For what values of $x$, $f'(x)$ fails to exist.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f'(0) = 0$, (b) $f'\\left(\\frac{1^-}{3}\\right) = -\\frac{\\pi}{2}$ and $f'\\left(\\frac{1^+}{3}\\right) = \\frac{\\pi}{2}$, (c) $x = \\frac{1}{2n+1}, n \\in I$"
      },
      {
        "id": "B",
        "labelLatex": "$f'(0) = 1$, (b) Exists, (c) None"
      },
      {
        "id": "C",
        "labelLatex": "Does not exist, (b) Exists, (c) Everywhere"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-II Q.12]** Applying first principle at $0$ gives $0$, left and right derivatives at $1/3$ differ, and non-differentiability occurs where the absolute value argument passes through zero.",
    "positiveMarks": 4,
    "negativeMarks": 1
  }
];
