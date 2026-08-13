import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrailerSection from '../components/TrailerSection';
import { useGlobalScrollReveal } from '../hooks/useScrollReveal';
import { Radio, Play, Mic, Film, Sparkles, Volume2, Calendar, Headphones } from 'lucide-react';

const podcastEpisodes = [
  {
    id: 1,
    title: 'Episode 42: Synthetic Consciousness & Quantum Containment',
    show: 'The Sci-Fi Horizon Podcast',
    date: 'February 2026',
    duration: '45 mins',
    desc: 'Stanley Paden joins host Marcus Vance to discuss the ethics of digital immortality and the real quantum physics behind The Box.',
    audioUrl: 'https://stanleypaden.com/wp-content/uploads/2026/01/Stanley-Paden-The-Box-Video-Trailer-1.mp4',
    badge: 'Featured Interview',
  },
  {
    id: 2,
    title: 'Episode 38: Unearthing Pre-Dynastic Secrets under Neo-Giza',
    show: 'Future Archeology Today',
    date: 'January 2026',
    duration: '52 mins',
    desc: 'An in-depth exploration of Return from Egypt, alien bio-codes, and sub-surface LiDAR mapping in modern sci-fi worldbuilding.',
    audioUrl: 'https://stanleypaden.com/wp-content/uploads/2026/01/Stanley-Paden-The-Box-Video-Trailer-1.mp4',
    badge: 'Author Special',
  },
  {
    id: 3,
    title: 'Episode 29: Dystopian Cyber-Noir & The Atmosphere of I Hate Saint Louis',
    show: 'Cyberpunk Author Spotlight',
    date: 'December 2025',
    duration: '38 mins',
    desc: 'Stanley Paden shares his creative process for crafting rain-slicked mega-cities and high-stakes futuristic crime fiction.',
    audioUrl: 'https://stanleypaden.com/wp-content/uploads/2026/01/Stanley-Paden-The-Box-Video-Trailer-1.mp4',
    badge: 'Keynote Interview',
  },
];

export default function PodcastPage() {
  useGlobalScrollReveal();
  const [activeEpisode, setActiveEpisode] = useState(null);

  return (
    <div className="min-h-screen bg-page text-gray-100 selection:bg-purple-600 selection:text-white">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(circle at 50% 30%, rgba(135,54,247,0.18), transparent 55%)' }} />

        {/* Marquee Banner */}
        <div className="overflow-hidden mb-8 opacity-25 select-none">
          <div className="marquee-track flex gap-12 w-max">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="marquee-text text-[clamp(50px,9vw,90px)]">
                PODCAST &amp; INTERVIEWS &nbsp; ✦ &nbsp; STANLEY PADEN &nbsp; ✦ &nbsp;
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-glow border border-purple-500/30 mb-4" data-reveal>
            <Mic className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="font-jura text-xs font-bold uppercase tracking-widest text-purple-300">Official Media Hub</span>
          </div>
          <h1 className="font-orbitron font-black text-4xl sm:text-5xl uppercase tracking-tight text-white mb-4" data-reveal data-delay="100">
            Podcast &amp; <span className="text-gradient-cyan">Interviews</span>
          </h1>
          <p className="font-inter text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed" data-reveal data-delay="200">
            Listen to exclusive audio interviews, keynote talks, media appearances, and book trailer discussions with author Stanley Paden.
          </p>
        </div>
      </section>

      {/* Main Video Teaser Section */}
      <TrailerSection isTrailerOpen={false} setIsTrailerOpen={() => {}} />

      {/* Podcast Episodes List */}
      <section className="py-16 bg-section relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12" data-reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30">
              <Headphones className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-jura text-xs text-cyan-300 uppercase tracking-widest font-bold">Featured Episodes</span>
            </div>
            <h2 className="font-orbitron font-black text-2xl sm:text-4xl text-white uppercase">Audio Broadcasts</h2>
          </div>

          <div className="space-y-6">
            {podcastEpisodes.map((ep, idx) => (
              <div
                key={ep.id}
                data-reveal
                data-delay={String(idx * 150)}
                className="p-6 sm:p-8 rounded-3xl glass-panel-glow border border-purple-500/30 hover:border-cyan-400/50 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
              >
                <div className="space-y-2 text-left flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 font-jura text-[10px] font-bold text-purple-300 uppercase">
                      {ep.badge}
                    </span>
                    <span className="font-jura text-xs text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {ep.date}
                    </span>
                    <span className="font-jura text-xs text-cyan-300 font-bold">• {ep.duration}</span>
                  </div>

                  <h3 className="font-orbitron font-extrabold text-xl text-white group-hover:text-cyan-300 transition-colors mt-1">
                    {ep.title}
                  </h3>
                  <p className="font-jura text-xs text-purple-300 uppercase tracking-wider">{ep.show}</p>
                  <p className="font-inter text-xs sm:text-sm text-gray-300 leading-relaxed max-w-3xl">{ep.desc}</p>
                </div>

                <button
                  onClick={() => setActiveEpisode(ep)}
                  className="btn-shine px-5 py-3 rounded-full font-orbitron text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-cyan-400 hover:to-purple-600 shadow-[0_0_20px_rgba(135,54,247,0.4)] transition-all flex items-center gap-2 flex-shrink-0"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Listen Now</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Episode Audio Player Modal */}
      {activeEpisode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg glass-panel-glow p-6 rounded-3xl border border-purple-500/50 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-jura text-xs text-cyan-300 uppercase tracking-widest font-bold">Now Playing</span>
              <button onClick={() => setActiveEpisode(null)} className="p-1 rounded-full text-gray-400 hover:text-white">✕</button>
            </div>

            <h4 className="font-orbitron font-bold text-lg text-white">{activeEpisode.title}</h4>
            <p className="font-jura text-xs text-purple-300">{activeEpisode.show}</p>

            <video controls autoPlay className="w-full rounded-2xl border border-white/10 aspect-video">
              <source src={activeEpisode.audioUrl} type="video/mp4" />
              Your browser does not support the video element.
            </video>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
