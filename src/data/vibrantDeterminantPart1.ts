import { Question } from '../types/exam';

export const DETERMINANT_PART_1_QUESTIONS: Question[] = [
  {
    "id": "det-p1-q1",
    "questionNumber": 1,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$$\\begin{vmatrix} 1 & a & a^2 \\\\ 1 & b & b^2 \\\\ 1 & c & c^2 \\end{vmatrix} =$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$(a - b)(b - c)(c - a)$"
      },
      {
        "id": "B",
        "labelLatex": "$(a + b)(b + c)(c + a)$"
      },
      {
        "id": "C",
        "labelLatex": "$(a - b)(b - c)(a - c)$"
      },
      {
        "id": "D",
        "labelLatex": "$(a + b)(b + c)(a + c)$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • PT-1 Q.1]** Using row operations $R_2 \\to R_2 - R_1$ and $R_3 \\to R_3 - R_1$, we factor out $(b-a)$ and $(c-a)$ to get $(b-a)(c-a)(c-b) = (a-b)(b-c)(c-a)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q2",
    "questionNumber": 2,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$$\\begin{vmatrix} 1 & 5 & \\pi \\\\ \\log_e e & 5 & \\sqrt{5} \\\\ \\log_{10} 10 & 5 & e \\end{vmatrix} =$$",
    "correctAnswer": "0",
    "explanationLatex": "**[Determinant • PT-1 Q.2]** Since $\\log_e e = 1$ and $\\log_{10} 10 = 1$, the first and third rows are identical, so the determinant is 0.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q3",
    "questionNumber": 3,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$$\\begin{vmatrix} 19 & 17 & 15 \\\\ 9 & 8 & 7 \\\\ 1 & 1 & 1 \\end{vmatrix} =$$",
    "correctAnswer": "0",
    "explanationLatex": "**[Determinant • PT-1 Q.3]** Applying $C_1 \\to C_1 - C_2$ and $C_2 \\to C_2 - C_3$, we get columns $(2, 1, 0)^T$ and $(2, 1, 0)^T$, which are identical.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q4",
    "questionNumber": 4,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "The value of the determinant $$\\begin{vmatrix} 4 & -6 & 1 \\\\ -1 & -1 & 1 \\\\ -4 & 11 & -1 \\end{vmatrix}$$ is:",
    "correctAnswer": "-25",
    "explanationLatex": "**[Determinant • PT-1 Q.4]** Expanding along the first row: $4(1-11) + 6(1+4) + 1(-11-4) = 4(-10) + 6(5) + 1(-15) = -40 + 30 - 15 = -25$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q5",
    "questionNumber": 5,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "The value of the determinant $$\\begin{vmatrix} 31 & 37 & 92 \\\\ 31 & 58 & 71 \\\\ 31 & 105 & 24 \\end{vmatrix}$$ is:",
    "correctAnswer": "0",
    "explanationLatex": "**[Determinant • PT-1 Q.5]** The determinant is 0 because the first column is a multiple of 1, but more simply, row operations show linear dependence.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q6",
    "questionNumber": 6,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$$\\begin{vmatrix} a - b & b - c & c - a \\\\ x - y & y - z & z - x \\\\ p - q & q - r & r - p \\end{vmatrix} =$$",
    "correctAnswer": "0",
    "explanationLatex": "**[Determinant • PT-1 Q.6]** Summing all columns $C_1 + C_2 + C_3$ results in a zero column, hence the determinant is 0.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q7",
    "questionNumber": 7,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$$\\begin{vmatrix} 1 & a & a^2 - bc \\\\ 1 & b & b^2 - ac \\\\ 1 & c & c^2 - ab \\end{vmatrix} =$$",
    "correctAnswer": "0",
    "explanationLatex": "**[Determinant • PT-1 Q.7]** The determinant can be split into two: $\\begin{vmatrix} 1 & a & a^2 \\\\ 1 & b & b^2 \\\\ 1 & c & c^2 \\end{vmatrix} - \\begin{vmatrix} 1 & a & bc \\\\ 1 & b & ac \\\\ 1 & c & ab \\end{vmatrix} = (a-b)(b-c)(c-a) - (a-b)(b-c)(c-a) = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q8",
    "questionNumber": 8,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$$\\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 1 + x & 1 \\\\ 1 & 1 & 1 + y \\end{vmatrix} =$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$xy$"
      },
      {
        "id": "B",
        "labelLatex": "$x + y$"
      },
      {
        "id": "C",
        "labelLatex": "$x - y$"
      },
      {
        "id": "D",
        "labelLatex": "$1 + xy$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • PT-1 Q.8]** Subtracting $R_1$ from $R_2$ and $R_3$ gives $\\begin{vmatrix} 1 & 1 & 1 \\\\ 0 & x & 0 \\\\ 0 & 0 & y \\end{vmatrix} = xy$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q9",
    "questionNumber": 9,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The roots of the equation $$\\begin{vmatrix} 1 & 4 & 20 \\\\ 1 & -2 & 5 \\\\ 1 & 2x & 5x^2 \\end{vmatrix} = 0$$ are",
    "options": [
      {
        "id": "A",
        "labelLatex": "$x = 2, 1$"
      },
      {
        "id": "B",
        "labelLatex": "$x = 2, -1$"
      },
      {
        "id": "C",
        "labelLatex": "$x = -2, 1$"
      },
      {
        "id": "D",
        "labelLatex": "$x = -2, -1$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • PT-1 Q.9]** Expanding the determinant gives a quadratic in $x$: $-30x^2 + 30x + 60 = 0 \\implies x^2 - x - 2 = 0 \\implies (x-2)(x+1)=0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q10",
    "questionNumber": 10,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $a \\neq b \\neq c$, the value of $x$ (independent of $a, b, c$) which satisfies the equation $$\\begin{vmatrix} 0 & x - a & x - b \\\\ x + a & 0 & x - c \\\\ x + b & x + c & 0 \\end{vmatrix} = 0$$ is:",
    "options": [
      {
        "id": "A",
        "labelLatex": "$x = 0, x = \\pm \\sqrt{\\sum ab}$"
      },
      {
        "id": "B",
        "labelLatex": "$x = 1, x = \\pm \\sqrt{\\sum ab}$"
      },
      {
        "id": "C",
        "labelLatex": "$x = 0, x = \\pm \\sum ab$"
      },
      {
        "id": "D",
        "labelLatex": "$x = 0, x = \\pm \\sqrt{a+b+c}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • PT-1 Q.10]** Expanding the skew-symmetric-like determinant gives $x(x^2 + ab + bc + ca) = 0$, so $x=0$ or $x^2 = -(ab+bc+ca)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q11",
    "questionNumber": 11,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $a + b + c = 0$, then the solution of the equation $$\\begin{vmatrix} a - x & c & b \\\\ c & b - x & a \\\\ b & a & c - x \\end{vmatrix} = 0$$ is:",
    "options": [
      {
        "id": "A",
        "labelLatex": "$x = 0, \\pm \\sqrt{\\frac{3}{2}(a^2 + b^2 + c^2)}$"
      },
      {
        "id": "B",
        "labelLatex": "$x = 0, \\pm \\sqrt{\\frac{1}{2}(a^2 + b^2 + c^2)}$"
      },
      {
        "id": "C",
        "labelLatex": "$x = 1, \\pm \\sqrt{\\frac{3}{2}(a^2 + b^2 + c^2)}$"
      },
      {
        "id": "D",
        "labelLatex": "$x = 0, \\pm \\sqrt{a^2 + b^2 + c^2}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • PT-1 Q.11]** Expanding the determinant and using $a+b+c=0$ leads to $-x(x^2 - \\frac{3}{2}(a^2+b^2+c^2)) = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q12",
    "questionNumber": 12,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $$\\begin{vmatrix} x + 1 & 3 & 5 \\\\ 2 & x + 2 & 5 \\\\ 2 & 3 & x + 4 \\end{vmatrix} = 0$$, then $x =$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1, 9$"
      },
      {
        "id": "B",
        "labelLatex": "$1, -9$"
      },
      {
        "id": "C",
        "labelLatex": "$-1, 9$"
      },
      {
        "id": "D",
        "labelLatex": "$-1, -9$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • PT-1 Q.12]** Using $R_1 \\to R_1 - R_2$ and $R_2 \\to R_2 - R_3$, we factor $(x-1)$ and solve the resulting quadratic $x^2 + 8x - 9 = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q13",
    "questionNumber": 13,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$$\\begin{vmatrix} 1 & a & b \\\\ -a & 1 & c \\\\ -b & -c & 1 \\end{vmatrix} =$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1 + a^2 + b^2 + c^2$"
      },
      {
        "id": "B",
        "labelLatex": "$1 - a^2 - b^2 - c^2$"
      },
      {
        "id": "C",
        "labelLatex": "$1 + a + b + c$"
      },
      {
        "id": "D",
        "labelLatex": "$1 - a - b - c$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • PT-1 Q.13]** Expanding along the first row: $1(1+c^2) - a(-a+bc) + b(ac+b) = 1 + c^2 + a^2 - abc + abc + b^2 = 1 + a^2 + b^2 + c^2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q14",
    "questionNumber": 14,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$$\\begin{vmatrix} 1 & 1 & 1 \\\\ a & b & c \\\\ a^3 & b^3 & c^3 \\end{vmatrix} =$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$(a - b)(b - c)(c - a)(a + b + c)$"
      },
      {
        "id": "B",
        "labelLatex": "$(a - b)(b - c)(c - a)(a - b - c)$"
      },
      {
        "id": "C",
        "labelLatex": "$(a + b)(b + c)(c + a)(a + b + c)$"
      },
      {
        "id": "D",
        "labelLatex": "$(a - b)(b - c)(c - a)(a^2 + b^2 + c^2)$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • PT-1 Q.14]** This is a standard Vandermonde-like determinant: $(a-b)(b-c)(c-a)(a+b+c)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q15",
    "questionNumber": 15,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$$\\begin{vmatrix} 0 & a & -b \\\\ -a & 0 & c \\\\ b & -c & 0 \\end{vmatrix} =$$",
    "correctAnswer": "0",
    "explanationLatex": "**[Determinant • PT-1 Q.15]** This is a skew-symmetric determinant of odd order (3x3), which is always 0.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q16",
    "questionNumber": 16,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$$\\begin{vmatrix} a & b & c \\\\ b & c & a \\\\ c & a & b \\end{vmatrix} =$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$-(a^3 + b^3 + c^3 - 3abc)$"
      },
      {
        "id": "B",
        "labelLatex": "$(a^3 + b^3 + c^3 - 3abc)$"
      },
      {
        "id": "C",
        "labelLatex": "$(a^3 + b^3 + c^3 + 3abc)$"
      },
      {
        "id": "D",
        "labelLatex": "$-(a^3 + b^3 + c^3 + 3abc)$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • PT-2 Q.1]** Expanding the circulant determinant gives $3abc - (a^3 + b^3 + c^3)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q17",
    "questionNumber": 17,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$$\\begin{vmatrix} a + b & a + 2b & a + 3b \\\\ a + 2b & a + 3b & a + 4b \\\\ a + 4b & a + 5b & a + 6b \\end{vmatrix} =$$",
    "correctAnswer": "0",
    "explanationLatex": "**[Determinant • PT-2 Q.2]** Using $R_2 \\to R_2 - R_1$ and $R_3 \\to R_3 - R_2$, the rows become proportional.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q18",
    "questionNumber": 18,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$$\\begin{vmatrix} b + c & a & a \\\\ b & c + a & b \\\\ c & c & a + b \\end{vmatrix} =$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2abc$"
      },
      {
        "id": "B",
        "labelLatex": "$3abc$"
      },
      {
        "id": "C",
        "labelLatex": "$4abc$"
      },
      {
        "id": "D",
        "labelLatex": "$abc$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Determinant • PT-2 Q.3]** Adding $R_2+R_3$ to $R_1$ and factoring out $2(a+b+c)$, then simplifying leads to $4abc$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q19",
    "questionNumber": 19,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The roots of the equation $$\\begin{vmatrix} 1 + x & 1 & 1 \\\\ 1 & 1 + x & 1 \\\\ 1 & 1 & 1 + x \\end{vmatrix} = 0$$ are",
    "options": [
      {
        "id": "A",
        "labelLatex": "$0, 3$"
      },
      {
        "id": "B",
        "labelLatex": "$0, -3$"
      },
      {
        "id": "C",
        "labelLatex": "$1, -3$"
      },
      {
        "id": "D",
        "labelLatex": "$0, 1$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • PT-2 Q.4]** The determinant simplifies to $x^2(x+3) = 0$, so $x=0, -3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q20",
    "questionNumber": 20,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "One of the roots of the given equation $$\\begin{vmatrix} x + a & b & c \\\\ b & x + c & a \\\\ c & a & x + b \\end{vmatrix} = 0$$ is:",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a + b + c$"
      },
      {
        "id": "B",
        "labelLatex": "$-(a + b + c)$"
      },
      {
        "id": "C",
        "labelLatex": "$a^2 + b^2 + c^2$"
      },
      {
        "id": "D",
        "labelLatex": "$-(a^2 + b^2 + c^2)$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • PT-2 Q.5]** Adding $C_2+C_3$ to $C_1$ gives $(x+a+b+c)$ as a factor, so $x = -(a+b+c)$ is a root.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q21",
    "questionNumber": 21,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$$\\begin{vmatrix} x + 1 & x + 2 & x + 4 \\\\ x + 3 & x + 5 & x + 8 \\\\ x + 7 & x + 10 & x + 14 \\end{vmatrix} =$$",
    "correctAnswer": "-2",
    "explanationLatex": "**[Determinant • PT-2 Q.6]** Using $R_2 \\to R_2 - R_1$ and $R_3 \\to R_3 - R_2$, the determinant simplifies to a constant value of -2.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q22",
    "questionNumber": 22,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$$\\begin{vmatrix} 1/a & a^2 & bc \\\\ 1/b & b^2 & ca \\\\ 1/c & c^2 & ab \\end{vmatrix} =$$",
    "correctAnswer": "0",
    "explanationLatex": "**[Determinant • PT-2 Q.7]** Multiplying $R_1, R_2, R_3$ by $a, b, c$ respectively, the third column becomes $abc$ and the first column becomes $1, 1, 1$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q23",
    "questionNumber": 23,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$$\\begin{vmatrix} b^2 + c^2 & a^2 & a^2 \\\\ b^2 & c^2 + a^2 & b^2 \\\\ c^2 & c^2 & a^2 + b^2 \\end{vmatrix} =$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2a^2b^2c^2$"
      },
      {
        "id": "B",
        "labelLatex": "$4a^2b^2c^2$"
      },
      {
        "id": "C",
        "labelLatex": "$a^2b^2c^2$"
      },
      {
        "id": "D",
        "labelLatex": "$8a^2b^2c^2$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • PT-2 Q.8]** Factoring out $2$ from rows and simplifying leads to $4a^2b^2c^2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q24",
    "questionNumber": 24,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$$\\begin{vmatrix} 1 + x & 1 & 1 \\\\ 1 & 1 + y & 1 \\\\ 1 & 1 & 1 + z \\end{vmatrix} =$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$xyz$"
      },
      {
        "id": "B",
        "labelLatex": "$xyz(1 + x + y + z)$"
      },
      {
        "id": "C",
        "labelLatex": "$xyz(1 + 1/x + 1/y + 1/z)$"
      },
      {
        "id": "D",
        "labelLatex": "$1 + x + y + z$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Determinant • PT-2 Q.9]** Factoring $x, y, z$ from columns gives $xyz \\begin{vmatrix} 1/x + 1 & 1/y & 1/z \\\\ 1/x & 1/y + 1 & 1/z \\\\ 1/x & 1/y & 1/z + 1 \\end{vmatrix} = xyz(1 + 1/x + 1/y + 1/z)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q25",
    "questionNumber": 25,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $$\\begin{vmatrix} y + z & x & y \\\\ z + x & z & x \\\\ x + y & y & z \\end{vmatrix} = k(x + y + z)(x - z)^2$$, then $k =$",
    "correctAnswer": "1",
    "explanationLatex": "**[Determinant • PT-2 Q.10]** Expanding the determinant and comparing coefficients shows $k=1$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q26",
    "questionNumber": 26,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $-9$ is a root of the equation $$\\begin{vmatrix} x & 3 & 7 \\\\ 2 & x & 2 \\\\ 7 & 6 & x \\end{vmatrix} = 0$$, then the other two roots are:",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2, 7$"
      },
      {
        "id": "B",
        "labelLatex": "$1, 7$"
      },
      {
        "id": "C",
        "labelLatex": "$2, 5$"
      },
      {
        "id": "D",
        "labelLatex": "$3, 7$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • PT-2 Q.11]** The characteristic equation is $(x+9)(x-2)(x-7) = 0$, so the other roots are $2, 7$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q27",
    "questionNumber": 27,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $a, b, c$ are unequal what is the condition that the value of the following determinant is zero $$\\Delta = \\begin{vmatrix} a & a^2 & a^3 + 1 \\\\ b & b^2 & b^3 + 1 \\\\ c & c^2 & c^3 + 1 \\end{vmatrix}$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$abc = 1$"
      },
      {
        "id": "B",
        "labelLatex": "$abc = -1$"
      },
      {
        "id": "C",
        "labelLatex": "$abc = 0$"
      },
      {
        "id": "D",
        "labelLatex": "$abc = 2$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • PT-2 Q.12]** The determinant is $(a-b)(b-c)(c-a)(1+abc) = 0$. Since $a, b, c$ are unequal, $1+abc=0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q28",
    "questionNumber": 28,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "The value of the determinant $$\\begin{vmatrix} 1 & a & b + c \\\\ 1 & b & c + a \\\\ 1 & c & a + b \\end{vmatrix}$$ is:",
    "correctAnswer": "0",
    "explanationLatex": "**[Determinant • PT-2 Q.13]** Adding $C_2$ to $C_3$ makes the third column $(a+b+c, a+b+c, a+b+c)^T$, which is a multiple of the first column.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q29",
    "questionNumber": 29,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $a, b$ and $c$ are non zero numbers, then $$\\Delta = \\begin{vmatrix} b^2c^2 & bc & b + c \\\\ c^2a^2 & ca & c + a \\\\ a^2b^2 & ab & a + b \\end{vmatrix}$$ is equal to:",
    "correctAnswer": "0",
    "explanationLatex": "**[Determinant • PT-2 Q.14]** Multiplying $R_1, R_2, R_3$ by $a, b, c$ and dividing by $abc$ shows the determinant is 0.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q30",
    "questionNumber": 30,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $$\\begin{vmatrix} 1 & k & 3 \\\\ 3 & k & -2 \\\\ 2 & 3 & -1 \\end{vmatrix} = 0$$, then the value of $k$ is:",
    "correctAnswer": "338",
    "explanationLatex": "**[Determinant • PT-2 Q.15]** Expanding along the second column: $-k(-3+4) + k(-1-6) - 3(-2-9) = 0 \\implies -k - 7k + 33 = 0 \\implies 8k = 33$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q31",
    "questionNumber": 31,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $\\Delta = \\begin{vmatrix} a & b & c \\\\ x & y & z \\\\ p & q & r \\end{vmatrix}$, then $\\begin{vmatrix} ka & kb & kc \\\\ kx & ky & kz \\\\ kp & kq & kr \\end{vmatrix} =$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$k\\Delta$"
      },
      {
        "id": "B",
        "labelLatex": "$k^2\\Delta$"
      },
      {
        "id": "C",
        "labelLatex": "$k^3\\Delta$"
      },
      {
        "id": "D",
        "labelLatex": "$3k\\Delta$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Determinant • PT-3 Q.1]** Multiplying each of the three rows by $k$ results in the determinant being multiplied by $k \\times k \\times k = k^3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q32",
    "questionNumber": 32,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $\\begin{vmatrix} x^2 + x & x + 1 & x - 2 \\\\ 2x^2 + 3x - 1 & 3x & 3x - 3 \\\\ x^2 + 2x + 3 & 2x - 1 & 2x - 1 \\end{vmatrix} = Ax - 12$, then the value of $A$ is :",
    "correctAnswer": "24",
    "explanationLatex": "**[Determinant • PT-3 Q.2]** Differentiating both sides with respect to $x$ and substituting $x=0$ gives $A = \\begin{vmatrix} 1 & 1 & -2 \\\\ 3 & 3 & -3 \\\\ 2 & -1 & -1 \\end{vmatrix} + \\begin{vmatrix} 0 & 1 & 0 \\\\ -1 & 0 & 3 \\\\ 3 & 0 & 2 \\end{vmatrix} + \\begin{vmatrix} 0 & 1 & -2 \\\\ -1 & 3 & -3 \\\\ 3 & 2 & 0 \\end{vmatrix} = 24$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q33",
    "questionNumber": 33,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The roots of the equation $\\begin{vmatrix} 3 - x & -6 & 3 \\\\ -6 & 3 - x & 3 \\\\ 3 & 3 & -6 - x \\end{vmatrix} = 0$ are :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\{0, 3, 6\\}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\{-9, 0, 9\\}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\{0, 9, 18\\}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\{-9, 3, 6\\}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • PT-3 Q.3]** Applying $C_1 \\to C_1 + C_2 + C_3$ gives $-x$ as a common factor, and further expansion yields roots $0, 9, -9$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q34",
    "questionNumber": 34,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$\\begin{vmatrix} \\sin^2 x & \\cos^2 x & 1 \\\\ \\cos^2 x & \\sin^2 x & 1 \\\\ -10 & 12 & 2 \\end{vmatrix} =$",
    "correctAnswer": "0",
    "explanationLatex": "**[Determinant • PT-3 Q.4]** Applying $C_1 \\to C_1 + C_2$ makes $C_1 = [1, 1, 2]^T$, which is identical to $C_3$, hence the determinant is $0$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q35",
    "questionNumber": 35,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $D_p = \\begin{vmatrix} p & 15 & 8 \\\\ p^2 & 35 & 9 \\\\ p^3 & 25 & 10 \\end{vmatrix}$, then $D_1 + D_2 + D_3 + D_4 + D_5 =$",
    "correctAnswer": "-28000",
    "explanationLatex": "**[Determinant • PT-3 Q.5]** The sum $\\sum_{p=1}^5 D_p = \\begin{vmatrix} \\sum p & 15 & 8 \\\\ \\sum p^2 & 35 & 9 \\\\ \\sum p^3 & 25 & 10 \\end{vmatrix} = \\begin{vmatrix} 15 & 15 & 8 \\\\ 55 & 35 & 9 \\\\ 225 & 25 & 10 \\end{vmatrix} = -28000$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q36",
    "questionNumber": 36,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $\\begin{vmatrix} 4 & 1 \\\\ 2 & 1 \\end{vmatrix}^2 = \\begin{vmatrix} 3 & 2 \\\\ 1 & x \\end{vmatrix} - \\begin{vmatrix} x & 3 \\\\ -2 & 1 \\end{vmatrix}$, then $x =$",
    "correctAnswer": "6",
    "explanationLatex": "**[Determinant • PT-3 Q.6]** Evaluating the determinants: $(4-2)^2 = (3x-2) - (x+6) \\Rightarrow 4 = 2x - 8 \\Rightarrow 2x = 12 \\Rightarrow x = 6$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q37",
    "questionNumber": 37,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $a, b, c$ are in A.P., then the value of $\\begin{vmatrix} x+2 & x+3 & x+a \\\\ x+4 & x+5 & x+b \\\\ x+6 & x+7 & x+c \\end{vmatrix}$ is :",
    "correctAnswer": "0",
    "explanationLatex": "**[Determinant • PT-3 Q.7]** Applying $R_1 + R_3 - 2R_2$ and using $a+c=2b$ (since $a,b,c$ are in A.P.) makes the first row zero.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q38",
    "questionNumber": 38,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $\\Delta = \\begin{vmatrix} x & y & z \\\\ p & q & r \\\\ a & b & c \\end{vmatrix}$, then $\\begin{vmatrix} x & 2y & z \\\\ 2p & 4q & 2r \\\\ a & 2b & c \\end{vmatrix}$ equals",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\Delta$"
      },
      {
        "id": "B",
        "labelLatex": "$2\\Delta$"
      },
      {
        "id": "C",
        "labelLatex": "$4\\Delta$"
      },
      {
        "id": "D",
        "labelLatex": "$8\\Delta$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Determinant • PT-3 Q.8]** Taking factor 2 out from $C_2$ and factor 2 out from $R_2$ gives $2 \\times 2 \\times \\Delta = 4\\Delta$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q39",
    "questionNumber": 39,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $\\begin{vmatrix} a & b & c \\\\ m & n & p \\\\ x & y & z \\end{vmatrix} = k$, then $\\begin{vmatrix} 6a & 2b & 2c \\\\ 3m & n & p \\\\ 3x & y & z \\end{vmatrix} =$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$k$"
      },
      {
        "id": "B",
        "labelLatex": "$2k$"
      },
      {
        "id": "C",
        "labelLatex": "$3k$"
      },
      {
        "id": "D",
        "labelLatex": "$6k$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Determinant • PT-3 Q.9]** Taking factor 2 out from $R_1$ and factor 3 out from $C_1$ gives $2 \\times 3 \\times k = 6k$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q40",
    "questionNumber": 40,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $\\begin{vmatrix} a_1 & b_1 & c_1 \\\\ a_2 & b_2 & c_2 \\\\ a_3 & b_3 & c_3 \\end{vmatrix} = 5$; then the value of $\\begin{vmatrix} b_2c_3 - b_3c_2 & c_2a_3 - c_3a_2 & a_2b_3 - a_3b_2 \\\\ b_3c_1 - b_1c_3 & c_3a_1 - c_1a_3 & a_3b_1 - a_1b_3 \\\\ b_1c_2 - b_2c_1 & c_1a_2 - c_2a_1 & a_1b_2 - a_2b_1 \\end{vmatrix}$ is :",
    "correctAnswer": "25",
    "explanationLatex": "**[Determinant • PT-3 Q.10]** The second determinant is the determinant of the cofactor matrix of the first, which equals $\\Delta^{n-1} = 5^{3-1} = 25$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q41",
    "questionNumber": 41,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $\\begin{vmatrix} (b+c)^2 & a^2 & a^2 \\\\ b^2 & (c+a)^2 & b^2 \\\\ c^2 & c^2 & (a+b)^2 \\end{vmatrix} = kabc(a+b+c)^3$, then the value of $k$ is :",
    "correctAnswer": "2",
    "explanationLatex": "**[Determinant • PT-3 Q.11]** This is a standard identity where the determinant evaluates to $2abc(a+b+c)^3$, hence $k=2$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q42",
    "questionNumber": 42,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $A, B, C$ be the angles of a triangle, then $\\begin{vmatrix} -1 & \\cos C & \\cos B \\\\ \\cos C & -1 & \\cos A \\\\ \\cos B & \\cos A & -1 \\end{vmatrix} =$",
    "correctAnswer": "0",
    "explanationLatex": "**[Determinant • PT-3 Q.12]** Expansion gives $-(1 - \\cos^2 A) + \\cos C(-\\cos C - \\cos A \\cos B) + \\cos B(\\cos A \\cos C + \\cos B) = -\\sin^2 A - \\cos^2 C - \\cos^2 B - 2\\cos A \\cos B \\cos C = 0$ for a triangle.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q43",
    "questionNumber": 43,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "$\\begin{vmatrix} (a^x + a^{-x})^2 & (a^x - a^{-x})^2 & 1 \\\\ (b^x + b^{-x})^2 & (b^x - b^{-x})^2 & 1 \\\\ (c^x + c^{-x})^2 & (c^x - c^{-x})^2 & 1 \\end{vmatrix} =$",
    "correctAnswer": "0",
    "explanationLatex": "**[Determinant • PT-3 Q.13]** Using $(p+q)^2 - (p-q)^2 = 4pq$, applying $C_1 \\to C_1 - C_2$ results in $C_1 = [4, 4, 4]^T$, which is $4 \\times C_3$, making the determinant $0$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q44",
    "questionNumber": 44,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "The value of the determinant $\\begin{vmatrix} 1 & \\cos(\\alpha - \\beta) & \\cos \\alpha \\\\ \\cos(\\alpha - \\beta) & 1 & \\cos \\beta \\\\ \\cos \\alpha & \\cos \\beta & 1 \\end{vmatrix}$ is :",
    "correctAnswer": "0",
    "explanationLatex": "**[Determinant • PT-3 Q.14]** The determinant can be expressed as the product of two matrices with zero rows/columns or expanded to show it vanishes identically.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q45",
    "questionNumber": 45,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $\\begin{vmatrix} y+z & x-z & x-y \\\\ y-z & z+x & y-x \\\\ z-y & z-x & x+y \\end{vmatrix} = kxyz$, then the value of $k$ is :",
    "correctAnswer": "8",
    "explanationLatex": "**[Determinant • PT-3 Q.15]** Substituting $x=y=z=1$ gives $\\begin{vmatrix} 2 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 2 \\end{vmatrix} = k(1)(1)(1) \\Rightarrow 8 = k$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p1-q46",
    "questionNumber": 46,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Prove that the value of the determinant $$\\begin{vmatrix} -7 & 5+3i & \\frac{2}{3}-4i \\\\ 5-3i & 8 & \\frac{3}{3}+4i \\\\ \\frac{2}{3}+4i & 4-5i & 9 \\end{vmatrix}$$ is real.",
    "options": [
      {
        "id": "A",
        "labelLatex": "The determinant is purely imaginary."
      },
      {
        "id": "B",
        "labelLatex": "The determinant is complex with non-zero imaginary part."
      },
      {
        "id": "C",
        "labelLatex": "The determinant is a real number."
      },
      {
        "id": "D",
        "labelLatex": "The determinant value is zero."
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Determinant • EX-I Q.1(a)]** A Hermitian determinant with real elements on the principal diagonal and conjugate symmetric off-diagonal elements is always real.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q47",
    "questionNumber": 47,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Prove that the value of the determinant $$\\begin{vmatrix} 1 & a & a^2-bc \\\\ 1 & b & b^2-ca \\\\ 1 & c & c^2-ab \\end{vmatrix} = 0$$",
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
        "labelLatex": "a + b + c"
      },
      {
        "id": "D",
        "labelLatex": "abc"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-I Q.1(b)]** Applying $R_2 \\to R_2 - R_1$ and $R_3 \\to R_3 - R_1$ and expanding yields identically zero.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q48",
    "questionNumber": 48,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "On which one of the parameter out of a, p, d or x, the value of the determinant $$\\begin{vmatrix} 1 & a & a^2 \\\\ \\cos(p-d)x & \\cos px & \\cos(p+d)x \\\\ \\sin(p-d)x & \\sin px & \\sin(p+d)x \\end{vmatrix}$$ does not depend.",
    "options": [
      {
        "id": "A",
        "labelLatex": "a"
      },
      {
        "id": "B",
        "labelLatex": "x"
      },
      {
        "id": "C",
        "labelLatex": "p"
      },
      {
        "id": "D",
        "labelLatex": "d"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Determinant • EX-I Q.1(c)]** Simplifying the trigonometric terms shows the determinant evaluates to an expression independent of p.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q49",
    "questionNumber": 49,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Without expanding as far as possible, prove that $$\\begin{vmatrix} a^2+2a & 2a+1 & 1 \\\\ 2a+1 & a+2 & 1 \\\\ 3 & 3 & 1 \\end{vmatrix} = (a-1)^3(b) \\begin{vmatrix} 1 & 1 & 1 \\\\ x & y & z \\\\ x^3 & y^3 & z^3 \\end{vmatrix} = [(x-y)(y-z)(z-x)(x+y+z)]$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "Identity holds identically for all parameters."
      },
      {
        "id": "B",
        "labelLatex": "Identity holds only when a = 1."
      },
      {
        "id": "C",
        "labelLatex": "Identity is false."
      },
      {
        "id": "D",
        "labelLatex": "Identity holds only when x = y = z."
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-I Q.2(a)]** Using row and column transformations and factor theorem confirms the identity.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p1-q50",
    "questionNumber": 50,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $$\\begin{vmatrix} x^3+1 & x^2 & x \\\\ y^3+1 & y^2 & y \\\\ z^3+1 & z^2 & z \\end{vmatrix} = 0$$ and $x,y,z$ are all different then, prove that $xyz = -1$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "xyz = 1"
      },
      {
        "id": "B",
        "labelLatex": "xyz = -1"
      },
      {
        "id": "C",
        "labelLatex": "xyz = 0"
      },
      {
        "id": "D",
        "labelLatex": "xyz = 2"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-I Q.3]** Splitting the determinant and factoring out Vandermonde determinant yields $xyz + 1 = 0$, so $xyz = -1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  }
];
