import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeaturedBooks from '../components/FeaturedBooks';
import BookModal from '../components/BookModal';
import { useGlobalScrollReveal } from '../hooks/useScrollReveal';

export default function BooksPage() {
  useGlobalScrollReveal();
  const [activeExcerptId, setActiveExcerptId] = useState(null);

  return (
    <div className="min-h-screen bg-[#020103] text-gray-100 selection:bg-purple-600 selection:text-white">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-32 pb-4 overflow-hidden">
        <div className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(circle at 50% 30%, rgba(135,54,247,0.15), transparent 55%)' }} />

        <div className="overflow-hidden mb-8 opacity-25 select-none">
          <div className="marquee-track flex gap-12 w-max">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="marquee-text text-[clamp(50px,9vw,90px)]">
                NOVELS &nbsp; ✦ &nbsp; STANLEY PADEN &nbsp; ✦ &nbsp; SCI-FI UNIVERSE &nbsp; ✦ &nbsp;
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-orbitron font-black text-4xl sm:text-5xl uppercase tracking-tight text-white mb-4" data-reveal>
            Featured <span className="text-gradient-purple">Novels</span>
          </h1>
          <p className="font-inter text-sm text-gray-400 max-w-xl mx-auto" data-reveal data-delay="100">
            Delve into high-stakes techno-thrillers exploring synthetic consciousness, alien bio-code, and the terrifying realities of human immortality.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4" data-reveal data-delay="200">
            <Link to="/shop" className="px-6 py-3 rounded-full font-orbitron text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-purple-600 to-cyan-500 shadow-[0_0_20px_rgba(135,54,247,0.4)] hover:from-cyan-400 hover:to-purple-600 transition-all">
              Buy Now →
            </Link>
          </div>
        </div>
      </section>

      <FeaturedBooks onOpenExcerpt={setActiveExcerptId} />

      {activeExcerptId && <BookModal bookId={activeExcerptId} onClose={() => setActiveExcerptId(null)} />}

      <Footer />
    </div>
  );
}
