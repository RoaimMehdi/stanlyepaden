import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Radio, Sparkles, Film, ShieldAlert, CheckCircle2, Headphones } from 'lucide-react';

const videoReelClips = [
  {
    id: 'clip-1',
    title: 'THE BOX — Cinematic Trailer',
    subtitle: 'Confront the Unseen Side of Immortality',
    duration: '01:45',
    tag: 'FEATURED CINEMATIC',
    accent: 'purple',
    caption: '“What if death could be indefinitely postponed? Enter the Box...”',
    poster: '/assets/the_box_cover.png',
  },
  {
    id: 'clip-2',
    title: 'RETURN FROM EGYPT — Vault Discovery',
    subtitle: 'Ancient Artifacts & Cybernetic Destiny',
    duration: '01:20',
    tag: 'ARCHAEOLOGICAL REEL',
    accent: 'cyan',
    caption: '“Sub-surface scanners detect a 30,000-year-old pre-dynastic vault...”',
    poster: '/assets/return_egypt_cover.png',
  },
  {
    id: 'clip-3',
    title: 'I HATE SAINT LOUIS — Cyber-Noir City',
    subtitle: 'Rain-Slicked Dystopian Thriller',
    duration: '02:05',
    tag: 'NEON NOIR REEL',
    accent: 'red',
    caption: '“In the rain-drenched neon streets of dystopian Saint Louis...”',
    poster: '/assets/i_hate_stl_cover.png',
  },
];

export default function LiaVideoReelSection({ onOpenTrailer }) {
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const activeClip = videoReelClips[activeClipIndex];

  return (
    <section className="relative py-28 bg-section overflow-hidden border-t border-purple-900/40">
      
      {/* LIA Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(135,54,247,0.2)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_60%,rgba(0,240,255,0.12)_0%,transparent_60%)]" />

      {/* Background Floating Marquee */}
      <div className="pointer-events-none absolute top-4 left-0 right-0 overflow-hidden opacity-10 select-none">
        <div className="marquee-track flex gap-12 w-max">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="marquee-text text-[clamp(40px,8vw,80px)]">
              LIA VIDEO SHOWCASE &nbsp; ✦ &nbsp; CINEMATIC REEL &nbsp; ✦ &nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3" data-reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-glow border border-purple-500/40">
            <Film className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="font-jura text-xs font-bold uppercase tracking-widest text-cyan-300">
              LIA Interactive Video Showcase
            </span>
          </div>

          <h2 className="font-orbitron font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Cinematic <span className="text-gradient-cyan">Video Reel</span>
          </h2>

          <p className="font-inter text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
            Experience high-definition video side animations, audio visualizers, and interactive chapter previews inspired by lialive.ai.
          </p>
        </div>

        {/* Main Video Side Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" data-reveal data-delay="100">
          
          {/* Left Column: Video Player Screen (LIA Style Frame) */}
          <div className="lg:col-span-7 relative">
            
            <div className="relative rounded-3xl overflow-hidden glass-panel-glow border-2 border-purple-400/50 shadow-[0_0_60px_rgba(135,54,247,0.4)] group">
              
              {/* Simulated Video Display Screen */}
              <div className="dark-surface relative aspect-video bg-[#05020c] flex items-center justify-center overflow-hidden">
                
                {/* Background Poster Cover Image with Subtle Motion */}
                <img
                  src={activeClip.poster}
                  alt={activeClip.title}
                  className={`w-full h-full object-cover filter brightness-75 contrast-110 transition-all duration-700 ${
                    isPlaying ? 'scale-105 blur-[1px]' : 'scale-100'
                  }`}
                />

                {/* Animated HUD Scanlines & Grid Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020105] via-purple-950/30 to-transparent" />
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(0,240,255,0.15)_1px,transparent_1px)] bg-[size:100%_4px]" />

                {/* Central Play/Pause State Pulse Orb */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 p-1 shadow-[0_0_40px_rgba(0,240,255,0.8)] hover:scale-110 transition-transform duration-300 group/btn"
                  >
                    <div className="w-full h-full bg-[#070512]/90 rounded-full flex items-center justify-center backdrop-blur-md">
                      {isPlaying ? (
                        <Pause className="w-7 h-7 text-cyan-300 fill-cyan-300" />
                      ) : (
                        <Play className="w-7 h-7 text-cyan-300 fill-cyan-300 ml-1" />
                      )}
                    </div>
                  </button>

                  <span className="font-orbitron text-xs font-bold uppercase tracking-widest text-white glass-panel px-3 py-1 rounded-full border border-purple-400/40 shadow-lg">
                    {isPlaying ? 'LIVE STREAMING REEL' : 'PAUSED'}
                  </span>
                </div>

                {/* Live Caption Bar Overlay */}
                {isPlaying && (
                  <div className="absolute bottom-14 left-4 right-4 z-20 px-4 py-2.5 rounded-2xl glass-panel-glow border border-cyan-400/40 text-center animate-fade-in">
                    <p className="font-outfit text-xs sm:text-sm text-cyan-200 font-medium italic">
                      {activeClip.caption}
                    </p>
                  </div>
                )}

                {/* Top Video HUD Header */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full glass-panel-glow border border-purple-400/50">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="font-jura text-[10px] font-bold text-white uppercase tracking-widest">
                      {activeClip.tag}
                    </span>
                  </div>

                  {/* Audio Waves & Mute Switch */}
                  <div className="flex items-center gap-3 glass-panel px-3 py-1 rounded-full border border-white/10">
                    <div className="flex items-center gap-[2px]">
                      {[...Array(6)].map((_, i) => (
                        <span
                          key={i}
                          className={`wave-bar bg-cyan-400 ${isPlaying && !isMuted ? 'animate-wave' : 'h-1.5'}`}
                        />
                      ))}
                    </div>
                    <button onClick={() => setIsMuted(!isMuted)} className="text-gray-300 hover:text-white">
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-300" />}
                    </button>
                  </div>
                </div>

                {/* Bottom Video Progress Control Bar */}
                <div className="absolute bottom-0 inset-x-0 p-4 z-20 bg-gradient-to-t from-[#020105] to-transparent flex items-center justify-between gap-4">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between font-jura text-[10px] text-gray-300 font-bold">
                      <span className="text-cyan-300">{activeClip.title}</span>
                      <span>{activeClip.duration}</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full ${
                        isPlaying ? 'animate-[pulse_2s_infinite] w-3/4' : 'w-1/3'
                      }`} />
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenTrailer()}
                    className="px-3.5 py-1.5 rounded-xl font-orbitron text-[10px] font-bold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 transition-colors flex items-center gap-1.5 flex-shrink-0"
                  >
                    <span>Full Modal</span>
                  </button>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Interactive Side Animation Clips Selector */}
          <div className="lg:col-span-5 text-left space-y-4">
            
            <div className="pb-2 border-b border-purple-900/40 flex items-center justify-between">
              <h3 className="font-orbitron font-bold text-sm uppercase tracking-wider text-purple-300 flex items-center gap-2">
                <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>Select Reel Track</span>
              </h3>
              <span className="font-jura text-xs text-gray-400">3 Clips Available</span>
            </div>

            {/* List of Side Video Cards */}
            <div className="space-y-3">
              {videoReelClips.map((clip, idx) => {
                const isActive = idx === activeClipIndex;
                const isRed = clip.accent === 'red';
                const isCyan = clip.accent === 'cyan';

                return (
                  <div
                    key={clip.id}
                    onClick={() => {
                      setActiveClipIndex(idx);
                      setIsPlaying(true);
                    }}
                    className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 group relative ${
                      isActive
                        ? isRed
                          ? 'glass-panel-red border-red-400 scale-[1.02] shadow-[0_0_25px_rgba(220,38,38,0.4)]'
                          : isCyan
                          ? 'glass-panel-cyan border-cyan-400 scale-[1.02] shadow-[0_0_25px_rgba(0,240,255,0.4)]'
                          : 'glass-panel-glow border-purple-400 scale-[1.02] shadow-[0_0_25px_rgba(135,54,247,0.4)]'
                        : 'glass-panel border-white/10 opacity-70 hover:opacity-100 hover:border-purple-500/40'
                    }`}
                  >
                    {/* Thumbnail Cover */}
                    <div className="w-16 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-white/10 relative">
                      <img src={clip.poster} alt={clip.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white fill-white opacity-80 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>

                    {/* Clip Info */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-jura text-[9px] uppercase tracking-widest font-bold text-cyan-300">
                          {clip.tag}
                        </span>
                        <span className="font-jura text-[10px] text-gray-400">{clip.duration}</span>
                      </div>
                      <h4 className="font-orbitron font-bold text-sm text-white uppercase truncate group-hover:text-cyan-300 transition-colors">
                        {clip.title}
                      </h4>
                      <p className="font-inter text-xs text-gray-400 line-clamp-1">
                        {clip.subtitle}
                      </p>
                    </div>

                    {/* Active State Indicator */}
                    {isActive && (
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] animate-ping" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Callout */}
            <div className="pt-2">
              <button
                onClick={() => onOpenTrailer()}
                className="btn-shine w-full py-3.5 rounded-2xl font-orbitron text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-cyan-400 hover:to-purple-600 shadow-[0_0_25px_rgba(135,54,247,0.5)] transition-all flex items-center justify-center gap-2"
              >
                <Film className="w-4 h-4 text-cyan-300" />
                <span>Launch Full Screen Trailer</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
