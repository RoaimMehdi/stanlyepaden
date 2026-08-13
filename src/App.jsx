import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import PageReveal from './components/PageReveal';
import { useGlobalScrollReveal } from './hooks/useScrollReveal';

// Pages matching exact navigation structure requested
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ShopPageWrapper from './pages/ShopPageWrapper';
import PodcastPage from './pages/PodcastPage';
import BlogPage from './pages/BlogPage';
import BooksPage from './pages/BooksPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  const [revealed, setRevealed] = useState(false);

  // Attach global scroll reveal for all [data-reveal] elements
  useGlobalScrollReveal();

  return (
    <div className="relative overflow-x-clip">
      {/* Custom glow cursor */}
      <CustomCursor />

      {/* LIA-style circle entrance reveal — only on first load */}
      {!revealed && <PageReveal onComplete={() => setRevealed(true)} />}

      {/* Scroll restoration on route change */}
      <ScrollToTop />

      {/* Routes */}
      <Routes>
        <Route path="/"        element={<HomePage />} />
        <Route path="/about"   element={<AboutPage />} />
        <Route path="/shop"    element={<ShopPageWrapper />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/blog"    element={<BlogPage />} />
        <Route path="/books"   element={<BooksPage />} />
        {/* Fallback */}
        <Route path="*"        element={<HomePage />} />
      </Routes>
    </div>
  );
}
