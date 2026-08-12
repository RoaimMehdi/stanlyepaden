import React from 'react';
import { Award, BookOpen, Sparkles, Globe2, Cpu, Flame } from 'lucide-react';

const milestones = [
  {
    year: '2024',
    title: 'Zero-State Protocol Inception',
    desc: 'Began drafting high-concept speculative thriller, exploring uploaded identity and quantum containment.',
    icon: <Cpu className="w-4 h-4 text-cyan-400" />,
  },
  {
    year: '2025',
    title: 'Return From Egypt Release',
    desc: 'Published acclaimed cyber-archeological novel unearthing ancient light-transmitting quartz beneath Giza.',
    icon: <BookOpen className="w-4 h-4 text-purple-400" />,
  },
  {
    year: '2026',
    title: 'The Box & I Hate Saint Louis Bestsellers',
    desc: 'Awarded #1 Sci-Fi Bestseller honors. Worldwide release in Hardcover, Paperback, Kindle & Audible.',
    icon: <Award className="w-4 h-4 text-amber-400" />,
  },
];

export default function AuthorTimeline() {
  return (
    <section className="relative py-20 bg-[#03020a] overflow-hidden border-t border-purple-900/30">
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16" data-reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-glow border border-purple-500/30">
            <Flame className="w-4 h-4 text-purple-400" />
            <span className="font-jura text-xs font-bold uppercase tracking-widest text-purple-300">
              Holographic Journey
            </span>
          </div>

          <h2 className="font-orbitron font-black text-3xl sm:text-5xl uppercase text-white">
            Author <span className="text-gradient-purple">Milestones</span>
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              data-reveal
              data-delay={String(idx * 150)}
              className="p-6 rounded-3xl glass-panel-glow border border-purple-500/30 text-left space-y-3 relative group hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-orbitron font-extrabold text-2xl text-cyan-300">{m.year}</span>
                <div className="p-2.5 rounded-xl bg-purple-950/80 border border-purple-400/30">
                  {m.icon}
                </div>
              </div>

              <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                {m.title}
              </h3>

              <p className="font-inter text-xs text-gray-300 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
