import React, { useRef, useEffect } from 'react';
import { booksData } from '../data/booksData';
import { BookOpen, Star, ShoppingBag, Headphones, Flame, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturedBooks({ onOpenExcerpt }) {
  const bookRefs = useRef([]);

  // 3D mouse tilt for each book card
  useEffect(() => {
    const cleanups = bookRefs.current.map((el) => {
      if (!el) return () => {};
      const handleMove = (e) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const rx = ((e.clientY - cy) / rect.height) * -8;
        const ry = ((e.clientX - cx) / rect.width) * 8;
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      };
      const handleLeave = () => {
        el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
      };
      el.addEventListener('mousemove', handleMove);
      el.addEventListener('mouseleave', handleLeave);
      return () => {
        el.removeEventListener('mousemove', handleMove);
        el.removeEventListener('mouseleave', handleLeave);
      };
    });
    return () => cleanups.forEach((c) => c());
  }, []);

  return (
    <section id="books" className="relative py-24 bg-page overflow-hidden">

      {/* LIA ghost marquee behind section */}
      <div className="pointer-events-none absolute top-8 left-0 right-0 overflow-hidden opacity-20 select-none">
        <div className="marquee-track flex gap-12 w-max">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="marquee-text text-[clamp(50px,9vw,90px)]">
              FEATURED NOVELS &nbsp; ✦ &nbsp; SCI-FI UNIVERSE &nbsp; ✦ &nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="pointer-events-none absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16" data-reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-glow border border-purple-500/30">
            <Flame className="w-4 h-4 text-purple-400" />
            <span className="font-jura text-xs font-bold uppercase tracking-widest text-purple-300">Published Works</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Featured <span className="text-gradient-cyan">Novels & Series</span>
          </h2>
          <p className="font-inter text-gray-400 text-sm sm:text-base leading-relaxed">
            Delve into high-stakes techno-thrillers exploring synthetic consciousness, alien bio-code, and the terrifying realities of human immortality.
          </p>
        </div>

        {/* Books grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {booksData.map((book, idx) => {
            const isPurple = book.accentColor === 'purple';
            return (
              <div
                key={book.id}
                data-reveal
                data-delay={String(idx * 150)}
                className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 group ${
                  isPurple ? 'glass-panel-glow' : 'glass-panel-cyan'
                }`}
                ref={(el) => (bookRefs.current[idx] = el)}
                style={{ transformStyle: 'preserve-3d', transition: 'transform 0.15s ease-out' }}
              >
                {/* Badge + rating */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 rounded-full font-jura text-xs font-bold uppercase tracking-wider ${
                    isPurple
                      ? 'bg-purple-950/80 text-purple-300 border border-purple-500/40'
                      : 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/40'
                  }`}>
                    {book.badge}
                  </span>
                  <div className="flex items-center gap-1.5 glass-panel px-3 py-1 rounded-full text-xs font-jura text-amber-300">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-bold">{book.rating}</span>
                    <span className="text-gray-400">({book.reviewsCount.toLocaleString()})</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Book cover */}
                  <div className="md:col-span-5 flex justify-center">
                    <div className="relative w-48 sm:w-56 h-72 sm:h-80 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.8)] border border-white/10 group-hover:scale-105 transition-transform duration-500">
                      <img src={book.cover} alt={book.title} data-reveal="img" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020103]/80 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="md:col-span-7 space-y-4 text-left">
                    <div>
                      <span className="font-jura text-xs text-purple-400 uppercase tracking-widest font-semibold">
                        Novel · {book.year}
                      </span>
                      <h3 className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white uppercase mt-1">
                        {book.title}
                      </h3>
                      <p className="font-outfit text-sm text-cyan-300 font-medium">{book.subtitle}</p>
                    </div>

                    <p className="font-inter text-xs sm:text-sm text-gray-300 leading-relaxed">{book.description}</p>

                    <div className="space-y-1.5 pt-2">
                      {book.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-inter text-gray-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${isPurple ? 'text-purple-400' : 'text-cyan-400'}`} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onOpenExcerpt(book.id)}
                        className={`btn-shine px-5 py-2.5 rounded-full font-orbitron text-xs font-bold uppercase tracking-wider text-white transition-all flex items-center gap-2 ${
                          isPurple
                            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 shadow-[0_0_20px_rgba(135,54,247,0.4)]'
                            : 'bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-teal-500 hover:to-cyan-500 shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                        }`}
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Read Excerpt</span>
                      </button>

                      <div className="flex items-center gap-2">
                        <a href={book.buyLinks.amazon} target="_blank" rel="noopener noreferrer"
                          className="p-2.5 rounded-full glass-panel border border-white/10 hover:border-amber-400 text-gray-300 hover:text-amber-300 transition-colors" title="Buy on Amazon">
                          <ShoppingBag className="w-4 h-4" />
                        </a>
                        <a href={book.buyLinks.audible} target="_blank" rel="noopener noreferrer"
                          className="p-2.5 rounded-full glass-panel border border-white/10 hover:border-cyan-400 text-gray-300 hover:text-cyan-300 transition-colors" title="Audible">
                          <Headphones className="w-4 h-4" />
                        </a>
                        <Link to="/shop"
                          className="px-4 py-2 rounded-full font-jura text-xs text-gray-300 glass-panel border border-white/10 hover:border-purple-400 hover:text-white transition-all">
                          Shop →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
