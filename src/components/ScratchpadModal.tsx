import React, { useRef, useState, useEffect } from 'react';
import { X, RotateCcw, PenTool, Eraser } from 'lucide-react';

interface ScratchpadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScratchpadModal: React.FC<ScratchpadModalProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [mode, setMode] = useState<'pen' | 'eraser'>('pen');
  const [color, setColor] = useState('#2563eb');

  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set display size and internal coordinate size
    const rect = canvas.getBoundingClientRect();
    if (canvas.width !== rect.width || canvas.height !== rect.height) {
      canvas.width = rect.width;
      canvas.height = rect.height;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    if (mode === 'eraser') {
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 18;
    } else {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
      <div className="w-full max-w-3xl h-[560px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-800 text-sm">Virtual Scratchpad / Rough Sheet</span>
            <span className="text-xs text-slate-500">For rough math & calculations</span>
          </div>
          <div className="flex items-center gap-2">
            {/* Tool controls */}
            <button
              onClick={() => setMode('pen')}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 font-medium transition-colors ${
                mode === 'pen' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              Pen
            </button>
            <button
              onClick={() => setMode('eraser')}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 font-medium transition-colors ${
                mode === 'eraser' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Eraser className="w-3.5 h-3.5" />
              Eraser
            </button>
            <div className="h-4 w-px bg-slate-300 mx-1" />
            <button
              onClick={clearCanvas}
              className="p-1.5 rounded-lg text-xs flex items-center gap-1.5 font-medium text-slate-600 hover:bg-rose-50 hover:text-rose-600 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Clear
            </button>
            <div className="h-4 w-px bg-slate-300 mx-1" />
            <button
              onClick={onClose}
              className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 bg-white relative cursor-crosshair overflow-hidden">
          {/* Subtle grid lines like an Indian rough sheet */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="w-full h-full block"
          />
        </div>
      </div>
    </div>
  );
};
