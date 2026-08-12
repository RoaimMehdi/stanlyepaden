import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthorBio from '../components/AuthorBio';
import Testimonials from '../components/Testimonials';
import { useGlobalScrollReveal } from '../hooks/useScrollReveal';
import { BookOpen, Award, Globe2, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  useGlobalScrollReveal();

  return (
    <div className="min-h-screen bg-[#020103] text-gray-100 selection:bg-purple-600 selection:text-white">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(circle at 50% 30%, rgba(135,54,247,0.15), transparent 55%)' }} />

        {/* Marquee */}
        <div className="overflow-hidden mb-12 opacity-30 select-none">
          <div className="marquee-track flex gap-12 w-max">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="marquee-text text-[clamp(50px,9vw,90px)]">
                ABOUT THE AUTHOR &nbsp; ✦ &nbsp; STANLEY PADEN &nbsp; ✦ &nbsp;
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-glow border border-purple-500/30 mb-6" data-reveal>
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span className="font-jura text-xs font-bold uppercase tracking-widest text-purple-300">Meet The Author</span>
          </div>
          <h1 className="font-orbitron font-black text-4xl sm:text-6xl uppercase tracking-tight text-white mb-6" data-reveal data-delay="100">
            About <span className="text-gradient-purple">Stanley Paden</span>
          </h1>
          <p className="font-inter text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto" data-reveal data-delay="200">
            Award-winning science fiction author based in Stark City, MO. Exploring synthetic consciousness, quantum containment, and humanity's greatest ethical horizons.
          </p>
        </div>
      </section>

      {/* Stats row */}
      <section className="py-8 border-y border-purple-900/30">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { icon: <BookOpen className="w-5 h-5 text-purple-400" />, value: '3+', label: 'Published Novels' },
            { icon: <Award className="w-5 h-5 text-amber-400" />, value: 'Award', label: 'Winning Author' },
            { icon: <Globe2 className="w-5 h-5 text-cyan-400" />, value: 'Global', label: 'Reader Reach' },
            { icon: <BookOpen className="w-5 h-5 text-green-400" />, value: '4.9★', label: 'Average Rating' },
          ].map((s, i) => (
            <div key={i} className="p-4 rounded-2xl glass-panel border border-purple-500/20 text-center" data-reveal data-delay={String(i * 100)}>
              <div className="flex justify-center mb-2">{s.icon}</div>
              <div className="font-orbitron font-black text-2xl text-white">{s.value}</div>
              <div className="font-jura text-xs text-gray-400 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Author Bio Section */}
      <AuthorBio />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6" data-reveal>
          <h2 className="font-orbitron font-black text-3xl sm:text-4xl uppercase text-white">
            Ready to <span className="text-gradient-cyan">Explore?</span>
          </h2>
          <p className="font-inter text-sm text-gray-400">
            Dive into Stanley Paden's universe with his award-winning novels.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/books" className="px-6 py-3.5 rounded-full font-orbitron text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-purple-600 to-cyan-500 shadow-[0_0_30px_rgba(135,54,247,0.5)] hover:from-cyan-400 hover:to-purple-600 transition-all flex items-center gap-2">
              <span>View All Books</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="px-6 py-3.5 rounded-full font-orbitron text-xs font-bold uppercase tracking-widest text-gray-200 glass-panel border border-purple-500/40 hover:border-cyan-400 hover:text-white transition-all">
              Contact Author
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
