import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, BookOpen, ChevronRight } from 'lucide-react';
import Logo from './Logo';

// Exact Navigation Names from user request
const navLinks = [
  { label: 'Home',                 to: '/' },
  { label: 'About',                to: '/about' },
  { label: 'Order Now',            to: '/shop' },
  { label: 'Podcast & Interviews', to: '/podcast' },
  { label: 'Blog & Connect',       to: '/blog' },
];

export default function Navbar({ cartCount = 0 }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-panel border-b border-purple-900/40 shadow-[0_4px_30px_rgba(135,54,247,0.15)] bg-[#020103]/90 backdrop-blur-xl py-2.5'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Official Logo */}
            <Link to="/" title="Stanley Paden Official Site">
              <Logo isLight={true} />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-full font-inter text-xs sm:text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-purple-600/30 text-cyan-300 border border-purple-400/40 shadow-[0_0_15px_rgba(135,54,247,0.3)]'
                        : 'text-gray-300 hover:text-white hover:bg-purple-950/40'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: Cart + Order CTA */}
            <div className="flex items-center gap-3">
              <Link
                to="/shop"
                className="relative p-2.5 rounded-full glass-panel border border-white/10 hover:border-purple-400 text-gray-300 hover:text-white transition-all"
                title="Order Books / Cart"
              >
                <ShoppingBag className="w-4 h-4 text-cyan-300" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-purple-600 text-white text-[9px] font-bold flex items-center justify-center font-jura shadow-[0_0_8px_#8736f7]">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link
                to="/shop"
                className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full font-orbitron text-[11px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-cyan-400 hover:to-purple-600 shadow-[0_0_20px_rgba(135,54,247,0.4)] transition-all hover:scale-105"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Order Now</span>
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="lg:hidden p-2 rounded-full glass-panel border border-white/10 text-gray-300 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-[#020103]/95 backdrop-blur-2xl" onClick={() => setMenuOpen(false)} />
          <nav className="absolute top-20 left-0 right-0 px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `flex items-center justify-between px-5 py-3.5 rounded-2xl font-inter text-sm font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'glass-panel-glow text-cyan-300 border border-purple-400/40'
                      : 'glass-panel border border-white/5 text-gray-300 hover:text-white'
                  }`
                }
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 opacity-40 text-cyan-400" />
              </NavLink>
            ))}

            <Link
              to="/shop"
              className="mt-4 flex items-center justify-center gap-2 px-5 py-4 rounded-2xl font-orbitron text-sm font-bold uppercase tracking-widest text-white bg-gradient-to-r from-purple-600 to-cyan-500 shadow-[0_0_30px_rgba(135,54,247,0.5)]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Now</span>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
