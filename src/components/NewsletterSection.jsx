import React, { useState } from 'react';
import { Send, Mail, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="relative py-20 bg-section border-y border-purple-900/30 overflow-hidden">
      
      {/* Neon Atmospheric Lines */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(135,54,247,0.18)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 border border-purple-500/40 text-center relative overflow-hidden">
          
          <div className="max-w-2xl mx-auto space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-xs font-jura text-cyan-300 font-bold uppercase tracking-widest">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Cyber Dispatch Terminal</span>
            </div>

            <h3 className="font-orbitron font-black text-2xl sm:text-4xl text-white uppercase">
              Stay Connected With <span className="text-gradient-purple">Stanley Paden</span>
            </h3>

            <p className="font-inter text-sm text-gray-300 leading-relaxed">
              Subscribe to receive exclusive chapter previews, sci-fi world-building lore drops, audiobook release announcements, and author tour dates.
            </p>

            {/* Newsletter Form */}
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/50 flex items-center justify-center gap-3 text-cyan-300 font-jura text-sm font-bold uppercase tracking-wider animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>Transmission Received! You are subscribed to Cyber Dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <div className="relative w-full flex-1">
                  <Mail className="w-4 h-4 text-purple-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full pl-11 pr-4 py-3.5 rounded-full bg-card border border-purple-800/40 focus:border-cyan-400 font-inter text-sm text-white placeholder-gray-500 outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-shine w-full sm:w-auto px-7 py-3.5 rounded-full font-orbitron text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-cyan-400 hover:to-purple-600 shadow-[0_0_20px_rgba(135,54,247,0.5)] transition-all flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4 text-cyan-200" />
                </button>
              </form>
            )}

            {/* Security Indicator */}
            <div className="flex items-center justify-center gap-2 pt-2 text-xs font-jura text-gray-400">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>Zero spam policy. Unsubscribe anytime.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
