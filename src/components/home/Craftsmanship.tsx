import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Craftsmanship() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-section-gap px-margin-desktop grid md:grid-cols-2 gap-gutter items-center">
      {/* Image */}
      <div className="relative h-[600px] overflow-hidden group">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSAWObTjfz7_1hL8xZUlabyaPR2tUNaWqwpwvVZtzaUurtz3Fco1Il-W_xaIauUXNGmS3ADwCQatfUQFaczmYQMhdKvuEq2zw0KKFYct2D8E1-snCvbO6nXWscGZ5Q4QbRg45phR968SmnQIspHuXaOiXfyNSxgc2ZsSDYm0-0Ygiu_uXQL8FMQ-1yns68NG9GPldpVowBlSOk2FSfvckWcl1FmwtF4FKlca6K3Vw43RIpRNERhoTUTSkSwJIp89MetttYQSTZWhI')`
          }}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-40"></div>
      </div>

      {/* Content */}
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="font-label-caps text-label-caps text-primary mb-4 block">
          HAND-FINISHED PERFECTION
        </span>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8">
          THE ARTISAN'S TOUCH
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
          Each Aurelian caliber is a symphony of over 300 hand-finished components. 
          Our master watchmakers in Geneva spend months meticulously chamfering, 
          polishing, and engraving every bridge and wheel, ensuring that even the 
          parts never seen by the eye are masterpieces in their own right.
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant/80 mb-10 italic">
          "Precision is not a goal; it is our baseline. Beauty is what we build upon it."
        </p>
        <button className="border-b border-primary text-primary font-label-caps text-label-caps pb-2 hover:pr-4 transition-all duration-300">
          DISCOVER THE CRAFT
        </button>
      </motion.div>
    </section>
  );
}