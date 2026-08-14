import React, { useState } from 'react';
import { User, Award, BookOpen, Sparkles, Feather, ShieldCheck, ArrowRight, Radio, Compass, Anchor, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const authorUniverses = [
  {
    id: 'sun-god',
    title: "Sun God's Heir Trilogy",
    icon: Anchor,
    accent: 'cyan',
    desc: "A metaphysical high-seas adventure blending 17th-century French swashbuckling with ancient Egyptian soul codices and reincarnation.",
  },
  {
    id: 'zero-state',
    title: "Zero-State Chronicles",
    icon: Cpu,
    accent: 'purple',
    desc: "Dystopian speculative thrillers exploring quantum containment, artificial immortality, and the terrifying price of defying death in 'The Box'.",
  },
  {
    id: 'stark-city',
    title: "Stark City Files",
    icon: Compass,
    accent: 'red',
    desc: "Cyber-noir crime thrillers set in flooded Neo-Saint Louis, where memory is currency and synthetic syndicate operative mercenaries rule the rain.",
  },
];

export default function LiaAuthorSpotlight() {
  const [activeTab, setActiveTab] = useState(0);
  const currentUniv = authorUniverses[activeTab];

  return (
    <section className="relative py-24 bg-[#05020a] text-white overflow-hidden border-t border-purple-900/40">
      
      {/* Dynamic Background Radial Lights */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(135,54,247,0.2)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(0,240,255,0.18)_0%,transparent_60%)]" />
      
      {/* Cyber Background Grid */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #8736f7 1px, transparent 1px), linear-gradient(to bottom, #8736f7 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-glow border border-purple-500/40">
            <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="font-jura text-xs font-bold uppercase tracking-widest text-cyan-300">
              Official Author Profile · StanleyPaden.com
            </span>
          </div>

          <h2 className="font-orbitron font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            About <span className="text-gradient-cyan">Stanley Paden</span>
          </h2>

          <p className="font-inter text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Master storyteller bridging speculative science fiction, ancient Egyptian metaphysics, 17th-century swashbuckling adventure, and cybernetic thrillers.
          </p>
        </div>

        {/* Grid Layout: Author Image + Interactive Lore Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Author Portrait Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Outer Cybernetic Glow Rings */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 opacity-30 blur-2xl animate-pulse" />
              
              {/* Photo Frame Container */}
              <div className="relative rounded-3xl overflow-hidden glass-panel-glow border-2 border-purple-400/50 shadow-[0_0_50px_rgba(135,54,247,0.5)] group">
                
                {/* Official Author Portrait Photo */}
                <img
                  src="/assets/author_paden_official.jpg"
                  alt="Stanley Paden Official Portrait"
                  className="w-full aspect-[4/5] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/author_paden.png';
                  }}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020104] via-transparent to-transparent opacity-60" />

                {/* Top Left Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass-panel-glow border border-purple-400/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="font-jura text-[10px] font-bold text-white uppercase tracking-widest">
                    Verified Official Author
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-panel border border-white/10 text-left space-y-1">
                  <h3 className="font-orbitron font-bold text-lg text-white uppercase tracking-wider">
                    Stanley Paden
                  </h3>
                  <p className="font-jura text-xs text-cyan-300">
                    Bestselling Author &amp; Metaphysical Futurist
                  </p>
                </div>

              </div>

              {/* Floating Decorative Hologram Badges */}
              <div className="absolute -top-4 -right-4 px-3.5 py-2 rounded-2xl glass-panel-cyan border border-cyan-400/50 text-cyan-300 font-jura text-xs font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Award Winner</span>
              </div>

              <div className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-2xl glass-panel-glow border border-purple-400/50 text-purple-300 font-jura text-xs font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(135,54,247,0.4)]">
                <Feather className="w-4 h-4 text-purple-400" />
                <span>6 Masterwork Novels</span>
              </div>

            </div>
          </div>

          {/* Right Column: Author Biography & Lore Tabs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            <div className="space-y-3">
              <span className="font-jura text-xs font-bold text-purple-400 uppercase tracking-widest">
                The Mind Behind The Novels
              </span>
              <h3 className="font-orbitron font-extrabold text-2xl sm:text-4xl text-white uppercase leading-tight">
                Crafting Worlds of <span className="text-gradient-purple">Reincarnation</span>, Cybernetics &amp; Ancient Mysteries
              </h3>
            </div>

            <p className="font-inter text-sm sm:text-base text-gray-300 leading-relaxed">
              Stanley Paden is an acclaimed author celebrated for blending science fiction, historical swashbuckling, ancient Egyptian mythology, and metaphysical thrillers. From the terrifying immortality protocols of <strong className="text-cyan-300">The Box</strong> to the rapier-sharp reincarnated souls of <strong className="text-amber-300">The Sun God's Heir Trilogy</strong> and the neon noir alleys of <strong className="text-cyan-300">Return From Egypt</strong>, Paden challenges readers to consider the deepest "what-if" scenarios of human destiny.
            </p>

            {/* Interactive Universe Tabs */}
            <div className="space-y-3 pt-2">
              <span className="font-jura text-xs font-bold text-cyan-300 uppercase tracking-widest block">
                Explore Stanley Paden's Primary Book Universes:
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {authorUniverses.map((univ, idx) => {
                  const Icon = univ.icon;
                  const isActive = idx === activeTab;
                  return (
                    <button
                      key={univ.id}
                      onClick={() => setActiveTab(idx)}
                      className={`p-3 rounded-xl font-orbitron text-[10px] sm:text-xs font-bold uppercase tracking-wider border text-left flex items-center gap-2 transition-all ${
                        isActive
                          ? 'bg-purple-600/30 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.4)] scale-105'
                          : 'glass-panel border-white/10 text-gray-400 hover:text-white hover:border-purple-400/50'
                      }`}
                    >
                      <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-cyan-300' : 'text-purple-400'}`} />
                      <span className="truncate">{univ.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Tab Info Box */}
              <div className="p-4 rounded-2xl glass-panel border border-cyan-400/40 text-left space-y-1.5 bg-gradient-to-r from-purple-950/60 to-[#070114]/80">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="font-orbitron text-xs font-bold text-white uppercase">{currentUniv.title}</span>
                </div>
                <p className="font-inter text-xs text-gray-300 leading-relaxed">
                  {currentUniv.desc}
                </p>
              </div>
            </div>

            {/* Author Quote Box */}
            <div className="p-5 rounded-2xl glass-panel-glow border-l-4 border-cyan-400 italic font-inter text-sm text-gray-200 leading-relaxed">
              "Science fiction and historical mystery aren't just about the past or the future — they are about what technology and destiny reveal about the human soul."
              <span className="block font-jura not-italic font-bold text-xs text-cyan-300 mt-2 uppercase tracking-wider">
                — Stanley Paden (Official Website Statement)
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/shop"
                className="px-7 py-3.5 rounded-full font-orbitron text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-cyan-400 hover:to-purple-600 shadow-[0_0_25px_rgba(135,54,247,0.5)] transition-all flex items-center gap-2 hover:scale-105"
              >
                <span>Visit Official Shop</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/blog"
                className="px-6 py-3.5 rounded-full font-orbitron text-xs font-bold uppercase tracking-widest text-gray-200 glass-panel border border-white/10 hover:border-cyan-400 hover:text-white transition-all flex items-center gap-2 hover:scale-105"
              >
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>Read Official Blog &amp; Lore</span>
              </Link>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
