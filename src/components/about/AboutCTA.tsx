import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

export default function AboutCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const navigate = useNavigate();

  return (
    <motion.section 
      ref={ref}
      className="py-[160px] bg-[#131313] text-center px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-['Bodoni_Moda'] text-[32px] md:text-[48px] leading-[38px] md:leading-[56px] tracking-[0.05em] text-[#e4e2e1] mb-12 font-normal">
          Witness the Legacy
        </h2>
        <motion.a 
          className="inline-block font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.3em] border border-[#f2ca50] px-12 py-5 text-[#f2ca50] hover:bg-[#f2ca50] hover:text-[#3c2f00] transition-all duration-500 group uppercase"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/collection')}
        >
          EXPLORE THE COLLECTIONS
          <span className="ml-4 inline-block transform transition-transform group-hover:translate-x-2">→</span>
        </motion.a>
      </div>
    </motion.section>
  );
}