import React, { useEffect, useRef } from 'react';
import Logo from './Logo';

/**
 * PageReveal - LIA-style expanding circle entrance animation.
 * Covers the screen with a dark circle that expands outward, then disappears.
 */
export default function PageReveal({ onComplete }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    let start = null;
    const duration = 1100;

    const animate = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      // From 150% (full cover) to 0% (fully revealed)
      const pct = 150 * (1 - eased);
      el.style.clipPath = `circle(${pct}% at 50% 50%)`;
      el.style.webkitClipPath = `circle(${pct}% at 50% 50%)`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        el.style.display = 'none';
        if (onComplete) onComplete();
      }
    };

    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 300);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-page"
      style={{ clipPath: 'circle(150% at 50% 50%)' }}
    >
      {/* Official Logo + loading bar */}
      <div className="flex flex-col items-center gap-5">
        <Logo className="scale-125 mb-2" />

        {/* Loading bar */}
        <div className="h-px w-24 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
            style={{ animation: 'reveal-bar 0.9s ease-out forwards' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes reveal-bar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
