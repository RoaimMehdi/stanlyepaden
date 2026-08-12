import React, { useState } from 'react';
import { X, BookOpen, Volume2, VolumeX, ShoppingBag, Headphones, ExternalLink, Sparkles } from 'lucide-react';
import { booksData } from '../data/booksData';

export default function BookModal({ bookId, onClose }) {
  const book = booksData.find((b) => b.id === bookId) || booksData[0];
  const [activeTab, setActiveTab] = useState('excerpt');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#020103]/90 backdrop-blur-xl animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl glass-panel-glow border border-purple-500/40 shadow-[0_0_60px_rgba(135,54,247,0.4)] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/40 bg-purple-950/40">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-600/30 border border-purple-400/50 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-cyan-300" />
            </div>
            <div className="flex flex-col text-left">
              <h3 className="font-orbitron font-extrabold text-base text-white tracking-wider">
                {book.title}
              </h3>
              <span className="font-jura text-[10px] text-purple-300 uppercase tracking-widest">
                Stanley Paden Excerpt Reader
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full glass-panel hover:bg-purple-600/30 text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 py-3 bg-[#070512] border-b border-purple-900/30">
          <button
            onClick={() => setActiveTab('excerpt')}
            className={`px-4 py-1.5 rounded-full font-jura text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'excerpt'
                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(135,54,247,0.5)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Chapter Excerpt
          </button>

          <button
            onClick={() => setActiveTab('synopsis')}
            className={`px-4 py-1.5 rounded-full font-jura text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'synopsis'
                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(135,54,247,0.5)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Full Synopsis
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-left">
          
          {/* Audio Excerpt Preview Player Bar */}
          <div className="p-4 rounded-2xl glass-panel border border-cyan-500/30 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 p-0.5 shadow-[0_0_15px_rgba(0,240,255,0.6)] hover:scale-105 transition-transform"
              >
                <div className="w-full h-full bg-[#070512] rounded-full flex items-center justify-center">
                  {isPlayingAudio ? (
                    <Volume2 className="w-4 h-4 text-cyan-300 animate-pulse" />
                  ) : (
                    <VolumeX className="w-4 h-4 text-purple-300" />
                  )}
                </div>
              </button>
              <div className="flex flex-col">
                <span className="font-orbitron text-xs text-white">Audio Narration Sample</span>
                <span className="font-jura text-[10px] text-gray-400">Narrated by Professional Voice Cast</span>
              </div>
            </div>

            <div className="flex-1 max-w-xs hidden sm:block">
              <div className="w-full h-1.5 bg-purple-950 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 ${
                    isPlayingAudio ? 'w-3/4 animate-pulse' : 'w-0'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Content Views */}
          {activeTab === 'excerpt' ? (
            <div className="prose prose-invert max-w-none space-y-4">
              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-800/30 font-jura text-xs text-purple-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Selected Sample Text from {book.title} by Stanley Paden</span>
              </div>
              <pre className="font-inter text-sm sm:text-base text-gray-300 leading-relaxed whitespace-pre-wrap font-sans bg-transparent border-0 p-0">
                {book.excerpt}
              </pre>
            </div>
          ) : (
            <div className="space-y-4">
              <h4 className="font-orbitron text-base text-cyan-300 font-bold">
                {book.subtitle}
              </h4>
              <p className="font-inter text-sm sm:text-base text-gray-300 leading-relaxed">
                {book.synopsis}
              </p>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-purple-900/40 bg-purple-950/40 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={book.buyLinks.amazon}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full font-orbitron text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 flex items-center gap-2 shadow-[0_0_15px_rgba(135,54,247,0.4)]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Get Hardcover</span>
            </a>
            <a
              href={book.buyLinks.audible}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full glass-panel border border-cyan-500/40 font-jura text-xs font-bold text-cyan-300 hover:text-white flex items-center gap-2"
            >
              <Headphones className="w-4 h-4" />
              <span>Listen Audiobook</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full glass-panel border border-gray-700 text-xs font-jura uppercase tracking-wider text-gray-400 hover:text-white"
          >
            Close Reader
          </button>
        </div>

      </div>
    </div>
  );
}
