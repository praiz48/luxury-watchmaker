import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const qualityItems = [
  {
    title: 'Optical Precision',
    description: 'Every surface is inspected under 40x magnification for imperfections invisible to the human eye.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwLlkYqtEuS8kprbvjgiTs-GjVE-WmGVheygjFM9zl3QsbKHYLBysQkxWSQJpz2R9PsaflBoHTBGiZFadxrZdpAtnWt0eXN8atFMRvwLgf4KhvHqWHYOovwS0IYEMolMbxQn9b0SriDfTZ_VeGVKP0-TnsIdNwKdkdxHgX08x8gZyi0LBfe3omLYNFYZbaa1NgaJRXAdS8NXgC8uAJIxnTyK3Mq4h9oMI9AEZz6j3TstXCID5eCdE_nJifFGq5sb5qFieSf97s-OQ',
    delay: 0.1,
  },
  {
    title: 'Elemental Resilience',
    description: 'Pressurized to 10 atmospheres, each case is verified for absolute hermetic sealing.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQEPNNviJeFDfGDqQm5leU45emNOtaJVT9v_l1LxUT_iHvLa1B-lRwrer0oKggwa1oeZa6C4oa8KM4tTnLXOtb4sC0SlYwSF4gFxyuf1BPNugUjdvhfI2zUbhV0DL8hH5j_2q5EJ_eZosIBMsiJYnqvh9-lKpvDa8MuTq5W5lKs0c2cooXy2x_h_IGEvLKrO8noMW6VRDU-bw4w4hqrrELUQuE6AQWvynoX3qYs7sX3cRWoXDgRSGz-CZ_kZCG1JxXeq5jenE5JAo',
    delay: 0.2,
  },
  {
    title: 'The Human Seal',
    description: 'Final regulation is performed by a Master Artisan, ensuring a variance of no more than +2 seconds per day.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnYyoijLGumjNI3NO5_tooWIVY9O5UQtIS_yONIZb089LfXfyybSmCfXsJLtxm2-DjsmPkNkS5i53pDiPDgN5IuUGjHcN1OIE_LYCdfIqAs5mmqN7KRhbDKx7L1xmBsNqBt9g4-oEQpBOY5MgnKyduiTgC60YaLZIJaAMAsVB88Ymwjjy6AIROaaOr86Z2DI-L8vr-GYdSFwWEElLeJDJ30kg5Dc9YAa1-4KQU4I02hlu9HaYOnVFrI0vcs8JqOGI3jXN15a4z4es',
    delay: 0.3,
  },
];

export default function QualityControl() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-[160px] bg-[#131313]">
      {/* Header */}
      <motion.div 
        className="px-[80px] max-md:px-6 text-center mb-24"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-['Bodoni_Moda'] text-[32px] md:text-[48px] leading-[38px] md:leading-[56px] tracking-[0.05em] text-[#e4e2e1] mb-4 font-normal">
          Zero Degrees of Error
        </h2>
        <div className="h-px w-24 bg-[#f2ca50] mx-auto"></div>
      </motion.div>

      {/* Grid */}
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="px-[80px] max-md:px-6 grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {qualityItems.map((item) => (
          <motion.div 
            key={item.title}
            variants={itemVariants}
            className="text-center space-y-6"
          >
            <div className="aspect-square overflow-hidden mb-6">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src={item.image}
                alt={item.title}
              />
            </div>
            <h3 className="font-['Bodoni_Moda'] text-[32px] leading-[40px] tracking-[0.05em] text-[#e4e2e1] font-normal">
              {item.title}
            </h3>
            <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}