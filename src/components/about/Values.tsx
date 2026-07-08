import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const values = [
  {
    title: 'Craftsmanship',
    description: 'Every Aurelian piece undergoes six hundred hours of meticulous hand-finishing by a single master artisan.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe5k1PtN3lEIHvIsoo5c9U6paY-Xt1cA5rf4WXdgRkccCY71wTFU_canXdEMorgGgUt5b-7R7sMp7myNo73d_efTVnhCo3dIxHQIlqiQej7gv82EwE7CxWcjuJCF8xpOpZYcNGHQAwqOkx-m5kguCleKEBmu9k3k3eo_EG1P9sF2gUn81SZewU-rLN7q1h4FpxQwFeFgxpYiKr6cqUr8N7FQQqVTtezi4iePqq4K4HLbl8abFG9tjcIgNTi_1AV4dxJTk8o_FeJq8',
    mt: '',
  },
  {
    title: 'Precision',
    description: 'Engineered to a tolerance of 0.001mm, our movements achieve a level of chronometric performance that defies the limits of the physical.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB80BmtnDmggrsAob8SsZkEjXNFrYWAaUybfO22xwCrbjhYQXl4xg9u-fYQkVYn3GcADoMj1PprfhI_-HCEvLHXJUdkxH3m5mUqVUY6tkfNGWJInqN1lWk8kJktWP4JhUl3vUpWGOq8P81ZfY47L0xDaT-B4G39dcuKiETGbaPta2yY_MqiMbzZ0aJBpNftZ9p8KznL5Shig2M8tj1wB5gteUwH40TAn7Lfm8IHs6zOfobWoaoEhmPdkD_ud21cyHT8L9f33xPi474',
    mt: 'mt-20 md:mt-40',
  },
  {
    title: 'Artistry',
    description: 'Beyond mechanics, we create sculpture. Each dial is a canvas of hand-fired enamel and precious stone marquetry.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn81yjrbnTQYwSSkN-_9W9O1JsC7tFFlhOOihFMZZbpz0ELo1Ob209UcCTjGMsFWlnhIONslZ1PjWpyZGEcEy5nY1yX96rRQ4gAPWb3srA4m6V0ZRuQVWXnUAdq6e7T4NC1bwUlkglG10-jihFs312VBDThyUt9CHUIXKFwBTyvOdwfPDiYYMPt3t98kThf9qQ-mcalPW_Xpk18-O_fcc7Kj7UwnGkyN8jfPL_15_yHxn4M7zH-Mum2uTUMpSi2ZG1wN_G_OdW3V8',
    mt: '',
  },
];

export default function Values() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#0e0e0e] py-[160px] px-6 md:px-[80px]">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-[32px]"
      >
        {values.map((value, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className={`flex-1 group ${value.mt}`}
          >
            <div className="aspect-[3/4] overflow-hidden mb-8 relative">
              <img 
                className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110" 
                src={value.image}
                alt={value.title}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
            </div>
            <h3 className="font-['Bodoni_Moda'] text-[32px] leading-[40px] tracking-[0.05em] text-[#f2ca50] mb-4 font-normal">
              {value.title}
            </h3>
            <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af] max-w-sm">
              {value.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}