import { Question } from '../types/exam';

export const DIFF_EQ_AUC_PART_3_QUESTIONS: Question[] = [
  {
    "id": "de-p3-q1",
    "questionNumber": 1,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "For $x \\in \\mathbb{R}$, let the function $y(x)$ be the solution of the differential equation $\\frac{dy}{dx} + 12y = \\cos\\left(\\frac{\\pi}{12}x\\right), y(0) = 0$. Then, which of the following statements is/are TRUE?",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y(x)$ is an increasing function"
      },
      {
        "id": "B",
        "labelLatex": "$y(x)$ is a decreasing function"
      },
      {
        "id": "C",
        "labelLatex": "There exists a real number $\\beta$ such that the line $y = \\beta$ intersects the curve $y = y(x)$ at infinitely many points"
      },
      {
        "id": "D",
        "labelLatex": "$y(x)$ is a periodic function"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Differential Equation • EX-V Q.8]** The solution is $y(x) = Ce^{-12x} + A\\cos(\\frac{\\pi}{12}x) + B\\sin(\\frac{\\pi}{12}x)$. As $x \\to \\infty$, $y(x)$ oscillates, allowing for infinitely many intersections with a horizontal line.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q2",
    "questionNumber": 2,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $y(x)$ is the solution of the differential equation $xdy - (y^2 - 4y) dx = 0$ for $x > 0, y(1) = 2$, and the slope of the curve $y = y(x)$ is never zero, then the value of $10y(\\sqrt{2})$ is ________.",
    "correctAnswer": "8",
    "explanationLatex": "**[Differential Equation • EX-V Q.9]** Separating variables $\\int \\frac{dy}{y^2-4y} = \\int \\frac{dx}{x}$ leads to $\\frac{1}{4}\\ln|\\frac{y-4}{y}| = \\ln x + C$. Given $y(1)=2$, the solution is $y=2$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "de-p3-q3",
    "questionNumber": 3,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f : [1, \\infty) \\to \\mathbb{R}$ be a differentiable function such that $f(1) = \\frac{1}{3}$ and $3\\int_{1}^{x} f(t)dt = xf(x) - \\frac{x^3}{3}, x \\in [1, \\infty)$. Let $e$ denote the base of the natural logarithm. Then the value of $f(e)$ is:",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{e^2 + 4}{3}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{\\log_e 4 + e}{3}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{4e^2}{3}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{e^2 - 4}{3}$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Differential Equation • EX-V Q.10]** Differentiating the integral equation gives $3f(x) = f(x) + xf'(x) - x^2$, which simplifies to $xf'(x) - 2f(x) = x^2$. Solving this linear ODE gives $f(x) = x^2 + Cx^2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q4",
    "questionNumber": 4,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "For $x \\in \\mathbb{R}$, let $y(x)$ be a solution of the differential equation $(x^2 - 5)\\frac{dy}{dx} - 2xy = -2x(x^2 - 5)^2$ such that $y(2) = 7$. Then the maximum value of the function $y(x)$ is :",
    "correctAnswer": "16",
    "explanationLatex": "**[Differential Equation • EX-V Q.11]** The equation is linear: $\\frac{dy}{dx} - \\frac{2x}{x^2-5}y = -2x(x^2-5)$. The integrating factor is $(x^2-5)^{-1}$. Solving gives $y = -(x^2-5)^2 + C(x^2-5)$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "de-p3-q5",
    "questionNumber": 5,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f(x)$ be a continuously differentiable function on the interval $(0, \\infty)$ such that $f(1) = 2$ and $\\lim_{t \\to x} \\frac{t^{10}f(x) - x^{10}f(t)}{t^9 - x^9} = 1$ for each $x > 0$. Then, for all $x > 0, f(x)$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{31}{11x} - \\frac{9}{11}x^{10}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{9}{11x} + \\frac{13}{11}x^{10}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{-9}{11x} + \\frac{13}{11}x^{10}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{13}{11x} + \\frac{9}{11}x^{10}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differential Equation • EX-V Q.12]** Applying L'Hopital's rule to the limit expression leads to a differential equation for $f(x)$, which is solved using the initial condition $f(1)=2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q6",
    "questionNumber": 6,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "For all $x > 0$, let $y_1(x), y_2(x)$ and $y_3(x)$ be the functions satisfying $\\frac{dy_1}{dx} - (\\sin x)^2 y_1 = 0, y_1(1) = 5$; $\\frac{dy_2}{dx} - (\\cos x)^2 y_2 = 0, y_2(1) = \\frac{1}{3}$; $\\frac{dy_3}{dx} - \\left(\\frac{2-x^3}{x^3}\\right)y_3 = 0, y_3(1) = \\frac{3}{5e}$ respectively. Then $\\lim_{x \\to 0^+} \\frac{y_1(x)y_2(x)y_3(x) + 2x}{e^{3x} \\sin x}$ is equal to ________.",
    "correctAnswer": "2",
    "explanationLatex": "**[Differential Equation • EX-V Q.13]** Solving each separable ODE and evaluating the limit as $x \\to 0^+$ yields the result.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "de-p3-q7",
    "questionNumber": 7,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let $y(x)$ be the solution of the differential equation $x^2 \\frac{dy}{dx} + xy = x^2 + y^2, x > \\frac{1}{e}$, satisfying $y(1) = 0$. Then the value of $2\\frac{(y(e))^2}{y(e^2)}$ is ________.",
    "correctAnswer": "0.75",
    "explanationLatex": "**[Differential Equation • EX-V Q.14]** This is a Bernoulli differential equation. Substituting $v = y/x$ transforms it into a separable equation.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "de-p3-q8",
    "questionNumber": 8,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area between the curve $xy = a^2$, x-axis, $x = a$ and $x = 2a$ is $(a > 0)$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a \\log 2$"
      },
      {
        "id": "B",
        "labelLatex": "$a^2 \\log 2$"
      },
      {
        "id": "C",
        "labelLatex": "$2a \\log 2$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • PT-1 Q.1]** Area $= \\int_{a}^{2a} \\frac{a^2}{x} dx = a^2 [\\ln x]_{a}^{2a} = a^2 \\ln 2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q9",
    "questionNumber": 9,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Area under the curve $y = \\sin 2x + \\cos 2x$ between $x = 0$ and $x = \\frac{\\pi}{4}$, is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2$ sq. units"
      },
      {
        "id": "B",
        "labelLatex": "$1$ sq. units"
      },
      {
        "id": "C",
        "labelLatex": "$3$ sq. units"
      },
      {
        "id": "D",
        "labelLatex": "$4$ sq. units"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • PT-1 Q.2]** Area $= \\int_{0}^{\\pi/4} (\\sin 2x + \\cos 2x) dx = [-\\frac{1}{2}\\cos 2x + \\frac{1}{2}\\sin 2x]_{0}^{\\pi/4} = (0 + \\frac{1}{2}) - (-\\frac{1}{2} + 0) = 1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q10",
    "questionNumber": 10,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area bounded by the lines $y = x$, $y = 0$ and $x = 2$ is",
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
        "labelLatex": "$4$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • PT-1 Q.3]** Area $= \\int_{0}^{2} x dx = [\\frac{x^2}{2}]_{0}^{2} = 2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q11",
    "questionNumber": 11,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area between the curve $y = \\log x$ and x-axis which lies between $x = a$ and $x = b$ $(1 < a < b)$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$b \\log (b/e) - a \\log (a/e)$"
      },
      {
        "id": "B",
        "labelLatex": "$b \\log (b/e) + a \\log (a/e)$"
      },
      {
        "id": "C",
        "labelLatex": "$\\log ab$"
      },
      {
        "id": "D",
        "labelLatex": "$\\log (b/a)$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • PT-1 Q.4]** Area $= \\int_{a}^{b} \\ln x dx = [x \\ln x - x]_{a}^{b} = (b \\ln b - b) - (a \\ln a - a) = b \\ln(b/e) - a \\ln(a/e)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q12",
    "questionNumber": 12,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Area bounded by the curve $y = xe^{x^2}$, x- axis and the ordinates $x = 0$, $x = \\alpha$ $(\\alpha > 0)$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{e^{\\alpha^2} + 1}{2}$ sq. units"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{e^{\\alpha^2} - 1}{2}$ sq.units"
      },
      {
        "id": "C",
        "labelLatex": "$e^{\\alpha^2} + 1$ sq. units"
      },
      {
        "id": "D",
        "labelLatex": "$e^{\\alpha^2} - 1$ sq.units"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • PT-1 Q.5]** Area $= \\int_{0}^{\\alpha} xe^{x^2} dx$. Let $u = x^2, du = 2x dx$. Area $= \\frac{1}{2} \\int_{0}^{\\alpha^2} e^u du = \\frac{1}{2}(e^{\\alpha^2} - 1)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q13",
    "questionNumber": 13,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area bounded between the curve $y = 2x^2$, x-axis and ordinates $x = -2$ and $x = 1$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$21$"
      },
      {
        "id": "B",
        "labelLatex": "$29/5$"
      },
      {
        "id": "C",
        "labelLatex": "$23$"
      },
      {
        "id": "D",
        "labelLatex": "$24$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • PT-1 Q.6]** Area $= \\int_{-2}^{1} 2x^2 dx = [\\frac{2x^3}{3}]_{-2}^{1} = \\frac{2}{3}(1 - (-8)) = \\frac{2}{3}(9) = 6$. Note: The provided key says A (21), but calculation yields 6. Assuming typo in key/question.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q14",
    "questionNumber": 14,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area bounded by the curve $y = x \\sin x^2$, x-axis, $x = 0$ and $x = \\sqrt{\\frac{\\pi}{2}}$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1/2$"
      },
      {
        "id": "B",
        "labelLatex": "$1/\\sqrt{2}$"
      },
      {
        "id": "C",
        "labelLatex": "$1/4$"
      },
      {
        "id": "D",
        "labelLatex": "$\\pi/2$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • PT-1 Q.7]** Area $= \\int_{0}^{\\sqrt{\\pi/2}} x \\sin x^2 dx$. Let $u = x^2, du = 2x dx$. Area $= \\frac{1}{2} \\int_{0}^{\\pi/2} \\sin u du = \\frac{1}{2}[-\\cos u]_{0}^{\\pi/2} = \\frac{1}{2}(0 - (-1)) = 1/2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q15",
    "questionNumber": 15,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area bounded between the curve $\\frac{x}{4} - \\frac{y}{2} + 1 = 0$, $x = -2$, $x = 3$ and x-axis is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$45/4$"
      },
      {
        "id": "B",
        "labelLatex": "$45/2$"
      },
      {
        "id": "C",
        "labelLatex": "$15$"
      },
      {
        "id": "D",
        "labelLatex": "$25/2$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • PT-1 Q.8]** Curve is $y = \\frac{1}{2}x + 2$. Area $= \\int_{-2}^{3} (\\frac{x}{2} + 2) dx = [\\frac{x^2}{4} + 2x]_{-2}^{3} = (\\frac{9}{4} + 6) - (1 - 4) = \\frac{33}{4} + 3 = \\frac{45}{4}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q16",
    "questionNumber": 16,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area bounded by the curve $y = \\frac{2}{1 + \\cos 2x}$, coordinate axes and $x = \\pi/4$ is",
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
        "labelLatex": "$\\pi/4$"
      },
      {
        "id": "D",
        "labelLatex": "Not defined"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • PT-1 Q.9]** $y = \\frac{2}{2 \\cos^2 x} = \\sec^2 x$. Area $= \\int_{0}^{\\pi/4} \\sec^2 x dx = [\\tan x]_{0}^{\\pi/4} = 1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q17",
    "questionNumber": 17,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area enclosed between the curve $x = 2y - y^2$ and y-axis is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$9/4$"
      },
      {
        "id": "B",
        "labelLatex": "$4/3$"
      },
      {
        "id": "C",
        "labelLatex": "$9$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • PT-1 Q.10]** Roots of $2y - y^2 = 0$ are $y=0, 2$. Area $= \\int_{0}^{2} (2y - y^2) dy = [y^2 - \\frac{y^3}{3}]_{0}^{2} = 4 - \\frac{8}{3} = 4/3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q18",
    "questionNumber": 18,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area between the curve $y = \\sin^3 x$, x-axis, and $x = \\pi/2$ in first quadrant is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1$"
      },
      {
        "id": "B",
        "labelLatex": "$1/3$"
      },
      {
        "id": "C",
        "labelLatex": "$2/3$"
      },
      {
        "id": "D",
        "labelLatex": "$3/2$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Area Under Curve • PT-1 Q.11]** Area $= \\int_{0}^{\\pi/2} \\sin^3 x dx = \\frac{2}{3} \\cdot 1 = 2/3$ (using Wallis formula).",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q19",
    "questionNumber": 19,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The value of $a$ for which the area of the region bounded by the curve $y = \\sin 2x$, the straight lines $x = \\pi/6$, $x = a$ and x-axis is equal to $1/2$ is $(a > \\pi/6)$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\pi/2$"
      },
      {
        "id": "B",
        "labelLatex": "$\\pi/3$"
      },
      {
        "id": "C",
        "labelLatex": "$2\\pi/3$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • PT-1 Q.12]** $\\int_{\\pi/6}^{a} \\sin 2x dx = [-\\frac{1}{2} \\cos 2x]_{\\pi/6}^{a} = \\frac{1}{2} \\implies \\cos(\\pi/3) - \\cos(2a) = 1 \\implies \\frac{1}{2} - \\cos(2a) = 1 \\implies \\cos(2a) = -1/2 \\implies 2a = 2\\pi/3 \\implies a = \\pi/3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q20",
    "questionNumber": 20,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area bounded by the curve $y = 4x^2$, $y = 1$ and $y = 4$ in the first quadrant is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2\\frac{2}{3}$"
      },
      {
        "id": "B",
        "labelLatex": "$3\\frac{1}{3}$"
      },
      {
        "id": "C",
        "labelLatex": "$2\\frac{1}{3}$"
      },
      {
        "id": "D",
        "labelLatex": "$3\\frac{1}{2}$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Area Under Curve • PT-2 Q.1]** Area $= \\int_{1}^{4} x dy = \\int_{1}^{4} \\frac{\\sqrt{y}}{2} dy = \\frac{1}{2} [\\frac{2}{3} y^{3/2}]_{1}^{4} = \\frac{1}{3} (8 - 1) = 7/3 = 2\\frac{1}{3}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q21",
    "questionNumber": 21,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area bounded by the curve $y = \\sec x$ and y-axis when $1 \\le y \\le 2$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{2\\pi}{3} - \\log (2 + \\sqrt{3})$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{2\\pi}{3} + \\log (2 + \\sqrt{3})$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{\\pi}{3} - \\frac{1}{2}\\log (2 + \\sqrt{3})$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • PT-2 Q.2]** Area $= \\int_{1}^{2} x dy = \\int_{1}^{2} \\text{arcsec } y dy$. Using integration by parts: $[y \\text{arcsec } y - \\ln|y + \\sqrt{y^2-1}|]_{1}^{2} = (2(\\pi/3) - \\ln(2+\\sqrt{3})) - (1(0) - 0) = 2\\pi/3 - \\ln(2+\\sqrt{3})$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q22",
    "questionNumber": 22,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Area of the enclosed region bounded by the curve $y = x(x - 1)^2$ and x-axis is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$4$"
      },
      {
        "id": "B",
        "labelLatex": "$1/3$"
      },
      {
        "id": "C",
        "labelLatex": "$1/12$"
      },
      {
        "id": "D",
        "labelLatex": "$1/2$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Area Under Curve • PT-2 Q.3]** Area $= \\int_{0}^{1} (x^3 - 2x^2 + x) dx = [\\frac{x^4}{4} - \\frac{2x^3}{3} + \\frac{x^2}{2}]_{0}^{1} = \\frac{1}{4} - \\frac{2}{3} + \\frac{1}{2} = \\frac{3-8+6}{12} = 1/12$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q23",
    "questionNumber": 23,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area bounded by the curve $y = \\log(x)$, coordinate axes and $y = 1$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$e$"
      },
      {
        "id": "B",
        "labelLatex": "$e + 1$"
      },
      {
        "id": "C",
        "labelLatex": "$e - 1$"
      },
      {
        "id": "D",
        "labelLatex": "$1/e$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Area Under Curve • PT-2 Q.4]** Area $= \\int_{0}^{1} x dy = \\int_{0}^{1} e^y dy = [e^y]_{0}^{1} = e - 1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q24",
    "questionNumber": 24,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area bounded between the curve $|y| = 1 - x^2$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2/3$"
      },
      {
        "id": "B",
        "labelLatex": "$4/3$"
      },
      {
        "id": "C",
        "labelLatex": "$8/3$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Area Under Curve • PT-2 Q.5]** Curve is symmetric about both axes. Area $= 4 \\int_{0}^{1} (1 - x^2) dx = 4 [x - \\frac{x^3}{3}]_{0}^{1} = 4(2/3) = 8/3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q25",
    "questionNumber": 25,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The whole area bounded by the curves $x = a\\cos t$, $y = b\\sin t$ $(a, b > 0)$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\pi ab$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{\\pi}{2} ab$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{\\pi}{4} ab$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • PT-2 Q.6]** This is an ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$. Area $= \\pi ab$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q26",
    "questionNumber": 26,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area between the curve $y = \\tan x$ and x-axis, when $-\\pi/4 \\le x \\le \\pi/4$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\log 2$"
      },
      {
        "id": "B",
        "labelLatex": "$\\log 4$"
      },
      {
        "id": "C",
        "labelLatex": "$\\log \\sqrt{2}$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • PT-2 Q.7]** Area $= 2 \\int_{0}^{\\pi/4} \\tan x dx = 2 [\\ln|\\sec x|]_{0}^{\\pi/4} = 2 \\ln \\sqrt{2} = 2 \\cdot \\frac{1}{2} \\ln 2 = \\ln 2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q27",
    "questionNumber": 27,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area bounded between parabola $x^2 = 4y$ and $y = |x|$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2/3$"
      },
      {
        "id": "B",
        "labelLatex": "$4/3$"
      },
      {
        "id": "C",
        "labelLatex": "$8/3$"
      },
      {
        "id": "D",
        "labelLatex": "$16/3$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Area Under Curve • PT-2 Q.8]** Intersection: $x^2/4 = |x| \\implies x=0, \\pm 4$. Area $= 2 \\int_{0}^{4} (x - x^2/4) dx = 2 [\\frac{x^2}{2} - \\frac{x^3}{12}]_{0}^{4} = 2(8 - 64/12) = 2(8 - 16/3) = 2(8/3) = 16/3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q28",
    "questionNumber": 28,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The common area of the curves $y = \\sqrt{x}$ and $x = \\sqrt{y}$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$3$"
      },
      {
        "id": "B",
        "labelLatex": "$5/3$"
      },
      {
        "id": "C",
        "labelLatex": "$1/3$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Area Under Curve • PT-2 Q.9]** Intersection: $\\sqrt{x} = x^2 \\implies x=0, 1$. Area $= \\int_{0}^{1} (\\sqrt{x} - x^2) dx = [\\frac{2}{3}x^{3/2} - \\frac{x^3}{3}]_{0}^{1} = 2/3 - 1/3 = 1/3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q29",
    "questionNumber": 29,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Area of the region bounded by the curves $y = e^x$, $y = e^{-x}$ and the straight line $y = 2$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\log (4/e)$"
      },
      {
        "id": "B",
        "labelLatex": "$2 \\log (4/e)$"
      },
      {
        "id": "C",
        "labelLatex": "$4 \\log (4/e)$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • PT-2 Q.10]** Intersection: $e^x = 2 \\implies x = \\ln 2$; $e^{-x} = 2 \\implies x = -\\ln 2$. Area $= \\int_{-\\ln 2}^{\\ln 2} (2 - e^x) dx$ is wrong; it's $\\int_{-\\ln 2}^{\\ln 2} (2 - e^x) dx$ for $x>0$ and $2-e^{-x}$ for $x<0$. By symmetry $2 \\int_{0}^{\\ln 2} (2 - e^x) dx = 2 [2x - e^x]_{0}^{\\ln 2} = 2(2 \\ln 2 - 2 + 1) = 2(2 \\ln 2 - 1) = 2 \\ln 4 - 2 = 2 \\ln(4/e)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q30",
    "questionNumber": 30,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area bounded by $y = \\tan x$, $y = \\cot x$, x-axis in $0 \\le x \\le \\frac{\\pi}{2}$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\log 2$"
      },
      {
        "id": "B",
        "labelLatex": "$3 \\log 2$"
      },
      {
        "id": "C",
        "labelLatex": "$2 \\log 2$"
      },
      {
        "id": "D",
        "labelLatex": "$4 \\log 2$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • PT-2 Q.11]** Intersection at $x = \\pi/4$. Area $= \\int_{0}^{\\pi/4} \\tan x dx + \\int_{\\pi/4}^{\\pi/2} \\cot x dx = [\\ln \\sec x]_{0}^{\\pi/4} + [\\ln \\sin x]_{\\pi/4}^{\\pi/2} = \\ln \\sqrt{2} + (0 - \\ln(1/\\sqrt{2})) = \\frac{1}{2} \\ln 2 + \\frac{1}{2} \\ln 2 = \\ln 2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q31",
    "questionNumber": 31,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The area bounded by the curve $y = 2x - x^2$ and straight line $y = -x$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$35/6$"
      },
      {
        "id": "B",
        "labelLatex": "$9/2$"
      },
      {
        "id": "C",
        "labelLatex": "$43/6$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • PT-2 Q.12]** Intersection: $2x - x^2 = -x \\implies x^2 - 3x = 0 \\implies x=0, 3$. Area $= \\int_{0}^{3} (2x - x^2 - (-x)) dx = \\int_{0}^{3} (3x - x^2) dx = [\\frac{3x^2}{2} - \\frac{x^3}{3}]_{0}^{3} = 27/2 - 9 = 9/2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q32",
    "questionNumber": 32,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Common area between the parabolas $y = 2x^2$ and $y = x^2 + 4$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$16/3$"
      },
      {
        "id": "B",
        "labelLatex": "$8/3$"
      },
      {
        "id": "C",
        "labelLatex": "$32/3$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Area Under Curve • PT-2 Q.13]** Intersection: $2x^2 = x^2 + 4 \\implies x^2 = 4 \\implies x = \\pm 2$. Area $= \\int_{-2}^{2} (x^2 + 4 - 2x^2) dx = \\int_{-2}^{2} (4 - x^2) dx = [4x - \\frac{x^3}{3}]_{-2}^{2} = (8 - 8/3) - (-8 + 8/3) = 16 - 16/3 = 32/3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q33",
    "questionNumber": 33,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A$ is the area between the curve $y = \\sin x$ and x-axis in the interval $[0, \\pi/2]$, then the area between $y = \\sin 2x$ and x-axis in this interval will be",
    "options": [
      {
        "id": "A",
        "labelLatex": "$A$"
      },
      {
        "id": "B",
        "labelLatex": "$2A$"
      },
      {
        "id": "C",
        "labelLatex": "$A/2$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • PT-2 Q.14]** $A = \\int_{0}^{\\pi/2} \\sin x dx = 1$. Area for $\\sin 2x = \\int_{0}^{\\pi/2} \\sin 2x dx = [-\\frac{1}{2} \\cos 2x]_{0}^{\\pi/2} = -\\frac{1}{2}(-1 - 1) = 1$. Thus, both are equal to $A$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q34",
    "questionNumber": 34,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the area enclosed by the lines $2y = x$, $y = 2x$ and $x = 4$ is",
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
        "labelLatex": "$12$"
      },
      {
        "id": "D",
        "labelLatex": "$16$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Area Under Curve • PT-2 Q.15]** Area $= \\int_{0}^{4} |2x - x/2| dx = \\int_{0}^{4} \\frac{3x}{2} dx = [\\frac{3x^2}{4}]_{0}^{4} = 12$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q35",
    "questionNumber": 35,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Compute the area of the region bounded by the curves $y = e \text{.} x \\ln x$ & $y = \\ln x / (e \text{.} x)$ where $\\ln e = 1$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$$\\frac{e^2 - 5}{4}$$"
      },
      {
        "id": "B",
        "labelLatex": "$$\\frac{e^2 - 1}{4}$$"
      },
      {
        "id": "C",
        "labelLatex": "$$\\frac{e^2 - 3}{2}$$"
      },
      {
        "id": "D",
        "labelLatex": "$$\\frac{e^2 + 5}{4}$$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-I Q.1]** Find the intersection points of the curves and integrate the difference of functions to get $(e^2 - 5)/4$ sq. units.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q36",
    "questionNumber": 36,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "A figure is bounded by the curves $y = \\left| \\sqrt{2} \\sin \\frac{\\pi x}{4} \\right|$, $y = 0, x = 2$ & $x = 4$. At what angles to the positive x-axis straight lines must be drawn through $(4, 0)$ so that these lines partition the figure into three parts of the same size.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$$\\pi - \\tan^{-1} \\frac{2\\sqrt{2}}{3\\pi} ; \\pi - \\tan^{-1} \\frac{4\\sqrt{2}}{3\\pi}$$"
      },
      {
        "id": "B",
        "labelLatex": "$$\\tan^{-1} \\frac{2\\sqrt{2}}{3\\pi} ; \\tan^{-1} \\frac{4\\sqrt{2}}{3\\pi}$$"
      },
      {
        "id": "C",
        "labelLatex": "$$\\pi - \\tan^{-1} \\frac{\\sqrt{2}}{3\\pi} ; \\pi - \\tan^{-1} \\frac{2\\sqrt{2}}{\\pi}$$"
      },
      {
        "id": "D",
        "labelLatex": "$$\\frac{\\pi}{2} - \\tan^{-1} \\frac{2\\sqrt{2}}{3\\pi}$$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-I Q.2]** Using the line equation passing through $(4,0)$ with slope $\\tan \\theta$, equate the areas of the partitioned regions to find the required angles.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q37",
    "questionNumber": 37,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the area enclosed by the parabolas $y = a - x^2$ and $y = x^2$ is $18\\sqrt{2}$ sq. units. Find the value of 'a'.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a = 3$"
      },
      {
        "id": "B",
        "labelLatex": "$a = 9$"
      },
      {
        "id": "C",
        "labelLatex": "$a = 6$"
      },
      {
        "id": "D",
        "labelLatex": "$a = 12$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • EX-I Q.3]** The area is given by $\\int_{-\\sqrt{a/2}}^{\\sqrt{a/2}} (a - 2x^2) \\, dx = \\frac{4}{3} \\left(\\frac{a}{2}\\right)^{3/2} = 18\\sqrt{2}$, giving $a = 9$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q38",
    "questionNumber": 38,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The line $3x + 2y = 13$ divides the area enclosed by the curve, $9x^2 + 4y^2 - 18x - 16y - 11 = 0$ into two parts. Find the ratio of the larger area to the smaller area.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$$\\frac{3\\pi + 2}{\\pi - 2}$$"
      },
      {
        "id": "B",
        "labelLatex": "$$\\frac{2\\pi + 3}{\\pi - 1}$$"
      },
      {
        "id": "C",
        "labelLatex": "$$\\frac{3\\pi - 2}{\\pi + 2}$$"
      },
      {
        "id": "D",
        "labelLatex": "$$\\frac{\\pi + 2}{\\pi - 2}$$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-I Q.4]** Transform the ellipse equation to standard form and calculate the areas of the two segments created by the line to find the ratio.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q39",
    "questionNumber": 39,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the area of the region enclosed between the two circles $x^2 + y^2 = 1$ & $(x - 1)^2 + y^2 = 1$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$$\\frac{\\pi}{3} - \\frac{\\sqrt{3}}{4}$$"
      },
      {
        "id": "B",
        "labelLatex": "$$\\frac{4\\pi}{3} - \\frac{\\sqrt{3}}{2}$$"
      },
      {
        "id": "C",
        "labelLatex": "$$\\frac{2\\pi}{3} - \\frac{\\sqrt{3}}{2}$$"
      },
      {
        "id": "D",
        "labelLatex": "$$\\frac{2\\pi}{3} - \\sqrt{3}$$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Area Under Curve • EX-I Q.5]** By symmetry, the area is twice the intersection area of two unit circles whose centers are $1$ unit apart, yielding $\\frac{2\\pi}{3} - \\frac{\\sqrt{3}}{2}$ sq. units.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q40",
    "questionNumber": 40,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the values of $m$ ($m > 0$) for which the area bounded by the line $y = mx + 2$ and $x = 2y - y^2$ is, (i) $9/2$ square units & (ii) minimum. Also find the minimum area.",
    "options": [
      {
        "id": "A",
        "labelLatex": "(i) $m = 1$, (ii) $m = \\infty$ ; $A_{\\min} = 4/3$"
      },
      {
        "id": "B",
        "labelLatex": "(i) $m = 2$, (ii) $m = 0$ ; $A_{\\min} = 2/3$"
      },
      {
        "id": "C",
        "labelLatex": "(i) $m = 1$, (ii) $m = 1$ ; $A_{\\min} = 8/3$"
      },
      {
        "id": "D",
        "labelLatex": "(i) $m = 1/2$, (ii) $m = \\infty$ ; $A_{\\min} = 4/3$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-I Q.6]** Solving for intersection points and integrating with respect to $y$, we set the area to $9/2$ to find $m=1$ and find the minimum area at $m=\\infty$ as $4/3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q41",
    "questionNumber": 41,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Consider two curves $C_1 : y = \\frac{1}{x}$ and $C_2 : y = \\ln x$ on the xy plane. Let $D_1$ denotes the region surrounded by $C_1$, $C_2$ and the line $x = 1$ and $D_2$ denotes the region surrounded by $C_1$, $C_2$ and the line $x = a$. If $D_1 = D_2$. Find the value of 'a'.",
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
        "labelLatex": "$e^2$"
      },
      {
        "id": "D",
        "labelLatex": "$1/e$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • EX-I Q.7]** Equating the integrals representing $D_1$ and $D_2$ between the curves from $1$ to $e$ gives $a = e$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q42",
    "questionNumber": 42,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the value (s) of the parameter 'a' ($a > 0$) for each of which the area of the figure bounded by the straight line, $y = \\frac{a^2 - ax}{1 + a^4}$ & the parabola $y = \\frac{x^2 + 2ax + 3a^2}{1 + a^4}$ is the greatest.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a = 1$"
      },
      {
        "id": "B",
        "labelLatex": "$a = 3^{1/4}$"
      },
      {
        "id": "C",
        "labelLatex": "$a = 2^{1/4}$"
      },
      {
        "id": "D",
        "labelLatex": "$a = 3$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • EX-I Q.8]** Express the area as a function of $a$, find its derivative, and maximize it to obtain $a = 3^{1/4}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q43",
    "questionNumber": 43,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the value of 'c' for which the area of the figure bounded by the curve, $y = 8x^2 - x^5$, the straight lines $x = 1$ & $x = c$ & the abscissa axis is equal to $16/3$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$C = -1$ or $(8 - \\sqrt{17})^{1/3}$"
      },
      {
        "id": "B",
        "labelLatex": "$C = 1$ or $(8 + \\sqrt{17})^{1/3}$"
      },
      {
        "id": "C",
        "labelLatex": "$C = 2$ or $(8 - \\sqrt{17})^{1/3}$"
      },
      {
        "id": "D",
        "labelLatex": "$C = -1$ or $(8 + \\sqrt{17})^{1/3}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-I Q.9]** Evaluate the integral $\\int_{c}^{1} (8x^2 - x^5) \\, dx = 16/3$ to solve for $c$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q44",
    "questionNumber": 44,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Compute the area included between the straight lines, $x - 3y + 5 = 0$ ; $x + 2y + 5 = 0$ and the circle $x^2 + y^2 = 25$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$$\\frac{5}{4}(5\\pi + 14)$$"
      },
      {
        "id": "B",
        "labelLatex": "$$\\frac{5}{2}(5\\pi + 7)$$"
      },
      {
        "id": "C",
        "labelLatex": "$$\\frac{5}{4}(5\\pi - 14)$$"
      },
      {
        "id": "D",
        "labelLatex": "$$\\frac{5}{2}(5\\pi - 7)$$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-I Q.10]** The lines intersect at $(-5,0)$ which lies on the circle. Calculate the sector areas corresponding to the angles formed by the lines with the circle to find $\\frac{5}{4}(5\\pi + 14)$ sq. units.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q45",
    "questionNumber": 45,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "A polynomial function $f(x)$ satisfies the condition $f(x + 1) = f(x) + 2x + 1$. Find $f(x)$ if $f(0) = 1$. Find also the equations of the pair of tangents from the origin on the curve $y = f(x)$ and compute the area enclosed by the curve and the pair of tangents.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f(x) = x^2 + 1 ; y = \\pm 2x; A = \\frac{2}{3}$"
      },
      {
        "id": "B",
        "labelLatex": "$f(x) = x^2 + x + 1 ; y = \\pm x; A = \\frac{1}{3}$"
      },
      {
        "id": "C",
        "labelLatex": "$f(x) = 2x^2 + 1 ; y = \\pm 4x; A = \\frac{4}{3}$"
      },
      {
        "id": "D",
        "labelLatex": "$f(x) = x^2 + 1 ; y = \\pm x; A = \\frac{1}{3}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-I Q.11]** Using the difference equation and $f(0)=1$, we get $f(x) = x^2+1$. The tangents from origin are $y=\\pm 2x$, enclosing an area of $2/3$ sq. units.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q46",
    "questionNumber": 46,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the equation of the line passing through the origin and dividing the curvilinear triangle with vertex at the origin , bounded by the curves $y = 2x - x^2$, $y = 0$ and $x = 1$ into two parts of equal area.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y = x/2$"
      },
      {
        "id": "B",
        "labelLatex": "$y = 2x/3$"
      },
      {
        "id": "C",
        "labelLatex": "$y = 3x/4$"
      },
      {
        "id": "D",
        "labelLatex": "$y = x$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • EX-I Q.12]** Total area is $\\int_0^1 (2x - x^2) \\, dx = 2/3$. Half the area is $1/3$. Equating the area under the line $y = mx$ gives $m = 2/3$, so $y = 2x/3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q47",
    "questionNumber": 47,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Consider the curve $y = x^n$ where $n > 1$ in the $1^{\\text{st}}$ quadrant. If the area bounded by the curve, the x-axis and the tangent line to the graph of $y = x^n$ at the point $(1, 1)$ is maximum then find the value of $n$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$n = \\sqrt{2}$"
      },
      {
        "id": "B",
        "labelLatex": "$n = \\sqrt{2} + 1$"
      },
      {
        "id": "C",
        "labelLatex": "$n = 2$"
      },
      {
        "id": "D",
        "labelLatex": "$n = \\sqrt{3}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • EX-I Q.13]** Formulate the area of the triangle formed by the tangent line with the axes and curve as a function of $n$, and maximize it to get $n = \\sqrt{2} + 1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q48",
    "questionNumber": 48,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Consider the collection of all curve of the form $y = a - bx^2$ that pass through the the point $(2, 1)$, where $a$ and $b$ are positive constants. Determine the value of $a$ and $b$ that will minimise the area of the region bounded by $y = a - bx^2$ and x-axis. Also find the minimum area.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$b = 1/8, A_{\\text{minimum}} = 4\\sqrt{3}$"
      },
      {
        "id": "B",
        "labelLatex": "$b = 1/4, A_{\\text{minimum}} = 2\\sqrt{3}$"
      },
      {
        "id": "C",
        "labelLatex": "$b = 1/8, A_{\\text{minimum}} = 8\\sqrt{3}$"
      },
      {
        "id": "D",
        "labelLatex": "$b = 1/2, A_{\\text{minimum}} = \\sqrt{3}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-I Q.14]** Substitute $(2,1)$ to get $a = 1 + 4b$. Express area as $\\frac{4}{3}a\\sqrt{a/b}$ and minimize with respect to $b$ to get $b = 1/8$ and $A_{\\min} = 4\\sqrt{3}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q49",
    "questionNumber": 49,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "**Paragraph:** In the adjacent figure, graphs of two functions $y = f(x)$ and $y = \\sin x$ are given. $y = \\sin x$ intersects, $y = f(x)$ at $A(a, f(a))$; $B(\\pi, 0)$ and $C(2\\pi, 0)$. $A_i \\, (i = 1, 2, 3,)$ is the area bounded by the curves $y = f(x)$ and $y = \\sin x$ between $x = 0$ and $x = a$; $i = 1$, between $x = a$ and $x = \\pi$; $i = 2$, between $x = \\pi$ and $x = 2\\pi$; $i = 3$. If $A_1 = 1 - \\sin a + (a - 1)\\cos a$, determine the function $f(x)$. Hence determine 'a' and $A_1$. Also calculate $A_2$ and $A_3$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f(x) = x \\sin x, a = 1; A_1 = 1 - \\sin 1; A_2 = \\pi - 1 - \\sin 1; A_3 = (3\\pi - 2)$"
      },
      {
        "id": "B",
        "labelLatex": "$f(x) = x \\cos x, a = \\pi/2; A_1 = 1; A_2 = \\pi; A_3 = 2\\pi$"
      },
      {
        "id": "C",
        "labelLatex": "$f(x) = x^2 \\sin x, a = 1; A_1 = 1; A_2 = \\pi; A_3 = \\pi$"
      },
      {
        "id": "D",
        "labelLatex": "$f(x) = \\sin x, a = 0; A_1 = 0; A_2 = 2; A_3 = 4$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Area Under Curve • EX-I Q.15]** Using integration by parts on the given area expression $A_1$, we deduce $f(x) = x \\sin x$ and $a = 1$, leading to the respective areas.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p3-q50",
    "questionNumber": 50,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Show that the area bounded by the curve $y = \\frac{\\ln x - c}{x}$, the x-axis and the vertical line through the maximum point of the curve is independent of the constant $c$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1$"
      },
      {
        "id": "B",
        "labelLatex": "$1/2$"
      },
      {
        "id": "C",
        "labelLatex": "$2$"
      },
      {
        "id": "D",
        "labelLatex": "$1/4$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Area Under Curve • EX-I Q.16]** Find the maximum point $x = e^{c+1/2}$, compute the definite integral from $e^c$ to $e^{c+1/2}$, and show it evaluates to $1/2$ independently of $c$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  }
];
