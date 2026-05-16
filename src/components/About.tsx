import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Leaf, Heart, Flame } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Local Favorite',
    desc: 'Loved by the Accra crowd for great food and drinks.',
  },
  {
    icon: Leaf,
    title: 'Freshly Served',
    desc: 'Quality ingredients and freshly prepared flavors.',
  },
  {
    icon: Award,
    title: 'Best Quality',
    desc: 'Top standards for every dish and drink.',
  },
  {
    icon: Flame,
    title: 'Golden Sips',
    desc: 'Refreshing drinks and a warm, welcoming atmosphere.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-28 bg-cream grill-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-charcoal/20">
              <img
                src="/images/wine.jpg"
                alt="Cheers Corner Restaurant Bar ambiance"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
              className="absolute -bottom-6 -right-2 md:right-6 bg-red-deep text-cream px-6 py-4 rounded-xl shadow-xl border-2 border-gold"
            >
              <div className="text-center">
                <span className="block text-3xl font-heading font-bold text-gold">5.0</span>
                <span className="block text-4xl font-heading font-bold">Rating</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold-dark font-semibold tracking-widest uppercase text-sm">Our Story</span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-6">
              Cheers Corner, <span className="text-red-deep">Accra</span>
            </h2>
            <p className="text-charcoal-muted text-lg leading-relaxed mb-6">
              Cheers Corner Restaurant Bar is where you come for good vibes, quality meals, and refreshing drinks.
              We’re all about creating unforgettable moments with every visit.
            </p>
            <p className="text-charcoal-muted text-lg leading-relaxed mb-10">
              From friendly service to a warm atmosphere, we’re proud to be a local go-to spot.
              Whether you’re dining in, catching up with friends, or dropping by for golden sips,
              you’ll feel right at home.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-cream-dark/50 border border-gold/20 hover:border-gold/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-deep/10 flex items-center justify-center">
                    <feature.icon size={20} className="text-red-deep" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-charcoal">{feature.title}</h4>
                    <p className="text-sm text-charcoal-muted mt-0.5">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

