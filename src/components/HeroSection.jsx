import React, { useEffect, useRef, useState } from 'react';
import { Play, BookOpen, ArrowRight, Radio, ShieldAlert, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroCanvas from './HeroCanvas';

const uniqueHeroItems = [
  { title: 'THE BOX', desc: 'Confront the Unseen Side of Immortality', id: 'the-box' },
  { title: 'RETURN FROM EGYPT', desc: 'Ancient Artifacts & Cybernetic Destiny', id: 'return-from-egypt' },
  { title: 'SUN GOD\'S HEIR TRILOGY', desc: 'Reincarnation & 17th Century High Seas', id: 'sun-gods-heir' },
  { title: 'I HATE SAINT LOUIS', desc: 'Dark Cyber Noir Sci-Fi Thriller', id: 'i-hate-saint-louis' },
  { title: 'SYNTHETIC CONSCIOUSNESS', desc: 'Quantum Archival Beyond Mortality', id: 'synthetic-consciousness' },
  { title: 'SEARCH FOR SOLOMON', desc: 'Ancient Crypts & Orbital AI', id: 'search-for-solomon' },
];

export default function HeroSection({ onOpenExcerpt, onOpenTrailer }) {
  const heroRef = useRef(null);
  const bookRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);
  const [orbVisible, setOrbVisible] = useState(false);
  const [railVisible, setRailVisible] = useState(false);

  // Staggered entrance timeline right after preloader finishes
  useEffect(() => {
    const t1 = setTimeout(() => setTextVisible(true), 250);
    const t2 = setTimeout(() => setOrbVisible(true), 450);
    const t3 = setTimeout(() => setRailVisible(true), 650);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  // 3D mouse tilt on book cover
  useEffect(() => {
    const el = bookRef.current;
    if (!el) return;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const rx = ((e.clientY - cy) / rect.height) * -14;
      const ry = ((e.clientX - cx) / rect.width) * 14;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`;
    };
    const handleLeave = () => {
      el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
    };
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">

      {/* Particle Matrix Canvas */}
      <HeroCanvas />

      {/* Post-Loading Ambient Radial Lighting */}
      <div className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(circle at 50% 42%, rgba(80,33,172,0.28), transparent 40%), radial-gradient(circle at 50% 50%, rgba(11,31,102,0.26), transparent 45%), linear-gradient(180deg, var(--bg-page) 0%, var(--bg-hero-deep) 100%)' }}
      />

      {/* Cyber laser grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'linear-gradient(to right, #8736f7 1px, transparent 1px), linear-gradient(to bottom, #8736f7 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left: Headline — 3D Staggered entrance */}
          <div
            className="lg:col-span-5 text-left space-y-4 sm:space-y-6"
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0) scale(1)' : 'translateY(36px) scale(0.96)',
              transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {/* Live broadcast badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full glass-panel-glow border border-purple-500/40 shadow-[0_0_15px_rgba(135,54,247,0.4)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-cyan-400 -ml-3.5" />
              <span className="font-jura text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-cyan-300">
                Official Author Experience
              </span>
            </div>

            <h1 className="font-orbitron font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
              Meet <span className="text-gradient-purple">Stanley<br />Paden</span>
            </h1>

            <p className="font-outfit text-base sm:text-xl font-light tracking-wide text-purple-200/90 leading-snug">
              Award-Winning Sci-Fi Author of{' '}
              <span className="text-cyan-300 font-semibold">The Box</span>,{' '}
              <span className="text-cyan-300 font-semibold">Return From Egypt</span> &amp;{' '}
              <span className="text-cyan-300 font-semibold">The Sun God's Heir</span>
            </p>

            <p className="font-inter text-xs sm:text-sm text-gray-400 leading-relaxed max-w-lg">
              Step into a gripping exploration of the future of life itself. Stanley Paden challenges readers to confront the terrifying consequences of defying death, ancient mysteries, and cybernetic destiny.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <Link
                to="/shop"
                className="btn-shine px-6 py-3.5 rounded-full font-orbitron text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-cyan-400 hover:to-purple-600 shadow-[0_0_30px_rgba(135,54,247,0.5)] hover:shadow-[0_0_40px_rgba(0,240,255,0.8)] transition-all flex items-center justify-center gap-2 group hover:scale-105"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => onOpenExcerpt('the-box')}
                className="px-6 py-3.5 rounded-full font-orbitron text-xs font-bold uppercase tracking-widest text-gray-200 glass-panel border border-purple-500/40 hover:border-cyan-400 hover:text-white transition-all flex items-center justify-center gap-2 hover:scale-105"
              >
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>Read Excerpt</span>
              </button>
            </div>

            {/* Stats */}
            <div className="pt-4 sm:pt-6 grid grid-cols-3 gap-2 sm:gap-4 border-t border-purple-900/40">
              <div>
                <div className="font-orbitron font-extrabold text-lg sm:text-xl text-cyan-400">#1</div>
                <div className="font-jura text-[9px] sm:text-xs text-gray-400 uppercase tracking-wider">Sci-Fi Bestseller</div>
              </div>
              <div>
                <div className="font-orbitron font-extrabold text-lg sm:text-xl text-purple-400">6+</div>
                <div className="font-jura text-[9px] sm:text-xs text-gray-400 uppercase tracking-wider">Epic Novels</div>
              </div>
              <div>
                <div className="font-orbitron font-extrabold text-lg sm:text-xl text-amber-400">4.9★</div>
                <div className="font-jura text-[9px] sm:text-xs text-gray-400 uppercase tracking-wider">Reader Rating</div>
              </div>
            </div>
          </div>

          {/* Center: Glowing 3D Book Cover with Sonar Rings */}
          <div
            className="lg:col-span-4 flex flex-col items-center justify-center relative my-6 lg:my-0"
            style={{
              opacity: orbVisible ? 1 : 0,
              transform: orbVisible ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <div className="relative w-64 sm:w-80 h-64 sm:h-80 flex items-center justify-center">

              {/* Sonar rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-40 sm:w-48 h-40 sm:h-48 rounded-full border border-purple-500/20 animate-sonar" />
                <div className="absolute w-40 sm:w-48 h-40 sm:h-48 rounded-full border border-cyan-500/15 animate-sonar-delay" />
                <div className="absolute w-28 sm:w-32 h-28 sm:h-32 rounded-full border border-purple-400/30 animate-pulse" />
              </div>

              {/* Static decorative rings */}
              <div className="absolute inset-0 rounded-full border border-purple-500/15 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-3 sm:-inset-4 rounded-full border border-dashed border-cyan-500/20 animate-[spin_35s_linear_infinite_reverse]" />

              {/* Book cover — 3D tilt */}
              <div
                ref={bookRef}
                className="dark-surface relative z-20 w-44 sm:w-56 h-64 sm:h-72 rounded-2xl overflow-hidden glass-panel-glow border-2 border-purple-400/60 shadow-[0_0_60px_rgba(135,54,247,0.7)] animate-float book-tilt cursor-pointer"
                onClick={() => onOpenExcerpt('the-box')}
                style={{ transition: 'transform 0.15s ease-out', transformStyle: 'preserve-3d' }}
              >
                <img
                  src="/assets/the_box_cover.jpg"
                  alt="The Box Book Cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020103] via-transparent to-transparent opacity-80" />

                {/* Badge */}
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-purple-900/80 backdrop-blur-md border border-purple-400/50 flex items-center gap-1.5">
                  <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                  <span className="font-jura text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-wider">Featured Novel</span>
                </div>

                {/* Waveform bars + play button */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
                  <div className="flex flex-col text-left">
                    <span className="font-orbitron text-[10px] sm:text-xs font-bold text-white">THE BOX</span>
                    <span className="font-jura text-[9px] sm:text-[10px] text-cyan-300">Stanley Paden</span>
                  </div>
                  {/* Waveform bars */}
                  <div className="flex items-center gap-[2px] sm:gap-[3px] mr-1 sm:mr-2">
                    {[...Array(7)].map((_, i) => (
                      <span key={i} className="wave-bar bg-cyan-400" />
                    ))}
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); onOpenTrailer(); }}
                    className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 p-0.5 shadow-[0_0_20px_rgba(0,240,255,0.8)] hover:scale-110 transition-transform"
                  >
                    <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                      <Play className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-cyan-300 fill-cyan-300 ml-0.5" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Floating HUD tags */}

              <div className="absolute -bottom-3 -left-2 sm:-left-4 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg glass-panel-glow text-[9px] sm:text-[11px] font-jura text-purple-300 flex items-center gap-1.5 shadow-[0_0_15px_rgba(135,54,247,0.4)]">
                <ShieldAlert className="w-3 h-3 text-purple-400" />
                <span>Immortality Protocol</span>
              </div>
            </div>
          </div>

          {/* Right: Lore Index Auto-Scroll Rail */}
          <div className="lg:col-span-3 text-left"
            style={{
              opacity: railVisible ? 1 : 0,
              transform: railVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-purple-500/20 space-y-4 shadow-[0_0_30px_rgba(135,54,247,0.2)]">
              <div className="flex items-center justify-between pb-3 border-b border-purple-900/40">
                <h3 className="font-orbitron text-xs font-bold uppercase tracking-wider text-purple-300 flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>Lore Index</span>
                </h3>
                <span className="font-jura text-[10px] text-gray-400">Live Index</span>
              </div>

              {/* hero-rail-scroll */}
              <div className="relative overflow-hidden" style={{ height: '240px' }}>
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-6" style={{ background: 'linear-gradient(to bottom, var(--glass-fade) 0%, transparent 100%)' }} />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-6" style={{ background: 'linear-gradient(to top, var(--glass-fade) 0%, transparent 100%)' }} />

                <div className="hero-rail-scroll flex flex-col gap-3">
                  {[...uniqueHeroItems, ...uniqueHeroItems].map((item, idx) => (
                    <div
                      key={idx}
                      className="border-l-2 border-purple-500/30 py-1 pl-3 hover:border-cyan-400 transition-colors cursor-pointer group"
                      onClick={() => onOpenExcerpt(item.id)}
                    >
                      <h4 className="font-jura text-[0.7rem] font-medium uppercase tracking-[0.1em] text-white/90 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="font-inter text-[0.65rem] leading-snug text-white/50 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenTrailer()}
                className="w-full py-2.5 rounded-xl glass-panel-glow border border-purple-400/40 text-cyan-300 font-jura text-xs font-bold uppercase tracking-widest hover:bg-purple-600/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <Play className="w-3.5 h-3.5 fill-cyan-300" />
                <span>Watch Trailer</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
