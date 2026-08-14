import React, { useEffect, useState } from 'react';
import { Sparkles, Zap, Radio } from 'lucide-react';

/**
 * PostLoaderAnimation - Explosive Holographic Entrance Burst
 * Runs immediately after the loading screen completes.
 * Features expanding energy shockwave ring, laser scan line, and floating cyber HUD welcome badge.
 */
export default function PostLoaderAnimation() {
  const [active, setActive] = useState(true);
  const [hudVisible, setHudVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setHudVisible(false), 2200);
    const t2 = setTimeout(() => setActive(false), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[88888] pointer-events-none overflow-hidden select-none">

      {/* 
        1. EXPANDING HOLOGRAPHIC LIGHT BURST
      */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 blur-xl opacity-80 animate-[burst-expand_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards]" />
        <div className="w-10 h-10 rounded-full border-2 border-cyan-300 shadow-[0_0_50px_#00f0ff] animate-[burst-ring_1.4s_cubic-bezier(0.16,1,0.3,1)_forwards]" />
      </div>

      {/* 
        2. FULL-SCREEN VERTICAL LASER SCAN BEAM
      */}
      <div className="absolute inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_30px_#00f0ff,0_0_60px_#8736f7] animate-[laser-sweep_1.5s_cubic-bezier(0.25,0.46,0.45,0.94)_forwards]" />

      {/* 
        3. FLOATING CYBER HUD WELCOME BADGE
      */}
      <div
        className={`absolute top-24 left-1/2 -translate-x-1/2 z-[88889] transition-all duration-700 ${hudVisible ? 'opacity-100 translateY(0) scale-100' : 'opacity-0 -translateY-8 scale-95'
          }`}
      >
        <div className="px-5 py-2.5 rounded-full glass-panel-glow border-2 border-cyan-400/60 shadow-[0_0_35px_rgba(0,240,255,0.7)] flex items-center gap-3 bg-[#070214]/90 backdrop-blur-xl">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <Zap className="w-4 h-4 text-cyan-300 animate-bounce" />
          <span className="font-orbitron text-xs sm:text-sm font-black uppercase tracking-widest text-white">
            STANLEY PADEN UNIVERSE ONLINE
          </span>
          <Sparkles className="w-4 h-4 text-purple-400" />
        </div>
      </div>

      <style>{`
        @keyframes burst-expand {
          0% { transform: scale(0.1); opacity: 1; }
          60% { opacity: 0.8; }
          100% { transform: scale(35); opacity: 0; }
        }
        @keyframes burst-ring {
          0% { transform: scale(0.1); opacity: 1; border-width: 8px; }
          100% { transform: scale(25); opacity: 0; border-width: 1px; }
        }
        @keyframes laser-sweep {
          0% { top: -5vh; opacity: 1; }
          100% { top: 105vh; opacity: 0; }
        }
      `}</style>

    </div>
  );
}
