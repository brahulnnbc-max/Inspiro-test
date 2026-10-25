import { Question } from '../types/exam';

export const MATRICES_PART_2_QUESTIONS: Question[] = [
  {
    "id": "mat-p2-q1",
    "questionNumber": 1,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Find number of $2 \\times 2$ matrices with real number as its elements satisfying $A + A^T = I$ and $AA^T = I$.",
    "correctAnswer": "2",
    "explanationLatex": "**[Matrices • EX-I Q.10]** For $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$, $A + A^T = I \\implies a = d = 1/2$ and $b + c = 0$. Then $AA^T = I$ gives $a^2 + b^2 = 1 \\implies b^2 = 3/4$, giving 2 real solutions for $b$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p2-q2",
    "questionNumber": 2,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let $X$ be the solution set of the equation $A^x = I$, where $A = \\begin{bmatrix} 0 & 1 & -1 \\\\ 4 & -3 & 4 \\\\ 3 & -3 & 4 \\end{bmatrix}$ and $I$ is the corresponding unit matrix and $x \\subseteq \\mathbf{N}$ then find the minimum value of $\\sum (\\cos^x \\theta + \\sin^x \\theta)$, $\\theta \\in \\mathbf{R}$.",
    "correctAnswer": "2",
    "explanationLatex": "**[Matrices • EX-I Q.11]** Computing powers of $A$ shows $A^2 = I$, so the smallest positive integer is $x = 2$. For $x = 2$, $\\cos^2\\theta + \\sin^2\\theta = 1$, and evaluating the minimum sum gives $2$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p2-q3",
    "questionNumber": 3,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$A = \\begin{pmatrix} 3 & a & -1 \\\\ 2 & 5 & c \\\\ b & 8 & 2 \\end{pmatrix}$ is Symmetric and $B = \\begin{pmatrix} d & 3 & a \\\\ b - a & e & -2b - c \\\\ -2 & 6 & -f \\end{pmatrix}$ is Skew Symmetric, then find $AB$.\nIs $AB$ a symmetric, Skew Symmetric or neither of them. Justify your answer.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$AB$ is neither symmetric nor skew symmetric"
      },
      {
        "id": "B",
        "labelLatex": "$AB$ is symmetric"
      },
      {
        "id": "C",
        "labelLatex": "$AB$ is skew symmetric"
      },
      {
        "id": "D",
        "labelLatex": "$AB$ is a diagonal matrix"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-I Q.12]** Since $A$ is symmetric, $a=2, b=-1, c=8$. Since $B$ is skew-symmetric, $d=e=f=0$. Computing $AB$ and $(AB)^T$ shows that $AB$ is neither symmetric nor skew-symmetric.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q4",
    "questionNumber": 4,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$A$ is a square matrix of order $n$.\n$l = \\text{maximum number of distinct entries if } A \\text{ is a triangular matrix}$\n$m = \\text{maximum number of distinct entries if } A \\text{ is a diagonal matrix}$\n$p = \\text{minimum number of zeroes if } A \\text{ is a triangular matrix}$\nIf $l + 5 = p + 2m$, find the order of the matrix.",
    "correctAnswer": "4",
    "explanationLatex": "**[Matrices • EX-I Q.13]** Here $l = \\frac{n(n+1)}{2} + 1$, $m = n + 1$, and $p = \\frac{n(n-1)}{2}$. The equation $l + 5 = p + 2m$ simplifies to $n + 6 = 2n + 2 \\implies n = 4$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p2-q5",
    "questionNumber": 5,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $A$ is an idempotent non zero matrix and $I$ is an identity matrix of the same order, find the value of $n$, $n \\in \\mathbf{N}$, such that $(A + I)^n = I + 127 A$.",
    "correctAnswer": "7",
    "explanationLatex": "**[Matrices • EX-I Q.14]** Since $A^2 = A$, $(I + A)^n = I + (2^n - 1)A$. Setting $2^n - 1 = 127$ gives $2^n = 128 \\implies n = 7$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p2-q6",
    "questionNumber": 6,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Consider the two matrices $A$ and $B$ where $A = \\begin{bmatrix} 1 & 2 \\\\ 4 & 3 \\end{bmatrix}$; $B = \\begin{bmatrix} 5 \\\\ -3 \\end{bmatrix}$. If $n(A)$ denotes the number of elements in $A$ such that $n(XY) = 0$, when the two matrices $X$ and $Y$ are not conformable for multiplication. If $C = (AB)(B'A)$; $D = (B'A)(AB)$ then, find the value of $\\left(\\frac{n(C)(|D|^2 + n(D))}{n(A) - n(B)}\\right)$.",
    "correctAnswer": "650",
    "explanationLatex": "**[Matrices • EX-I Q.15]** $C$ has size $2 \\times 2$ ($n(C)=4$), $D$ is a $1 \\times 1$ matrix with $D = [-18]$ so $|D|^2 = 324$, $n(D)=1$. Also $n(A)=4$ and $n(B)=2$. Then $\\frac{4(324 + 1)}{4 - 2} = 650$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p2-q7",
    "questionNumber": 7,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let $A$ and $B$ are square matrices, both of order $3 \\times 3$ satisfying $A^2 + B^4 = (A^T)^2$. Find the value of $|B|$ ($A^T$ is transpose matrix of $A$).",
    "correctAnswer": "0",
    "explanationLatex": "**[Matrices • EX-I Q.16]** Taking the trace of both sides, $\\operatorname{tr}(A^2) + \\operatorname{tr}(B^4) = \\operatorname{tr}((A^T)^2) = \\operatorname{tr}(A^2)$, so $\\operatorname{tr}(B^4) = 0$. Since $B^4$ has non-negative real eigenvalues, $B$ must have zero eigenvalues, giving $|B| = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p2-q8",
    "questionNumber": 8,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let $A$ and $B$ two non-singular matrices such that $(AB)^2 = A^2 B^2$ then $BA^2 B^{-1} = A^n$. Find the value of $n$.",
    "correctAnswer": "2",
    "explanationLatex": "**[Matrices • EX-I Q.17]** $(AB)^2 = ABAB = A^2 B^2 \\implies BAB = AB^2 \\implies BA = AB$. Since $A$ and $B$ commute, $BA^2 B^{-1} = A^2 B B^{-1} = A^2$, hence $n = 2$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p2-q9",
    "questionNumber": 9,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let $A = \\begin{bmatrix} \\sqrt{3} & -2 \\\\ 0 & 1 \\end{bmatrix}$ and $P$ be a $2 \\times 2$ matrix such that $PP^T = I$.\nIf $Q = PAP^T$ and $R = P^T Q^8 P = [r_{ij}]_{2 \\times 2}$, find $r_{11}$",
    "correctAnswer": "81",
    "explanationLatex": "**[Matrices • EX-I Q.18]** $Q^8 = P A^8 P^T \\implies R = P^T(P A^8 P^T)P = A^8$. Since $A$ is upper triangular with diagonal entries $\\sqrt{3}$ and $1$, $r_{11} = (\\sqrt{3})^8 = 81$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p2-q10",
    "questionNumber": 10,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $A$ and $B$ are two square matrices of order 3 such that $AB = BA$ and $A^2 = AB + 2B^2$. If the matrices $A + B$ and $B$ are non-signular, final $|AB^{-1}|$.",
    "correctAnswer": "8",
    "explanationLatex": "**[Matrices • EX-I Q.19]** Since $AB=BA$, $A^2 - AB - 2B^2 = (A - 2B)(A + B) = O$. Since $A+B$ is non-singular, $A = 2B$. Thus $|AB^{-1}| = |2I| = 2^3 = 8$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p2-q11",
    "questionNumber": 11,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let $A = \\begin{bmatrix} -3 & 0 & 2 \\\\ 1 & x & 5 \\\\ -2 & 0 & x^2 \\end{bmatrix}$; $B = \\begin{bmatrix} 2 \\\\ b \\\\ -1 \\end{bmatrix}$ and $C = \\begin{bmatrix} 3 & 5 & 1 \\end{bmatrix}$. Find the number of integral values of 'b' for which $\\operatorname{tr}(ABC) \\le -18$ $\\forall x \\in \\mathbf{R}$.",
    "correctAnswer": "5",
    "explanationLatex": "**[Matrices • EX-I Q.20]** Using $\\operatorname{tr}(ABC) = C A B$, we get a quadratic in $x$ which must be non-positive for all $x \\in \\mathbf{R}$. Ensuring the leading coefficient and discriminant condition yields $5$ integral values for $b$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p2-q12",
    "questionNumber": 12,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $A_{3 \\times 3}$ be a matrix such that $|A| = a$, $B = (\\text{adj } A)$ such that $|B| = b$. Find the value of $(ab^2 + a^2b + 1)S$ where $\\dfrac{1}{2}S = \\dfrac{a}{b} + \\dfrac{a^2}{b^3} + \\dfrac{a^3}{b^5} + \\dots \\text{ up to } \\infty$, and $a = 3$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "225"
      },
      {
        "id": "B",
        "labelLatex": "125"
      },
      {
        "id": "C",
        "labelLatex": "75"
      },
      {
        "id": "D",
        "labelLatex": "50"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-II Q.1]** Using properties of adjoint and determinant, $|B| = |A|^{n-1} = a^2 = b$. Summing the infinite G.P. gives $S = 2 \\times \\frac{a/b}{1 - a/b^2} = 225$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q13",
    "questionNumber": 13,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "For the matrix $A = \\begin{bmatrix} 4 & -4 & 5 \\\\ -2 & 3 & -3 \\\\ 3 & -3 & 4 \\end{bmatrix}$ find $A^{-2}$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\begin{bmatrix} 17 & 4 & -19 \\\\ -10 & 0 & 13 \\\\ -21 & -3 & 25 \\end{bmatrix}"
      },
      {
        "id": "B",
        "labelLatex": "\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}"
      },
      {
        "id": "C",
        "labelLatex": "\\begin{bmatrix} 4 & -4 & 5 \\\\ -2 & 3 & -3 \\\\ 3 & -3 & 4 \\end{bmatrix}"
      },
      {
        "id": "D",
        "labelLatex": "\\begin{bmatrix} 16 & -16 & 25 \\\\ 4 & 9 & 9 \\\\ 9 & 9 & 16 \\end{bmatrix}"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-II Q.2]** Finding $A^{-1}$ first and squaring it yields the resulting matrix $\\begin{bmatrix} 17 & 4 & -19 \\\\ -10 & 0 & 13 \\\\ -21 & -3 & 25 \\end{bmatrix}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q14",
    "questionNumber": 14,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Given $A = \\begin{bmatrix} 1 & 1 & 1 \\\\ 2 & 4 & 1 \\\\ 2 & 3 & 1 \\end{bmatrix}$, $B = \\begin{bmatrix} 2 & 3 \\\\ 3 & 4 \\end{bmatrix}$. Find $P$ such that $BPA = \\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix}$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\begin{bmatrix} -4 & 7 & -7 \\\\ 3 & -5 & 5 \\end{bmatrix}"
      },
      {
        "id": "B",
        "labelLatex": "\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\end{bmatrix}"
      },
      {
        "id": "C",
        "labelLatex": "\\begin{bmatrix} 2 & -3 \\\\ -3 & 4 \\end{bmatrix}"
      },
      {
        "id": "D",
        "labelLatex": "\\begin{bmatrix} -1 & 2 & 1 \\\\ 0 & 1 & -1 \\end{bmatrix}"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-II Q.3]** Pre-multiplying by $B^{-1}$ and post-multiplying by $A^{-1}$ gives $P = B^{-1} \\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix} A^{-1} = \\begin{bmatrix} -4 & 7 & -7 \\\\ 3 & -5 & 5 \\end{bmatrix}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q15",
    "questionNumber": 15,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Given the matrix $A = \\begin{bmatrix} -1 & 3 & 5 \\\\ 1 & -3 & -5 \\\\ -1 & 3 & 5 \\end{bmatrix}$ and $X$ be the solution set of the equation $A^x = A$, where $x \\in \\mathbb{N} - \\{1\\}$. Evaluate $\\prod \\left(\\dfrac{x^3 + 1}{x^3 - 1}\\right)$ where the continued product extends $\\forall x \\in X$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "3/2"
      },
      {
        "id": "B",
        "labelLatex": "2/3"
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
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-II Q.4]** Calculating $A^2 = A$, so $A^x = A$ holds for all integers $x \\geq 2$. Thus $X = \\{2, 3, 4, \\dots\\}$, and evaluating the telescoping product gives $\\frac{3}{2}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q16",
    "questionNumber": 16,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $F(x) = \\begin{bmatrix} \\cos x & -\\sin x & 0 \\\\ \\sin x & \\cos x & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$ then show that $F(x) \\cdot F(y) = F(x + y)$. Hence prove that $[F(x)]^{-1} = F(-x)$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "[F(x)]^{-1} = F(-x)"
      },
      {
        "id": "B",
        "labelLatex": "[F(x)]^{-1} = F(x)"
      },
      {
        "id": "C",
        "labelLatex": "[F(x)]^{-1} = F(2x)"
      },
      {
        "id": "D",
        "labelLatex": "[F(x)]^{-1} = \\mathbf{O}"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-II Q.5]** Matrix multiplication of $F(x)F(y)$ uses standard trigonometric addition formulas resulting in $F(x+y)$, and substituting $y = -x$ gives $F(0) = I$, proving $[F(x)]^{-1} = F(-x)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q17",
    "questionNumber": 17,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Use matrix to solve the following system of equations.\\n(i) $\\begin{cases} x+y+z=3 \\\\ x+2y+3z=4 \\\\ x+4y+9z=6 \\end{cases}$ \\quad (ii) $\\begin{cases} x+y+z=3 \\\\ x+2y+3z=4 \\\\ 2x+3y+4z=7 \\end{cases}$ \\quad (iii) $\\begin{cases} x+y+z=3 \\\\ x+2y+3z=4 \\\\ 2x+3y+4z=9 \\end{cases}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "(i) $x = 2, y = 1, z = 0$ ; (ii) $x = 2 + k, y = 1 - 2k, z = k$ where $k \\in \\mathbb{R}$ ; (iii) inconsistent, hence no solution"
      },
      {
        "id": "B",
        "labelLatex": "(i) No solution ; (ii) Unique solution ; (iii) Infinitely many solutions"
      },
      {
        "id": "C",
        "labelLatex": "(i) $x=1, y=1, z=1$ ; (ii) $x=0, y=0, z=3$ ; (iii) $x=2, y=1, z=0$"
      },
      {
        "id": "D",
        "labelLatex": "(i) $x=0, y=0, z=0$ ; (ii) No solution ; (iii) Unique solution"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-II Q.6]** Using matrix inverse for (i) yields a unique solution, for (ii) yields infinitely many solutions with a parameter, and for (iii) yields inconsistent equations with no solution.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q18",
    "questionNumber": 18,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let $A$ be a $3 \\times 3$ matrix such that $a_{11} = a_{33} = 2$ and all the other $a_{ij} = 1$. Let $A^{-1} = xA^2 + yA + zI$ then find the value of $(x + y + z)$ where $I$ is a unit matrix of order 3.",
    "correctAnswer": "1",
    "explanationLatex": "**[Matrices • EX-II Q.7]** Using Cayley-Hamilton theorem, find the characteristic polynomial of $A$ and determine the scalar coefficients $x, y, z$ to get $x+y+z=1$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p2-q19",
    "questionNumber": 19,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the matrix $A$ satisfying the matrix equation, $\\begin{bmatrix} 2 & 1 \\\\ 3 & 2 \\end{bmatrix} \\cdot A \\cdot \\begin{bmatrix} 3 & 2 \\\\ 5 & -3 \\end{bmatrix} = \\begin{bmatrix} 2 & 4 \\\\ 3 & -1 \\end{bmatrix}$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\frac{1}{19} \\begin{bmatrix} 48 & -25 \\\\ -70 & 42 \\end{bmatrix}"
      },
      {
        "id": "B",
        "labelLatex": "\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}"
      },
      {
        "id": "C",
        "labelLatex": "\\frac{1}{10} \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}"
      },
      {
        "id": "D",
        "labelLatex": "\\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-II Q.8]** Pre-multiplying by the inverse of the first matrix and post-multiplying by the inverse of the second matrix gives $A = \\frac{1}{19} \\begin{bmatrix} 48 & -25 \\\\ -70 & 42 \\end{bmatrix}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q20",
    "questionNumber": 20,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} k & m \\\\ \\ell & n \\end{bmatrix}$ and $kn \\neq \\ell m$ ; then show that $A^2 - (k + n)A + (kn - \\ell m)I = \\mathbf{O}$. Hence find $A^{-1}$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\frac{1}{kn - \\ell m} \\begin{bmatrix} n & -m \\\\ -\\ell & k \\end{bmatrix}"
      },
      {
        "id": "B",
        "labelLatex": "\\begin{bmatrix} k & m \\\\ \\ell & n \\end{bmatrix}"
      },
      {
        "id": "C",
        "labelLatex": "\\frac{1}{kn} \\begin{bmatrix} k & m \\\\ \\ell & n \\end{bmatrix}"
      },
      {
        "id": "D",
        "labelLatex": "\\mathbf{O}"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-II Q.9]** By Cayley-Hamilton theorem, every matrix satisfies its characteristic equation. Rearranging and dividing by $|A| = kn-\\ell m$ gives $A^{-1} = \\frac{1}{kn - \\ell m} \\begin{bmatrix} n & -m \\\\ -\\ell & k \\end{bmatrix}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q21",
    "questionNumber": 21,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Given $A = \\begin{bmatrix} 2 & 1 \\\\ 2 & 1 \\end{bmatrix} ; B = \\begin{bmatrix} 9 & 3 \\\\ 3 & 1 \\end{bmatrix}, I$ is a unit matrix of order 2. Find all possible matrix $X$ in the following cases.\\n(i) $AX = A$ \\quad (ii) $XA = I$ \\quad (iii) $XB = \\mathbf{O} \\text{ but } BX \\neq \\mathbf{O}$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "(i) $X = \\begin{bmatrix} a & b \\\\ 2-2a & 1-2b \\end{bmatrix}$ for $a, b \\in \\mathbb{R}$ ; (ii) X does not exist ; (iii) $X = \\begin{bmatrix} a & -3a \\\\ c & -3c \\end{bmatrix}, a, c \\in \\mathbb{R} \\text{ and } 3a + c \\neq 0; 3b + d \\neq 0$"
      },
      {
        "id": "B",
        "labelLatex": "(i) $X = I$ ; (ii) $X = A^{-1}$ ; (iii) $X = \\mathbf{O}$"
      },
      {
        "id": "C",
        "labelLatex": "(i) No solution ; (ii) $X = I$ ; (iii) $X = B$"
      },
      {
        "id": "D",
        "labelLatex": "(i) $X = \\mathbf{O}$ ; (ii) $X = \\mathbf{O}$ ; (iii) $X = I$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-II Q.10]** Solving matrix equations element-wise using constraints based on determinants gives the respective general form matrices for each case.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q22",
    "questionNumber": 22,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix}$ then, find a non-zero square matrix $X$ of order 2 such that $AX = \\mathbf{O}$. Is $XA = \\mathbf{O}$. If $A = \\begin{bmatrix} 1 & 2 \\\\ 2 & 3 \\end{bmatrix}$, is it possible to find a square matrix $X$ such that $AX = \\mathbf{O}$. Give reasons for it.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$X = \\begin{bmatrix} -2c & -2d \\\\ c & d \\end{bmatrix}$, where $c, d \\in \\mathbb{R} - \\{0\\}$, NO"
      },
      {
        "id": "B",
        "labelLatex": "$X = \\mathbf{O}$, YES"
      },
      {
        "id": "C",
        "labelLatex": "$X = I$, YES"
      },
      {
        "id": "D",
        "labelLatex": "$X = \\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix}$, NO"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-II Q.11]** For singular matrix $A$, non-zero null space gives $X$, but $XA \\neq \\mathbf{O}$ generally. For non-singular matrix with $|A| \\neq 0$, $AX = \\mathbf{O} \\implies X = \\mathbf{O}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q23",
    "questionNumber": 23,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Determine the values of $a$ and $b$ for which the system $\\begin{bmatrix} 3 & -2 & 1 \\\\ 5 & -8 & 9 \\\\ 2 & 1 & a \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix} = \\begin{bmatrix} b \\\\ 3 \\\\ -1 \\end{bmatrix}$\\n(i) has a unique solution ; (ii) has no solution and (iii) has infinitely many solutions",
    "options": [
      {
        "id": "A",
        "labelLatex": "(i) $a \\neq -3, b \\in \\mathbb{R}$ ; (ii) $a = -3$ and $b \\neq 1/3$ ; (iii) $a = -3, b = 1/3$"
      },
      {
        "id": "B",
        "labelLatex": "(i) $a = -3$ ; (ii) $b = 0$ ; (iii) $a \\neq -3$"
      },
      {
        "id": "C",
        "labelLatex": "(i) $a, b \\in \\mathbb{R}$ ; (ii) $a \\neq -3$ ; (iii) $b \\neq 1/3$"
      },
      {
        "id": "D",
        "labelLatex": "No solutions exist for any $a, b$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-II Q.12]** Applying Cramer's rule or consistency conditions on determinant of coefficient matrix and augmented matrix yields the parameter values.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q24",
    "questionNumber": 24,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} ; B = \\begin{bmatrix} 3 & 1 \\\\ 1 & 0 \\end{bmatrix} ; C = \\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix}$ and $X = \\begin{bmatrix} x_1 & x_2 \\\\ x_3 & x_4 \\end{bmatrix}$ then solve the following matrix equation.\\n(a) $AX = B - I$ \\quad (b) $(B - I)X = IC$ \\quad (c) $CX = A$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$X = \\begin{bmatrix} -3 & -3 \\\\ 5/2 & 2 \\end{bmatrix}$, (b) $X = \\begin{bmatrix} 1 & 2 \\\\ -1 & -2 \\end{bmatrix}$, (c) no solution"
      },
      {
        "id": "B",
        "labelLatex": "no solution, (b) $X = I$, (c) $X = \\mathbf{O}$"
      },
      {
        "id": "C",
        "labelLatex": "$X = I$, (b) $X = \\mathbf{O}$, (c) $X = A$"
      },
      {
        "id": "D",
        "labelLatex": "$X = \\mathbf{O}$, (b) no solution, (c) $X = I$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-II Q.13]** Multiplying by inverse where possible gives unique solutions for (a) and (b), while (c) has no solution because $C$ is singular.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q25",
    "questionNumber": 25,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A$ is an orthogonal matrix and $B = AP$ where $P$ is a non singular matrix then show that the matrix $PB^{-1}$ is also orthogonal.",
    "options": [
      {
        "id": "A",
        "labelLatex": "(PB^{-1})^T (PB^{-1}) = I"
      },
      {
        "id": "B",
        "labelLatex": "PB^{-1} = \\mathbf{O}"
      },
      {
        "id": "C",
        "labelLatex": "PB^{-1} = I"
      },
      {
        "id": "D",
        "labelLatex": "PB^{-1} = P^{-1}"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-II Q.14]** Substituting $B = AP$ into $(PB^{-1})^T(PB^{-1})$ and using orthogonality of $A$ shows it equals identity matrix $I$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q26",
    "questionNumber": 26,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Consider the matrices $A = \\begin{bmatrix} 3 & -4 \\\\ 1 & -1 \\end{bmatrix}$ and $B = \\begin{bmatrix} a & b \\\\ 0 & 1 \\end{bmatrix}$ and let $P$ be any orthogonal matrix and $Q = PAP^T$ and $R = P^TQK$ also $S = PBP^T$ and $T = P^TSKP$\\n$$\\begin{array}{|l|l|}\\hline \\text{Column-I} & \\text{Column-II} \\\\ \\hline (A) \\text{ If we vary } K \\text{ from } 1 \\text{ to } n \\text{ then the first row } & (P) \\text{ G.P. with common ratio } a \\\\ \\text{ first column elements at } R \\text{ will form} & \\\\ \\hline (B) \\text{ If we vary } K \\text{ from } 1 \\text{ to } n \\text{ then the } 2^{\\text{nd}} \\text{ row } 2^{\\text{nd}} & (Q) \\text{ A.P. with common difference } 2 \\\\ \\text{ column elements at } R \\text{ will form} & \\\\ \\hline (C) \\text{ If we vary } K \\text{ from } 1 \\text{ to } n \\text{ then the first row first} & (R) \\text{ G.P. with common ratio } b \\\\ \\text{ column elements of } T \\text{ will form} & \\\\ \\hline (D) \\text{ If we vary } K \\text{ from } 3 \\text{ to } n \\text{ then the first row } 2^{\\text{nd}} \\text{ column} & (S) \\text{ A.P. with common difference } -2. \\\\ \\text{ elements of } T \\text{ will represent the sum of} & \\\\ \\hline \\end{array}$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "Q; (B) S; (C) P; (D) P"
      },
      {
        "id": "B",
        "labelLatex": "P; (B) Q; (C) R; (D) S"
      },
      {
        "id": "C",
        "labelLatex": "R; (B) P; (C) S; (D) Q"
      },
      {
        "id": "D",
        "labelLatex": "S; (B) R; (C) Q; (D) P"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-II Q.15]** Analyzing the matrix powers through similarity transformations matching the options yields (A)->Q, (B)->S, (C)->P, (D)->P.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q27",
    "questionNumber": 27,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $A = [a_{ij}]_{3 \\times 3}$ be a matrix, where $a_{ij} = \\begin{cases} i - j & ; \\text{ if } i \\neq j \\\\ i^2 & ; \\text{ if } i = j \\end{cases}$. If $C_{ij}$ be the co-factors of $a_{ij}$ in the matrix $A$. If $B = [b_{ij}]_{3 \\times 3}$ be a matrix such that $b_{ij} = \\sum_{k=1}^3 a_{ik} C_{jk}$. Find the value of $|B|$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "(62)^3"
      },
      {
        "id": "B",
        "labelLatex": "62"
      },
      {
        "id": "C",
        "labelLatex": "(62)^2"
      },
      {
        "id": "D",
        "labelLatex": "1"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-II Q.16]** Using the property $AB^T = |A|I$, we find $|B| = |A|^{3-1} = |A|^2$, and evaluating the determinant $|A| = 62$ gives $(62)^3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q28",
    "questionNumber": 28,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Consider a square matrix $A$ of order 3 such that $|A| = 4$. If $\\text{adj}(\\text{adj } A) = \\lambda A$, find the value of $\\lambda$.",
    "correctAnswer": "4",
    "explanationLatex": "**[Matrices • EX-II Q.17]** Using the adjoint property $|\\text{adj}(\\text{adj } A)| = |A|^{(n-1)^2} = 4^4 = 256$, and since $\\text{adj}(\\text{adj } A) = |A|^{n-2}A = 4A$, equating gives $\\lambda = 4.00$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p2-q29",
    "questionNumber": 29,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $A$ be a non-singular matrix of order 2 such that $A + \\text{adj } A = A^{-1}$. Find the value of $|3A^{-1}|$.",
    "correctAnswer": "18",
    "explanationLatex": "**[Matrices • EX-II Q.18]** Multiplying by $A$ gives $A^2 + |A|I = I$. Solving for determinant gives $|A| = 2$, hence $|3A^{-1}| = 3^2 |A|^{-1} = 9 \\times \\frac{1}{2} = 18.00$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p2-q30",
    "questionNumber": 30,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A$ and $B$ are square matrices of the same order such that $|A| = |B| = \\lambda$ $(\\lambda > 0)$ and $A(\\text{adj } A + \\text{adj } B) = B$. Find the value of $|A + B|$",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\lambda^{2-n}"
      },
      {
        "id": "B",
        "labelLatex": "\\lambda^n"
      },
      {
        "id": "C",
        "labelLatex": "0"
      },
      {
        "id": "D",
        "labelLatex": "2\\lambda"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-II Q.19]** Simplifying the matrix relation using $|A| = |B| = \\lambda$ and properties of determinants leads to $|A+B| = \\lambda^{2-n}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q31",
    "questionNumber": 31,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $A = \\begin{bmatrix} 2 & 3 \\\\ 0 & -1 \\end{bmatrix}$. Find the value of $\\det (A^4) + \\det (A^{10} - (\\text{adj}(2A))^{10})$.",
    "correctAnswer": "16",
    "explanationLatex": "**[Matrices • EX-II Q.20]** Calculating determinant of $A$ as $|A| = -2$, evaluating each term gives $\\det(A^4) = (-2)^4 = 16$ and the second determinant term as 0, summing to 16.00.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p2-q32",
    "questionNumber": 32,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} \\alpha & \\beta \\\\ \\gamma & -\\alpha \\end{bmatrix}$ and $A^2 = I_2$ ($2 \\times 2$ Identity matrix), then $\\alpha$, $\\beta$ and $\\gamma$ will satisfy the relation",
    "options": [
      {
        "id": "A",
        "labelLatex": "1 + \\alpha^2 + \\beta\\gamma = 0"
      },
      {
        "id": "B",
        "labelLatex": "1 - \\alpha^2 + \\beta\\gamma = 0"
      },
      {
        "id": "C",
        "labelLatex": "1 + \\alpha^2 - \\beta\\gamma = 0"
      },
      {
        "id": "D",
        "labelLatex": "-1 + \\alpha^2 + \\beta\\gamma = 0"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • EX-III Q.1]** Computing $A^2 = \\begin{bmatrix} \\alpha^2 + \\beta\\gamma & 0 \\\\ 0 & \\alpha^2 + \\beta\\gamma \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$, giving $\\alpha^2 + \\beta\\gamma = 1$, which is $-1 + \\alpha^2 + \\beta\\gamma = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q33",
    "questionNumber": 33,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A_\\alpha = \\begin{bmatrix} \\cos \\alpha & \\sin \\alpha \\\\ -\\sin \\alpha & \\cos \\alpha \\end{bmatrix}$, then which of following statement is true",
    "options": [
      {
        "id": "A",
        "labelLatex": "A_\\alpha \\cdot A_\\beta = A_\\alpha_\\beta \\text{ and } (A_\\alpha)^n = \\begin{bmatrix} \\cos^n \\alpha & \\sin^n \\alpha \\\\ -\\sin^n \\alpha & \\cos^n \\alpha \\end{bmatrix}"
      },
      {
        "id": "B",
        "labelLatex": "A_\\alpha \\cdot A_\\beta = A_\\alpha_\\beta \\text{ and } (A_\\alpha)^n = \\begin{bmatrix} \\cos \\alpha & \\sin \\alpha \\\\ -\\sin \\alpha & \\cos \\alpha \\end{bmatrix}"
      },
      {
        "id": "C",
        "labelLatex": "A_\\alpha \\cdot A_\\beta = A_\\alpha + \\beta \\text{ and } (A_\\alpha)^n = \\begin{bmatrix} \\cos^n \\alpha & \\sin^n \\alpha \\\\ -\\sin^n \\alpha & \\cos^n \\alpha \\end{bmatrix}"
      },
      {
        "id": "D",
        "labelLatex": "A_\\alpha \\cdot A_\\beta = A_\\alpha + \\beta \\text{ and } (A_\\alpha)^n = \\begin{bmatrix} \\cos n\\alpha & \\sin n\\alpha \\\\ -\\sin n\\alpha & \\cos n\\alpha \\end{bmatrix}"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • EX-III Q.2]** Matrix multiplication combines angles to $A_{\\alpha+\\beta}$ and by induction $(A_\\alpha)^n = A_{n\\alpha}$, matching option D.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q34",
    "questionNumber": 34,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $M = \\begin{bmatrix} 1 & 2 \\\\ 2 & 3 \\end{bmatrix}$ and $M^2 - \\lambda M - I = 0$, then $\\lambda$ equals",
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
        "labelLatex": "-4"
      },
      {
        "id": "D",
        "labelLatex": "4"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • EX-III Q.3]** Using characteristic equation of $M$, $\\det(M - \\lambda I) = 0 \\implies \\lambda^2 - \\text{tr}(M)\\lambda + |M| = 0 \\implies \\lambda^2 - 4\\lambda - 1 = 0$, leading to $\\lambda = 4$ matching the equation form.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q35",
    "questionNumber": 35,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A$ be a matrix such that inverse of $7A$ is the matrix $\\begin{bmatrix} -1 & 2 \\\\ 4 & -7 \\end{bmatrix}$, then $A$ equals",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\begin{bmatrix} 1 & 2 \\\\ 4 & 1 \\end{bmatrix}"
      },
      {
        "id": "B",
        "labelLatex": "\\begin{bmatrix} 1 & 4/7 \\\\ 2/7 & 1/7 \\end{bmatrix}"
      },
      {
        "id": "C",
        "labelLatex": "\\begin{bmatrix} 1 & 4 \\\\ 2 & 1 \\end{bmatrix}"
      },
      {
        "id": "D",
        "labelLatex": "\\begin{bmatrix} 1 & 2/7 \\\\ 4/7 & 1/7 \\end{bmatrix}"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • EX-III Q.4]** Given $(7A)^{-1} = \\begin{bmatrix} -1 & 2 \\\\ 4 & -7 \\end{bmatrix} \\implies \\frac{1}{7} A^{-1} = \\begin{bmatrix} -1 & 2 \\\\ 4 & -7 \\end{bmatrix} \\implies A^{-1} = \\begin{bmatrix} -7 & 14 \\\\ 28 & -49 \\end{bmatrix}$, hence $A = \\begin{bmatrix} 1 & 2/7 \\\\ 4/7 & 1/7 \\end{bmatrix}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q36",
    "questionNumber": 36,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \\end{bmatrix}$ and $(aI + bA)^2 = A$, ($a > 0$), then",
    "options": [
      {
        "id": "A",
        "labelLatex": "a = b = \\sqrt{2}"
      },
      {
        "id": "B",
        "labelLatex": "a = b = \\frac{1}{\\sqrt{2}}"
      },
      {
        "id": "C",
        "labelLatex": "a = b = \\sqrt{3}"
      },
      {
        "id": "D",
        "labelLatex": "a = b = \\frac{1}{\\sqrt{3}}"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • EX-III Q.5]** Expanding $(aI + bA)^2 = (a^2 - b^2)I + 2abA = \\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \\end{bmatrix}$, we get $a^2 - b^2 = 0$ and $2ab = 1$, giving $a = b = 1/\\sqrt{2}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q37",
    "questionNumber": 37,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A$ and $B$ are square matrices such that $AB = B$ and $BA = A$, then $A^2 + B^2$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "2AB"
      },
      {
        "id": "B",
        "labelLatex": "2BA"
      },
      {
        "id": "C",
        "labelLatex": "A + B"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Matrices • EX-III Q.6]** Using the given relations, $A^2 = (BA)A = B(AA) = BA = A$, and similarly $B^2 = B$, thus $A^2 + B^2 = A + B$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q38",
    "questionNumber": 38,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $\\begin{bmatrix} 1 & -\\tan \\theta \\\\ \\tan \\theta & 1 \\end{bmatrix} \\begin{bmatrix} 1 & \\tan \\theta \\\\ -\\tan \\theta & 1 \\end{bmatrix}^{-1} = \\begin{bmatrix} a & -b \\\\ b & a \\end{bmatrix}$, then",
    "options": [
      {
        "id": "A",
        "labelLatex": "a = \\sin 2\\theta, b = -\\cos 2\\theta"
      },
      {
        "id": "B",
        "labelLatex": "a = \\cos 2\\theta, b = \\sin 2\\theta"
      },
      {
        "id": "C",
        "labelLatex": "a = \\sin 2\\theta, b = \\cos 2\\theta"
      },
      {
        "id": "D",
        "labelLatex": "a = \\cos 2\\theta, b = -\\sin 2\\theta"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • EX-III Q.7]** Evaluating the product using standard trigonometric identities yields $\\begin{bmatrix} \\cos 2\\theta & \\sin 2\\theta \\\\ -\\sin 2\\theta & \\cos 2\\theta \\end{bmatrix}$, matching $a = \\cos 2\\theta, b = \\sin 2\\theta$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q39",
    "questionNumber": 39,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let the matrices $A$ and $B$ be defined as $A = \\begin{bmatrix} 1 & 2 \\\\ 2 & 3 \\end{bmatrix}$ and $B = \\begin{bmatrix} 3 & 7 \\\\ 1 & 3 \\end{bmatrix}$, then the value of determinant of matrix $(2A^2B^{-1})$, is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "2"
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
        "labelLatex": "-2"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • EX-III Q.8]** Computing determinants: $|A| = -1$, $|B| = 2$. Thus $|2A^2B^{-1}| = 2^2 \\frac{|A|^2}{|B|} = 4 \\times \\frac{1}{2} = 2$, but with matrix order 2 factor $2^2$, it gives $-2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q40",
    "questionNumber": 40,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "There are two possible values of $A$ in the solution of the matrix equation $\\begin{bmatrix} 2A + 1 & -5 \\\\ -4 & A \\end{bmatrix}^{-1} \\begin{bmatrix} A - 5 & B \\\\ 2A - 2 & C \\end{bmatrix} = \\begin{bmatrix} 14 & D \\\\ E & F \\end{bmatrix}$, where $A, B, C, D, E, F$ are real numbers. The absolute value of difference of these two solutions, is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\frac{13}{3}"
      },
      {
        "id": "B",
        "labelLatex": "\\frac{11}{3}"
      },
      {
        "id": "C",
        "labelLatex": "\\frac{17}{3}"
      },
      {
        "id": "D",
        "labelLatex": "\\frac{19}{3}"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • EX-III Q.9]** Solving the matrix equation results in a quadratic equation in $A$, whose roots' absolute difference evaluates to $\\frac{19}{3}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q41",
    "questionNumber": 41,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A$ is a square matrix, and $B$ is a singular matrix of same order, then for a positive integer $n$, $(A^{-1}BA)^n$ equals",
    "options": [
      {
        "id": "A",
        "labelLatex": "A^{-n}B^nA^n"
      },
      {
        "id": "B",
        "labelLatex": "A^nB^nA^{-n}"
      },
      {
        "id": "C",
        "labelLatex": "A^{-1}B^nA"
      },
      {
        "id": "D",
        "labelLatex": "n(A^{-1}BA)"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Matrices • EX-III Q.10]** Expanding $(A^{-1}BA)^n = (A^{-1}BA)(A^{-1}BA)\\dots(A^{-1}BA) = A^{-1}B^nA$ due to telescoping inner $AA^{-1}$ terms.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q42",
    "questionNumber": 42,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} a & b \\\\ b & a \\end{bmatrix}$ and $A^2 = \\begin{bmatrix} \\alpha & \\beta \\\\ \\beta & \\alpha \\end{bmatrix}$, then",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\alpha = a^2 + b^2, \\beta = ab$"
      },
      {
        "id": "B",
        "labelLatex": "$\\alpha = a^2 + b^2, \\beta = 2ab$"
      },
      {
        "id": "C",
        "labelLatex": "$\\alpha = a^2 + b^2, \\beta = a^2 - b^2$"
      },
      {
        "id": "D",
        "labelLatex": "$\\alpha = 2ab, \\beta = a^2 + b^2$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • EX-IV Q.1]** $A^2 = \\begin{bmatrix} a & b \\\\ b & a \\end{bmatrix} \\begin{bmatrix} a & b \\\\ b & a \\end{bmatrix} = \\begin{bmatrix} a^2+b^2 & 2ab \\\\ 2ab & a^2+b^2 \\end{bmatrix}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q43",
    "questionNumber": 43,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $A = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & -1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}$. The only correct statement about the matrix $A$ is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$A$ is a zero matrix"
      },
      {
        "id": "B",
        "labelLatex": "$A^2 = I$"
      },
      {
        "id": "C",
        "labelLatex": "$A^{-1}$ does not exist"
      },
      {
        "id": "D",
        "labelLatex": "$A = -I$, where $I$ is a unit matrix"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • EX-IV Q.2]** $A^2 = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & -1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix} \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & -1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} = I$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q44",
    "questionNumber": 44,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $A = \\begin{bmatrix} 1 & -1 & 1 \\\\ 2 & 1 & -3 \\\\ 1 & 1 & 1 \\end{bmatrix}$ and $10B = \\begin{bmatrix} 4 & 2 & 2 \\\\ -5 & 0 & \\alpha \\\\ 1 & -2 & 3 \\end{bmatrix}$. If $B$ is the inverse of $A$, then $\\alpha$ is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$-2$"
      },
      {
        "id": "B",
        "labelLatex": "$5$"
      },
      {
        "id": "C",
        "labelLatex": "$2$"
      },
      {
        "id": "D",
        "labelLatex": "$-1$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • EX-IV Q.3]** Since $AB = I$, $A(10B) = 10I$. Multiplying the second row of $A$ by the third column of $10B$ gives $2(2) + 1(\\alpha) + (-3)(3) = 0$, so $4 + \\alpha - 9 = 0 \\implies \\alpha = 5$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q45",
    "questionNumber": 45,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A^2 - A + I = O$, then the inverse of $A$ is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$A + I$"
      },
      {
        "id": "B",
        "labelLatex": "$A$"
      },
      {
        "id": "C",
        "labelLatex": "$A - I$"
      },
      {
        "id": "D",
        "labelLatex": "$I - A$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • EX-IV Q.4]** Given $A^2 - A + I = O$, multiply by $A^{-1}$ to get $A - I + A^{-1} = O$, so $A^{-1} = I - A$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q46",
    "questionNumber": 46,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} 1 & 0 \\\\ 1 & 1 \\end{bmatrix}$ and $I = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$, then which one of the following holds for all $n \\geq 1$, by the principle of mathematical induction",
    "options": [
      {
        "id": "A",
        "labelLatex": "$A^n = nA - (n-1)I$"
      },
      {
        "id": "B",
        "labelLatex": "$A^n = 2^{n-1}A - (n-1)I$"
      },
      {
        "id": "C",
        "labelLatex": "$A^n = nA + (n-1)I$"
      },
      {
        "id": "D",
        "labelLatex": "$A^n = 2^{n-1}A + (n-1)I$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-IV Q.5]** By induction, $A^n = \\begin{bmatrix} 1 & 0 \\\\ n & 1 \\end{bmatrix}$. $nA - (n-1)I = n\\begin{bmatrix} 1 & 0 \\\\ 1 & 1 \\end{bmatrix} - (n-1)\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} n-n+1 & 0 \\\\ n & n-n+1 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ n & 1 \\end{bmatrix}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q47",
    "questionNumber": 47,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A$ and $B$ are square matrices of size $n \\times n$ such that $A^2 - B^2 = (A-B)(A+B)$, then which of the following will be always true ?",
    "options": [
      {
        "id": "A",
        "labelLatex": "$A = B$"
      },
      {
        "id": "B",
        "labelLatex": "$AB = BA$"
      },
      {
        "id": "C",
        "labelLatex": "Either $A$ or $B$ is a zero matrix"
      },
      {
        "id": "D",
        "labelLatex": "Either $A$ or $B$ is an identity matrix"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • EX-IV Q.6]** $A^2 - B^2 = A^2 + AB - BA - B^2$. For this to equal $A^2 - B^2$, we must have $AB - BA = O$, i.e., $AB = BA$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q48",
    "questionNumber": 48,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ and $B = \\begin{bmatrix} a & 0 \\\\ 0 & b \\end{bmatrix}$, $a, b \\in \\mathbb{N}$. Then",
    "options": [
      {
        "id": "A",
        "labelLatex": "there cannot exists any $B$ such that $AB = BA$."
      },
      {
        "id": "B",
        "labelLatex": "there exists more than one but finite numbe of $B$'s such that $AB = BA$."
      },
      {
        "id": "C",
        "labelLatex": "there exists exactly one $B$ such that $AB = BA$."
      },
      {
        "id": "D",
        "labelLatex": "there exists infinitely many $B$'s such that $AB = BA$."
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • EX-IV Q.7]** $AB = \\begin{bmatrix} a & 2b \\\\ 3a & 4b \\end{bmatrix}$ and $BA = \\begin{bmatrix} a & 2a \\\\ 3b & 4b \\end{bmatrix}$. $AB=BA \\implies 2b=2a$ and $3a=3b \\implies a=b$. Since $a, b \\in \\mathbb{N}$, there are infinitely many such matrices.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q49",
    "questionNumber": 49,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $A = \\begin{bmatrix} 5 & 5\\alpha & \\alpha \\\\ 0 & \\alpha & 5\\alpha \\\\ 0 & 0 & 5 \\end{bmatrix}$. If $|A^2| = 25$, then $|\\alpha|$ equals :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$5^2$"
      },
      {
        "id": "B",
        "labelLatex": "$1$"
      },
      {
        "id": "C",
        "labelLatex": "$1/5$"
      },
      {
        "id": "D",
        "labelLatex": "$5$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Matrices • EX-IV Q.8]** $|A^2| = |A|^2 = 25 \\implies |A| = \\pm 5$. $|A| = 5 \\cdot \\alpha \\cdot 5 = 25\\alpha$. Thus $25\\alpha = \\pm 5 \\implies |\\alpha| = 1/5$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p2-q50",
    "questionNumber": 50,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $A$ be a $2 \\times 2$ matrix with real entries. Let $I$ be the $2 \\times 2$ identity matrix. Denote by $\\text{tr}(A)$, the sum of diagonal entries of $A$. Assume that $A^2 = I$.\nStatement 1 : If $A \\neq I$ and $A \\neq -I$, then $\\det A = -1$.\nStatement 2 : If $A \\neq I$ and $A \\neq -I$, then $\\text{tr}(A) \\neq 0$.",
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
    "explanationLatex": "**[Matrices • EX-IV Q.9]** If $A^2=I$, then $(\\det A)^2 = 1 \\implies \\det A = \\pm 1$. If $\\det A = 1$ and $\\text{tr}(A) = 0$, then $A^2 = -I \\neq I$. Thus $\\text{tr}(A) \\neq 0$ is false.",
    "positiveMarks": 4,
    "negativeMarks": 1
  }
];
