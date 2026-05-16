import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Phone, Truck, UtensilsCrossed } from 'lucide-react';

const hours = [
  { day: 'Monday – Sunday', time: '2:00 PM – 9:00 PM' },
];



export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="location" className="py-20 md:py-28 bg-cream grill-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-gold-dark font-semibold tracking-widest uppercase text-sm">
            Find Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-3 mb-4">
            Location &amp; <span className="text-red-deep">Hours</span>
          </h2>
          <p className="text-charcoal-muted text-lg max-w-2xl mx-auto">
            Come visit us at Cheers Corner in Accra, or order for delivery anywhere in the city.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl border-2 border-gold/30"
          >
            <iframe
              title="Cheers Corner Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5!2d-0.3167!3d5.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDMnMDAuMCJOIDDCsDE5JzAwLjAiVw!5e0!3m2!1sen!2sgh!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-cream-dark rounded-2xl p-6 border border-gold/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-red-deep/10 flex items-center justify-center">
                  <MapPin size={22} className="text-red-deep" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-charcoal text-lg">Address</h3>
                  <p className="text-charcoal-muted mt-1">
                    GN-1382-3541<br />
                    Accra, Ghana
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-cream-dark rounded-2xl p-6 border border-gold/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-red-deep/10 flex items-center justify-center">
                  <Clock size={22} className="text-red-deep" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-charcoal text-lg">Opening Hours</h3>
                  <div className="mt-2 space-y-1.5">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between text-sm">
                        <span className="text-charcoal-muted">{h.day}</span>
                        <span className="font-medium text-charcoal">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cream-dark rounded-2xl p-6 border border-gold/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-red-deep/10 flex items-center justify-center">
                  <Phone size={22} className="text-red-deep" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-charcoal text-lg">Phone</h3>
                  <a href="tel:+233538869320" className="text-red-deep font-semibold hover:text-red-light transition-colors mt-1 inline-block">
                    +233 53 886 9320
                  </a>
                  <p className="text-sm text-charcoal-muted mt-2 flex items-center gap-1.5">
                    <UtensilsCrossed size={14} />
                    Call us for bulk orders &amp; events
                  </p>
                </div>
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
