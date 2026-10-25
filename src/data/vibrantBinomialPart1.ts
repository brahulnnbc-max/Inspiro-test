import { Question } from '../types/exam';

export const BINOMIAL_PART_1_QUESTIONS: Question[] = [
  {
    "id": "bin-p1-q1",
    "questionNumber": 1,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The $5^{\\text{th}}$ term of the expansion of $(x - 2)^8$ is-",
    "options": [
      {
        "id": "A",
        "labelLatex": "$^{8}C_{5}x^3(-2)^5$"
      },
      {
        "id": "B",
        "labelLatex": "$^{8}C_{5}x^3 2^5$"
      },
      {
        "id": "C",
        "labelLatex": "$^{8}C_{4}x^4(-2)^4$"
      },
      {
        "id": "D",
        "labelLatex": "$^{8}C_{6}x^2(-2)^6$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Binomial Theorem • PT-1 Q.1]** The general term is $T_{r+1} = {}^{n}C_{r}a^{n-r}b^{r}$. For the $5^{\\text{th}}$ term, $r = 4$, so $T_5 = {}^{8}C_{4}x^{8-4}(-2)^4 = {}^{8}C_{4}x^4(-2)^4$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q2",
    "questionNumber": 2,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the $4^{\\text{th}}$ term in the expansion of $\\left(ax + \\frac{1}{x}\\right)^n$ is $\\frac{5}{2}$, then the values of $a$ and $n$ are-",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1/2, \\ 6$"
      },
      {
        "id": "B",
        "labelLatex": "$1, \\ 3$"
      },
      {
        "id": "C",
        "labelLatex": "$1/2, \\ 3$"
      },
      {
        "id": "D",
        "labelLatex": "\\text{can not be found}"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • PT-1 Q.2]** Using $T_4 = {}^{n}C_{3} (ax)^{n-3} \\left(\\frac{1}{x}\\right)^3 = {}^{n}C_{3} a^{n-3} x^{n-6} = \\frac{5}{2}$. Equating powers of $x$ gives $n-6 = 0 \\implies n=6$. Then $^{6}C_{3} a^3 = 20 a^3 = \\frac{5}{2} \\implies a^3 = \\frac{1}{8} \\implies a = 1/2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q3",
    "questionNumber": 3,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The coefficient of $(3r)^{\\text{th}}$ term and coefficient of $(r + 2)^{\\text{th}}$ term in the expansion of $(1 + x)^{2n}$ are equal then (where $r > 1, n > 2$, positive integer)-",
    "options": [
      {
        "id": "A",
        "labelLatex": "$r = n/2$"
      },
      {
        "id": "B",
        "labelLatex": "$r = n/3$"
      },
      {
        "id": "C",
        "labelLatex": "$r = \\frac{n + 1}{2}$"
      },
      {
        "id": "D",
        "labelLatex": "$r = \\frac{n - 1}{2}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • PT-1 Q.3]** The coefficients are $^{2n}C_{3r-1}$ and $^{2n}C_{r+1}$. Since $^{n}C_{x} = {}^{n}C_{y} \\implies x = y$ or $x + y = n$. Here $3r-1 = r+1 \\implies 2r=2 \\implies r=1$ (rejected since $r>1$). Thus $3r-1 + r+1 = 2n \\implies 4r = 2n \\implies r = n/2$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q4",
    "questionNumber": 4,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The coefficient of $x^5$ in the expansion of $(2 + 3x)^{12}$ is -",
    "options": [
      {
        "id": "A",
        "labelLatex": "$^{12}C_{5}2^{5} \\cdot 3^{7}$"
      },
      {
        "id": "B",
        "labelLatex": "$^{12}C_{6}2^{6} \\cdot 3^{6}$"
      },
      {
        "id": "C",
        "labelLatex": "$^{12}C_{5}2^{7} \\cdot 3^{5}$"
      },
      {
        "id": "D",
        "labelLatex": "\\text{None of these}"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Binomial Theorem • PT-1 Q.4]** The general term is $T_{r+1} = {}^{12}C_{r} 2^{12-r} (3x)^r = {}^{12}C_{r} 2^{12-r} 3^r x^r$. For $r=5$, coefficient is $^{12}C_{5} 2^{12-5} 3^5 = {}^{12}C_{5} 2^7 3^5$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q5",
    "questionNumber": 5,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If in the expansion of $\\left(x^2 - \\frac{1}{4}\\right)^n$, the coefficient of third term is $31$, then the value of $n$ is-",
    "options": [
      {
        "id": "A",
        "labelLatex": "$30$"
      },
      {
        "id": "B",
        "labelLatex": "$31$"
      },
      {
        "id": "C",
        "labelLatex": "$29$"
      },
      {
        "id": "D",
        "labelLatex": "$32$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Binomial Theorem • PT-1 Q.5]** The third term is $T_3 = {}^{n}C_{2} (x^2)^{n-2} \\left(-\\frac{1}{4}\\right)^2 = {}^{n}C_{2} \\frac{1}{16} x^{2n-4}$. The coefficient is $^{n}C_{2} \\frac{1}{16} = 31 \\implies n(n-1) = 31 \\times 32 \\implies n = 32$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q6",
    "questionNumber": 6,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The number of terms in the expansion of $(1 + 5\\sqrt{2}x)^9 + (1 - 5\\sqrt{2}x)^9$ is-",
    "options": [
      {
        "id": "A",
        "labelLatex": "$5$"
      },
      {
        "id": "B",
        "labelLatex": "$7$"
      },
      {
        "id": "C",
        "labelLatex": "$9$"
      },
      {
        "id": "D",
        "labelLatex": "$10$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • PT-1 Q.6]** The expansion of $(a+b)^n + (a-b)^n$ for odd $n$ has $\\frac{n+1}{2}$ terms. Here $n=9$, so number of terms is $\\frac{9+1}{2} = 5$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q7",
    "questionNumber": 7,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The coefficient of $x^{-26}$ in the expansion of $\\left(x^2 - \\frac{2}{x^4}\\right)^{11}$ is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$330 \\times 2^{6}$"
      },
      {
        "id": "B",
        "labelLatex": "$-330 \\times 2^{6}$"
      },
      {
        "id": "C",
        "labelLatex": "$330 \\times 2^{7}$"
      },
      {
        "id": "D",
        "labelLatex": "$-330 \\times 2^{7}$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Binomial Theorem • PT-1 Q.7]** General term is $T_{r+1} = {}^{11}C_{r} (x^2)^{11-r} \\left(-\\frac{2}{x^4}\\right)^r = {}^{11}C_{r} (-1)^r 2^r x^{22 - 6r}$. Set $22 - 6r = -26 \\implies 6r = 48 \\implies r = 8$. Coefficient is $^{11}C_{8} (-1)^8 2^8 = 165 \\times 256$ wait, $^{11}C_8 = 165$, $2^8 = 256$, let's recompute: $165 \\times 256 = 330 \\times 128 = 330 \\times 2^7$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q8",
    "questionNumber": 8,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The term independent of $y$ in the binomial expansion of $\\left(\\frac{1}{2}y^{1/3} + y^{-1/5}\\right)^8$ is-",
    "options": [
      {
        "id": "A",
        "labelLatex": "\\text{sixth}"
      },
      {
        "id": "B",
        "labelLatex": "\\text{seventh}"
      },
      {
        "id": "C",
        "labelLatex": "\\text{fifth}"
      },
      {
        "id": "D",
        "labelLatex": "\\text{None of these}"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • PT-1 Q.8]** General term $T_{r+1} = {}^{8}C_{r} \\left(\\frac{1}{2}y^{1/3}\\right)^{8-r} (y^{-1/5})^r = {}^{8}C_{r} \\left(\\frac{1}{2}\\right)^{8-r} y^{\\frac{8-r}{3} - \\frac{r}{5}}$. For independence of $y$, $\\frac{8-r}{3} - \\frac{r}{5} = 0 \\implies 40 - 5r - 3r = 0 \\implies 8r = 40 \\implies r=5$. Thus term is $T_6$, i.e., sixth term.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q9",
    "questionNumber": 9,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The term independent of $x$ in $\\left(2x + \\frac{1}{3x}\\right)^6$ is -",
    "options": [
      {
        "id": "A",
        "labelLatex": "$160/9$"
      },
      {
        "id": "B",
        "labelLatex": "$80/9$"
      },
      {
        "id": "C",
        "labelLatex": "$160/27$"
      },
      {
        "id": "D",
        "labelLatex": "$80/3$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Binomial Theorem • PT-1 Q.9]** General term $T_{r+1} = {}^{6}C_{r} (2x)^{6-r} (3x)^{-r} = {}^{6}C_{r} 2^{6-r} 3^{-r} x^{6-2r}$. Setting $6-2r=0 \\implies r=3$. Then $T_4 = {}^{6}C_{3} 2^3 3^{-3} = 20 \\times 8 \\times \\frac{1}{27} = \\frac{160}{27}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q10",
    "questionNumber": 10,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If in the expansion of $(1 + y)^n$, the coefficient of $5^{\\text{th}}$, $6^{\\text{th}}$ and $7^{\\text{th}}$ terms are in A.P., then $n$ is equal to-",
    "options": [
      {
        "id": "A",
        "labelLatex": "$7, \\ 11$"
      },
      {
        "id": "B",
        "labelLatex": "$7, \\ 14$"
      },
      {
        "id": "C",
        "labelLatex": "$8, \\ 16$"
      },
      {
        "id": "D",
        "labelLatex": "\\text{None of these}"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Binomial Theorem • PT-1 Q.10]** Coefficients are $^{n}C_{4}, {}^{n}C_{5}, {}^{n}C_{6}$. Since they are in A.P., $2{}^{n}C_{5} = {}^{n}C_{4} + {}^{n}C_{6}$. Solving this gives $n=7$ or $n=14$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q11",
    "questionNumber": 11,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The number of integral terms in the expansion of $(5^{1/2} + 7^{1/6})^{642}$ is -",
    "options": [
      {
        "id": "A",
        "labelLatex": "$106$"
      },
      {
        "id": "B",
        "labelLatex": "$108$"
      },
      {
        "id": "C",
        "labelLatex": "$103$"
      },
      {
        "id": "D",
        "labelLatex": "$109$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Binomial Theorem • PT-2 Q.1]** General term is $T_{r+1} = {}^{642}C_{r} 5^{\\frac{642-r}{2}} 7^{r/6}$. For integral terms, $r$ must be a multiple of $6$ and $0 \\le r \\le 642$. The number of such terms is $\\frac{642}{6} + 1 = 107 + 1 = 108$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q12",
    "questionNumber": 12,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the middle term in the expansion of $\\left(x^2 + \\frac{1}{x}\\right)^n$ is $924 x^6$, then $n =$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$10$"
      },
      {
        "id": "B",
        "labelLatex": "$12$"
      },
      {
        "id": "C",
        "labelLatex": "$14$"
      },
      {
        "id": "D",
        "labelLatex": "\\text{None of these}"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Binomial Theorem • PT-2 Q.2]** Since $n$ must be even for a single middle term, let $n=2m$. Middle term is $T_{m+1} = {}^{2m}C_{m} (x^2)^m (1/x)^m = {}^{2m}C_{m} x^m = 924 x^6 \\implies m=6 \\implies n=12$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q13",
    "questionNumber": 13,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The middle term in the expansion of $(1 - 3x + 3x^2 - x^3)^6$ is -",
    "options": [
      {
        "id": "A",
        "labelLatex": "$^{18}C_{10}x^{10}$"
      },
      {
        "id": "B",
        "labelLatex": "$^{18}C_{9}(-x)^9$"
      },
      {
        "id": "C",
        "labelLatex": "$^{18}C_{9}x^9$"
      },
      {
        "id": "D",
        "labelLatex": "$-^{18}C_{10}x^{10}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Binomial Theorem • PT-2 Q.3]** The expression is $(1-x)^3)^6 = (1-x)^{18}$. The middle term is $T_{10} = {}^{18}C_{9} (-x)^9$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q14",
    "questionNumber": 14,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The $5^{\\text{th}}$ term from the end in the expansion of $\\left(\\frac{x^3}{2} - \\frac{2}{x^3}\\right)^9$ is -",
    "options": [
      {
        "id": "A",
        "labelLatex": "$63x^3$"
      },
      {
        "id": "B",
        "labelLatex": "$-\\frac{252}{x^3}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{672}{x^{18}}$"
      },
      {
        "id": "D",
        "labelLatex": "\\text{None of these}"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Binomial Theorem • PT-2 Q.4]** The $5^{\\text{th}}$ term from the end is the $(9 - 5 + 2)^{\\text{th}} = 6^{\\text{th}}$ term from the beginning. $T_6 = {}^{9}C_{5} \\left(\\frac{x^3}{2}\\right)^4 \\left(-\\frac{2}{x^3}\\right)^5 = 126 \\cdot \\frac{x^{12}}{16} \\cdot \\left(-\\frac{32}{x^{15}}\\right) = -\\frac{252}{x^3}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q15",
    "questionNumber": 15,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $(1 + x)^n = C_0 + C_1 x + C_2 x^2 + ... + C_n x^n$, then the value of $C_0 + 2C_1 + 3C_2 + ... + (n+1)C_n$ is -",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2^n (n+1)$"
      },
      {
        "id": "B",
        "labelLatex": "$2^{n-1} (n+1)$"
      },
      {
        "id": "C",
        "labelLatex": "$2^{n-1} (n+2)$"
      },
      {
        "id": "D",
        "labelLatex": "$2^n (n+2)$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Binomial Theorem • PT-2 Q.5]** The given sum is $\\sum_{r=0}^{n} (r+1)C_r = \\sum r C_r + \\sum C_r = n 2^{n-1} + 2^n = 2^{n-1}(n+2)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q16",
    "questionNumber": 16,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the coefficients of $r^{\\text{th}}$ and $(r + 1)^{\\text{th}}$ terms in the expansion of $(3 + 7x)^{29}$ are equal, then $r$ equals-",
    "options": [
      {
        "id": "A",
        "labelLatex": "$15$"
      },
      {
        "id": "B",
        "labelLatex": "$21$"
      },
      {
        "id": "C",
        "labelLatex": "$14$"
      },
      {
        "id": "D",
        "labelLatex": "\\text{None of these}"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Binomial Theorem • PT-2 Q.6]** The coefficients are $^{29}C_{r-1} 3^{30-r} 7^{r-1}$ and $^{29}C_{r} 3^{29-r} 7^r$. Equating them: $^{29}C_{r-1} 3 = {}^{29}C_{r} 7 \\implies \\frac{r}{30-r} \\cdot 3 = 7 \\implies 3r = 210 - 7r \\implies 10r = 210 \\implies r=21$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q17",
    "questionNumber": 17,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The coefficient of $x^{49}$ in the expansion of $(x - 1)\\left(x - \\frac{1}{2}\\right)\\left(x - \\frac{1}{2^2}\\right) \\dots \\left(x - \\frac{1}{2^{49}}\\right)$ is equal to",
    "options": [
      {
        "id": "A",
        "labelLatex": "$-2\\left(1 - \\frac{1}{2^{50}}\\right)$"
      },
      {
        "id": "B",
        "labelLatex": "\\text{coefficient of } x"
      },
      {
        "id": "C",
        "labelLatex": "$2\\left(1 - \\frac{1}{2^{50}}\\right)$"
      },
      {
        "id": "D",
        "labelLatex": "$-2\\left(1 - \\frac{1}{2^{49}}\\right)$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • PT-2 Q.7]** The coefficient of $x^{49}$ is $-\\sum_{k=0}^{49} \\frac{1}{2^k} = -\\frac{1 - (1/2)^{50}}{1 - 1/2} = -2\\left(1 - \\frac{1}{2^{50}}\\right)$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q18",
    "questionNumber": 18,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The sum of the binomial coefficients of $\\left[2x + \\frac{1}{x}\\right]^n$ is equal to $256$. The constant term in the expansion is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1120$"
      },
      {
        "id": "B",
        "labelLatex": "$2110$"
      },
      {
        "id": "C",
        "labelLatex": "$1210$"
      },
      {
        "id": "D",
        "labelLatex": "\\text{none}"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • PT-2 Q.8]** Sum of coefficients is $2^n = 256 \\implies n=8$. General term for constant term: $T_{r+1} = {}^{8}C_{r} (2x)^{8-r} (x^{-r}) = {}^{8}C_{r} 2^{8-r} x^{8-2r}$. For constant term $8-2r=0 \\implies r=4$. $T_5 = {}^{8}C_{4} 2^4 = 70 \\times 16 = 1120$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q19",
    "questionNumber": 19,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Middle term in the expansion of $(x^2 - 2x)^{10}$ will be -",
    "options": [
      {
        "id": "A",
        "labelLatex": "$^{10}C_{4} x^{17} 2^4$"
      },
      {
        "id": "B",
        "labelLatex": "$-^{10}C_{5} 2^5 x^{15}$"
      },
      {
        "id": "C",
        "labelLatex": "$-^{10}C_{4} 2^4 x^{17}$"
      },
      {
        "id": "D",
        "labelLatex": "$^{10}C_{5} 2^4 x^{15}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Binomial Theorem • PT-2 Q.9]** Since $n=10$, there is a single middle term, $T_6 = {}^{10}C_{5} (x^2)^5 (-2x)^5 = {}^{10}C_{5} x^{10} (-32) x^5 = -^{10}C_{5} 2^5 x^{15}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q20",
    "questionNumber": 20,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The middle term in the expansion of $\\left(\\frac{3}{x^2} - \\frac{x^3}{6}\\right)^9$ is -",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{189}{8}x^2, \\ \\frac{21}{16}x^7$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{189}{8}x^2, \\ -\\frac{21}{16}x^7$"
      },
      {
        "id": "C",
        "labelLatex": "$-\\frac{189}{8}x^2, \\ -\\frac{21}{16}x^7$"
      },
      {
        "id": "D",
        "labelLatex": "\\text{None of these}"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Binomial Theorem • PT-2 Q.10]** Middle terms are $T_5$ and $T_6$ since $n=9$. Calculating $T_5 = {}^{9}C_{4} (3/x^2)^5 (-x^3/6)^4 = \\frac{189}{8} x^2$ and $T_6 = {}^{9}C_{5} (3/x^2)^4 (-x^3/6)^5 = -\\frac{21}{16} x^7$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q21",
    "questionNumber": 21,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "n!\\left(\\frac{1}{n!} + \\frac{1}{2!(n-2)!} + \\frac{1}{4!(n-4)!} + \\dots + \\frac{1}{n!}\\right) \\text{ is equal to -}",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2^n$"
      },
      {
        "id": "B",
        "labelLatex": "$2^{n-1}$"
      },
      {
        "id": "C",
        "labelLatex": "$2^{n+1}$"
      },
      {
        "id": "D",
        "labelLatex": "$2^{-n+1}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Binomial Theorem • PT-3 Q.1]** The expression inside the bracket multiplied by $n!$ represents the sum of coefficients at even positions in $(1+1)^n$, which is equal to $2^{n-1}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q22",
    "questionNumber": 22,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $(1+x)^n = C_0 + C_1 x + C_2 x^2 + \\dots + C_n x^n$, then $C_0 C_1 + C_1 C_2 + C_2 C_3 + \\dots + C_{n-1}C_n$ is equal to-",
    "options": [
      {
        "id": "A",
        "labelLatex": "$\\frac{2n!}{n! \\ n!}$"
      },
      {
        "id": "B",
        "labelLatex": "$\\frac{2n!}{n!(n+1)!}$"
      },
      {
        "id": "C",
        "labelLatex": "$\\frac{2n!}{(n-1)!(n+1)!}$"
      },
      {
        "id": "D",
        "labelLatex": "$\\frac{2n!}{(n-1)! \\ n!}$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Binomial Theorem • PT-3 Q.2]** This is the coefficient of $x^{n-1}$ in $(1+x)^n (x+1)^n$, which is $^{2n}C_{n-1} = \\frac{(2n)!}{(n-1)!(n+1)!}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q23",
    "questionNumber": 23,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $(1 + x + x^2)^{2n} = a_0 + a_1 x + a_2 x^2 + \\dots$, then the value of $a_0 - a_1 + a_2 - a_3 + \\dots$ is-",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2^n$"
      },
      {
        "id": "B",
        "labelLatex": "$3^n$"
      },
      {
        "id": "C",
        "labelLatex": "$1$"
      },
      {
        "id": "D",
        "labelLatex": "$0$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Binomial Theorem • PT-3 Q.3]** Substituting $x = -1$ in $(1+x+x^2)^{2n}$ gives $(1 - 1 + 1)^{2n} = 1^{2n} = 1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q24",
    "questionNumber": 24,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The sum of the coefficients in the expansion of $(a + 2b + c)^{10}$ is -",
    "options": [
      {
        "id": "A",
        "labelLatex": "$4^{10}$"
      },
      {
        "id": "B",
        "labelLatex": "$3^{10}$"
      },
      {
        "id": "C",
        "labelLatex": "$2^{10}$"
      },
      {
        "id": "D",
        "labelLatex": "$10^4$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • PT-3 Q.4]** Put $a=1, b=1, c=1$ to get $(1 + 2(1) + 1)^{10} = 4^{10}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q25",
    "questionNumber": 25,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The sum of the coefficient of the terms of the expansion of polynomial $(1 + x - 3x^2)^{2143}$ is -",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2^{2143}$"
      },
      {
        "id": "B",
        "labelLatex": "$1$"
      },
      {
        "id": "C",
        "labelLatex": "$-1$"
      },
      {
        "id": "D",
        "labelLatex": "$0$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Binomial Theorem • PT-3 Q.5]** Putting $x=1$, we get $(1 + 1 - 3(1))^{2143} = (-1)^{2143} = -1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q26",
    "questionNumber": 26,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If $|x| < 1/2$, then expansion of $(1 - 2x)^{1/2}$ is-",
    "options": [
      {
        "id": "A",
        "labelLatex": "$1 - x - \\frac{1}{2}x^2 \\dots$"
      },
      {
        "id": "B",
        "labelLatex": "$1 - x + \\frac{1}{2}x^2 \\dots$"
      },
      {
        "id": "C",
        "labelLatex": "$1 + x - \\frac{1}{2}x^2 \\dots$"
      },
      {
        "id": "D",
        "labelLatex": "\\text{None of these}"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • PT-3 Q.6]** Using binomial theorem for fractional index: $(1-2x)^{1/2} = 1 + \\frac{1}{2}(-2x) + \\frac{(1/2)(-1/2)}{2!}(-2x)^2 + \\dots = 1 - x - \\frac{1}{2}x^2 \\dots$",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q27",
    "questionNumber": 27,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The tenth term in the expansion of $(1 + x)^{-3}$ is -",
    "options": [
      {
        "id": "A",
        "labelLatex": "$-55 x^9$"
      },
      {
        "id": "B",
        "labelLatex": "$55 x^9$"
      },
      {
        "id": "C",
        "labelLatex": "$-66 x^{10}$"
      },
      {
        "id": "D",
        "labelLatex": "$66 x^{10}$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • PT-3 Q.7]** The general term for $(1+x)^{-n}$ is $T_{r+1} = (-1)^r \\frac{n(n+1)\\dots(n+r-1)}{r!} x^r$. For $r=9, n=3$, $T_{10} = (-1)^9 \\frac{(3)(4)\\dots(11)}{9!} x^9 = - \\frac{11 \\cdot 10}{2} x^9 = -55 x^9$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q28",
    "questionNumber": 28,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The value of $\\sqrt{99}$ upto three decimals is -",
    "options": [
      {
        "id": "A",
        "labelLatex": "$9.949$"
      },
      {
        "id": "B",
        "labelLatex": "$9.958$"
      },
      {
        "id": "C",
        "labelLatex": "$9.944$"
      },
      {
        "id": "D",
        "labelLatex": "$9.939$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • PT-3 Q.8]** $\\sqrt{99} = (100 - 1)^{1/2} = 10(1 - 1/100)^{1/2} \\approx 10(1 - \\frac{1}{200} - \\frac{1}{8} \\frac{1}{10000}) = 10(1 - 0.005 - 0.0000125) = 9.9499 \\approx 9.949$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q29",
    "questionNumber": 29,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The remainder, when $(15^{23} + 23^{23})$ is divided by $19$, is",
    "options": [
      {
        "id": "A",
        "labelLatex": "$4$"
      },
      {
        "id": "B",
        "labelLatex": "$15$"
      },
      {
        "id": "C",
        "labelLatex": "$0$"
      },
      {
        "id": "D",
        "labelLatex": "$18$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Binomial Theorem • PT-3 Q.9]** $15^{23} + 23^{23}$ is divisible by $15 + 23 = 38$, which is a multiple of $19$, hence the remainder is $0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q30",
    "questionNumber": 30,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "In the expansion of $\\left(\\frac{x}{3^4} + \\frac{5x}{3^4}\\right)^n$ the sum of the binomial coefficients is $64$ and the term with the greatest binomial coefficient exceeds the third term by $(n-1)$, then the value of $x$ must be",
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
        "labelLatex": "$-1$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Binomial Theorem • PT-3 Q.10]** Sum of binomial coefficients is $2^n = 64 \\implies n=6$. The greatest coefficient is $^{6}C_{3} = 20$. Third term coefficient is $^{6}C_{2} = 15$. Given condition leads to consistent values with $x=0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q31",
    "questionNumber": 31,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "The last two digits of the number $3^{400}$ are :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$81$"
      },
      {
        "id": "B",
        "labelLatex": "$43$"
      },
      {
        "id": "C",
        "labelLatex": "$29$"
      },
      {
        "id": "D",
        "labelLatex": "$01$"
      }
    ],
    "correctAnswer": "D",
    "explanationLatex": "**[Binomial Theorem • PT-3 Q.11]** $3^{400} = (3^4)^{100} = 81^{100} = (1 + 80)^{100} = 1 + 100(80) + \\dots$ Thus the last two digits are $01$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q32",
    "questionNumber": 32,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find the coefficients : (i) $x^7$ in $\\left(ax^2 + \\frac{1}{bx}\\right)^{11}$ \\quad (ii) $x^{-7}$ in $\\left(ax - \\frac{1}{bx^2}\\right)^{11}$ \\\\\n(iii) Find the relation between $a$ & $b$, so that these coefficients are equal.",
    "options": [
      {
        "id": "A",
        "labelLatex": "(i) ${}^{11}C_5\\frac{a^6}{b^5}$, (ii) ${}^{11}C_6\\frac{a^5}{b^6}$, (iii) $ab = 1$"
      },
      {
        "id": "B",
        "labelLatex": "(i) ${}^{11}C_5\\frac{a^5}{b^6}$, (ii) ${}^{11}C_6\\frac{a^6}{b^5}$, (iii) $ab = 1$"
      },
      {
        "id": "C",
        "labelLatex": "(i) ${}^{11}C_4\\frac{a^6}{b^5}$, (ii) ${}^{11}C_5\\frac{a^5}{b^6}$, (iii) $a = b$"
      },
      {
        "id": "D",
        "labelLatex": "(i) ${}^{11}C_5\\frac{a^6}{b^5}$, (ii) $-{}^{11}C_6\\frac{a^5}{b^6}$, (iii) $ab = -1$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • EX-I Q.1]** For $(ax^2 + 1/(bx))^{11}$, the general term is ${}^{11}C_r(ax^2)^{11-r}(bx)^{-r}$, giving $22-3r=7 \\implies r=5$. For $(ax - 1/(bx^2))^{11}$, $11-3r=-7 \\implies r=6$. Equating gives ${}^{11}C_5 \\frac{a^6}{b^5} = {}^{11}C_6 \\frac{a^5}{b^6} \\implies ab=1$ since ${}^{11}C_5 = {}^{11}C_6$ and $(-1)^6 = 1$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q33",
    "questionNumber": 33,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the coefficients of the $r^{\\text{th}}$, $(r + 1)^{\\text{th}}$ & $(r + 2)^{\\text{th}}$ terms in the expansion of $(1 + x)^{14}$ are in AP, find $r$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "$r = 4$ or $8$"
      },
      {
        "id": "B",
        "labelLatex": "$r = 5$ or $9$"
      },
      {
        "id": "C",
        "labelLatex": "$r = 6$ or $10$"
      },
      {
        "id": "D",
        "labelLatex": "$r = 3$ or $7$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Binomial Theorem • EX-I Q.2]** The coefficients are ${}^{14}C_{r-1}, {}^{14}C_r, {}^{14}C_{r+1}$. Being in AP gives $2\\,{}^{14}C_r = {}^{14}C_{r-1} + {}^{14}C_{r+1}$, which simplifies to $(14-2r)^2 = 14+2 = 16 \\implies 14-2r = \\pm 4$, giving $r = 5$ or $9$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q34",
    "questionNumber": 34,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Given that $(1 + x + x^2)^n = a_0 + a_1 x + a_2 x^2 + \\dots + a_{2n}x^{2n}$, find the values of : \\\\\n(i) $a_0 + a_1 + a_2 + \\dots + a_{2n}$ ; (ii) $a_0 - a_1 + a_2 - a_3 \\dots + a_{2n}$ ; (iii) $a_0^2 - a_1^2 + a_2^2 - a_3^2 + \\dots + a_{2n}^2$",
    "options": [
      {
        "id": "A",
        "labelLatex": "(i) $3^n$, (ii) $1$, (iii) $a_n$"
      },
      {
        "id": "B",
        "labelLatex": "(i) $2^n$, (ii) $0$, (iii) $a_n$"
      },
      {
        "id": "C",
        "labelLatex": "(i) $3^n$, (ii) $-1$, (iii) $a_{2n}$"
      },
      {
        "id": "D",
        "labelLatex": "(i) $3^{2n}$, (ii) $1$, (iii) $a_0$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • EX-I Q.3]** Substitute $x=1$ to get $3^n$; substitute $x=-1$ to get $1^n = 1$. Multiply $(1+x+x^2)^n$ and $(1-x+x^2)^n = (1+x^2+x^4)^n$ to find the coefficient of $x^{2n}$ is $a_n$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q35",
    "questionNumber": 35,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Prove that : ${}^{n-1}C_r + {}^{n-2}C_r + {}^{n-3}C_r + \\dots + {}^r C_r = {}^n C_{r+1}$.",
    "options": [
      {
        "id": "A",
        "labelLatex": "${}^n C_r$"
      },
      {
        "id": "B",
        "labelLatex": "${}^n C_{r+1}$"
      },
      {
        "id": "C",
        "labelLatex": "${}^{n+1} C_{r+1}$"
      },
      {
        "id": "D",
        "labelLatex": "${}^{n-1} C_{r+1}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Binomial Theorem • EX-I Q.4]** By the hockey-stick identity, $\\sum_{k=r}^{n-1} {}^k C_r = {}^{n}C_{r+1}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q36",
    "questionNumber": 36,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "(a) Which is larger : $(99^{50} + 100^{50})$ or $(101)^{50}$. \\\\\n(b) Show that ${}^{2n-2}C_{n-2} + 2\\cdot{}^{2n-2}C_{n-1} + {}^{2n-2}C_n > \\frac{4n}{n+1}$, $n \\in \\mathbb{N},\\; n > 2$",
    "options": [
      {
        "id": "A",
        "labelLatex": "$101^{50}$ is larger"
      },
      {
        "id": "B",
        "labelLatex": "$99^{50} + 100^{50}$ is larger"
      },
      {
        "id": "C",
        "labelLatex": "Both are equal"
      },
      {
        "id": "D",
        "labelLatex": "Cannot be determined"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • EX-I Q.5]** $101^{50} - 99^{50} = (100+1)^{50} - (100-1)^{50} = 2[50\\cdot 100^{49} + {}^{50}C_3 100^{47} + \\dots] = 100^{50} + \\text{positive terms} > 100^{50}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q37",
    "questionNumber": 37,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Find numerically the greatest term in the expansion of : \\\\\n(i) $(2 + 3x)^9$ when $x = \\frac{3}{2}$ \\\\\n(ii) $(3 - 5x)^{15}$ when $x = \\frac{1}{5}$",
    "options": [
      {
        "id": "A",
        "labelLatex": "(i) $T_6 = 7 \\cdot 3^{13} / 2$, (ii) $455 \\times 3^{12}$"
      },
      {
        "id": "B",
        "labelLatex": "(i) $T_7 = \\frac{7 \\cdot 3^{13}}{2}$, (ii) $455 \\times 3^{12}$"
      },
      {
        "id": "C",
        "labelLatex": "(i) $T_7 = 7 \\cdot 3^{12}$, (ii) $455 \\times 3^{11}$"
      },
      {
        "id": "D",
        "labelLatex": "(i) $T_6 = 3^{14}$, (ii) $1365 \\times 3^{12}$"
      }
    ],
    "correctAnswer": "B",
    "explanationLatex": "**[Binomial Theorem • EX-I Q.6]** For (i), $\\frac{T_{r+1}}{T_r} = \\frac{10-r}{r} \\frac{3(3/2)}{2} = \\frac{10-r}{r} \\frac{9}{4} \\ge 1 \\implies 13r \\le 90 \\implies r=6$, so $T_7 = {}^{9}C_6 2^3 (9/2)^6 = \\frac{7 \\cdot 3^{13}}{2}$. For (ii), $\\frac{16-r}{r} \\frac{1}{3} \\ge 1 \\implies r \\le 4$, $T_4 = {}^{15}C_3 3^{12} = 455 \\times 3^{12}$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q38",
    "questionNumber": 38,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "Given $s_n = 1 + q + q^2 + \\dots + q^n$ & $S_n = 1 + \\frac{q+1}{2} + \\left(\\frac{q+1}{2}\\right)^2 + \\dots + \\left(\\frac{q+1}{2}\\right)^n$, $q \\neq 1$, then ${}^{n+1}C_1 + {}^{n+1}C_2\\cdot s_1 + {}^{n+1}C_3\\cdot s_2 + \\dots + {}^{n+1}C_{n+1}\\cdot s_n$ equals :",
    "options": [
      {
        "id": "A",
        "labelLatex": "$2^{n-1} \\cdot S_n$"
      },
      {
        "id": "B",
        "labelLatex": "$2^{n+1} \\cdot S_n$"
      },
      {
        "id": "C",
        "labelLatex": "$2^n \\cdot S_n$"
      },
      {
        "id": "D",
        "labelLatex": "$S_n$"
      }
    ],
    "correctAnswer": "C",
    "explanationLatex": "**[Binomial Theorem • EX-I Q.7]** Substitute $s_r = \\frac{q^{r+1}-1}{q-1}$ into the sum to obtain $\\frac{(1+q)^{n+1} - 2^{n+1}}{q-1} = 2^n S_n$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q39",
    "questionNumber": 39,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If the coefficient of $a^{r-1},\\; a^r,\\; a^{r+1}$ in the expansion of $(1 + a)^n$ are in arithmetic progression, then which of the following relations holds?",
    "options": [
      {
        "id": "A",
        "labelLatex": "$n^2 - n(4r + 1) + 4r^2 - 2 = 0$"
      },
      {
        "id": "B",
        "labelLatex": "$n^2 - n(4r - 1) + 4r^2 + 2 = 0$"
      },
      {
        "id": "C",
        "labelLatex": "$n^2 - n(2r + 1) + 4r^2 - 2 = 0$"
      },
      {
        "id": "D",
        "labelLatex": "$n^2 - n(4r + 1) + 2r^2 - 1 = 0$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • EX-I Q.8]** From $2\\,{}^n C_r = {}^n C_{r-1} + {}^n C_{r+1}$, dividing by ${}^n C_r$ yields $2 = \\frac{r}{n-r+1} + \\frac{n-r}{r+1}$, which simplifies to $n^2 - n(4r + 1) + 4r^2 - 2 = 0$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  },
  {
    "id": "bin-p1-q40",
    "questionNumber": 40,
    "sectionId": "mathematics",
    "type": "SINGLE_CORRECT",
    "promptLatex": "If ${}^n J_r = \\frac{(1 - x^n)(1 - x^{n-1})(1 - x^{n-2})\\dots(1 - x^{n-r+1})}{(1 - x)(1 - x^2)(1 - x^3)\\dots(1 - x^r)}$, then ${}^n J_{n-r}$ is equal to :",
    "options": [
      {
        "id": "A",
        "labelLatex": "${}^n J_r$"
      },
      {
        "id": "B",
        "labelLatex": "$(-1)^r {}^n J_r$"
      },
      {
        "id": "C",
        "labelLatex": "${}^n J_r^{-1}$"
      },
      {
        "id": "D",
        "labelLatex": "$x^r {}^n J_r$"
      }
    ],
    "correctAnswer": "A",
    "explanationLatex": "**[Binomial Theorem • EX-I Q.9]** ${}^n J_r$ is the Gaussian binomial coefficient $\\binom{n}{r}_q$, which satisfies the symmetry property ${}^n J_{n-r} = {}^n J_r$.",
    "positiveMarks": 4,
    "negativeMarks": 1
  }
];
