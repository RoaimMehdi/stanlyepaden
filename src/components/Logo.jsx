import React, { useState, useEffect } from 'react';

// Crisp SVG Vector Mark matching exact official SP / CS slanted monogram mark
export function LogoMark({ className = "w-8 h-8", color = "#ffffff" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Slanted upper C/S loop */}
      <path
        d="M 18 52 C 18 30 32 16 64 16 L 82 16 C 88 16 92 22 88 32 L 48 32 C 40 32 36 36 36 42 C 36 48 42 48 50 48 L 78 48"
        stroke={color}
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Slanted lower C/S loop */}
      <path
        d="M 82 48 C 82 70 68 84 36 84 L 18 84 C 12 84 8 78 12 68 L 52 68 C 60 68 64 64 64 58 C 64 52 58 52 50 52 L 22 52"
        stroke={color}
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function getTheme() {
  return typeof document !== 'undefined'
    ? document.documentElement.getAttribute('data-theme') || 'dark'
    : 'dark';
}

export default function Logo({ className = "", showText = true }) {
  const [imgError, setImgError] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const syncTheme = () => setIsDark(getTheme() === 'dark');
    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const textColor = isDark ? "text-white" : "text-gray-900";
  const markColor = isDark ? "#ffffff" : "#111827";

  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Logo Icon Container */}
      <div className="relative flex items-center justify-center flex-shrink-0">
        {!imgError ? (
          <div className="relative rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src="/assets/stanley_paden_logo.png"
              alt="Stanley Paden Logo"
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
              style={{
                filter: isDark ? 'invert(1) hue-rotate(180deg) brightness(1.2)' : 'none',
                mixBlendMode: isDark ? 'screen' : 'normal',
              }}
              onError={() => setImgError(true)}
            />
          </div>
        ) : (
          <LogoMark
            className="w-9 h-9 sm:w-10 sm:h-10 transition-transform group-hover:scale-110 duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
            color={markColor}
          />
        )}
      </div>

      {/* Stacked Typography — "Stanley Paden" */}
      {showText && (
        <div className="flex flex-col text-left leading-[0.92] font-inter select-none">
          <span
            className={`font-black text-base sm:text-lg tracking-tight ${textColor} group-hover:text-cyan-300 transition-colors duration-300`}
          >
            Stanley
          </span>
          <span
            className={`font-black text-base sm:text-lg tracking-tight ${textColor} group-hover:text-purple-300 transition-colors duration-300 mt-[1px]`}
          >
            Paden
          </span>
        </div>
      )}
    </div>
  );
}
