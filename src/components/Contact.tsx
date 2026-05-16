import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MessageCircle, Instagram, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      const timer = setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '' });
      }, 4000);
      return () => clearTimeout(timer);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream grill-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-gold-dark font-semibold tracking-widest uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-4">
            Contact &amp; <span className="text-red-deep">Social</span>
          </h2>
          <p className="text-charcoal-muted text-lg max-w-2xl mx-auto">
            Have a question, craving, or reservation? We would love to hear from you at Cheers Corner.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <a href="tel:+233538869320" className="flex items-center gap-5 p-5 bg-cream-dark rounded-2xl border border-gold/20 hover:border-gold/50 transition-all group">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-red-deep flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={24} className="text-cream" />
              </div>
              <div>
                <p className="text-sm text-charcoal-muted">Call Us</p>
                <p className="font-heading text-xl font-bold text-charcoal group-hover:text-red-deep transition-colors">+233 53 886 9320</p>
              </div>
            </a>

            <a href="https://wa.me/233538869320" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 bg-cream-dark rounded-2xl border border-gold/20 hover:border-gold/50 transition-all group">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle size={24} className="text-cream" />
              </div>
              <div>
                <p className="text-sm text-charcoal-muted">WhatsApp</p>
                <p className="font-heading text-xl font-bold text-charcoal group-hover:text-green-600 transition-colors">Message Us</p>
              </div>
            </a>

            <a href="mailto:cheerscorner@gmail.com" className="flex items-center gap-5 p-5 bg-cream-dark rounded-2xl border border-gold/20 hover:border-gold/50 transition-all group">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={24} className="text-red-deep" />
              </div>
              <div>
                <p className="text-sm text-charcoal-muted">Email</p>
                <p className="font-heading text-xl font-bold text-charcoal group-hover:text-red-deep transition-colors">cheerscorner@gmail.com</p>
              </div>
            </a>

            <div className="flex gap-4 pt-2">
              <a href="https://www.tiktok.com/@cheerscorner" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                TikTok
              </a>
              <a href="https://instagram.com/cheerscorner" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-md">
                <Instagram size={20} />
                Instagram
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-cream-dark rounded-2xl p-6 md:p-8 border border-gold/20"
          >
            <div className="mb-6">
              <h3 className="font-heading text-2xl font-bold text-charcoal mb-2">Get a Discount Code</h3>
              <p className="text-charcoal-muted">
                Sign up and get <span className="text-red-deep font-bold">15% off</span> your first visit at Cheers Corner!
              </p>
            </div>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle size={56} className="text-green-600 mb-4" />
                <h4 className="font-heading text-xl font-bold text-charcoal mb-2">You are on the list!</h4>
                <p className="text-charcoal-muted">Check your inbox for your 15% discount code.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">Your Name</label>
                  <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required placeholder="e.g. Kofi" className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-cream text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">Email Address</label>
                  <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-gold/30 bg-cream text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all" />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-red-deep hover:bg-red-light text-cream font-bold rounded-xl transition-all hover:scale-[1.02] shadow-lg">
                  <Send size={18} />
                  Get My Discount
                </button>
                <p className="text-xs text-charcoal-muted text-center">No spam, ever. Unsubscribe anytime.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
