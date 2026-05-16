import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Our Story', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#hero"
            onClick={(e) => handleClick(e, '#hero')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-red-deep flex items-center justify-center border-2 border-gold group-hover:border-gold-light transition-colors">
              <span className="font-heading text-gold text-xl font-bold">C</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-xl font-bold text-cream tracking-wide">
                Cheers Corner
                <span className="text-gold">Restaurant Bar</span>
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-cream/80 hover:text-gold transition-colors rounded-md hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+233538869320"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gold hover:bg-gold-light text-red-deep font-semibold text-sm rounded-full transition-all hover:scale-105 shadow-md"
            >
              <Phone size={16} />
              Call / Book
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-cream hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-charcoal/98 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="block px-4 py-3 text-cream/90 hover:text-gold hover:bg-white/5 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+233538869320"
                className="flex items-center justify-center gap-2 mt-3 px-4 py-3 bg-gold text-red-deep font-semibold rounded-lg"
              >
                <Phone size={18} />
                Call / Book
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
