import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

export default function HeritageCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const navigate = useNavigate();

  return (
    <motion.section 
      ref={ref}
      className="py-[160px] text-center px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-2xl mx-auto">
        <h3 className="font-['Bodoni_Moda'] text-[48px] leading-[56px] tracking-[0.05em] text-[#e4e2e1] mb-8 font-normal">
          Begin Your Own Legacy
        </h3>
        <p className="font-['Hanken_Grotesk'] text-[18px] font-light leading-[28px] tracking-[0.01em] text-[#d0c5af] mb-12">
          Experience the weight of history and the lightness of time in our private showrooms.
        </p>
        <motion.button 
          className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.4em] px-12 py-5 bg-transparent border border-[#f2ca50] text-[#f2ca50] hover:bg-[#f2ca50] hover:text-[#3c2f00] transition-all duration-500 uppercase"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/private-viewing')}
        >
          Book a Consultation
        </motion.button>
      </div>
    </motion.section>
  );
}