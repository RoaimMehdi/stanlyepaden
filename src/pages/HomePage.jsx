import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import LiaRadialWheel from '../components/LiaRadialWheel';
import LiaAuthorSpotlight from '../components/LiaAuthorSpotlight';
import LiaVideoReelSection from '../components/LiaVideoReelSection';
import LiaVoiceWidget from '../components/LiaVoiceWidget';
import LiaShowcaseSection from '../components/LiaShowcaseSection';
import LiaFeatureScroll from '../components/LiaFeatureScroll';
import Footer from '../components/Footer';
import BookModal from '../components/BookModal';
import TrailerModal from '../components/TrailerModal';

export default function HomePage() {
  const [activeExcerptId, setActiveExcerptId] = useState(null);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-page text-gray-100 selection:bg-purple-600 selection:text-white relative overflow-x-clip">
      
      {/* Navigation Header */}
      <Navbar />

      <main>
        {/* 1. LIA Hero Section (Particle matrix, hero orb, sonar rings, auto-scroll lore rail) */}
        <HeroSection
          onOpenExcerpt={setActiveExcerptId}
          onOpenTrailer={() => setIsTrailerOpen(true)}
        />

        {/* 2. LIA Scroll-Driven Sticky Rotating Arc Wheel (Pins & spins wheel as user scrolls down, then releases down to Author section) */}
        <LiaRadialWheel onOpenExcerpt={setActiveExcerptId} />

        {/* 3. LIA Author Spotlight (Stanley Paden Official Portrait Photo + Lore Summary) */}
        <LiaAuthorSpotlight />

        {/* 4. LIA Interactive Video Side Showcase (Video Reel, Sound Waves, Captions) */}
        <LiaVideoReelSection onOpenTrailer={() => setIsTrailerOpen(true)} />

        {/* 5. LIA AI Showcase (Marquee, CountUp stats, Live Chat Demo, Auto-Rotating Carousel) */}
        <LiaShowcaseSection />

        {/* 6. LIA Interactive Holo-Voice AI Assistant Widget */}
        <LiaVoiceWidget onOpenExcerpt={setActiveExcerptId} />

        {/* 7. LIA 3D Scroll-Driven Rolling Deck Showcase */}
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
