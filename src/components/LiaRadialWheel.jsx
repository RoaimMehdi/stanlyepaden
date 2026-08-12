import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, ShoppingBag, Radio, Sparkles, Shield, Cpu, Flame, Compass, Zap, Globe2 } from 'lucide-react';
import { booksData } from '../data/booksData';

export default function LiaRadialWheel({ onOpenExcerpt }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = booksData.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const icons = [
    <Shield className="w-7 h-7 text-purple-400" />,
    <Compass className="w-7 h-7 text-cyan-400" />,
    <Flame className="w-7 h-7 text-red-400" />,
    <Cpu className="w-7 h-7 text-purple-300" />,
    <Zap className="w-7 h-7 text-cyan-300" />,
    <Globe2 className="w-7 h-7 text-amber-400" />,
  ];

  return (
    <section className="relative py-28 bg-[#020106] overflow-hidden border-t border-purple-900/40">
      
      {/* Background Glow Atmospheric Lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(135,54,247,0.25)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(0,240,255,0.15)_0%,transparent_60%)]" />

      {/* Marquee Outline Banner */}
      <div className="pointer-events-none absolute top-6 left-0 right-0 overflow-hidden opacity-15 select-none">
        <div className="marquee-track flex gap-12 w-max">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="marquee-text text-[clamp(50px,9vw,90px)]">
              PADEN WHEEL MATRIX &nbsp; ✦ &nbsp; ROTATING SCI-FI DIAL &nbsp; ✦ &nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        {/* Top Header */}
        <div className="space-y-3" data-reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-glow border border-purple-500/40">
            <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="font-jura text-xs font-bold uppercase tracking-widest text-cyan-300">
              Interactive 3D Arc Wheel // LIA Dial
            </span>
          </div>

          <h2 className="font-orbitron font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Paden Universe <span className="text-gradient-purple">Arc Wheel</span>
          </h2>

          <p className="font-inter text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
            Rotate through Stanley Paden's complete 6-novel collection. Click Next or Prev to sweep through the high-tech radial dial.
          </p>
        </div>

        {/* Central LIA Arc Dome Wheel Container */}
        <div className="relative max-w-6xl mx-auto pt-16 pb-12 px-4" data-reveal data-delay="100">
          
          {/* Top Giant Semi-Circular Arc Header */}
          <div className="relative mx-auto w-72 sm:w-96 h-36 sm:h-44 rounded-t-full glass-panel-glow border-t-2 border-x-2 border-purple-400/60 flex flex-col items-center justify-center shadow-[0_-20px_50px_rgba(135,54,247,0.4)] z-20">
            <span className="font-jura text-[10px] font-bold text-cyan-300 uppercase tracking-widest">
              BUILT FOR SPECULATIVE SCI-FI
            </span>
            <h3 className="font-orbitron font-black text-2xl sm:text-3xl text-white uppercase tracking-wider mt-1">
              STANLEY PADEN
            </h3>
            <span className="font-jura text-[10px] text-purple-300 uppercase tracking-widest mt-1">
              AUTHOR DIAL SHOWCASE
            </span>
          </div>

          {/* Radial Arc Sector Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 -mt-6 relative z-10">
            {booksData.map((book, idx) => {
              const isActive = idx === activeIndex;
              const isPurple = book.accentColor === 'purple';
              const isCyan = book.accentColor === 'cyan';

              return (
                <div
                  key={book.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`cursor-pointer rounded-3xl p-5 text-left transition-all duration-500 flex flex-col justify-between gap-4 border group relative ${
                    isActive
                      ? isPurple
                        ? 'glass-panel-glow border-purple-400 scale-105 shadow-[0_0_40px_rgba(135,54,247,0.5)] z-30'
                        : isCyan
                        ? 'glass-panel-cyan border-cyan-400 scale-105 shadow-[0_0_40px_rgba(0,240,255,0.5)] z-30'
                        : 'glass-panel-red border-red-400 scale-105 shadow-[0_0_40px_rgba(255,60,60,0.5)] z-30'
                      : 'glass-panel border-white/5 opacity-65 hover:opacity-100 hover:border-purple-500/40'
                  }`}
                >
                  {/* Top Icon Box */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isActive
                        ? 'bg-purple-950/90 border border-cyan-400/60 shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                        : 'bg-purple-950/40 border border-white/10'
                    }`}>
                      {icons[idx % icons.length]}
                    </div>
                    <span className="font-jura text-[10px] text-gray-400 font-bold">0{idx + 1}</span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h4 className="font-orbitron font-extrabold text-sm text-white uppercase group-hover:text-cyan-300 transition-colors leading-snug">
                      {book.title}
                    </h4>
                    <p className="font-inter text-[11px] text-gray-300 line-clamp-3 leading-relaxed">
                      {book.subtitle}
                    </p>
                  </div>

                  {/* Active Indicator Bar */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <span className="font-jura text-[9px] text-purple-400 uppercase font-semibold">
                      {book.badge}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-cyan-400 shadow-[0_0_10px_#00f0ff]' : 'bg-gray-700'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Book Detail Focus Panel */}
          <div className="mt-10 glass-panel-glow p-6 sm:p-10 rounded-3xl border border-purple-500/40 text-left space-y-6 relative overflow-hidden shadow-[0_0_50px_rgba(135,54,247,0.3)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-purple-900/40">
              <div className="flex items-center gap-3">
                <img
                  src={booksData[activeIndex].cover}
                  alt={booksData[activeIndex].title}
                  className="w-12 h-16 object-cover rounded-lg border border-white/20 shadow-md"
                />
                <div>
                  <span className="font-jura text-xs text-purple-400 uppercase tracking-widest font-bold">
                    Active Arc Focus // {booksData[activeIndex].year}
                  </span>
                  <h3 className="font-orbitron font-black text-xl sm:text-2xl text-white uppercase mt-0.5">
                    {booksData[activeIndex].title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenExcerpt(booksData[activeIndex].id)}
                  className="px-5 py-2.5 rounded-full font-orbitron text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 shadow-[0_0_20px_rgba(135,54,247,0.4)] flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read Chapter Excerpt</span>
                </button>
              </div>
            </div>

            <p className="font-inter text-sm sm:text-base text-gray-200 leading-relaxed max-w-4xl">
              {booksData[activeIndex].description}
            </p>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handlePrev}
                className="px-5 py-2.5 rounded-full glass-panel border border-white/10 hover:border-cyan-400 text-gray-300 hover:text-white font-orbitron text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4 text-cyan-400" />
                <span>Prev Arc</span>
              </button>

              <div className="flex items-center gap-2">
                {booksData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === activeIndex ? 'w-8 bg-cyan-400 shadow-[0_0_10px_#00f0ff]' : 'w-2 bg-gray-700'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-full glass-panel border border-white/10 hover:border-cyan-400 text-gray-300 hover:text-white font-orbitron text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <span>Next Arc</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
