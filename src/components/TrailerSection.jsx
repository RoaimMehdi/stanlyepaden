import React, { useState } from 'react';
import { Play, Film, X, Volume2, Sparkles, Tv } from 'lucide-react';

export default function TrailerSection({ isTrailerOpen, setIsTrailerOpen }) {
  const videoUrl = "https://stanleypaden.com/wp-content/uploads/2026/01/Stanley-Paden-The-Box-Video-Trailer-1.mp4";

  return (
    <section id="trailer" className="relative py-24 bg-section overflow-hidden">
      
      {/* Glow Effects */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/15 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12" data-reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-glow border border-purple-500/30">
            <Film className="w-4 h-4 text-purple-400" />
            <span className="font-jura text-xs font-bold uppercase tracking-widest text-purple-300">
              Cinematic Teaser
            </span>
          </div>

          <h2 className="font-orbitron font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Official Book <span className="text-gradient-cyan">Video Trailer</span>
          </h2>

          <p className="font-inter text-gray-400 text-sm sm:text-base leading-relaxed">
            Experience the visual and auditory atmosphere of <strong className="text-cyan-300">The Box</strong> in this official cinematic trailer.
          </p>
        </div>

        {/* Video Player Display Container */}
        <div className="relative rounded-3xl overflow-hidden glass-panel-glow border-2 border-purple-500/50 shadow-[0_0_80px_rgba(135,54,247,0.4)] aspect-video group" data-reveal data-delay="100">
          
          {/* Native HTML5 Video Element */}
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay={false}
            muted={false}
            playsInline
            poster="/assets/the_box_cover.png"
            src={videoUrl}
          >
            Your browser does not support the video tag.
          </video>

          {/* HUD Top Bar Overlay */}
          <div className="absolute top-4 left-4 right-4 pointer-events-none flex items-center justify-between z-10">
            <div className="px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-jura text-cyan-300 flex items-center gap-2">
              <Tv className="w-3.5 h-3.5 text-cyan-400" />
              <span>4K Ultra-HD Trailer // The Box</span>
            </div>

            <div className="px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-xs font-jura text-purple-300 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Official Release</span>
            </div>
          </div>

        </div>

      </div>

      {/* Video Modal if triggered from Hero */}
      {isTrailerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--bg-page)]/95 backdrop-blur-2xl animate-fadeIn">
          <div className="relative w-full max-w-4xl rounded-3xl glass-panel-glow border border-purple-500/50 overflow-hidden shadow-[0_0_80px_rgba(135,54,247,0.6)]">
            
            <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/40 bg-purple-950/40">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-cyan-300" />
                <span className="font-orbitron text-xs font-bold text-white uppercase tracking-wider">
                  The Box — Video Trailer
                </span>
              </div>
              <button
                onClick={() => setIsTrailerOpen(false)}
                className="p-2 rounded-full glass-panel hover:bg-purple-600/30 text-gray-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                src={videoUrl}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
