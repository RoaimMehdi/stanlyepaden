import React, { useState } from 'react';
import { Mic, Volume2, Sparkles, Radio, MessageSquare, Play, RefreshCw, CheckCircle2 } from 'lucide-react';
import { booksData } from '../data/booksData';

export default function LiaVoiceWidget({ onOpenExcerpt }) {
  const [isListening, setIsListening] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const prompts = [
    {
      question: "What is 'The Box' about?",
      answer: "The Box explores the quantum containment of human souls beyond biological death. Agent Mark Vance must decide whether digital immortality is worth surrendering human mortality.",
      bookId: "the-box",
    },
    {
      question: "Tell me about 'Return from Egypt'.",
      answer: "A sub-surface LiDAR scan beneath the Valley of the Kings uncovers a 30,000-year-old pre-dynastic vault containing light-transmitting quartz encoded with alien bio-code.",
      bookId: "return-from-egypt",
    },
    {
      question: "What's the story in 'I Hate Saint Louis'?",
      answer: "A rain-drenched cyber-noir thriller in dystopian Neo-Saint Louis. Detective Sean Mercer investigates corporate assassinations in a world where memory is currency.",
      bookId: "i-hate-saint-louis",
    },
  ];

  const handlePromptClick = (index) => {
    setSelectedPrompt(index);
    setIsSpeaking(true);
    setTimeout(() => setIsSpeaking(false), 4500);
  };

  const toggleMic = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      handlePromptClick((selectedPrompt + 1) % prompts.length);
    }, 2000);
  };

  return (
    <section className="relative py-16 bg-[#030209] overflow-hidden border-y border-purple-900/30">
      
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(135,54,247,0.15)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* LIA Voice Header */}
        <div className="space-y-3" data-reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-cyan border border-cyan-500/40">
            <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="font-jura text-xs font-bold uppercase tracking-widest text-cyan-300">
              Interactive Holo-Voice Assistant
            </span>
          </div>

          <h2 className="font-orbitron font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
            Ask LIA About <span className="text-gradient-purple">Stanley Paden's Universe</span>
          </h2>

          <p className="font-inter text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
            Experience LIA's voice interface — click below to simulate real-time conversational AI summaries for any of Stanley Paden's novels.
          </p>
        </div>

        {/* Central LIA Voice Orb + Equalizer */}
        <div className="relative flex flex-col items-center justify-center gap-6" data-reveal data-delay="100">
          
          <div className="relative flex items-center justify-center">
            {/* Pulsating Sonar Rings */}
            <div className={`absolute w-36 h-36 rounded-full border border-cyan-500/30 ${isSpeaking || isListening ? 'animate-ping' : 'animate-pulse'}`} />
            <div className="absolute w-44 h-44 rounded-full border border-purple-500/20 animate-sonar" />

            {/* Mic Orb Button */}
            <button
              onClick={toggleMic}
              className={`relative z-10 w-24 h-24 rounded-full p-0.5 transition-transform duration-300 hover:scale-110 flex items-center justify-center shadow-[0_0_50px_rgba(0,240,255,0.5)] ${
                isListening
                  ? 'bg-gradient-to-r from-red-500 to-amber-500 animate-bounce'
                  : isSpeaking
                  ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400'
                  : 'bg-gradient-to-r from-purple-600 to-cyan-500'
              }`}
            >
              <div className="w-full h-full bg-[#070512] rounded-full flex items-center justify-center">
                {isListening ? (
                  <RefreshCw className="w-8 h-8 text-amber-400 animate-spin" />
                ) : (
                  <Mic className={`w-8 h-8 ${isSpeaking ? 'text-cyan-300 animate-pulse' : 'text-purple-300'}`} />
                )}
              </div>
            </button>
          </div>

          {/* LIA Live Voice Equalizer Bars */}
          <div className="flex items-center gap-1.5 h-8">
            {[...Array(12)].map((_, i) => (
              <span
                key={i}
                className="wave-bar bg-cyan-400"
                style={{
                  height: isSpeaking ? `${Math.sin(i + Date.now()) * 14 + 16}px` : '8px',
                  animationDuration: `${0.4 + (i % 5) * 0.15}s`,
                }}
              />
            ))}
          </div>

          <span className="font-jura text-xs text-cyan-300 uppercase tracking-widest font-semibold">
            {isListening ? "Listening to your transmission..." : isSpeaking ? "LIA Speaking..." : "Click mic or select prompt below"}
          </span>
        </div>

        {/* Prompt Selection Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-4xl mx-auto" data-reveal data-delay="200">
          {prompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handlePromptClick(idx)}
              className={`p-4 rounded-2xl transition-all border text-left flex flex-col justify-between gap-3 ${
                selectedPrompt === idx
                  ? 'glass-panel-cyan border-cyan-400/60 shadow-[0_0_20px_rgba(0,240,255,0.3)] scale-[1.02]'
                  : 'glass-panel border-white/5 hover:border-purple-500/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-jura text-[10px] text-purple-400 uppercase tracking-wider font-bold">Query 0{idx + 1}</span>
                {selectedPrompt === idx && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
              </div>
              <p className="font-orbitron text-xs font-bold text-white leading-snug">{p.question}</p>
            </button>
          ))}
        </div>

        {/* Dynamic Voice Answer Display Card */}
        <div className="max-w-3xl mx-auto glass-panel-glow p-6 sm:p-8 rounded-3xl border border-purple-500/40 text-left space-y-4 shadow-[0_0_40px_rgba(135,54,247,0.2)]" data-reveal data-delay="300">
          <div className="flex items-center justify-between pb-3 border-b border-purple-900/40">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="font-jura text-xs font-bold text-cyan-300 uppercase tracking-widest">
                LIA Response Stream
              </span>
            </div>
            <span className="font-jura text-[10px] text-purple-400 uppercase">Live Output</span>
          </div>

          <p className="font-inter text-sm sm:text-base text-gray-200 leading-relaxed italic">
            "{prompts[selectedPrompt].answer}"
          </p>

          <div className="flex items-center justify-between pt-2">
            <span className="font-jura text-xs text-gray-400">Novel: {prompts[selectedPrompt].bookId.toUpperCase()}</span>
            <button
              onClick={() => onOpenExcerpt(prompts[selectedPrompt].bookId)}
              className="px-4 py-2 rounded-full font-orbitron text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-cyan-400 hover:to-purple-600 transition-all shadow-[0_0_15px_rgba(135,54,247,0.4)]"
            >
              Read Excerpt →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
