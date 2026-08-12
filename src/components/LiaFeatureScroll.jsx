import React, { useState, useEffect } from 'react';
import { Sparkles, Radio, Cpu, ArrowLeft, ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';
import { booksData } from '../data/booksData';

export default function LiaFeatureScroll({ onOpenExcerpt }) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % booksData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + booksData.length) % booksData.length);
  };

  const setActiveIndex = (idx) => {
    setActiveCardIndex(idx);
  };

  // Auto-play rolling cards every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % booksData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 bg-[#020103] text-white overflow-hidden border-t border-purple-900/30">
      
      {/* Ambient Radial Lights */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(80,33,172,0.22),transparent_55%),radial-gradient(circle_at_20%_70%,rgba(241,61,232,0.12),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(0,240,255,0.12),transparent_45%)]" />

      {/* LIA Background Marquee Text */}
      <div className="pointer-events-none select-none absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-15">
        <div className="font-orbitron font-black text-[clamp(40px,10vw,160px)] whitespace-nowrap text-transparent marquee-track"
             style={{ WebkitTextStroke: '1.5px rgba(135,54,247,0.35)' }}>
          OUR NOVELS ✦ UNIVERSE MATRIX ✦ OUR NOVELS ✦ UNIVERSE MATRIX ✦
        </div>
        <div className="font-orbitron font-black text-[clamp(40px,10vw,160px)] whitespace-nowrap text-transparent marquee-track"
             style={{ WebkitTextStroke: '1.5px rgba(0,240,255,0.35)', animationDirection: 'reverse' }}>
          POWERED BY SCI-FI ✦ STANLEY PADEN ✦ POWERED BY SCI-FI ✦ STANLEY PADEN ✦
        </div>
      </div>

      {/* LIA Floating 3D Rolling Card Deck Showcase */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-8">

        {/* Section Indicator Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-glow border border-purple-500/40">
          <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="font-jura text-xs font-bold uppercase tracking-widest text-cyan-300">
            LIA 3D Rolling Showcase // Book {activeCardIndex + 1} of {booksData.length}
          </span>
        </div>

        {/* 3D Card Stack Container (Zero Blank Space!) */}
        <div className="relative w-full max-w-3xl min-h-[420px] sm:min-h-[440px] rounded-[24px] sm:rounded-[28px] overflow-hidden glass-panel-glow border-2 border-purple-400/50 shadow-[0_20px_70px_rgba(135,54,247,0.4)]">

          {booksData.map((book, idx) => {
            const isActive = idx === activeCardIndex;
            const isPast = idx < activeCardIndex;
            const isPurple = book.accentColor === 'purple';
            const isCyan = book.accentColor === 'cyan';

            // Smooth 3D Rolling transformation offsets matching lialive.ai
            const rotationDeg = isPast ? -25 : isActive ? 0 : 25;
            const translateX = isPast ? -700 : isActive ? 0 : 700;
            const opacity = isActive ? 1 : 0;
            const scale = isActive ? 1 : 0.88;

            return (
              <div
                key={book.id}
                className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-between transition-all duration-700 ease-out overflow-y-auto"
                style={{
                  transform: `translateX(${translateX}px) rotate(${rotationDeg}deg) scale(${scale})`,
                  opacity: opacity,
                  pointerEvents: isActive ? 'auto' : 'none',
                  background: isPurple
                    ? 'radial-gradient(110% 80% at 86% 8%, rgba(190,120,255,0.3) 0%, transparent 55%), linear-gradient(160deg, #180a38 0%, #0c0520 100%)'
                    : isCyan
                    ? 'radial-gradient(110% 80% at 86% 8%, rgba(0,240,255,0.25) 0%, transparent 55%), linear-gradient(160deg, #07192e 0%, #030a14 100%)'
                    : 'radial-gradient(110% 80% at 86% 8%, rgba(255,60,60,0.25) 0%, transparent 55%), linear-gradient(160deg, #240808 0%, #0d0202 100%)',
                }}
              >
                {/* Top HUD Row */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span className="font-jura text-xs font-bold text-cyan-300 uppercase tracking-widest">
                      SHOWCASE NOVEL // 0{idx + 1}
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full glass-panel border border-white/10 font-jura text-[10px] text-gray-300 uppercase">
                    {book.badge}
                  </span>
                </div>

                {/* Main Grid Content */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center py-4">
                  
                  {/* Book Cover */}
                  <div className="sm:col-span-5 flex justify-center">
                    <div className="relative w-32 sm:w-40 h-48 sm:h-56 rounded-xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.8)] border border-white/20 group">
                      <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020103]/80 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>

                  {/* Book Summary Info */}
                  <div className="sm:col-span-7 space-y-3 text-left">
                    <div>
                      <span className="font-jura text-xs text-purple-400 uppercase tracking-widest font-semibold">
                        Stanley Paden Novel · {book.year}
                      </span>
                      <h3 className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white uppercase mt-0.5">
                        {book.title}
                      </h3>
                      <p className="font-outfit text-xs sm:text-sm text-cyan-300 font-medium">{book.subtitle}</p>
                    </div>

                    <p className="font-inter text-xs text-gray-300 leading-relaxed line-clamp-3">
                      {book.description}
                    </p>

                    {/* LIA Prompt Card */}
                    <div className="p-3 rounded-xl glass-panel border border-white/10 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="font-jura text-xs text-gray-200 truncate">
                          Paperback, Hardcover &amp; Audio
                        </span>
                      </div>
                      <button
                        onClick={() => onOpenExcerpt(book.id)}
                        className="px-3.5 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-orbitron text-[10px] font-bold uppercase tracking-wider hover:bg-cyan-400 hover:text-black transition-colors flex-shrink-0"
                      >
                        Read Chapter
                      </button>
                    </div>
                  </div>

                </div>

                {/* LIA Floating Status Step Bar */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between font-jura text-xs">
                  <div className="flex items-center gap-3 text-gray-400 text-[10px] sm:text-xs">
                    <span className="flex items-center gap-1 text-cyan-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>Discover</span>
                    </span>
                    <span>→</span>
                    <span className="flex items-center gap-1 text-purple-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>Read</span>
                    </span>
                    <span>→</span>
                    <span className="flex items-center gap-1 text-amber-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>Order</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    {booksData.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`h-2 rounded-full transition-all ${
                          i === activeCardIndex
                            ? 'bg-cyan-400 shadow-[0_0_10px_#00f0ff] w-6'
                            : 'bg-gray-700 w-2'
                        }`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* Rolling Card Deck Navigation Controls (Zero Blank Space Below!) */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            onClick={handlePrev}
            className="px-5 py-2.5 rounded-full glass-panel border border-purple-500/40 hover:border-cyan-400 text-gray-200 hover:text-cyan-300 font-orbitron text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400" />
            <span>Prev Book</span>
          </button>

          <button
            onClick={handleNext}
            className="px-5 py-2.5 rounded-full glass-panel-glow border border-purple-400/50 hover:border-cyan-400 text-white font-orbitron text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <span>Next Book</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
