import React from 'react';
import { Delete, RotateCcw } from 'lucide-react';

interface NumericalKeypadProps {
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
}

export const NumericalKeypad: React.FC<NumericalKeypadProps> = ({
  value,
  onChange,
  disabled = false,
}) => {
  const handleDigit = (digit: string) => {
    if (disabled) return;
    // Disallow multiple minus or bad decimal placements
    if (digit === '.' && value.includes('.')) return;
    if (digit === '-' && value.length > 0) return;
    if (value.length >= 12) return;
    onChange(value + digit);
  };

  const handleBackspace = () => {
    if (disabled || !value) return;
    onChange(value.slice(0, -1));
  };

  const handleClear = () => {
    if (disabled) return;
    onChange('');
  };

  return (
    <div className="w-full max-w-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3">
      {/* Value Display / Direct Input */}
      <div className="mb-3">
        <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
          Enter Numerical Value:
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={value}
            onChange={(e) => {
              // allow numbers, minus, dot
              const val = e.target.value.replace(/[^0-9.-]/g, '');
              onChange(val);
            }}
            placeholder="e.g. 25 or 12.5"
            disabled={disabled}
            className="w-full px-3 py-2 text-base font-mono font-bold tracking-wider text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Virtual Keypad Matrix */}
      <div className="grid grid-cols-3 gap-1.5">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
          <button
            key={digit}
            type="button"
            onClick={() => handleDigit(digit)}
            disabled={disabled}
            className="h-10 text-base font-semibold font-mono bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-600 rounded-md shadow-xs active:scale-95 transition-all"
          >
            {digit}
          </button>
        ))}
        <button
          type="button"
          onClick={() => handleDigit('.')}
          disabled={disabled}
          className="h-10 text-lg font-bold font-mono bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-600 rounded-md shadow-xs active:scale-95 transition-all"
        >
          .
        </button>
        <button
          type="button"
          onClick={() => handleDigit('0')}
          disabled={disabled}
          className="h-10 text-base font-semibold font-mono bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-600 rounded-md shadow-xs active:scale-95 transition-all"
        >
          0
        </button>
        <button
          type="button"
          onClick={() => handleDigit('-')}
          disabled={disabled}
          className="h-10 text-base font-bold font-mono bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-600 rounded-md shadow-xs active:scale-95 transition-all"
        >
          -
        </button>
      </div>

      {/* Actions: Backspace & Clear */}
      <div className="grid grid-cols-2 gap-2 mt-2">
        <button
          type="button"
          onClick={handleBackspace}
          disabled={disabled || !value}
          className="h-9 text-xs font-medium flex items-center justify-center gap-1.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-md active:scale-95 transition-all disabled:opacity-50"
        >
          <Delete className="w-3.5 h-3.5" />
          Backspace
        </button>
        <button
          type="button"
          onClick={handleClear}
          disabled={disabled || !value}
          className="h-9 text-xs font-medium flex items-center justify-center gap-1.5 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/50 rounded-md active:scale-95 transition-all disabled:opacity-50"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Clear
        </button>
      </div>
    </div>
  );
};
