import React from 'react';
import Marquee from './Marquee';
import CountUp from './CountUp';
import ChatDemo from './ChatDemo';
import Carousel from './Carousel';
import useScrollReveal from './useScrollReveal';
import './reveal-and-hover.css';
import { Sparkles, Bot, BarChart3, Radio } from 'lucide-react';

const stats = [
  { end: 6, suffix: '+', label: 'Published Masterworks' },
  { end: 12, suffix: '+', label: 'Genre Awards Won' },
  { end: 100, suffix: 'K+', label: 'Readers Worldwide' },
  { end: 4.9, decimals: 1, suffix: '★', label: 'Average Reader Rating' },
];

const chatMessages = [
  { from: 'user', text: 'What is The Box about?' },
  { from: 'bot', text: 'A quantum containment vault traps human souls beyond death — and Agent Mark Vance must decide what humanity is worth.' },
  { from: 'user', text: 'Tell me about Return from Egypt.' },
  { from: 'bot', text: 'A 30,000-year-old pre-dynastic vault beneath the Valley of the Kings, holding alien bio-code encoded in light.' },
];

const quotes = [
  {
    quote: 'Paden turns the concept of immortality inside out. Deeply unsettling and impossible to put down.',
    name: 'Sarah Chen',
    role: 'Senior Sci-Fi Critic',
  },
  {
    quote: 'A future that feels both distant and eerily possible. Masterfully crafted speculative fiction.',
    name: 'Emily Carter',
    role: 'Editor, Nebula Horizon',
  },
  {
    quote: 'Brilliant reflection on AI containment, climate collapse, and human collaboration.',
    name: 'Alex Johnson',
    role: 'Tech Ethics Columnist',
  },
];

export default function LiaShowcaseSection() {
  const statsReveal = useScrollReveal();
  const mainReveal = useScrollReveal();

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-page border-y border-purple-900/30">
      
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(135,54,247,0.18)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,240,255,0.1)_0%,transparent_55%)]" />

      {/* Marquee Banner */}
      <div className="relative mb-14 opacity-40 select-none">
        <Marquee
          items={['STANLEY PADEN', 'THE BOX', 'RETURN FROM EGYPT', 'I HATE SAINT LOUIS']}
          separator="✦"
          speed={28}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14" data-reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-cyan border border-cyan-500/40">
            <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="font-jura text-xs font-bold uppercase tracking-widest text-cyan-300">
              LIA AI Showcase
            </span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Powered By <span className="text-gradient-purple">Intelligent AI</span>
          </h2>
          <p className="font-inter text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
            The same animation engine powering LIA Live — marquee streams, animated counters, live chat demos and auto-rotating showcases, now running inside the Paden Universe.
          </p>
        </div>

        {/* Animated Stats Row */}
        <div ref={statsReveal.ref} className={`reveal ${statsReveal.visible ? 'reveal--visible' : ''} grid grid-cols-2 md:grid-cols-4 gap-4 mb-14`}>
          {stats.map((s, i) => (
            <div
              key={i}
              className="reveal-child hover-lift hover-glow p-6 rounded-2xl glass-panel-glow border border-purple-500/30 text-center"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <BarChart3 className="w-6 h-6 text-cyan-400 mx-auto mb-3" />
              <div className="font-orbitron font-black text-3xl sm:text-4xl text-white">
                <CountUp end={s.end} suffix={s.suffix || ''} decimals={s.decimals || 0} />
              </div>
              <div className="font-jura text-[11px] text-gray-400 uppercase tracking-wider mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Demo + Carousel Split */}
        <div ref={mainReveal.ref} className={`reveal ${mainReveal.visible ? 'reveal--visible' : ''} grid grid-cols-1 lg:grid-cols-2 gap-6`}>
          
          {/* Live Chat Demo */}
          <div className="reveal-child hover-lift hover-glow rounded-3xl glass-panel border border-purple-500/30 p-2">
            <div className="flex items-center justify-between px-4 py-3 border-b border-purple-900/40">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-cyan-400" />
                <span className="font-jura text-xs font-bold text-cyan-300 uppercase tracking-widest">
                  LIA Live Chat
                </span>
              </div>
              <span className="flex items-center gap-1.5 font-jura text-[10px] text-gray-400 uppercase">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Online
              </span>
            </div>
            <ChatDemo
              messages={chatMessages}
              typingDelay={700}
              messageDelay={1700}
            />
          </div>

          {/* Auto-Rotating Quotes Carousel */}
          <div className="reveal-child hover-lift hover-glow rounded-3xl glass-panel-glow border border-purple-500/30 p-8 sm:p-10 flex flex-col justify-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="font-jura text-xs font-bold text-purple-300 uppercase tracking-widest">
                Reader Testimonials
              </span>
            </div>
            <Carousel items={quotes} interval={4500} />
          </div>

        </div>

      </div>
    </section>
  );
}
