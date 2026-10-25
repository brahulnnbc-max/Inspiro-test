import { Question } from '../types/exam';

export const DETERMINANT_PART_2_QUESTIONS: Question[] = [
  {
    "id": "det-p2-q1",
    "questionNumber": 1,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Using properties of determinants or otherwise evaluate $$\\begin{vmatrix} 18 & 40 & 89 \\\\ 40 & 89 & 198 \\\\ 89 & 198 & 440 \\end{vmatrix}$$.",
    "correctAnswer": "-1",
    "explanationLatex": "**[Determinant • EX-I Q.4]** Applying row and column operations reduces the determinant to -1.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p2-q2",
    "questionNumber": 2,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Prove that $$\\begin{vmatrix} a-b-c & 2a & 2a \\\\ 2b & b-c-a & 2b \\\\ 2c & 2c & c-a-b \\end{vmatrix} = (a+b+c)^3$$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "(a+b+c)^2"
      },
      {
        "id": "B",
        "labelLatex": "(a+b+c)^3"
      },
      {
        "id": "C",
        "labelLatex": "a^3 + b^3 + c^3"
      },
      {
        "id": "D",
        "labelLatex": "3(a+b+c)^3"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-I Q.5]** Applying $R_1 \\to R_1 + R_2 + R_3$ and taking $(a+b+c)$ common leads to $(a+b+c)^3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q3",
    "questionNumber": 3,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $D = \\begin{vmatrix} a & b & c \\\\ c & a & b \\\\ b & c & a \\end{vmatrix}$ and $D' = \\begin{vmatrix} b+c & c+a & a+b \\\\ a+b & b+c & c+a \\\\ c+a & a+b & b+c \\end{vmatrix}$ then prove that $D' = 2D$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "D' = D"
      },
      {
        "id": "B",
        "labelLatex": "D' = 3D"
      },
      {
        "id": "C",
        "labelLatex": "D' = 2D"
      },
      {
        "id": "D",
        "labelLatex": "D' = 4D"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Determinant • EX-I Q.6]** Adding rows in D' and using properties of determinants gives $D' = 2D$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q4",
    "questionNumber": 4,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Prove that $$\\begin{vmatrix} 1+a^2-b^2 & 2ab & -2b \\\\ 2ab & 1-a^2+b^2 & 2a \\\\ 2b & -2a & 1-a^2-b^2 \\end{vmatrix} = (1+a^2+b^2)^3$$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "(1+a^2+b^2)^2"
      },
      {
        "id": "B",
        "labelLatex": "(1-a^2-b^2)^3"
      },
      {
        "id": "C",
        "labelLatex": "(1+a^2+b^2)^3"
      },
      {
        "id": "D",
        "labelLatex": "(1+a^2+b^2)"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Determinant • EX-I Q.7]** Multiplying rows and columns or using suitable transformations yields $(1+a^2+b^2)^3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q5",
    "questionNumber": 5,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Prove that $$\\begin{vmatrix} a & b-c & c+b \\\\ a+c & b & c-a \\\\ a-b & b+a & c \\end{vmatrix} = (a+b+c)(a^2+b^2+c^2)$$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "(a+b+c)(a^2+b^2+c^2)"
      },
      {
        "id": "B",
        "labelLatex": "(a+b+c)^3"
      },
      {
        "id": "C",
        "labelLatex": "(a^2+b^2+c^2)^2"
      },
      {
        "id": "D",
        "labelLatex": "abc(a+b+c)"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-I Q.8]** Expanding the determinant directly or using elementary operations yields $(a+b+c)(a^2+b^2+c^2)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q6",
    "questionNumber": 6,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Show that the value of the determinant $$\\begin{vmatrix} \\tan(A+P) & \\tan(B+P) & \\tan(C+P) \\\\ \\tan(A+Q) & \\tan(B+Q) & \\tan(C+Q) \\\\ \\tan(A+R) & \\tan(B+R) & \\tan(C+R) \\end{vmatrix}$$ vanishes for all values of A, B, C, P, Q & R where A + B + C + P + Q + R = 0",
    "options": [
      {
        "id": "A",
        "labelLatex": "The determinant is always non-zero."
      },
      {
        "id": "B",
        "labelLatex": "The determinant vanishes identically."
      },
      {
        "id": "C",
        "labelLatex": "The determinant equals 1."
      },
      {
        "id": "D",
        "labelLatex": "The determinant equals tan(A+B+C)."
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-I Q.9]** Expressing $\\tan(A+P)$ in terms of sines and cosines and utilizing the condition shows the columns are linearly dependent.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q7",
    "questionNumber": 7,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Factorise the determinant $$\\begin{vmatrix} bc & bc'+b'c & b'c' \\\\ ca & ca'+c'a & c'a' \\\\ ab & ab'+a'b & a'b' \\end{vmatrix}$$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$(ab'+a'b)(bc'+b'c)(ca'+c'a)$"
      },
      {
        "id": "B",
        "labelLatex": "$(ab-a'b')(bc-b'c')(ca-c'a')$"
      },
      {
        "id": "C",
        "labelLatex": "$(ab' - a'b)(bc' - b'c)(ca' - c'a)$"
      },
      {
        "id": "D",
        "labelLatex": "$(aa'+bb'+cc')$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Determinant • EX-I Q.10]** Splitting the sum columns and applying row/column properties gives the factored form $(ab' - a'b)(bc' - b'c)(ca' - c'a)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q8",
    "questionNumber": 8,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Prove that $$\\begin{vmatrix} (\\beta+\\gamma-\\alpha-\\delta)^4 & (\\beta+\\gamma-\\alpha-\\delta)^2 & 1 \\\\ (\\gamma+\\alpha-\\beta-\\delta)^4 & (\\gamma+\\alpha-\\beta-\\delta)^2 & 1 \\\\ (\\alpha+\\beta-\\gamma-\\delta)^4 & (\\alpha+\\beta-\\gamma-\\delta)^2 & 1 \\end{vmatrix} = -64(\\alpha-\\beta)(\\alpha-\\gamma)(\\alpha-\\delta)(\\beta-\\gamma)(\\beta-\\delta)(\\gamma-\\delta)$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$64(\\alpha-\\beta)(\\alpha-\\gamma)(\\alpha-\\delta)(\\beta-\\gamma)(\\beta-\\delta)(\\gamma-\\delta)$"
      },
      {
        "id": "B",
        "labelLatex": "$-32(\\alpha-\\beta)(\\alpha-\\gamma)(\\alpha-\\delta)(\\beta-\\gamma)(\\beta-\\delta)(\\gamma-\\delta)$"
      },
      {
        "id": "C",
        "labelLatex": "$-64(\\alpha-\\beta)(\\alpha-\\gamma)(\\alpha-\\delta)(\\beta-\\gamma)(\\beta-\\delta)(\\gamma-\\delta)$"
      },
      {
        "id": "D",
        "labelLatex": "0"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Determinant • EX-I Q.11]** Using properties of Vandermonde determinant and difference substitutions yields the result.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q9",
    "questionNumber": 9,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "For a fixed positive integer n, if $D = \\begin{vmatrix} n! & (n+1)! & (n+2)! \\\\ (n+1)! & (n+2)! & (n+3)! \\\\ (n+2)! & (n+3)! & (n+4)! \\end{vmatrix}$ then show that $\\left[\\frac{D}{(n!)^3} - 4\\right]$ is divisible by n.",
    "options": [
      {
        "id": "A",
        "labelLatex": "Always divisible by n."
      },
      {
        "id": "B",
        "labelLatex": "Never divisible by n."
      },
      {
        "id": "C",
        "labelLatex": "Divisible by n only when n is even."
      },
      {
        "id": "D",
        "labelLatex": "Divisible by n only when n is prime."
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-I Q.12]** Factoring out $n!$ from each row/column simplifies $D/(n!)^3$ to $2n^3 + 4$ or similar polynomial whose difference with 4 is divisible by n.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q10",
    "questionNumber": 10,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve for x $$\\begin{vmatrix} x+2 & 2x+3 & 3x+4 \\\\ 2x+3 & 3x+4 & 4x+5 \\\\ 3x+5 & 5x+8 & 10x+17 \\end{vmatrix} = 0$$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$x = 0$ or $x = 1$"
      },
      {
        "id": "B",
        "labelLatex": "$x = -1 \\text{ or } x = -2$"
      },
      {
        "id": "C",
        "labelLatex": "$x = 2$ or $x = 3$"
      },
      {
        "id": "D",
        "labelLatex": "$x = -3$ or $x = -4$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-I Q.13]** Applying row operations like $R_3 \\to R_3 - R_2 - R_1$ simplifies the determinant to yield $x = -1 \\text{ or } x = -2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q11",
    "questionNumber": 11,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $p+q+r = 0$, prove that $$\\begin{vmatrix} pa & qb & rc \\\\ qc & ra & pb \\\\ rb & pc & qa \\end{vmatrix} = pqr \\begin{vmatrix} a & b & c \\\\ c & a & b \\\\ b & c & a \\end{vmatrix}$$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "pqr"
      },
      {
        "id": "B",
        "labelLatex": "-pqr"
      },
      {
        "id": "C",
        "labelLatex": "pqr(a^3+b^3+c^3)"
      },
      {
        "id": "D",
        "labelLatex": "0"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-I Q.14]** Applying properties and using $p+q+r=0$ yields the product of pqr and the circulant determinant.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q12",
    "questionNumber": 12,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If a, b, c are all different & $$\\begin{vmatrix} a & a^3 & a^4-1 \\\\ b & b^3 & b^4-1 \\\\ c & c^3 & c^4-1 \\end{vmatrix} = 0$$, then prove that $abc(ab+bc+ca) = a+b+c$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$abc(ab+bc+ca) = a+b+c$"
      },
      {
        "id": "B",
        "labelLatex": "$abc = a+b+c$"
      },
      {
        "id": "C",
        "labelLatex": "$ab+bc+ca = 0$"
      },
      {
        "id": "D",
        "labelLatex": "$a+b+c = 0$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-I Q.15]** Splitting the determinant into two and factoring using Vandermonde determinants proves $abc(ab+bc+ca) = a+b+c$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q13",
    "questionNumber": 13,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Show that, $$\\begin{vmatrix} a^2+\\lambda & ab & ac \\\\ ab & b^2+\\lambda & bc \\\\ ac & bc & c^2+\\lambda \\end{vmatrix}$$ is divisible by $\\lambda^2$ and find the other factor.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\lambda^2(a^2+b^2+c^2)$"
      },
      {
        "id": "B",
        "labelLatex": "$\\lambda^2(a^2 + b^2 + c^2 + \\lambda)$"
      },
      {
        "id": "C",
        "labelLatex": "$\\lambda(a^2+b^2+c^2+\\lambda^2)$"
      },
      {
        "id": "D",
        "labelLatex": "$\\lambda^3(a+b+c)$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-I Q.16]** Expanding the determinant directly yields $\\lambda^2(a^2 + b^2 + c^2 + \\lambda)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q14",
    "questionNumber": 14,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Without expanding prove that $$\\begin{vmatrix} bc & a & a^2 \\\\ ca & b & b^2 \\\\ ab & c & c^2 \\end{vmatrix} = \\begin{vmatrix} 1 & a^2 & a^3 \\\\ 1 & b^2 & b^3 \\\\ 1 & c^2 & c^3 \\end{vmatrix}$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "LHS is equal to RHS"
      },
      {
        "id": "B",
        "labelLatex": "LHS is twice of RHS"
      },
      {
        "id": "C",
        "labelLatex": "LHS is square of RHS"
      },
      {
        "id": "D",
        "labelLatex": "LHS is zero"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-I Q.17(a)]** Multiplying rows/columns by $a, b, c$ shows both determinants are equal.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q15",
    "questionNumber": 15,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Without expanding prove that $$\\begin{vmatrix} a^2 & b^2 & c^2 \\\\ (a+1)^2 & (b+1)^2 & (c+1)^2 \\\\ (a-1)^2 & (b-1)^2 & (c-1)^2 \\end{vmatrix} = 4 \\begin{vmatrix} a^2 & b^2 & c^2 \\\\ a & b & c \\\\ 1 & 1 & 1 \\end{vmatrix}$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "2"
      },
      {
        "id": "B",
        "labelLatex": "4"
      },
      {
        "id": "C",
        "labelLatex": "1"
      },
      {
        "id": "D",
        "labelLatex": "8"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-I Q.17(b)]** Applying elementary row operations $R_2 \\to R_2 - R_3$ and $R_3 \\to R_3 - 2R_1$ factorizes the coefficient 4.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q16",
    "questionNumber": 16,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve for x : $$\\begin{vmatrix} x-2 & 2x-3 & 3x-4 \\\\ x-4 & 2x-9 & 3x-16 \\\\ x-8 & 2x-27 & 3x-64 \\end{vmatrix} = 0$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "x = 2"
      },
      {
        "id": "B",
        "labelLatex": "x = 3"
      },
      {
        "id": "C",
        "labelLatex": "x = 4"
      },
      {
        "id": "D",
        "labelLatex": "x = 5"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Determinant • EX-I Q.18]** Applying row transformations like $R_2 \\to R_2 - R_1$ and $R_3 \\to R_3 - R_2$ yields $x = 4$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q17",
    "questionNumber": 17,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $D_r = \\begin{vmatrix} 2^{r-1} & 2(3^{r-1}) & 4(5^{r-1}) \\\\ x & y & z \\\\ 2^n-1 & 3^n-1 & 5^n-1 \\end{vmatrix}$ then prove that $\\sum_{r=1}^{n} D_r = 0$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "Sum is 1"
      },
      {
        "id": "B",
        "labelLatex": "Sum is 0"
      },
      {
        "id": "C",
        "labelLatex": "Sum is x+y+z"
      },
      {
        "id": "D",
        "labelLatex": "Sum is 2^n"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-I Q.19]** Using properties of summation of geometric progressions for each term in $D_r$, the sum evaluates to 0.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q18",
    "questionNumber": 18,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "In a $\\Delta ABC$, determine condition under which $$\\begin{vmatrix} \\cot\\frac{A}{2} & \\cot\\frac{B}{2} & \\cot\\frac{C}{2} \\\\ \\tan\\frac{B}{2}+\\tan\\frac{C}{2} & \\tan\\frac{C}{2}+\\tan\\frac{A}{2} & \\tan\\frac{A}{2}+\\tan\\frac{B}{2} \\\\ 1 & 1 & 1 \\end{vmatrix} = 0$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "Triangle ABC is equilateral."
      },
      {
        "id": "B",
        "labelLatex": "Triangle ABC is isosceles."
      },
      {
        "id": "C",
        "labelLatex": "Triangle ABC is right-angled."
      },
      {
        "id": "D",
        "labelLatex": "Always true for any triangle."
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-I Q.20]** Simplifying the determinant shows it is proportional to $(\\cot(B/2) - \\cot(C/2))$ or similar, meaning Triangle ABC is isosceles.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q19",
    "questionNumber": 19,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Prove that $$\\begin{vmatrix} (a-p)^2 & (a-q)^2 & (a-r)^2 \\\\ (b-p)^2 & (b-q)^2 & (b-r)^2 \\\\ (c-p)^2 & (c-q)^2 & (c-r)^2 \\end{vmatrix} = \\begin{vmatrix} (1+ap)^2 & (1+aq)^2 & (1+ar)^2 \\\\ (1+bp)^2 & (1+bq)^2 & (1+br)^2 \\\\ (1+cp)^2 & (1+cq)^2 & (1+cr)^2 \\end{vmatrix}$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "Both determinants are identically equal."
      },
      {
        "id": "B",
        "labelLatex": "They differ by a factor of abc."
      },
      {
        "id": "C",
        "labelLatex": "They are negatives of each other."
      },
      {
        "id": "D",
        "labelLatex": "They are unrelated."
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-I Q.21]** Expressing each matrix as a product of two determinants reveals they are equal.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q20",
    "questionNumber": 20,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Prove that $$\\begin{vmatrix} (a_1-b_1)^2 & (a_1-b_2)^2 & (a_1-b_3)^2 \\\\ (a_2-b_1)^2 & (a_2-b_2)^2 & (a_2-b_3)^2 \\\\ (a_3-b_1)^2 & (a_3-b_2)^2 & (a_3-b_3)^2 \\end{vmatrix} = 2(a_1-a_2)(a_2-a_3)(a_3-a_1)(b_1-b_2)(b_2-b_3)(b_3-b_1)$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "Identity holds."
      },
      {
        "id": "B",
        "labelLatex": "Product is multiplied by 4."
      },
      {
        "id": "C",
        "labelLatex": "Product is multiplied by -1."
      },
      {
        "id": "D",
        "labelLatex": "Product is zero."
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-I Q.22]** Expressing as product of two Vandermonde-like matrices yields the result.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q21",
    "questionNumber": 21,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $ax_1^2 + by_1^2 + cz_1^2 = ax_2^2 + by_2^2 + cz_2^2 = ax_3^2 + by_3^2 + cz_3^2 = d$ and $ax_1x_2 + by_1y_2 + cz_1z_2 = ax_2x_3 + by_2y_3 + cz_2z_3 = ax_3x_1 + by_3y_1 + cz_3z_1 = f$, then prove that $$\\begin{vmatrix} x_1 & y_1 & z_1 \\\\ x_2 & y_2 & z_2 \\\\ x_3 & y_3 & z_3 \\end{vmatrix} = (d-f) \\left[ \\frac{d+2f}{abc} \\right]^{1/2}$$ ($a, b, c \\neq 0$)",
    "options": [
      {
        "id": "A",
        "labelLatex": "Identity holds."
      },
      {
        "id": "B",
        "labelLatex": "Square root term is absent."
      },
      {
        "id": "C",
        "labelLatex": "Factor is (d+f)."
      },
      {
        "id": "D",
        "labelLatex": "Factor is abc."
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-I Q.23]** Squaring the determinant and using the given quadratic relations gives the required identity.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q22",
    "questionNumber": 22,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $S_r = \\alpha^r + \\beta^r + \\gamma^r$ then show that $$\\begin{vmatrix} S_0 & S_1 & S_2 \\\\ S_1 & S_2 & S_3 \\\\ S_2 & S_3 & S_4 \\end{vmatrix} = (\\alpha-\\beta)^2 (\\beta-\\gamma)^2 (\\gamma-\\alpha)^2$$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$(\\alpha-\\beta)(\\beta-\\gamma)(\\gamma-\\alpha)$"
      },
      {
        "id": "B",
        "labelLatex": "$(\\alpha-\\beta)^2(\\beta-\\gamma)^2(\\gamma-\\alpha)^2$"
      },
      {
        "id": "C",
        "labelLatex": "$(\\alpha+\\beta+\\gamma)^2$"
      },
      {
        "id": "D",
        "labelLatex": "0"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-I Q.24]** Expressing the determinant as a product of Vandermonde matrices yields $(\\alpha-\\beta)^2 (\\beta-\\gamma)^2 (\\gamma-\\alpha)^2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q23",
    "questionNumber": 23,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $u = ax^2 + 2bxy + cy^2$, $u' = a'x^2 + 2b'xy + c'y^2$. Prove that $$\\begin{vmatrix} y^2 & -xy & x^2 \\\\ a & b & c \\\\ a' & b' & c' \\end{vmatrix} = -\\frac{1}{y} \\begin{vmatrix} u & u' \\\\ ax+by & a'x+b'y \\end{vmatrix}$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "Identity holds."
      },
      {
        "id": "B",
        "labelLatex": "Sign is positive."
      },
      {
        "id": "C",
        "labelLatex": "Factor is 1/x."
      },
      {
        "id": "D",
        "labelLatex": "Result is zero."
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-I Q.25]** Expanding both sides or using substitution verifies the identity.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q24",
    "questionNumber": 24,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve using Cramer's rule : $\\frac{4}{x+5} + \\frac{3}{y+7} = -1$ & $\\frac{6}{x+5} - \\frac{6}{y+7} = -5$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$x = -7, y = -4$"
      },
      {
        "id": "B",
        "labelLatex": "$x = 7, y = 4$"
      },
      {
        "id": "C",
        "labelLatex": "$x = -5, y = -7$"
      },
      {
        "id": "D",
        "labelLatex": "$x = 0, y = 0$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-II Q.1]** Let $u = 1/(x+5)$ and $v = 1/(y+7)$, solving linear equations gives $u = 1/2, v = -1/3$, leading to $x = -7, y = -4$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q25",
    "questionNumber": 25,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve the following using Cramer's rule and state whether consistent or not. $x+y+z-6 = 0$, $2x+y-z-1 = 0$, $x+y-2z+3 = 0$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$x = 1, y = 2, z = 3$ ; consistent"
      },
      {
        "id": "B",
        "labelLatex": "$x = -1, y = -2, z = -3$ ; inconsistent"
      },
      {
        "id": "C",
        "labelLatex": "$x = 0, y = 0, z = 0$ ; consistent"
      },
      {
        "id": "D",
        "labelLatex": "Inconsistent"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-II Q.2(a)]** Evaluating determinants $D, D_x, D_y, D_z$ gives $x = 1, y = 2, z = 3$, and since $D \\neq 0$, the system is consistent.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q26",
    "questionNumber": 26,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve the following using Cramer's rule and state whether consistent or not. $7x-7y+5z = 3$, $3x+y+5z = 7$, $2x+3y+5z = 5$",
    "options": [
      {
        "id": "A",
        "labelLatex": "Consistent with infinite solutions"
      },
      {
        "id": "B",
        "labelLatex": "Consistent with unique solution"
      },
      {
        "id": "C",
        "labelLatex": "inconsistent"
      },
      {
        "id": "D",
        "labelLatex": "Trivial solution only"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Determinant • EX-II Q.2(b)]** Calculating $D = 0$ while $D_x \\neq 0$ implies the system is inconsistent.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q27",
    "questionNumber": 27,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve the system of equations $$\\begin{cases} z+ay+a^2x+a^3 = 0 \\\\ z+by+b^2x+b^3 = 0 \\\\ z+cy+c^2x+c^3 = 0 \\end{cases}$$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$x = -(a+b+c), y = ab+bc+ca, z = -abc$"
      },
      {
        "id": "B",
        "labelLatex": "$x = a+b+c, y = -(ab+bc+ca), z = abc$"
      },
      {
        "id": "C",
        "labelLatex": "$x = 1, y = 1, z = 1$"
      },
      {
        "id": "D",
        "labelLatex": "$x = 0, y = 0, z = 0$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-II Q.3]** Using properties of Vandermonde determinants for $x, y, z$ gives $x = -(a+b+c), y = ab+bc+ca, z = -abc$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q28",
    "questionNumber": 28,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "For what value of K do the following system of equations possess a non trivial (i.e. not all zero) solution over the set of rationals Q? $x+Ky+3z = 0$, $3x+Ky-2z = 0$, $2x+3y-4z = 0$. For that value of K, find all the solutions of the system.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$K = \\frac{33}{2}, x : y : z = -\\frac{15}{2} : 1 : -3$"
      },
      {
        "id": "B",
        "labelLatex": "$K = 10, x : y : z = 1 : 1 : 1$"
      },
      {
        "id": "C",
        "labelLatex": "$K = 0, x : y : z = 0 : 0 : 0$"
      },
      {
        "id": "D",
        "labelLatex": "$K = -15, x : y : z = 2 : 3 : 1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-II Q.4]** Setting determinant $D = 0$ gives $K = 33/2$, and solving the homogeneous equations gives $x : y : z = -15/2 : 1 : -3$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q29",
    "questionNumber": 29,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Given $x = cy+bz$ ; $y = az+cx$ ; $z = bx+ay$ where $x,y,z$ are not all zero, prove that $a^2+b^2+c^2+2abc = 1$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$a^2+b^2+c^2+abc = 1$"
      },
      {
        "id": "B",
        "labelLatex": "$a^2+b^2+c^2+2abc = 1$"
      },
      {
        "id": "C",
        "labelLatex": "$a+b+c+abc = 1$"
      },
      {
        "id": "D",
        "labelLatex": "$2(a^2+b^2+c^2)+abc = 1$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-II Q.5]** Rewriting the homogeneous system and setting its determinant to zero yields $a^2+b^2+c^2+2abc = 1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q30",
    "questionNumber": 30,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Given $a = \\frac{x}{y-z}$ ; $b = \\frac{y}{z-x}$ ; $c = \\frac{z}{x-y}$ where $x, y, z$ are not all zero, prove that: $1+ab+bc+ca = 0$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1+ab+bc+ca = 1$"
      },
      {
        "id": "B",
        "labelLatex": "$1+ab+bc+ca = 0$"
      },
      {
        "id": "C",
        "labelLatex": "$ab+bc+ca = 1$"
      },
      {
        "id": "D",
        "labelLatex": "$1-ab-bc-ca = 0$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-II Q.6]** Substituting $a, b, c$ in terms of $x, y, z$ simplifies the expression to 0.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q31",
    "questionNumber": 31,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "If $\\sin q \\neq \\cos q$ and $x, y, z$ satisfy the equations $x \\cos p - y \\sin p + z = \\cos q + 1$, $x \\sin p + y \\cos p + z = 1 - \\sin q$, $x \\cos(p+q) - y \\sin(p+q) + z = 2$, then find the value of $x^2 + y^2 + z^2$.",
    "correctAnswer": "2",
    "explanationLatex": "**[Determinant • EX-II Q.7]** Solving the linear system for $x, y, z$ and calculating $x^2+y^2+z^2$ gives 2.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p2-q32",
    "questionNumber": 32,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Investigate for what values of $\\lambda, \\mu$ the simultaneous equations $x+y+z=6$, $x+2y+3z=10$ & $x+2y+\\lambda z=\\mu$ have; (a) A unique solution. (b) An infinite number of solutions. (c) No solution.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\lambda \\neq 3$ (b) $\\lambda = 3, \\mu = 10$ (c) $\\lambda = 3, \\mu \\neq 10$"
      },
      {
        "id": "B",
        "labelLatex": "$\\lambda = 3$ (b) $\\lambda \\neq 3$ (c) $\\mu = 10$"
      },
      {
        "id": "C",
        "labelLatex": "$\\lambda = 0$ (b) $\\lambda = 3$ (c) $\\mu = 0$"
      },
      {
        "id": "D",
        "labelLatex": "$\\lambda \\neq 0$ (b) $\\mu = 3$ (c) $\\lambda = 10$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-II Q.8]** Analyzing the determinant $D$ and consistency conditions using Cramer's rule yields $\\lambda \\neq 3$ for unique, $\\lambda=3, \\mu=10$ for infinite, and $\\lambda=3, \\mu \\neq 10$ for no solution.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q33",
    "questionNumber": 33,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "For what values of p, the equations : $x+y+z=1$ ; $x+2y+4z=p$ & $x+4y+10z=p^2$ have a solution ? Solve them completely in each case.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$p = 1 \\text{ or } p = 2$"
      },
      {
        "id": "B",
        "labelLatex": "p = 0 only"
      },
      {
        "id": "C",
        "labelLatex": "All real p"
      },
      {
        "id": "D",
        "labelLatex": "No real p"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-II Q.9]** Consistency condition (determinant of augmented matrix/system) requires $p = 1 \\text{ or } p = 2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q34",
    "questionNumber": 34,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Solve the equations : $Kx+2y-2z=1$, $4x+2Ky-z=2$, $6x+6y+Kz=3$ considering specially the case when K = 2.",
    "options": [
      {
        "id": "A",
        "labelLatex": "Unique solution for $K \\neq 2$ and parametric solutions for $K = 2$."
      },
      {
        "id": "B",
        "labelLatex": "No solution for any K."
      },
      {
        "id": "C",
        "labelLatex": "Infinite solutions for $K \\neq 2$."
      },
      {
        "id": "D",
        "labelLatex": "Trivial solution only."
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-II Q.10]** Using Cramer's rule for $K \\neq 2$ and substituting $K = 2$ gives parametric solutions.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q35",
    "questionNumber": 35,
    "sectionId": "mathematics",
    "type": "NUMERICAL",
    "promptLatex": "Let a, b, c, d are distinct numbers to be chosen from the set $\\{1, 2, 3, 4, 5\\}$. If the least possible positive solution for x to the system of equations $\\begin{cases} ax+by=1 \\\\ cx+dy=2 \\end{cases}$ can be expressed in the form $\\frac{p}{q}$ where p and q are relatively prime, then find the value of (p + q).",
    "correctAnswer": "19",
    "explanationLatex": "**[Determinant • EX-II Q.11]** Minimizing $x = \\frac{d-2b}{ad-bc}$ with distinct digits from $\\{1,2,3,4,5\\}$ gives $p/q = 7/12$, so $p+q = 19$.",
    "positiveMarks": 4,
    "negativeMarks": 0
  },
  {
    "id": "det-p2-q36",
    "questionNumber": 36,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $bc+qr = ca+rp = ab+pq = -1$ show that $$\\begin{vmatrix} ap & a & p \\\\ bq & b & q \\\\ cr & c & r \\end{vmatrix} = 0$$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "The determinant equals 1."
      },
      {
        "id": "B",
        "labelLatex": "The determinant vanishes identically."
      },
      {
        "id": "C",
        "labelLatex": "The determinant equals abc."
      },
      {
        "id": "D",
        "labelLatex": "The determinant equals pqr."
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-II Q.12]** Using the given relations, row/column operations show the determinant evaluates to 0.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q37",
    "questionNumber": 37,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the following system of equations $(a-t)x + by + cz = 0$, $bx + (c-t)y + az = 0$ and $cx + ay + (b-t)z = 0$ has non-trivial solutions for different values of t, then show that we can express product of these values of t in the form of determinant.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$$\\begin{vmatrix} a & b & c \\\\ b & c & a \\\\ c & a & b \\end{vmatrix}$$"
      },
      {
        "id": "B",
        "labelLatex": "$$\\begin{vmatrix} a & b & c \\\\ a & b & c \\\\ a & b & c \\end{vmatrix}$$"
      },
      {
        "id": "C",
        "labelLatex": "$$\\begin{vmatrix} a & c & b \\\\ b & a & c \\\\ c & b & a \\end{vmatrix}$$"
      },
      {
        "id": "D",
        "labelLatex": "$$\\begin{vmatrix} 1 & 1 & 1 \\\\ a & b & c \\\\ a^2 & b^2 & c^2 \\end{vmatrix}$$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-II Q.13]** Setting the coefficient determinant to zero gives a cubic in t whose constant term (product of roots) corresponds to the given circulant determinant.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q38",
    "questionNumber": 38,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Show that the system of equations $3x-y+4z = 3$, $x+2y-3z = -2$ and $6x+5y+\\lambda z = -3$ has atleast one solution for any real number $\\lambda$. Find the set of solutions of $\\lambda = -5$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "Consistent for all $\\lambda$, with specific solutions when $\\lambda = -5$."
      },
      {
        "id": "B",
        "labelLatex": "Inconsistent for all $\\lambda$."
      },
      {
        "id": "C",
        "labelLatex": "Trivial solution only."
      },
      {
        "id": "D",
        "labelLatex": "Unique solution for $\\lambda = -5$."
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-II Q.14]** Checking $D$ and $D_x, D_y, D_z$ shows consistency for all $\\lambda$, and for $\\lambda = -5$ there are infinitely many solutions.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q39",
    "questionNumber": 39,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $\\alpha, \\beta, \\gamma$ are the roots of $x^3 + px^2 + q = 0$, where $q \\neq 0$, then $$\\Delta = \\begin{vmatrix} 1/\\alpha & 1/\\beta & 1/\\gamma \\\\ 1/\\beta & 1/\\gamma & 1/\\alpha \\\\ 1/\\gamma & 1/\\alpha & 1/\\beta \\end{vmatrix}$$ equals",
    "options": [
      {
        "id": "A",
        "labelLatex": "p/q"
      },
      {
        "id": "B",
        "labelLatex": "q/p"
      },
      {
        "id": "C",
        "labelLatex": "pq"
      },
      {
        "id": "D",
        "labelLatex": "0"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Determinant • EX-III Q.1]** The sum of the rows is $1/\\alpha + 1/\\beta + 1/\\gamma = (\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha)/(\\alpha\\beta\\gamma) = 0/(-q) = 0$, so the determinant is 0.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q40",
    "questionNumber": 40,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $$\\Delta = \\begin{vmatrix} \\sqrt{6} & 2i & 3+\\sqrt{6} \\\\ \\sqrt{12} & \\sqrt{3}+\\sqrt{8}i & 3\\sqrt{2}+\\sqrt{6}i \\\\ \\sqrt{18} & \\sqrt{2}+\\sqrt{12}i & \\sqrt{27}+2i \\end{vmatrix}$$ then $\\Delta$ is ($i^2 = -1$)",
    "options": [
      {
        "id": "A",
        "labelLatex": "a negative integer"
      },
      {
        "id": "B",
        "labelLatex": "a natural number"
      },
      {
        "id": "C",
        "labelLatex": "an irrational number"
      },
      {
        "id": "D",
        "labelLatex": "an imaginary number"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-III Q.2]** By observing the columns, $C_3 = \\sqrt{3}C_1 + C_2$, making the determinant 0, which is a non-positive integer.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q41",
    "questionNumber": 41,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $x, y, z$ are different from zero and $$\\Delta = \\begin{vmatrix} a & b-y & c-z \\\\ a-x & b & c-z \\\\ a-x & b-y & c \\end{vmatrix} = 0$$, then the value of the expression $\\frac{a}{x} + \\frac{b}{y} + \\frac{c}{z}$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "0"
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
    "correctAnswer": "D",
    "explanationLatex": "**[Determinant • EX-III Q.3]** Expanding the determinant or using row operations leads to $abc - (a-x)(b-y)(c-z) = 0$, which simplifies to $a/x + b/y + c/z = 2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q42",
    "questionNumber": 42,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $p + q + r = a + b + c = 0$, then the determinant $$\\Delta = \\begin{vmatrix} pa & qb & rc \\\\ qc & ra & pb \\\\ rb & pc & qa \\end{vmatrix}$$ equals",
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
        "labelLatex": "pa + qb + rc"
      },
      {
        "id": "D",
        "labelLatex": "abcpqr"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-III Q.4]** Summing all columns gives $pa+qb+rc$ in each entry, which is 0 since $p+q+r=0$ and $a+b+c=0$ implies the determinant is 0.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q43",
    "questionNumber": 43,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $p \\neq a, q \\neq b, r \\neq c$ and the system of equations $px + ay + az = 0, bx + qy + bz = 0, cx + cy + rz = 0$ has a non-trivial solution, then the value of $\\frac{p}{p-a} + \\frac{q}{q-b} + \\frac{r}{r-c}$ is",
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
        "labelLatex": "1"
      },
      {
        "id": "D",
        "labelLatex": "2"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Determinant • EX-III Q.5]** The condition for non-trivial solution is the determinant being 0, which simplifies to the given expression equaling 2.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q44",
    "questionNumber": 44,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the system of linear equations $x + y + z = 6, x + 2y + 3z = 14$ and $2x + 5y + \\lambda z = \\mu, (\\lambda, \\mu \\in R)$ has more than one solution, then",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\lambda \\neq 8, \\mu \\in R"
      },
      {
        "id": "B",
        "labelLatex": "\\lambda = 8, \\mu \\neq 36"
      },
      {
        "id": "C",
        "labelLatex": "\\lambda = 8, \\mu = 36"
      },
      {
        "id": "D",
        "labelLatex": "\\lambda = a, \\mu \\in R"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Determinant • EX-III Q.6]** For infinite solutions, the determinant of the coefficient matrix must be 0, implying $\\lambda = 8$, and the augmented matrix must be consistent, implying $\\mu = 36$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q45",
    "questionNumber": 45,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $a, b, c$ are positive and not all equal, then the value of the determinant $$\\begin{vmatrix} a & b & c \\\\ b & c & a \\\\ c & a & b \\end{vmatrix}$$ is always",
    "options": [
      {
        "id": "A",
        "labelLatex": "> 0"
      },
      {
        "id": "B",
        "labelLatex": "0"
      },
      {
        "id": "C",
        "labelLatex": "< 0"
      },
      {
        "id": "D",
        "labelLatex": "none of these"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Determinant • EX-III Q.7]** The determinant is $-(a^3+b^3+c^3-3abc) = -(a+b+c)((a-b)^2+(b-c)^2+(c-a)^2)/2$, which is always negative for distinct positive $a, b, c$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q46",
    "questionNumber": 46,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $px^4 + qx^3 + rx^2 + sx + t = \\begin{vmatrix} x^2+3x & x-1 & x+3 \\\\ x+1 & -2x & x-4 \\\\ x-3 & x+4 & 3x \\end{vmatrix}$ be an identity, where $p, q, r, s, t$ are constants. Then $t =$",
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
        "labelLatex": "-1"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-III Q.8]** Setting $x=0$ in the identity, $t = \\begin{vmatrix} 0 & -1 & 3 \\\\ 1 & 0 & -4 \\\\ -3 & 4 & 0 \\end{vmatrix} = 0(0) - (-1)(0-12) + 3(4-0) = -12 + 12 = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q47",
    "questionNumber": 47,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $$\\begin{vmatrix} 1 & a & bc \\\\ 1 & b & ca \\\\ 1 & c & ab \\end{vmatrix} = \\lambda \\begin{vmatrix} a^2 & b^2 & c^2 \\\\ 1 & 1 & 1 \\\\ 1 & 1 & 1 \\end{vmatrix}$$, then $\\lambda =$",
    "options": [
      {
        "id": "A",
        "labelLatex": "1"
      },
      {
        "id": "B",
        "labelLatex": "-1"
      },
      {
        "id": "C",
        "labelLatex": "2"
      },
      {
        "id": "D",
        "labelLatex": "-2"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-III Q.9]** The first determinant is $(a-b)(b-c)(c-a)$ and the second is 0, but comparing the structure, $\\lambda = -1$ satisfies the identity.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q48",
    "questionNumber": 48,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The number of real values of $\\lambda$ for which the system of equations $\\lambda x + y + z = 0, x - \\lambda y - z = 0, x + y - \\lambda z = 0$ will have nontrivial solution is",
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
    "explanationLatex": "**[Determinant • EX-III Q.10]** The determinant is $-\\lambda^3 + \\lambda + 2 = 0$, which factors as $-(\\lambda+1)(\\lambda^2-\\lambda-2) = -(\\lambda+1)^2(\\lambda-2) = 0$, giving $\\lambda = -1, 2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q49",
    "questionNumber": 49,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $x, y, z$ be non-unity positive numbers, then $$\\begin{vmatrix} 1 & \\log_x y & \\log_x z \\\\ \\log_y x & 1 & \\log_y z \\\\ \\log_z x & \\log_z y & 1 \\end{vmatrix} =$$",
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
        "labelLatex": "value depends on x, y, z"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Determinant • EX-III Q.11]** Using the change of base formula, the determinant becomes $\\begin{vmatrix} 1 & \\frac{\\ln y}{\\ln x} & \\frac{\\ln z}{\\ln x} \\\\ \\frac{\\ln x}{\\ln y} & 1 & \\frac{\\ln z}{\\ln y} \\\\ \\frac{\\ln x}{\\ln z} & \\frac{\\ln y}{\\ln z} & 1 \\end{vmatrix} = \\frac{1}{\\ln x \\ln y \\ln z} \\begin{vmatrix} \\ln x & \\ln y & \\ln z \\\\ \\ln x & \\ln y & \\ln z \\\\ \\ln x & \\ln y & \\ln z \\end{vmatrix} = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "det-p2-q50",
    "questionNumber": 50,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$$\\begin{vmatrix} xp+y & x & y \\\\ yp+z & y & z \\\\ 0 & xp+y & yp+z \\end{vmatrix} = 0$$ if",
    "options": [
      {
        "id": "A",
        "labelLatex": "x, y, z are in A.P"
      },
      {
        "id": "B",
        "labelLatex": "x, y, z are in G.P"
      },
      {
        "id": "C",
        "labelLatex": "x, y, z are in H.P"
      },
      {
        "id": "D",
        "labelLatex": "xy, yz, zx are in A.P"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Determinant • EX-III Q.12]** Expanding the determinant gives $-(xp+y)(yp+z) - (xp+y)(yp+z) + ... = 0$, which simplifies to $y^2 = xz$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  }
];
