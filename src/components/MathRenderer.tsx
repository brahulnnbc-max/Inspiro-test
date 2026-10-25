import React, { useMemo } from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  className?: string;
  block?: boolean;
}

const SAFE_HTML_TAG_RE = /^<\/?(?:strong|b|em|i|u|br|sup|sub|span|div|p|ul|ol|li|code|table|thead|tbody|tr|th|td)\b[^>]*>$/i;

function sanitizePlainTextSegment(segment: string): string {
  // Preserve legitimate HTML formatting tags while escaping bare '<' (e.g. "0 < x < 1" outside $)
  let out = '';
  let lastIdx = 0;
  const tagCandidateRe = /<[^>]*>/g;
  let match: RegExpExecArray | null;
  while ((match = tagCandidateRe.exec(segment)) !== null) {
    const before = segment.slice(lastIdx, match.index).replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const candidate = match[0];
    if (SAFE_HTML_TAG_RE.test(candidate)) {
      out += before + candidate;
    } else {
      out += before + candidate.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    lastIdx = match.index + candidate.length;
  }
  out += segment.slice(lastIdx).replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // Render any standalone un-delimited LaTeX commands in plain text only (never inside KaTeX output)
  out = out.replace(
    /\\(frac|sqrt|vec|int|sum|prod|lim|alpha|beta|gamma|delta|theta|lambda|mu|pi|sigma|omega|Delta|Omega|times|div|pm|mp|approx|neq|leq|geq|infty|rightarrow|leftarrow|Rightarrow|Leftrightarrow)(?:\{[^{}]*\}|\[[^\[\]]*\]|[a-zA-Z0-9\^_\+\-\*\/=])*/g,
    (matched) => {
      try {
        return katex.renderToString(matched.trim(), {
          displayMode: false,
          throwOnError: false,
          strict: false,
        });
      } catch {
        return matched;
      }
    }
  );

  // Support Markdown **bold** in plain text segments (e.g. **Paragraph:**, **Column-I**)
  out = out.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');

  return out.replace(/\n/g, '<br/>');
}

export const MathRenderer: React.FC<MathRendererProps> = ({
  content = '',
  className = '',
  block = false,
}) => {
  const renderedHtml = useMemo(() => {
    if (!content) return '';

    try {
      // Pure math block without $ delimiters
      if (block && !content.includes('$')) {
        return katex.renderToString(content.trim(), {
          displayMode: true,
          throwOnError: false,
          strict: false,
          trust: true,
        });
      }

      // Single-pass tokenization for $$...$$ (display) and $...$ (inline)
      const tokenRegex = /(\$\$[\s\S]+?\$\$|(?<!\\)\$[^\$]+?\$)/g;
      const parts = content.split(tokenRegex);

      return parts
        .map((part) => {
          if (!part) return '';
          if (part.startsWith('$$') && part.endsWith('$$') && part.length >= 4) {
            const math = part.slice(2, -2).trim();
            if (!math) return '';
            try {
              return katex.renderToString(math, {
                displayMode: true,
                throwOnError: false,
                strict: false,
                trust: true,
              });
            } catch {
              return `<span class="font-mono text-amber-400">${math}</span>`;
            }
          }
          if (part.startsWith('$') && part.endsWith('$') && part.length >= 2) {
            const math = part.slice(1, -1).trim();
            if (!math) return '';
            try {
              return katex.renderToString(math, {
                displayMode: false,
                throwOnError: false,
                strict: false,
                trust: true,
              });
            } catch {
              return `<span class="font-mono text-amber-400">${math}</span>`;
            }
          }
          return sanitizePlainTextSegment(part);
        })
        .join('');
    } catch (e) {
      console.error('KaTeX rendering error:', e);
      return content;
    }
  }, [content, block]);

  return (
    <div
      className={`math-content leading-relaxed overflow-x-auto text-slate-800 dark:text-slate-100 ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};
