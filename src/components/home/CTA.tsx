import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
export default function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const navigate = useNavigate();

  return (
    <section className="relative h-[819px] w-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          className="w-full h-full object-cover scale-110"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq1TAbMvmN8JmL9H8mnDO8tSjCmPwOgPErAXKtwmA7DBPY92iNYw_I474Y2wNoOHgK2Co5Rbdld7Dusmiftb-kitzF-1691I7O08m8i-jbdtIgKsSthvT5CzL3SEiiUktmnxAeTLhO12tloSOM-Y9YvbDi4pmdGnRg1mEM78KrDYmTW9-5u1qTlt-PfAK5juJGbj76dyLzBhhorElNIcFS0Jl4AGQGy2m1x14VcHUtYkUW5C452Ip0tVgyePwpJwFkaN4AygId2-Y"
          alt="Luxury watch craftsmanship"
          initial={{ scale: 1.1 }}
          animate={inView ? { scale: 1 } : { scale: 1.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Content */}
      <motion.div 
        ref={ref}
        className="relative z-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8">
          BEGIN YOUR STORY
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <motion.button 
          onClick={() => navigate("/collection")}
            className="bg-primary text-on-primary px-12 py-5 font-label-caps text-label-caps hover:scale-105 transition-transform duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SHOP COLLECTION
          </motion.button>
          <motion.button 
            onClick={() => navigate("/craftsmanship")}
            className="border border-white text-white px-12 py-5 font-label-caps text-label-caps hover:bg-white/10 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DISCOVER THE CRAFT
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}