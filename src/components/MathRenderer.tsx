import React, { useMemo } from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  className?: string;
  block?: boolean;
}

export const MathRenderer: React.FC<MathRendererProps> = ({
  content = '',
  className = '',
  block = false,
}) => {
  const renderedHtml = useMemo(() => {
    if (!content) return '';

    try {
      let parsed = content;

      // Normalize common double backslashes from JSON/string escapes:
      // e.g. \\begin -> \begin, \\end -> \end, \\\\ -> \\ for linebreaks inside matrices
      parsed = parsed.replace(/\\\\begin\{/g, '\\begin{');
      parsed = parsed.replace(/\\\\end\{/g, '\\end{');
      parsed = parsed.replace(/\\\\([a-zA-Z])/g, '\\$1');

      // If the content is purely a math block without delimiters
      if (block && !parsed.includes('$')) {
        return katex.renderToString(parsed, {
          displayMode: true,
          throwOnError: false,
        });
      }

      // Match block math: $$...$$
      parsed = parsed.replace(/\$\$([\s\S]+?)\$\$/g, (_, math) => {
        try {
          const cleanMath = math.trim();
          return katex.renderToString(cleanMath, {
            displayMode: true,
            throwOnError: false,
          });
        } catch {
          return `<span class="text-rose-500">[Math: ${math}]</span>`;
        }
      });

      // Match inline math: $...$
      parsed = parsed.replace(/(?<!\\)\$([^\$]+?)\$/g, (_, math) => {
        try {
          const cleanMath = math.trim();
          return katex.renderToString(cleanMath, {
            displayMode: false,
            throwOnError: false,
          });
        } catch {
          return `<span class="text-rose-500">[Math: ${math}]</span>`;
        }
      });

      // Match standalone un-delimited LaTeX environments like \begin{bmatrix}...\end{bmatrix} or \begin{vmatrix}...\end{vmatrix}
      parsed = parsed.replace(/(\\begin\{(bmatrix|vmatrix|pmatrix|matrix|aligned|array)\}[\s\S]+?\\end\{\2\})/g, (matched) => {
        try {
          return katex.renderToString(matched, {
            displayMode: true,
            throwOnError: false,
          });
        } catch {
          return matched;
        }
      });

      // Match standalone un-delimited LaTeX expressions if any remain (e.g. \frac{1}{2}, \sqrt{3}, \alpha, \vec{v})
      parsed = parsed.replace(/\\(frac|sqrt|vec|int|sum|alpha|beta|gamma|delta|theta|lambda|mu|pi|sigma|omega|Delta|Omega|times|div|pm|approx|neq|leq|geq|infty|rightarrow|leftarrow)(?:\{[^{}]*\}|\[[^\[\]]*\]|[a-zA-Z0-9\^_\+\-\*\/= ])+/g, (matched) => {
        try {
          return katex.renderToString(matched, {
            displayMode: false,
            throwOnError: false,
          });
        } catch {
          return matched;
        }
      });

      // Format linebreaks
      parsed = parsed.replace(/\n/g, '<br/>');

      return parsed;
    } catch (e) {
      console.error('KaTeX rendering error:', e);
      return content;
    }
  }, [content, block]);

  return (
    <div
      className={`math-content leading-relaxed text-slate-800 dark:text-slate-100 ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};
