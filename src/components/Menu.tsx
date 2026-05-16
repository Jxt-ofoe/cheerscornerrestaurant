import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Star } from 'lucide-react';

const menuItems = [
  {
    name: 'Seafood Platter',
    description:
      'A generous selection of fresh seafood including grilled fish, calamari, and prawns, served with a side of your choice.',
    price: 'GHS 120',
    image: '/images/seafood platter.jpg',
    tag: 'Bestseller',
    tagColor: 'bg-red-deep text-cream',
  },
  {
    name: 'Classic Pizza',
    description:
      'Wood-fired pizza with rich tomato sauce, melted mozzarella, and your choice of fresh toppings.',
    price: 'GHS 80',
    image: '/images/classic pizza.jpg',
    tag: 'Popular',
    tagColor: 'bg-gold text-red-deep',
  },
  {
    name: 'Signature Burger',
    description:
      'Juicy beef patty with cheese, fresh lettuce, and our house special sauce, served with crispy fries.',
    price: 'GHS 65',
    image: '/images/signature burger.jpg',
    tag: 'New',
    tagColor: 'bg-green-700 text-cream',
  },
  {
    name: 'Signature Cocktail',
    description:
      "Our bartender's special blend of premium spirits and fresh juices. Crafting unforgettable moments one drink at a time!!!",
    price: 'GHS 40',
    image: '/images/signature cocktail.jpg',
    tag: 'Signature',
    tagColor: 'bg-red-light text-cream',
  },
];

export default function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="menu" className="py-20 md:py-28 bg-cream-dark grill-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-gold-dark font-semibold tracking-widest uppercase text-sm">
            Menu Highlights
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-4">
            Fan <span className="text-red-deep">Favorites</span>
          </h2>
          <p className="text-charcoal-muted text-lg max-w-2xl mx-auto">
            Hand-crafted with love using our signature recipes and the freshest local ingredients.
            Each dish is a celebration of bold flavors and crafted drinks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="group bg-cream rounded-2xl overflow-hidden border border-gold/30 hover:border-gold shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span
                  className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full ${item.tagColor} shadow-md`}
                >
                  {item.tag}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-heading text-lg font-bold text-charcoal leading-tight">
                    {item.name}
                  </h3>
                  <span className="font-heading text-xl font-bold text-red-deep whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-charcoal-muted text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>
                <a
                  href="tel:+233538869320"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-gold/10 hover:bg-gold text-red-deep hover:text-red-dark font-semibold text-sm rounded-lg transition-all border border-gold/30 hover:border-gold"
                >
                  <Star size={14} />
                  Order Now
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="tel:+233538869320"
            className="inline-flex items-center gap-2 px-8 py-3 bg-red-deep hover:bg-red-light text-cream font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
          >
            Call to Order
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
