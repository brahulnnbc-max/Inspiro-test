import { Question } from '../types/exam';

export const DIFF_EQ_AUC_PART_4_QUESTIONS: Question[] = [
  {
    "id": "de-p4-q1",
    "questionNumber": 1,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "For what value of 'a' is the area of the figure bounded by the lines, $y = \\frac{1}{x}$ , $y = \\frac{1}{2x - 1}$ , $x = 2 \\& x = a$ equal to $\\ln \\frac{4}{\\sqrt{5}}$?",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a = 8 \\text{ or } \\frac{2}{5}(6 - \\sqrt{21})$"
      },
      {
        "id": "B",
        "labelLatex": "$a = 4 \\text{ or } \\frac{1}{5}(3 - \\sqrt{2})$"
      },
      {
        "id": "C",
        "labelLatex": "$a = 8 \\text{ or } \\frac{1}{5}(6 + \\sqrt{21})$"
      },
      {
        "id": "D",
        "labelLatex": "$a = 2 \\text{ or } \\frac{2}{5}(3 + \\sqrt{7})$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-I Q.17]** Integrate the difference of the functions between $2$ and $a$, equate to $\\ln \\frac{4}{\\sqrt{5}}$, and solve to find $a = 8$ or $a = \\frac{2}{5}(6 - \\sqrt{21})$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q2",
    "questionNumber": 2,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Compute the area of the loop of the curve $y^2 = x^2 [(1 + x) / (1 - x)]$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2 - (\\pi/2)$"
      },
      {
        "id": "B",
        "labelLatex": "$1 - (\\pi/4)$"
      },
      {
        "id": "C",
        "labelLatex": "$4 - \\pi$"
      },
      {
        "id": "D",
        "labelLatex": "$2 + (\\pi/2)$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-I Q.18]** The loop exists for $x \\in [-1, 0)$. Integrating $2y$ from $-1$ to $0$ using substitution yields $2 - (\\pi/2)$ sq. units.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q3",
    "questionNumber": 3,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "For the curve $f(x) = \\frac{1}{1 + x^2}$, let two points on it are $A(\\alpha, f(\\alpha))$, $B\\left(-\\frac{1}{\\alpha}, f\\left(-\\frac{1}{\\alpha}\\right)\\right)$ $(\\alpha > 0)$. Find the minimum area bounded by the line segments OA, OB and $f(x)$, where 'O' is the origin.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$$\\frac{\\pi + 1}{2}$$"
      },
      {
        "id": "B",
        "labelLatex": "$$\\frac{\\pi - 1}{2}$$"
      },
      {
        "id": "C",
        "labelLatex": "$$\\pi - 1$$"
      },
      {
        "id": "D",
        "labelLatex": "$$\\frac{\\pi - 2}{2}$$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • EX-I Q.19]** Calculate the area of triangle OAB minus the area under the curve between $-\\frac{1}{\\alpha}$ and $\\alpha$, and minimize with respect to $\\alpha$ to get $\\frac{\\pi - 1}{2}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q4",
    "questionNumber": 4,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let 'c' be the constant number such that $c > 1$. If the least area of the figure given by the line passing through the point $(1, c)$ with gradient '$m$' and the parabola $y = x^2$ is $36$ sq. units find the value of $(c^2 + m^2)$.",
    "correctAnswer": "104",
    "explanationLatex": "**[Area Under Curve • EX-I Q.20]** Express the area bounded by the line and parabola in terms of $c$ and $m$, minimize it to $36$, and determine $c^2 + m^2 = 104$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "de-p4-q5",
    "questionNumber": 5,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $f(x)$ is monotonic in $(a, b)$ then prove that the area bounded by the ordinates at $x = a; x = b; y = f(x)$ and $y = f(c), c \\in (a, b)$ is minimum when $c = \\frac{a + b}{2}$. Hence if the area bounded by the graph of $f(x) = \\frac{x^3}{3} - x^2 + a$, the straight lines $x = 0, x = 2$ and the x-axis is minimum then find the value of 'a'.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a = 2/3$"
      },
      {
        "id": "B",
        "labelLatex": "$a = 1/3$"
      },
      {
        "id": "C",
        "labelLatex": "$a = 1$"
      },
      {
        "id": "D",
        "labelLatex": "$a = 4/3$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-I Q.22]** Set up the area function as a sum of integrals involving $a$, differentiate with respect to $a$, and find the minimum condition yielding $a = 2/3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q6",
    "questionNumber": 6,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Consider the two curves $C_1 : y = 1 + \\cos x$ & $C_2 : y = 1 + \\cos (x - \\alpha)$ for $\\alpha \\in (0, \\pi/2)$; $x \\in [0, \\pi]$. Find the value of $\\alpha$, for which the area of the figure bounded by the curves $C_1$, $C_2$ & $x = 0$ is same as that of the figure bounded by $C_2$, $y = 1 \\& x = \\pi$. For this value of $\\alpha$, find the ratio in which the line $y = 1$ divides the area of the curve $C_1$, $C_2$ & $x = \\pi$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\alpha = \\pi/3, \\text{ratio} = 2 : \\sqrt{3}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\alpha = \\pi/4, \\text{ratio} = \\sqrt{2} : 1$"
      },
      {
        "id": "C",
        "labelLatex": "$\\alpha = \\pi/6, \\text{ratio} = 3 : 2$"
      },
      {
        "id": "D",
        "labelLatex": "$\\alpha = \\pi/3, \\text{ratio} = \\sqrt{3} : 2$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-I Q.23]** Equate the two defined areas to find $\\alpha = \\pi/3$, and compute the region division ratio to get $2 : \\sqrt{3}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q7",
    "questionNumber": 7,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Compute the area of the figure which lies in the first quadrant inside the curve $x^2 + y^2 = 3a^2$ & is bounded by the parabola $x^2 = 2ay$ & $y^2 = 2ax$ ($a > 0$).",
    "options": [
      {
        "id": "A",
        "labelLatex": "$$\\left[ \\frac{\\sqrt{2}}{3} + \\frac{3}{2} \\cdot \\arcsin \\frac{1}{3} \\right] a^2$$"
      },
      {
        "id": "B",
        "labelLatex": "$$\\left[ \\frac{2\\sqrt{2}}{3} + \\frac{3}{2} \\cdot \\arcsin \\frac{1}{3} \\right] a^2$$"
      },
      {
        "id": "C",
        "labelLatex": "$$\\left[ \\frac{\\sqrt{2}}{3} + \\frac{1}{2} \\cdot \\arcsin \\frac{1}{3} \\right] a^2$$"
      },
      {
        "id": "D",
        "labelLatex": "$$\\left[ \\frac{\\sqrt{2}}{3} + 3 \\cdot   \\arcsin \\frac{1}{3} \\right] a^2$$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-I Q.24]** Divide the area into sectors of the circle and regions bounded by the parabolas to obtain $\\left[ \\frac{\\sqrt{2}}{3} + \\frac{3}{2} \\arcsin \\frac{1}{3} \\right] a^2$ sq. units.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q8",
    "questionNumber": 8,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the whole area included between the curve $x^2 y^2 = a^2 (y^2 - x^2)$ & its asymptotes (asymptotes are the lines which meet the curve at infinity).",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2a^2$"
      },
      {
        "id": "B",
        "labelLatex": "$4a^2$"
      },
      {
        "id": "C",
        "labelLatex": "$a^2$"
      },
      {
        "id": "D",
        "labelLatex": "$8a^2$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • EX-I Q.25]** Determine the asymptotes $x = \\pm a$, and integrate $y$ between the asymptotes and the curve to get the total area $4a^2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q9",
    "questionNumber": 9,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "For what values of $a \\in [0, 1]$ does the area of the figure bounded by the graph of the function $y = f(x)$ and the straight lines $x = 0$, $x = 1$ & $y = f(a)$ is at a minimum & for what values it is at a maximum if $f(x) = \\sqrt{1 - x^2}$. Find also the maximum & the minimum areas.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a = 1/2 \\text{ gives minima, } A\\left(\\frac{1}{2}\\right) = \\frac{3\\sqrt{3} - \\pi}{12} ; a = 0 \\text{ gives local maxima } A(0) = 1 - \\frac{\\pi}{4} ; a = 1 \\text{ gives maximum value, } A(1) = \\pi/4$"
      },
      {
        "id": "B",
        "labelLatex": "$a = 0 \\text{ gives minima, } a = 1 \\text{ gives maxima}$"
      },
      {
        "id": "C",
        "labelLatex": "$a = 1/3 \\text{ gives minima, } a = 1/2 \\text{ gives maxima}$"
      },
      {
        "id": "D",
        "labelLatex": "$a = 1/2 \\text{ gives maxima, } a = 0 \\text{ gives minima}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-I Q.26]** Express area as a function of $a$ using definite integrals of $\\sqrt{1-x^2} - f(a)$, analyze its critical points to find minima at $a = 1/2$ and maxima at $a = 0$ and $a = 1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q10",
    "questionNumber": 10,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $C_1 \\& C_2$ be two curves passing through the origin as shown in the figure. A curve C is said to \\\"bisect the area\\\" the region between $C_1 \\& C_2$, if for each point P of C, the two shaded regions A & B shown in the figure have equal areas. Determine the upper curve $C_2$, given that the bisecting curve C has the equation $y = x^2$ & that the lower curve $C_1$ has the equation $y = x^2/2$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$$(16/9) x^2$$"
      },
      {
        "id": "B",
        "labelLatex": "$$(9/4) x^2$$"
      },
      {
        "id": "C",
        "labelLatex": "$$(4/3) x^2$$"
      },
      {
        "id": "D",
        "labelLatex": "$$(8/3) x^2$$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-I Q.27]** Using the definition of bisected area with respect to the curve $y=x^2$ and lower curve $y=x^2/2$, differentiate the area equality relation to solve for $C_2$, yielding $(16/9)x^2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q11",
    "questionNumber": 11,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Given $f(x) = \\int_{0}^{x} e^t (\\ln \\sec t - \\sec^2 t) \\, dt$ ; $g(x) = - 2e^x \\tan x$. Find the area bounded by the curves $y = f(x)$ and $y = g(x)$ between the ordinates $x = 0$ and $x = \\pi/3$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$e^{\\pi/3} \\log 2$"
      },
      {
        "id": "B",
        "labelLatex": "$2e^{\\pi/3} \\log 2$"
      },
      {
        "id": "C",
        "labelLatex": "$e^{\\pi/3} \\log 4$"
      },
      {
        "id": "D",
        "labelLatex": "$e^{\\pi/3}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-I Q.28]** Simplify $f(x)$ using integration by parts, find the difference $g(x) - f(x)$, and integrate from $0$ to $\\pi/3$ to get $e^{\\pi/3} \\log 2$ sq. units.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q12",
    "questionNumber": 12,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area between the curve $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ and the straight line $\\frac{x}{a} + \\frac{y}{b} = 1$, in the first quadrant is (a, b > 0)",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{1}{4} \\pi ab - \\frac{1}{2}ab$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{1}{4}ab$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{1}{2} \\pi ab$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-II Q.1]** The area is the difference between the area of the quarter ellipse and the area of the triangle formed by the line in the first quadrant.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q13",
    "questionNumber": 13,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area of the region consisting of all points (x, y) so that $x^2 + y^2 \\le |x| + |y|$, is (in sq. units)",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\pi$"
      },
      {
        "id": "B",
        "labelLatex": "$\\pi - 1$"
      },
      {
        "id": "C",
        "labelLatex": "$\\pi - 2$"
      },
      {
        "id": "D",
        "labelLatex": "$\\pi - 3$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Area Under Curve • EX-II Q.2]** The region consists of four circles of radius $1/\\sqrt{2}$ centered at $(\\pm 1/2, \\pm 1/2)$ excluding the overlap, or by symmetry $4 \\times (\\text{Area of sector} - \\text{Area of triangle})$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q14",
    "questionNumber": 14,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area of the region defined by the inequality $|x| + |y| + |x + y| \\le 1$ is (in sq. units)",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{1}{2}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{3}{4}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{1}{8}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{1}{4}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • EX-II Q.3]** The region is a hexagon formed by the intersection of the given absolute value inequalities.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q15",
    "questionNumber": 15,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the area enclosed between $f(x) = \\min(\\cos^{-1}(\\cos x), \\cot^{-1}(\\cot x))$ and x-axis in $x \\in (\\pi, 2\\pi)$ is $\\frac{\\pi^2}{k}$ sq. units, where $k \\in N$, then k is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "4"
      },
      {
        "id": "B",
        "labelLatex": "6"
      },
      {
        "id": "C",
        "labelLatex": "8"
      },
      {
        "id": "D",
        "labelLatex": "12"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-II Q.4]** Evaluate the integral of the minimum function over the interval $(\\pi, 2\\pi)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q16",
    "questionNumber": 16,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the area enclosed by $y^2 = 4ax$ and line $y = ax$ is $\\frac{1}{3}$ sq. unit, then the area enclosed by $y = 4x$ with same parabola is (in sq. units)",
    "options": [
      {
        "id": "A",
        "labelLatex": "8"
      },
      {
        "id": "B",
        "labelLatex": "4"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{4}{3}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{8}{3}$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Area Under Curve • EX-II Q.5]** Use the formula for the area between a parabola $y^2=4ax$ and line $y=mx$, which is $\\frac{8a^2}{3m^3}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q17",
    "questionNumber": 17,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The smaller area enclosed by $y = f(x)$, when $f(x)$ is a polynomial of least degree satisfying $\\lim_{x \\to 0} (1 + \\frac{f(x)}{x^3})^{1/x} = e$, and the circle $x^2 + y^2 = 2$, is (in sq. units)",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{\\pi}{2}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{3}{5}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{\\pi}{2} - \\frac{3}{5}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{\\pi}{2} + \\frac{3}{5}$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Area Under Curve • EX-II Q.6]** The limit condition implies $f(x)/x^4 = 1$, so $f(x) = x^4$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q18",
    "questionNumber": 18,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area bounded by the curve $f(x) = x + \\sin x$ and its inverse function betweeen the ordinates $x = 0$ and $x = 2\\pi$ is (in sq. units)",
    "options": [
      {
        "id": "A",
        "labelLatex": "$4\\pi$"
      },
      {
        "id": "B",
        "labelLatex": "$8\\pi$"
      },
      {
        "id": "C",
        "labelLatex": "4"
      },
      {
        "id": "D",
        "labelLatex": "8"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Area Under Curve • EX-II Q.7]** The area is $2 \\int_0^{2\\pi} |x - f(x)| dx$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q19",
    "questionNumber": 19,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $f(x) = a + bx + cx^2$, where $c > 0$ and $b^2 - 4ac < 0$, then the area enclosed by the co-ordinate axes, the line $x = 2$ and the curve $y = f(x)$ is given by (in sq. units)",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{1}{3} [4f(1) + f(2)]$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{1}{2} [f(0) + 4f(1)]$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{1}{2} [f(0) + 4f(1) + f(2)]$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{1}{3} [f(0) + 4f(1) + f(2)]$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Area Under Curve • EX-II Q.8]** Apply Simpson's rule for the integral of a quadratic function.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q20",
    "questionNumber": 20,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Area of region bounded by $[x]^2 = [y]^2$ if $x \\in [1, 5]$ (where $[\\cdot]$ represents the greatest integer function), is (in sq. units)",
    "options": [
      {
        "id": "A",
        "labelLatex": "10"
      },
      {
        "id": "B",
        "labelLatex": "8"
      },
      {
        "id": "C",
        "labelLatex": "6"
      },
      {
        "id": "D",
        "labelLatex": "4"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • EX-II Q.9]** The region consists of unit squares where the integer parts of x and y have equal squares.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q21",
    "questionNumber": 21,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area bounded by the curve $y = x^2 + 2x + 1$, tangent to the curve at (1, 4) and y-axis is (in sq. units)",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{2}{3}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{1}{3}$"
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
    "explanationLatex": "**[Area Under Curve • EX-II Q.10]** Find the equation of the tangent at (1, 4) and integrate the difference between the curve and the tangent line.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q22",
    "questionNumber": 22,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x) = \\begin{cases} x^2, x < 0 \\\\ x, x \\ge 0 \\end{cases}$; area bounded by the curve $y = f(x)$, $y = 0$ and $x = \\pm 3a$ is $\\frac{9a}{2}$ sq unit, $a > 0$. Then a is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{1}{2}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{1}{4}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{3}{4}$"
      },
      {
        "id": "D",
        "labelLatex": "1"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-II Q.11]** Calculate the integral $\\int_{-3a}^0 x^2 dx + \\int_0^{3a} x dx$ and equate to $9a/2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q23",
    "questionNumber": 23,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Area bounded by the curve $xy^2 = a^2(a - x)$ and y-axis (in sq. units), given $a \\neq 0$, is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{\\pi a^2}{2}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\pi a^2$"
      },
      {
        "id": "C",
        "labelLatex": "$2\\pi a^2$"
      },
      {
        "id": "D",
        "labelLatex": "Not defined"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • EX-II Q.12]** The area is $2 \\int_0^a a \\sqrt{\\frac{a-x}{x}} dx$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q24",
    "questionNumber": 24,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "For $x \\in [0, \\frac{\\pi}{3}]$, $\\alpha$ equals to area between the curves $y = \\cos x$ and $y = \\cos 2x$; $\\beta$ equals to area between the curve $y = \\cos 2x$ and x-axis ; then $(\\alpha + \\beta)$ equals to (in sq. units)",
    "options": [
      {
        "id": "A",
        "labelLatex": "1"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{\\sqrt{3}}{2}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{1}{2}$"
      },
      {
        "id": "D",
        "labelLatex": "2"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-II Q.13]** Calculate the integrals for $\\alpha$ and $\\beta$ over the given interval.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q25",
    "questionNumber": 25,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area of the region satisfying $|y| + \\frac{1}{2} \\le e^{|x|}$, (in sq. units), is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$(1 - \\log 2)$"
      },
      {
        "id": "B",
        "labelLatex": "$2(1 - \\log 2)$"
      },
      {
        "id": "C",
        "labelLatex": "$e(1 - \\log 2)$"
      },
      {
        "id": "D",
        "labelLatex": "$4(1 - \\log 2)$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • EX-II Q.14]** The region is symmetric about both axes, so calculate $4 \\times \\int_0^{\\ln(1/2+...)} ...$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q26",
    "questionNumber": 26,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x) = \\min\\{e^x, \\frac{3}{2}, 1+e^{-x}\\}, \\forall x \\in R$. The area bounded by the curve $y = f(x)$, co-ordinate axes and the line $x = 1$, is $(2 + \\ln \\frac{a}{b\\sqrt{e}})$ sq. units, where, a & b are single-digit natural numbers, then (a + b) equals :",
    "options": [
      {
        "id": "A",
        "labelLatex": "4"
      },
      {
        "id": "B",
        "labelLatex": "5"
      },
      {
        "id": "C",
        "labelLatex": "7"
      },
      {
        "id": "D",
        "labelLatex": "8"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Area Under Curve • EX-II Q.15]** Determine the intersection points of the functions to split the integral into parts.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q27",
    "questionNumber": 27,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the area bounded by the $x$- axis, curve $y = f(x)$ and the lines $x = 1, x = b$ is equal to $\\sqrt{b^2 + 1} - \\sqrt{2}$ for all $b > 1$, then $f(x)$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\sqrt{x - 1}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\sqrt{x + 1}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\sqrt{x^2 + 1}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{x}{\\sqrt{1 + x^2}}$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Area Under Curve • EX-III Q.1]** Differentiating the given integral expression with respect to $b$ gives the function $f(b)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q28",
    "questionNumber": 28,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area of the region bounded by the curves $y = |x - 1|$ and $y = 3 - |x|$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$6 \\text{ sq. units}$"
      },
      {
        "id": "B",
        "labelLatex": "$2 \\text{ sq. units}$"
      },
      {
        "id": "C",
        "labelLatex": "$3 \\text{ sq. units}$"
      },
      {
        "id": "D",
        "labelLatex": "$4 \\text{ sq. units}$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Area Under Curve • EX-III Q.2]** Find the intersection points of the two absolute value curves and compute the area of the resulting geometric shape.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q29",
    "questionNumber": 29,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area of the region bounded by the curves $y = |x - 2|$, $x = 1$, $x = 3$ and the $x$- axis is",
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
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-III Q.3]** Integrate $y = |x - 2|$ from $x = 1$ to $x = 3$ split at $x = 2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q30",
    "questionNumber": 30,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area enclosed between the curve $y = \\log_e(x + e)$ and the coordinate axes is",
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
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-III Q.4]** Integrate with respect to $y$ by expressing $x$ as a function of $y$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q31",
    "questionNumber": 31,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The parabolas $y^2 = 4x$ and $x^2 = 4y$ divide the square region bounded by the lines $x = 4, y = 4$ and the coordinate axes. If $S_1, S_2, S_3$ are respectively the areas of these parts numbered from top to bottom; then $S_1 : S_2 : S_3$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1 : 2 : 1$"
      },
      {
        "id": "B",
        "labelLatex": "$1 : 2 : 3$"
      },
      {
        "id": "C",
        "labelLatex": "$2 : 1 : 2$"
      },
      {
        "id": "D",
        "labelLatex": "$1 : 1 : 1$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Area Under Curve • EX-III Q.5]** By symmetry of the two parabolas across $y = x$, the three regions divided inside the square have equal areas.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q32",
    "questionNumber": 32,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x)$ be a non-negative continuous function such that the area bounded by the curve $y = f(x)$, $x$-axis and the ordinates $x = \\frac{\\pi}{4}$ and $x = \\beta > \\frac{\\pi}{4}$ is $\\left( \\beta \\sin \\beta + \\frac{\\pi}{4}\\cos \\beta + \\sqrt{2}\\beta \\right)$. Then $f\\left(\\frac{\\pi}{2}\\right)$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\left(\\frac{\\pi}{4} + \\sqrt{2} - 1\\right)$"
      },
      {
        "id": "B",
        "labelLatex": "$\\left(\\frac{\\pi}{4} - \\sqrt{2} + 1\\right)$"
      },
      {
        "id": "C",
        "labelLatex": "$\\left(1 - \\frac{\\pi}{4} - \\sqrt{2}\\right)$"
      },
      {
        "id": "D",
        "labelLatex": "$\\left(1 - \\frac{\\pi}{4} + \\sqrt{2}\\right)$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Area Under Curve • EX-III Q.6]** Differentiating the given definite integral with respect to $\\beta$ gives $f(\\beta)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q33",
    "questionNumber": 33,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area enclosed between the curves $y^2 = x$ and $y = |x|$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2/3$"
      },
      {
        "id": "B",
        "labelLatex": "$1$"
      },
      {
        "id": "C",
        "labelLatex": "$1/6$"
      },
      {
        "id": "D",
        "labelLatex": "$1/3$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Area Under Curve • EX-III Q.7]** Calculate $\\int_0^1 (\\sqrt{x} - x) dx$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q34",
    "questionNumber": 34,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area of the plane region bounded by the curves $x + 2y^2 = 0$ and $x + 3y^2 = 1$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1/3$"
      },
      {
        "id": "B",
        "labelLatex": "$2/3$"
      },
      {
        "id": "C",
        "labelLatex": "$4/3$"
      },
      {
        "id": "D",
        "labelLatex": "$5/3$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Area Under Curve • EX-III Q.8]** Solve for the intersection of the parabolas and integrate with respect to $y$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q35",
    "questionNumber": 35,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area of the region bounded by the parabola $(y - 2)^2 = x - 1$, the tangent to the parabola at the point $(2, 3)$ and the $x - \\text{axis}$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$3$"
      },
      {
        "id": "B",
        "labelLatex": "$6$"
      },
      {
        "id": "C",
        "labelLatex": "$9$"
      },
      {
        "id": "D",
        "labelLatex": "$12$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Area Under Curve • EX-III Q.9]** Find the tangent equation and integrate with respect to $y$ between the appropriate limits.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q36",
    "questionNumber": 36,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area bounded by the curves $y = \\cos x$ and $y = \\sin x$ between the ordinates $x = 0$ and $x = \\frac{3\\pi}{2}$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$4\\sqrt{2} + 1$"
      },
      {
        "id": "B",
        "labelLatex": "$4\\sqrt{2} - 2$"
      },
      {
        "id": "C",
        "labelLatex": "$4\\sqrt{2} + 2$"
      },
      {
        "id": "D",
        "labelLatex": "$4\\sqrt{2} - 1$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • EX-III Q.10]** Break the region into intervals where each curve is on top and integrate.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q37",
    "questionNumber": 37,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area of the region enclosed by the curves $y = x$, $x = e$, $y = \\frac{1}{x}$ and the positive $x$-axis is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{1}{2} \\text{ square units}$"
      },
      {
        "id": "B",
        "labelLatex": "$1 \\text{ square unit}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{3}{2} \\text{ square units}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{5}{2} \\text{ square units}$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Area Under Curve • EX-III Q.11]** Split the region at $x = 1$ into a triangle and a logarithmic integral.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q38",
    "questionNumber": 38,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area bounded between the parabolas $x^2 = \\frac{y}{4}$ and $x^2 = 9y$ and the straight line $y = 2$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$20\\sqrt{2}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{10\\sqrt{2}}{3}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{20\\sqrt{2}}{3}$"
      },
      {
        "id": "D",
        "labelLatex": "$10\\sqrt{2}$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Area Under Curve • EX-III Q.12]** Compute the difference of areas under the curves up to $y = 2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q39",
    "questionNumber": 39,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area (in square units) bounded by the curves $y = \\sqrt{x}$, $2y - x + 3 = 0$, $x$-axis and lying in the first quadrant is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$27/4$"
      },
      {
        "id": "B",
        "labelLatex": "$9$"
      },
      {
        "id": "C",
        "labelLatex": "$36$"
      },
      {
        "id": "D",
        "labelLatex": "$18$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • EX-III Q.13]** Find the intersection point with the line and integrate with respect to $y$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q40",
    "questionNumber": 40,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area of the region described by $A = \\{(x, y) : x^2 + y^2 \\le 1 \\text{ and } y^2 \\le 1 - x\\}$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{\\pi}{2} + \\frac{2}{3}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{\\pi}{2} + \\frac{4}{3}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{\\pi}{2} - \\frac{4}{3}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{\\pi}{2} - \\frac{2}{3}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • EX-III Q.14]** Combine the area of a semicircle and the parabolic segment.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q41",
    "questionNumber": 41,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area (in sq. units) of the region described by $\\{(x, y) : y^2 \\le 2x \\text{ and } y \\ge 4x - 1\\}$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{9}{32}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{7}{32}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{5}{64}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{15}{64}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-III Q.15]** Solve for the intersection points and integrate with respect to $y$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q42",
    "questionNumber": 42,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area (in sq. units) of the region $\\{(x, y) : y^2 \\ge 2x \\text{ and } x^2 + y^2 \\le 4x, x \\ge 0, y \\ge 0\\}$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\pi - \\frac{4}{3}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\pi - \\frac{8}{3}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\pi - \\frac{4\\sqrt{2}}{3}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{\\pi}{2} - \\frac{2\\sqrt{2}}{3}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • EX-III Q.16]** Find the area of the circular sector minus the parabolic area.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q43",
    "questionNumber": 43,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area (in sq. units) of the region $\\{(x, y) : x \\ge 0, x + y \\le 3, x^2 \\le 4y \\text{ and } y \\le 1 + \\sqrt{x}\\}$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{7}{3}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{5}{2}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{59}{12}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{3}{2}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • EX-III Q.17]** Divide the region into appropriate vertical strips bounded by the curves.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q44",
    "questionNumber": 44,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $g(x) = \\cos x^2$, $f(x) = \\sqrt{x}$, and $\\alpha, \\beta$ $(\\alpha < \\beta)$ be the roots of the quadratic equation $18x^2 - 9\\pi x + \\pi^2 = 0$. Then the area (in sq. units) bounded by the curve $y = (gof)(x)$ and the lines $x = \\alpha, x = \\beta$ and $y = 0$, is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{1}{2}(\\sqrt{2} - 1)$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{1}{2}(\\sqrt{3} - 1)$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{1}{2}(\\sqrt{3} + 1)$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{1}{2}(\\sqrt{3} - \\sqrt{2})$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • EX-III Q.18]** Substitute $u = \\sqrt{x}$ and integrate the composite function between the given limits.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q45",
    "questionNumber": 45,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Area of the region $\\{(x, y) \\in \\mathbb{R}^2 : y \\ge \\sqrt{|x + 3|}, 5y \\le x + 9 \\le 15\\}$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{1}{6}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{4}{3}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{3}{2}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{5}{3}$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Area Under Curve • EX-IV Q.1]** Find the intersection points and compute the area by integrating the difference of the curves.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q46",
    "questionNumber": 46,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "If the line $x = \\alpha$ divides the area of region $R = \\{(x, y) \\in \\mathbb{R}^2 : x^3 \\le y \\le x, 0 \\le x \\le 1\\}$ into two equal parts, then",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{1}{2} < \\alpha < 1$"
      },
      {
        "id": "B",
        "labelLatex": "\\alpha^4 + 4\\alpha^2 - 1 = 0"
      },
      {
        "id": "C",
        "labelLatex": "0 < \\alpha \\le \\frac{1}{2}"
      },
      {
        "id": "D",
        "labelLatex": "2\\alpha^4 - 4\\alpha^2 + 1 = 0"
      }
    ],
    "correctAnswer": "A, D",
    "explanationLatex": "**[Area Under Curve • EX-IV Q.2]** Equate the area from $0$ to $\\alpha$ to half of the total area of region $R$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q47",
    "questionNumber": 47,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "A farmer $F_1$ has a land in the shape of a triangle with vertices at $P(0, 0), Q(1, 1)$ and $R(2, 0)$. From this land, a neighbouring farmer $F_2$ takes away the region which lies between the side $PQ$ and a curve of the form $y = x^n (n > 1)$. If the area of the region taken away by the farmer $F_2$ is exactly $30\\%$ of the area of $\\Delta PQR$, then the value of $n$ is __________.",
    "correctAnswer": "4",
    "explanationLatex": "**[Area Under Curve • EX-IV Q.3]** Calculate the area of $\\Delta PQR$ and set the integral of $(x - x^n)$ from $0$ to $1$ equal to $30\\%$ of it.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "de-p4-q48",
    "questionNumber": 48,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let $f : [0, \\infty) \\to \\mathbb{R}$ be a continuous function such that $f(x) = 1 - 2x + \\int_{0}^{x} e^{x - t}f(t) dt$ for all $x \\in [0, \\infty)$. Then, which of the following statement(s) is(are) TRUE?\n(A) The curve $y = f(x)$ passes through the point $(1, 2)$\n(B) The curve $y = f(x)$ passes through the point $(2, -1)$\n(C) The area of the region $\\{(x, y) \\in [0, 1] \\times \\mathbb{R} : f(x) \\le y \\le \\sqrt{1 - x^2}\\}$ is $\\frac{\\pi - 2}{4}$\n(D) The area of the region $\\{(x, y) \\in [0, 1] \\times \\mathbb{R} : f(x) \\le y \\le \\sqrt{1 - x^2}\\}$ is $\\frac{\\pi - 1}{4}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "The curve $y = f(x)$ passes through the point $(1, 2)$"
      },
      {
        "id": "B",
        "labelLatex": "The curve $y = f(x)$ passes through the point $(2, -1)$"
      },
      {
        "id": "C",
        "labelLatex": "The area of the region $\\{(x, y) \\in [0, 1] \\times \\mathbb{R} : f(x) \\le y \\le \\sqrt{1 - x^2}\\}$ is $\\frac{\\pi - 2}{4}$"
      },
      {
        "id": "D",
        "labelLatex": "The area of the region $\\{(x, y) \\in [0, 1] \\times \\mathbb{R} : f(x) \\le y \\le \\sqrt{1 - x^2}\\}$ is $\\frac{\\pi - 1}{4}$"
      }
    ],
    "correctAnswer": "B, C",
    "explanationLatex": "**[Area Under Curve • EX-IV Q.4]** Differentiating the integral equation yields $f(x) = 1 - 2x + x - 1 = -x$, so $f(x) = -x$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q49",
    "questionNumber": 49,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area of the region $\\{(x, y) : xy \\le 8, 1 \\le y \\le x^2\\}$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$16 \\log_e 2 - 6$"
      },
      {
        "id": "B",
        "labelLatex": "$8 \\log_e 2 - \\frac{7}{3}$"
      },
      {
        "id": "C",
        "labelLatex": "$16 \\log_e 2 - \\frac{14}{3}$"
      },
      {
        "id": "D",
        "labelLatex": "$8 \\log_e 2 - \\frac{14}{3}$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Area Under Curve • EX-IV Q.5]** Integrate with respect to $x$ across the bounded limits after finding the intersections of the curves $xy=8$ and $y=x^2$ with $y=1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q50",
    "questionNumber": 50,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let the functions $f : \\mathbb{R} \\to \\mathbb{R}$ and $g : \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) = e^{x - 1} - e^{-|x - 1|}$ and $g(x) = \\frac{1}{2}\\left(e^{x - 1} + e^{1 - x}\\right)$. Then the area of the region in the first quadrant bounded by the curves $y = f(x)$, $y = g(x)$ and $x = 0$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$(2 - \\sqrt{3}) + \\frac{1}{2}(e - e^{-1})$"
      },
      {
        "id": "B",
        "labelLatex": "$(2 + \\sqrt{3}) + \\frac{1}{2}(e - e^{-1})$"
      },
      {
        "id": "C",
        "labelLatex": "$(2 - \\sqrt{3}) + \\frac{1}{2}(e + e^{-1})$"
      },
      {
        "id": "D",
        "labelLatex": "$(2 + \\sqrt{3}) + \\frac{1}{2}(e + e^{-1})$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-IV Q.6]** Find intersection points of $f(x)$ and $g(x)$ in the first quadrant and evaluate the corresponding integral.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q51",
    "questionNumber": 51,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Consider all rectangles lying in the region $\\{(x, y) \\in \\mathbb{R} \\times \\mathbb{R} : 0 \\le x \\le \\frac{\\pi}{2} \\text{ and } 0 \\le y \\le 2\\sin(2x)\\}$ and having one side on the $x$-axis. The area of the rectangle which has the maximum perimeter among all such rectangles, is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\frac{3\\pi}{2}"
      },
      {
        "id": "B",
        "labelLatex": "\\pi"
      },
      {
        "id": "C",
        "labelLatex": "\\frac{\\pi}{2\\sqrt{3}}"
      },
      {
        "id": "D",
        "labelLatex": "\\frac{\\pi\\sqrt{3}}{2}"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Area Under Curve • EX-IV Q.7]** Maximize the perimeter function of the rectangle defined by $x$ and $2\\sin(2x)$ to find the optimal dimensions.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q52",
    "questionNumber": 52,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area of the region $\\{(x, y) : 0 \\le x \\le \\frac{9}{4}, 0 \\le y \\le 1, x \\ge 3y, x + y \\ge 2\\}$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\frac{11}{32}"
      },
      {
        "id": "B",
        "labelLatex": "\\frac{35}{96}"
      },
      {
        "id": "C",
        "labelLatex": "\\frac{37}{96}"
      },
      {
        "id": "D",
        "labelLatex": "\\frac{13}{32}"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-IV Q.8]** Sketch the polygonal region defined by the inequalities and compute its area by breaking it into simple geometric shapes.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q53",
    "questionNumber": 53,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Consider the function $f, g : \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = x^2 + \\frac{5}{12}$ and $g(x) = \\begin{cases} 2\\left(1 - \\frac{4|x|}{3}\\right), & |x| \\le \\frac{3}{4} \\\\ 0, & |x| > \\frac{3}{4} \\end{cases}$. If $\\alpha$ is the area of the region $\\{(x, y) \\in \\mathbb{R} \\times \\mathbb{R} : |x| \\le \\frac{3}{4}, 0 \\le y \\le \\min\\{f(x), g(x)\\}\\}$, then the value of $9\\alpha$ is __________.",
    "correctAnswer": "6",
    "explanationLatex": "**[Area Under Curve • EX-IV Q.9]** Evaluate the integral of $\\min\\{f(x), g(x)\\}$ between $-3/4$ and $3/4$ to find $\\alpha$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "de-p4-q54",
    "questionNumber": 54,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let $f : [0, 1] \\to [0, 1]$ be the function defined by $f(x) = \\frac{x^3}{3} - x^2 + \\frac{5}{9}x + \\frac{17}{36}$. Consider the square region $S = [0, 1] \\times [0, 1]$. Let $G = \\{(x, y) \\in S : y > f(x)\\}$ be called the green region and $R = \\{(x, y) \\in S : y < f(x)\\}$ be called the red region. Let $L_h = \\{(x, h) \\in S : x \\in [0, 1] \\}$ be the horizontal line drawn at a height $h \\in [0, 1]$. Then which of the following statements is(are) true?\n(A) There exists an $h \\in \\left[\\frac{1}{4}, \\frac{2}{3}\\right]$ such that the area of the green region above the line $L_h$ equals the area of the green region below the line $L_h$\n(B) There exists an $h \\in \\left[\\frac{1}{4}, \\frac{2}{3}\\right]$ such that the area of the red region above the line $L_h$ equals the area of the red region below the line $L_h$\n(C) There exists an $h \\in \\left[\\frac{1}{4}, \\frac{2}{3}\\right]$ such that the area of the green region above the line $L_h$ equals the area of the red region below the line $L_h$\n(D) There exists an $h \\in \\left[\\frac{1}{4}, \\frac{2}{3}\\right]$ such that the area of the red region above the line $L_h$ equals the area of the green region below the line $L_h$",
    "options": [
      {
        "id": "A",
        "labelLatex": "There exists an $h \\in \\left[\\frac{1}{4}, \\frac{2}{3}\\right]$ such that the area of the green region above the line $L_h$ equals the area of the green region below the line $L_h$"
      },
      {
        "id": "B",
        "labelLatex": "There exists an $h \\in \\left[\\frac{1}{4}, \\frac{2}{3}\\right]$ such that the area of the red region above the line $L_h$ equals the area of the red region below the line $L_h$"
      },
      {
        "id": "C",
        "labelLatex": "There exists an $h \\in \\left[\\frac{1}{4}, \\frac{2}{3}\\right]$ such that the area of the green region above the line $L_h$ equals the area of the red region below the line $L_h$"
      },
      {
        "id": "D",
        "labelLatex": "There exists an $h \\in \\left[\\frac{1}{4}, \\frac{2}{3}\\right]$ such that the area of the red region above the line $L_h$ equals the area of the green region below the line $L_h$"
      }
    ],
    "correctAnswer": "B, C, D",
    "explanationLatex": "**[Area Under Curve • EX-IV Q.10]** Use the Intermediate Value Theorem on continuous area functions defined by varying $h$ in the given range.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q55",
    "questionNumber": 55,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let $n \\ge 2$ be a natural number and $f : [0, 1] \\to \\mathbb{R}$ be the function defined by $$f(x) = \\begin{cases} n(1 - 2nx) & \\text{if } 0 \\le x \\le \\frac{1}{2n} \\\\ 2n(2nx - 1) & \\text{if } \\frac{1}{2n} \\le x \\le \\frac{3}{4n} \\\\ 4n(1 - nx) & \\text{if } \\frac{3}{4n} \\le x \\le \\frac{1}{n} \\\\ \\frac{n}{n - 1}(nx - 1) & \\text{if } \\frac{1}{n} \\le x \\le 1 \\end{cases}$$ If $n$ is such that the area of the region bounded by the curves $x = 0, x = 1, y = 0$ and $y = f(x)$ is $4$, then the maximum value of the function $f$ is :",
    "correctAnswer": "8",
    "explanationLatex": "**[Area Under Curve • EX-IV Q.11]** Compute the area under the piecewise linear function $f(x)$ in terms of $n$, equate it to $4$, solve for $n$, and find the maximum value of $f(x)$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "de-p4-q56",
    "questionNumber": 56,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $S = \\{(x, y) \\in \\mathbb{R} \\times \\mathbb{R} : x \\ge 0, y \\ge 0, y^2 \\le 4x, y^2 \\le 12 - 2x \\text{ and } 3y + \\sqrt{8x} \\le 5\\sqrt{8}\\}$. If the area of the region $S$ is $\\alpha \\sqrt{2}$, then $\\alpha$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\frac{17}{2}"
      },
      {
        "id": "B",
        "labelLatex": "\\frac{17}{3}"
      },
      {
        "id": "C",
        "labelLatex": "\\frac{17}{4}"
      },
      {
        "id": "D",
        "labelLatex": "\\frac{17}{5}"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • EX-IV Q.12]** Find the intersection boundaries of parabolas and lines, then integrate to find the total area represented by $S$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p4-q57",
    "questionNumber": 57,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $\\mathbb{R}$ denote the set of all real numbers. Then the area of the region $\\{(x, y) \\in \\mathbb{R} \\times \\mathbb{R} : x > 0, y > \\frac{1}{x}, 5x - 4y - 1 > 0, 4x + 4y - 17 < 0\\}$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\frac{17}{16} - \\log_e 4"
      },
      {
        "id": "B",
        "labelLatex": "\\frac{33}{8} - \\log_e 4"
      },
      {
        "id": "C",
        "labelLatex": "\\frac{57}{8} - \\log_e 4"
      },
      {
        "id": "D",
        "labelLatex": "\\frac{17}{2} - \\log_e 4"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • EX-IV Q.13]** Determine the region bounded by the given hyperbola and lines, and compute the area using definite integration.",
    "positiveMarks": 4,
    "negativeMarks": 1
  }
];
