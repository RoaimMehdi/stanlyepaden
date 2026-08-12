import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import LiaVoiceWidget from '../components/LiaVoiceWidget';
import LiaRadialWheel from '../components/LiaRadialWheel';
import LiaFeatureScroll from '../components/LiaFeatureScroll';
import Footer from '../components/Footer';
import BookModal from '../components/BookModal';
import TrailerModal from '../components/TrailerModal';

export default function HomePage() {
  const [activeExcerptId, setActiveExcerptId] = useState(null);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020103] text-gray-100 selection:bg-purple-600 selection:text-white relative overflow-x-hidden">
      
      {/* Navigation Header */}
      <Navbar />

      <main>
        {/* 1. LIA Hero Section (Particle matrix, hero orb, sonar rings, auto-scroll lore rail) */}
        <HeroSection
          onOpenExcerpt={setActiveExcerptId}
          onOpenTrailer={() => setIsTrailerOpen(true)}
        />

        {/* 2. LIA Interactive Holo-Voice AI Assistant Widget */}
        <LiaVoiceWidget onOpenExcerpt={setActiveExcerptId} />

        {/* 3. LIA Radial Arc Wheel Dial Showcase */}
        <LiaRadialWheel onOpenExcerpt={setActiveExcerptId} />

        {/* 4. LIA 3D Scroll-Driven Rolling Deck Showcase */}
        <LiaFeatureScroll onOpenExcerpt={setActiveExcerptId} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Chapter Excerpt Reader Modal */}
      {activeExcerptId && (
        <BookModal bookId={activeExcerptId} onClose={() => setActiveExcerptId(null)} />
      )}

      {/* Video Trailer Modal */}
      {isTrailerOpen && (
        <TrailerModal onClose={() => setIsTrailerOpen(false)} />
      )}

    </div>
  );
}
