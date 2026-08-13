import React from 'react';
import { Film, X } from 'lucide-react';

export default function TrailerModal({ onClose }) {
  const videoUrl = "https://stanleypaden.com/wp-content/uploads/2026/01/Stanley-Paden-The-Box-Video-Trailer-1.mp4";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--bg-page)]/95 backdrop-blur-2xl animate-fadeIn">
      <div className="relative w-full max-w-4xl rounded-3xl glass-panel-glow border border-purple-500/50 overflow-hidden shadow-[0_0_80px_rgba(135,54,247,0.6)]">
        
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/40 bg-purple-950/40">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-cyan-300" />
            <span className="font-orbitron text-xs font-bold text-white uppercase tracking-wider">
              The Box — Official Video Trailer
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full glass-panel hover:bg-purple-600/30 text-gray-300 hover:text-white transition-colors"
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
  );
}
