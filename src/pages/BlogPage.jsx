import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import NewsletterSection from '../components/NewsletterSection';
import { useGlobalScrollReveal } from '../hooks/useScrollReveal';
import { BookOpen, Calendar, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Philosophy of Quantum Consciousness in Sci-Fi Literature',
    date: 'February 10, 2026',
    category: 'Author Essays',
    readTime: '6 min read',
    excerpt: 'Exploring how quantum entanglement and non-locality inspire new narratives in synthetic consciousness and character morality in The Box.',
  },
  {
    id: 2,
    title: 'Unearthing Neo-Giza: Blending Ancient History with Cybernetics',
    date: 'January 28, 2026',
    category: 'Worldbuilding',
    readTime: '8 min read',
    excerpt: 'How sub-surface LiDAR mapping and pre-dynastic archeology inspired the world and atmosphere of Return from Egypt.',
  },
  {
    id: 3,
    title: 'Dystopian Noir & The Cyberpunk Megacity Aesthetic',
    date: 'January 14, 2026',
    category: 'Behind The Scenes',
    readTime: '5 min read',
    excerpt: 'Crafting rain-slicked neon alleys, shadow corporations, and moral ambiguity in I Hate Saint Louis.',
  },
];

export default function BlogPage() {
  useGlobalScrollReveal();

  return (
    <div className="min-h-screen bg-page text-gray-100 selection:bg-purple-600 selection:text-white">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(circle at 50% 30%, rgba(0,240,255,0.15), transparent 55%)' }} />

        {/* Marquee Banner */}
        <div className="overflow-hidden mb-8 opacity-25 select-none">
          <div className="marquee-track flex gap-12 w-max">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="marquee-text text-[clamp(50px,9vw,90px)]">
                BLOG &amp; CONNECT &nbsp; ✦ &nbsp; STANLEY PADEN &nbsp; ✦ &nbsp;
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-cyan border border-cyan-500/30 mb-4" data-reveal>
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span className="font-jura text-xs font-bold uppercase tracking-widest text-cyan-300">Author Dispatches &amp; Connect</span>
          </div>
          <h1 className="font-orbitron font-black text-4xl sm:text-5xl uppercase tracking-tight text-white mb-4" data-reveal data-delay="100">
            Blog &amp; <span className="text-gradient-purple">Connect</span>
          </h1>
          <p className="font-inter text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed" data-reveal data-delay="200">
            Read Stanley Paden's latest essays on sci-fi worldbuilding, technology dispatches, and get directly in touch for signings and inquiries.
          </p>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-12 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <div
                key={post.id}
                data-reveal
                data-delay={String(idx * 150)}
                className="rounded-3xl p-6 glass-panel-glow border border-purple-500/30 hover:border-cyan-400/50 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 font-jura text-[10px] font-bold text-purple-300 uppercase">
                      {post.category}
                    </span>
                    <span className="font-jura text-xs text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {post.date}
                    </span>
                  </div>

                  <h3 className="font-orbitron font-extrabold text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {post.title}
                  </h3>

                  <p className="font-inter text-xs text-gray-300 leading-relaxed">{post.excerpt}</p>
                </div>

                <div className="pt-4 border-t border-purple-900/40 flex items-center justify-between">
                  <span className="font-jura text-xs text-cyan-400 font-bold">{post.readTime}</span>
                  <button className="font-orbitron text-xs text-purple-300 group-hover:text-white flex items-center gap-1">
                    <span>Read Dispatch</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Dispatch */}
      <NewsletterSection />

      {/* Direct Holo Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  );
}
