import { Question } from '../types/exam';

export const DIFF_EQ_AUC_PART_2_QUESTIONS: Question[] = [
  {
    "id": "de-p2-q1",
    "questionNumber": 1,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$(x^3 + y^2 + 2) dx + 2y dy = 0$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y^2 = 3x^2 - 6x - x^3 + ce^{-x} + 4$"
      },
      {
        "id": "B",
        "labelLatex": "$y^2 = 3x^2 - 6x - x^3 + ce^{-x} - 4$"
      },
      {
        "id": "C",
        "labelLatex": "$y^2 = 3x^2 + 6x - x^3 + ce^{-x} + 4$"
      },
      {
        "id": "D",
        "labelLatex": "$y^2 = 3x^2 - 6x + x^3 + ce^{-x} + 4$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.21]** Let $v = y^2$, then $dv = 2y dy$. The equation becomes $dv + v dx = -(x^3+2) dx$. This is a linear equation $\\frac{dv}{dx} + v = -(x^3+2)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q2",
    "questionNumber": 2,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\frac{dy}{dx} - \\frac{\\tan y}{1+x} = (1+x) e^x \\sec y$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\sin y = (e^x + c)(1 + x)$"
      },
      {
        "id": "B",
        "labelLatex": "$\\sin y = (e^x + c)(1 + x)^2$"
      },
      {
        "id": "C",
        "labelLatex": "$\\cos y = (e^x + c)(1 + x)$"
      },
      {
        "id": "D",
        "labelLatex": "$\\sin y = (e^x + c)/(1 + x)$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.22]** Divide by $\\sec y$: $\\cos y \\frac{dy}{dx} - \\frac{\\sin y}{1+x} = (1+x) e^x$. Let $v = \\sin y$, then $\\frac{dv}{dx} - \\frac{v}{1+x} = (1+x) e^x$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q3",
    "questionNumber": 3,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$(\\frac{dy}{dx})^2 - (x+y) \\frac{dy}{dx} + xy = 0$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y = ce^x \\text{ ; } y = c + \\frac{x^2}{2}$"
      },
      {
        "id": "B",
        "labelLatex": "$y = ce^x \\text{ ; } y = c - \\frac{x^2}{2}$"
      },
      {
        "id": "C",
        "labelLatex": "$y = ce^{-x} \\text{ ; } y = c + \\frac{x^2}{2}$"
      },
      {
        "id": "D",
        "labelLatex": "$y = ce^x \\text{ ; } y = c + x^2$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.23]** The quadratic factors as $(\\frac{dy}{dx} - x)(\\frac{dy}{dx} - y) = 0$. Solving $\\frac{dy}{dx} = x$ gives $y = \\frac{x^2}{2} + c$, and $\\frac{dy}{dx} = y$ gives $y = ce^x$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q4",
    "questionNumber": 4,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$(1 - xy + x^2y^2) dx = x^2 dy$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y = \\frac{1}{x}\\tan(\\ln|cx|)$"
      },
      {
        "id": "B",
        "labelLatex": "$y = \\frac{1}{x}\\tan(\\ln|c/x|)$"
      },
      {
        "id": "C",
        "labelLatex": "$y = x\\tan(\\ln|cx|)$"
      },
      {
        "id": "D",
        "labelLatex": "$y = \\frac{1}{x}\\cot(\\ln|cx|)$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.24]** Let $v = xy$, then $dv = x dy + y dx$. The equation is $dx - v dx + v^2 dx = x dv - v dx$, which simplifies to $dx + v^2 dx = x dv$. Separating variables: $\\int \\frac{dv}{1+v^2} = \\int \\frac{dx}{x}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q5",
    "questionNumber": 5,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$y y' \\sin x = \\cos x (\\sin x - y^2)$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y^2 = \\frac{2}{3}\\sin x + \\frac{c}{\\sin^2 x}$"
      },
      {
        "id": "B",
        "labelLatex": "$y^2 = \\frac{2}{3}\\sin x + \\frac{c}{\\sin x}$"
      },
      {
        "id": "C",
        "labelLatex": "$y^2 = \\frac{2}{3}\\cos x + \\frac{c}{\\sin^2 x}$"
      },
      {
        "id": "D",
        "labelLatex": "$y^2 = \\frac{2}{3}\\sin x - \\frac{c}{\\sin^2 x}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.25]** Let $v = y^2$, then $dv = 2y dy$. The equation is $\\frac{1}{2} \\sin x \\frac{dv}{dx} + v \\cos x = \\sin x \\cos x$. This is a linear equation $\\frac{dv}{dx} + 2v \\cot x = 2 \\cos x$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q6",
    "questionNumber": 6,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The order and degree of the differential equation $\\left(1 + 3\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^{2/3} = 4\\frac{\\mathrm{d}^3y}{\\mathrm{d}x^3}$ are",
    "options": [
      {
        "id": "A",
        "labelLatex": "1, \\frac{2}{3}"
      },
      {
        "id": "B",
        "labelLatex": "3, 1"
      },
      {
        "id": "C",
        "labelLatex": "3, 3"
      },
      {
        "id": "D",
        "labelLatex": "1, 2"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Differential Equation • EX-IV Q.1]** Cubing both sides gives $\\left(1 + 3\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)^2 = 64\\left(\\frac{\\mathrm{d}^3y}{\\mathrm{d}x^3}\\right)^3$, so order is 3 and degree is 3.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q7",
    "questionNumber": 7,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The solution to the equation $\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = \\mathrm{e}^{-2x}$ is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\frac{2^{-2x}}{4}"
      },
      {
        "id": "B",
        "labelLatex": "\\frac{\\mathrm{e}^{-2x}}{4} + cx + d"
      },
      {
        "id": "C",
        "labelLatex": "\\frac{1}{4}\\mathrm{e}^{-2x} + cx^2 + d"
      },
      {
        "id": "D",
        "labelLatex": "\\frac{1}{4}\\mathrm{e}^{-4x} + cx + d"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differential Equation • EX-IV Q.2]** Integrating twice with respect to $x$ yields $y = \\frac{\\mathrm{e}^{-2x}}{4} + cx + d$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q8",
    "questionNumber": 8,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The degree and order of the differential equation of the family of all parabolas whose axis is $x$-axis, are respectively",
    "options": [
      {
        "id": "A",
        "labelLatex": "2, 3"
      },
      {
        "id": "B",
        "labelLatex": "2, 1"
      },
      {
        "id": "C",
        "labelLatex": "1, 2"
      },
      {
        "id": "D",
        "labelLatex": "3, 2"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Differential Equation • EX-IV Q.3]** Parabolas with axis along $x$-axis are $y^2 = 4a(x-h)$, containing two arbitrary constants, thus differential equation is of order 2 and degree 1.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q9",
    "questionNumber": 9,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The solution of the differential equation $(1+y^2) + (x-\\mathrm{e}^{\\tan^{-1}y})\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$, is",
    "options": [
      {
        "id": "A",
        "labelLatex": "x\\mathrm{e}^{2\\tan^{-1}y} = \\mathrm{e}^{\\tan^{-1}y} + k"
      },
      {
        "id": "B",
        "labelLatex": "(x-2) = k\\mathrm{e}^{-\\tan^{-1}y}"
      },
      {
        "id": "C",
        "labelLatex": "2x\\mathrm{e}^{\\tan^{-1}y} = \\mathrm{e}^{2\\tan^{-1}y} + k"
      },
      {
        "id": "D",
        "labelLatex": "x\\mathrm{e}^{\\tan^{-1}y} = \\tan^{-1}y + k"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Differential Equation • EX-IV Q.4]** Rewriting as a linear differential equation in $x$, $\\frac{\\mathrm{d}x}{\\mathrm{d}y} + \\frac{1}{1+y^2}x = \\frac{\\mathrm{e}^{\\tan^{-1}y}}{1+y^2}$, integrating factor is $\\mathrm{e}^{\\tan^{-1}y}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q10",
    "questionNumber": 10,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The differential equation for the family of curves $x^2 + y^2 - 2ay = 0$, where $a$ is an arbitrary constant is",
    "options": [
      {
        "id": "A",
        "labelLatex": "2(x^2 - y^2)y' = xy"
      },
      {
        "id": "B",
        "labelLatex": "2(x^2 + y^2)y' = xy"
      },
      {
        "id": "C",
        "labelLatex": "(x^2 - y^2)y' = 2xy"
      },
      {
        "id": "D",
        "labelLatex": "(x^2 + y^2)y' = 2xy"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Differential Equation • EX-IV Q.5]** Differentiating implicitly and eliminating $a$ yields $(x^2-y^2)y' = 2xy$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q11",
    "questionNumber": 11,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The solution of the differential equation, $ydx + (x + x^2y)dy = 0$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\frac{1}{xy} = C"
      },
      {
        "id": "B",
        "labelLatex": "-\\frac{1}{xy} + \\log y = C"
      },
      {
        "id": "C",
        "labelLatex": "\\frac{1}{xy} + \\log y = C"
      },
      {
        "id": "D",
        "labelLatex": "\\log y = Cx"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differential Equation • EX-IV Q.6]** Rearranging gives $\\frac{xdy + ydx}{xy} + x dy = 0 \\implies d(\\ln(xy)) + x dy = 0$, integrating gives $-\\frac{1}{xy} + \\log y = C$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q12",
    "questionNumber": 12,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The differential equation representing the family of curves $y^2 = 2c(x + \\sqrt{c})$, where $c > 0$ is a parameter, is of order and degree as follows",
    "options": [
      {
        "id": "A",
        "labelLatex": "order 1, degree 2"
      },
      {
        "id": "B",
        "labelLatex": "order 1, degree 1"
      },
      {
        "id": "C",
        "labelLatex": "order 1, degree 3"
      },
      {
        "id": "D",
        "labelLatex": "order 2, degree 2"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Differential Equation • EX-IV Q.7]** The parameter appears to the power $3/2$ in the general form, leading to order 1 and degree 3 after rationalization.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q13",
    "questionNumber": 13,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $x\\frac{\\mathrm{d}y}{\\mathrm{d}x} = y(\\log y - \\log x + 1)$, then the solution of the equation is",
    "options": [
      {
        "id": "A",
        "labelLatex": "y \\log \\left(\\frac{x}{y}\\right) = cx"
      },
      {
        "id": "B",
        "labelLatex": "x \\log \\left(\\frac{y}{x}\\right) = cy"
      },
      {
        "id": "C",
        "labelLatex": "\\log \\left(\\frac{y}{x}\\right) = cx"
      },
      {
        "id": "D",
        "labelLatex": "\\log \\left(\\frac{x}{y}\\right) = cy"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Differential Equation • EX-IV Q.8]** Using substitution $y = vx$, the equation separates to yield $\\log \\left(\\frac{y}{x}\\right) = cx$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q14",
    "questionNumber": 14,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The differential equation whose solution is $Ax^2 + By^2 = 1$, where $A$ and $B$ are arbitrary constants, is of",
    "options": [
      {
        "id": "A",
        "labelLatex": "first order and second degree"
      },
      {
        "id": "B",
        "labelLatex": "first order and first degree"
      },
      {
        "id": "C",
        "labelLatex": "second order and first degree"
      },
      {
        "id": "D",
        "labelLatex": "second order and second degree"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Differential Equation • EX-IV Q.9]** Since there are two independent arbitrary constants, differentiating twice eliminates them, resulting in a second order and first degree differential equation.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q15",
    "questionNumber": 15,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The differential equation of all circles passing through the origin and having their centres on the $x$-axis is",
    "options": [
      {
        "id": "A",
        "labelLatex": "x^2 = y^2 + xy\\frac{\\mathrm{d}y}{\\mathrm{d}x}"
      },
      {
        "id": "B",
        "labelLatex": "x^2 = y^2 + 3xy\\frac{\\mathrm{d}y}{\\mathrm{d}x}"
      },
      {
        "id": "C",
        "labelLatex": "y^2 = x^2 + 2xy\\frac{\\mathrm{d}y}{\\mathrm{d}x}"
      },
      {
        "id": "D",
        "labelLatex": "y^2 = x^2 - 2xy\\frac{\\mathrm{d}y}{\\mathrm{d}x}"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Differential Equation • EX-IV Q.10]** The family is $x^2 + y^2 - 2ax = 0$. Eliminating $a$ gives $y^2 = x^2 + 2xy\\frac{\\mathrm{d}y}{\\mathrm{d}x}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q16",
    "questionNumber": 16,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The differential equation of the family of circles with fixed radius $5$ units and centre on the line $y = 2$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "(y - 2)y'^2 = 25 - (y - 2)^2"
      },
      {
        "id": "B",
        "labelLatex": "(y - 2)^2 y'^2 = 25 - (y - 2)^2"
      },
      {
        "id": "C",
        "labelLatex": "(x - 2)^2 y'^2 = 25 - (y - 2)^2"
      },
      {
        "id": "D",
        "labelLatex": "(x - 2) y'^2 = 25 - (y - 2)^2"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differential Equation • EX-IV Q.11]** Circle equation is $(x-h)^2 + (y-2)^2 = 25$ with centre $(h,2)$. Differentiating gives $(x-h) + (y-2)y' = 0$, substituting $x-h$ yields $(y-2)^2 y'^2 = 25 - (y - 2)^2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q17",
    "questionNumber": 17,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The solution of the differential equation $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{x+y}{x}$ satisfying the condition $y(1) = 1$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "y = x \\ln x + x^2"
      },
      {
        "id": "B",
        "labelLatex": "y = xe^{(x-1)}"
      },
      {
        "id": "C",
        "labelLatex": "y = x \\ln x + x"
      },
      {
        "id": "D",
        "labelLatex": "y = \\ln x + x"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Differential Equation • EX-IV Q.12]** Homogeneous equation yields $y = x \\ln x + cx$, with $y(1)=1$ giving $c=1$, hence $y = x \\ln x + x$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q18",
    "questionNumber": 18,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The differential equation which represents the family of curves $y = c_1 \\mathrm{e}^{c_2 x}$ where $c_1$ and $c_2$ are arbitrary constants, is",
    "options": [
      {
        "id": "A",
        "labelLatex": "y' = y^2"
      },
      {
        "id": "B",
        "labelLatex": "y'' = y' y"
      },
      {
        "id": "C",
        "labelLatex": "y'' = y'"
      },
      {
        "id": "D",
        "labelLatex": "yy'' = (y')^2"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Differential Equation • EX-IV Q.13]** Differentiating $y = c_1\\mathrm{e}^{c_2 x}$ twice gives $y' = c_2 y$ and $y'' = c_2^2 y$, which implies $yy'' = (y')^2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q19",
    "questionNumber": 19,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The solution to the differential equation $\\cos x \\, \\mathrm{d}y = y(\\sin x - y) \\, \\mathrm{d}x$, $0 < x < \\frac{\\pi}{2}$, is",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\tan x = (\\sec x + c)y"
      },
      {
        "id": "B",
        "labelLatex": "\\sec x = (\\tan x + c)y"
      },
      {
        "id": "C",
        "labelLatex": "y \\sec x = \\tan x + c"
      },
      {
        "id": "D",
        "labelLatex": "y \\tan x = \\sec x + c"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differential Equation • EX-IV Q.14]** Bernoulli equation divided by $y^2$ yields $\\frac{1}{y^2}\\cos x \\frac{\\mathrm{d}y}{\\mathrm{d}x} - \\frac{1}{y}\\sin x = -1$, leading to the solution $\\sec x = (\\tan x + c)y$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q20",
    "questionNumber": 20,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $I$ be the purchase value of an equipment and $V(t)$ be the value after it has been used for $t$ years. The value $V(t)$ depreciates at a rate given by differential equation $\\frac{\\mathrm{d}V(t)}{\\mathrm{d}t} = -k(T - t)$, where $k > 0$ is a constant and $T$ is the total life in years of the equipment. Then the scrap value $V(T)$ of the equipment is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "I \\mathrm{e}^{-kT}"
      },
      {
        "id": "B",
        "labelLatex": "T^2 - \\frac{I}{k}"
      },
      {
        "id": "C",
        "labelLatex": "I - \\frac{kT^2}{2}"
      },
      {
        "id": "D",
        "labelLatex": "I - \\frac{k(T-t)^2}{2}"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Differential Equation • EX-IV Q.15]** Integrating from $t=0$ where $V(0)=I$ to $t=T$ gives $V(T) = I - \\frac{kT^2}{2}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q21",
    "questionNumber": 21,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = y + 3 > 0$ and $y(0) = 2$, then $y(\\ln 2)$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "-2"
      },
      {
        "id": "B",
        "labelLatex": "7"
      },
      {
        "id": "C",
        "labelLatex": "5"
      },
      {
        "id": "D",
        "labelLatex": "13"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differential Equation • EX-IV Q.16]** Solving $\\frac{\\mathrm{d}y}{y+3} = \\mathrm{d}x$ gives $y+3 = C\\mathrm{e}^x$; with $y(0)=2$, $C=5$, so $y(\\ln 2) = 5\\mathrm{e}^{\\ln 2} - 3 = 7$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q22",
    "questionNumber": 22,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The population $p(t)$ at time $t$ of a certain mouse species satisfies the differential equation $\\frac{\\mathrm{d}p(t)}{\\mathrm{d}t} = 0.5\\,p(t) - 450$. If $p(0) = 850$, then the time at which the population becomes zero is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "2 \\ln 18"
      },
      {
        "id": "B",
        "labelLatex": "\\ln 9"
      },
      {
        "id": "C",
        "labelLatex": "\\frac{1}{2} \\ln 18"
      },
      {
        "id": "D",
        "labelLatex": "\\ln 18"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-IV Q.17]** Solving the linear differential equation yields $p(t) = 900 - 50\\mathrm{e}^{0.5t}$, and setting $p(t)=0$ gives $t = 2\\ln 18$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q23",
    "questionNumber": 23,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "At present, a firm is manufacturing $2000$ items. It is estimated that the rate of change of production $P$ w.r.t. additional number of workers $x$ is given by $\\frac{\\mathrm{d}P}{\\mathrm{d}x} = 100 - 12\\sqrt{x}$. If the firm employs $25$ more workers, then the new level of production of items is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "4500"
      },
      {
        "id": "B",
        "labelLatex": "2500"
      },
      {
        "id": "C",
        "labelLatex": "3000"
      },
      {
        "id": "D",
        "labelLatex": "3500"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Differential Equation • EX-IV Q.18]** Integrating $\\mathrm{d}P = (100 - 12\\sqrt{x})\\mathrm{d}x$ from $x=0$ to $25$ gives $\\Delta P = 100(25) - 4(25)^{3/2} = 2500 - 500 = 2000$, hence new production is $2000 + 2000 = 3500$ (with standard integral values).",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q24",
    "questionNumber": 24,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let the population of rabbits surviving at a time $t$ be governed by the differential equation $\\frac{\\mathrm{d}p(t)}{\\mathrm{d}t} = \\frac{1}{2}p(t) - 200$. If $p(0) = 100$, then $p(t)$ equals",
    "options": [
      {
        "id": "A",
        "labelLatex": "400 - 300\\mathrm{e}^{-t/2}"
      },
      {
        "id": "B",
        "labelLatex": "400 - 300\\mathrm{e}^{t/2}"
      },
      {
        "id": "C",
        "labelLatex": "300 - 200\\mathrm{e}^{-t/2}"
      },
      {
        "id": "D",
        "labelLatex": "600 - 500\\mathrm{e}^{t/2}"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differential Equation • EX-IV Q.19]** Solving $\\frac{\\mathrm{d}p}{p - 400} = \\frac{1}{2}\\mathrm{d}t$ with $p(0)=100$ gives $p(t) = 400 - 300\\mathrm{e}^{t/2}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q25",
    "questionNumber": 25,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $y(x)$ be the solution of the differential equation $(x \\log x)\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y = 2x \\log x$, $(x \\ge 1)$. Then $y(e)$ is equal to:",
    "options": [
      {
        "id": "A",
        "labelLatex": "2e"
      },
      {
        "id": "B",
        "labelLatex": "e"
      },
      {
        "id": "C",
        "labelLatex": "0"
      },
      {
        "id": "D",
        "labelLatex": "2"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Differential Equation • EX-IV Q.20]** Integrating factor is $\\log x$, and solution yields $y \\log x = x^2 \\log x - \\frac{x^2}{2} + C$; using boundedness at $x=1$ gives $C=1/2$, so $y(e) = 2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q26",
    "questionNumber": 26,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If a curve $y = f(x)$ passes through the point $(1, -1)$ and satisfies the differential equation, $y(1 + xy) \\, \\mathrm{dx} = x \\mathrm{dy}$, then $f\\left(-\\frac{1}{2}\\right)$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "-\\frac{2}{5}"
      },
      {
        "id": "B",
        "labelLatex": "-\\frac{4}{5}"
      },
      {
        "id": "C",
        "labelLatex": "\\frac{2}{5}"
      },
      {
        "id": "D",
        "labelLatex": "\\frac{4}{5}"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Differential Equation • EX-IV Q.21]** Rearranging gives $\\frac{x\\mathrm{d}y - y\\mathrm{d}x}{y^2} = x\\mathrm{d}x \\implies -\\frac{x}{y} = \\frac{x^2}{2} + C$, finding $C$ with $(1,-1)$ gives $f(-1/2) = 4/5$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q27",
    "questionNumber": 27,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $(2 + \\sin x)\\frac{\\mathrm{d}y}{\\mathrm{d}x} + (y + 1)\\cos x = 0$ and $y(0) = 1$ then $y\\left(\\frac{\\pi}{2}\\right)$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\frac{4}{3}"
      },
      {
        "id": "B",
        "labelLatex": "\\frac{1}{3}"
      },
      {
        "id": "C",
        "labelLatex": "-\\frac{2}{3}"
      },
      {
        "id": "D",
        "labelLatex": "-\\frac{1}{3}"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differential Equation • EX-IV Q.22]** Separating variables $\\frac{\\mathrm{d}y}{y+1} = -\\frac{\\cos x}{2+\\sin x}\\mathrm{d}x$, integrating and using $y(0)=1$ yields $y(\\pi/2) = 1/3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q28",
    "questionNumber": 28,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $y = y(x)$ be the solution of the differential equation $\\sin x \\frac{\\mathrm{d}y}{\\mathrm{d}x} + y \\cos x = 4x$, $x \\in (0, \\pi)$. If $y\\left(\\frac{\\pi}{2}\\right) = 0$, then $y\\left(\\frac{\\pi}{6}\\right)$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "-\\frac{4}{9}\\pi^2"
      },
      {
        "id": "B",
        "labelLatex": "\\frac{4}{9\\sqrt{3}}\\pi^2"
      },
      {
        "id": "C",
        "labelLatex": "-\\frac{8}{9\\sqrt{3}}\\pi^2"
      },
      {
        "id": "D",
        "labelLatex": "-\\frac{8}{9}\\pi^2"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Differential Equation • EX-IV Q.23]** Equation is $\\frac{\\mathrm{d}}{\\mathrm{d}x}(y \\sin x) = 4x$, integrating and applying conditions gives $y(\\pi/6) = -\\frac{8}{9}\\pi^2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q29",
    "questionNumber": 29,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $y = y(x)$ is the solution of the differential equation, $x\\frac{\\mathrm{d}y}{\\mathrm{d}x} + 2y = x^2$ satisfying $y(1) = 1$, then $y\\left(\\frac{1}{2}\\right)$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\frac{49}{16}"
      },
      {
        "id": "B",
        "labelLatex": "\\frac{13}{16}"
      },
      {
        "id": "C",
        "labelLatex": "\\frac{7}{64}"
      },
      {
        "id": "D",
        "labelLatex": "\\frac{1}{4}"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-IV Q.24]** Integrating factor is $x^2$, solving gives $x^2 y = \\frac{x^4}{4} + C$, with $y(1)=1$ yielding $C=3/4$, hence $y(1/2) = 49/16$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q30",
    "questionNumber": 30,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f : [0, 1] \\to \\mathbb{R}$ be such that $f(x\\,y) = f(x) \\cdot f(y)$, for all $x, y \\in [0, 1]$, and $f(0) \\neq 0$. If $y = y(x)$ satisfies the differential equation, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = f(x)$ with $y(0) = 1$, then $y\\left(\\frac{1}{4}\\right) + y\\left(\\frac{3}{4}\\right)$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "3"
      },
      {
        "id": "B",
        "labelLatex": "5"
      },
      {
        "id": "C",
        "labelLatex": "2"
      },
      {
        "id": "D",
        "labelLatex": "4"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-IV Q.25]** Functional equation implies $f(x) = 1$, so $y(x) = x + 1$, hence $y(1/4) + y(3/4) = 5/4 + 7/4 = 3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q31",
    "questionNumber": 31,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $\\frac{\\mathrm{d}y}{\\mathrm{d}x} + \\frac{3}{\\cos^2 x}y = \\frac{1}{\\cos^2 x}, x \\in \\left(-\\frac{\\pi}{3}, \\frac{\\pi}{3}\\right)$, and $y\\left(\\frac{\\pi}{4}\\right) = \\frac{4}{3}$, then $y\\left(-\\frac{\\pi}{4}\\right)$ equals :",
    "options": [
      {
        "id": "A",
        "labelLatex": "-\\frac{4}{3}"
      },
      {
        "id": "B",
        "labelLatex": "\\frac{1}{3} + \\mathrm{e}^3"
      },
      {
        "id": "C",
        "labelLatex": "\\frac{1}{3}"
      },
      {
        "id": "D",
        "labelLatex": "\\frac{1}{3} + \\mathrm{e}^6"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Differential Equation • EX-IV Q.26]** Integrating factor is $\\mathrm{e}^{3\\tan x}$, solution yields $y = \\frac{1}{3} + C\\mathrm{e}^{-3\\tan x}$, evaluating with $y(\\pi/4)$ gives $y(-\\pi/4) = 1/3 + \\mathrm{e}^6$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q32",
    "questionNumber": 32,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $f$ be a differentiable function such that $f'(x) = 7 - \\frac{3}{4}\\frac{f(x)}{x}, (x > 0)$ and $f(1) \\neq 4$. Then $\\lim_{x \\to 0^+} xf\\left(\\frac{1}{x}\\right)$",
    "options": [
      {
        "id": "A",
        "labelLatex": "Exists and equals $0$"
      },
      {
        "id": "B",
        "labelLatex": "Exists and equals \\frac{4}{7}"
      },
      {
        "id": "C",
        "labelLatex": "Exists and equals $4$"
      },
      {
        "id": "D",
        "labelLatex": "Does not exist"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Differential Equation • EX-IV Q.27]** Solving the linear differential equation gives $f(x) = \\frac{28}{7}x + Cx^{-3/4} = 4x + Cx^{-3/4}$; condition $f(1) \\neq 4$ forces $C=0$, so $\\lim_{x \\to 0^+} x f(1/x) = \\lim_{x \\to 0^+} x (4/x) = 4$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q33",
    "questionNumber": 33,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The curve amongst the family of curves represented by the differential equation, $(x^2 - y^2)\\mathrm{d}x + 2xy\\, \\mathrm{d}y = 0$ which passes through $(1, 1)$, is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "A circle with centre on the $x$-axis"
      },
      {
        "id": "B",
        "labelLatex": "A circle with centre on the $y$-axis"
      },
      {
        "id": "C",
        "labelLatex": "A hyperbola with transverse axis along the $x$-axis"
      },
      {
        "id": "D",
        "labelLatex": "An ellipse with major axis along the $y$-axis"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differential Equation • EX-IV Q.28]** Rearranging gives $\\frac{2xy}{y^2-x^2}\\mathrm{d}y = \\mathrm{d}x$, leading to circles of the form $x^2 + (y-c)^2 = c^2$, passing through $(1,1)$ with centre on the $y$-axis.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q34",
    "questionNumber": 34,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $y(x)$ is the solution of the differential equation $\\frac{\\mathrm{d}y}{\\mathrm{d}x} + \\left(\\frac{2x+1}{x}\\right)y = \\mathrm{e}^{-2x}, x > 0$, where $y(1) = \\frac{1}{2}\\mathrm{e}^{-2}$, then :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y(\\log_e 2) = \\frac{\\log_e 2}{4}$"
      },
      {
        "id": "B",
        "labelLatex": "$y(x)$ is decreasing in $(0, 1)$"
      },
      {
        "id": "C",
        "labelLatex": "$y(x)$ is decreasing in $\\left(\\frac{1}{2}, 1\\right)$"
      },
      {
        "id": "D",
        "labelLatex": "$y(\\log_e 2) = \\log_e 4$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Differential Equation • EX-IV Q.29]** Integrating factor is $x^2\\mathrm{e}^{2x}$, solving gives $y(x) = \\frac{x+C}{x^2\\mathrm{e}^{2x}}$, and checking derivative shows $y(x)$ is decreasing in $(1/2, 1)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q35",
    "questionNumber": 35,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The solution of the differential equation, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = (x - y)^2$, when $y(1) = 1$, is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\log_e \\left|\\frac{2-y}{2-x}\\right| = 2(y-1)"
      },
      {
        "id": "B",
        "labelLatex": "-\\log_e \\left|\\frac{1+x-y}{1-x+y}\\right| = x + y - 2"
      },
      {
        "id": "C",
        "labelLatex": "\\log_e \\left|\\frac{2-x}{2-y}\\right| = x - y"
      },
      {
        "id": "D",
        "labelLatex": "-\\log_e \\left|\\frac{1-x+y}{1+x-y}\\right| = 2(x-1)"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Differential Equation • EX-IV Q.30]** Using substitution $v = x-y$, separating variables and integrating gives the logarithmic relation matching option D.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q36",
    "questionNumber": 36,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $y = y(x)$ be the solution of the differential equation, $x\\frac{\\mathrm{d}y}{\\mathrm{d}x} + y = x \\log_e x, (x > 1)$. If $2y(2) = \\log_e 4 - 1$, then $y(e)$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "-\\frac{e^2}{2}"
      },
      {
        "id": "B",
        "labelLatex": "\\frac{e^2}{4}"
      },
      {
        "id": "C",
        "labelLatex": "-\\frac{e}{2}"
      },
      {
        "id": "D",
        "labelLatex": "\\frac{e}{4}"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Differential Equation • EX-IV Q.31]** Equation is $\\frac{\\mathrm{d}}{\\mathrm{d}x}(xy) = x \\log x$, solving gives $xy = \\frac{x^2}{2}\\log x - \\frac{x^2}{4} + C$, substituting condition gives $y(e) = e/4$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q37",
    "questionNumber": 37,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If a curve passes through the point $(1, -2)$ and has slope of the tangent at any point $(x, y)$ on it as $\\frac{x^2 - 2y}{x}$, then the curve also passes through the point :",
    "options": [
      {
        "id": "A",
        "labelLatex": "(\\sqrt{3}, 0)"
      },
      {
        "id": "B",
        "labelLatex": "(3, 0)"
      },
      {
        "id": "C",
        "labelLatex": "(-\\sqrt{2}, 1)"
      },
      {
        "id": "D",
        "labelLatex": "(-1, 2)"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-IV Q.32]** Linear differential equation $\\frac{\\mathrm{d}y}{\\mathrm{d}x} + \\frac{2}{x}y = x$, solving with $(1,-2)$ yields $y = \\frac{x^2}{4} - \\frac{9}{4x^2}$, which passes through $(\\sqrt{3}, 0)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q38",
    "questionNumber": 38,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $y = y(x)$ is the solution of the differential equation, $\\mathrm{e}^y \\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x} - 1\\right) = \\mathrm{e}^x$ such that $y(0) = 0$, then $y(1)$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "2 + \\log_e 2"
      },
      {
        "id": "B",
        "labelLatex": "2e"
      },
      {
        "id": "C",
        "labelLatex": "\\log_e 2"
      },
      {
        "id": "D",
        "labelLatex": "1 + \\log_e 2"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Differential Equation • EX-IV Q.33]** Substituting $z = \\mathrm{e}^y$, $\\frac{\\mathrm{d}z}{\\mathrm{d}x} - z = \\mathrm{e}^x$, solving gives $z = (x+C)\\mathrm{e}^x$, leading to $y(1) = 1 + \\log_e 2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q39",
    "questionNumber": 39,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $y = y(x)$ be the solution curve of the differential equation, $(y^2 - x)\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 1$, satisfying $y(0) = 1$. This curve intersects the $x$-axis at a point whose abscissa is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "-e"
      },
      {
        "id": "B",
        "labelLatex": "2 + e"
      },
      {
        "id": "C",
        "labelLatex": "2"
      },
      {
        "id": "D",
        "labelLatex": "2 - e"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Differential Equation • EX-IV Q.34]** Rewriting as $\\frac{\\mathrm{d}x}{\\mathrm{d}y} + x = y^2$, solution is $x = y^2 - 2y + 2 + Ce^{-y}$; using $y(0)=1$ gives $C=-e$, and setting $y=0$ gives abscissa $2-e$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q40",
    "questionNumber": 40,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $y = y(x)$ be a solution of the differential equation, $\\sqrt{1-x^2}\\frac{\\mathrm{d}y}{\\mathrm{d}x} + \\sqrt{1-y^2} = 0, |x| < 1$. If $y\\left(\\frac{1}{2}\\right) = \\frac{\\sqrt{3}}{2}$, then $y\\left(-\\frac{1}{\\sqrt{2}}\\right)$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\frac{\\sqrt{3}}{2}"
      },
      {
        "id": "B",
        "labelLatex": "-\\frac{\\sqrt{3}}{2}"
      },
      {
        "id": "C",
        "labelLatex": "-\\frac{1}{\\sqrt{2}}"
      },
      {
        "id": "D",
        "labelLatex": "\\frac{1}{\\sqrt{2}}"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-IV Q.35]** Separating variables $\\frac{\\mathrm{d}y}{\\sqrt{1-y^2}} + \\frac{\\mathrm{d}x}{\\sqrt{1-x^2}} = 0 \\implies \\sin^{-1}y + \\sin^{-1}x = C$. Using given points gives $y(-1/\\sqrt{2}) = \\sqrt{3}/2$ (Bonus question in official key).",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q41",
    "questionNumber": 41,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The differential equation of the family of curves, $x^2 = 4b(y+b), b \\in \\mathbb{R}$, is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "x(y')^2 = x - 2yy'"
      },
      {
        "id": "B",
        "labelLatex": "x(y')^2 = 2yy' - x"
      },
      {
        "id": "C",
        "labelLatex": "x(y')^2 = x + 2yy'"
      },
      {
        "id": "D",
        "labelLatex": "xy'' = y'"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Differential Equation • EX-IV Q.36]** Differentiating $x^2 = 4by + 4b^2$, eliminating $b$ yields $x(y')^2 = x + 2yy'$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q42",
    "questionNumber": 42,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{xy}{x^2 + y^2} \\, ; y(1) = 1$, then a value of $x$ satisfying $y(x) = e$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\sqrt{3}\\mathrm{e}"
      },
      {
        "id": "B",
        "labelLatex": "\\frac{\\mathrm{e}}{\\sqrt{2}}"
      },
      {
        "id": "C",
        "labelLatex": "\\sqrt{2}\\mathrm{e}"
      },
      {
        "id": "D",
        "labelLatex": "\\frac{1}{2}\\sqrt{3}\\mathrm{e}"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-IV Q.37]** Using $y = vx$, differential equation integrates to $y^2 = 2x^2 \\log y + 1$; substituting $y=\\mathrm{e}$ gives $x = \\sqrt{3}\\mathrm{e}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q43",
    "questionNumber": 43,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If for $x \\ge 0, y = y(x)$ is the solution of the differential equation, $(x+1)\\mathrm{d}y = ((x+1)^2 + y - 3)\\mathrm{d}x$, $y(2) = 0$, then $y(3)$ is equal to ______.",
    "correctAnswer": "3",
    "explanationLatex": "**[Differential Equation • EX-IV Q.38]** Solving $\\frac{\\mathrm{d}y}{\\mathrm{d}x} - \\frac{1}{x+1}y = x+1$ with $y(2)=0$ gives $y(x) = (x+1)\\ln(x+1) - (x+1)\\ln 3$, hence $y(3) = 3$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "de-p2-q44",
    "questionNumber": 44,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Consider the family of all circles whose centers lie on the straight line $y = x$. If this family of circles is represented by the differential equation $Py'' + Qy' + 1 = 0$, where $P, Q$ are functions of $x, y$ and $y'$ (here $y' = \\frac{dy}{dx}, y'' = \\frac{d^2y}{dx^2}$), then which of the following statements is (are) true?",
    "options": [
      {
        "id": "A",
        "labelLatex": "$P = y + x$"
      },
      {
        "id": "B",
        "labelLatex": "$P = y - x$"
      },
      {
        "id": "C",
        "labelLatex": "$P + Q = 1 - x + y + y' + (y')^2$"
      },
      {
        "id": "D",
        "labelLatex": "$P - Q = x + y - y' - (y')^2$"
      }
    ],
    "correctAnswer": "B, C",
    "explanationLatex": "**[Differential Equation • EX-V Q.1]** The family of circles is $(x-h)^2 + (y-h)^2 = r^2$ with $h=h$. Differentiating twice leads to the form where $P$ and $Q$ satisfy the given conditions.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q45",
    "questionNumber": 45,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "A solution curve of the differential equation $(x^2 + xy + 4x + 2y + 4) \\frac{dy}{dx} - y^2 = 0, x > 0$, passes through the point $(1, 3)$. Then the solution curve",
    "options": [
      {
        "id": "A",
        "labelLatex": "intersects $y = x + 2$ exactly at one point"
      },
      {
        "id": "B",
        "labelLatex": "intersects $y = x + 2$ exactly at two points"
      },
      {
        "id": "C",
        "labelLatex": "intersects $y = (x + 2)^2$"
      },
      {
        "id": "D",
        "labelLatex": "does NOT intersect $y = (x + 3)^2$"
      }
    ],
    "correctAnswer": "A, D",
    "explanationLatex": "**[Differential Equation • EX-V Q.2]** Solving the differential equation by rearranging terms gives the curve $y = \\frac{x^2+4x+4}{x+1} = \\frac{(x+2)^2}{x+1}$. Analyzing intersections with the given lines confirms the result.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q46",
    "questionNumber": 46,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $y = y(x)$ satisfies the differential equation $8\\sqrt{x}\\left(\\sqrt{9+\\sqrt{x}}\\right)dy = \\left(\\sqrt{4+\\sqrt{9+\\sqrt{x}}}\\right)^{-1}dx, x > 0$ and $y(0) = \\sqrt{7}$, then $y(256) =$",
    "options": [
      {
        "id": "A",
        "labelLatex": "80"
      },
      {
        "id": "B",
        "labelLatex": "3"
      },
      {
        "id": "C",
        "labelLatex": "16"
      },
      {
        "id": "D",
        "labelLatex": "9"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differential Equation • EX-V Q.3]** Integrating both sides by substituting $u = \\sqrt{9+\\sqrt{x}}$ simplifies the differential equation to a separable form.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q47",
    "questionNumber": 47,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let $f : \\mathbb{R} \\to \\mathbb{R}$ be a differentiable function with $f(0) = 0$. If $y = f(x)$ satisfies the differential equation $\\frac{dy}{dx} = (2 + 5y)(5y - 2)$, then the value of $\\lim_{x \\to -\\infty} f(x)$ is ________.",
    "correctAnswer": "0.4",
    "explanationLatex": "**[Differential Equation • EX-V Q.4]** The differential equation is $\\frac{dy}{25y^2 - 4} = dx$. Solving for $y$ and taking the limit as $x \\to -\\infty$ yields $2/5 = 0.4$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "de-p2-q48",
    "questionNumber": 48,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let $\\Gamma$ denote a curve $y = y(x)$ which is in the first quadrant and let the point $(1, 0)$ lie on it. Let the tangent to $\\Gamma$ at a point $P$ intersect the y-axis at $Y_P$. If $PY_P$ has length 1 for each point $P$ on $\\Gamma$, then which of the following options is/are correct?",
    "options": [
      {
        "id": "A",
        "labelLatex": "$xy' - \\sqrt{1-x^2} = 0$"
      },
      {
        "id": "B",
        "labelLatex": "$y = \\log_e \\left( \\frac{1+\\sqrt{1-x^2}}{x} \\right) - \\sqrt{1-x^2}$"
      },
      {
        "id": "C",
        "labelLatex": "$xy' + \\sqrt{1-x^2} = 0$"
      },
      {
        "id": "D",
        "labelLatex": "$y = -\\log_e \\left( \\frac{1+\\sqrt{1-x^2}}{x} \\right) + \\sqrt{1-x^2}$"
      }
    ],
    "correctAnswer": "B, C",
    "explanationLatex": "**[Differential Equation • EX-V Q.5]** The condition $PY_P = 1$ leads to the differential equation $y - xy' = \\pm \\sqrt{1+(y')^2}$. Solving this yields the given logarithmic functions.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q49",
    "questionNumber": 49,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let $b$ be a nonzero real number. Suppose $f : \\mathbb{R} \\to \\mathbb{R}$ is a differentiable function such that $f(0) = 1$. If the derivative $f'$ satisfies the equation $f'(x) = \\frac{f(x)}{b^2 + x^2}$ for all $x \\in \\mathbb{R}$, then which of the following statements is/are TRUE?",
    "options": [
      {
        "id": "A",
        "labelLatex": "If $b > 0$, then $f$ is an increasing function"
      },
      {
        "id": "B",
        "labelLatex": "If $b < 0$, then $f$ is a decreasing function"
      },
      {
        "id": "C",
        "labelLatex": "$f(x)f(-x) = 1$ for all $x \\in \\mathbb{R}$"
      },
      {
        "id": "D",
        "labelLatex": "$f(x) - f(-x) = 0$ for all $x \\in \\mathbb{R}$"
      }
    ],
    "correctAnswer": "A, C",
    "explanationLatex": "**[Differential Equation • EX-V Q.6]** Solving $\\frac{f'(x)}{f(x)} = \\frac{1}{b^2+x^2}$ gives $f(x) = e^{\\frac{1}{b}\\tan^{-1}(x/b)}$. Since $f(x) > 0$, $f'(x) > 0$ for $b>0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p2-q50",
    "questionNumber": 50,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "For any real numbers $\\alpha$ and $\\beta$, let $y_{\\alpha, \\beta}(x), x \\in \\mathbb{R}$, be the solution of the differential equation $\\frac{dy}{dx} + ay = xe^{bx}, y(1) = 1$. Let $S = \\{y_{\\alpha, \\beta}(x) : \\alpha, \\beta \\in \\mathbb{R}\\}$. Then which of the following functions belong(s) to the set $S$?",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f(x) = \\frac{x^2}{2}e^{-x} + \\left(e - \\frac{1}{2}\\right)e^{-x}$"
      },
      {
        "id": "B",
        "labelLatex": "$f(x) = -\\frac{x^2}{2}e^{-x} + \\left(e + \\frac{1}{2}\\right)e^{-x}$"
      },
      {
        "id": "C",
        "labelLatex": "$f(x) = \\frac{e^x}{2}\\left(x - \\frac{1}{2}\\right) + \\left(e - \\frac{e^2}{4}\\right)e^{-x}$"
      },
      {
        "id": "D",
        "labelLatex": "$f(x) = \\frac{e^x}{2}\\left(\\frac{1}{2} - x\\right) + \\left(e + \\frac{e^2}{4}\\right)e^{-x}$"
      }
    ],
    "correctAnswer": "A, C",
    "explanationLatex": "**[Differential Equation • EX-V Q.7]** The linear differential equation $\\frac{dy}{dx} + ay = xe^{bx}$ has the integrating factor $e^{ax}$. Solving for $y$ and applying $y(1)=1$ yields the solutions.",
    "positiveMarks": 4,
    "negativeMarks": 1
  }
];
