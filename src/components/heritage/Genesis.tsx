import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Genesis() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="px-6 md:px-[80px] py-[160px] grid grid-cols-1 md:grid-cols-2 gap-[32px] items-center overflow-hidden">
      {/* Text Content */}
      <motion.div 
        ref={ref}
        className="order-2 md:order-1"
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.3em] text-[#f2ca50] mb-8 uppercase">
          1894 GENEVA | THE GENESIS
        </h2>
        <h3 className="font-['Bodoni_Moda'] text-[48px] leading-[56px] tracking-[0.05em] mb-8 font-normal">
          The Vision of <br/><span className="italic text-[#f2ca50]">Aurelius Vane</span>
        </h3>
        <p className="font-['Hanken_Grotesk'] text-[18px] font-light leading-[28px] tracking-[0.01em] text-[#d0c5af] max-w-xl mb-12">
          In a small atelier overlooking Lake Geneva, Aurelius Vane sought to capture the very essence of light. His obsession wasn't merely with time, but with how a dial could reflect the soul of its wearer. Using techniques thought lost to history, he forged the first Aurelian calibre—a movement so silent it was said to heartbeat only for the collector.
        </p>
        <div className="w-24 h-px bg-[#f2ca50]/40"></div>
      </motion.div>

      {/* Image */}
      <motion.div 
        className="order-1 md:order-2 relative"
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {/* Film grain effect via pseudo-element */}
        <div className="order-1 md:order-2 film-grain-image">
        <img 
            className="w-full h-[600px] object-cover sepia-high-contrast grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMvpGgcLW3SUIfIWPROiGPV5f4tmrdlY4S6Vt4fEIGsRNy_J8NNU-K90OG1SVZ3s4SHgNrNxTggwiiX3XvfMiwwCamTcxcCcnaf0HUCE-qTwP77AHfzdSaQneZc3diU68ezf3hLDw_b9xLoUPP-_HAs12u-GgzByFNRFyym0OO9QUvkjnvgYzpFROfE_WIoGwgfroxiqOoRqflqS9N1W-MX1CTnm-24e3iRE5HMSeppEujSmWAbEsqk4ua6i9e7BrP_UfM_IaLEM8"
            alt="Vintage Swiss watchmaking studio 1894"
        />
        </div>
      </motion.div>
    </section>
  );
}