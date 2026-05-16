import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const images = [
  '/images/wine2.jpg',
  '/images/people.jpg',
  '/images/signature cocktail.jpg',
  '/images/shawarma.jpg',
  '/images/wine.jpg',
  '/images/pizza.jpg',
  '/images/place.jpg',
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="gallery" className="py-20 md:py-28 bg-charcoal relative overflow-hidden">
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
            Gallery
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cream mt-3 mb-4">
            A Glimpse of <span className="text-gold">Cheers Corner</span>
          </h2>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            Experience the vibrant atmosphere and mouth-watering dishes that make every visit memorable.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group border border-gold/10 hover:border-gold/30 ${
                i === 0 || i === 4 ? 'col-span-2 md:col-span-1 aspect-[4/3] md:aspect-square' : 'col-span-1 aspect-square'
              }`}
            >
              <img 
                src={src} 
                alt={`Gallery image ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
