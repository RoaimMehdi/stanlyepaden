import React from 'react';

// Exact SP mark: two bold angular C-bracket strokes interlocked
// Top C opens RIGHT, Bottom C opens LEFT — matching official logo exactly
export function LogoMark({ className = "w-8 h-8", color = "#ffffff" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* TOP bracket — bold angular C opening to the right
          Starts bottom-left, goes up, across top, down right side */}
      <path
        d="M 10 38 L 10 12 L 48 12 C 54 12 58 17 58 22 C 58 27 54 32 48 32 L 10 32"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
      {/* BOTTOM bracket — bold angular C opening to the left (rotated 180°)
          Starts top-right, goes down, across bottom, up left side */}
      <path
        d="M 50 22 L 50 48 L 12 48 C 6 48 2 43 2 38 C 2 33 6 28 12 28 L 50 28"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
    </svg>
  );
}

export default function Logo({ className = "", isLight = true, showText = true }) {
  const textColor = isLight ? "text-white" : "text-gray-900";
  const markColor = isLight ? "#ffffff" : "#111827";

  return (
    <div className={`flex items-center gap-2.5 group ${className}`}>
      {/* Official SP interlocking mark */}
      <div className="relative flex items-center justify-center flex-shrink-0">
        <LogoMark
          className="w-9 h-9 sm:w-10 sm:h-10 transition-transform group-hover:scale-110 duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          color={markColor}
        />
      </div>

      {/* Stacked "Stanley / Paden" — matches official logo typography */}
      {showText && (
        <div className="flex flex-col text-left leading-[0.9] font-inter">
          <span
            className={`font-black text-[15px] sm:text-base tracking-tight ${textColor} group-hover:text-cyan-300 transition-colors duration-300`}
          >
            Stanley
          </span>
          <span
            className={`font-black text-[15px] sm:text-base tracking-tight ${textColor} group-hover:text-purple-300 transition-colors duration-300 mt-px`}
          >
            Paden
          </span>
        </div>
      )}
    </div>
  );
}
