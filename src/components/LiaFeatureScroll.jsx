import React, { useState, useEffect, useRef } from 'react';
import { Play, Mic, Globe, Sparkles, BookOpen, Volume2, ArrowLeft, ArrowRight, MessageSquare, Radio, ShoppingBag, CheckCircle } from 'lucide-react';

const featureCards = [
  {
    id: 'orders',
    category: 'E-COMMERCE PROTOCOL',
    title: 'End-to-End Story Orders',
    subtitle: 'Instant access to Hardcover, E-Book, and Spatial Audio editions across all official platforms.',
    badge: 'INSTANT CHECKOUT',
    type: 'order',
  },
  {
    id: 'multilingual',
    category: 'GLOBAL LOCALIZATION',
    title: 'Multilingual Support',
    subtitle: 'Break language barriers by engaging readers with instant localized translations in over 30 languages.',
    badge: '30+ LANGUAGES',
    type: 'multilingual',
  },
  {
    id: 'voice',
    category: 'AI LORE SYNTHESIZER',
    title: 'Voice Lore Search',
    subtitle: 'Enable hands-free discovery through natural voice commands for instant sci-fi lore answers.',
    badge: 'VOICE AI ACTIVE',
    type: 'voice',
  },
  {
    id: 'reader',
    category: 'ZERO-LATENCY EXCERPTS',
    title: 'Interactive Chapter Reader',
    subtitle: 'Experience immersive chapter previews with real-time ambient soundscapes and reader typography.',
    badge: 'CHAPTER PREVIEW',
    type: 'reader',
  },
  {
    id: 'audio',
    category: 'SPATIAL SOUND TRACKS',
    title: 'Neural Audio & Transmissions',
    subtitle: 'Stream high-fidelity sci-fi audiobooks and custom cinematic soundtracks composed for the novels.',
    badge: 'SPATIAL AUDIO',
    type: 'audio',
  },
];

export default function LiaFeatureScroll({ onOpenExcerpt, onOpenTrailer }) {
  const sectionRef = useRef(null);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const [smoothProgress, setSmoothProgress] = useState(0);
  const [typingText, setTypingText] = useState('');

  const totalCards = featureCards.length;
  const fullPrompt = "Find me the lore of The Box and the Zero-State Immortality Protocol...";

  // 1. SILKY-SMOOTH LERP PHYSICS (60FPS requestAnimationFrame inertia easing)
  useEffect(() => {
    let animId;

    const lerpLoop = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0001) {
        currentProgressRef.current += diff * 0.08; // smooth lerp factor
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

  // 2. Typing animation for Voice Search card
  useEffect(() => {
    let index = 0;
    setTypingText('');
    const interval = setInterval(() => {
      if (index < fullPrompt.length) {
        setTypingText(fullPrompt.slice(0, index + 1));
        index++;
      } else {
        setTimeout(() => { index = 0; setTypingText(''); }, 2500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Compute active card position with physics lerp
  const currentCardPos = smoothProgress * (totalCards - 1);
  const activeIndex = Math.min(totalCards - 1, Math.round(currentCardPos));

  // Smooth scroll to card target
  const scrollToCard = (index) => {
    const el = sectionRef.current;
    if (!el) return;
    const targetIdx = Math.max(0, Math.min(totalCards - 1, index));
    const targetProgress = targetIdx / (totalCards - 1);
    const totalScrollable = el.offsetHeight - window.innerHeight;
    const sectionTop = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: sectionTop + totalScrollable * targetProgress, behavior: 'smooth' });
  };

  return (
    <div ref={sectionRef} className="relative h-[280vh] bg-[#030108] text-white select-none border-t border-purple-900/40">
      
      {/* Sticky Viewport Stage — Pins in place while scroll lerps smoothly */}
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
        
        {/* Background Radial Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(135,54,247,0.22)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,240,255,0.14)_0%,transparent_50%)]" />

        {/* 
          Parallax Outlined Typography with smooth lerp physics
        */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-10 z-0">
          <div
            className="font-orbitron font-black text-[13vw] uppercase text-transparent whitespace-nowrap leading-none tracking-widest transition-transform duration-300 ease-out"
            style={{
              WebkitTextStroke: '2px rgba(168,85,247,0.8)',
              transform: `translateX(${(0.5 - smoothProgress) * 450}px)`,
            }}
          >
            FEATURES POWERED BY LIA ✦ STANLEY PADEN UNIVERSE
          </div>
        </div>

        {/* Section Top Header & Badge */}
        <div className="relative z-10 text-center px-4 mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-glow border border-purple-500/40 mb-3">
            <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="font-jura text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cyan-300">
              LIA 3D DECK // FEATURE ROLLOUT ({activeIndex + 1}/{totalCards})
            </span>
          </div>

          <h2 className="font-orbitron font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
            Speculative <span className="text-gradient-purple">Sci-Fi Features</span>
          </h2>
        </div>

        {/* 
          3D HORIZONTAL CARD DECK — Silky Smooth Lerp Physics & Easing
        */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 h-[420px] sm:h-[480px] flex items-center justify-center" style={{ perspective: '1200px' }}>
          
          {featureCards.map((card, idx) => {
            const offset = idx - currentCardPos;
            const isActive = Math.abs(offset) < 0.55;

            // Silky smooth lerp transformations
            const translateX = offset * 420;
            const rotateY = offset * -24;
            const rotateZ = offset * 3.5;
            const scale = 1 - Math.min(Math.abs(offset), 1.2) * 0.14;
            const opacity = Math.max(0, 1 - Math.abs(offset) * 0.75);

            return (
              <div
                key={card.id}
                className="absolute w-[320px] sm:w-[410px] transition-all duration-300 ease-out"
                style={{
                  transform: `translateX(${translateX}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
                  opacity,
                  zIndex: 50 - Math.round(Math.abs(offset) * 10),
                  pointerEvents: isActive ? 'auto' : 'none',
                  willChange: 'transform, opacity',
                }}
              >
                {/* Glass card container */}
                <div className={`relative rounded-[32px] p-6 sm:p-7 border-2 backdrop-blur-xl flex flex-col justify-between min-h-[380px] sm:min-h-[420px] transition-all duration-500 shadow-[0_0_60px_rgba(135,54,247,0.4)] ${
                  isActive
                    ? 'border-cyan-400 bg-gradient-to-b from-[#200845]/95 via-[#110328]/98 to-[#060110] shadow-[0_0_80px_rgba(0,240,255,0.5)] scale-[1.02]'
                    : 'border-purple-500/40 bg-gradient-to-b from-[#180636]/80 via-[#0d021f]/90 to-[#04010a]'
                }`}>

                  {/* Card Content Types */}
                  {card.type === 'order' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-jura text-[10px] sm:text-xs font-bold uppercase tracking-wider text-purple-300">
                          {card.category}
                        </span>
                        <button onClick={onOpenTrailer} className="px-3 py-1 rounded-full bg-purple-900/80 hover:bg-purple-600 border border-purple-400/40 text-[10px] font-bold font-jura uppercase tracking-wider text-white flex items-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-transform hover:scale-105">
                          <div className="w-2 rounded-full bg-red-500 aspect-square flex items-center justify-center">
                            <Play className="w-1.5 h-1.5 fill-white text-white ml-0.5" />
                          </div>
                          <span>Watch video</span>
                        </button>
                      </div>

                      <div className="p-4 rounded-2xl bg-white/5 border border-white/15 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <ShoppingBag className="w-4 h-4 text-cyan-400" />
                            <span className="font-orbitron text-xs font-bold text-white">THE BOX — SPECIAL EDITION</span>
                          </div>
                          <span className="font-jura text-xs text-cyan-300 font-bold">$24.99</span>
                        </div>

                        <div className="flex items-center gap-2 text-[10px] font-jura text-gray-300">
                          <CheckCircle className="w-3 h-3 text-cyan-400" />
                          <span>Includes Hardcover, Kindle E-Book &amp; Audible Audio</span>
                        </div>

                        <button
                          onClick={() => window.open('https://stanleypaden.com/shop/', '_blank')}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-cyan-400 hover:to-purple-600 text-white font-orbitron text-[11px] font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
                        >
                          <span>Proceed to Checkout</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {card.type === 'multilingual' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-jura text-[10px] sm:text-xs font-bold uppercase tracking-wider text-purple-300">
                          Responding in your language
                        </span>
                        <button onClick={onOpenTrailer} className="px-3 py-1 rounded-full bg-purple-900/80 hover:bg-purple-600 border border-purple-400/40 text-[10px] font-bold font-jura uppercase tracking-wider text-white flex items-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-transform hover:scale-105">
                          <div className="w-2 rounded-full bg-red-500 aspect-square flex items-center justify-center">
                            <Play className="w-1.5 h-1.5 fill-white text-white ml-0.5" />
                          </div>
                          <span>Watch video</span>
                        </button>
                      </div>

                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-cyan-500/40">
                        <Globe className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="font-jura text-xs text-cyan-300 font-bold">ES Español</span>
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-cyan-400 text-black uppercase">DETECTED</span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15">
                        <p className="font-inter text-xs text-white/90 font-medium">
                          ¿Tienen capítulos disponibles de Stanley Paden en español?
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-purple-900/40 border border-purple-400/40 space-y-1">
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-cyan-400" />
                          <span className="font-jura text-[10px] text-cyan-300 uppercase font-bold">LIA Universe AI</span>
                        </div>
                        <p className="font-inter text-xs text-purple-200 font-medium">
                          ¡Por supuesto! "The Box" y "Return from Egypt" están disponibles en múltiples idiomas.
                        </p>
                      </div>

                      <div className="pt-2 border-t border-purple-900/50 flex items-center gap-2 overflow-hidden text-[9px] font-jura text-gray-400 whitespace-nowrap opacity-75">
                        <span>Português</span> · <span>Italiano</span> · <span>Русский</span> · <span>हिंदी</span> · <span>Türkçe</span> · <span>中文</span> · <span>Español</span>
                      </div>
                    </div>
                  )}

                  {card.type === 'voice' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[3px]">
                          {[...Array(8)].map((_, i) => (
                            <span key={i} className="wave-bar bg-cyan-400" />
                          ))}
                        </div>
                        <button onClick={onOpenTrailer} className="px-3 py-1 rounded-full bg-purple-900/80 hover:bg-purple-600 border border-purple-400/40 text-[10px] font-bold font-jura uppercase tracking-wider text-white flex items-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-transform hover:scale-105">
                          <div className="w-2 rounded-full bg-red-500 aspect-square flex items-center justify-center">
                            <Play className="w-1.5 h-1.5 fill-white text-white ml-0.5" />
                          </div>
                          <span>Watch video</span>
                        </button>
                      </div>

                      <div className="flex flex-col items-center justify-center py-2">
                        <div className="relative w-20 h-20 flex items-center justify-center">
                          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping" />
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-600 to-purple-600 p-0.5 shadow-[0_0_35px_rgba(0,240,255,0.8)]">
                            <div className="w-full h-full bg-[#0d0324] rounded-full flex items-center justify-center">
                              <Mic className="w-7 h-7 text-cyan-300" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-purple-950/80 border border-purple-400/30 text-left space-y-1">
                        <span className="font-jura text-[10px] text-cyan-400 uppercase tracking-widest font-bold block">
                          LISTENING
                        </span>
                        <p className="font-inter text-xs text-white font-medium min-h-[32px]">
                          {typingText}<span className="inline-block w-1.5 h-3 bg-cyan-400 ml-0.5 animate-pulse" />
                        </p>
                      </div>
                    </div>
                  )}

                  {card.type === 'reader' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-jura text-[10px] sm:text-xs font-bold uppercase tracking-wider text-purple-300">
                          {card.category}
                        </span>
                        <button onClick={onOpenTrailer} className="px-3 py-1 rounded-full bg-purple-900/80 hover:bg-purple-600 border border-purple-400/40 text-[10px] font-bold font-jura uppercase tracking-wider text-white flex items-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-transform hover:scale-105">
                          <div className="w-2 rounded-full bg-red-500 aspect-square flex items-center justify-center">
                            <Play className="w-1.5 h-1.5 fill-white text-white ml-0.5" />
                          </div>
                          <span>Watch video</span>
                        </button>
                      </div>

                      <div className="p-4 rounded-2xl bg-white/5 border border-white/15 space-y-2 text-left">
                        <span className="font-jura text-[10px] text-cyan-300 font-bold uppercase tracking-widest">CHAPTER 1 EXCERPT</span>
                        <p className="font-inter text-xs text-gray-300 leading-relaxed italic line-clamp-3">
                          "The glass in Sector 7 didn't shimmer; it absorbed light. Mark Vance pressed his palm against the bio-verification panel..."
                        </p>
                      </div>

                      <button
                        onClick={() => onOpenExcerpt('the-box')}
                        className="w-full py-3 rounded-xl bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 hover:bg-cyan-400 hover:text-black font-orbitron text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-[1.02]"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Read Full Chapter</span>
                      </button>
                    </div>
                  )}

                  {card.type === 'audio' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-jura text-[10px] sm:text-xs font-bold uppercase tracking-wider text-purple-300">
                          {card.category}
                        </span>
                        <button onClick={onOpenTrailer} className="px-3 py-1 rounded-full bg-purple-900/80 hover:bg-purple-600 border border-purple-400/40 text-[10px] font-bold font-jura uppercase tracking-wider text-white flex items-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-transform hover:scale-105">
                          <div className="w-2 rounded-full bg-red-500 aspect-square flex items-center justify-center">
                            <Play className="w-1.5 h-1.5 fill-white text-white ml-0.5" />
                          </div>
                          <span>Watch video</span>
                        </button>
                      </div>

                      <div className="p-4 rounded-2xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-cyan-400/20 border border-cyan-400/60 flex items-center justify-center">
                            <Volume2 className="w-5 h-5 text-cyan-300 animate-pulse" />
                          </div>
                          <div className="text-left">
                            <span className="font-orbitron text-xs font-bold text-white block">STANLEY PADEN AUDIOBOOK</span>
                            <span className="font-jura text-[10px] text-cyan-300">Dolby Atmos Spatial Transmission</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={onOpenTrailer}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-cyan-400 hover:to-purple-600 text-white font-orbitron text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(135,54,247,0.6)] hover:scale-[1.02]"
                      >
                        <Play className="w-4 h-4 fill-white" />
                        <span>Play Audio Transmission</span>
                      </button>
                    </div>
                  )}

                  {/* Card Title & Subtitle */}
                  <div className="mt-4 pt-3 border-t border-purple-900/50 text-center">
                    <h3 className="font-orbitron font-extrabold text-lg sm:text-xl text-white uppercase tracking-wide">
                      {card.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-cyan-400 mx-auto my-1.5 shadow-[0_0_10px_#00f0ff]" />
                    <p className="font-inter text-[11px] text-gray-300 leading-snug line-clamp-2">
                      {card.subtitle}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom Dock Navigation Controls */}
        <div className="relative z-30 mt-6 flex items-center justify-center gap-6">
          <button
            onClick={() => scrollToCard(activeIndex - 1)}
            className="px-5 py-2.5 rounded-full glass-panel border border-purple-500/40 hover:border-cyan-400 text-white font-orbitron text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400" />
            <span>Prev</span>
          </button>

          {/* Glowing Chat Orb Center Button */}
          <button
            onClick={() => scrollToCard(activeIndex + 1)}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-0.5 shadow-[0_0_40px_rgba(135,54,247,0.8)] hover:scale-110 transition-transform flex items-center justify-center group active:scale-95"
            title="Next Feature Card"
          >
            <div className="w-full h-full bg-[#05010a] rounded-full flex items-center justify-center group-hover:bg-purple-900/60 transition-colors">
              <MessageSquare className="w-6 h-6 text-purple-300 fill-purple-300/20 group-hover:text-cyan-300" />
            </div>
          </button>

          <button
            onClick={() => scrollToCard(activeIndex + 1)}
            className="px-5 py-2.5 rounded-full glass-panel border border-purple-500/40 hover:border-cyan-400 text-white font-orbitron text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <span>Next</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="relative z-30 flex items-center gap-2 mt-4">
          {featureCards.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-7 bg-cyan-400 shadow-[0_0_12px_#00f0ff]'
                  : 'w-2 bg-purple-900/80 hover:bg-purple-400'
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
