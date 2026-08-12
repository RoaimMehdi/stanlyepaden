import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, GoogleIcon } from './SocialIcons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 bg-[#020103] overflow-hidden">
      
      {/* Glow Backdrop */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-glow border border-purple-500/30 mb-4">
                <MessageSquare className="w-4 h-4 text-purple-400" />
                <span className="font-jura text-xs font-bold uppercase tracking-widest text-purple-300">
                  Direct Holo-Line
                </span>
              </div>

              <h2 className="font-orbitron font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
                Let's <span className="text-gradient-cyan">Connect</span>
              </h2>

              <p className="font-inter text-sm sm:text-base text-gray-400 mt-2 leading-relaxed">
                Reach out for book signings, media interviews, keynote speeches, film rights inquiries, or direct reader correspondence.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4">
              
              <div className="p-4 rounded-2xl glass-panel border border-purple-500/20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-400/40 flex items-center justify-center text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-jura text-xs text-gray-400 uppercase tracking-wider">Author Base</span>
                  <p className="font-orbitron text-sm font-bold text-white">Stark City MO · Apex, SF 27502</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-purple-500/20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-jura text-xs text-gray-400 uppercase tracking-wider">Official Email</span>
                  <a
                    href="mailto:contact@stanleypaden.com"
                    className="font-orbitron text-sm font-bold text-cyan-300 hover:underline block"
                  >
                    contact@stanleypaden.com
                  </a>
                </div>
              </div>

            </div>

            {/* Social Icons */}
            <div className="space-y-3 pt-2">
              <span className="font-jura text-xs font-bold text-gray-400 uppercase tracking-widest">
                Official Channels
              </span>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/StanleyPadenOfficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl glass-panel border border-white/10 hover:border-purple-400 text-gray-300 hover:text-white transition-all hover:scale-110"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>

                <a
                  href="https://www.instagram.com/stanleypadenofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl glass-panel border border-white/10 hover:border-pink-400 text-gray-300 hover:text-white transition-all hover:scale-110"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/company/stanley-paden-author/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl glass-panel border border-white/10 hover:border-cyan-400 text-gray-300 hover:text-white transition-all hover:scale-110"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href="https://share.google/8cvk7JpiANow6Kerq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl glass-panel border border-white/10 hover:border-amber-400 text-gray-300 hover:text-white transition-all hover:scale-110"
                >
                  <GoogleIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Holo Contact Form */}
          <div className="lg:col-span-7 glass-panel-glow rounded-3xl p-6 sm:p-10 border border-purple-500/40 text-left relative">
            
            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.6)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-orbitron font-bold text-2xl text-white">Transmission Sent!</h3>
                <p className="font-inter text-sm text-gray-300 max-w-md mx-auto">
                  Thank you for contacting Stanley Paden. Your message has been encrypted and delivered. Our team will respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full glass-panel border border-purple-400/40 text-xs font-jura text-cyan-300 font-bold uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-jura text-xs font-bold text-gray-300 uppercase tracking-wider block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Commander Sarah Vance"
                      className="w-full px-4 py-3 rounded-xl bg-[#070512] border border-purple-800/40 focus:border-cyan-400 text-sm text-white outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-jura text-xs font-bold text-gray-300 uppercase tracking-wider block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@cyberdomain.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#070512] border border-purple-800/40 focus:border-cyan-400 text-sm text-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-jura text-xs font-bold text-gray-300 uppercase tracking-wider block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 019-2831"
                      className="w-full px-4 py-3 rounded-xl bg-[#070512] border border-purple-800/40 focus:border-cyan-400 text-sm text-white outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-jura text-xs font-bold text-gray-300 uppercase tracking-wider block mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Media Inquiry / Book Signing"
                      className="w-full px-4 py-3 rounded-xl bg-[#070512] border border-purple-800/40 focus:border-cyan-400 text-sm text-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-jura text-xs font-bold text-gray-300 uppercase tracking-wider block mb-1">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your transmission message here..."
                    className="w-full px-4 py-3 rounded-xl bg-[#070512] border border-purple-800/40 focus:border-cyan-400 text-sm text-white outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-orbitron text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-cyan-400 hover:to-purple-600 shadow-[0_0_25px_rgba(135,54,247,0.5)] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-cyan-200" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
