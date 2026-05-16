import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/background.jpg"
          alt="Cheers Corner Restaurant Bar background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
        <div className="absolute inset-0 grill-texture opacity-30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest uppercase text-gold border border-gold/40 rounded-full bg-gold/10 backdrop-blur-sm">
            Cheers Corner
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6"
        >
          Golden sips,
          <br />
          <span className="text-gold">Good vibes</span> always
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-cream/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Cheers Corner Restaurant Bar in Accra. Great food, refreshing drinks, and the best vibes in town.
          Come in and enjoy a 5.0-rated experience!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToMenu}
            className="px-8 py-4 bg-gold hover:bg-gold-light text-red-deep font-bold text-lg rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-gold/20 shadow-lg"
          >
            View Menu
          </button>
          <a
            href="tel:+233538869320"
            className="px-8 py-4 bg-transparent border-2 border-cream/40 hover:border-gold text-cream hover:text-gold font-semibold text-lg rounded-full transition-all hover:scale-105 flex items-center gap-2"
          >
            Call / Book
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="cursor-pointer"
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={32} className="text-cream/50 hover:text-gold transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
}
