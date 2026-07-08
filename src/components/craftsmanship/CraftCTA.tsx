import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

export default function CraftCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const navigate = useNavigate();

  return (
    <motion.section 
      ref={ref}
      className="py-[160px] bg-[#131313] flex flex-col items-center justify-center text-center px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div>
        <h2 className="font-['Bodoni_Moda'] text-[32px] md:text-[48px] leading-[38px] md:leading-[56px] tracking-[0.05em] text-[#e4e2e1] mb-12 font-normal">
          Witness the Excellence.
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.button 
            className="bg-[#f2ca50] text-[#131313] px-12 py-5 font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] uppercase hover:bg-[#d4af37] transition-all duration-500 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/private-viewing')}
          >
            BOOK A PRIVATE WORKSHOP
          </motion.button>
          <motion.button 
            className="border border-[#d0c5af] text-[#e4e2e1] px-12 py-5 font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] uppercase hover:border-[#f2ca50] hover:text-[#f2ca50] transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/collection')}
          >
            EXPLORE THE COLLECTION
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}