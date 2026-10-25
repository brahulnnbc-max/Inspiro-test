import { Question } from '../types/exam';

export const DIFF_EQ_AUC_PART_1_QUESTIONS: Question[] = [
  {
    "id": "de-p1-q1",
    "questionNumber": 1,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "State the order and degree of the following differential equations:\\n$$\\left[\\frac{d^2x}{dt^2}\\right]^3 + \\left[\\frac{dx}{dt}\\right]^4 - xt = 0$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "order 2 & degree 3"
      },
      {
        "id": "B",
        "labelLatex": "order 2 & degree 2"
      },
      {
        "id": "C",
        "labelLatex": "order 1 & degree 3"
      },
      {
        "id": "D",
        "labelLatex": "order 3 & degree 2"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-I Q.1(i)]** The highest order derivative is $\\frac{d^2x}{dt^2}$ with order 2 and its power is 3, giving degree 3.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q2",
    "questionNumber": 2,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "State the order and degree of the following differential equations:\\n$$\\frac{d^2y}{dx^2} = \\left[1 + \\left(\\frac{dy}{dx}\\right)^2\\right]^{3/2}$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "order 2 & degree 3"
      },
      {
        "id": "B",
        "labelLatex": "order 2 & degree 2"
      },
      {
        "id": "C",
        "labelLatex": "order 1 & degree 2"
      },
      {
        "id": "D",
        "labelLatex": "order 2 & degree 1"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differential Equation • EX-I Q.1(ii)]** Squaring both sides eliminates fractional powers, giving $\\left(\\frac{d^2y}{dx^2}\\right)^2 = \\left[1 + \\left(\\frac{dy}{dx}\\right)^2\\right]^3$, so order is 2 and degree is 2.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q3",
    "questionNumber": 3,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Obtain the differential equation of the family of circles $x^2 + y^2 + 2gx + 2fy + c = 0$; where g, f & c are arbitrary constants.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$[1 + (y')^2] \\cdot y''' - 3y'(y'')^2 = 0$"
      },
      {
        "id": "B",
        "labelLatex": "$[1 + (y')^2] \\cdot y'' - 2y'(y'')^2 = 0$"
      },
      {
        "id": "C",
        "labelLatex": "$[1 + (y')^2] \\cdot y''' - y'(y'')^2 = 0$"
      },
      {
        "id": "D",
        "labelLatex": "$[1 + (y')^2] \\cdot y''' + 3y'(y'')^2 = 0$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-I Q.2]** Differentiating three times and eliminating the three arbitrary constants $g, f, c$ yields $[1 + (y')^2] \\cdot y''' - 3y'(y'')^2 = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q4",
    "questionNumber": 4,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Form the differential equation of the family of curves represented by, $c (y + c)^2 = x^3$ ; where c is any arbitrary constant.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$12y (y')^2 = x[8(y')^3 - 27]$"
      },
      {
        "id": "B",
        "labelLatex": "$6y (y')^2 = x[4(y')^3 - 27]$"
      },
      {
        "id": "C",
        "labelLatex": "$12y (y')^2 = x[4(y')^3 - 9]$"
      },
      {
        "id": "D",
        "labelLatex": "$8y (y')^2 = x[8(y')^3 - 27]$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-I Q.3]** Differentiating with respect to $x$ and eliminating the parameter $c$ gives $12y (y')^2 = x[8(y')^3 - 27]$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q5",
    "questionNumber": 5,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve: $\\frac{\\ln (\\sec x + \\tan x)}{\\cos x} dx = \\frac{\\ln (\\sec y + \\tan y)}{\\cos y} dy$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\ln^2 (\\sec x + \\tan x) - \\ln^2 (\\sec y + \\tan y) = c$"
      },
      {
        "id": "B",
        "labelLatex": "$\\ln (\\sec x + \\tan x) + \\ln (\\sec y + \\tan y) = c$"
      },
      {
        "id": "C",
        "labelLatex": "$\\ln^2 (\\sec x + \\tan x) + \\ln^2 (\\sec y + \\tan y) = c$"
      },
      {
        "id": "D",
        "labelLatex": "$\\ln (\\sec x + \\tan x) - \\ln (\\sec y + \\tan y) = c$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-I Q.4]** Integrating both sides using substitution $t = \\ln(\\sec x + \\tan x)$ yields $\\ln^2 (\\sec x + \\tan x) - \\ln^2 (\\sec y + \\tan y) = c$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q6",
    "questionNumber": 6,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve: $\\frac{dy}{dx} + \\frac{\\sqrt{(x^2 - 1)(y^2 - 1)}}{xy} = 0$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\sqrt{x^2 - 1} - \\sec^{-1} x + \\sqrt{y^2 - 1} = c$"
      },
      {
        "id": "B",
        "labelLatex": "$\\sqrt{x^2 - 1} - \\sec^{-1} x + \\sqrt{y^2 - 1} = \\sec^{-1} y + c$"
      },
      {
        "id": "C",
        "labelLatex": "$\\sqrt{x^2 - 1} - \\sec^{-1} x - \\sqrt{y^2 - 1} = c$"
      },
      {
        "id": "D",
        "labelLatex": "$\\sqrt{x^2 - 1} + \\sec^{-1} x + \\sqrt{y^2 - 1} = c$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Differential Equation • EX-I Q.5]** Separating variables $\\frac{y}{\\sqrt{y^2-1}} dy = -\\frac{\\sqrt{x^2-1}}{x} dx$ and integrating yields the solution $\\sqrt{x^2 - 1} - \\sec^{-1} x + \\sqrt{y^2 - 1} = \\sec^{-1} y + c$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q7",
    "questionNumber": 7,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve: $y - x \\frac{dy}{dx} = a \\left(y^2 + \\frac{dy}{dx}\\right)$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y = c (1 - ay) (x + a)$"
      },
      {
        "id": "B",
        "labelLatex": "$y = c (1 + ay) (x - a)$"
      },
      {
        "id": "C",
        "labelLatex": "$y = c (1 - ay) (x - a)$"
      },
      {
        "id": "D",
        "labelLatex": "$y = 2c (1 - ay) (x + a)$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-I Q.6]** Rearranging into variable separable form gives $\\frac{dy}{y(1-ay)} = \\frac{dx}{x+a}$, which integrates to $y = c (1 - ay) (x + a)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q8",
    "questionNumber": 8,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve: $\\frac{dy}{dx} = \\sin (x + y) + \\cos (x + y)$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\ln\\left[1 + \\tan\\frac{x + y}{2}\\right] = x + c$"
      },
      {
        "id": "B",
        "labelLatex": "$\\ln\\left[1 - \\tan\\frac{x + y}{2}\\right] = x + c$"
      },
      {
        "id": "C",
        "labelLatex": "$\\ln\\left[1 + \\cot\\frac{x + y}{2}\\right] = x + c$"
      },
      {
        "id": "D",
        "labelLatex": "$\\ln\\left[1 + \\tan\\frac{x - y}{2}\\right] = x + c$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-I Q.7]** Substitute $v = x + y$, so $\\frac{dv}{dx} = 1 + \\sin v + \\cos v$, which separates to integrate as $\\ln\\left[1 + \\tan\\frac{x + y}{2}\\right] = x + c$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q9",
    "questionNumber": 9,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve: $\\frac{dy}{dx} = \\frac{x(2\\ln x + 1)}{\\sin y + y \\cos y}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y \\sin y = x^2 \\ln x + c$"
      },
      {
        "id": "B",
        "labelLatex": "$y \\cos y = x^2 \\ln x + c$"
      },
      {
        "id": "C",
        "labelLatex": "$y \\sin y = 2x^2 \\ln x + c$"
      },
      {
        "id": "D",
        "labelLatex": "$y \\sin y = x^2 \\log_{e} x + c$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-I Q.8]** Separating variables yields $(\\sin y + y \\cos y) dy = x(2\\ln x + 1) dx$, integrating to $y \\sin y = x^2 \\ln x + c$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q10",
    "questionNumber": 10,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "It is known that the decay rate of radium is directly proportional to its quantity at each given instant. Find the law of variation of a mass of radium as a function of time if at $t = 0$, the mass of the radius was $m_0$ and during time $t_0$, $\\alpha \\%$ of the original mass of radium decay.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$m = m_0 e^{-kt} \\text{ where } k = -\\frac{1}{t_0} \\ln\\left(1 - \\frac{\\alpha}{100}\\right)$"
      },
      {
        "id": "B",
        "labelLatex": "$m = m_0 e^{kt} \\text{ where } k = \\frac{1}{t_0} \\ln\\left(1 - \\frac{\\alpha}{100}\\right)$"
      },
      {
        "id": "C",
        "labelLatex": "$m = m_0 e^{-kt} \\text{ where } k = \\frac{1}{t_0} \\ln\\left(1 + \\frac{\\alpha}{100}\\right)$"
      },
      {
        "id": "D",
        "labelLatex": "$m = 2m_0 e^{-kt} \\text{ where } k = -\\frac{1}{t_0} \\ln\\left(1 - \\frac{\\alpha}{100}\\right)$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-I Q.9]** Solving $\\frac{dm}{dt} = -km$ with boundary conditions gives $m = m_0 e^{-kt}$ with $k = -\\frac{1}{t_0} \\ln\\left(1 - \\frac{\\alpha}{100}\\right)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q11",
    "questionNumber": 11,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The population P of a town decreases at a rate proportional to the number by which the population exceeds 1000, proportionality constant being $k > 0$. Find\\n(a) Population at any time t, given initial population of the town being 2500.\\n(b) If 10 years later the population has fallen to 1900, find the time when the population will be 1500.\\n(c) Predict about the population of the town in the long run.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$P = 1000 + 1500e^{-kt}$ where $k = \\frac{1}{10}\\ln\\left(\\frac{5}{3}\\right)$; (b) $T = 10\\log_{5/3}(3)$; (c) $P = 1000$ as $t \\to \\infty$"
      },
      {
        "id": "B",
        "labelLatex": "$P = 1000 + 1500e^{kt}$ where $k = \\frac{1}{10}\\ln\\left(\\frac{5}{3}\\right)$; (b) $T = 10\\log_{5/3}(3)$; (c) $P = 0$ as $t \\to \\infty$"
      },
      {
        "id": "C",
        "labelLatex": "$P = 1500 + 1000e^{-kt}$ where $k = \\frac{1}{10}\\ln\\left(\\frac{5}{3}\\right)$; (b) $T = 5\\log_{5/3}(3)$; (c) $P = 1000$ as $t \\to \\infty$"
      },
      {
        "id": "D",
        "labelLatex": "$P = 1000 + 1500e^{-kt}$ where $k = \\frac{1}{5}\\ln\\left(\\frac{5}{3}\\right)$; (b) $T = 10\\log_{5/3}(3)$; (c) $P = 2500$ as $t \\to \\infty$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-I Q.10]** Solving $\\frac{dP}{dt} = -k(P-1000)$ with $P(0)=2500$ yields $P = 1000 + 1500e^{-kt}$, and the subsequent parts follow accordingly.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q12",
    "questionNumber": 12,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve: $e^{(dy/dx)} = x + 1$ given that when $x = 0$, $y = 3$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y = (x + 1) \\cdot \\ln(x + 1) - x + 3$"
      },
      {
        "id": "B",
        "labelLatex": "$y = (x + 1) \\cdot \\ln(x + 1) + x + 3$"
      },
      {
        "id": "C",
        "labelLatex": "$y = (x - 1) \\cdot \\ln(x + 1) - x + 3$"
      },
      {
        "id": "D",
        "labelLatex": "$y = (x + 1) \\cdot \\ln(x + 1) - 2x + 3$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-I Q.11]** Taking natural log, $\\frac{dy}{dx} = \\ln(x+1)$, integrating both sides with $y(0)=3$ gives $y = (x + 1) \\cdot \\ln(x + 1) - x + 3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q13",
    "questionNumber": 13,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "A normal is drawn at a point $P(x, y)$ of a curve. It meets the $x-$axis at Q. If PQ is of constant length $k$, then show that the differential equation describing such curves is, $y \\sqrt{1 + (y')^2} = \\pm \\sqrt{k^2 - y^2}$. Find the equation of such a curve passing through $(0, k)$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$x^2 + y^2 = k^2$"
      },
      {
        "id": "B",
        "labelLatex": "$x^2 - y^2 = k^2$"
      },
      {
        "id": "C",
        "labelLatex": "$x^2 + y^2 = 2k^2$"
      },
      {
        "id": "D",
        "labelLatex": "$(x-k)^2 + y^2 = k^2$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-I Q.12]** Using normal length formula $PQ = y\\sqrt{1+(y')^2}$, integration with $P(0)=k$ yields $x^2 + y^2 = k^2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q14",
    "questionNumber": 14,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Obtain the differential equation associated with the primitive, $y = c_1 e^{3x} + c_2 e^{2x} + c_3 e^x$, where $c_1, c_2, c_3$ are arbitrary constants.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{d^3y}{dx^3} - 6\\frac{d^2y}{dx^2} + 11\\frac{dy}{dx} - 6y = 0$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{d^3y}{dx^3} + 6\\frac{d^2y}{dx^2} + 11\\frac{dy}{dx} + 6y = 0$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{d^3y}{dx^3} - 5\\frac{d^2y}{dx^2} + 6\\frac{dy}{dx} - y = 0$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{d^3y}{dx^3} - 6\\frac{d^2y}{dx^2} - 11\\frac{dy}{dx} - 6y = 0$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-I Q.13]** The auxiliary equation roots are $1, 2, 3$, yielding the third-order differential equation $\\frac{d^3y}{dx^3} - 6\\frac{d^2y}{dx^2} + 11\\frac{dy}{dx} - 6y = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q15",
    "questionNumber": 15,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the curve $y = f(x)$ where $f(x) \\ge 0, f(0) = 0$, bounding a curvilinear trapezoid with the base $[0, x]$ whose area is proportional to $(n + 1)^{\\text{th}}$ power of $f(x)$. It is known that $f(1) = 1$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y = x^{1/n}$"
      },
      {
        "id": "B",
        "labelLatex": "$y = x^n$"
      },
      {
        "id": "C",
        "labelLatex": "$y = nx^{1/n}$"
      },
      {
        "id": "D",
        "labelLatex": "$y = x^{n+1}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-I Q.14]** Using the area relation $\\int_0^x f(t)dt = k [f(x)]^{n+1}$, differentiation yields the curve $y = x^{1/n}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q16",
    "questionNumber": 16,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve: $\\frac{x dx - y dy}{x dy - y dx} = \\sqrt{\\frac{1 + x^2 - y^2}{x^2 - y^2}}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\sqrt{x^2 - y^2} + \\sqrt{1 + x^2 - y^2} = \\frac{c(x + y)}{\\sqrt{x^2 - y^2}}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\sqrt{x^2 - y^2} - \\sqrt{1 + x^2 - y^2} = \\frac{c(x + y)}{\\sqrt{x^2 - y^2}}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\sqrt{x^2 - y^2} + \\sqrt{1 + x^2 - y^2} = c(x + y)$"
      },
      {
        "id": "D",
        "labelLatex": "$\\sqrt{x^2 - y^2} = \\frac{c(x + y)}{\\sqrt{1 + x^2 - y^2}}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-I Q.15]** Applying exact differentials and suitable substitution yields $\\sqrt{x^2 - y^2} + \\sqrt{1 + x^2 - y^2} = \\frac{c(x + y)}{\\sqrt{x^2 - y^2}}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q17",
    "questionNumber": 17,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "A curve is such that the length of the polar radius of any point on the curve is equal to the length of the tangent drawn at this point. Form the differential equation and solve it to find the equation of the curve.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y = kx \\text{ or } xy = c$"
      },
      {
        "id": "B",
        "labelLatex": "$y = kx^2 \\text{ or } xy = c$"
      },
      {
        "id": "C",
        "labelLatex": "$y = kx \\text{ or } x^2y = c$"
      },
      {
        "id": "D",
        "labelLatex": "$y = kx \\text{ or } x + y = c$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-I Q.16]** Formulating the polar tangent and radius length equality leads to $y = kx \\text{ or } xy = c$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q18",
    "questionNumber": 18,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve the homogeneous differential equation:\\n$$\\frac{dy}{dx} = \\frac{x^2 + xy}{x^2 + y^2}$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$c(x - y)^{2/3} (x^2 + xy + y^2)^{1/6} = \\exp\\left[\\frac{1}{\\sqrt{3}}\\tan^{-1}\\frac{x + 2y}{x\\sqrt{3}}\\right]$"
      },
      {
        "id": "B",
        "labelLatex": "$c(x + y)^{2/3} (x^2 + xy + y^2)^{1/6} = \\exp\\left[\\frac{1}{\\sqrt{3}}\\tan^{-1}\\frac{x + 2y}{x\\sqrt{3}}\\right]$"
      },
      {
        "id": "C",
        "labelLatex": "$c(x - y)^{1/3} (x^2 + xy + y^2)^{1/6} = \\exp\\left[\\frac{1}{\\sqrt{3}}\\tan^{-1}\\frac{x + 2y}{x\\sqrt{3}}\\right]$"
      },
      {
        "id": "D",
        "labelLatex": "$c(x - y)^{2/3} (x^2 - xy + y^2)^{1/6} = \\exp\\left[\\frac{1}{\\sqrt{3}}\\tan^{-1}\\frac{x + 2y}{x\\sqrt{3}}\\right]$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-II Q.1(a)]** Using substitution $y = vx$, the homogeneous equation integrates to $c(x - y)^{2/3} (x^2 + xy + y^2)^{1/6} = \\exp\\left[\\frac{1}{\\sqrt{3}}\\tan^{-1}\\frac{x + 2y}{x\\sqrt{3}}\\right]$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q19",
    "questionNumber": 19,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve the homogeneous differential equation:\\n$$(x^3 - 3xy^2) dx = (y^3 - 3x^2y) dy$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y^2 - x^2 = c(y^2 + x^2)^2$"
      },
      {
        "id": "B",
        "labelLatex": "$y^2 + x^2 = c(y^2 - x^2)^2$"
      },
      {
        "id": "C",
        "labelLatex": "$y^2 - x^2 = c(y + x)^2$"
      },
      {
        "id": "D",
        "labelLatex": "$y^2 - x^2 = c(y^2 + x^2)$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-II Q.1(b)]** Using $y = vx$, the variables separate to yield $y^2 - x^2 = c(y^2 + x^2)^2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q20",
    "questionNumber": 20,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the equation of a curve such that the projection of its ordinate upon the normal is equal to its abscissa.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{y^2 \\pm y\\sqrt{y^2 - x^2}}{x^2} = \\ln\\left|\\left(y \\pm \\sqrt{y^2 - x^2}\\right) \\cdot \\frac{c^2}{x^3}\\right|$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{y^2 \\mp y\\sqrt{y^2 - x^2}}{x^2} = \\ln\\left|\\left(y \\pm \\sqrt{y^2 - x^2}\\right) \\cdot \\frac{c^2}{x^3}\\right|$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{y^2 \\pm y\\sqrt{y^2 - x^2}}{x^2} = \\ln\\left|\\left(y \\mp \\sqrt{y^2 - x^2}\\right) \\cdot \\frac{c^2}{x^3}\\right|$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{y^2 \\pm y\\sqrt{y^2 - x^2}}{x} = \\ln\\left|\\left(y \\pm \\sqrt{y^2 - x^2}\\right) \\cdot \\frac{c^2}{x^3}\\right|$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-II Q.2]** Setting up the geometric condition gives $y y' = x \\pm \\sqrt{y^2-x^2}$, integrating to $\\frac{y^2 \\pm y\\sqrt{y^2 - x^2}}{x^2} = \\ln\\left|\\left(y \\pm \\sqrt{y^2 - x^2}\\right) \\cdot \\frac{c^2}{x^3}\\right|$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q21",
    "questionNumber": 21,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The light rays emanating from a point source situated at origin when reflected from the mirror of a search light are reflected as beam parallel to the x-axis. Show that the surface is parabolic, by first forming the differential equation and then solving it.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y^2 = 2cx + c^2$"
      },
      {
        "id": "B",
        "labelLatex": "$y^2 = cx + c^2$"
      },
      {
        "id": "C",
        "labelLatex": "$y = 2cx + c^2$"
      },
      {
        "id": "D",
        "labelLatex": "$y^2 = 2cx$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-II Q.3]** Using reflection properties of parabola, the differential equation yields the parabola $y^2 = 2cx + c^2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q22",
    "questionNumber": 22,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The perpendicular from the origin to the tangent at any point on a curve is equal to the abscissa of the point of contact. Find the equation of the curve satisfying the above condition and which passes through $(1, 1)$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$x^2 + y^2 - 2x = 0$"
      },
      {
        "id": "B",
        "labelLatex": "$x^2 + y^2 - 2y = 0$"
      },
      {
        "id": "C",
        "labelLatex": "$x^2 - y^2 - 2x = 0$"
      },
      {
        "id": "D",
        "labelLatex": "$x^2 + y^2 + 2x = 0$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-II Q.4]** Using the perpendicular distance formula from origin to tangent, we get $x^2 + y^2 - 2x = 0$ after passing through $(1, 1)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q23",
    "questionNumber": 23,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Show that the equation of the curve intersecting with the x- axis at the point $x = 1$ and for which the length of the subnormal at any point of the curve is equal to the arthemetic mean of the co-ordinates of this point is $(y - x)^2(x + 2y) = 1$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$(y - x)^2(x + 2y) = 1$"
      },
      {
        "id": "B",
        "labelLatex": "$(y + x)^2(x + 2y) = 1$"
      },
      {
        "id": "C",
        "labelLatex": "$(y - x)^2(x - 2y) = 1$"
      },
      {
        "id": "D",
        "labelLatex": "$(y - x)(x + 2y)^2 = 1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-II Q.5]** Equating subnormal $y y'$ to the arithmetic mean $\\frac{x+y}{2}$ and integrating with boundary conditions gives $(y - x)^2(x + 2y) = 1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q24",
    "questionNumber": 24,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Use the substitution $y^2 = a - x$ to reduce the equation $y^3 \\cdot \\frac{dy}{dx} + x + y^2 = 0$ to homogeneous form and hence solve it.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{1}{2}\\ln|x^2 + a^2| - \\tan^{-1}\\left(\\frac{a}{x}\\right) = c$, where $a = x + y^2$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{1}{2}\\ln|x^2 - a^2| - \\tan^{-1}\\left(\\frac{a}{x}\\right) = c$, where $a = x + y^2$"
      },
      {
        "id": "C",
        "labelLatex": "$\\ln|x^2 + a^2| - \\tan^{-1}\\left(\\frac{a}{x}\\right) = c$, where $a = x + y^2$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{1}{2}\\ln|x^2 + a^2| + \\tan^{-1}\\left(\\frac{a}{x}\\right) = c$, where $a = x + y^2$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-II Q.6]** Applying the substitution transforms the equation into a homogeneous one, which integrates to $\\frac{1}{2}\\ln|x^2 + a^2| - \\tan^{-1}\\left(\\frac{a}{x}\\right) = c$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q25",
    "questionNumber": 25,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve: $\\left[x \\cos \\frac{y}{x} + y \\sin \\frac{y}{x}\\right] y = \\left[y \\sin \\frac{y}{x} - x \\cos \\frac{y}{x}\\right] x \\frac{dy}{dx}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$xy \\cos\\frac{y}{x} = c$"
      },
      {
        "id": "B",
        "labelLatex": "$xy \\sin\\frac{y}{x} = c$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{y}{x} \\cos\\frac{y}{x} = c$"
      },
      {
        "id": "D",
        "labelLatex": "$xy \\cos\\frac{x}{y} = c$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-II Q.7]** Using homogeneous substitution $y = vx$, the expression simplifies and integrates to $xy \\cos\\frac{y}{x} = c$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q26",
    "questionNumber": 26,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the curve for which any tangent intersects the y-axis at the point equidistant from the point of tangency and the origin.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$x^2 + y^2 = cx$"
      },
      {
        "id": "B",
        "labelLatex": "$x^2 - y^2 = cx$"
      },
      {
        "id": "C",
        "labelLatex": "$x^2 + y^2 = cy$"
      },
      {
        "id": "D",
        "labelLatex": "$x^2 + y^2 = c$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-II Q.8]** Equating the distance from origin to y-intercept and point of tangency yields the differential equation leading to $x^2 + y^2 = cx$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q27",
    "questionNumber": 27,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve: $(x - y) dy = (x + y + 1) dx$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\arctan\\frac{2y + 1}{2x + 1} = \\ln c\\sqrt{x^2 + y^2 + x + y + \\frac{1}{2}}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\arctan\\frac{2y - 1}{2x + 1} = \\ln c\\sqrt{x^2 + y^2 + x + y + \\frac{1}{2}}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\arctan\\frac{2y + 1}{2x - 1} = \\ln c\\sqrt{x^2 + y^2 + x + y + \\frac{1}{2}}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\arctan\\frac{2y + 1}{2x + 1} = \\ln c\\sqrt{x^2 - y^2 + x + y + \\frac{1}{2}}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-II Q.9]** Shifting origin to intersection point and solving homogeneous equation yields $\\arctan\\frac{2y + 1}{2x + 1} = \\ln c\\sqrt{x^2 + y^2 + x + y + \\frac{1}{2}}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q28",
    "questionNumber": 28,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve: $\\frac{dy}{dx} = \\frac{x + 2y - 3}{2x + y - 3}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$(x + y - 2) = c(y - x)^3$"
      },
      {
        "id": "B",
        "labelLatex": "$(x + y + 2) = c(y - x)^3$"
      },
      {
        "id": "C",
        "labelLatex": "$(x - y - 2) = c(y - x)^3$"
      },
      {
        "id": "D",
        "labelLatex": "$(x + y - 2) = c(y + x)^3$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-II Q.10]** Using substitution $X = x-1, Y = y-1$, the homogeneous equation integrates to $(x + y - 2) = c(y - x)^3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q29",
    "questionNumber": 29,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve: $\\frac{dy}{dx} = \\frac{y - x + 1}{y + x + 5}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\tan^{-1}\\frac{y + 3}{x + 2} + \\ln c\\sqrt{(y + 3)^2 + (x + 2)^2} = 0$"
      },
      {
        "id": "B",
        "labelLatex": "$\\tan^{-1}\\frac{y - 3}{x + 2} + \\ln c\\sqrt{(y + 3)^2 + (x + 2)^2} = 0$"
      },
      {
        "id": "C",
        "labelLatex": "$\\tan^{-1}\\frac{y + 3}{x - 2} + \\ln c\\sqrt{(y + 3)^2 + (x + 2)^2} = 0$"
      },
      {
        "id": "D",
        "labelLatex": "$\\tan^{-1}\\frac{y + 3}{x + 2} - \\ln c\\sqrt{(y + 3)^2 + (x + 2)^2} = 0$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-II Q.11]** Shifting coordinates to intersection point $(-2, -3)$ and solving homogeneous form gives $\\tan^{-1}\\frac{y + 3}{x + 2} + \\ln c\\sqrt{(y + 3)^2 + (x + 2)^2} = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q30",
    "questionNumber": 30,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve: $\\frac{dy}{dx} = \\frac{x + y + 1}{2x + 2y + 3}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$x + y + \\frac{4}{3} = ce^{3(x - 2y)}$"
      },
      {
        "id": "B",
        "labelLatex": "$x + y - \\frac{4}{3} = ce^{3(x - 2y)}$"
      },
      {
        "id": "C",
        "labelLatex": "$x - y + \\frac{4}{3} = ce^{3(x - 2y)}$"
      },
      {
        "id": "D",
        "labelLatex": "$x + y + \\frac{4}{3} = ce^{-3(x - 2y)}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-II Q.12]** Substitute $v = x+y$, separating variables yields $x + y + \\frac{4}{3} = ce^{3(x - 2y)}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q31",
    "questionNumber": 31,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve: $\\frac{dy}{dx} = \\frac{2(y + 2)^2}{(x + y - 1)^2}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$e^{-2\\tan^{-1}\\frac{y + 2}{x - 3}} = c \\cdot (y + 2)$"
      },
      {
        "id": "B",
        "labelLatex": "$e^{2\\tan^{-1}\\frac{y + 2}{x - 3}} = c \\cdot (y + 2)$"
      },
      {
        "id": "C",
        "labelLatex": "$e^{-2\\tan^{-1}\\frac{y - 2}{x - 3}} = c \\cdot (y + 2)$"
      },
      {
        "id": "D",
        "labelLatex": "$e^{-2\\tan^{-1}\\frac{y + 2}{x - 3}} = c \\cdot (y - 2)$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-II Q.13]** Using substitution and integrating homogeneous form leads to $e^{-2\\tan^{-1}\\frac{y + 2}{x - 3}} = c \\cdot (y + 2)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q32",
    "questionNumber": 32,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve: $\\frac{dy}{dx} + \\frac{\\cos x (3 \\cos y - 7 \\sin x - 3)}{\\sin y (3 \\sin x - 7 \\cos y + 7)} = 0$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$(\\cos y - \\sin x - 1)^2 (\\cos y + \\sin x - 1)^5 = c$"
      },
      {
        "id": "B",
        "labelLatex": "$(\\cos y - \\sin x - 1)^2 (\\cos y - \\sin x + 1)^5 = c$"
      },
      {
        "id": "C",
        "labelLatex": "$(\\cos y + \\sin x - 1)^2 (\\cos y - \\sin x - 1)^5 = c$"
      },
      {
        "id": "D",
        "labelLatex": "$(\\cos y - \\sin x - 1)^5 (\\cos y + \\sin x - 1)^2 = c$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-II Q.14]** Substituting $u = \\sin x$ and $v = \\cos y$ and integrating gives $(\\cos y - \\sin x - 1)^2 (\\cos y + \\sin x - 1)^5 = c$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q33",
    "questionNumber": 33,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Show that the equation of the curve whose slope at any point is equal to $y + 2x$ and which pass through the origin is $y = 2(e^x - x - 1)$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y = 2(e^x - x - 1)$"
      },
      {
        "id": "B",
        "labelLatex": "$y = e^x - x - 1$"
      },
      {
        "id": "C",
        "labelLatex": "$y = 2(e^x + x - 1)$"
      },
      {
        "id": "D",
        "labelLatex": "$y = e^x - 2x - 1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.1]** The differential equation is $\\frac{dy}{dx} - y = 2x$. Using the integrating factor $e^{-x}$, we get $y e^{-x} = \\int 2x e^{-x} dx = -2x e^{-x} - 2e^{-x} + c$. Since it passes through $(0,0)$, $c=2$, leading to $y = 2(e^x - x - 1)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q34",
    "questionNumber": 34,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the curve such that the area of the trapezium formed by the co-ordinate axes, ordinate of an arbitrary point & the tangent at this point equals half the square of its abscissa.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y = cx^2 \\pm x$"
      },
      {
        "id": "B",
        "labelLatex": "$y = cx \\pm x^2$"
      },
      {
        "id": "C",
        "labelLatex": "$y = c x^2 \\pm 1$"
      },
      {
        "id": "D",
        "labelLatex": "$y = x^2 \\pm cx$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.2]** The area of the trapezium is $\\frac{1}{2}(y + y - x \\frac{dy}{dx})x = \\frac{1}{2}x^2$. Simplifying gives $2y - x \\frac{dy}{dx} = x$, which is a linear differential equation $\\frac{dy}{dx} - \\frac{2}{x}y = -1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q35",
    "questionNumber": 35,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$x(x - 1)\\frac{dy}{dx} - (x - 2)y = x^3(2x - 1)$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y(x - 1) = x^2(x^2 - x + c)$"
      },
      {
        "id": "B",
        "labelLatex": "$y(x - 1) = x(x^2 - x + c)$"
      },
      {
        "id": "C",
        "labelLatex": "$y(x + 1) = x^2(x^2 + x + c)$"
      },
      {
        "id": "D",
        "labelLatex": "$y(x - 1) = x^2(x^2 + x + c)$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.3]** Dividing by $x(x-1)$, we get $\\frac{dy}{dx} - \\frac{x-2}{x(x-1)}y = \\frac{x^2(2x-1)}{x-1}$. The integrating factor is $e^{-\\int \\frac{x-2}{x(x-1)} dx} = e^{-\\int (\\frac{2}{x} - \\frac{1}{x-1}) dx} = \\frac{x-1}{x^2}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q36",
    "questionNumber": 36,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$(1 + y + x^2y) dx + (x + x^3) dy = 0$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$xy = c - \\arctan x$"
      },
      {
        "id": "B",
        "labelLatex": "$xy = c + \\arctan x$"
      },
      {
        "id": "C",
        "labelLatex": "$x^2y = c - \\arctan x$"
      },
      {
        "id": "D",
        "labelLatex": "$xy = c - \\ln(1+x^2)$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.4]** Rearranging gives $(x+x^3)dy = -(1+y+x^2y)dx = -(1+y)(1+x^2)dx$. Separating variables: $\\int \\frac{dy}{1+y} = -\\int \\frac{1+x^2}{x(1+x^2)} dx = -\\int \\frac{1}{x} dx$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q37",
    "questionNumber": 37,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the curve possessing the property that the intercept, the tangent at any point of a curve cuts off on the y-axis is equal to the square of the abscissa of the point of tangency.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y = cx - x^2$"
      },
      {
        "id": "B",
        "labelLatex": "$y = cx + x^2$"
      },
      {
        "id": "C",
        "labelLatex": "$y = c - x^2$"
      },
      {
        "id": "D",
        "labelLatex": "$y = cx^2 - x$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.5]** The y-intercept of the tangent at $(x,y)$ is $y - x \\frac{dy}{dx} = x^2$. This is a linear differential equation $\\frac{dy}{dx} - \\frac{1}{x}y = -x$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q38",
    "questionNumber": 38,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\sin x \\frac{dy}{dx} + 3y = \\cos x$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$(\\frac{1}{3} + y)\\tan^3\\frac{x}{2} = c + 2\\tan\\frac{x}{2} - x$"
      },
      {
        "id": "B",
        "labelLatex": "$(\\frac{1}{3} + y)\\tan^3\\frac{x}{2} = c + 2\\tan\\frac{x}{2} + x$"
      },
      {
        "id": "C",
        "labelLatex": "$(\\frac{1}{3} - y)\\tan^3\\frac{x}{2} = c + 2\\tan\\frac{x}{2} - x$"
      },
      {
        "id": "D",
        "labelLatex": "$(\\frac{1}{3} + y)\\tan^2\\frac{x}{2} = c + 2\\tan\\frac{x}{2} - x$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.6]** The equation is $\\frac{dy}{dx} + 3y \\csc x = \\cot x$. The integrating factor is $e^{3 \\int \\csc x dx} = e^{3 \\ln \\tan(x/2)} = \\tan^3(x/2)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q39",
    "questionNumber": 39,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$x \\frac{dy}{dx} - y = 2x^2 \\csc 2x$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y = cx + x \\ln \\tan x$"
      },
      {
        "id": "B",
        "labelLatex": "$y = cx - x \\ln \\tan x$"
      },
      {
        "id": "C",
        "labelLatex": "$y = c + x \\ln \\tan x$"
      },
      {
        "id": "D",
        "labelLatex": "$y = cx + \\ln \\tan x$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.7]** Dividing by $x$, $\\frac{dy}{dx} - \\frac{y}{x} = 2x \\csc 2x$. The integrating factor is $e^{-\\int \\frac{1}{x} dx} = \\frac{1}{x}$. Then $\\frac{y}{x} = \\int 2 \\csc 2x dx = \\ln \\tan x + c$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q40",
    "questionNumber": 40,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$(1 + y^2) dx = (\\arctan y - x) dy$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$x = ce^{-\\arctan y} + \\arctan y - 1$"
      },
      {
        "id": "B",
        "labelLatex": "$x = ce^{\\arctan y} + \\arctan y - 1$"
      },
      {
        "id": "C",
        "labelLatex": "$x = ce^{-\\arctan y} - \\arctan y - 1$"
      },
      {
        "id": "D",
        "labelLatex": "$x = ce^{-\\arctan y} + \\arctan y + 1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.8]** Rearranging gives $\\frac{dx}{dy} + \\frac{x}{1+y^2} = \\frac{\\arctan y}{1+y^2}$. The integrating factor is $e^{\\int \\frac{1}{1+y^2} dy} = e^{\\arctan y}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q41",
    "questionNumber": 41,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the curve such that the area of the rectangle constructed on the abscissa of any point and the initial ordinate of the tangent at this point is equal to $a^2$. (Initial ordinate means y intercept of the tangent).",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y = cx \\pm \\frac{a^2}{2x}$"
      },
      {
        "id": "B",
        "labelLatex": "$y = cx \\pm \\frac{a^2}{x}$"
      },
      {
        "id": "C",
        "labelLatex": "$y = c \\pm \\frac{a^2}{2x}$"
      },
      {
        "id": "D",
        "labelLatex": "$y = cx^2 \\pm \\frac{a^2}{x}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.9]** The y-intercept is $y - x \\frac{dy}{dx}$. The area is $x(y - x \\frac{dy}{dx}) = a^2$. This simplifies to $\\frac{dy}{dx} - \\frac{y}{x} = -\\frac{a^2}{x^2}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q42",
    "questionNumber": 42,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the differentiable function which satisfies the equation $f(x) = -\\int_{0}^{x} f(t) \\tan t dt + \\int_{0}^{x} \\tan(t - x) dt$ where $x \\in (-\\pi/2, \\pi/2)$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\cos x - 1$"
      },
      {
        "id": "B",
        "labelLatex": "$\\sin x - 1$"
      },
      {
        "id": "C",
        "labelLatex": "$\\cos x + 1$"
      },
      {
        "id": "D",
        "labelLatex": "$\\sin x + 1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.11]** Differentiating $f(x) = -\\int_{0}^{x} f(t) \\tan t dt - \\int_{0}^{x} \\tan(x - t) dt$ using Leibniz rule gives $f'(x) = -f(x) \\tan x - \\tan 0 - \\int_{0}^{x} \\sec^2(x-t) dt$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q43",
    "questionNumber": 43,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find all functions $f(x)$ defined on $(-\\pi/2, \\pi/2)$ with real values and has a primitive $F(x)$ such that $f(x) + \\cos x \\cdot F(x) = \\frac{\\sin 2x}{(1 + \\sin x)^2}$. Find $f(x)$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f(x) = -\\frac{2\\cos x}{(1 + \\sin x)^2} - Ce^{-\\sin x} \\cdot \\cos x$"
      },
      {
        "id": "B",
        "labelLatex": "$f(x) = \\frac{2\\cos x}{(1 + \\sin x)^2} - Ce^{-\\sin x} \\cdot \\cos x$"
      },
      {
        "id": "C",
        "labelLatex": "$f(x) = -\\frac{2\\cos x}{(1 + \\sin x)^2} + Ce^{-\\sin x} \\cdot \\cos x$"
      },
      {
        "id": "D",
        "labelLatex": "$f(x) = -\\frac{\\cos x}{(1 + \\sin x)^2} - Ce^{-\\sin x} \\cdot \\cos x$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.12]** Since $F'(x) = f(x)$, the equation is $F'(x) + \\cos x F(x) = \\frac{2 \\sin x \\cos x}{(1 + \\sin x)^2}$. This is a linear equation in $F(x)$ with integrating factor $e^{\\sin x}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q44",
    "questionNumber": 44,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\frac{dy}{dx} + \\frac{y}{x} \\ln y = \\frac{y}{x^2} (\\ln y)^2$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$x = \\ln y(cx^2 + \\frac{1}{2})$"
      },
      {
        "id": "B",
        "labelLatex": "$x = \\ln y(cx + \\frac{1}{2})$"
      },
      {
        "id": "C",
        "labelLatex": "$x = \\ln y(cx^2 - \\frac{1}{2})$"
      },
      {
        "id": "D",
        "labelLatex": "$x = \\ln y(c + \\frac{1}{2}x^2)$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.14]** Divide by $y(\\ln y)^2$: $\\frac{1}{y(\\ln y)^2} \\frac{dy}{dx} + \\frac{1}{x \\ln y} = \\frac{1}{x^2}$. Let $v = \\frac{1}{\\ln y}$, then $\\frac{dv}{dx} = -\\frac{1}{y(\\ln y)^2} \\frac{dy}{dx}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q45",
    "questionNumber": 45,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\frac{dy}{dx} + xy = y^2 e^{x^2/2} \\sin x$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$e^{-x^2/2} = y(c + \\cos x)$"
      },
      {
        "id": "B",
        "labelLatex": "$e^{-x^2/2} = y(c - \\cos x)$"
      },
      {
        "id": "C",
        "labelLatex": "$e^{x^2/2} = y(c + \\cos x)$"
      },
      {
        "id": "D",
        "labelLatex": "$e^{-x^2/2} = y(c + \\sin x)$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.15]** Divide by $y^2$: $y^{-2} \\frac{dy}{dx} + x y^{-1} = e^{x^2/2} \\sin x$. Let $v = y^{-1}$, then $\\frac{dv}{dx} - xv = -e^{x^2/2} \\sin x$. Integrating factor is $e^{-\\int x dx} = e^{-x^2/2}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q46",
    "questionNumber": 46,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$2 \\frac{dy}{dx} - y \\sec x = y^3 \\tan x$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{1}{y^2} = -1 + (c + x)\\cot(\\frac{x}{2} + \\frac{\\pi}{4})$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{1}{y^2} = 1 + (c + x)\\cot(\\frac{x}{2} + \\frac{\\pi}{4})$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{1}{y^2} = -1 + (c + x)\\tan(\\frac{x}{2} + \\frac{\\pi}{4})$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{1}{y^2} = -1 + (c - x)\\cot(\\frac{x}{2} + \\frac{\\pi}{4})$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.16]** Divide by $y^3$: $2y^{-3} \\frac{dy}{dx} - y^{-2} \\sec x = \\tan x$. Let $v = y^{-2}$, then $\\frac{dv}{dx} + v \\sec x = -\\tan x$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q47",
    "questionNumber": 47,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$x^2 y - x^3 \\frac{dy}{dx} = y^4 \\cos x$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$x^3 y^{-3} = 3 \\sin x + c$"
      },
      {
        "id": "B",
        "labelLatex": "$x^3 y^{-3} = -3 \\sin x + c$"
      },
      {
        "id": "C",
        "labelLatex": "$x^3 y^{3} = 3 \\sin x + c$"
      },
      {
        "id": "D",
        "labelLatex": "$x^3 y^{-3} = 3 \\cos x + c$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.17]** Divide by $x^3 y^4$: $x^{-1} y^{-3} - y^{-4} \\frac{dy}{dx} = x^{-3} \\cos x$. Let $v = y^{-3}$, then $\\frac{dv}{dx} + 3x^{-1} v = -3x^{-3} \\cos x$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q48",
    "questionNumber": 48,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$y(2xy + e^x) dx - e^x dy = 0$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$y^{-1} e^x = c - x^2$"
      },
      {
        "id": "B",
        "labelLatex": "$y^{-1} e^x = c + x^2$"
      },
      {
        "id": "C",
        "labelLatex": "$y e^x = c - x^2$"
      },
      {
        "id": "D",
        "labelLatex": "$y^{-1} e^x = c - x$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.18]** Rearranging: $e^x dy - y e^x dx = 2xy^2 dx$. Divide by $y^2 e^x$: $\\frac{e^x dy - y e^x dx}{y^2 e^x} = 2x dx$. This is $d(\\frac{y}{e^x}) = 2x dx$ is incorrect; it is $d(\\frac{e^x}{y}) = -2x dx$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q49",
    "questionNumber": 49,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the curve for which the area of the triangle formed by the x-axis, the tangent line and radius vector of the point of tangency is equal to $a^2$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$x = cy \\pm \\frac{a^2}{y}$"
      },
      {
        "id": "B",
        "labelLatex": "$x = cy \\pm \\frac{a^2}{2y}$"
      },
      {
        "id": "C",
        "labelLatex": "$y = cx \\pm \\frac{a^2}{x}$"
      },
      {
        "id": "D",
        "labelLatex": "$x = c \\pm \\frac{a^2}{y}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Differential Equation • EX-III Q.19]** The x-intercept of the tangent is $x - y \\frac{dx}{dy}$. The area is $\\frac{1}{2} |y(x - y \\frac{dx}{dy})| = a^2$. This leads to $x - y \\frac{dx}{dy} = \\pm \\frac{2a^2}{y}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "de-p1-q50",
    "questionNumber": 50,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "A tank contains 100 litres of fresh water. A solution containing 1 gm/litre of soluble lawn fertilizer runs into the tank at the rate of 1 lit/min, and the mixture is pumped out of the tank at the rate of 3 litres/min. Find the time when the amount of fertilizer in the tank is maximum.",
    "correctAnswer": "27.77",
    "explanationLatex": "**[Differential Equation • EX-III Q.20]** Let $A(t)$ be the amount of fertilizer. $\\frac{dA}{dt} = 1 - \\frac{3A}{100-2t}$. Solving this linear equation with $A(0)=0$ gives $A(t) = (100-2t) - (100-2t)^2/100$. Maximize $A(t)$ by setting $A'(t)=0$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  }
];
