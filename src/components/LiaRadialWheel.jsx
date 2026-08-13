import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, MessageSquare, Shield, Compass, Flame, Cpu, Zap, Globe2 } from 'lucide-react';
import { booksData } from '../data/booksData';

export default function LiaRadialWheel({ onOpenExcerpt }) {
  const sectionRef = useRef(null);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const [smoothProgress, setSmoothProgress] = useState(0);
  const [manualIndex, setManualIndex] = useState(null);

  const total = booksData.length;
  const angleStep = 32;

  // Silky 60FPS Lerp Physics loop
  useEffect(() => {
    let animId;

    const lerpLoop = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0001) {
        currentProgressRef.current += diff * 0.08;
        setSmoothProgress(currentProgressRef.current);
      }
      animId = requestAnimationFrame(lerpLoop);
    };

    animId = requestAnimationFrame(lerpLoop);

    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalScrollable = el.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      targetProgressRef.current = progress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const activeIndex = manualIndex !== null
    ? manualIndex
    : Math.min(total - 1, Math.floor(smoothProgress * total + 0.1));

  const diskRotation = manualIndex !== null
    ? -(manualIndex * angleStep)
    : -(smoothProgress * (total - 1) * angleStep);

  const handleNext = () => setManualIndex((activeIndex + 1) % total);
  const handlePrev = () => setManualIndex((activeIndex - 1 + total) % total);

  const icons = [
    <Shield className="w-7 h-7 text-purple-300" />,
    <Compass className="w-7 h-7 text-cyan-300" />,
    <Flame className="w-7 h-7 text-red-400" />,
    <Cpu className="w-7 h-7 text-purple-400" />,
    <Zap className="w-7 h-7 text-cyan-400" />,
    <Globe2 className="w-7 h-7 text-amber-400" />,
  ];

  return (
    <div ref={sectionRef} className="relative h-[180vh] select-none">
      
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Ambient Lighting */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#4c1380_0%,#1a0433_50%,#05010a_90%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(135,54,247,0.35)_0%,transparent_70%)]" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-2 sm:px-6">

          {/* Giant Arc Wheel Card */}
          <div className="relative h-[600px] sm:h-[700px] rounded-[40px] sm:rounded-[80px] border-2 border-purple-500/40 bg-gradient-to-b from-[#240847]/95 via-[#120324]/95 to-[#070114] shadow-[0_0_100px_rgba(76,19,128,0.8)] overflow-hidden">
            
            {/* Top Hub — Inverted Black Dome */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
              <div className="w-72 sm:w-[460px] h-28 sm:h-36 rounded-b-[140px] sm:rounded-b-[230px] bg-[#05010a] border-b-2 border-x-2 border-purple-500/60 flex flex-col items-center justify-center pt-2 sm:pt-4 shadow-[0_20px_50px_rgba(0,0,0,0.95)]">
                <span className="font-jura text-[9px] sm:text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">
                  BUILT FOR SPECULATIVE SCI-FI
                </span>
                <span className="font-orbitron font-black text-2xl sm:text-4xl text-white tracking-widest uppercase mt-1">
                  STANLEY PADEN
                </span>
                <span className="font-jura text-[9px] sm:text-xs text-purple-300 font-bold uppercase tracking-[0.2em] mt-1">
                  AUTHOR UNIVERSE PLATFORM
                </span>
              </div>
            </div>

            {/* Scroll Indicator Badge */}
            <div className="absolute top-6 right-8 z-30 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-glow border border-cyan-400/40">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-jura text-[10px] font-bold text-cyan-300 uppercase tracking-widest">
                SCROLL TO ROTATE ({activeIndex + 1}/{total})
              </span>
            </div>

            {/* Rotating Disk with Lerp Easing */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="relative w-[1300px] h-[1300px] sm:w-[1500px] sm:h-[1500px] rounded-full border-2 border-purple-500/30 pointer-events-auto"
                style={{
                  top: '-530px',
                  transform: `rotate(${diskRotation}deg)`,
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  willChange: 'transform',
                }}
              >
                {/* Glowing Arc Rim */}
                <div className="absolute inset-0 rounded-full border-4 border-purple-400/20 shadow-[inset_0_0_60px_rgba(135,54,247,0.3)]" />

                {/* Sector Cards */}
                {booksData.map((book, idx) => {
                  const isActive = idx === activeIndex;
                  const sectorAngle = (idx - 1.5) * angleStep;

                  return (
                    <div
                      key={book.id}
                      className="absolute top-1/2 left-1/2 -ml-[140px] -mt-[140px] w-[280px] h-[280px] flex items-center justify-center"
                      style={{ transform: `rotate(${sectorAngle}deg) translateY(510px)` }}
                    >
                      {/* Counter-rotated card */}
                      <div
                        onClick={() => { setManualIndex(idx); onOpenExcerpt(book.id); }}
                        className={`cursor-pointer w-[255px] sm:w-[275px] p-5 sm:p-6 rounded-[28px] text-center flex flex-col items-center justify-between gap-4 border-2 transition-all duration-500 backdrop-blur-md relative ${
                          isActive
                            ? 'glass-panel-glow border-cyan-400 scale-110 shadow-[0_0_50px_rgba(0,240,255,0.7)] bg-gradient-to-b from-purple-900/90 via-purple-950/90 to-[#070114]/95 z-30'
                            : 'glass-panel border-purple-500/30 hover:border-purple-400/70 bg-gradient-to-b from-purple-950/50 via-purple-950/30 to-[#070114]/80 opacity-75 hover:opacity-100 hover:scale-105'
                        }`}
                        style={{
                          transform: `rotate(${-sectorAngle - diskRotation}deg)`,
                          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, box-shadow 0.3s',
                        }}
                      >
                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-400 border-2 border-white/40 shadow-[0_0_20px_rgba(0,240,255,0.8)] scale-110'
                            : 'bg-purple-950/80 border border-purple-500/40'
                        }`}>
                          {icons[idx % icons.length]}
                        </div>

                        {/* Title & Subtitle */}
                        <div className="space-y-1">
                          <h4 className={`font-orbitron font-extrabold text-base sm:text-lg uppercase leading-tight ${
                            isActive ? 'text-cyan-300' : 'text-white'
                          }`}>
                            {book.title}
                          </h4>
                          <p className="font-inter text-xs text-gray-300 leading-relaxed line-clamp-2">
                            {book.subtitle}
                          </p>
                        </div>

                        {/* Action Button */}
                        <button
                          onClick={(e) => { e.stopPropagation(); onOpenExcerpt(book.id); }}
                          className={`px-4 py-1.5 rounded-full font-jura text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                            isActive
                              ? 'bg-cyan-400 text-black shadow-[0_0_15px_#00f0ff]'
                              : 'glass-panel border border-white/10 text-gray-300 hover:text-white'
                          }`}
                        >
                          <BookOpen className="w-3 h-3" />
                          <span>Explore Story</span>
                        </button>

                        {isActive && (
                          <div className="absolute -top-1.5 w-8 h-1 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff]" />
                        )}
                      </div>

                      {/* Sector divider line */}
                      <div
                        className="absolute top-1/2 left-1/2 w-px h-[600px] bg-gradient-to-b from-purple-500/40 via-purple-500/10 to-transparent pointer-events-none"
                        style={{
                          transform: `translate(-50%, -100%) rotate(${sectorAngle}deg)`,
                          transformOrigin: 'bottom center',
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-5 inset-x-6 sm:inset-x-12 z-30 flex items-center justify-between gap-4 pointer-events-auto">
              <button
                onClick={handlePrev}
                className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full glass-panel border-2 border-purple-500/40 hover:border-cyan-400 text-white font-orbitron text-xs sm:text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_30px_rgba(135,54,247,0.4)] active:scale-95"
              >
                <ArrowLeft className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400" />
                <span>Prev</span>
              </button>

              <button
                onClick={handleNext}
                className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-1 shadow-[0_0_40px_rgba(135,54,247,0.8)] hover:scale-110 transition-transform flex items-center justify-center group active:scale-95"
                title="Spin Wheel"
              >
                <div className="w-full h-full bg-[#05010a] rounded-full flex items-center justify-center group-hover:bg-purple-900/60 transition-colors">
                  <MessageSquare className="w-6 h-6 text-purple-300 fill-purple-300/20 group-hover:text-cyan-300" />
                </div>
              </button>

              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full glass-panel border-2 border-purple-500/40 hover:border-cyan-400 text-white font-orbitron text-xs sm:text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_30px_rgba(135,54,247,0.4)] active:scale-95"
              >
                <span>Next</span>
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400" />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="hidden sm:flex flex-col gap-2.5 absolute right-6 top-1/2 -translate-y-1/2 z-30">
              {booksData.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setManualIndex(i)}
                  className={`cursor-pointer rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? 'w-2.5 h-8 bg-cyan-400 shadow-[0_0_15px_#00f0ff]'
                      : 'w-2.5 h-2.5 bg-purple-900/80 hover:bg-purple-400'
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
