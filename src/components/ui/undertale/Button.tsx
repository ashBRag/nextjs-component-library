/*
import React from 'react';

interface PixelatedDownloadButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'undertale';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  downloadName?: string;
}

// Alternative Undertale-style button
export function UndertaleDownloadButton({ 
  onClick,
  href = "/resume.pdf",
  className = "",
  downloadName = "Aishwarya_BR_Resume.pdf"
}: PixelatedDownloadButtonProps) {
  return (
    <div className="relative inline-block mt-5">
      <div className="absolute inset-0 bg-red-500/30 blur-lg rounded-lg animate-pulse"></div>
      
      <a
        href={href}
        download={downloadName}
        onClick={onClick}
        className={`
          relative block px-2 py-2 text-lg
          bg-gradient-to-b from-red-500 to-red-700
          border-4 border-red-800 text-white font-mono font-bold uppercase tracking-wider
          hover:from-red-400 hover:to-red-600 hover:border-red-700
          active:from-red-600 active:to-red-800
          shadow-2xl hover:shadow-red-500/50
          hover:scale-105 hover:-translate-y-2 active:scale-95
          transition-all duration-200 ease-out
          ${className}
        `}
      >
        <div className="absolute top-1 left-1 w-2 h-2 border-l-2 border-t-2 border-white/50"></div>
        <div className="absolute top-1 right-1 w-2 h-2 border-r-2 border-t-2 border-white/50"></div>
        <div className="absolute bottom-1 left-1 w-2 h-2 border-l-2 border-b-2 border-white/50"></div>
        <div className="absolute bottom-1 right-1 w-2 h-2 border-r-2 border-b-2 border-white/50"></div>

        <div className="relative z-10 flex items-center gap-4">
          <div className="text-2xl">♥</div>
          <span>Download Resume</span>
          <div className="text-xs opacity-75">[PDF]</div>
        </div>

        <div className="absolute inset-1 border border-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-white animate-pulse"></div>
        </div>
      </a>
    </div>
  );
}
*/

import React from 'react';



// Orange variant

// Dark purple variant
export function UndertaleDownloadButton({
  onClick,
  href = "/resume.pdf",
  className = "",
  downloadName = "Aishwarya_BR_Resume.pdf"
}) {
  return (
    <div className="relative inline-block mt-5">
      <div className="absolute inset-0 bg-purple-700/20 blur-lg rounded-lg"></div>
      
      <a
        href={href}
        download={downloadName}
        onClick={onClick}
        className={`
          relative block px-6 py-3 text-base
          bg-gradient-to-b from-slate-700 to-purple-800
          border-2 border-purple-600/50 text-white font-mono font-semibold tracking-wide
          hover:from-slate-600 hover:to-purple-700 hover:border-purple-500
          active:from-slate-800 active:to-purple-900
          shadow-lg hover:shadow-purple-600/30
          hover:scale-102 active:scale-98
          transition-all duration-200 ease-out
          ${className}
        `}
      >
        <div className="relative z-10 flex items-center gap-3">
          <div className="text-lg">📄</div>
          <span>Download Resume</span>
          <div className="text-xs opacity-60">[PDF]</div>
        </div>
        
        <div className="absolute inset-0 border border-purple-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>
      </a>
    </div>
  );
}
