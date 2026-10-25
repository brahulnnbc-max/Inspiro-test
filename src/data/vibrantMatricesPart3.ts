import { Question } from '../types/exam';

export const MATRICES_PART_3_QUESTIONS: Question[] = [
  {
    "id": "mat-p3-q1",
    "questionNumber": 1,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $A$ be a $2 \\times 2$ matrix.\nStatement 1 : $\\text{adj}(\\text{adj} A) = A$\nStatement 2 : $|\text{adj} A| = |A|$\n(A) Statement 1 is true, statement 2 is true; statement 2 is a correct explanation for statement 1.\n(B) Statement 1 is true, statement 2 is true; statement 2 is not a correct explanation for statement 1.\n(C) Statement 1 is true, statement 2 is false.\n(D) Statement 1 is false, statement 2 is true.",
    "options": [
      {
        "id": "A",
        "labelLatex": "Statement 1 is true, statement 2 is true; statement 2 is a correct explanation for statement 1."
      },
      {
        "id": "B",
        "labelLatex": "Statement 1 is true, statement 2 is true; statement 2 is not a correct explanation for statement 1."
      },
      {
        "id": "C",
        "labelLatex": "Statement 1 is true, statement 2 is false."
      },
      {
        "id": "D",
        "labelLatex": "Statement 1 is false, statement 2 is true."
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • EX-IV Q.10]** For $2 \\times 2$ matrix, $\\text{adj}(\\text{adj} A) = |A|^{2-2} A = A$. Also $|\text{adj} A| = |A|^{2-1} = |A|$. Both are true but independent.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q2",
    "questionNumber": 2,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The number of $3 \\times 3$ non-singular matrices with four entries as 1 and all other entries as 0 is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "at least 7"
      },
      {
        "id": "B",
        "labelLatex": "less than 4"
      },
      {
        "id": "C",
        "labelLatex": "$5$"
      },
      {
        "id": "D",
        "labelLatex": "$6$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-IV Q.11]** A $3 \\times 3$ matrix with four 1s and five 0s has determinant 0 if any row or column is zero. By checking configurations, there are many non-singular cases.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q3",
    "questionNumber": 3,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $A$ be a $2 \\times 2$ matrix with non-zero entries and let $A^2 = I$, where $I$ is a $2 \\times 2$ identity matrix. Define $\\text{Tr}(A) = $ sum of diagonal elements of $A$ and $|A| = $ determinant of matrix $A$.\nStatement 1 : $\\text{Tr}(A) = 0$\nStatement 2 : $|A| = 1$",
    "options": [
      {
        "id": "A",
        "labelLatex": "Statement 1 is false, statement 2 is true."
      },
      {
        "id": "B",
        "labelLatex": "Statement 1 is true, statement 2 is true; statement 2 is a correct explanation for statement 1."
      },
      {
        "id": "C",
        "labelLatex": "Statement 1 is true, statement 2 is true; statement 2 is not a correct explanation for statement 1."
      },
      {
        "id": "D",
        "labelLatex": "Statement 1 is true, statement 2 is false."
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • EX-IV Q.12]** For $A^2=I$, characteristic equation is $\\lambda^2 - \\text{Tr}(A)\\lambda + |A| = 0$. If $A^2=I$, then $\\text{Tr}(A)=0$ and $|A|=-1$ (for non-scalar $A$).",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q4",
    "questionNumber": 4,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $A$ and $B$ two symmetric matrices of order 3.\nStatement 1 : $A(BA)$ and $(AB)A$ are symmetric matrices\nStatement 2 : $AB$ is symmetric matrix if matrix multiplication of $A$ with $B$ is commutative.",
    "options": [
      {
        "id": "A",
        "labelLatex": "Statement 1 is false, statement 2 is true."
      },
      {
        "id": "B",
        "labelLatex": "Statement 1 is true, statement 2 is true; statement 2 is a correct explanation for statement 1."
      },
      {
        "id": "C",
        "labelLatex": "Statement 1 is true, statement 2 is true; statement 2 is not a correct explanation for statement 1."
      },
      {
        "id": "D",
        "labelLatex": "Statement 1 is true, statement 2 is false."
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Matrices • EX-IV Q.13]** $(ABA)^T = A^T B^T A^T = ABA$. $(AB)^T = B^T A^T = BA$. If $AB=BA$, then $AB$ is symmetric.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q5",
    "questionNumber": 5,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $A = \\begin{bmatrix} 1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ 3 & 2 & 1 \\end{bmatrix}$. If $u_1$ and $u_2$ are column matrices such that $Au_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}$ and $Au_2 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}$, then $u_1 + u_2$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\begin{bmatrix} -1 \\\\ 1 \\\\ 0 \\end{bmatrix}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\begin{bmatrix} -1 \\\\ 1 \\\\ -1 \\end{bmatrix}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\begin{bmatrix} -1 \\\\ -1 \\\\ 0 \\end{bmatrix}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\begin{bmatrix} 1 \\\\ -1 \\\\ -1 \\end{bmatrix}$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • EX-IV Q.14]** $u_1 = A^{-1} \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}$ and $u_2 = A^{-1} \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}$. $u_1+u_2 = A^{-1} \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ -1 \\\\ -1 \\end{bmatrix}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q6",
    "questionNumber": 6,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $P$ and $Q$ be $3 \\times 3$ matrices $P \\neq Q$. If $P^3 = Q^3$ and $P^2Q = Q^2P$, then determinant of $(P^2 + Q^2)$ is equal to :",
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
        "labelLatex": "$0$"
      },
      {
        "id": "D",
        "labelLatex": "$-1$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Matrices • EX-IV Q.15]** From $P^3-Q^3=0$ and $P^2Q-Q^2P=0$, we can show $(P-Q)(P^2+Q^2) = P^3+PQ^2-QP^2-Q^3 = 0$. Since $P \\neq Q$, $\\det(P^2+Q^2) = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q7",
    "questionNumber": 7,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $P = \\begin{bmatrix} 1 & \\alpha & 3 \\\\ 1 & 3 & 3 \\\\ 2 & 4 & 4 \\end{bmatrix}$ is the adjoint of a $3 \\times 3$ matrix $A$ and $|A| = 4$, then $\\alpha$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$0$"
      },
      {
        "id": "B",
        "labelLatex": "$4$"
      },
      {
        "id": "C",
        "labelLatex": "$11$"
      },
      {
        "id": "D",
        "labelLatex": "$5$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Matrices • EX-IV Q.16]** $|P| = |A|^{3-1} = |A|^2 = 16$. Expanding $|P| = 1(12-12) - \\alpha(4-6) + 3(4-6) = 2\\alpha - 6 = 16 \\implies 2\\alpha = 22 \\implies \\alpha = 11$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q8",
    "questionNumber": 8,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A$ is an $3 \\times 3$ non-singular matrix such that $AA' = A'A$ and $B = A^{-1} A'$, then $BB'$ equals",
    "options": [
      {
        "id": "A",
        "labelLatex": "$(B^{-1})'$"
      },
      {
        "id": "B",
        "labelLatex": "$I + B$"
      },
      {
        "id": "C",
        "labelLatex": "$I$"
      },
      {
        "id": "D",
        "labelLatex": "$B^{-1}$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Matrices • EX-IV Q.17]** $BB' = (A^{-1}A')(A^{-1}A')' = A^{-1}A'A'^{-1}(A^{-1})' = A^{-1}(A'A'^{-1})A^{-1'} = A^{-1}IA^{-1'} = (A'A)^{-1} = I$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q9",
    "questionNumber": 9,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} 1 & 2 & 2 \\\\ 2 & 1 & -2 \\\\ a & 2 & b \\end{bmatrix}$ is a matrix satisfying the equation $AA^T = 9I$, where $I$ is $3 \\times 3$ identity matrix, then the ordered pair $(a, b)$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$(-2, -1)$"
      },
      {
        "id": "B",
        "labelLatex": "$(2, -1)$"
      },
      {
        "id": "C",
        "labelLatex": "$(-2, 1)$"
      },
      {
        "id": "D",
        "labelLatex": "$(2, 1)$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-IV Q.18]** From $AA^T = 9I$, the rows are orthogonal and have magnitude 3. Row 3 dot Row 1: $a + 4 + 2b = 0$. Row 3 dot Row 2: $2a + 2 - 2b = 0$. Solving gives $a=-2, b=-1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q10",
    "questionNumber": 10,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} 5a & -b \\\\ 3 & 2 \\end{bmatrix}$ and $A \\text{adj} A = A A^T$, then $5a + b$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$-1$"
      },
      {
        "id": "B",
        "labelLatex": "$5$"
      },
      {
        "id": "C",
        "labelLatex": "$4$"
      },
      {
        "id": "D",
        "labelLatex": "$13$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • EX-IV Q.19]** $A \\text{adj} A = |A|I = (10a+3b)I$. $AA^T = \\begin{bmatrix} 5a & -b \\\\ 3 & 2 \\end{bmatrix} \\begin{bmatrix} 5a & 3 \\\\ -b & 2 \\end{bmatrix} = \\begin{bmatrix} 25a^2+b^2 & 15a-2b \\\\ 15a-2b & 13 \\end{bmatrix}$. Equating, $15a-2b=0$ and $10a+3b=13$. Solving gives $a=2/5, b=3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q11",
    "questionNumber": 11,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} 2 & -3 \\\\ -4 & 1 \\end{bmatrix}$, then $\\text{adj} (3A^2 + 12A)$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\begin{bmatrix} 51 & 84 \\\\ 63 & 72 \\end{bmatrix}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\begin{bmatrix} 72 & -63 \\\\ -84 & 51 \\end{bmatrix}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\begin{bmatrix} 72 & -84 \\\\ -63 & 51 \\end{bmatrix}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\begin{bmatrix} 51 & 63 \\\\ 84 & 72 \\end{bmatrix}$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • EX-IV Q.20]** $A^2 = \\begin{bmatrix} 16 & -9 \\\\ -12 & 13 \\end{bmatrix}$. $3A^2+12A = \\begin{bmatrix} 48 & -27 \\\\ -36 & 39 \\end{bmatrix} + \\begin{bmatrix} 24 & -36 \\\\ -48 & 12 \\end{bmatrix} = \\begin{bmatrix} 72 & -63 \\\\ -84 & 51 \\end{bmatrix}$. Adjoint is $\\begin{bmatrix} 51 & 63 \\\\ 84 & 72 \\end{bmatrix}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q12",
    "questionNumber": 12,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $A$ be a matrix such that $A \\cdot \\begin{bmatrix} 1 & 2 \\\\ 0 & 3 \\end{bmatrix}$ is a scalar matrix and $|3A| = 108$. Then $A^2$ equals :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\begin{bmatrix} 4 & -32 \\\\ 0 & 36 \\end{bmatrix}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\begin{bmatrix} 36 & 0 \\\\ -32 & 4 \\end{bmatrix}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\begin{bmatrix} 4 & 0 \\\\ -32 & 36 \\end{bmatrix}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\begin{bmatrix} 36 & -32 \\\\ 0 & 4 \\end{bmatrix}$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • EX-IV Q.21]** Let $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$. $A \\begin{bmatrix} 1 & 2 \\\\ 0 & 3 \\end{bmatrix} = \\begin{bmatrix} a & 2a+3b \\\\ c & 2c+3d \\end{bmatrix} = \\begin{bmatrix} k & 0 \\\\ 0 & k \\end{bmatrix}$. Solving gives $A = \\begin{bmatrix} 6 & -4 \\\\ 0 & 2 \\end{bmatrix}$. $A^2 = \\begin{bmatrix} 36 & -32 \\\\ 0 & 4 \\end{bmatrix}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q13",
    "questionNumber": 13,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Suppose $A$ is any $3 \\times 3$ non-singular matrix and $(A - 3I) (A - 5I) = O$, where $I = I_3$ and $O=O_3$. If $\\alpha A + \\beta A^{-1} = 4I$, then $\\alpha + \\beta$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$8$"
      },
      {
        "id": "B",
        "labelLatex": "$7$"
      },
      {
        "id": "C",
        "labelLatex": "$13$"
      },
      {
        "id": "D",
        "labelLatex": "$12$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-IV Q.22]** $A^2 - 8A + 15I = O$. Multiply by $A^{-1}$: $A - 8I + 15A^{-1} = O \\implies A + 15A^{-1} = 8I$. Dividing by 2: $0.5A + 7.5A^{-1} = 4I$. Thus $\\alpha=0.5, \\beta=7.5, \\alpha+\\beta=8$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q14",
    "questionNumber": 14,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $A = \\begin{bmatrix} 1 & 0 & 0 \\\\ 1 & 1 & 0 \\\\ 1 & 1 & 1 \\end{bmatrix}$ and $B = A^{20}$. Then the sum of the elements of the first column of $B$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$211$"
      },
      {
        "id": "B",
        "labelLatex": "$210$"
      },
      {
        "id": "C",
        "labelLatex": "$231$"
      },
      {
        "id": "D",
        "labelLatex": "$251$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Matrices • EX-IV Q.23]** $A^n = \\begin{bmatrix} 1 & 0 & 0 \\\\ n & 1 & 0 \\\\ \\frac{n(n+1)}{2} & n & 1 \\end{bmatrix}$. For $n=20$, first column is $1, 20, \\frac{20 \\cdot 21}{2}=210$. Sum $= 1+20+210 = 231$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q15",
    "questionNumber": 15,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "**Paragraph:** Let $a, b$ and $c$ be three real numbers satisfying $\\begin{bmatrix} a & b & c \\end{bmatrix} \\begin{bmatrix} 1 & 9 & 7 \\\\ 8 & 2 & 7 \\\\ 7 & 3 & 7 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 & 0 \\end{bmatrix}$ .......(E) [JEE-2011] If the point $P(a, b, c)$, with reference to (E), lies on the plane $2x + y + z = 1$, then the value of $7a + b + c$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "0"
      },
      {
        "id": "B",
        "labelLatex": "12"
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
    "explanationLatex": "**[Matrices • EX-V Q.1]** By solving the matrix equation (E), we find the relationship between $a, b,$ and $c$. Substituting these into the plane equation $2x + y + z = 1$ for point $P(a, b, c)$ allows us to find the specific values and calculate $7a + b + c$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q16",
    "questionNumber": 16,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "**Paragraph:** Let $a, b$ and $c$ be three real numbers satisfying $\\begin{bmatrix} a & b & c \\end{bmatrix} \\begin{bmatrix} 1 & 9 & 7 \\\\ 8 & 2 & 7 \\\\ 7 & 3 & 7 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 & 0 \\end{bmatrix}$ .......(E) [JEE-2011] Let $\\omega$ be a solution of $x^3 - 1 = 0$ with $Im(\\omega) > 0$. If $a = 2$ with $b$ and $c$ satisfying (E), then the value of $\\frac{3}{\\omega^a} + \\frac{1}{\\omega^b} + \\frac{3}{\\omega^c}$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "-2"
      },
      {
        "id": "B",
        "labelLatex": "2"
      },
      {
        "id": "C",
        "labelLatex": "3"
      },
      {
        "id": "D",
        "labelLatex": "-3"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-V Q.2]** Given $a=2$, we use the matrix equation (E) to find $b$ and $c$. Then, using the properties of the complex cube root of unity $\\omega$ (where $\\omega^3 = 1$ and $1 + \\omega + \\omega^2 = 0$), we evaluate the given expression.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q17",
    "questionNumber": 17,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "**Paragraph:** Let $a, b$ and $c$ be three real numbers satisfying $\\begin{bmatrix} a & b & c \\end{bmatrix} \\begin{bmatrix} 1 & 9 & 7 \\\\ 8 & 2 & 7 \\\\ 7 & 3 & 7 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 & 0 \\end{bmatrix}$ .......(E) [JEE-2011] Let $b = 6$, with $a$ and $c$ satisfying (E). If $\\alpha$ and $\\beta$ are the roots of the quadratic equation $ax^2 + bx + c = 0$, then $\\sum_{n=0}^{\\infty} \\left( \\frac{1}{\\alpha} + \\frac{1}{\\beta} \\right)^n$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "6"
      },
      {
        "id": "B",
        "labelLatex": "7"
      },
      {
        "id": "C",
        "labelLatex": "6/7"
      },
      {
        "id": "D",
        "labelLatex": "\\infty"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • EX-V Q.3]** With $b=6$, we solve (E) for $a$ and $c$. The sum of the roots $\\alpha + \\beta = -b/a$ and the product $\\alpha\\beta = c/a$ are used to find $1/\\alpha + 1/\\beta = (\\alpha+\\beta)/(\\alpha\\beta)$. The infinite sum is then calculated as a geometric series $\\sum r^n = 1/(1-r)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q18",
    "questionNumber": 18,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $M$ and $N$ be two $3 \\times 3$ non-singular skew symmetric matrices such that $MN = NM$. If $P^T$ denotes the transpose of $P$, then $M^2N^2 (M^TN)^{-1} (MN^{-1})^T$ is equal to [JEE-2011]",
    "options": [
      {
        "id": "A",
        "labelLatex": "M^2"
      },
      {
        "id": "B",
        "labelLatex": "-N^2"
      },
      {
        "id": "C",
        "labelLatex": "-M^2"
      },
      {
        "id": "D",
        "labelLatex": "MN"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • EX-V Q.4]** Using the properties of skew-symmetric matrices ($M^T = -M, N^T = -N$) and the fact that $MN=NM$, we simplify the expression $M^2N^2 (M^TN)^{-1} (MN^{-1})^T$ step by step using matrix inverse and transpose properties.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q19",
    "questionNumber": 19,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $\\omega \\neq 1$ be a cube root of unity and $S$ be the set of all non-singular matrices of the form $\\begin{bmatrix} 1 & a & b \\\\ \\omega & 1 & c \\\\ \\omega^2 & \\omega & 1 \\end{bmatrix}$, where each of $a, b,$ and $c$ is either $\\omega$ or $\\omega^2$. Then the number of distinct matrices in the set $S$ is [JEE-2011]",
    "options": [
      {
        "id": "A",
        "labelLatex": "2"
      },
      {
        "id": "B",
        "labelLatex": "6"
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
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-V Q.5]** A matrix is non-singular if its determinant is non-zero. We calculate the determinant of the given matrix in terms of $a, b, c$ and $\\omega$, then check which combinations of $a, b, c \\in \\{\\omega, \\omega^2\\}$ result in a non-zero determinant.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q20",
    "questionNumber": 20,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let $M$ be a $3 \\times 3$ matrix satisfying [JEE-2011] $M \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} -1 \\\\ 2 \\\\ 3 \\end{bmatrix}, M \\begin{bmatrix} 1 \\\\ -1 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 1 \\\\ -1 \\end{bmatrix}$, and $M \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\\\ 12 \\end{bmatrix}$. Then the sum of the diagonal entries of $M$ is :",
    "correctAnswer": "9",
    "explanationLatex": "**[Matrices • EX-V Q.6]** The given equations provide the images of three vectors under the transformation $M$. We can find the columns of $M$ by linear combinations of these vectors or by setting up a system of equations. The sum of diagonal entries is the trace of $M$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p3-q21",
    "questionNumber": 21,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $P = [a_{ij}]$ be a $3 \\times 3$ matrix and let $Q = [b_{ij}]$ where $b_{ij} = 2^{i+j} a_{ij}$ for $1 \\le i, j \\le 3$. If the determinant of $P$ is 2, then the determinant of the matrix $Q$ is [JEE-2012]",
    "options": [
      {
        "id": "A",
        "labelLatex": "2^{10}"
      },
      {
        "id": "B",
        "labelLatex": "2^{11}"
      },
      {
        "id": "C",
        "labelLatex": "2^{12}"
      },
      {
        "id": "D",
        "labelLatex": "2^{13}"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • EX-V Q.7]** The determinant of $Q$ can be expressed as $|Q| = |2^{i+j} a_{ij}|$. By factoring out $2^i$ from each row $i$ and $2^j$ from each column $j$, we get $|Q| = (2^1 \\cdot 2^2 \\cdot 2^3) \\cdot (2^1 \\cdot 2^2 \\cdot 2^3) \\cdot |P| = 2^6 \\cdot 2^6 \\cdot 2 = 2^{13}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q22",
    "questionNumber": 22,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $P$ is a $3 \\times 3$ matrix such that $P^T = 2P + I$, where $P^T$ is the transposes of $P$ and $I$ is the $3 \\times 3$ identity matrix, then there exists a column matrix $X = \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix} \\neq \\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\end{bmatrix}$ such that [JEE-2012]",
    "options": [
      {
        "id": "A",
        "labelLatex": "PX = \\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\end{bmatrix}"
      },
      {
        "id": "B",
        "labelLatex": "PX = X"
      },
      {
        "id": "C",
        "labelLatex": "PX = 2X"
      },
      {
        "id": "D",
        "labelLatex": "PX = -X"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • EX-V Q.8]** Taking the transpose of $P^T = 2P + I$ gives $P = 2P^T + I$. Substituting $P^T$ from the first equation into the second, we find $P = 2(2P + I) + I = 4P + 3I$, which implies $3P + 3I = 0$, or $P = -I$. Thus $PX = -IX = -X$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q23",
    "questionNumber": 23,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "If the adjoint of a $3 \\times 3$ matrix $P$ is $\\begin{bmatrix} 1 & 4 & 4 \\\\ 2 & 1 & 7 \\\\ 1 & 1 & 3 \\end{bmatrix}$, then the possible value(s) of the determinant of $P$ is (are) [JEE-2012]",
    "options": [
      {
        "id": "A",
        "labelLatex": "-2"
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
        "labelLatex": "2"
      }
    ],
    "correctAnswer": "A, D",
    "explanationLatex": "**[Matrices • EX-V Q.9]** Using the property $|\\text{adj } P| = |P|^{n-1}$ for an $n \\times n$ matrix, we have $|\\text{adj } P| = |P|^2$ for $n=3$. We calculate the determinant of the given adjoint matrix and set it equal to $|P|^2$ to find the possible values of $|P|$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q24",
    "questionNumber": 24,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "For $3 \\times 3$ matrices $M$ and $N$, which of the following statement(s) is (are) NOT correct? [JEE Advanced - 2013]",
    "options": [
      {
        "id": "A",
        "labelLatex": "$N^T M N$ is symmetric or skew symmetric, according as $M$ is symmetric or skew symmetric"
      },
      {
        "id": "B",
        "labelLatex": "$MN - NM$ is skew symmetric for all symmetric matrices $M$ and $N$"
      },
      {
        "id": "C",
        "labelLatex": "$MN$ is symmetric for all symmetric matrices $M$ and $N$"
      },
      {
        "id": "D",
        "labelLatex": "$(\\text{adj } M) (\\text{adj } N) = \\text{adj } (MN)$ for all invertible matrices $M$ and $N$"
      }
    ],
    "correctAnswer": "C, D",
    "explanationLatex": "**[Matrices • EX-V Q.10]** Statement (C) is false because $(MN)^T = N^T M^T = NM$, which equals $MN$ only if $M$ and $N$ commute. Statement (D) is false because the correct property is $\\text{adj}(MN) = \\text{adj}(N) \\text{adj}(M)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q25",
    "questionNumber": 25,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let $M$ be a $2 \\times 2$ symmetric matrix with integer entries. Then $M$ is invertible if [JEE Advanced 2014]",
    "options": [
      {
        "id": "A",
        "labelLatex": "the first column of $M$ is the transpose of the second row of $M$"
      },
      {
        "id": "B",
        "labelLatex": "the second row of $M$ is the transpose of the first column of $M$"
      },
      {
        "id": "C",
        "labelLatex": "$M$ is a diagonal matrix with non-zero entries in the main diagonal"
      },
      {
        "id": "D",
        "labelLatex": "the product of entries in the main diagonal of $M$ is not the square of an integer"
      }
    ],
    "correctAnswer": "C, D",
    "explanationLatex": "**[Matrices • EX-V Q.11]** For a $2 \\times 2$ symmetric matrix $M = \\begin{bmatrix} a & b \\\\ b & c \\end{bmatrix}$, invertibility requires $ac - b^2 \\neq 0$. Case (C) gives $ac \\neq 0$ and $b=0$, so $|M| \\neq 0$. Case (D) implies $ac$ is not a square, so $ac \\neq b^2$ (since $b$ is an integer), thus $|M| \\neq 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q26",
    "questionNumber": 26,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let $M$ and $N$ be two $3 \\times 3$ matrices such that $MN = NM$. Further, if $M \\neq N^2$ and $M^2 = N^4$, then [JEE Advanced 2014]",
    "options": [
      {
        "id": "A",
        "labelLatex": "determinant of $(M^2 + MN^2)$ is 0"
      },
      {
        "id": "B",
        "labelLatex": "there is a $3 \\times 3$ non-zero matrix $U$ such that $(M^2 + MN^2)U$ is the zero matrix"
      },
      {
        "id": "C",
        "labelLatex": "determinant of $(M^2 + MN^2) \\ge 1$"
      },
      {
        "id": "D",
        "labelLatex": "for a $3 \\times 3$ matrix $U$, if $(M^2 + MN^2)U$ equals the zero matrix then $U$ is the zero matrix"
      }
    ],
    "correctAnswer": "A, B",
    "explanationLatex": "**[Matrices • EX-V Q.12]** From $M^2 - (N^2)^2 = 0$ and $MN=NM$, we have $(M-N^2)(M+N^2) = 0$. Since $M \\neq N^2$, $M+N^2$ must be singular. Then $|M^2 + MN^2| = |M(M+N^2)| = |M||M+N^2| = 0$. This implies the existence of a non-zero null vector or matrix $U$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q27",
    "questionNumber": 27,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let $X$ and $Y$ be two arbitrary, $3 \\times 3$, non-zero, skew-symmetric matrices and $Z$ be an arbitrary $3 \\times 3$, non-zero, symmetric matrix. Then which of the following matrices is (are) skew symmetric? [JEE Advanced 2015]",
    "options": [
      {
        "id": "A",
        "labelLatex": "Y^3 Z^4 - Z^4 Y^3"
      },
      {
        "id": "B",
        "labelLatex": "X^{44} + Y^{44}"
      },
      {
        "id": "C",
        "labelLatex": "X^4 Z^3 - Z^3 X^4"
      },
      {
        "id": "D",
        "labelLatex": "X^{23} + Y^{23}"
      }
    ],
    "correctAnswer": "C, D",
    "explanationLatex": "**[Matrices • EX-V Q.13]** We test each matrix $A$ for skew-symmetry by checking if $A^T = -A$, using the properties $X^T = -X, Y^T = -Y, Z^T = Z$ and $(AB)^T = B^T A^T$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q28",
    "questionNumber": 28,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let $P = \\begin{bmatrix} 3 & -1 & -2 \\\\ 2 & 0 & \\alpha \\\\ 3 & -5 & 0 \\end{bmatrix}$, where $\\alpha \\in \\mathbb{R}$. Suppose $Q = [q_{ij}]$ is a matrix such that $PQ = kI$, where $k \\in \\mathbb{R}, k \\neq 0$ and $I$ is the identity matrix of order 3. If $q_{23} = -\\frac{k}{8}$ and $\\det(Q) = \\frac{k^2}{2}$, then [JEE Advanced 2016]",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\alpha = 0, k = 8"
      },
      {
        "id": "B",
        "labelLatex": "4\\alpha - k + 8 = 0"
      },
      {
        "id": "C",
        "labelLatex": "\\det(P \\text{ adj}(Q)) = 2^9"
      },
      {
        "id": "D",
        "labelLatex": "\\det(Q \\text{ adj}(P)) = 2^{13}"
      }
    ],
    "correctAnswer": "B, C",
    "explanationLatex": "**[Matrices • EX-V Q.14]** From $PQ = kI$, we have $Q = kP^{-1}$. We use the formula for $P^{-1}$ to find $q_{23}$ in terms of $\\alpha$ and $k$. Using the given values for $q_{23}$ and $|Q|$, we solve for $\\alpha$ and $k$, then verify the options.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q29",
    "questionNumber": 29,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $P = \\begin{bmatrix} 1 & 0 & 0 \\\\ 4 & 1 & 0 \\\\ 16 & 4 & 1 \\end{bmatrix}$ and $I$ be the identity matrix of order 3. If $Q = [q_{ij}]$ is a matrix such that $P^{50} - Q = I$, then $\\frac{q_{31} + q_{32}}{q_{21}}$ equals [JEE Advanced 2016]",
    "options": [
      {
        "id": "A",
        "labelLatex": "52"
      },
      {
        "id": "B",
        "labelLatex": "103"
      },
      {
        "id": "C",
        "labelLatex": "201"
      },
      {
        "id": "D",
        "labelLatex": "205"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • EX-V Q.15]** We decompose $P$ as $I + A$ where $A$ is a nilpotent matrix ($A^3 = 0$). Then $P^{50} = (I+A)^{50} = I + 50A + \\frac{50 \\cdot 49}{2} A^2$. We find $Q = P^{50} - I$ and extract the required entries to calculate the ratio.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q30",
    "questionNumber": 30,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "For a real number $\\alpha$, if the system $\\begin{bmatrix} 1 & \\alpha & \\alpha^2 \\\\ \\alpha & 1 & \\alpha \\\\ \\alpha^2 & \\alpha & 1 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ -1 \\\\ 1 \\end{bmatrix}$ of linear equations, has infinitely many solutions, then $1 + \\alpha + \\alpha^2 = $ [JEE Advanced 2017]",
    "correctAnswer": "1",
    "explanationLatex": "**[Matrices • EX-V Q.16]** For infinitely many solutions, the determinant of the coefficient matrix must be zero, which gives $\\alpha = \\pm 1$. Testing $\\alpha = 1$ leads to an inconsistent system, while $\\alpha = -1$ gives infinitely many solutions. Thus $\\alpha = -1$ and $1 + \\alpha + \\alpha^2 = 1 - 1 + 1 = 1$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p3-q31",
    "questionNumber": 31,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Which of the following is (are) NOT the square of a 3 \\times 3 matrix with real entries ? [JEE-Advanced-2017]",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & -1 \\end{bmatrix}"
      },
      {
        "id": "B",
        "labelLatex": "\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & -1 \\end{bmatrix}"
      },
      {
        "id": "C",
        "labelLatex": "\\begin{bmatrix} -1 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & -1 \\end{bmatrix}"
      },
      {
        "id": "D",
        "labelLatex": "\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}"
      }
    ],
    "correctAnswer": "A, C",
    "explanationLatex": "**[Matrices • EX-V Q.17]** A matrix A is a square of a real matrix if and only if its Jordan form satisfies certain conditions. Specifically, for a diagonal matrix with real entries, the number of negative eigenvalues must be even for each distinct negative eigenvalue.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q32",
    "questionNumber": 32,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let S be the set of all column matrices \\begin{bmatrix} b_1 \\\\ b_2 \\\\ b_3 \\end{bmatrix} such that b_1, b_2, b_3 \\in \\mathbb{R} and the system of equations (in real variables) \\\\ -x + 2y + 5z = b_1 \\\\ 2x - 4y + 3z = b_2 \\\\ x - 2y + 2z = b_3 \\\\ has at least one solution. Then, which of the following system(s) (in real variables) has (have) at least one solution for each \\begin{bmatrix} b_1 \\\\ b_2 \\\\ b_3 \\end{bmatrix} \\in S? [JEE Advanced 2018]",
    "options": [
      {
        "id": "A",
        "labelLatex": "x + 2y + 3z = b_1, 4y + 5z = b_2 and x + 2y + 6z = b_3"
      },
      {
        "id": "B",
        "labelLatex": "x + y + 3z = b_1, 5x + 2y + 6z = b_2 and -2x - y - 3z = b_3"
      },
      {
        "id": "C",
        "labelLatex": "-x + 2y - 5z = b_1, 2x - 4y + 10z = b_2 and x - 2y + 5z = b_3"
      },
      {
        "id": "D",
        "labelLatex": "x + 2y + 5z = b_1, 2x + 3z = b_2 and x + 4y - 5z = b_3"
      }
    ],
    "correctAnswer": "A, D",
    "explanationLatex": "**[Matrices • EX-V Q.18]** The system has a solution if the vector b lies in the column space of the coefficient matrix. We check the consistency of the augmented matrix for each option.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q33",
    "questionNumber": 33,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let P be a matrix of order 3 \\times 3 such that all the entries in P are from the set \\{-1, 0, 1\\}. Then, the maximum possible value of the determinant of P is ________. [JEE Advanced 2018]",
    "correctAnswer": "4",
    "explanationLatex": "**[Matrices • EX-V Q.19]** The maximum determinant of a 3x3 matrix with entries in {-1, 0, 1} is 4 (Hadamard's maximum determinant problem).",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p3-q34",
    "questionNumber": 34,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let M = \\begin{bmatrix} \\sin^4 \\theta & -1 - \\sin^2 \\theta \\\\ 1 + \\cos^2 \\theta & \\cos^4 \\theta \\end{bmatrix} = \\alpha I + \\beta M^{-1} where \\alpha = \\alpha(\\theta) and \\beta = \\beta(\\theta) are real numbers, and I is the 2 \\times 2 identity matrix. If \\alpha^* is the minimum of the set \\{\\alpha(\\theta) : \\theta \\in [0, 2\\pi)\\} and \\beta^* is the minimum of the set \\{\\beta(\\theta) : \\theta \\in [0, 2\\pi)\\}, then the value of \\alpha^* + \\beta^* is : [JEE Advanced 2019]",
    "options": [
      {
        "id": "A",
        "labelLatex": "-\\frac{29}{16}"
      },
      {
        "id": "B",
        "labelLatex": "-\\frac{37}{16}"
      },
      {
        "id": "C",
        "labelLatex": "-\\frac{17}{16}"
      },
      {
        "id": "D",
        "labelLatex": "-\\frac{31}{16}"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-V Q.20]** Using the Cayley-Hamilton theorem, M^2 - tr(M)M + det(M)I = 0. Rearranging gives M = tr(M)I - det(M)M^{-1}. Thus \\alpha = tr(M) and \\beta = -det(M).",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q35",
    "questionNumber": 35,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let M = \\begin{bmatrix} 0 & 1 & a \\\\ 1 & 2 & 3 \\\\ 3 & b & 1 \\end{bmatrix} and adj M = \\begin{bmatrix} -1 & 1 & -1 \\\\ 8 & -6 & 2 \\\\ -5 & 3 & -1 \\end{bmatrix} where a and b are real numbers. Which of the following options is/are correct? [JEE Advanced 2019]",
    "options": [
      {
        "id": "A",
        "labelLatex": "(adj M)^{-1} + adj M^{-1} = -M"
      },
      {
        "id": "B",
        "labelLatex": "If M \\begin{bmatrix} \\alpha \\\\ \\beta \\\\ \\gamma \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}, then \\alpha - \\beta + \\gamma = 3"
      },
      {
        "id": "C",
        "labelLatex": "det(adj M^2) = 81"
      },
      {
        "id": "D",
        "labelLatex": "a + b = 3"
      }
    ],
    "correctAnswer": "A, B, D",
    "explanationLatex": "**[Matrices • EX-V Q.21]** Using properties of adjoint matrices and matrix inversion, we solve for a and b.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q36",
    "questionNumber": 36,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let x \\in \\mathbb{R} and let P = \\begin{bmatrix} 1 & 1 & 1 \\\\ 0 & 2 & 2 \\\\ 0 & 0 & 3 \\end{bmatrix}, Q = \\begin{bmatrix} 2 & x & x \\\\ 0 & 4 & 0 \\\\ x & x & 6 \\end{bmatrix} and R = PQP^{-1}. Then which of the following options is/are correct? [JEE Advanced 2019]",
    "options": [
      {
        "id": "A",
        "labelLatex": "There exists a real number x such that PQ = QP"
      },
      {
        "id": "B",
        "labelLatex": "det R = det \\begin{bmatrix} 2 & x & x \\\\ 0 & 4 & 0 \\\\ x & x & 5 \\end{bmatrix} + 8, for all x \\in \\mathbb{R}"
      },
      {
        "id": "C",
        "labelLatex": "For x = 0, if R \\begin{bmatrix} 1 \\\\ a \\\\ b \\end{bmatrix} = 6 \\begin{bmatrix} 1 \\\\ a \\\\ b \\end{bmatrix}, then a + b = 5"
      },
      {
        "id": "D",
        "labelLatex": "For x = 1, there exists a unit vector \\alpha \\hat{i} + \\beta \\hat{j} + \\gamma \\hat{k} for which R \\begin{bmatrix} \\alpha \\\\ \\beta \\\\ \\gamma \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\end{bmatrix}"
      }
    ],
    "correctAnswer": "B, C",
    "explanationLatex": "**[Matrices • EX-V Q.22]** R is similar to Q, so det(R) = det(Q). We evaluate the determinant and check the conditions.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q37",
    "questionNumber": 37,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let P_1 = I = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}, P_2 = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix}, P_3 = \\begin{bmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}, P_4 = \\begin{bmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ 1 & 0 & 0 \\end{bmatrix}, P_5 = \\begin{bmatrix} 0 & 0 & 1 \\\\ 1 & 0 & 0 \\\\ 0 & 1 & 0 \\end{bmatrix}, P_6 = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix} and X = \\sum_{k=1}^{6} P_k \\begin{bmatrix} 2 & 1 & 3 \\\\ 1 & 0 & 2 \\\\ 3 & 2 & 1 \\end{bmatrix} P_k^T where P_k^T denotes the transpose of the matrix P_k. Then which of the following options is/are correct? [JEE Advanced 2019]",
    "options": [
      {
        "id": "A",
        "labelLatex": "X - 30I is an invertible matrix"
      },
      {
        "id": "B",
        "labelLatex": "X is a symmetric matrix"
      },
      {
        "id": "C",
        "labelLatex": "If X \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix} = \\alpha \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}, then \\alpha = 30"
      },
      {
        "id": "D",
        "labelLatex": "The sum of diagonal entries of X is 18"
      }
    ],
    "correctAnswer": "B, C, D",
    "explanationLatex": "**[Matrices • EX-V Q.23]** X is a sum of matrices of the form P_k A P_k^T. Since P_k are permutation matrices, we can compute the sum.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q38",
    "questionNumber": 38,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let M be a 3 \\times 3 invertible matrix with real entries and let I denote the 3 \\times 3 identity matrix. If M^{-1} = adj(adj M), then which of the following statements is/are ALWAYS TRUE? [JEE Advanced 2020]",
    "options": [
      {
        "id": "A",
        "labelLatex": "M = I"
      },
      {
        "id": "B",
        "labelLatex": "det M = 1"
      },
      {
        "id": "C",
        "labelLatex": "M^2 = I"
      },
      {
        "id": "D",
        "labelLatex": "(adj M)^2 = I"
      }
    ],
    "correctAnswer": "B, C, D",
    "explanationLatex": "**[Matrices • EX-V Q.24]** Using the property adj(adj M) = (det M)^{n-2} M, for n=3, adj(adj M) = (det M)M. Given M^{-1} = (det M)M, we have M^2 = (det M)^{-1} I.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q39",
    "questionNumber": 39,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "The trace of a square matrix is defined to be the sum of its diagonal entries. If A is a 2 \\times 2 matrix such that the trace of A is 3 and the trace of A^3 is -18, then the value of the determinant of A is ________. [JEE Advanced 2020]",
    "correctAnswer": "5",
    "explanationLatex": "**[Matrices • EX-V Q.25]** Let the eigenvalues be \\lambda_1, \\lambda_2. \\lambda_1 + \\lambda_2 = 3 and \\lambda_1^3 + \\lambda_2^3 = -18. Using (\\lambda_1 + \\lambda_2)^3 = \\lambda_1^3 + \\lambda_2^3 + 3\\lambda_1\\lambda_2(\\lambda_1 + \\lambda_2), we find \\lambda_1\\lambda_2.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p3-q40",
    "questionNumber": 40,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "For any 3 \\times 3 matrix M, let |M| denote the determinant of M. Let E = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 4 \\\\ 8 & 13 & 18 \\end{bmatrix}, P = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix} and F = \\begin{bmatrix} 1 & 3 & 2 \\\\ 8 & 18 & 13 \\\\ 2 & 4 & 3 \\end{bmatrix}. If Q is a nonsingular matrix of order 3 \\times 3, then which of the following statements is (are) TRUE? [JEE Advanced 2021]",
    "options": [
      {
        "id": "A",
        "labelLatex": "F = PEP and P^2 = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}"
      },
      {
        "id": "B",
        "labelLatex": "|EQ + PFQ^{-1}| = |EQ| + |PFQ^{-1}|"
      },
      {
        "id": "C",
        "labelLatex": "|(EF)^3| > |EF|^2"
      },
      {
        "id": "D",
        "labelLatex": "Sum of the diagonal entries of P^{-1} EP + F is equal to the sum of diagonal entries of E + P^{-1} FP"
      }
    ],
    "correctAnswer": "A, B, D",
    "explanationLatex": "**[Matrices • EX-V Q.26]** Verify the matrix relations and properties of determinants.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q41",
    "questionNumber": 41,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "For any 3 \\times 3 matrix M, let |M| denote the determinant of M. Let I be the 3 \\times 3 identity matrix. Let E and F be two 3 \\times 3 matrices such that (I - EF) is invertible. If G = (I - EF)^{-1}, then which of the following statements is (are) TRUE? [JEE Advanced 2021]",
    "options": [
      {
        "id": "A",
        "labelLatex": "|FE| = |I - FE||FGE|"
      },
      {
        "id": "B",
        "labelLatex": "(I - FE)(I + FGE) = I"
      },
      {
        "id": "C",
        "labelLatex": "EFG = GEF"
      },
      {
        "id": "D",
        "labelLatex": "(I - FE)(I - FGE) = I"
      }
    ],
    "correctAnswer": "A, B, C",
    "explanationLatex": "**[Matrices • EX-V Q.27]** Use the identity (I - EF)^{-1} = I + E(I - FE)^{-1}F and properties of determinants.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q42",
    "questionNumber": 42,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If M = \\begin{bmatrix} \\frac{5}{2} & \\frac{3}{2} \\\\ -\\frac{3}{2} & -\\frac{1}{2} \\end{bmatrix}, then which of the following matrices is equal to M^{2022}? [JEE Advanced 2022]",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\begin{pmatrix} 3034 & 3033 \\\\ -3033 & -3032 \\end{pmatrix}"
      },
      {
        "id": "B",
        "labelLatex": "\\begin{pmatrix} 3034 & -3033 \\\\ 3033 & -3032 \\end{pmatrix}"
      },
      {
        "id": "C",
        "labelLatex": "\\begin{pmatrix} 3033 & 3032 \\\\ -3032 & -3031 \\end{pmatrix}"
      },
      {
        "id": "D",
        "labelLatex": "\\begin{pmatrix} 3032 & 3031 \\\\ -3031 & -3030 \\end{pmatrix}"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-V Q.28]** Diagonalize M or find a pattern in M^n.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q43",
    "questionNumber": 43,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let \\beta be a real number. Consider the matrix A = \\begin{bmatrix} \\beta & 0 & 1 \\\\ 2 & 1 & -2 \\\\ 3 & 1 & -2 \\end{bmatrix}. If A^7 - (\\beta - 1)A^6 - \\beta A^5 is a singular matrix, then the value of 9\\beta is ________. [JEE Advanced 2022]",
    "correctAnswer": "3",
    "explanationLatex": "**[Matrices • EX-V Q.29]** The matrix A satisfies its characteristic equation. We use this to simplify the expression.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p3-q44",
    "questionNumber": 44,
    "sectionId": "mathematics",
    "type": "MULTIPLE_CORRECT",
    "promptLatex": "Let M = (a_{ij}), i, j \\in \\{1, 2, 3\\}, be then 3 \\times 3 matrix such that a_{ij} = 1 if j + 1 is divisible by i, otherwise a_{ij} = 0. Then which of the following statements is(are) true? [JEE Advanced 2023]",
    "options": [
      {
        "id": "A",
        "labelLatex": "M is invertible"
      },
      {
        "id": "B",
        "labelLatex": "There exists a nonzero column matrix \\begin{bmatrix} a_1 \\\\ a_2 \\\\ a_3 \\end{bmatrix} such that M \\begin{bmatrix} a_1 \\\\ a_2 \\\\ a_3 \\end{bmatrix} = \\begin{bmatrix} -a_1 \\\\ -a_2 \\\\ -a_3 \\end{bmatrix}"
      },
      {
        "id": "C",
        "labelLatex": "The set \\{X \\in \\mathbb{R}^3 : MX = 0\\} \\neq \\{0\\}, where 0 = \\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\end{bmatrix}"
      },
      {
        "id": "D",
        "labelLatex": "The matrix (M - 2I) is invertible, where I is the 3 \\times 3 identify matrix"
      }
    ],
    "correctAnswer": "B, C",
    "explanationLatex": "**[Matrices • EX-V Q.30]** Construct the matrix M and check its properties.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p3-q45",
    "questionNumber": 45,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let R = \\left\\{ \\begin{pmatrix} a & 3 & b \\\\ c & 2 & d \\\\ 0 & 5 & 0 \\end{pmatrix} : a, b, c, d \\in \\{0, 3, 5, 7, 11, 13, 17, 19\\} \\right\\}. Then the number of invertible matices in R is : [JEE Advanced 2023]",
    "correctAnswer": "3780",
    "explanationLatex": "**[Matrices • EX-V Q.31]** A matrix is invertible if its determinant is non-zero. Calculate the determinant and count the combinations.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p3-q46",
    "questionNumber": 46,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "**Paragraph:** Let \\alpha and \\beta be the distinct roots of the equation x^2 + x - 1 = 0. Consider the set T = \\{1, \\alpha, \\beta\\}. For a 3 \\times 3 matrix M = (a_{ij})_{3 \\times 3}, define R_i = a_{i1} + a_{i2} + a_{i3} and C_j = a_{1j} + a_{2j} + a_{3j} for i = 1, 2, 3 and j = 1, 2, 3. Match each entry if List-I to the correct entry in List-II. [JEE Advanced 2024]\n\nList-I\n(P) The number of matrices M = (a_{ij})_{3 \\times 3} with all entries in T such that R_i = C_j = 0 for all i, j, is\n(Q) The number of symmetric matrices M = (a_{ij})_{3 \\times 3} with all entries in T such that C_j = 0 for all j, is\n(R) Let M = (a_{ij})_{3 \\times 3} be a skew symmetric matrix such that a_{ij} \\in T for i > j. Then the number of elements in the set \\left\\{ \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} : x, y, z \\in \\mathbb{R}, M \\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} = \\begin{pmatrix} a_{12} \\\\ 0 \\\\ -a_{23} \\end{pmatrix} \\right\\} is\n(S) Let M = (a_{ij})_{3 \\times 3} be a matrix with all entries in T such that R_i = 0 for all i. Then the absolute value of the determinant of M is\n\nList-II\n(1) 1\n(2) 12\n(3) infinite\n(4) 6\n(5) 0\n\nThe correct options is :\n(A) (P) \\to (4), (Q) \\to (2), (R) \\to (5), (S) \\to (1)\n(B) (P) \\to (2), (Q) \\to (4), (R) \\to (1), (S) \\to (5)\n(C) (P) \\to (2), (Q) \\to (4), (R) \\to (3), (S) \\to (5)\n(D) (P) \\to (1), (Q) \\to (5), (R) \\to (3), (S) \\to (4)",
    "options": [
      {
        "id": "A",
        "labelLatex": "(P) \\to (4), (Q) \\to (2), (R) \\to (5), (S) \\to (1)"
      },
      {
        "id": "B",
        "labelLatex": "(P) \\to (2), (Q) \\to (4), (R) \\to (1), (S) \\to (5)"
      },
      {
        "id": "C",
        "labelLatex": "(P) \\to (2), (Q) \\to (4), (R) \\to (3), (S) \\to (5)"
      },
      {
        "id": "D",
        "labelLatex": "(P) \\to (1), (Q) \\to (5), (R) \\to (3), (S) \\to (4)"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Matrices • EX-V Q.32]** Analyze each condition based on the properties of the set T and the definitions of R_i and C_j.",
    "positiveMarks": 4,
    "negativeMarks": 1
  }
];
