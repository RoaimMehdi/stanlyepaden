import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.dataset.interactive
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-transform duration-100 ease-out ${
          isHovered
            ? 'w-12 h-12 border-2 border-cyan-400 bg-cyan-500/10 shadow-[0_0_25px_rgba(0,240,255,0.6)] scale-125'
            : 'w-8 h-8 border border-purple-400/60 bg-purple-500/5 shadow-[0_0_15px_rgba(135,54,247,0.4)]'
        }`}
        style={{
          transform: `translate3d(${position.x - (isHovered ? 24 : 16)}px, ${
            position.y - (isHovered ? 24 : 16)
          }px, 0)`,
        }}
      />
      {/* Inner Dot */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-colors duration-150 ${
          isHovered ? 'w-2 h-2 bg-cyan-300 shadow-[0_0_10px_#00f0ff]' : 'w-1.5 h-1.5 bg-purple-300 shadow-[0_0_8px_#f2a8ff]'
        }`}
        style={{
          transform: `translate3d(${position.x - (isHovered ? 4 : 3)}px, ${
            position.y - (isHovered ? 4 : 3)
          }px, 0)`,
        }}
      />
    </>
  );
}
