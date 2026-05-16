import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-red-deep flex items-center justify-center border border-gold">
              <span className="font-heading text-gold text-lg font-bold">C</span>
            </div>
            <div>
              <span className="font-heading text-cream font-bold">Cheers Corner</span>
              <p className="text-cream/40 text-xs mt-0.5">
                GN-1382-3541, Accra, Ghana
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-cream/50">
            <a href="#menu" className="hover:text-gold transition-colors">Menu</a>
            <a href="#location" className="hover:text-gold transition-colors">Location</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
            <a href="#reviews" className="hover:text-gold transition-colors">Reviews</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 border border-gold/30 text-gold hover:bg-gold/10 rounded-full transition-all hover:scale-105 text-sm font-medium"
          >
            Back to Top
            <ArrowUp size={16} />
          </button>
        </div>
        <div className="text-center mt-6 pt-6 border-t border-white/5">
          <p className="text-cream/30 text-xs">
            © {new Date().getFullYear()} Cheers Corner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
