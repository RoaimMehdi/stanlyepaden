import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, GoogleIcon } from './SocialIcons';
import Logo from './Logo';

// Exact nav links matching requested structure
const navCols = [
  { label: 'Home',                 to: '/' },
  { label: 'About',                to: '/about' },
  { label: 'Order Now',            to: '/shop' },
  { label: 'Podcast & Interviews', to: '/podcast' },
  { label: 'Blog & Connect',       to: '/blog' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-page border-t border-purple-900/40 pt-16 pb-8 overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 right-0 w-64 h-64 bg-purple-600/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purple-900/30">

          {/* Official Brand Logo */}
          <div className="md:col-span-5 space-y-4 text-left">
            <Link to="/" className="inline-block" title="Stanley Paden Official Site">
              <Logo />
            </Link>

            <p className="font-inter text-xs text-gray-400 leading-relaxed max-w-sm">
              Exploring synthetic consciousness, quantum containment, and the deep ethical horizons of tomorrow through award-winning science fiction.
            </p>

            <div className="space-y-1 pt-1 font-jura text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>Stark City, MO</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href="mailto:contact@stanleypaden.com" className="hover:text-cyan-300 transition-colors">
                  contact@stanleypaden.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 text-left space-y-3">
            <h4 className="font-orbitron text-xs font-bold text-white uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2 font-inter text-xs text-gray-400">
              {navCols.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-cyan-300 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-4 text-left space-y-3">
            <h4 className="font-orbitron text-xs font-bold text-white uppercase tracking-widest">Connect Channels</h4>
            <p className="font-inter text-xs text-gray-400">
              Follow Stanley Paden for author updates, tour dates, and new book releases.
            </p>
            <div className="flex items-center gap-2 pt-2">
              {[
                { href: 'https://www.facebook.com/StanleyPadenOfficial/', icon: <FacebookIcon className="w-4 h-4" />, hover: 'hover:border-purple-400' },
                { href: 'https://www.instagram.com/stanleypadenofficial/', icon: <InstagramIcon className="w-4 h-4" />, hover: 'hover:border-pink-400' },
                { href: 'https://www.linkedin.com/company/stanley-paden-author/', icon: <LinkedinIcon className="w-4 h-4" />, hover: 'hover:border-cyan-400' },
                { href: 'https://share.google/8cvk7JpiANow6Kerq', icon: <GoogleIcon className="w-4 h-4" />, hover: 'hover:border-amber-400' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`p-2.5 rounded-full glass-panel border border-white/10 ${s.hover} text-gray-300 hover:text-white transition-all hover:scale-110`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-jura text-xs text-gray-500">
          <p>© 2026 Stanley Paden. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-purple-500/30 text-purple-300 hover:text-cyan-300 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
