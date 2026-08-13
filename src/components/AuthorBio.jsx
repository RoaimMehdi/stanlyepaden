import React from 'react';
import { User, Award, BookOpen, Globe2 } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from './SocialIcons';

export default function AuthorBio() {
  return (
    <section id="about" className="relative py-24 bg-page overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Author Image Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden glass-panel-glow border-2 border-purple-500/50 shadow-[0_0_50px_rgba(135,54,247,0.4)] group">
              <img
                src="/assets/author_paden_portrait.png"
                alt="Stanley Paden Author"
                data-reveal="img"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020103] via-transparent to-transparent opacity-70" />

              {/* Author Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-white/10 backdrop-blur-md text-left">
                <h4 className="font-orbitron font-bold text-lg text-white">STANLEY PADEN</h4>
                <p className="font-jura text-xs text-cyan-300">Award-Winning Sci-Fi Author</p>
              </div>
            </div>
          </div>

          {/* Author Biography & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-glow border border-purple-500/30">
              <User className="w-4 h-4 text-purple-400" />
              <span className="font-jura text-xs font-bold uppercase tracking-widest text-purple-300">
                Author Journey
              </span>
            </div>

            <h2 className="font-orbitron font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
              Confront the Unseen Side of <span className="text-gradient-purple">Immortality</span>
            </h2>

            <p className="font-inter text-base sm:text-lg text-gray-300 leading-relaxed">
              Prepare for a gripping exploration into the future of life itself. Stanley Paden's <strong className="text-cyan-300">The Box</strong> challenges readers to consider the profound and often terrifying consequences of defying death, forcing a new perspective on humanity's ultimate desires and technological advancements.
            </p>

            <p className="font-inter text-sm text-gray-400 leading-relaxed">
              Based out of Stark City, MO, Stanley Paden weaves complex sci-fi narratives exploring high-concept technology, ancient archeological secrets, and moral dilemmas of tomorrow. His novels are acclaimed for combining fast-paced techno-thriller narrative momentum with deep philosophical resonance.
            </p>

            {/* Author Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl glass-panel border border-purple-500/20">
                <Award className="w-5 h-5 text-purple-400 mb-2" />
                <div className="font-orbitron font-bold text-xl text-white">Award Winner</div>
                <div className="font-jura text-xs text-gray-400">Sci-Fi Honors</div>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-purple-500/20">
                <BookOpen className="w-5 h-5 text-cyan-400 mb-2" />
                <div className="font-orbitron font-bold text-xl text-white">2+ Epic Novels</div>
                <div className="font-jura text-xs text-gray-400">The Box &amp; Egypt</div>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-purple-500/20">
                <Globe2 className="w-5 h-5 text-amber-400 mb-2" />
                <div className="font-orbitron font-bold text-xl text-white">Global Reach</div>
                <div className="font-jura text-xs text-gray-400">Worldwide Readers</div>
              </div>
            </div>

            {/* Social Connect Links */}
            <div className="pt-4 flex items-center gap-3">
              <span className="font-jura text-xs text-gray-400 uppercase tracking-widest font-bold mr-2">
                Follow Author:
              </span>
              
              <a
                href="https://www.facebook.com/StanleyPadenOfficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-panel border border-white/10 hover:border-purple-400 text-gray-300 hover:text-white transition-colors"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/stanleypadenofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-panel border border-white/10 hover:border-pink-400 text-gray-300 hover:text-white transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/company/stanley-paden-author/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-panel border border-white/10 hover:border-cyan-400 text-gray-300 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
