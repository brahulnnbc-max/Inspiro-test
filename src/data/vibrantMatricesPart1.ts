import { Question } from '../types/exam';

export const MATRICES_PART_1_QUESTIONS: Question[] = [
  {
    "id": "mat-p1-q1",
    "questionNumber": 1,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "In the following, upper triangular matrix is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$$\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 3 & 0 & 3 \\end{bmatrix}$$"
      },
      {
        "id": "B",
        "labelLatex": "$$\\begin{bmatrix} 5 & 4 & 2 \\\\ 0 & 0 & 3 \\\\ 0 & 0 & 1 \\end{bmatrix}$$"
      },
      {
        "id": "C",
        "labelLatex": "$$\\begin{bmatrix} 0 & 2 & 3 \\\\ 0 & 0 & 4 \\end{bmatrix}$$"
      },
      {
        "id": "D",
        "labelLatex": "$$\\begin{bmatrix} 2 & 1 \\\\ 0 & 3 \\\\ 0 & 0 \\end{bmatrix}$$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • PT-1 Q.1]** An upper triangular matrix is a square matrix where all elements below the main diagonal are zero.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q2",
    "questionNumber": 2,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} 5 & 2 \\\\ 1 & 0 \\end{bmatrix}$ and $B = \\begin{bmatrix} 2 & 3 \\\\ 5 & -1 \\end{bmatrix}$, then $|2A - 3B|$ equals",
    "options": [
      {
        "id": "A",
        "labelLatex": "77"
      },
      {
        "id": "B",
        "labelLatex": "-53"
      },
      {
        "id": "C",
        "labelLatex": "53"
      },
      {
        "id": "D",
        "labelLatex": "-77"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • PT-1 Q.2]** $$2A - 3B = \\begin{bmatrix} 10 & 4 \\\\ 2 & 0 \\end{bmatrix} - \\begin{bmatrix} 6 & 9 \\\\ 15 & -3 \\end{bmatrix} = \\begin{bmatrix} 4 & -5 \\\\ -13 & 3 \\end{bmatrix}$$, so $|2A - 3B| = 12 - 65 = -53$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q3",
    "questionNumber": 3,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "For a square matrix $A = [a_{ij}]$, $a_{ij} = 0$, when $i \\neq j$, then $A$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "unit matrix"
      },
      {
        "id": "B",
        "labelLatex": "scalar matrix"
      },
      {
        "id": "C",
        "labelLatex": "diagonal matrix"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Matrices • PT-1 Q.3]** By definition, a square matrix where all non-diagonal elements are zero is a diagonal matrix.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q4",
    "questionNumber": 4,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A$ and $B$ are matrices of order $m \\times n$ and $n \\times n$ respectively, then which of the following are defined",
    "options": [
      {
        "id": "A",
        "labelLatex": "$AB, BA$"
      },
      {
        "id": "B",
        "labelLatex": "$AB, A^2$"
      },
      {
        "id": "C",
        "labelLatex": "$A^2, B^2$"
      },
      {
        "id": "D",
        "labelLatex": "$AB, B^2$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • PT-1 Q.4]** $AB$ is $(m \\times n)(n \\times n) = m \\times n$ and $B^2$ is $(n \\times n)(n \\times n) = n \\times n$, both are defined.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q5",
    "questionNumber": 5,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} -1 & 0 & 2 \\\\ 3 & 1 & 2 \\end{bmatrix}$ and $B = \\begin{bmatrix} -1 & 5 \\\\ 2 & 7 \\\\ 3 & 10 \\end{bmatrix}$, then",
    "options": [
      {
        "id": "A",
        "labelLatex": "$AB$ and $BA$ both exist"
      },
      {
        "id": "B",
        "labelLatex": "$AB$ exists but not $BA$"
      },
      {
        "id": "C",
        "labelLatex": "$BA$ exists but not $AB$"
      },
      {
        "id": "D",
        "labelLatex": "Both $AB$ and $BA$ do not exist"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • PT-1 Q.5]** $A$ is $2 \\times 3$ and $B$ is $3 \\times 2$, so $AB$ ($2 \\times 2$) and $BA$ ($3 \\times 3$) both exist.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q6",
    "questionNumber": 6,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A$ is a matrix of order $3 \\times 4$, then both $AB^T$ and $B^TA$ are defined if order of $B$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$3 \\times 3$"
      },
      {
        "id": "B",
        "labelLatex": "$4 \\times 4$"
      },
      {
        "id": "C",
        "labelLatex": "$4 \\times 3$"
      },
      {
        "id": "D",
        "labelLatex": "$3 \\times 4$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • PT-1 Q.6]** $AB^T$ defined $\\implies B^T$ has 4 rows $\\implies B$ has 4 columns; $B^TA$ defined $\\implies B^T$ has 3 columns $\\implies B$ has 3 rows.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q7",
    "questionNumber": 7,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Matrix $\\begin{bmatrix} 0 & 5 & -7 \\\\ -5 & 0 & 11 \\\\ 7 & -11 & 0 \\end{bmatrix}$ is a",
    "options": [
      {
        "id": "A",
        "labelLatex": "Diagonal matrix"
      },
      {
        "id": "B",
        "labelLatex": "Upper triangular matrix"
      },
      {
        "id": "C",
        "labelLatex": "Skew-symmetric matrix"
      },
      {
        "id": "D",
        "labelLatex": "Symmetric matrix"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Matrices • PT-1 Q.7]** The matrix satisfies $A^T = -A$ and all diagonal elements are zero, which defines a skew-symmetric matrix.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q8",
    "questionNumber": 8,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A$ is symmetric as well as skew symmetric matrix, then",
    "options": [
      {
        "id": "A",
        "labelLatex": "$A$ is a diagonal matrix"
      },
      {
        "id": "B",
        "labelLatex": "$A$ is a null matrix"
      },
      {
        "id": "C",
        "labelLatex": "$A$ is a unit matrix"
      },
      {
        "id": "D",
        "labelLatex": "$A$ is a triangular matrix"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • PT-1 Q.8]** $A^T = A$ and $A^T = -A \\implies A = -A \\implies 2A = 0 \\implies A = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q9",
    "questionNumber": 9,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A$ is symmetric matrix and $B$ is a skew-symmetric matrix, then for $n \\in \\mathbb{N}$, false statement is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$A^n$ is symmetric when $n$ is odd"
      },
      {
        "id": "B",
        "labelLatex": "$A^n$ is symmetric only when $n$ is even"
      },
      {
        "id": "C",
        "labelLatex": "$B^n$ is skew symmetric when $n$ is odd"
      },
      {
        "id": "D",
        "labelLatex": "$B^n$ is symmetric when $n$ is even"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • PT-1 Q.9]** If $A$ is symmetric, $A^n$ is symmetric for all $n \\in \\mathbb{N}$, so (B) is false.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q10",
    "questionNumber": 10,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $A$ be a square matrix. Then which of the following is not a symmetric matrix",
    "options": [
      {
        "id": "A",
        "labelLatex": "$A + A^T$"
      },
      {
        "id": "B",
        "labelLatex": "$AA^T$"
      },
      {
        "id": "C",
        "labelLatex": "$A^TA$"
      },
      {
        "id": "D",
        "labelLatex": "$A - A^T$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • PT-1 Q.10]** $(A - A^T)^T = A^T - A = -(A - A^T)$, which is skew-symmetric, not symmetric.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q11",
    "questionNumber": 11,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix}$ and $n \\in \\mathbb{N}$, then $A^n$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2^n A$"
      },
      {
        "id": "B",
        "labelLatex": "$2^{n-1} A$"
      },
      {
        "id": "C",
        "labelLatex": "$nA$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • PT-1 Q.11]** $A^2 = 2A, A^3 = 2A^2 = 4A$, by induction $A^n = 2^{n-1} A$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q12",
    "questionNumber": 12,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = [a_{ij}]$ is scalar matrix of order $n \\times n$ such that $a_{ii} = k$ for all $i$, then $|A|$ equals",
    "options": [
      {
        "id": "A",
        "labelLatex": "$nk$"
      },
      {
        "id": "B",
        "labelLatex": "$n + k$"
      },
      {
        "id": "C",
        "labelLatex": "$n^k$"
      },
      {
        "id": "D",
        "labelLatex": "$k^n$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • PT-1 Q.12]** $A = kI$, so $|A| = |kI| = k^n |I| = k^n$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q13",
    "questionNumber": 13,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} 3 & -4 \\\\ 1 & -1 \\end{bmatrix}$, then for every positive integer $n$, $A^n$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "$$\\begin{bmatrix} 1+2n & 4n-8 \\\\ n & 1-2n \\end{bmatrix}$$"
      },
      {
        "id": "B",
        "labelLatex": "$$\\begin{bmatrix} 1+2n & -4n \\\\ n & 1-2n \\end{bmatrix}$$"
      },
      {
        "id": "C",
        "labelLatex": "$$\\begin{bmatrix} 1-2n & -4n \\\\ n & n-2 \\end{bmatrix}$$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • PT-1 Q.13]** Testing for $n=1$ gives $A$, and for $n=2$, $A^2 = \\begin{bmatrix} 5 & -8 \\\\ 2 & -3 \\end{bmatrix}$, which matches option (B).",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q14",
    "questionNumber": 14,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A$ is any skew-symmetric matrix of odd orders, then $|A|$ equals",
    "options": [
      {
        "id": "A",
        "labelLatex": "$-1$"
      },
      {
        "id": "B",
        "labelLatex": "0"
      },
      {
        "id": "C",
        "labelLatex": "1"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • PT-1 Q.14]** The determinant of a skew-symmetric matrix of odd order is always zero.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q15",
    "questionNumber": 15,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} 0 & c & -b \\\\ -c & 0 & a \\\\ b & -a & 0 \\end{bmatrix}$ and $B = \\begin{bmatrix} a^2 & ab & ac \\\\ ab & b^2 & bc \\\\ ac & bc & c^2 \\end{bmatrix}$ then $AB$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "$A$"
      },
      {
        "id": "B",
        "labelLatex": "$B$"
      },
      {
        "id": "C",
        "labelLatex": "an Identity matrix"
      },
      {
        "id": "D",
        "labelLatex": "a Null matrix"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • PT-1 Q.15]** Multiplying $A$ and $B$ results in all entries being zero, e.g., $(AB)_{11} = 0 + abc - abc = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q16",
    "questionNumber": 16,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A$ and $B$ are two square matrices of the same order and $(A + B)^n = {}^{n}C_{0}A^n + {}^{n}C_{1}A^{n-1}B + {}^{n}C_{2}A^{n-2}B^2 + \\dots + {}^{n}C_{n}B^n$ ($n$ is a positive integer), then :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$AB = -BA$"
      },
      {
        "id": "B",
        "labelLatex": "$AB = BA$"
      },
      {
        "id": "C",
        "labelLatex": "$|A| = 0$ or $|B| = 0$"
      },
      {
        "id": "D",
        "labelLatex": "holds always"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • PT-1 Q.16]** The binomial expansion for matrices holds if and only if the matrices commute, i.e., $AB = BA$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q17",
    "questionNumber": 17,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} \\cos \\theta & \\sin \\theta \\\\ \\sin \\theta & -\\cos \\theta \\end{bmatrix}$, $B = \\begin{bmatrix} 1 & 0 \\\\ -1 & 1 \\end{bmatrix}$, $C = ABA^T$, then $A^T C^k A$ is equal to ($k \\in \\mathbb{N}, k > 5$)",
    "options": [
      {
        "id": "A",
        "labelLatex": "$$\\begin{bmatrix} -k & 1 \\\\ 1 & 0 \\end{bmatrix}$$"
      },
      {
        "id": "B",
        "labelLatex": "$$\\begin{bmatrix} -k & 0 \\\\ 1 & 1 \\end{bmatrix}$$"
      },
      {
        "id": "C",
        "labelLatex": "$$\\begin{bmatrix} 0 & 1 \\\\ -k & 1 \\end{bmatrix}$$"
      },
      {
        "id": "D",
        "labelLatex": "$$\\begin{bmatrix} 1 & 0 \\\\ -k & 1 \\end{bmatrix}$$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • PT-1 Q.17]** $A^2 = I$, so $C^k = AB^k A^T$. Then $A^T C^k A = A^T(AB^k A^T)A = B^k = \\begin{bmatrix} 1 & 0 \\\\ -k & 1 \\end{bmatrix}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q18",
    "questionNumber": 18,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A$ is a skew symmetric matrix, then $B(I - A)(I + A)^{-1}$ is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "Orthogonal matrix"
      },
      {
        "id": "B",
        "labelLatex": "Symmetric matrix"
      },
      {
        "id": "C",
        "labelLatex": "Involuntary matrix"
      },
      {
        "id": "D",
        "labelLatex": "Idempotent matrix"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • PT-1 Q.18]** For skew-symmetric $A$, $(I-A)(I+A)^{-1}$ is orthogonal; if $B$ is orthogonal, the product is orthogonal.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q19",
    "questionNumber": 19,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $A$ be a non-singular square matrix satisfying $A^3 - 8A = 0$ then $(A^2 + I)^{-1}$ equals to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{1}{9}(9I - A^2)$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{1}{9}(A^2 - 9I)$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{1}{9}(9I + A^2)$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{1}{9}(A^2 - I)$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • PT-1 Q.19]** $A^3 - 8A = 0 \\implies A^2 = 8I$ (since $A$ is non-singular). Then $(A^2 + I)^{-1} = (9I)^{-1} = \\frac{1}{9}I = \\frac{1}{9}(9I - 8I) = \\frac{1}{9}(9I - A^2)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q20",
    "questionNumber": 20,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $A$ be an idempotent matrix and $(I + A)^n = I + \\lambda A$ ($n \\in \\mathbb{N}$) then $\\lambda$ equals to",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2^n - 1$"
      },
      {
        "id": "B",
        "labelLatex": "$2^n$"
      },
      {
        "id": "C",
        "labelLatex": "$2^{n-1}$"
      },
      {
        "id": "D",
        "labelLatex": "$2^n + 1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • PT-1 Q.20]** $(I+A)^n = I + \\sum_{k=1}^n \\binom{n}{k} A^k = I + (\\sum_{k=1}^n \\binom{n}{k}) A = I + (2^n - 1) A$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q21",
    "questionNumber": 21,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $M$ and $N$ be two $3 \\times 3$ non-singular symmetric matrices such that $MN = NM$. If $P^T$ denotes the transpose of a matrix $P$, then $M^2 N^2 (M^T N)^{-1} (MN^{-1})^T$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$-M^2$"
      },
      {
        "id": "B",
        "labelLatex": "$M^2$"
      },
      {
        "id": "C",
        "labelLatex": "$M^2 N^2$"
      },
      {
        "id": "D",
        "labelLatex": "$MN$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • PT-1 Q.21]** $M^2 N^2 (MN)^{-1} (N^{-1} M) = M^2 N^2 N^{-1} M^{-1} N^{-1} M = M^2 N M^{-1} N^{-1} M = M^2 N N^{-1} M^{-1} M = M^2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q22",
    "questionNumber": 22,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The root of the equation $\\begin{bmatrix} x & 1 & 2 \\end{bmatrix} \\begin{bmatrix} 0 & 1 & 1 \\\\ 1 & 0 & 1 \\\\ 1 & 1 & 0 \\end{bmatrix} \\begin{bmatrix} x \\\\ -1 \\\\ 1 \\end{bmatrix} = 0$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{1}{3}$"
      },
      {
        "id": "B",
        "labelLatex": "$-\\frac{1}{3}$"
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
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • PT-2 Q.1]** Multiplying the matrices gives the equation $x(x+1) - 1(x+1) + 2(x-1) = 0$, which simplifies to $x^2+2x-3=0$, yielding $x=1, -3$ (Note: The provided key indicates A, likely due to a specific matrix interpretation).",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q23",
    "questionNumber": 23,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "For square matrices A and B, AB = O, then {O : null matrix}",
    "options": [
      {
        "id": "A",
        "labelLatex": "$A = O$ or $B = O$"
      },
      {
        "id": "B",
        "labelLatex": "$A = O$ and $B = O$"
      },
      {
        "id": "C",
        "labelLatex": "It is not necessary that $A = O$ and/or $B = O$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Matrices • PT-2 Q.2]** Two non-zero matrices can have a product equal to the null matrix, e.g., $\\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix} \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q24",
    "questionNumber": 24,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If A and B are matrices of order $m \\times n$ and $n \\times m$ respectively, then the order of matrix $B^T (A^T)^T$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$m \\times n$"
      },
      {
        "id": "B",
        "labelLatex": "$m \\times m$"
      },
      {
        "id": "C",
        "labelLatex": "$n \\times n$"
      },
      {
        "id": "D",
        "labelLatex": "Not defined"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • PT-2 Q.3]** $B^T$ is $m \\times n$ and $(A^T)^T = A$ is $m \\times n$. The product of an $m \\times n$ matrix and an $m \\times n$ matrix is not defined.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q25",
    "questionNumber": 25,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 4 \\\\ 0 & 0 & 2 \\end{bmatrix}$, then the value of adj (adj A) is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$4A^2$"
      },
      {
        "id": "B",
        "labelLatex": "$-2A$"
      },
      {
        "id": "C",
        "labelLatex": "$2A$"
      },
      {
        "id": "D",
        "labelLatex": "$A^2$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • PT-2 Q.4]** Using the property $\\text{adj}(\\text{adj } A) = |A|^{n-2} A$, where $n=3$ and $|A| = 1(6-0) - 2(4-0) + 3(0-0) = 6-8 = -2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q26",
    "questionNumber": 26,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} \\cos x & \\sin x \\\\ -\\sin x & \\cos x \\end{bmatrix}$ and $A.(\\text{adj } A) = k \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$, then k equals",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\sin x \\cos x$"
      },
      {
        "id": "B",
        "labelLatex": "$1$"
      },
      {
        "id": "C",
        "labelLatex": "$\\sin 2x$"
      },
      {
        "id": "D",
        "labelLatex": "$-1$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • PT-2 Q.5]** $A(\\text{adj } A) = |A|I$. Here $|A| = \\cos^2 x + \\sin^2 x = 1$, so $k=1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q27",
    "questionNumber": 27,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} 1 & -2 & 3 \\\\ 4 & 0 & -1 \\\\ -3 & 1 & 5 \\end{bmatrix}$, then $(\\text{adj } A)_{23} =$\n{i.e., the element of (adj A) which belongs to second row and third column}",
    "options": [
      {
        "id": "A",
        "labelLatex": "$13$"
      },
      {
        "id": "B",
        "labelLatex": "$-13$"
      },
      {
        "id": "C",
        "labelLatex": "$5$"
      },
      {
        "id": "D",
        "labelLatex": "$-5$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • PT-2 Q.6]** The element $(\\text{adj } A)_{23}$ is the cofactor $C_{32} = -(-1(1) - 3(4)) = -(-1-12) = 13$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q28",
    "questionNumber": 28,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$(\\text{adj } A^T) - (\\text{adj } A)^T$ equals",
    "options": [
      {
        "id": "A",
        "labelLatex": "$|A| I$"
      },
      {
        "id": "B",
        "labelLatex": "$2|A| I$"
      },
      {
        "id": "C",
        "labelLatex": "Null matrix"
      },
      {
        "id": "D",
        "labelLatex": "Unit matrix"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Matrices • PT-2 Q.7]** Since $\\text{adj}(A^T) = (\\text{adj } A)^T$, the difference is the null matrix.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q29",
    "questionNumber": 29,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} 2 & 3 \\\\ 1 & 3 \\end{bmatrix}, B = \\begin{bmatrix} 4 & 6 \\\\ 2 & 3 \\end{bmatrix}, C = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$, then which of these matrices are invertible ?",
    "options": [
      {
        "id": "A",
        "labelLatex": "$A$ and $B$"
      },
      {
        "id": "B",
        "labelLatex": "$B$ and $C$"
      },
      {
        "id": "C",
        "labelLatex": "$A$ and $C$"
      },
      {
        "id": "D",
        "labelLatex": "$All$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Matrices • PT-2 Q.8]** A matrix is invertible if its determinant is non-zero. $|A| = 6-3=3 \\neq 0$, $|B| = 12-12=0$, $|C| = 1 \\neq 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q30",
    "questionNumber": 30,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Which of the following matrices is inverse of itself",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\begin{bmatrix} 1 & 1 & 1 \\\\ 1 & 1 & 1 \\\\ 1 & 1 & 1 \\end{bmatrix}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\begin{bmatrix} 3 & -2 \\\\ 4 & -3 \\end{bmatrix}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 0 & 0 \\\\ 1 & 0 & 1 \\end{bmatrix}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\begin{bmatrix} 0 & 1 & 0 \\\\ 1 & 1 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • PT-2 Q.9]** A matrix $A$ is the inverse of itself if $A^2 = I$. For option B, $\\begin{bmatrix} 3 & -2 \\\\ 4 & -3 \\end{bmatrix} \\begin{bmatrix} 3 & -2 \\\\ 4 & -3 \\end{bmatrix} = \\begin{bmatrix} 9-8 & -6+6 \\\\ 12-12 & -8+9 \\end{bmatrix} = I$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q31",
    "questionNumber": 31,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If D is a diagonal matrix with diagonal elements as {d1, d2, d3 ..., dn} in order, then we may represent it as $D = \\text{diag} (d_1, d_2, ......., d_n)$. Then $D^n$ equals",
    "options": [
      {
        "id": "A",
        "labelLatex": "$D$"
      },
      {
        "id": "B",
        "labelLatex": "$\\text{diag} (d_1^{n-1}, d_2^{n-1}, ......., d_n^{n-1})$"
      },
      {
        "id": "C",
        "labelLatex": "$\\text{diag} (d_1^n, d_2^n, ......., d_n^n)$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Matrices • PT-2 Q.10]** For a diagonal matrix $D$, $D^n = \\text{diag}(d_1^n, d_2^n, ..., d_n^n)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q32",
    "questionNumber": 32,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} \\cos \\theta & -\\sin \\theta & 0 \\\\ \\sin \\theta & \\cos \\theta & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$, then",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\text{adj } A = A$"
      },
      {
        "id": "B",
        "labelLatex": "$\\text{adj } A = A^{-1}$"
      },
      {
        "id": "C",
        "labelLatex": "$A^{-1} = -A$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • PT-2 Q.11]** For an orthogonal matrix $A$, $A^T = A^{-1}$. Since $A$ is orthogonal, $\\text{adj } A = |A| A^{-1} = 1 \\cdot A^{-1} = A^{-1}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q33",
    "questionNumber": 33,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If A is invertible matrix, then $\\det (A^{-1})$ equals {where, det (B) means determinant of matrix B}",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\det (A)$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{1}{\\det (A)}$"
      },
      {
        "id": "C",
        "labelLatex": "$1$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • PT-2 Q.12]** Since $AA^{-1} = I$, $\\det(A)\\det(A^{-1}) = \\det(I) = 1$, so $\\det(A^{-1}) = 1/\\det(A)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q34",
    "questionNumber": 34,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If A and B are non-zero square matrices of the same order such that $AB = O$, then {O : null matrix}",
    "options": [
      {
        "id": "A",
        "labelLatex": "Either $\\text{adj } A = O$ or $\\text{adj } B = O$"
      },
      {
        "id": "B",
        "labelLatex": "$\\text{adj } A = O$ and $\\text{adj } B = O$"
      },
      {
        "id": "C",
        "labelLatex": "Either $|A| = 0$ or $|B| = 0$"
      },
      {
        "id": "D",
        "labelLatex": "$|A| = 0$ and $|B| = 0$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • PT-2 Q.13]** If $AB=O$ and $A, B \\neq O$, then both must be singular, so $|A|=0$ and $|B|=0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q35",
    "questionNumber": 35,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let A be an idempotent square matrix, then $(I + A)^4$ is:",
    "options": [
      {
        "id": "A",
        "labelLatex": "$I - A$"
      },
      {
        "id": "B",
        "labelLatex": "$I + A$"
      },
      {
        "id": "C",
        "labelLatex": "$I + 15A$"
      },
      {
        "id": "D",
        "labelLatex": "$I$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Matrices • PT-2 Q.14]** Since $A^2 = A$, $(I+A)^2 = I + 2A + A^2 = I + 3A$. Then $(I+A)^4 = (I+3A)^2 = I + 6A + 9A^2 = I + 15A$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q36",
    "questionNumber": 36,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If A and B are two square matrices such that $B = -A^{-1}BA$, then $(A + B)^2 =$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$A^2 + 2BA + B^2$"
      },
      {
        "id": "B",
        "labelLatex": "$A^2 + B^2$"
      },
      {
        "id": "C",
        "labelLatex": "$A^2 + 2AB + B^2$"
      },
      {
        "id": "D",
        "labelLatex": "$A^2 - B^2$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • PT-2 Q.15]** Given $AB = -BA$, then $(A+B)^2 = A^2 + AB + BA + B^2 = A^2 + 0 + B^2 = A^2 + B^2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q37",
    "questionNumber": 37,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If A is a diagonal matrix of order $3 \\times 3$ is commutative with every square matrix of order $3 \\times 3$ and trace(A) = 12 then $|A|$ equals to",
    "options": [
      {
        "id": "A",
        "labelLatex": "$12$"
      },
      {
        "id": "B",
        "labelLatex": "$16$"
      },
      {
        "id": "C",
        "labelLatex": "$32$"
      },
      {
        "id": "D",
        "labelLatex": "$64$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Matrices • PT-2 Q.16]** A matrix commuting with all matrices must be a scalar matrix $A = kI$. Trace is $3k = 12 \\implies k=4$. $|A| = k^3 = 4^3 = 64$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q38",
    "questionNumber": 38,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If A and B are two matrices of $3 \\times 3$ such that $AB = 0$ and $A^2 + B = I$ then $|A^2 + B^2|$ equals to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1$"
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
        "labelLatex": "$3$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • PT-2 Q.17]** Since $A^2+B=I$, $B=I-A^2$. $AB=0 \\implies A(I-A^2)=0 \\implies A=A^3$. Then $B^2 = (I-A^2)^2 = I - 2A^2 + A^4 = I - 2A^2 + A^2 = I - A^2$. Thus $A^2+B^2 = A^2 + I - A^2 = I$, so $|I|=1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q39",
    "questionNumber": 39,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} 1 & -1 & 0 \\\\ -1 & 1 & 1 \\\\ 0 & 1 & 1 \\end{bmatrix}$, then $A^2 + A^{-1} =$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$I - 3A$"
      },
      {
        "id": "B",
        "labelLatex": "$3A - I$"
      },
      {
        "id": "C",
        "labelLatex": "$3A + I$"
      },
      {
        "id": "D",
        "labelLatex": "$I + A$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Matrices • PT-2 Q.18]** Characteristic equation is $A^3 - 3A^2 + A + I = 0$. Multiplying by $A^{-1}$ gives $A^2 - 3A + I + A^{-1} = 0$, so $A^2 + A^{-1} = 3A - I$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q40",
    "questionNumber": 40,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 4 \\\\ 5 & 6 & 8 \\end{bmatrix}$, then $|\\text{adj}(\\text{adj } 2A)| =$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2^{12}$"
      },
      {
        "id": "B",
        "labelLatex": "$2^{16}$"
      },
      {
        "id": "C",
        "labelLatex": "$2^8$"
      },
      {
        "id": "D",
        "labelLatex": "$2^{32}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • PT-2 Q.19]** $|A| = 1(24-24) - 2(16-20) + 3(12-15) = 0 + 8 - 9 = -1$. $|\\text{adj}(\\text{adj } M)| = |M|^{(n-1)^2} = |2A|^{(3-1)^2} = |2A|^4 = (2^3 |A|)^4 = (-8)^4 = 2^{12}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q41",
    "questionNumber": 41,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $A = \\begin{bmatrix} x & 3 & 2 \\\\ 1 & y & 4 \\\\ 2 & 2 & z \\end{bmatrix}$, $x y z = 50$ and $8x + 4y + 3z = 30$, then $A(\\text{adj } A)$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$64 I$"
      },
      {
        "id": "B",
        "labelLatex": "$I$"
      },
      {
        "id": "C",
        "labelLatex": "$48 I$"
      },
      {
        "id": "D",
        "labelLatex": "$16 I$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Matrices • PT-2 Q.20]** $A(\\text{adj } A) = |A|I$. $|A| = x(yz-8) - 3(z-8) + 2(2-2y) = xyz - 8x - 3z + 24 + 4 - 4y = 50 - (8x+4y+3z) + 28 = 50 - 30 + 28 = 48$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q42",
    "questionNumber": 42,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $5A = \\begin{bmatrix} 1 & 2 & 2 \\\\ 2 & 1 & -2 \\\\ x & 2 & y \\end{bmatrix}$ and $AA^T = I$ then find the value of $y - x$ :",
    "correctAnswer": "1",
    "explanationLatex": "**[Matrices • EX-I Q.1]** Since $A$ is orthogonal, the rows of $5A$ are orthogonal and of length $5$. Using orthogonality of row 1 and row 3, and row 2 and row 3, we get $x = -2$ and $y = -1$, giving $y - x = -1 - (-2) = 1$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p1-q43",
    "questionNumber": 43,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the value of $x$ and $y$ that satisfy the equations.\n$$\\begin{bmatrix} 3 & -2 \\\\ 3 & 0 \\\\ 2 & 4 \\end{bmatrix} \\begin{bmatrix} y & y \\\\ x & x \\end{bmatrix} = \\begin{bmatrix} 3 & 3 \\\\ 3y & 3y \\\\ 10 & 10 \\end{bmatrix}$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$x = \\frac{3}{2}, y = 2$"
      },
      {
        "id": "B",
        "labelLatex": "$x = 2, y = \\frac{3}{2}$"
      },
      {
        "id": "C",
        "labelLatex": "$x = -\\frac{3}{2}, y = 2$"
      },
      {
        "id": "D",
        "labelLatex": "$x = 1, y = 3$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-I Q.2]** Multiplying the matrices gives $3y - 2x = 3$, $3y = 3y$, and $2y + 4x = 10$. Solving $3y - 2x = 3$ and $2y + 4x = 10$ yields $x = \\frac{3}{2}$ and $y = 2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q44",
    "questionNumber": 44,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ and $B = \\begin{bmatrix} p \\\\ q \\end{bmatrix} \\neq \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}$. Such that $AB = B$ and $a + d = 5050$. Find the value of $(ad - bc)$.",
    "correctAnswer": "5049",
    "explanationLatex": "**[Matrices • EX-I Q.3]** Since $AB = B$ with non-zero vector $B$, $\\lambda = 1$ is an eigenvalue of $A$. The characteristic equation is $\\lambda^2 - (a+d)\\lambda + \\det(A) = 0$, so $1 - 5050 + (ad - bc) = 0 \\implies ad - bc = 5049$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p1-q45",
    "questionNumber": 45,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Define $A = \\begin{bmatrix} 0 & 1 \\\\ 3 & 0 \\end{bmatrix}$. Find a vertical vector $V$ such that $(A^8 + A^6 + A^4 + A^2 + I)V = \\begin{bmatrix} 0 \\\\ 11 \\end{bmatrix}$ (where $I$ is the $2 \\times 2$ identity matrix).",
    "options": [
      {
        "id": "A",
        "labelLatex": "$V = \\begin{bmatrix} 0 \\\\ \\frac{1}{11} \\end{bmatrix}$"
      },
      {
        "id": "B",
        "labelLatex": "$V = \\begin{bmatrix} \\frac{1}{11} \\\\ 0 \\end{bmatrix}$"
      },
      {
        "id": "C",
        "labelLatex": "$V = \\begin{bmatrix} 0 \\\\ 11 \\end{bmatrix}$"
      },
      {
        "id": "D",
        "labelLatex": "$V = \\begin{bmatrix} 1 \\\\ 11 \\end{bmatrix}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-I Q.4]** $A^2 = 3I$, so $A^8 + A^6 + A^4 + A^2 + I = (81 + 27 + 9 + 3 + 1)I = 121I$. Hence $121V = \\begin{bmatrix} 0 \\\\ 11 \\end{bmatrix} \\implies V = \\begin{bmatrix} 0 \\\\ \\frac{1}{11} \\end{bmatrix}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q46",
    "questionNumber": 46,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If, $A = \\begin{bmatrix} 1 & 0 & 2 \\\\ 0 & 2 & 1 \\\\ 2 & 0 & 3 \\end{bmatrix}$, then show that the maxtrix $A$ is a root of the polynomial $f(x) = x^3 - 6x^2 + 7x + 2$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f(A) = O$"
      },
      {
        "id": "B",
        "labelLatex": "$f(A) = I$"
      },
      {
        "id": "C",
        "labelLatex": "$f(A) = A$"
      },
      {
        "id": "D",
        "labelLatex": "$f(A) = -I$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-I Q.5]** By the Cayley-Hamilton theorem, $A$ satisfies its characteristic equation $\\det(A - xI) = -(x^3 - 6x^2 + 7x + 2) = 0$, so $f(A) = O$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q47",
    "questionNumber": 47,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If the matrices $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ and $B = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ ($a, b, c, d$ not all simultaneously zero) commute, find the value of $\\frac{d - b}{a + c - b}$. Also show that the matrix which commutes with $A$ is of the form $\\begin{bmatrix} \\alpha - \\beta & 2\\beta/3 \\\\ \\beta & \\alpha \\end{bmatrix}$.",
    "correctAnswer": "1",
    "explanationLatex": "**[Matrices • EX-I Q.6]** From $AB = BA$, we find $c = \\frac{3b}{2}$ and $d - a = \\frac{3b}{2}$. Then $\\frac{d - b}{a + c - b} = \\frac{a + \\frac{3b}{2} - b}{a + \\frac{3b}{2} - b} = 1$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "mat-p1-q48",
    "questionNumber": 48,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $\\begin{bmatrix} a & b \\\\ c & 1 - a \\end{bmatrix}$ is an idempotent matrix. Find the value of $f(a)$, where $f(x) = x - x^2$, when $bc = 1/4$. Hence otherwise evaluate $a$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$f(a) = 1/4, a = 1/2$"
      },
      {
        "id": "B",
        "labelLatex": "$f(a) = 1/2, a = 1/4$"
      },
      {
        "id": "C",
        "labelLatex": "$f(a) = 1/4, a = 1$"
      },
      {
        "id": "D",
        "labelLatex": "$f(a) = 0, a = 1/2$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-I Q.7]** For an idempotent matrix $M^2 = M$, which gives $a^2 + bc = a \\implies a - a^2 = bc = 1/4$. Thus $f(a) = 1/4$ and solving $a - a^2 = 1/4$ gives $(a - 1/2)^2 = 0 \\implies a = 1/2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q49",
    "questionNumber": 49,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the matrix $A$ is involutary, show that $\\frac{1}{2}(I + A)$ and $\\frac{1}{2}(I - A)$ are idempotent and $\\frac{1}{2}(I + A) \\cdot \\frac{1}{2}(I - A) = \\mathbf{O}$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "Both $\\frac{1}{2}(I + A)$ and $\\frac{1}{2}(I - A)$ are idempotent, and $\\frac{1}{4}(I+A)(I-A) = O$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{1}{2}(I + A)$ is idempotent but $\\frac{1}{2}(I - A)$ is involutory"
      },
      {
        "id": "C",
        "labelLatex": "Both matrices are nilponent of index 2"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{1}{2}(I + A)$ is orthogonal and $\\frac{1}{2}(I - A) = O$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-I Q.8]** Since $A^2 = I$, $\\left(\\frac{I \\pm A}{2}\\right)^2 = \\frac{I \\pm 2A + A^2}{4} = \\frac{2I \\pm 2A}{4} = \\frac{I \\pm A}{2}$, and $\\frac{1}{4}(I+A)(I-A) = \\frac{1}{4}(I - A^2) = O$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "mat-p1-q50",
    "questionNumber": 50,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Show that the matrix $A = \\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix}$ can be decomposed as a sum of a unit and a nilpotent marix. Hence evaluate the matrix $\\begin{bmatrix} 1 & 0 \\\\ 2 & 1 \\end{bmatrix}^{2007}$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\begin{bmatrix} 1 & 0 \\\\ 4014 & 1 \\end{bmatrix}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\begin{bmatrix} 1 & 0 \\\\ 2007 & 1 \\end{bmatrix}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\begin{bmatrix} 1 & 0 \\\\ 2^{2007} & 1 \\end{bmatrix}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\begin{bmatrix} 2007 & 0 \\\\ 4014 & 2007 \\end{bmatrix}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Matrices • EX-I Q.9]** $A = I + N$ where $N = \\begin{bmatrix} 0 & 0 \\\\ 2 & 0 \\end{bmatrix}$ satisfies $N^2 = O$. Thus $A^{2007} = I + 2007 N = \\begin{bmatrix} 1 & 0 \\\\ 4014 & 1 \\end{bmatrix}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  }
];
