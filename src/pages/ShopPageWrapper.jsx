import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ShopPage from './ShopPage';
import { useGlobalScrollReveal } from '../hooks/useScrollReveal';

export default function ShopPageWrapper() {
  useGlobalScrollReveal();
  return (
    <div className="min-h-screen bg-[#020103] text-gray-100 selection:bg-purple-600 selection:text-white">
      <Navbar />
      <ShopPage />
      <Footer />
    </div>
  );
}
