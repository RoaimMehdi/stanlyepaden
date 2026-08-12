import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { useGlobalScrollReveal } from '../hooks/useScrollReveal';

export default function ContactPage() {
  useGlobalScrollReveal();

  return (
    <div className="min-h-screen bg-[#020103] text-gray-100 selection:bg-purple-600 selection:text-white">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-32 pb-4 overflow-hidden">
        <div className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(circle at 50% 30%, rgba(0,240,255,0.1), transparent 55%)' }} />

        <div className="overflow-hidden mb-8 opacity-25 select-none">
          <div className="marquee-track flex gap-12 w-max">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="marquee-text text-[clamp(50px,9vw,90px)]">
                CONTACT STANLEY PADEN &nbsp; ✦ &nbsp; GET IN TOUCH &nbsp; ✦ &nbsp;
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-orbitron font-black text-4xl sm:text-5xl uppercase tracking-tight text-white mb-4" data-reveal>
            Contact <span className="text-gradient-cyan">Stanley Paden</span>
          </h1>
          <p className="font-inter text-sm text-gray-400 max-w-xl mx-auto" data-reveal data-delay="100">
            For book signings, media interviews, keynote speeches, film rights, or direct reader correspondence.
          </p>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
