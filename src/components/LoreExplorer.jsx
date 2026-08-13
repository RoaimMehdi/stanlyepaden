import React, { useState } from 'react';
import { loreThemes } from '../data/loreData';
import { Cpu, Zap, Building2, Compass, Shield, Terminal, Sparkles, Quote } from 'lucide-react';

const getIcon = (iconName) => {
  switch (iconName) {
    case 'Cpu':      return <Cpu className="w-5 h-5" />;
    case 'Zap':      return <Zap className="w-5 h-5" />;
    case 'Building2': return <Building2 className="w-5 h-5" />;
    case 'Compass':  return <Compass className="w-5 h-5" />;
    default:         return <Sparkles className="w-5 h-5" />;
  }
};

export default function LoreExplorer() {
  const [activeThemeId, setActiveThemeId] = useState(loreThemes[0].id);
  const activeTheme = loreThemes.find((t) => t.id === activeThemeId) || loreThemes[0];

  return (
    <section id="lore" className="relative py-24 bg-section overflow-hidden">

      {/* Marquee */}
      <div className="pointer-events-none absolute top-8 left-0 right-0 overflow-hidden opacity-15 select-none">
        <div className="marquee-track flex gap-12 w-max">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="marquee-text text-[clamp(50px,9vw,90px)]">
              PADEN UNIVERSE &nbsp; ✦ &nbsp; LORE MATRIX &nbsp; ✦ &nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-purple-900/15 via-indigo-900/10 to-transparent blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16" data-reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-cyan border border-cyan-500/40">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="font-jura text-xs font-bold uppercase tracking-widest text-cyan-300">Thematic Universe Matrix</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Explore The <span className="text-gradient-purple">Paden Universe</span>
          </h2>
          <p className="font-inter text-gray-400 text-sm sm:text-base leading-relaxed">
            Click through the core sci-fi pillars — from synthetic consciousness to ancient pre-dynastic space beacons.
          </p>
        </div>

        {/* Interactive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Theme tabs */}
          <div className="lg:col-span-4 space-y-3" data-reveal data-reveal="left">
            {loreThemes.map((theme) => {
              const isActive = theme.id === activeThemeId;
              return (
                <button
                  key={theme.id}
                  onClick={() => setActiveThemeId(theme.id)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? 'glass-panel-glow border-purple-400/60 shadow-[0_0_25px_rgba(135,54,247,0.3)] scale-[1.02]'
                      : 'glass-panel border-white/5 hover:border-purple-500/30 hover:bg-purple-950/20'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-xl transition-colors ${
                      isActive ? 'bg-purple-600/40 text-cyan-300 border border-purple-400/50' : 'bg-purple-950/40 text-gray-400'
                    }`}>
                      {getIcon(theme.icon)}
                    </div>
                    <div className="flex flex-col">
                      <span className={`font-orbitron text-xs font-bold uppercase tracking-wider ${isActive ? 'text-white' : 'text-gray-300'}`}>
                        {theme.title}
                      </span>
                      <span className="font-jura text-[10px] text-gray-400">{theme.tag}</span>
                    </div>
                  </div>
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-cyan-400 shadow-[0_0_10px_#00f0ff]' : 'bg-gray-700'}`} />
                </button>
              );
            })}
          </div>

          {/* Lore detail panel */}
          <div className="lg:col-span-8 glass-panel-glow rounded-3xl p-6 sm:p-10 border border-purple-500/40 flex flex-col justify-between relative overflow-hidden" data-reveal data-reveal="right">

            <div className="flex items-center justify-between pb-6 border-b border-purple-900/40">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span className="font-jura text-xs font-bold text-cyan-300 uppercase tracking-widest">
                  MODULE DATA STREAM // {activeTheme.title}
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 font-jura text-[10px] text-purple-300 uppercase">
                {activeTheme.tag}
              </span>
            </div>

            <div className="py-8 space-y-6 text-left">
              <div>
                <h3 className="font-orbitron font-extrabold text-2xl sm:text-4xl text-white uppercase">{activeTheme.title}</h3>
                <p className="font-outfit text-base text-cyan-300 font-medium mt-1">{activeTheme.subtitle}</p>
              </div>
              <p className="font-inter text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">{activeTheme.description}</p>

              <div className="p-5 rounded-2xl bg-purple-950/30 border border-purple-700/30 relative">
                <Quote className="w-8 h-8 text-purple-500/20 absolute top-3 right-3" />
                <p className="font-jura italic text-sm text-purple-200 leading-snug">"{activeTheme.quote}"</p>
              </div>
            </div>

            <div className="pt-6 border-t border-purple-900/40 grid grid-cols-3 gap-4">
              {[
                { label: 'Setting Era',      value: activeTheme.stats.yearSetting, color: 'text-cyan-400' },
                { label: 'Technology Class', value: activeTheme.stats.techClass,   color: 'text-purple-300' },
                { label: 'Threat Status',    value: activeTheme.stats.threatLevel, color: 'text-amber-400' },
              ].map((s, i) => (
                <div key={i} className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/20">
                  <div className="font-jura text-[10px] text-gray-400 uppercase tracking-wider">{s.label}</div>
                  <div className={`font-orbitron font-bold text-sm mt-0.5 ${s.color}`}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
