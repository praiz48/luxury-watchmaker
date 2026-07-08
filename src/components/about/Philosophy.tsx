import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Philosophy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative bg-[#131313] py-[160px] px-6 md:px-[80px] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f2ca50]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          className="md:col-span-8 md:col-start-3 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#99907c] mb-12 uppercase">
            OUR PHILOSOPHY
          </p>
          <h2 className="font-['Bodoni_Moda'] text-[32px] md:text-[72px] leading-[38px] md:leading-[88px] text-[#e4e2e1] font-normal">
            We believe that <span className="italic text-[#f2ca50]">time</span> is the ultimate luxury. Our craft is not merely to measure it, but to <span className="text-[#d0c5af]">enshrine</span> it within works of eternal beauty.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}