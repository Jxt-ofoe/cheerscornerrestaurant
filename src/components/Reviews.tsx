import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Juanda W',
    rating: 5,
    text: 'Excellent restaurant, with a wide menu, from seafood platter to pizza. Price in the average, but a good bargan for what you will find on the table.',
    date: '2 months ago',
  },
  {
    name: 'Happy Customer',
    rating: 5,
    text: 'Crafting unforgettable moments one drink at a time!!! BEST QUALITY BEST PRICES. Good vibes & golden sips🥂',
    date: '1 year ago',
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  const visibleReviews = reviews;

  return (
    <section id="reviews" className="py-20 md:py-28 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-gold font-semibold tracking-widest uppercase text-sm">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cream mt-3 mb-4">
            What Our <span className="text-gold">Guests</span> Say
          </h2>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            Rated 5.0 stars on Google. Do not just take our word for it — hear from the guests who keep coming back.
          </p>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {visibleReviews.map((review, i) => (
            <motion.div
              key={`${activeIndex}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-charcoal-light rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-colors"
            >
              <Quote size={28} className="text-gold/40 mb-4" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-cream/80 leading-relaxed mb-5 text-sm">"{review.text}"</p>
              <div>
                <p className="font-heading font-bold text-cream">{review.name}</p>
                <p className="text-xs text-cream/40">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-charcoal-light rounded-2xl p-6 border border-gold/20"
          >
            <Quote size={28} className="text-gold/40 mb-4" />
            <div className="flex gap-1 mb-3">
              {Array.from({ length: reviews[activeIndex].rating }).map((_, j) => (
                <Star key={j} size={16} className="text-gold fill-gold" />
              ))}
            </div>
            <p className="text-cream/80 leading-relaxed mb-5 text-sm">"{reviews[activeIndex].text}"</p>
            <div>
              <p className="font-heading font-bold text-cream">{reviews[activeIndex].name}</p>
              <p className="text-xs text-cream/40">{reviews[activeIndex].date}</p>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} className="p-2 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors" aria-label="Previous review">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === activeIndex ? 'bg-gold w-6' : 'bg-gold/30'}`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="p-2 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors" aria-label="Next review">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="text-center mt-8">
          <a href="https://www.google.com/search?q=cheers+corner+restaurant+bar+accra+reviews" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium">
            Read more reviews on Google
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
