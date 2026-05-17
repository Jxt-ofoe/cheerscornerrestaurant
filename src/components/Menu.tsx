import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Star } from 'lucide-react';

const menuItems = [
  // Local Dishes
  {
    name: 'Banku & Okro soup',
    description: 'Fermented corn/cassava dough with a slimy, rich okra soup loaded with seafood and meat.',
    price: '',
    image: '/images/banku and okro soup.jpg',
    tag: 'Local',
    tagColor: 'bg-green-700 text-cream',
  },
  {
    name: 'Banku & Grilled Tilapia',
    description: 'Fermented dough paired with grilled whole tilapia and fresh, spicy ground pepper.',
    price: '',
    image: '/images/banku and grilled tilapia.jpg',
    tag: 'Local',
    tagColor: 'bg-green-700 text-cream',
  },
  {
    name: 'Banku & Fried Tilapia',
    description: 'Fermented dough served with crispy fried tilapia and spicy raw pepper.',
    price: '',
    image: '/images/banku and fried tilapia.jpg',
    tag: 'Local',
    tagColor: 'bg-green-700 text-cream',
  },
  {
    name: 'Banku & Fried Red Fish',
    description: 'Fermented dough paired with deep-fried sea bream and a hot pepper side.',
    price: '',
    image: '/images/banku and red fish.jpg',
    tag: 'Local',
    tagColor: 'bg-green-700 text-cream',
  },
  {
    name: 'Omutuo with Groundnut soup',
    description: 'Soft, mashed rice balls served in a rich, creamy peanut soup.',
    price: '',
    image: '/images/omotuo and groundnut soup.jpg',
    tag: 'Local',
    tagColor: 'bg-green-700 text-cream',
  },
  {
    name: 'Ampesi with Egg Sauce',
    description: 'Boiled yam or plantain served with a savory, stir-fried egg and tomato stew.',
    price: '',
    image: '/images/ampesi.jpg',
    tag: 'Local',
    tagColor: 'bg-green-700 text-cream',
  },
  {
    name: 'Fufu with Goat soup',
    description: 'Stretchy pounded cassava/plantain swallow in a thin, spicy goat meat broth.',
    price: '',
    image: '/images/fufu and goat soup.jpg',
    tag: 'Local',
    tagColor: 'bg-green-700 text-cream',
  },
  {
    name: 'Fufu with Tilapia light soup',
    description: 'Pounded swallow served in a hot, spiced tomato-based fish broth.',
    price: '',
    image: '/images/fufu and tilapia.jpg',
    tag: 'Local',
    tagColor: 'bg-green-700 text-cream',
  },
  {
    name: 'Fufu with Dry Fish',
    description: 'Pounded swallow paired with a light, flavorful soup featuring smoked or dried fish.',
    price: '',
    image: '/images/fufu and dry fish.jpg',
    tag: 'Local',
    tagColor: 'bg-green-700 text-cream',
  },
  {
    name: 'Fufu with Kontomire soup',
    description: 'Pounded swallow in a nutritious green soup made from cocoyam leaves.',
    price: '',
    image: '/images/fufu and green soup.jpg',
    tag: 'Local',
    tagColor: 'bg-green-700 text-cream',
  },
  {
    name: 'Konkonte with Groundnut soup',
    description: 'Hearty, dark cassava-flour swallow served with savory peanut soup.',
    price: '',
    image: '/images/konkonte and groundnut soup.jpg',
    tag: 'Local',
    tagColor: 'bg-green-700 text-cream',
  },
  // Continental Dishes
  {
    name: 'Jollof & Grill Chicken',
    description: 'Spiced, smoky tomato rice served with grilled chicken.',
    price: '',
    image: '/images/jollof.jpg',
    tag: 'Continental',
    tagColor: 'bg-red-deep text-cream',
  },
  {
    name: 'Jollof & Tilapia',
    description: 'Aromatic tomato-cooked rice paired with fried or grilled tilapia.',
    price: '',
    image: '/images/jollof and tilapia.jpg',
    tag: 'Continental',
    tagColor: 'bg-red-deep text-cream',
  },
  {
    name: 'Jollof & Spicy Goat Meat',
    description: 'Spiced tomato rice served with tender, seasoned goat meat.',
    price: '',
    image: '/images/continental_dish.png',
    tag: 'Continental',
    tagColor: 'bg-red-deep text-cream',
  },
  {
    name: 'Jollof & Spicy Turkey Wings',
    description: 'Aromatic rice paired with fiery, seasoned turkey wings.',
    price: '',
    image: '/images/jollof and turkey wings.jpg',
    tag: 'Continental',
    tagColor: 'bg-red-deep text-cream',
  },
  {
    name: 'Jollof & Spicy Chicken Wings',
    description: 'Spiced tomato rice served with hot, flavorful chicken wings.',
    price: '',
    image: '/images/jollof and chicken wings.jpg',
    tag: 'Continental',
    tagColor: 'bg-red-deep text-cream',
  },
  {
    name: 'Fried Rice & Grilled Chicken',
    description: 'Stir-fried veggie rice served with a seasoned grilled chicken quarter.',
    price: '',
    image: '/images/fried rice and chicken.jpg',
    tag: 'Continental',
    tagColor: 'bg-red-deep text-cream',
  },
  {
    name: 'Fried Rice & Spicy Chicken Wings',
    description: 'Wok-tossed seasoned rice paired with hot chicken wings.',
    price: '',
    image: '/images/fried rice and chicken wings.jpg',
    tag: 'Continental',
    tagColor: 'bg-red-deep text-cream',
  },
  {
    name: 'Fried Rice & Fried Red Fish',
    description: 'Stir-fried rice served with a crispy, deep-fried sea bream.',
    price: '',
    image: '/images/fried rice and red fish.jpg',
    tag: 'Continental',
    tagColor: 'bg-red-deep text-cream',
  },
  {
    name: 'Fried Rice & Fried Tilapia',
    description: 'Veggie fried rice paired with a whole fried tilapia.',
    price: '',
    image: '/images/fried rice and tilapia.jpg',
    tag: 'Continental',
    tagColor: 'bg-red-deep text-cream',
  },
  {
    name: 'Plain Rice & Tomato Sauce with Chicken',
    description: 'Fluffy white rice topped with a classic tomato stew and chicken.',
    price: '',
    image: '/images/plain rice.jpg',
    tag: 'Continental',
    tagColor: 'bg-red-deep text-cream',
  },
  {
    name: 'Plain Rice with Eggs Sauce',
    description: 'Steamed white rice with a seasoned scrambled egg sauce and your choice of fried protein.',
    price: '',
    image: '/images/plain rice and egg stew.jpg',
    tag: 'Continental',
    tagColor: 'bg-red-deep text-cream',
  },
  {
    name: 'Plain Rice with Palava Sauce',
    description: 'White rice served with a rich, leafy green stew made from cocoyam leaves and egusi.',
    price: '',
    image: '/images/plain rice and palava sauce.jpg',
    tag: 'Continental',
    tagColor: 'bg-red-deep text-cream',
  },
  {
    name: 'Plain Rice with Egushie Stew',
    description: 'Steamed white rice paired with a savory melon seed and tomato stew.',
    price: '',
    image: '/images/rice and agushie.jpg',
    tag: 'Continental',
    tagColor: 'bg-red-deep text-cream',
  },
  {
    name: 'Oil Rice with Assorted Meat',
    description: 'Fragrant local oil-fried rice (angwamo) fully loaded with eggs, sausage, sardines, hot pepper, and meat.',
    price: '',
    image: '/images/oil rice and assorted meat.jpg',
    tag: 'Local',
    tagColor: 'bg-green-700 text-cream',
  },
  {
    name: 'French Fries with Chicken',
    description: 'Golden potato fries served with seasoned fried chicken.',
    price: '',
    image: '/images/french fries.jpg',
    tag: 'Continental',
    tagColor: 'bg-red-deep text-cream',
  },
  {
    name: 'Yam Fries with Protein',
    description: 'Crispy, thick-cut fried local yam chunks served with your choice of fried protein.',
    price: '',
    image: '/images/yam chips.jpg',
    tag: 'Local',
    tagColor: 'bg-green-700 text-cream',
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
