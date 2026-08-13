import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonialsData';
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquareCode } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const activeReview = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 bg-page overflow-hidden">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16" data-reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-cyan border border-cyan-500/40">
            <MessageSquareCode className="w-4 h-4 text-cyan-400" />
            <span className="font-jura text-xs font-bold uppercase tracking-widest text-cyan-300">
              Reader Reviews
            </span>
          </div>

          <h2 className="font-orbitron font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Client &amp; Reader <span className="text-gradient-purple">Feedback</span>
          </h2>

          <p className="font-inter text-gray-400 text-sm sm:text-base">
            Don't trust our words only. Take words from sci-fi readers and critics worldwide.
          </p>
        </div>

        {/* Testimonials Carousel Card */}
        <div className="relative glass-panel-glow rounded-3xl p-8 sm:p-12 border border-purple-500/40 text-center shadow-[0_0_60px_rgba(135,54,247,0.3)]" data-reveal data-delay="100">
          
          <Quote className="w-12 h-12 text-purple-400/30 mx-auto mb-6" />

          {/* Rating Stars */}
          <div className="flex items-center justify-center gap-1.5 mb-6">
            {[...Array(activeReview.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Quote Text */}
          <p className="font-outfit text-lg sm:text-2xl font-light text-gray-100 leading-relaxed max-w-3xl mx-auto italic">
            "{activeReview.quote}"
          </p>

          {/* Reviewer Details */}
          <div className="mt-8 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-purple-400/60 shadow-[0_0_15px_rgba(135,54,247,0.5)] mb-3">
              <img
                src={activeReview.avatar}
                alt={activeReview.name}
                data-reveal="img"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-orbitron font-bold text-base text-white">
              {activeReview.name}
            </h4>
            <p className="font-jura text-xs text-cyan-300 mt-0.5">
              {activeReview.role} · Reviewed <span className="font-bold">{activeReview.bookRef}</span>
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full glass-panel border border-purple-500/30 hover:border-cyan-400 text-purple-300 hover:text-cyan-300 transition-all hover:scale-110"
              title="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-cyan-400 shadow-[0_0_10px_#00f0ff]'
                      : 'w-2 bg-purple-900/60 hover:bg-purple-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full glass-panel border border-purple-500/30 hover:border-cyan-400 text-purple-300 hover:text-cyan-300 transition-all hover:scale-110"
              title="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
