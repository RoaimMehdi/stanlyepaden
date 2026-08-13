import React from 'react';
import { User, Award, BookOpen, Sparkles, Feather, ShieldCheck, ArrowRight, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LiaAuthorSpotlight() {
  return (
    <section className="relative py-24 bg-section overflow-hidden border-t border-purple-900/40">
      
      {/* Dynamic LIA Background Lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(135,54,247,0.18)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(0,240,255,0.15)_0%,transparent_60%)]" />
      
      {/* Background Cyber Grid */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #8736f7 1px, transparent 1px), linear-gradient(to bottom, #8736f7 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16" data-reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-glow border border-purple-500/40">
            <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="font-jura text-xs font-bold uppercase tracking-widest text-cyan-300">
              Official Author Profile
            </span>
          </div>

          <h2 className="font-orbitron font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            About <span className="text-gradient-cyan">Stanley Paden</span>
          </h2>

          <p className="font-inter text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
            Visionary sci-fi novelist, cybernetic storyteller, and author of groundbreaking speculative fiction.
          </p>
        </div>

        {/* Grid Layout: Author Image + Interactive Lore Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Author Portrait Frame */}
          <div className="lg:col-span-5 relative" data-reveal data-delay="100">
            <div className="relative mx-auto max-w-md">
              
              {/* Outer Cybernetic Glow Rings */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 opacity-30 blur-2xl animate-pulse" />
              
              {/* Photo Frame Container */}
              <div className="relative rounded-3xl overflow-hidden glass-panel-glow border-2 border-purple-400/50 shadow-[0_0_50px_rgba(135,54,247,0.5)] group">
                
                {/* Official Author Portrait Photo */}
                <img
                  src="/assets/author_paden_official.jpg"
                  alt="Stanley Paden Official Portrait"
                  data-reveal="img"
                  className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/author_paden.png';
                  }}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020104] via-transparent to-transparent opacity-50" />

                {/* Top Left Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass-panel-glow border border-purple-400/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="font-jura text-[10px] font-bold text-white uppercase tracking-widest">
                    Verified Author
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-panel border border-white/10 text-left space-y-1">
                  <h3 className="font-orbitron font-bold text-lg text-white uppercase tracking-wider">
                    Stanley Paden
                  </h3>
                  <p className="font-jura text-xs text-cyan-300">
                    Sci-Fi Novelist &amp; Speculative Futurist
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
                <span>6+ Masterworks</span>
              </div>

            </div>
          </div>

          {/* Right Column: Author Biography & Lore Summary */}
          <div className="lg:col-span-7 text-left space-y-6" data-reveal data-delay="200">
            
            <div className="space-y-3">
              <span className="font-jura text-xs font-bold text-purple-400 uppercase tracking-widest">
                The Mind Behind The Novels
              </span>
              <h3 className="font-orbitron font-extrabold text-2xl sm:text-4xl text-white uppercase leading-tight">
                Crafting Worlds of <span className="text-gradient-purple">Synthetic Destiny</span> &amp; Ancient Mysteries
              </h3>
            </div>

            <p className="font-inter text-sm sm:text-base text-gray-300 leading-relaxed">
              Stanley Paden is a celebrated science-fiction author known for his high-concept narratives that weave technological singularity with deep human philosophy. From the unsettling immortality protocols of <strong className="text-cyan-300">The Box</strong> to the cyber-archaeological vaults of <strong className="text-cyan-300">Return from Egypt</strong> and the neon noir corridors of <strong className="text-cyan-300">I Hate Saint Louis</strong>, Paden's work pushes the boundaries of modern sci-fi.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl glass-panel border border-purple-500/30 space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-300 font-orbitron text-xs font-bold uppercase">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>High-Concept Sci-Fi</span>
                </div>
                <p className="font-inter text-xs text-gray-400">
                  Explores artificial consciousness, relativistic physics, and dystopian cyber cities.
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-purple-500/30 space-y-1.5">
                <div className="flex items-center gap-2 text-purple-300 font-orbitron text-xs font-bold uppercase">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  <span>Critical Acclaim</span>
                </div>
                <p className="font-inter text-xs text-gray-400">
                  Over 30,000 copies sold worldwide with top reader ratings across major platforms.
                </p>
              </div>
            </div>

            {/* Author Quote Box */}
            <div className="p-5 rounded-2xl glass-panel-glow border-l-4 border-cyan-400 italic font-inter text-sm text-gray-200 leading-relaxed">
              "Science fiction isn't just about what technology can do — it's about what technology reveals about the soul."
              <span className="block font-jura not-italic font-bold text-xs text-cyan-300 mt-2 uppercase tracking-wider">
                — Stanley Paden
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/about"
                className="btn-shine px-6 py-3.5 rounded-full font-orbitron text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-cyan-400 hover:to-purple-600 shadow-[0_0_25px_rgba(135,54,247,0.5)] transition-all flex items-center gap-2 hover:scale-105"
              >
                <span>Read Full Biography</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/blog"
                className="px-6 py-3.5 rounded-full font-orbitron text-xs font-bold uppercase tracking-widest text-gray-200 glass-panel border border-white/10 hover:border-cyan-400 hover:text-white transition-all flex items-center gap-2 hover:scale-105"
              >
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>Connect &amp; Blog</span>
              </Link>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
