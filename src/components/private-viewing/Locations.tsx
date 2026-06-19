import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const locations = [
  {
    name: 'GENÈVE',
    address: 'Rue du Rhône',
    description: 'Our spiritual home. A sanctuary of silence where master watchmakers work in perfect harmony with nature.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9YR05QftCV46zac13ZPkZMOZ8uPC1Bx4GKjlDokcyTTMhr_LgTY1-8jdYoGV0rGKMsOzRMQkcyG5Sai3CrgGn8O7CiGc00f-8jpblZIoPxoA0cbsGAUY2QUDfFW0ilToJ9pvViCS3yl6ggoo28r1M6V_XZyqpguACuYCom-eN8-SpcRK7kXITCl2f7UTwA5AA4kTEPF1uMmDdn1SvbCFbGCu5cMRRhAFR46kb5UfldYQ8jNHPq3smwwn4RSaZ0wQkMa6-N96peXQ',
  },
  {
    name: 'LONDON',
    address: 'Mayfair Boutique',
    description: 'Elegance meets heritage. An intimate salon hidden within the heart of Mayfair\'s historic streets.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB37SKX2XBEwKxfHqlmAiAKH8B5LfXZjwzjA2xHBie6AuknFrd3o0losIR8Ag5lYSGDAbb9Jj94bgCYt05ggTAa_lBlwFxwtolwowxgAYdoAiQ4AsTPUYD1Qd3C3tijpc9uhARE-vIR-RIGQ_iQJCfHUM5z6DbhzSGbkwKNhapaW-ZALaucK-XEFLe1MxYHhLnyYRPh3ksYXb-woLBj4j3bwTWQDJHpRBB1phULIhYLrmP9I6zh1o6nTVL6V6G_ZqtKSzFNI8KHhGQ',
  },
  {
    name: 'NEW YORK',
    address: 'Madison Avenue',
    description: 'A contemporary vertical gallery, capturing the architectural soul of the city with a private terrace view.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWXSZuY3Pw_a8dzEYAbQUQy_6bw4fHm26oaPd-xIDJG0SY9HhPo-onsNGPbhSeEkQPTScHs1JuCDyTQAEcG2bL6VWRTZpuxthbJN1BmiNnUR_AI_LZcsda3xaJv4luS0JVxxb36vcY7yXumyebgiprWLD36DbAqqjWm63c7oium797doddunRlXAI5T2w6Px20GGYZAWK5gwd2zA8nnYrJ4XnWKXNOFdltbhj7dZa0_-ahY2sPzH6sRU8Ed_2Y30T7f3YeCQ1_jlg',
  },
];

export default function Locations() {
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
    <section className="py-[160px] bg-[#0e0e0e] overflow-hidden">
      {/* Header */}
      <motion.div 
        className="px-6 md:px-[80px] mb-24"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-['Bodoni_Moda'] text-[48px] leading-[56px] tracking-[0.05em] text-[#e4e2e1] mb-4 font-normal">
          OUR SHOWCASES
        </h2>
        <div className="w-24 h-1 bg-[#f2ca50]"></div>
      </motion.div>

      {/* Locations Grid */}
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-[32px] px-6 md:px-[80px]"
      >
        {locations.map((location, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-20' : ''}`}
          >
            <div className="relative overflow-hidden aspect-[3/4] mb-8">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                src={location.image}
                alt={location.name}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] border border-[#f2ca50] px-6 py-2 uppercase">
                  Discover {location.name}
                </span>
              </div>
            </div>
            <h3 className="font-['Bodoni_Moda'] text-[32px] leading-[40px] tracking-[0.05em] text-[#e4e2e1] mb-2 font-normal">
              {location.name}
            </h3>
            <p className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] mb-4 uppercase">
              {location.address}
            </p>
            <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af]">
              {location.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}