import { Question } from '../types/exam';

export const BINOMIAL_PART_2_QUESTIONS: Question[] = [
  {
    "id": "bin-p2-q1",
    "questionNumber": 1,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The expressions $1 + x,\\; 1 + x + x^2,\\; 1 + x + x^2 + x^3,\\dots,\\; 1 + x + x^2 + \\dots + x^n$ are multiplied together and the terms of the product thus obtained are arranged in increasing powers of $x$ in the form of $a_0 + a_1 x + a_2 x^2 + \\dots$, then find the number of terms in the product.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{n^2 + n + 2}{2}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{n(n+1)}{2}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{n^2 + 3n + 2}{2}$"
      },
      {
        "id": "D",
        "labelLatex": "$n^2 + 1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • EX-I Q.10]** The maximum power of $x$ is $1 + 2 + 3 + \\dots + n = \\frac{n(n+1)}{2}$. Since the product starts with degree $0$, the number of terms is $\\frac{n(n+1)}{2} + 1 = \\frac{n^2 + n + 2}{2}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q2",
    "questionNumber": 2,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the coeff. of \\\\\n(a) $x^6$ in the expansion of $(ax^2 + bx + c)^9$. \\\\\n(b) $x^2 y^3 z^4$ in the expansion of $(ax - by + cz)^9$. \\\\\n(c) $a^2 b^3 c^4 d$ in the expansion of $(a - b - c + d)^{10}$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$84b^6c^3 + 630ab^4c^4 + 756a^2b^2c^5 + 84a^3c^6$, (b) $-1260 a^2b^3c^4$, (c) $-12600$"
      },
      {
        "id": "B",
        "labelLatex": "$84b^6c^3 + 630ab^4c^4 + 756a^2b^2c^5 + 84a^3c^6$, (b) $1260 a^2b^3c^4$, (c) $12600$"
      },
      {
        "id": "C",
        "labelLatex": "$84b^6c^3 + 252ab^4c^4 + 756a^2b^2c^5 + 84a^3c^6$, (b) $-1260 a^2b^3c^4$, (c) $-12600$"
      },
      {
        "id": "D",
        "labelLatex": "$84b^6c^3 + 630ab^4c^4 + 756a^2b^2c^5 + 84a^3c^6$, (b) $-1260 a^2b^3c^4$, (c) $-25200$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • EX-I Q.11]** Using the multinomial theorem: for (b), $\\frac{9!}{2!3!4!} a^2(-b)^3 c^4 = -1260 a^2 b^3 c^4$; for (c), $\\frac{10!}{2!3!4!1!} (1)^2(-1)^3(-1)^4(1)^1 = -12600$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q3",
    "questionNumber": 3,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the coefficient of $x^r$ in the expression of : \\\\\n$(x + 3)^{n-1} + (x + 3)^{n-2}(x + 2) + (x + 3)^{n-3}(x + 2)^2 + \\dots + (x + 2)^{n-1}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "${}^n C_r (3^{n-r} - 2^{n-r})$"
      },
      {
        "id": "B",
        "labelLatex": "${}^n C_r (3^r - 2^r)$"
      },
      {
        "id": "C",
        "labelLatex": "${}^{n-1} C_r (3^{n-r} - 2^{n-r})$"
      },
      {
        "id": "D",
        "labelLatex": "${}^{n+1} C_r (3^{n-r} - 2^{n-r})$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • EX-I Q.12]** The given expression is a geometric progression with sum $\\frac{(x+3)^n - (x+2)^n}{(x+3) - (x+2)} = (x+3)^n - (x+2)^n$. The coefficient of $x^r$ is ${}^n C_r (3^{n-r} - 2^{n-r})$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q4",
    "questionNumber": 4,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "(a) Find the index $n$ of the binomial $\\left(\\frac{x}{5} + \\frac{2}{5}\\right)^n$ if the 9th term of the expansion has numerically the greatest coefficient ($n \\in \\mathbb{N}$). \\\\\n(b) For which positive values of $x$ is the fourth term in the expansion of $(5 + 3x)^{10}$ is the greatest.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$n = 12$, (b) $\\frac{5}{8} < x < \\frac{20}{21}$"
      },
      {
        "id": "B",
        "labelLatex": "$n = 11$, (b) $\\frac{1}{2} < x < 1$"
      },
      {
        "id": "C",
        "labelLatex": "$n = 12$, (b) $\\frac{3}{5} < x < \\frac{5}{6}$"
      },
      {
        "id": "D",
        "labelLatex": "$n = 13$, (b) $\\frac{5}{8} < x < \\frac{20}{21}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • EX-I Q.13]** For (a), $T_9$ greatest coefficient implies $\\frac{{}^n C_8 2^{n-8}}{{}^n C_7 2^{n-7}} \\ge 1$ and $\\frac{{}^n C_9 2^{n-9}}{{}^n C_8 2^{n-8}} \\le 1$, yielding $n=12$. For (b), $T_4 > T_3$ and $T_4 > T_5$ gives $\\frac{5}{8} < x < \\frac{20}{21}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q5",
    "questionNumber": 5,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "(a) Find the number of divisors of the number \\\\\n$N = {}^{2000}C_1 + 2 \\cdot {}^{2000}C_2 + 3 \\cdot {}^{2000}C_3 + \\dots + 2000 \\cdot {}^{2000}C_{2000}$. \\\\\n(b) Find the sum of the roots (real or complex) of the equation $x^{2001} + \\left(\\frac{1}{2} - x\\right)^{2001} = 0$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$8016$; (b) $500$"
      },
      {
        "id": "B",
        "labelLatex": "$4008$; (b) $500$"
      },
      {
        "id": "C",
        "labelLatex": "$8016$; (b) $1000$"
      },
      {
        "id": "D",
        "labelLatex": "$2004$; (b) $250$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • EX-I Q.14]** $N = 2000 \\cdot 2^{1999} = 125 \\cdot 16 \\cdot 2^{1999} = 5^3 \\cdot 2^{2003}$, so number of divisors is $(3+1)(2003+1) = 4 \\times 2004 = 8016$. For (b), the equation degree is $2000$, sum of roots is $500$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q6",
    "questionNumber": 6,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Show that the integral part of $(5 + 2\\sqrt{6})^n$ is odd for all $n \\in \\mathbb{N}$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "Always odd"
      },
      {
        "id": "B",
        "labelLatex": "Always even"
      },
      {
        "id": "C",
        "labelLatex": "Odd only for odd $n$"
      },
      {
        "id": "D",
        "labelLatex": "Even only for odd $n$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • EX-I Q.15]** Let $(5+2\\sqrt{6})^n = I + f$ and $(5-2\\sqrt{6})^n = f'$. Then $I + f + f' = 2 \\sum {}^n C_{2k} 5^{n-2k} (24)^k$, which is an even integer, so $I = \\text{even} - 1 = \\text{odd}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q7",
    "questionNumber": 7,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $(7 + 4\\sqrt{3})^n = p + \\beta$ where $n$ & $p$ are positive integers and $\\beta$ is a proper fraction, then the value of $(1 - \\beta)(p + \\beta)$ is :",
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
        "labelLatex": "$0$"
      },
      {
        "id": "D",
        "labelLatex": "$2^n$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • EX-I Q.16]** Let $(7-4\\sqrt{3})^n = \\beta'$. Then $p + \\beta + \\beta'$ is an integer, so $\\beta' = 1 - \\beta$. Thus $(1-\\beta)(p+\\beta) = (7-4\\sqrt{3})^n (7+4\\sqrt{3})^n = (49-48)^n = 1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q8",
    "questionNumber": 8,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $(6\\sqrt{6} + 14)^{2n+1} = N$ and $F$ be the fractional part of $N$, then the value of $NF$ is ($n \\in \\mathbb{N}$) :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$20^{2n+1}$"
      },
      {
        "id": "B",
        "labelLatex": "$14^{2n+1}$"
      },
      {
        "id": "C",
        "labelLatex": "$6^{2n+1}$"
      },
      {
        "id": "D",
        "labelLatex": "$2^{2n+1}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • EX-I Q.17]** $F = (6\\sqrt{6} - 14)^{2n+1}$, so $NF = ((6\\sqrt{6}+14)(6\\sqrt{6}-14))^{2n+1} = (216-196)^{2n+1} = 20^{2n+1}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q9",
    "questionNumber": 9,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $C_0, C_1, C_2, \\dots, C_n$ are the combinatorial coefficients in the expansion of $(1 + x)^n$, $n \\in \\mathbb{N}$, then $C_0^2 + C_1^2 + C_2^2 + \\dots + C_n^2$ equals :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{(2n)!}{n! \\, n!}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{(2n)!}{(n-1)! \\, (n+1)!}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{(2n)!}{(n!)^3}$"
      },
      {
        "id": "D",
        "labelLatex": "$2^n$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • EX-I Q.18]** The sum of the squares of the coefficients is the coefficient of $x^n$ in $(1+x)^{2n}$, which is ${}^{2n}C_n = \\frac{(2n)!}{n!n!}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q10",
    "questionNumber": 10,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $C_0, C_1, C_2, \\dots, C_n$ are the combinatorial coefficients in the expansion of $(1 + x)^n$, $n \\in \\mathbb{N}$, then $C_1 + 2C_2 + 3C_3 + \\dots + n \\cdot C_n$ equals :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$n \\cdot 2^n$"
      },
      {
        "id": "B",
        "labelLatex": "$n \\cdot 2^{n-1}$"
      },
      {
        "id": "C",
        "labelLatex": "$(n-1) \\cdot 2^n$"
      },
      {
        "id": "D",
        "labelLatex": "$(n+1) \\cdot 2^{n-1}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Binomial Theorem • EX-I Q.19]** Differentiating $(1+x)^n = \\sum C_r x^r$ with respect to $x$ and putting $x=1$ gives $n(1+1)^{n-1} = n \\cdot 2^{n-1}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q11",
    "questionNumber": 11,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $P_n$ denotes the product of all the coefficients in the expansion of $(1 + x)^n$, $n \\in \\mathbb{N}$, then $\\frac{P_{n+1}}{P_n}$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{(n+1)^n}{n!}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{n^n}{(n+1)!}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{(n+1)^{n+1}}{n!}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{(n+1)!}{n^n}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • EX-I Q.20]** $\\frac{P_{n+1}}{P_n} = \\prod_{r=1}^{n+1} \\frac{{}^{n+1}C_r}{{}^n C_{r-1}} = \\prod_{r=1}^{n+1} \\frac{n+1}{r} = \\frac{(n+1)^{n+1}}{(n+1)!} = \\frac{(n+1)^n}{n!}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q12",
    "questionNumber": 12,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If in the expansion of $\\left(2^{1/3} + \\frac{1}{3^{1/3}}\\right)^n$, the ratio of 6th terms from beginning and from the end is $1/6$, then the value of $n$ is -",
    "options": [
      {
        "id": "A",
        "labelLatex": "5"
      },
      {
        "id": "B",
        "labelLatex": "7"
      },
      {
        "id": "C",
        "labelLatex": "9"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Binomial Theorem • EX-II Q.1]** $T_6 = {}^n C_5 (2^{1/3})^{n-5} (3^{-1/3})^5$. The 6th term from the end is $T_{n-4} = {}^n C_5 (2^{1/3})^5 (3^{-1/3})^{n-5}$. Ratio is $6^{(n-10)/3} = 6^{-1} \\implies \\frac{n-10}{3} = -1 \\implies n = 7$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q13",
    "questionNumber": 13,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$\\frac{1}{1!(n - 1)!} + \\frac{1}{3!(n - 3)!} + \\frac{1}{5!(n - 5)!} + \\dots =$ -",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{2^n}{n!}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{2^{n-1}}{n!}$"
      },
      {
        "id": "C",
        "labelLatex": "$0$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Binomial Theorem • EX-II Q.2]** Multiply and divide by $n!$: $\\frac{1}{n!} ({}^n C_1 + {}^n C_3 + {}^n C_5 + \\dots) = \\frac{2^{n-1}}{n!}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q14",
    "questionNumber": 14,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $(1 + x)^n = C_0 + C_1 x + C_2 x^2 + \\dots + C_n x^n$, then $\\frac{(C_0 + C_1)(C_1 + C_2)\\dots(C_{n-1} + C_n)}{C_1 C_2 \\dots C_n}$ equals-",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{n^n}{(n + 1)!}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{(n + 1)^n}{n!}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{n^n}{n!}$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Binomial Theorem • EX-II Q.3]** Each factor is $\\frac{C_{r-1} + C_r}{C_r} = 1 + \\frac{r}{n-r+1} = \\frac{n+1}{n-r+1}$. Taking product for $r=1$ to $n$ gives $\\frac{(n+1)^n}{n!}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q15",
    "questionNumber": 15,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "$1 + \\frac{1}{5} + \\frac{1 \\cdot 3}{5 \\cdot 10} + \\frac{1 \\cdot 3 \\cdot 5}{5 \\cdot 10 \\cdot 15} + \\dots$ is equal to -",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{1}{\\sqrt{5}}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{1}{\\sqrt{2}}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\sqrt{\\frac{5}{3}}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\sqrt{5}$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Binomial Theorem • EX-II Q.4]** Compare with $(1 - x)^{-1/2} = 1 + \\frac{1}{2}x + \\frac{1 \\cdot 3}{2 \\cdot 4}x^2 + \\dots$. Here $x = 2/5$, giving $(1 - 2/5)^{-1/2} = (3/5)^{-1/2} = \\sqrt{5/3}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q16",
    "questionNumber": 16,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The coefficient of $x^4$ in the expansion of $\\frac{1 + 2x + 3x^2}{(1 - x)^2}$ is-",
    "options": [
      {
        "id": "A",
        "labelLatex": "$13$"
      },
      {
        "id": "B",
        "labelLatex": "$14$"
      },
      {
        "id": "C",
        "labelLatex": "$20$"
      },
      {
        "id": "D",
        "labelLatex": "$22$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Binomial Theorem • EX-II Q.5]** $(1 - x)^{-2} = \\sum_{r=0}^\\infty (r+1)x^r$. Coefficient of $x^4$ is $1(5) + 2(4) + 3(3) = 5 + 8 + 9 = 22$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q17",
    "questionNumber": 17,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the fourth term in the expansion of $(px + 1/x)^n$ is $5/2$ then the value of $n$ and $p$ are respectively-",
    "options": [
      {
        "id": "A",
        "labelLatex": "$6, 1/2$"
      },
      {
        "id": "B",
        "labelLatex": "$1/2, 6$"
      },
      {
        "id": "C",
        "labelLatex": "$3, 1$"
      },
      {
        "id": "D",
        "labelLatex": "$3, 1/2$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • EX-II Q.6]** $T_4 = {}^n C_3 (px)^{n-3} (x^{-1})^3 = {}^n C_3 p^{n-3} x^{n-6}$. For this to be constant, $n = 6$. Then ${}^6 C_3 p^3 = 20 p^3 = 5/2 \\implies p^3 = 1/8 \\implies p = 1/2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q18",
    "questionNumber": 18,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The coefficient of $x^4$ in the expansion of $(1 + x + x^2 + x^3)^n$ is -",
    "options": [
      {
        "id": "A",
        "labelLatex": "${}^n C_4$"
      },
      {
        "id": "B",
        "labelLatex": "${}^n C_4 + {}^n C_2$"
      },
      {
        "id": "C",
        "labelLatex": "${}^n C_1 + {}^n C_2 + {}^n C_4 \\cdot {}^n C_2$"
      },
      {
        "id": "D",
        "labelLatex": "${}^n C_4 + {}^n C_2 + {}^n C_1 \\cdot {}^n C_2$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Binomial Theorem • EX-II Q.7]** $(1+x+x^2+x^3)^n = (1+x)^n(1+x^2)^n$. The coefficient of $x^4$ is ${}^n C_4 \\cdot {}^n C_0 + {}^n C_2 \\cdot {}^n C_1 + {}^n C_0 \\cdot {}^n C_2 = {}^n C_4 + {}^n C_2 + {}^n C_1 \\cdot {}^n C_2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q19",
    "questionNumber": 19,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $(2 - x - x^2)^{2n} = a_0 + a_1 x + a_2 x^2 + a_3 x^3 + \\dots$, then the value of $a_0 + a_2 + a_4 + \\dots$ is-",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2^{n-1}$"
      },
      {
        "id": "B",
        "labelLatex": "$2^{2n}$"
      },
      {
        "id": "C",
        "labelLatex": "$2^{2n-1}$"
      },
      {
        "id": "D",
        "labelLatex": "None of these"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Binomial Theorem • EX-II Q.8]** For $x=1$, $(0)^{2n} = 0$. For $x=-1$, $(2)^{2n} = 2^{2n}$. The sum of even coefficients is $\\frac{0 + 2^{2n}}{2} = 2^{2n-1}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q20",
    "questionNumber": 20,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the third term in the expansion of $\\left[x + x^{\\log_{10} x}\\right]^5$ is equal to $10,00,000$, then $x$ equals-",
    "options": [
      {
        "id": "A",
        "labelLatex": "$10$"
      },
      {
        "id": "B",
        "labelLatex": "$10^2$"
      },
      {
        "id": "C",
        "labelLatex": "$10^3$"
      },
      {
        "id": "D",
        "labelLatex": "No such $x$ exists"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • EX-II Q.9]** $T_3 = {}^5 C_2 x^3 (x^{\\log_{10} x})^2 = 10 x^{3 + 2\\log_{10} x} = 10^6 \\implies x^{3 + 2\\log_{10} x} = 10^5$. Taking $\\log_{10}$ gives $2(\\log_{10} x)^2 + 3\\log_{10} x - 5 = 0$, so $\\log_{10} x = 1 \\implies x = 10$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q21",
    "questionNumber": 21,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $(1 + x)^n = C_0 + C_1 x + C_2 x^2 + \\dots + C_n x^n$, then $3C_0 - 5C_1 + 7C_2 + \\dots + (-1)^n (2n + 3) C_n$ equals-",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1$"
      },
      {
        "id": "B",
        "labelLatex": "$2(2n + 3) 2^n$"
      },
      {
        "id": "C",
        "labelLatex": "$(2n+3) 2^{n-1}$"
      },
      {
        "id": "D",
        "labelLatex": "$0$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Binomial Theorem • EX-II Q.10]** The general term is $(-1)^r (2r+3) C_r = 2(-1)^r r C_r + 3(-1)^r C_r$. For $n \\ge 2$, both $\\sum (-1)^r r C_r = 0$ and $\\sum (-1)^r C_r = 0$, so the sum is $0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q22",
    "questionNumber": 22,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $6^{83} + 8^{83}$ is divided by $49$, then the remainder is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$35$"
      },
      {
        "id": "B",
        "labelLatex": "$5$"
      },
      {
        "id": "C",
        "labelLatex": "$14$"
      },
      {
        "id": "D",
        "labelLatex": "$2$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • EX-II Q.11]** $6^{83} + 8^{83} = (7-1)^{83} + (7+1)^{83} = 2[{}^{83}C_1 7 + {}^{83}C_3 7^3 + \\dots] = 2(83 \\times 7) + 49k = 1162 + 49k = 49(23) + 35 + 49k$, so the remainder is $35$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q23",
    "questionNumber": 23,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $C_0, C_1, C_2 \\dots$ denotes the combinatorial coefficients in the expansion of $(1 + x)^{10}$, then the value of $\\frac{C_0}{1} + \\frac{C_1}{2} + \\frac{C_2}{3} + \\dots + \\frac{C_{10}}{11}$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{2^{11}}{11}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{2^{11} - 1}{11}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{3^{11}}{11}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{3^{11} - 1}{11}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Binomial Theorem • EX-II Q.12]** $\\sum_{r=0}^{10} \\frac{{}^{10}C_r}{r+1} = \\frac{1}{11} \\sum_{r=0}^{10} {}^{11}C_{r+1} = \\frac{2^{11} - 1}{11}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q24",
    "questionNumber": 24,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Last three digits of the number $N = 7^{100} - 3^{100}$ are",
    "options": [
      {
        "id": "A",
        "labelLatex": "$100$"
      },
      {
        "id": "B",
        "labelLatex": "$300$"
      },
      {
        "id": "C",
        "labelLatex": "$500$"
      },
      {
        "id": "D",
        "labelLatex": "$000$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Binomial Theorem • EX-II Q.13]** $7^{100} = (49)^{50} = (50 - 1)^{50} \\equiv 1 - 2500 \\equiv 501 \\pmod{1000}$. $3^{100} = (81)^{25} = (1 + 80)^{25} \\equiv 1 + 25 \\times 80 = 2001 \\equiv 501 \\pmod{1000}$ (or both are $001$ modulo $1000$ by Euler's totient since $\\phi(1000)=400$). Thus $7^{100} - 3^{100} \\equiv 000 \\pmod{1000}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q25",
    "questionNumber": 25,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Let $(5 + 2\\sqrt{6})^n = p + f$ where $n \\in \\mathbb{N}$ and $p \\in \\mathbb{N}$ and $0 < f < 1$ then the value of, $f^2 - f + pf - p$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "a composite number"
      },
      {
        "id": "B",
        "labelLatex": "a negative integer"
      },
      {
        "id": "C",
        "labelLatex": "a prime number"
      },
      {
        "id": "D",
        "labelLatex": "an irrational number"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Binomial Theorem • EX-II Q.14]** $f^2 - f + pf - p = (f - 1)(p + f)$. Since $0 < f' = 5 - 2\\sqrt{6} < 1$, $p + f + f'$ is an integer, so $f' = 1 - f$. Thus $(f - 1)(p + f) = -f'(p+f) = -(5 - 2\\sqrt{6})^n(5 + 2\\sqrt{6})^n = -1$, which is a negative integer.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q26",
    "questionNumber": 26,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Number of rational terms in the expansion of $(\\sqrt{2} + \\sqrt[4]{3})^{100}$ is :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$25$"
      },
      {
        "id": "B",
        "labelLatex": "$26$"
      },
      {
        "id": "C",
        "labelLatex": "$27$"
      },
      {
        "id": "D",
        "labelLatex": "$28$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Binomial Theorem • EX-II Q.15]** General term is ${}^{100}C_r (2)^{50 - r/2} (3)^{r/4}$. For rationality, $r$ must be a multiple of $4$. As $0 \\le r \\le 100$, $r \\in \\{0, 4, 8, \\dots, 100\\}$, giving $\\frac{100}{4} + 1 = 26$ terms.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q27",
    "questionNumber": 27,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The coefficient of the middle term in the binomial expansion in powers of x of $(1 + \\alpha x)^4$ and of $(1 - \\alpha x)^6$ is the same if $\\alpha$ equals :",
    "options": [
      {
        "id": "A",
        "labelLatex": "-\\frac{5}{3}"
      },
      {
        "id": "B",
        "labelLatex": "\\frac{3}{5}"
      },
      {
        "id": "C",
        "labelLatex": "-\\frac{3}{10}"
      },
      {
        "id": "D",
        "labelLatex": "\\frac{10}{3}"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Binomial Theorem • EX-III Q.1]** Equating the middle terms: $\\binom{4}{2}(\\alpha)^2 = \\binom{6}{3}(-\\alpha)^3$, which simplifies to $6\\alpha^2 = -20\\alpha^3$, giving $\\alpha = -3/10$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q28",
    "questionNumber": 28,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $S_n = \\sum_{r=0}^{n} 1/{}^{n}C_r$ and $t_n = \\sum_{r=0}^{n} r/{}^{n}C_r$, then $t_n/S_n$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\frac{1}{2}n"
      },
      {
        "id": "B",
        "labelLatex": "\\frac{1}{2}n - 1"
      },
      {
        "id": "C",
        "labelLatex": "n - 1"
      },
      {
        "id": "D",
        "labelLatex": "\\frac{2n - 1}{2}"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • EX-III Q.2]** Using the property $\\sum_{r=0}^n \\frac{r}{{}^nC_r} = \\frac{n}{2} \\sum_{r=0}^n \\frac{1}{{}^nC_r}$, we get $t_n = \\frac{n}{2} S_n$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q29",
    "questionNumber": 29,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the coefficients of $r^{th}$, $(r + 1)^{th}$, and $(r + 2)^{th}$ terms in the binomial expansion of $(1 + y)^m$ are in A.P., then $m$ and $r$ satisfy the equation",
    "options": [
      {
        "id": "A",
        "labelLatex": "m^2 - m(4r - 1) + 4r^2 - 2 = 0"
      },
      {
        "id": "B",
        "labelLatex": "m^2 - m(4r + 1) + 4r^2 + 2 = 0"
      },
      {
        "id": "C",
        "labelLatex": "m^2 - m(4r + 1) + 4r^2 - 2 = 0"
      },
      {
        "id": "D",
        "labelLatex": "m^2 - m(4r - 1) + 4r^2 + 2 = 0"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Binomial Theorem • EX-III Q.3]** The coefficients are $\\binom{m}{r-1}, \\binom{m}{r}, \\binom{m}{r+1}$. Since they are in A.P., $2\\binom{m}{r} = \\binom{m}{r-1} + \\binom{m}{r+1}$, which simplifies to $m^2 - m(4r+1) + 4r^2 - 2 = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q30",
    "questionNumber": 30,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The value of ${}^{50}C_4 + \\sum_{r=1}^{6} {}^{56-r}C_3$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "{}^{55}C_4"
      },
      {
        "id": "B",
        "labelLatex": "{}^{55}C_3"
      },
      {
        "id": "C",
        "labelLatex": "{}^{56}C_3"
      },
      {
        "id": "D",
        "labelLatex": "{}^{56}C_4"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Binomial Theorem • EX-III Q.4]** Using the hockey-stick identity $\\sum_{i=r}^n \\binom{i}{r} = \\binom{n+1}{r+1}$, the sum evaluates to $\\binom{56}{4}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q31",
    "questionNumber": 31,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the coefficient of $x^7$ in $[ax^2 + (1/bx)]^{11}$ equals the coefficient of $x^{-7}$ in $[ax - (1/bx^2)]^{11}$, then $a$ and $b$ satisfy the relation",
    "options": [
      {
        "id": "A",
        "labelLatex": "a - b = 1"
      },
      {
        "id": "B",
        "labelLatex": "a + b = 1"
      },
      {
        "id": "C",
        "labelLatex": "\\frac{a}{b} = 1"
      },
      {
        "id": "D",
        "labelLatex": "ab = 1"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Binomial Theorem • EX-III Q.5]** Equating the coefficients leads to $a^7 b^{-4} = a^4 b^{-7}$, which simplifies to $a^3 b^3 = 1$, or $ab = 1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q32",
    "questionNumber": 32,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $x$ is so small that $x^3$ and higher powers of $x$ may be neglected, then $\\frac{(1 + x)^{3/2} - (1 + \\frac{1}{2}x)^3}{(1 - x)^{1/2}}$ may be approximated as",
    "options": [
      {
        "id": "A",
        "labelLatex": "1 - \\frac{3}{8}x^2"
      },
      {
        "id": "B",
        "labelLatex": "3x + \\frac{3}{8}x^2"
      },
      {
        "id": "C",
        "labelLatex": "-\\frac{3}{8}x^2"
      },
      {
        "id": "D",
        "labelLatex": "\\frac{x}{2} - \\frac{3}{8}x^2"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Binomial Theorem • EX-III Q.6]** Expanding using binomial theorem: $(1+x)^{3/2} \\approx 1 + \\frac{3}{2}x + \\frac{3}{8}x^2$, $(1+\\frac{x}{2})^3 \\approx 1 + \\frac{3}{2}x + \\frac{3}{4}x^2$, and $(1-x)^{-1/2} \\approx 1 + \\frac{1}{2}x + \\frac{3}{8}x^2$. The expression simplifies to $-\\frac{3}{8}x^2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q33",
    "questionNumber": 33,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the expansion of powers of $x$ of the function $\\frac{1}{(1 - ax)(1 - bx)}$ is $a_0 + a_1x + a_2x^2 + a_3x^3 + \\dots \\dots \\dots$, then $a_n$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\frac{b^n - a^n}{b - a}"
      },
      {
        "id": "B",
        "labelLatex": "\\frac{a^n - b^n}{b - a}"
      },
      {
        "id": "C",
        "labelLatex": "\\frac{a^{n+1} - b^{n+1}}{b - a}"
      },
      {
        "id": "D",
        "labelLatex": "\\frac{b^{n+1} - a^{n+1}}{b - a}"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Binomial Theorem • EX-III Q.7]** Using partial fractions, $\\frac{1}{(1-ax)(1-bx)} = \\frac{1}{b-a} (\\frac{b}{1-bx} - \\frac{a}{1-ax})$. The coefficient of $x^n$ is $\\frac{1}{b-a} (b \\cdot b^n - a \\cdot a^n) = \\frac{b^{n+1} - a^{n+1}}{b-a}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q34",
    "questionNumber": 34,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "For natural numbers $m$ and $n$, if $(1 - y)^m (1 + y)^n = 1 + a_1y + a_2y^2 + \\dots \\dots \\dots$, and $a_1 = a_2 = 10$, then $(m, n)$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "(20, 45)"
      },
      {
        "id": "B",
        "labelLatex": "(35, 20)"
      },
      {
        "id": "C",
        "labelLatex": "(45, 35)"
      },
      {
        "id": "D",
        "labelLatex": "(35, 45)"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Binomial Theorem • EX-III Q.8]** Expanding: $(1-my+\\binom{m}{2}y^2)(1+ny+\\binom{n}{2}y^2) = 1 + (n-m)y + (\\binom{n}{2} + \\binom{m}{2} - mn)y^2$. Given $n-m=10$ and $\\frac{n(n-1)}{2} + \\frac{m(m-1)}{2} - mn = 10$, solving gives $n=45, m=35$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p2-q35",
    "questionNumber": 35,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "In the binomial expansion of $(a - b)^n, n \\ge 5$, the sum of the fifth and sixth terms is zero, then $a/b$ equals",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\frac{5}{n - 4}"
      },
      {
        "id": "B",
        "labelLatex": "\\frac{6}{n - 5}"
      },
      {
        "id": "C",
        "labelLatex": "\\frac{n - 5}{6}"
      },
      {
        "id": "D",
        "labelLatex": "\\frac{n - 4}{5}"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Binomial Theorem • EX-III Q.9]** $T_5 + T_6 = 0 \\implies \\binom{n}{4} a^{n-4} (-b)^4 + \\binom{n}{5} a^{n-5} (-b)^5 = 0$. This gives $\\binom{n}{4} a = \\binom{n}{5} b$, so $a/b = \\frac{n-4}{5}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  }
];
