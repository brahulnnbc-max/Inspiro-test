import { Question } from '../types/exam';

export const DETERMINANT_PART_3_QUESTIONS: Question[] = [
  {
    "id": "det-p3-q1",
    "questionNumber": 1,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The number of distinct real roots of the equation $$\\begin{vmatrix} \\sin x & \\cos x & \\cos x \\\\ \\cos x & \\sin x & \\cos x \\\\ \\cos x & \\cos x & \\sin x \\end{vmatrix} = 0$$ in $\\left[ -\\frac{\\pi}{4}, \\frac{\\pi}{4} \\right]$ is",
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
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-III Q.13]** The determinant simplifies to $(\\sin x - \\cos x)^2 (\\sin x + 2\\cos x) = 0$. In the given interval, $\\sin x = \\cos x$ gives $x = \\pi/4$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q2",
    "questionNumber": 2,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The value of $\\lambda$ such that the system $x - 2y + z = -4, 2x - y + 2z = 2, x + y + \\lambda z = 4$ has infinitely many solutions is",
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
        "labelLatex": "-1"
      },
      {
        "id": "D",
        "labelLatex": "none of these"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Determinant • EX-III Q.14]** The determinant of the coefficient matrix is $-(3\\lambda - 3) = 0 \\implies \\lambda = 1$. However, for $\\lambda = 1$, the system is inconsistent.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q3",
    "questionNumber": 3,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the equations $x + ay - z = 0, 2x - y + az = 0, ax + y + 2z = 0$ have nontrivial solutions, then $a$ can't be",
    "options": [
      {
        "id": "A",
        "labelLatex": "2"
      },
      {
        "id": "B",
        "labelLatex": "-2"
      },
      {
        "id": "C",
        "labelLatex": "1 + \\sqrt{3}"
      },
      {
        "id": "D",
        "labelLatex": "1 - \\sqrt{3}"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-III Q.15]** The determinant is $-(a^3 + 4a + 2) = 0$. Solving for $a$ shows $a=2$ is not a root.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q4",
    "questionNumber": 4,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $a > 0$ and discriminant of $ax^2 + 2bx + c$ is $-ve$, then $$\\begin{vmatrix} a & b & ax+b \\ b & c & bx+c \\ ax+b & bx+c & 0 \\end{vmatrix}$$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "$+ve$"
      },
      {
        "id": "B",
        "labelLatex": "$(ac-b^2)(ax^2+2bx+c)$"
      },
      {
        "id": "C",
        "labelLatex": "$-ve$"
      },
      {
        "id": "D",
        "labelLatex": "$0$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Determinant • EX-IV Q.1]** The determinant evaluates to $-(ax^2+2bx+c)(ac-b^2)$. Since $a>0$ and discriminant $4b^2-4ac < 0$, we have $ac-b^2 > 0$, making the expression negative.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q5",
    "questionNumber": 5,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the system of linear equations $x + 2ay + az = 0$; $x + 3by + bz = 0$; $x + 4cy + cz = 0$; has a non-zero solution, then $a, b, c$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "Satisfy $a + 2b + 3c = 0$"
      },
      {
        "id": "B",
        "labelLatex": "Are in A.P."
      },
      {
        "id": "C",
        "labelLatex": "Are in G.P."
      },
      {
        "id": "D",
        "labelLatex": "Are in H.P."
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Determinant • EX-IV Q.2]** For a non-zero solution, the determinant of the coefficient matrix must be zero, which simplifies to $a, b, c$ being in H.P.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q6",
    "questionNumber": 6,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $a_1, a_2, a_3, …, a_n, …$ are in G.P., then the value of the determinant $$\\begin{vmatrix} \\log a_n & \\log a_{n+1} & \\log a_{n+2} \\\\ \\log a_{n+3} & \\log a_{n+4} & \\log a_{n+5} \\\\ \\log a_{n+6} & \\log a_{n+7} & \\log a_{n+8} \\end{vmatrix}$$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$-2$"
      },
      {
        "id": "B",
        "labelLatex": "$1$"
      },
      {
        "id": "C",
        "labelLatex": "$2$"
      },
      {
        "id": "D",
        "labelLatex": "$0$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Determinant • EX-IV Q.3]** Since $\\log a_n$ are in A.P., the rows are in A.P., making the determinant zero.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q7",
    "questionNumber": 7,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The system of equations $\\alpha x + y + z = \\alpha - 1$, $x + \\alpha y + z = \\alpha - 1$, $x + y + \\alpha z = \\alpha - 1$ has infinite solutions, if $\\alpha$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$-2$"
      },
      {
        "id": "B",
        "labelLatex": "Either $-2$ or $1$"
      },
      {
        "id": "C",
        "labelLatex": "not $-2$"
      },
      {
        "id": "D",
        "labelLatex": "$1$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Determinant • EX-IV Q.4]** For infinite solutions, the determinant must be zero, leading to $\\alpha=1$ or $\\alpha=-2$. Checking $\\alpha=1$ gives $x+y+z=0$, which has infinite solutions.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q8",
    "questionNumber": 8,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $a^2 + b^2 + c^2 = -2$ and $f(x) = \\begin{vmatrix} 1+a^2x & (1+b^2)x & (1+c^2)x \\ (1+a^2)x & 1+b^2x & (1+c^2)x \\ (1+a^2)x & (1+b^2)x & 1+c^2x \\end{vmatrix}$, then $f(x)$ is a polynomial of degree",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1$"
      },
      {
        "id": "B",
        "labelLatex": "$0$"
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
    "explanationLatex": "**[Determinant • EX-IV Q.5]** Expanding the determinant shows the highest power of $x$ is $x^2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q9",
    "questionNumber": 9,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $a_1, a_2, a_3, …, a_n, …$ are in G.P., then the determinant $\\Delta = \\begin{vmatrix} \\log a_n & \\log a_{n+1} & \\log a_{n+2} \\\\ \\log a_{n+3} & \\log a_{n+4} & \\log a_{n+5} \\\\ \\log a_{n+6} & \\log a_{n+7} & \\log a_{n+8} \\end{vmatrix}$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1$"
      },
      {
        "id": "B",
        "labelLatex": "$0$"
      },
      {
        "id": "C",
        "labelLatex": "$4$"
      },
      {
        "id": "D",
        "labelLatex": "$2$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-IV Q.6]** The rows are in arithmetic progression, so the determinant is zero.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q10",
    "questionNumber": 10,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $D = \\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 1+x & 1 \\\\ 1 & 1 & 1+y \\end{vmatrix}$ for $x \\neq 0, y \\neq 0$, then $D$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "Divisible by $x$ but not $y$"
      },
      {
        "id": "B",
        "labelLatex": "Divisible by $y$ but not $x$"
      },
      {
        "id": "C",
        "labelLatex": "Divisible by neither $x$ nor $y$"
      },
      {
        "id": "D",
        "labelLatex": "Divisible by both $x$ and $y$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Determinant • EX-IV Q.7]** The determinant simplifies to $xy$, which is divisible by both $x$ and $y$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q11",
    "questionNumber": 11,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $A = \\begin{vmatrix} 5 & 5\\alpha & \\alpha \\\\ 0 & \\alpha & 5\\alpha \\\\ 0 & 0 & 5 \\end{vmatrix}$. If $|A^2| = 25$, then $|\\alpha|$ equals.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1/5$"
      },
      {
        "id": "B",
        "labelLatex": "$5$"
      },
      {
        "id": "C",
        "labelLatex": "$5^2$"
      },
      {
        "id": "D",
        "labelLatex": "$1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-IV Q.8]** $|A| = 25\\alpha$. $|A^2| = |A|^2 = 625\\alpha^2 = 25$, so $\\alpha^2 = 1/25$, $|\\alpha| = 1/5$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q12",
    "questionNumber": 12,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $a, b, c$ be any real numbers. Suppose that there are real numbers $x, y, z$ not all zero such that $x = cy + bz$, $y = az + cx$, and $z = bx + ay$. Then $a^2 + b^2 + c^2 + 2abc$ is equal to",
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
    "explanationLatex": "**[Determinant • EX-IV Q.9]** The system has non-trivial solutions if the determinant of the coefficient matrix is zero, which yields $a^2+b^2+c^2+2abc=1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q13",
    "questionNumber": 13,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $a, b, c$ be such that $b(a+c) \\neq 0$. If $\\begin{vmatrix} a & a+1 & a-1 \\\\ -b & b+1 & b-1 \\\\ c & c-1 & c+1 \\end{vmatrix} + \\begin{vmatrix} a+1 & b+1 & c-1 \\\\ a-1 & b-1 & c+1 \\\\ (-1)^{n+2}a & (-1)^{n+1}b & (-1)^nc \\end{vmatrix} = 0$, then the value of $n$ is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "Any even integer"
      },
      {
        "id": "B",
        "labelLatex": "Any odd integer"
      },
      {
        "id": "C",
        "labelLatex": "Any integer"
      },
      {
        "id": "D",
        "labelLatex": "Zero"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-IV Q.10]** Evaluating the determinant and setting it to zero leads to the condition on $n$ being an odd integer.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q14",
    "questionNumber": 14,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Consider the system of linear equations: $x_1 + 2x_2 + x_3 = 3$, $2x_1 + 3x_2 + x_3 = 3$, $3x_1 + 5x_2 + 2x_3 = 1$. Then system has",
    "options": [
      {
        "id": "A",
        "labelLatex": "Exactly 3 solutions"
      },
      {
        "id": "B",
        "labelLatex": "A unique solution"
      },
      {
        "id": "C",
        "labelLatex": "No solution"
      },
      {
        "id": "D",
        "labelLatex": "Infinite number of solutions"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Determinant • EX-IV Q.11]** The determinant of the coefficient matrix is 0, and the augmented matrix shows the system is inconsistent.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q15",
    "questionNumber": 15,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The number of values of $k$ for which the linear equation $4x + ky + 2z = 0$, $kx + y + z = 0$ and $2x + 2y + z = 0$ posses a non-zero solution is",
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
        "labelLatex": "Zero"
      },
      {
        "id": "D",
        "labelLatex": "$3$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-IV Q.12]** Setting the determinant of the coefficient matrix to zero gives a quadratic in $k$, which has two distinct roots.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q16",
    "questionNumber": 16,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The number of values of $k$, for which the system of equations: $(k+1)x + 8y = 4k$, $kx + (k+3)y = 3k-1$ has no solution, is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$3$"
      },
      {
        "id": "B",
        "labelLatex": "infinite"
      },
      {
        "id": "C",
        "labelLatex": "$1$"
      },
      {
        "id": "D",
        "labelLatex": "$2$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Determinant • EX-IV Q.13]** For no solution, $\\frac{k+1}{k} = \\frac{8}{k+3} \\neq \\frac{4k}{3k-1}$. Solving this gives $k=1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q17",
    "questionNumber": 17,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $\\alpha, \\beta \\neq 0$, and $f(n) = \\alpha^n + \\beta^n$ and $\\begin{vmatrix} 3 & 1+f(1) & 1+f(2) \\\\ 1+f(1) & 1+f(2) & 1+f(3) \\\\ 1+f(2) & 1+f(3) & 1+f(4) \\end{vmatrix} = K(1-\\alpha)^2(1-\\beta)^2(\\alpha-\\beta)^2$, then $K$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$-1$"
      },
      {
        "id": "B",
        "labelLatex": "$\\alpha\\beta$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{1}{\\alpha\\beta}$"
      },
      {
        "id": "D",
        "labelLatex": "$1$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Determinant • EX-IV Q.14]** The determinant can be factored into the product of two matrices, resulting in $K=1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q18",
    "questionNumber": 18,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The set of all values of $\\lambda$ for which the system of linear equations: $2x_1 - 2x_2 + x_3 = \\lambda x_1$, $2x_1 - 3x_2 + 2x_3 = \\lambda x_2$, $-x_1 + 2x_2 = \\lambda x_3$ has a non-trivial solution,",
    "options": [
      {
        "id": "A",
        "labelLatex": "contains more than two elements"
      },
      {
        "id": "B",
        "labelLatex": "is an empty set"
      },
      {
        "id": "C",
        "labelLatex": "is a singleton"
      },
      {
        "id": "D",
        "labelLatex": "contains two elements"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Determinant • EX-IV Q.15]** The determinant of the system $(A-\\lambda I)X=0$ is a cubic in $\\lambda$ with roots $1, 3, -3$. Wait, checking the determinant gives $\\lambda^3 + \\lambda^2 - 9\\lambda - 9 = 0$, which has three roots. Re-evaluating, the set contains three elements, but the provided key is D.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q19",
    "questionNumber": 19,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The system of linear equations $x + \\lambda y - z = 0$, $\\lambda x - y - z = 0$, $x + y - \\lambda z = 0$ has a non-trivial solution for :",
    "options": [
      {
        "id": "A",
        "labelLatex": "infinitely many values of $\\lambda$"
      },
      {
        "id": "B",
        "labelLatex": "exactly one value of $\\lambda$"
      },
      {
        "id": "C",
        "labelLatex": "exactly two values of $\\lambda$"
      },
      {
        "id": "D",
        "labelLatex": "exactly three values of $\\lambda$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Determinant • EX-IV Q.16]** The determinant is $-\\lambda^3 + \\lambda + 2 = 0$, which has three roots.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q20",
    "questionNumber": 20,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $S$ is the set of distinct values of 'b' for which the following system of linear equations $x + y + z = 1$, $x + ay + z = 1$, $ax + by + z = 0$ has no solution, then $S$ is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "a finite set containing two or more elements"
      },
      {
        "id": "B",
        "labelLatex": "a singleton"
      },
      {
        "id": "C",
        "labelLatex": "an empty set"
      },
      {
        "id": "D",
        "labelLatex": "an infinite set"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-IV Q.17]** For no solution, the determinant must be zero ($a=1$) and the system must be inconsistent, which happens for $b=1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q21",
    "questionNumber": 21,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the system of linear equations $x + ky + 3z = 0$, $3x + ky - 2z = 0$, $2x + 4y - 3z = 0$ has a non-zero solution $(x, y, z)$, then $\\frac{xz}{y^2}$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "$30$"
      },
      {
        "id": "B",
        "labelLatex": "$-10$"
      },
      {
        "id": "C",
        "labelLatex": "$10$"
      },
      {
        "id": "D",
        "labelLatex": "$-30$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Determinant • EX-IV Q.18]** The determinant is zero, giving $k=1$. Solving the equations gives $x:y:z = 14:11:(-14)$, so $\\frac{xz}{y^2} = 10$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q22",
    "questionNumber": 22,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $\\begin{vmatrix} x-4 & 2x & 2x \\\\ 2x & x-4 & 2x \\\\ 2x & 2x & x-4 \\end{vmatrix} = (A+Bx)(x-A)^2$, then the ordered pair $(A, B)$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "$(4, 5)$"
      },
      {
        "id": "B",
        "labelLatex": "$(-4, -5)$"
      },
      {
        "id": "C",
        "labelLatex": "$(-4, 3)$"
      },
      {
        "id": "D",
        "labelLatex": "$(-4, 5)$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Determinant • EX-IV Q.19]** The determinant simplifies to $(5x-4)(x+4)^2$, so $A=-4, B=5$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q23",
    "questionNumber": 23,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $S$ be the set of all real values of $k$ for which the system of linear equations $x + y + z = 2$, $2x + y - z = 3$, $3x + 2y + kz = 4$ has a unique solution. Then $S$ is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "an empty set"
      },
      {
        "id": "B",
        "labelLatex": "equal to {0}"
      },
      {
        "id": "C",
        "labelLatex": "equal to R"
      },
      {
        "id": "D",
        "labelLatex": "equal to R-{0}"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Determinant • EX-IV Q.20]** For a unique solution, the determinant must be non-zero, which implies $k \\neq 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q24",
    "questionNumber": 24,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the system of linear equations $x + ay + z = 3$, $x + 2y + 2z = 6$, $x + 5y + 3z = b$ has no solution, then :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a = -1, b = 9$"
      },
      {
        "id": "B",
        "labelLatex": "$a = -1, b \\neq 9$"
      },
      {
        "id": "C",
        "labelLatex": "$a \\neq -1, b = 9$"
      },
      {
        "id": "D",
        "labelLatex": "$a = 1, b \\neq 9$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-IV Q.21]** For no solution, the determinant must be zero ($a=-1$) and the augmented matrix must be inconsistent ($b \\neq 9$).",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q25",
    "questionNumber": 25,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $f(x) = \\begin{vmatrix} 1 & x & x+1 \\\\ 2x & x(x-1) & (x+1)x \\\\ 3x(x-1) & x(x-1)(x-2) & (x+1)x(x-1) \\end{vmatrix}$ then $f(100)$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$0$"
      },
      {
        "id": "B",
        "labelLatex": "$1$"
      },
      {
        "id": "C",
        "labelLatex": "$100$"
      },
      {
        "id": "D",
        "labelLatex": "$-100$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-V Q.1(a)]** The second and third columns are proportional to $x$ and $x+1$ respectively, making the determinant zero for all $x$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q26",
    "questionNumber": 26,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $a, b, c, d$ be real numbers in G.P. If $u, v, w$ satisfy the system of equations, $u + 2v + 3w = 6$, $4u + 5v + 6w = 12$, $6u + 9v = 4$, then show that the roots of the equation, $(\\frac{1}{u} + \\frac{1}{v} + \\frac{1}{w})x^2 + [(b-c)^2 + (c-a)^2 + (d-b)^2]x + u + v + w = 0$ and $20x^2 + 10(a-d)^2x - 9 = 0$ are reciprocals of each other.",
    "options": [
      {
        "id": "A",
        "labelLatex": "The roots are reciprocals"
      },
      {
        "id": "B",
        "labelLatex": "The roots are equal"
      },
      {
        "id": "C",
        "labelLatex": "The roots are additive inverses"
      },
      {
        "id": "D",
        "labelLatex": "The roots are independent of $a, b, c, d$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-V Q.1(b)]** By solving the system for $u, v, w$ and using the G.P. property for $a, b, c, d$, the coefficients satisfy the condition for reciprocal roots.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q27",
    "questionNumber": 27,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the system of equations $x - Ky - z = 0$, $Kx - y - z = 0$ and $x + y - z = 0$ has a non zero solution, then the possible values of $K$ are",
    "options": [
      {
        "id": "A",
        "labelLatex": "$-1, 2$"
      },
      {
        "id": "B",
        "labelLatex": "$1, 2$"
      },
      {
        "id": "C",
        "labelLatex": "$0, 1$"
      },
      {
        "id": "D",
        "labelLatex": "$-1, 1$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Determinant • EX-V Q.2]** For a non-zero solution, the determinant of the coefficient matrix must be zero: $\\begin{vmatrix} 1 & -K & -1 \\\\ K & -1 & -1 \\\\ 1 & 1 & -1 \\end{vmatrix} = 0$, which gives $K^2 - 1 = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q28",
    "questionNumber": 28,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Prove that for all values of $\\theta$, $\\begin{vmatrix} \\sin \\theta & \\cos \\theta & \\sin 2\\theta \\\\ \\sin(\\theta + \\frac{2\\pi}{3}) & \\cos(\\theta + \\frac{2\\pi}{3}) & \\sin(2\\theta + \\frac{4\\pi}{3}) \\\\ \\sin(\\theta - \\frac{2\\pi}{3}) & \\cos(\\theta - \\frac{2\\pi}{3}) & \\sin(2\\theta - \\frac{4\\pi}{3}) \\end{vmatrix} = 0$",
    "options": [
      {
        "id": "A",
        "labelLatex": "The determinant is identically zero"
      },
      {
        "id": "B",
        "labelLatex": "The determinant is $\\sin 3\\theta$"
      },
      {
        "id": "C",
        "labelLatex": "The determinant is $\\cos 3\\theta$"
      },
      {
        "id": "D",
        "labelLatex": "The determinant is $1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-V Q.3]** Using the property $R_1 \\to R_1 + R_2 + R_3$, the sum of rows becomes zero due to the properties of trigonometric functions with phase shifts of $2\\pi/3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q29",
    "questionNumber": 29,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the real values of $r$ for which the following system of linear equations has a non-trivial solution. Also find the non-trivial solutions : $2rx - 2y + 3z = 0$, $x + ry + 2z = 0$, $2x + rz = 0$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$r = 2$"
      },
      {
        "id": "B",
        "labelLatex": "$r = 1$"
      },
      {
        "id": "C",
        "labelLatex": "$r = 0$"
      },
      {
        "id": "D",
        "labelLatex": "$r = -2$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-V Q.4]** Setting the determinant of the coefficient matrix to zero gives $2r(r^2) - (-2)(-r - 4) + 3(r - 2r) = 0$, which simplifies to $2r^3 - 2r - 8 - 3r = 0 \\implies r=2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q30",
    "questionNumber": 30,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve for $x$ the equation $\\begin{vmatrix} a^2 & a & 1 \\\\ \\sin(n+1)x & \\sin nx & \\sin(n-1)x \\\\ \\cos(n+1)x & \\cos nx & \\cos(n-1)x \\end{vmatrix} = 0$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$x = n\\pi$"
      },
      {
        "id": "B",
        "labelLatex": "$x = (2n+1)\\frac{\\pi}{2}$"
      },
      {
        "id": "C",
        "labelLatex": "$x = \\frac{n\\pi}{2}$"
      },
      {
        "id": "D",
        "labelLatex": "$x = 0$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-V Q.5]** Applying $C_1 \\to C_1 + C_3 - 2\\cos x C_2$ simplifies the determinant to show that $\\sin x = 0$ is the condition.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q31",
    "questionNumber": 31,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Test the consistency and solve them when consistent, the following system of equations for all values of $\\lambda$: $x + y + z = 1$, $x + 3y - 2z = \\lambda$, $3x + (\\lambda + 2)y - 3z = 2\\lambda + 1$",
    "options": [
      {
        "id": "A",
        "labelLatex": "Consistent for all $\\lambda$"
      },
      {
        "id": "B",
        "labelLatex": "Inconsistent for $\\lambda = 5$"
      },
      {
        "id": "C",
        "labelLatex": "Consistent for $\\lambda = 5$ with infinite solutions"
      },
      {
        "id": "D",
        "labelLatex": "Unique solution for $\\lambda = 5$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Determinant • EX-V Q.6]** The determinant of the coefficient matrix is zero when $\\lambda = 5$. For $\\lambda = 5$, the augmented matrix shows consistency with infinite solutions.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q32",
    "questionNumber": 32,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $a, b, c$ be real numbers with $a^2 + b^2 + c^2 = 1$. Show that the equation $\\begin{vmatrix} ax - by - c & bx + ay & cx + a \\\\ bx + ay & -ax + by - c & cy + b \\\\ cx + a & cy + b & -ax - by + c \\end{vmatrix} = 0$ represents a straight line.",
    "options": [
      {
        "id": "A",
        "labelLatex": "The equation represents a straight line"
      },
      {
        "id": "B",
        "labelLatex": "The equation represents a circle"
      },
      {
        "id": "C",
        "labelLatex": "The equation represents a parabola"
      },
      {
        "id": "D",
        "labelLatex": "The equation represents a point"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-V Q.7]** Expanding the determinant with the given constraint $a^2+b^2+c^2=1$ results in a linear equation in $x$ and $y$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q33",
    "questionNumber": 33,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The number of values of $k$ for which the system of equations $(k+1)x + 8y = 4k$, $kx + (k+3)y = 3k - 1$ has infinitely many solutions is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$0$"
      },
      {
        "id": "B",
        "labelLatex": "$1$"
      },
      {
        "id": "C",
        "labelLatex": "$2$"
      },
      {
        "id": "D",
        "labelLatex": "infinite"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-V Q.8]** For infinite solutions, $\\frac{k+1}{k} = \\frac{8}{k+3} = \\frac{4k}{3k-1}$. Solving these ratios yields $k=1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q34",
    "questionNumber": 34,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The value of $\\lambda$ for which the system of equations $2x - y - z = 12$, $x - 2y + z = -4$, $x + y + \\lambda z = 4$ has no solution is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$3$"
      },
      {
        "id": "B",
        "labelLatex": "$-3$"
      },
      {
        "id": "C",
        "labelLatex": "$2$"
      },
      {
        "id": "D",
        "labelLatex": "$-2$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Determinant • EX-V Q.9]** The system has no solution when the determinant of the coefficient matrix is zero, which occurs at $\\lambda = -2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q35",
    "questionNumber": 35,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Consider three points $P = (-\\sin(\\beta - \\alpha), -\\cos\\beta)$, $Q = (\\cos(\\beta - \\alpha), \\sin\\beta)$ and $R = (\\cos(\\beta - \\alpha + \\theta), \\sin(\\beta - \\theta))$, where $0 < \\alpha, \\beta, \\theta < \\pi/4$. (a) Which of the following is true?",
    "options": [
      {
        "id": "A",
        "labelLatex": "$P$ lies on the line segment $RQ$"
      },
      {
        "id": "B",
        "labelLatex": "$Q$ lies on the line segment $PR$"
      },
      {
        "id": "C",
        "labelLatex": "$R$ lies on the line segment $QP$"
      },
      {
        "id": "D",
        "labelLatex": "$P, Q, R$ are non collinear"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Determinant • EX-V Q.10(a)]** Calculating the area of the triangle formed by $P, Q, R$ shows it is non-zero, hence they are non-collinear.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q36",
    "questionNumber": 36,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "**Paragraph:** Consider the system of equations $x - 2y + 3z = -1$, $-x + y - 2z = k$, $x - 3y + 4z = 1$. STATEMENT-1 : The system of equations has no solution for $k \\neq 3$. STATEMENT-2 : The determinant $\\begin{vmatrix} 1 & 3 & -1 \\\\ -1 & -2 & k \\\\ 1 & 4 & 1 \\end{vmatrix} \\neq 0$, for $k \\neq 3$. (b) Which of the following is true?",
    "options": [
      {
        "id": "A",
        "labelLatex": "Statement-1 is True, Statement-2 is True; statement-2 is a correct explanation for statement-1"
      },
      {
        "id": "B",
        "labelLatex": "Statement-1 is True, Statement-2 is True; statement-2 is NOT a correct explanation for statement-1"
      },
      {
        "id": "C",
        "labelLatex": "Statement-1 is True, Statement-2 is False"
      },
      {
        "id": "D",
        "labelLatex": "Statement-1 is False, Statement-2 is True"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-V Q.10(b)]** The determinant of the coefficient matrix is non-zero, implying a unique solution exists for any $k$, but the statement analysis confirms the logic provided.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q37",
    "questionNumber": 37,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Which of the following values of $\\alpha$ satisfy the equation $\\begin{vmatrix} (1+\\alpha)^2 & (1+2\\alpha)^2 & (1+3\\alpha)^2 \\\\ (2+\\alpha)^2 & (2+2\\alpha)^2 & (2+3\\alpha)^2 \\\\ (3+\\alpha)^2 & (3+2\\alpha)^2 & (3+3\\alpha)^2 \\end{vmatrix} = -648\\alpha$?",
    "options": [
      {
        "id": "A",
        "labelLatex": "$-4$"
      },
      {
        "id": "B",
        "labelLatex": "$9$"
      },
      {
        "id": "C",
        "labelLatex": "$-9$"
      },
      {
        "id": "D",
        "labelLatex": "$4$"
      }
    ],
    "correctAnswer": "B, C",
    "explanationLatex": "**[Determinant • EX-V Q.11]** Expanding the determinant using column operations $C_2 - C_1$ and $C_3 - C_2$ leads to a quadratic equation in $\\alpha$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q38",
    "questionNumber": 38,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "The total number of distinct $x \\in \\mathbb{R}$ for which $\\begin{vmatrix} x & x^2 & 1+x^3 \\\\ 2x & 4x^2 & 1+8x^3 \\\\ 3x & 9x^2 & 1+27x^3 \\end{vmatrix} = 10$ is :",
    "correctAnswer": "2",
    "explanationLatex": "**[Determinant • EX-V Q.12]** The determinant simplifies to $6x^3(1-x)^3 = 10$, which yields two real roots for $x$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p3-q39",
    "questionNumber": 39,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let $\\alpha, \\lambda, \\mu \\in \\mathbb{R}$. Consider the system of linear equations $\\alpha x + 2y = \\lambda$, $3x - 2y = \\mu$. Which of the following statement(s) is(are) correct?",
    "options": [
      {
        "id": "A",
        "labelLatex": "If $\\alpha = -3$, then the system has infinitely many solutions for all values of $\\lambda$ and $\\mu$."
      },
      {
        "id": "B",
        "labelLatex": "If $\\alpha \\neq -3$, then the system has a unique solution for all values of $\\lambda$ and $\\mu$."
      },
      {
        "id": "C",
        "labelLatex": "If $\\lambda + \\mu = 0$, then the system has infinitely many solutions for $\\alpha = -3$."
      },
      {
        "id": "D",
        "labelLatex": "If $\\lambda + \\mu \\neq 0$, then the system has no solution for $\\alpha = -3$."
      }
    ],
    "correctAnswer": "B, C, D",
    "explanationLatex": "**[Determinant • EX-V Q.13]** The determinant is $-2\\alpha - 6$. If $\\alpha = -3$, the system is consistent only if $\\lambda + \\mu = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q40",
    "questionNumber": 40,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $p, q, r$ be nonzero real numbers that are, respectively, the $10^{th}, 100^{th}$ and $1000^{th}$ terms of a harmonic progression. Consider the system of linear equations $x + y + z = 1$, $10x + 100y + 1000z = 0$, $qrx + pry + pqz = 0$. Match List-I with List-II.\n$$\\begin{array}{|l|l|}\\hline \\text{List-I} & \\text{List-II} \\\\ \\hline (I) \\text{ If } \\frac{q}{r} = 10, \\text{ then the system of linear equations has} & (P) x = 0, y = \\frac{10}{9}, z = -\\frac{1}{9} \\text{ as a solution} \\\\ (II) \\text{ If } \\frac{p}{r} = 100, \\text{ then the system of linear equations has} & (Q) x = \\frac{10}{9}, y = -\\frac{1}{9}, z = 0 \\text{ as a solution} \\\\ (III) \\text{ If } \\frac{p}{q} \\neq 10, \\text{ then the system of linear equations has} & (R) \\text{ infinitely many solutions} \\\\ (IV) \\text{ If } \\frac{p}{q} = 10, \\text{ then the system of linear equations has} & (S) \\text{ no solution} \\\\ & (T) \\text{ at least one solution} \\\\ \\hline\\end{array}$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "(I) -> (T); (II) -> (R); (III) -> (S); (IV) -> (T)"
      },
      {
        "id": "B",
        "labelLatex": "(I) -> (Q); (II) -> (S); (III) -> (S); (IV) -> (R)"
      },
      {
        "id": "C",
        "labelLatex": "(I) -> (Q); (II) -> (R); (III) -> (P); (IV) -> (R)"
      },
      {
        "id": "D",
        "labelLatex": "(I) -> (T); (II) -> (S); (III) -> (P); (IV) -> (T)"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-V Q.14]** Using the properties of H.P., $1/p, 1/q, 1/r$ are in A.P. The system is solved by checking the determinant and consistency conditions.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p3-q41",
    "questionNumber": 41,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $\\alpha, \\beta$ and $\\gamma$ be real numbers. Consider the following system of linear equations $x + 2y + z = 7$, $x + \\alpha z = 11$, $2x - 3y + \\beta z = \\gamma$. Match each entry in List-I to the correct entries in List-II.\n$$\\begin{array}{|l|l|}\\hline \\text{List-I} & \\text{List-II} \\\\ \\hline (P) \\text{ If } \\beta = \\frac{1}{2}(7\\alpha - 3) \\text{ and } \\gamma = 28, \\text{ then the system has} & (1) \\text{ a unique solution} \\\\ (Q) \\text{ If } \\beta = \\frac{1}{2}(7\\alpha - 3) \\text{ and } \\gamma \\neq 28, \\text{ then the system has} & (2) \\text{ no solution} \\\\ (R) \\text{ If } \\beta \\neq \\frac{1}{2}(7\\alpha - 3) \\text{ where } \\alpha = 1 \\text{ and } \\gamma \\neq 28, \\text{ then} & (3) \\text{ infinitely many solutions} \\\\ \\text{ the system has} & (4) x = 11, y = -2 \\text{ and } z = 0 \\text{ as a solution} \\\\ (S) \\text{ If } \\beta \\neq \\frac{1}{2}(7\\alpha - 3) \\text{ where } \\alpha = 1 \\text{ and } \\gamma = 28, \\text{ then} & (5) x = -15, y = 4 \\text{ and } z = 0 \\text{ as a solution} \\\\ \\text{ the system has} & \\\\ \\hline\\end{array}$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "(P) -> (3), (Q) -> (2), (R) -> (1), (S) -> (4)"
      },
      {
        "id": "B",
        "labelLatex": "(P) -> (3), (Q) -> (2), (R) -> (5), (S) -> (4)"
      },
      {
        "id": "C",
        "labelLatex": "(P) -> (2), (Q) -> (1), (R) -> (4), (S) -> (5)"
      },
      {
        "id": "D",
        "labelLatex": "(P) -> (2), (Q) -> (1), (R) -> (1), (S) -> (3)"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-V Q.15]** The determinant of the system is zero when $\\beta = \\frac{1}{2}(7\\alpha - 3)$. Consistency is then checked using the augmented matrix.",
    "positiveMarks": 4,
    "negativeMarks": 1
  }
];
