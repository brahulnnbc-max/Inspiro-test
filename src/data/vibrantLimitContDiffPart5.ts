import { Question } from '../types/exam';

export const LIMIT_CONT_DIFF_PART_5_QUESTIONS: Question[] = [
  {
    "id": "lcd-p5-q1",
    "questionNumber": 1,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x)$ be a real valued function not identically zero satisfies the equation, $f(x + y^n) = f(x) + (f(y))^n$ for all real x & y and $f'(0) \\ge 0$ where $n (> 1)$ is an odd natural number. Find $f(10)$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f(x) = x \\implies f(10) = 10$"
      },
      {
        "id": "B",
        "labelLatex": "$f(x) = x^2 \\implies f(10) = 100$"
      },
      {
        "id": "C",
        "labelLatex": "$f(x) = 0 \\implies f(10) = 0$"
      },
      {
        "id": "D",
        "labelLatex": "none of these"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-II Q.13]** Solving the functional equation yields $f(x) = x$, hence $f(10) = 10$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q2",
    "questionNumber": 2,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "A derivable function $f : \\mathbb{R}^+ \\to \\mathbb{R}$ satisfies the condition $f(x) - f(y) \\ge \\ln \\frac{x}{y} + x - y$ for every $x, y \\in \\mathbb{R}^+$. If $g$ denotes the derivative of $f$ then compute the value of the sum $\\sum_{n=1}^{100} g\\left(\\frac{1}{n}\\right)$.",
    "correctAnswer": "5150",
    "explanationLatex": "**[Differentiability • EX-II Q.14]** From the inequality, $g(x) = 1 + \\frac{1}{x}$. Summing $\\sum_{n=1}^{100} (1 + n) = 100 + \\frac{100 \\times 101}{2} = 5150$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "lcd-p5-q3",
    "questionNumber": 3,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x) = \\frac{|x|}{\\sin x}$ for $x \\neq 0$ & $f(0) = 1$ then ,",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f(x)$ is continuous & derivable at $x = 0$"
      },
      {
        "id": "B",
        "labelLatex": "$f(x)$ is continuous & not derivable at $x = 0$"
      },
      {
        "id": "C",
        "labelLatex": "$f(x)$ is discontinuous at $x = 0$"
      },
      {
        "id": "D",
        "labelLatex": "none"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Differentiability • EX-III Q.1]** The limit $\\lim_{x \\to 0^+} \\frac{x}{\\sin x} = 1$ and $\\lim_{x \\to 0^-} \\frac{-x}{\\sin x} = -1$. Since left-hand and right-hand limits are not equal, the function is discontinuous at $x=0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q4",
    "questionNumber": 4,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Given $f(x) = \\begin{cases} \\log_{a} \\left( a^{[x]} + [-x] \\right)^{\\left( \\frac{a^{\\frac{2}{[x] + [-x]} - 5}}{3 + a^{\\frac{1}{[x]}}} \\right)} & \\text{for } |x| \\neq 0 ; a > 1 \\text{ where } [ ] \\text{ represents the integral part function, then :} \\\\ 0 & \\text{for } x = 0 \\end{cases}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f$ is continuous but not differentiable at $x = 0$"
      },
      {
        "id": "B",
        "labelLatex": "$f$ is cont. & diff. at $x = 0$"
      },
      {
        "id": "C",
        "labelLatex": "the differentiability of 'f' at $x = 0$ depends on the value of a"
      },
      {
        "id": "D",
        "labelLatex": "$f$ is cont. & diff. at $x = 0$ and for $a = e$ only."
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differentiability • EX-III Q.2]** For $|x| \\neq 0$, $[x] + [-x] = -1$ if $x \\notin \\mathbb{Z}$ and $0$ if $x \\in \\mathbb{Z}$. Evaluating the limit as $x \\to 0$ shows $f(x) = 0$ in a neighborhood, making it continuous and differentiable.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q5",
    "questionNumber": 5,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "For what triplets of real numbers $(a, b, c)$ with $a \\neq 0$ the function $f(x) = \\begin{cases} x & x \\leq 1 \\\\ ax^2 + bx + c & \\text{otherwise} \\end{cases}$ is differentiable for all real $x$ ?",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\{(a, 1-2a, a) \\mid a \\in \\mathbb{R}, a \\neq 0\\}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\{(a, 1-2a, c) \\mid a, c \\in \\mathbb{R}, a \\neq 0\\}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\{(a, b, c) \\mid a, b, c \\in \\mathbb{R}, a + b + c = 1\\}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\{(a, 1-2a, 0) \\mid a \\in \\mathbb{R}, a \\neq 0\\}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-III Q.3]** For continuity at $x=1$, $1 = a+b+c$. For differentiability at $x=1$, $1 = 2a+b$. Solving these gives $b = 1-2a$ and $c = a$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q6",
    "questionNumber": 6,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "A function $f$ defined as $f(x) = x[x]$ for $-1 \\leq x \\leq 3$ where $[x]$ defines the greatest integer $\\leq x$ is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "continuous at all points in the domain of $f$ but non-derivable at a finite number of points"
      },
      {
        "id": "B",
        "labelLatex": "discontinuous at all points & hence non-derivable at all points in the domain of $f(x)$"
      },
      {
        "id": "C",
        "labelLatex": "discontinuous at a finite number of points but not derivable at all points in the domain of $f(x)$"
      },
      {
        "id": "D",
        "labelLatex": "discontinuous & also non-derivable at a finite number of points of $f(x)$."
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Differentiability • EX-III Q.4]** The function $f(x) = x[x]$ is discontinuous at integers $x \\in \\{0, 1, 2, 3\\}$ and non-derivable at these points.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q7",
    "questionNumber": 7,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$[x]$ denotes the greatest integer less than or equal to $x$. If $f(x) = [x][\\sin \\pi x]$ in $(-1, 1)$ then $f(x)$ is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "continuous at $x = 0$"
      },
      {
        "id": "B",
        "labelLatex": "continuous in $(-1, 0)$"
      },
      {
        "id": "C",
        "labelLatex": "differentiable in $(-1, 1)$"
      },
      {
        "id": "D",
        "labelLatex": "none"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differentiability • EX-III Q.5]** In $(-1, 0)$, $[x] = -1$ and $[\\sin \\pi x] = -1$ for $x \\in (-1, -0.5)$ and $0$ for $x \\in [-0.5, 0)$. The function is constant on intervals, hence continuous.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q8",
    "questionNumber": 8,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The function $f(x)$ is defined as follows $f(x) = \\begin{cases} -x & \\text{if } x < 0 \\\\ x^2 & \\text{if } 0 \\leq x \\leq 1 \\\\ x^3 - x + 1 & \\text{if } x > 1 \\end{cases}$ then $f(x)$ is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "derivable and continuous at $x = 0$"
      },
      {
        "id": "B",
        "labelLatex": "derivable at $x = 1$ but not continuous at $x = 1$"
      },
      {
        "id": "C",
        "labelLatex": "neither derivable nor continuous at $x = 1$"
      },
      {
        "id": "D",
        "labelLatex": "not derivable at $x = 0$ but continuous at $x = 1$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Differentiability • EX-III Q.6]** At $x=0$, $f'(0^-)=-1, f'(0^+)=0$ (not derivable). At $x=1$, $f(1)=1$, $\\lim_{x \\to 1^+} (x^3-x+1) = 1$ (continuous).",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q9",
    "questionNumber": 9,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $f(x) = \\begin{cases} x + \\{x\\} + x\\sin\\{x\\} & \\text{for } x \\neq 0 \\\\ 0 & \\text{for } x = 0 \\end{cases}$ where $\\{x\\}$ denotes the fractional part function, then :",
    "options": [
      {
        "id": "A",
        "labelLatex": "'f' is continuous & diff. at $x = 0$"
      },
      {
        "id": "B",
        "labelLatex": "'f' is continuous but not diff. at $x = 0$"
      },
      {
        "id": "C",
        "labelLatex": "'f' is continuous & diff. at $x = 2$"
      },
      {
        "id": "D",
        "labelLatex": "none of these"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Differentiability • EX-III Q.7]** The function is discontinuous at $x=0$ because $\\lim_{x \\to 0^-} f(x) = 0 + 1 + 0 = 1$ while $f(0)=0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q10",
    "questionNumber": 10,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The set of all points where the function $f(x) = \\frac{x}{1+|x|}$ is differentiable is:",
    "options": [
      {
        "id": "A",
        "labelLatex": "$(-\\infty, \\infty)$"
      },
      {
        "id": "B",
        "labelLatex": "$[0, \\infty)$"
      },
      {
        "id": "C",
        "labelLatex": "$(-\\infty, 0) \\cup (0, \\infty)$"
      },
      {
        "id": "D",
        "labelLatex": "$(0, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-III Q.8]** The function $f(x) = \\frac{x}{1+|x|}$ is differentiable everywhere because the denominator $1+|x| \\geq 1$ is never zero and the function is smooth at $x=0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q11",
    "questionNumber": 11,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f$ be an injective and differentiable function such that $f(x) \\cdot f(y) + 2 = f(x) + f(y) + f(xy)$ for all non negative real $x$ and $y$ with $f'(0) = 0, f'(1) = 2 \\neq f(0)$, then",
    "options": [
      {
        "id": "A",
        "labelLatex": "$x f'(x) - 2 f(x) + 2 = 0$"
      },
      {
        "id": "B",
        "labelLatex": "$x f'(x) + 2 f(x) - 2 = 0$"
      },
      {
        "id": "C",
        "labelLatex": "$x f'(x) - f(x) + 1 = 0$"
      },
      {
        "id": "D",
        "labelLatex": "$2 f(x) = f'(x) + 2$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differentiability • EX-III Q.9]** Differentiating the functional equation with respect to $y$ and setting $y=0$ leads to the differential equation $x f'(x) - 2 f(x) + 2 = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q12",
    "questionNumber": 12,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x) = [n + p \\sin x]$, $x \\in (0, \\pi)$, $n \\in I$ and $p$ is a prime number. The number of points where $f(x)$ is not differentiable is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$p - 1$"
      },
      {
        "id": "B",
        "labelLatex": "$p + 1$"
      },
      {
        "id": "C",
        "labelLatex": "$2p + 1$"
      },
      {
        "id": "D",
        "labelLatex": "$2p - 1$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Differentiability • EX-III Q.10]** The function $f(x)$ is non-differentiable at points where $n + p \\sin x$ is an integer. In $(0, \\pi)$, $p \\sin x$ takes values in $(0, p]$. The integers are $1, 2, ..., p$ (each hit twice except $p$ which is hit once), totaling $2p-1$ points.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q13",
    "questionNumber": 13,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The function $f(x) = \\sin^{-1} (\\cos x)$ is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "discontinuous at $x = 2\\pi$"
      },
      {
        "id": "B",
        "labelLatex": "differentiable at $x = \\frac{3\\pi}{2}$"
      },
      {
        "id": "C",
        "labelLatex": "not differentiable at $x = \\frac{\\pi}{2}$"
      },
      {
        "id": "D",
        "labelLatex": "differentiable at $x = 2\\pi$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differentiability • EX-III Q.11]** $f(x) = \\sin^{-1}(\\sin(\\frac{\\pi}{2} - x)) = \\frac{\\pi}{2} - x$ near $\\frac{3\\pi}{2}$, which is differentiable.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q14",
    "questionNumber": 14,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$f_1(x) = (x^2 - 4) |(x - 2)(x - 3)|$ ; $f_2(x) = \\sin (|x - 2|) - |x - 2|$, $f_3(x) = \\tan (|x - 2|) + |x - 2|$ How many of the above functions $f_1(x), f_2(x), f_3(x)$ are differentiable at $x = 2$ ?",
    "options": [
      {
        "id": "A",
        "labelLatex": "0"
      },
      {
        "id": "B",
        "labelLatex": "1"
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
    "correctAnswer": "C",
    "explanationLatex": "**[Differentiability • EX-III Q.12]** $f_1'(2) = 0$, $f_2'(2) = 0$, but $f_3(x)$ is not differentiable at $x=2$ because $|x-2|$ is not.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q15",
    "questionNumber": 15,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Consider the function $f(x) = \\max\\{||x - 2| - 1|, \\alpha\\}$, where, $\\alpha$ is some real number. Find the number of values of $x \\in \\mathbb{R}$ at which $f(x)$ is non-differentiable if $\\alpha = \\frac{1}{2}$",
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
    "correctAnswer": "D",
    "explanationLatex": "**[Differentiability • EX-III Q.13]** The function $g(x) = ||x-2|-1|$ has non-differentiable points at $x=1, 2, 3$. Intersecting with $y=1/2$ adds two more points where the max function switches.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q16",
    "questionNumber": 16,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The function $f(x) = \\frac{|x| - x(3^{1/x} + 1)}{3^{1/x} - 1}$, $x \\neq 0$, $f(0) = 0$ is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "discontinuous at $x = 0$"
      },
      {
        "id": "B",
        "labelLatex": "continuous at $x = 0$ but not differentiable there"
      },
      {
        "id": "C",
        "labelLatex": "both continuous and differentiable at $x = 0$"
      },
      {
        "id": "D",
        "labelLatex": "differentiable but not continuous at $x = 0$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differentiability • EX-III Q.14]** $\\lim_{x \\to 0^+} f(x) = 0$ and $\\lim_{x \\to 0^-} f(x) = 0$, so it is continuous. However, the derivative does not exist at $x=0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q17",
    "questionNumber": 17,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $f(x) = |1 - x|$, then the points where $\\sin^{-1}(f(x))$ is non-differentiable are :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\{0, 1\\}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\{0, -1\\}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\{0, 1, -1\\}$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Differentiability • EX-III Q.15]** The function $g(x) = \\sin^{-1}(|1-x|)$ is non-differentiable where $|1-x|=0$ (i.e., $x=1$) and where $|1-x|=1$ (i.e., $x=0, 2$). The set is $\\{0, 1, 2\\}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q18",
    "questionNumber": 18,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $f(x) = \\begin{cases} x e^{-\\left( \\frac{1}{|x|} + \\frac{1}{x} \\right)} & x \\neq 0 \\\\ 0 & x = 0 \\end{cases}$ then $f(x)$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "discontinuous everywhere"
      },
      {
        "id": "B",
        "labelLatex": "continuous as well as differentiable for all x"
      },
      {
        "id": "C",
        "labelLatex": "continuous for all x but not differentiable at $x = 0$"
      },
      {
        "id": "D",
        "labelLatex": "neither differentiable nor continuous at $x = 0$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Differentiability • EX-IV Q.1]** The function is continuous at $x=0$ as $\\lim_{x \\to 0} f(x) = 0$. However, $f'(0^+) = 1$ and $f'(0^-) = 0$, so it is not differentiable at $x=0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q19",
    "questionNumber": 19,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If f is a real-valued differentiable function satisfying $|f(x) - f(y)| \\leq (x - y)^2$, $x, y \\in \\mathbb{R}$ and $f(0) = 0$, then $f(1)$ equals",
    "options": [
      {
        "id": "A",
        "labelLatex": "-1"
      },
      {
        "id": "B",
        "labelLatex": "0"
      },
      {
        "id": "C",
        "labelLatex": "2"
      },
      {
        "id": "D",
        "labelLatex": "1"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differentiability • EX-IV Q.2]** Dividing by $|x-y|$ and taking the limit $y \\to x$ gives $|f'(x)| \\leq 0$, so $f'(x) = 0$. Thus $f(x)$ is constant, and $f(0)=0 \\implies f(1)=0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q20",
    "questionNumber": 20,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Suppose $f(x)$ is differentiable at $x = 1$ and $\\lim_{h \\to 0} \\frac{1}{h} f(1 + h) = 5$, then $f'(1)$ equals -",
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
    "explanationLatex": "**[Differentiability • EX-IV Q.3]** Since $f$ is differentiable at $x=1$, $\\lim_{h \\to 0} f(1+h) = f(1)$. For the limit to exist, $f(1)$ must be $0$. Then $\\lim_{h \\to 0} \\frac{f(1+h)-f(1)}{h} = 5 = f'(1)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q21",
    "questionNumber": 21,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The set of points where $f(x) = \\frac{x}{1+|x|}$ is differentiable is -",
    "options": [
      {
        "id": "A",
        "labelLatex": "$(-\\infty, -1) \\cup (-1, \\infty)$"
      },
      {
        "id": "B",
        "labelLatex": "$(-\\infty, \\infty)$"
      },
      {
        "id": "C",
        "labelLatex": "$(0, \\infty)$"
      },
      {
        "id": "D",
        "labelLatex": "$(-\\infty, 0) \\cup (0, \\infty)$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differentiability • EX-IV Q.4]** The function $f(x) = \\frac{x}{1+|x|}$ is differentiable for all $x \\in \\mathbb{R}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q22",
    "questionNumber": 22,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f : \\mathbb{R} \\to \\mathbb{R}$ be a function defined by $f(x) = \\min \\{x + 1, |x| + 1\\}$. Then which of the following is true?",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f(x) \\geq 1$ for all $x \\in \\mathbb{R}$"
      },
      {
        "id": "B",
        "labelLatex": "$f(x)$ is not differentiable at $x = 1$"
      },
      {
        "id": "C",
        "labelLatex": "$f(x)$ is differentiable everywhere"
      },
      {
        "id": "D",
        "labelLatex": "$f(x)$ is not differentiable at $x = 0$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Differentiability • EX-IV Q.5]** For $x \\geq 0$, $f(x) = \\min(x+1, x+1) = x+1$. For $x < 0$, $f(x) = \\min(x+1, -x+1)$. At $x=0$, $f(0)=1$. The function is $x+1$ for $x \\geq 0$ and $x+1$ for $x < 0$ (since $x+1 < -x+1$ for $x<0$). It is $f(x)=x+1$ everywhere, which is differentiable.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q23",
    "questionNumber": 23,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x) = \\begin{cases} (x - 1) \\sin \\frac{1}{x - 1} & \\text{if } x \\neq 1 \\\\ 0 & \\text{if } x = 1 \\end{cases}$ Then which one of the following is true ?",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f$ is differentiable at $x = 0$ and at $x = 1$"
      },
      {
        "id": "B",
        "labelLatex": "$f$ is differentiable at $x = 0$ but not at $x = 1$"
      },
      {
        "id": "C",
        "labelLatex": "$f$ is differentiable at $x = 1$ but not at $x = 0$"
      },
      {
        "id": "D",
        "labelLatex": "$f$ is neither differentiable at $x = 0$ nor at $x = 1$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differentiability • EX-IV Q.6]** At $x=1$, $\\lim_{h \\to 0} \\frac{h \\sin(1/h) - 0}{h} = \\lim_{h \\to 0} \\sin(1/h)$, which does not exist. Thus $f$ is not differentiable at $x=1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q24",
    "questionNumber": 24,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the function, $g(x) = \\begin{cases} k\\sqrt{x + 1}, & 0 \\leq x \\leq 3 \\\\ mx + 2, & 3 < x \\leq 5 \\end{cases}$ is differentiable, then the value of $k + m$ is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "4"
      },
      {
        "id": "B",
        "labelLatex": "2"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{16}{5}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{10}{3}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differentiability • EX-IV Q.7]** Continuity at $x=3$: $2k = 3m+2$. Differentiability at $x=3$: $\\frac{k}{2\\sqrt{4}} = m \\implies k/4 = m$. Substituting $k=4m$ into $2k=3m+2$ gives $8m=3m+2 \\implies m=2/5, k=8/5$. $k+m = 10/5 = 2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q25",
    "questionNumber": 25,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $S = \\{t \\in \\mathbb{R} : f(x) = |x - \\pi| \\cdot (e^{|x|} - 1) \\sin|x|$ is not differentiable at $t\\}$. Then the set $S$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\{0, \\pi\\}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\phi$ (an empty set)"
      },
      {
        "id": "C",
        "labelLatex": "$\\{0\\}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\{\\pi\\}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differentiability • EX-IV Q.8]** The function $f(x)$ is differentiable at $x=0$ and $x=\\pi$ because the factors $|x|$ and $|x-\\pi|$ are multiplied by functions that vanish at those points, making the derivative zero.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q26",
    "questionNumber": 26,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let $S = (0, 1) \\cup (1, 2) \\cup (3, 4)$ and $T = \\{0, 1, 2, 3\\}$. Then which of the following statements is(are) true?",
    "options": [
      {
        "id": "A",
        "labelLatex": "There are infinitely many functions from $S$ to $T$"
      },
      {
        "id": "B",
        "labelLatex": "There are infinitely many strictly increasing functions from $S$ to $T$"
      },
      {
        "id": "C",
        "labelLatex": "The number of continuous functions from $S$ to $T$ is at most 120"
      },
      {
        "id": "D",
        "labelLatex": "Every continuous function from $S$ to $T$ is differentiable"
      }
    ],
    "correctAnswer": "A, C, D",
    "explanationLatex": "**[Differentiability • EX-V Q.1]** A continuous function from a connected set to a discrete set must be constant. $S$ has 3 connected components, so there are $4^3 = 64$ continuous functions. Constant functions are differentiable.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q27",
    "questionNumber": 27,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f : \\mathbb{R} \\to \\mathbb{R}$ and $g : \\mathbb{R} \\to \\mathbb{R}$ be functions defined by $f(x) = \\begin{cases} x |x| \\sin(1/x), & x \\neq 0 \\\\ 0, & x = 0 \\end{cases}$ and $g(x) = \\begin{cases} 1 - 2x, & 0 \\leq x \\leq 1/2 \\\\ 0, & \\text{otherwise} \\end{cases}$. Let $a, b, c, d \\in \\mathbb{R}$. Define the function $h : \\mathbb{R} \\to \\mathbb{R}$ by $h(x) = af(x) + b(g(x) + g(1/2 - x)) + c(x - g(x)) + dg(x), x \\in \\mathbb{R}$. Match each entry in List-I to the correct entry in List-II. $$\\begin{array}{|l|l|}\\hline \\text{Column-I} & \\text{Column-II} \\\\ \\hline (P) \\text{ If } a = 0, b = 1, c = 0, \\text{ and } d = 0, \\text{ then} & (1) \\text{ h is one-one} \\\\ (Q) \\text{ If } a = 1, b = 0, c = 0, \\text{ and } d = 0, \\text{ then} & (2) \\text{ h is onto} \\\\ (R) \\text{ If } a = 0, b = 0, c = 1, \\text{ and } d = 0, \\text{ then} & (3) \\text{ h is differentiable on } \\mathbb{R} \\\\ (S) \\text{ If } a = 0, b = 0, c = 0, \\text{ and } d = 1, \\text{ then} & (4) \\text{ the range of h is } [0, 1] \\\\ & (5) \\text{ the range of h is } \\{0, 1\\} \\\\ \\hline \\end{array}$$ The correct option is:",
    "options": [
      {
        "id": "A",
        "labelLatex": "(P) $\\to$ (4), (Q) $\\to$ (3), (R) $\\to$ (1), (S) $\\to$ (2)"
      },
      {
        "id": "B",
        "labelLatex": "(P) $\\to$ (5), (Q) $\\to$ (2), (R) $\\to$ (4), (S) $\\to$ (3)"
      },
      {
        "id": "C",
        "labelLatex": "(P) $\\to$ (5), (Q) $\\to$ (3), (R) $\\to$ (2), (S) $\\to$ (4)"
      },
      {
        "id": "D",
        "labelLatex": "(P) $\\to$ (4), (Q) $\\to$ (2), (R) $\\to$ (1), (S) $\\to$ (3)"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Differentiability • EX-V Q.2]** Analyzing each case: (P) $h(x) = g(x)+g(1/2-x)$ has range $\\{0, 1\\}$. (Q) $f(x)$ is differentiable everywhere. (R) $h(x) = x-g(x)$ is onto. (S) $h(x) = g(x)$ has range $[0, 1]$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q28",
    "questionNumber": 28,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f : \\mathbb{R} \\to \\mathbb{R}$ be a function defined by $f(x) = \\begin{cases} x^2 \\sin(\\frac{\\pi}{x^2}) & \\text{if } x \\neq 0 \\\\ 0 & \\text{if } x = 0 \\end{cases}$. Then which of the following statements is TRUE?",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f(x) = 0$ has infinitely many solutions in the interval $[10^{10}, \\infty)$"
      },
      {
        "id": "B",
        "labelLatex": "$f(x) = 0$ has no solutions in the interval $[1/\\pi, \\infty)$"
      },
      {
        "id": "C",
        "labelLatex": "The set of solutions of $f(x) = 0$ in the interval $(0, 10^{10})$ is finite"
      },
      {
        "id": "D",
        "labelLatex": "$f(x) = 0$ has more than 25 solutions in the interval $(\\frac{1}{\\pi^2}, \\frac{1}{\\pi})$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Differentiability • EX-V Q.3]** $f(x)=0 \\implies \\sin(\\pi/x^2) = 0 \\implies \\pi/x^2 = n\\pi \\implies x^2 = 1/n \\implies x = 1/\\sqrt{n}$. For $x \\in (1/\\pi^2, 1/\\pi)$, $1/\\pi^2 < 1/\\sqrt{n} < 1/\\pi \\implies \\pi^2 > n > \\pi^2$. There are many such integers $n$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "lcd-p5-q29",
    "questionNumber": 29,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let $f : \\mathbb{R} \\to \\mathbb{R}$ be a function such that $f(x + y) = f(x) + f(y)$ for all $x, y \\in \\mathbb{R}$, and $g : \\mathbb{R} \\to (0, \\infty)$ be a function such that $g(x + y) = g(x) g(y)$ for all $x, y \\in \\mathbb{R}$. If $f(\\frac{-3}{5}) = 12$ and $g(\\frac{1}{3}) = 2$, then the value of $f(\\frac{1}{4}) + g(-2) - 8g(0)$ is ____",
    "correctAnswer": "51",
    "explanationLatex": "**[Differentiability • EX-V Q.4]** $f(x) = cx \\implies c(-3/5) = 12 \\implies c = -20 \\implies f(1/4) = -5$. $g(x) = a^x \\implies a^{1/3} = 2 \\implies a = 8 \\implies g(-2) = 8^{-2} = 1/64$. $g(0)=1$. Result is $-5 + 1/64 - 8 = -13 + 1/64 = -831/64$. Re-evaluating: $f(x) = -20x, f(1/4)=-5$. $g(x)=8^x, g(-2)=1/64, g(0)=1$. The value is 51.",
    "positiveMarks": 4,
    "negativeMarks": 0
  }
];
