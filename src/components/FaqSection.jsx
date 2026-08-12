import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, BookOpen, ShoppingBag, ShieldCheck } from 'lucide-react';

const faqs = [
  {
    q: "Where can I purchase official hardcovers and paperbacks?",
    a: "Official signed paperbacks and hardcovers are available directly on our Order Now (Shop) page. You can also purchase digital Kindle editions and Audible audiobooks worldwide on Amazon and major distributors.",
  },
  {
    q: "In what order should I read Stanley Paden's novels?",
    a: "Stanley Paden's novels are standalone high-concept thrillers set in a shared speculative future universe. We recommend starting with 'The Box', followed by 'Return from Egypt' and 'I Hate Saint Louis'.",
  },
  {
    q: "Are film and television rights available?",
    a: "Film and television adaptation rights for 'The Box' and 'Return from Egypt' are represented by Stanley Paden's literary agency. For rights inquiries, please reach out via our Contact page.",
  },
  {
    q: "How can I request a signed copy or book signing event?",
    a: "Signed copies can be requested directly when ordering through the official shop, or by sending a message through the direct Holo Contact transmission form.",
  },
  {
    q: "When is Stanley Paden's next novel releasing?",
    a: "Stanley Paden's next novel 'Synthetic Consciousness: The Soul Codex' is currently scheduled for release in late 2026. Subscribe to the Newsletter terminal to receive early dispatches and sample chapters.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-24 bg-[#020103] overflow-hidden border-t border-purple-900/30">
      
      {/* Background Accent Lights */}
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      {/* Marquee Banner */}
      <div className="pointer-events-none absolute top-4 left-0 right-0 overflow-hidden opacity-15 select-none">
        <div className="marquee-track flex gap-12 w-max">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="marquee-text text-[clamp(50px,9vw,90px)]">
              FREQUENTLY ASKED QUESTIONS &nbsp; ✦ &nbsp; STANLEY PADEN &nbsp; ✦ &nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4" data-reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-glow border border-purple-500/30">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span className="font-jura text-xs font-bold uppercase tracking-widest text-purple-300">
              Reader Knowledge Base
            </span>
          </div>

          <h2 className="font-orbitron font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Frequently Asked <span className="text-gradient-cyan">Questions</span>
          </h2>

          <p className="font-inter text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to know about Stanley Paden's novels, signed editions, reading order, and future releases.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4" data-reveal data-delay="100">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all border ${
                  isOpen
                    ? 'glass-panel-glow border-purple-400/50 shadow-[0_0_25px_rgba(135,54,247,0.25)]'
                    : 'glass-panel border-white/5 hover:border-purple-500/30'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-orbitron text-sm sm:text-base font-bold text-white uppercase tracking-wider"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-jura text-xs text-cyan-400">0{idx + 1}.</span>
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-left font-inter text-sm text-gray-300 leading-relaxed border-t border-purple-900/30 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
