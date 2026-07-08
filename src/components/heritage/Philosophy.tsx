import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Philosophy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.div 
        ref={ref}
        className="relative z-10 max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.6em] text-[#f2ca50] mb-12 uppercase">
          PHILOSOPHY
        </h2>
        <blockquote className="font-['Bodoni_Moda'] text-[32px] md:text-[84px] leading-[38px] md:leading-[92px] italic text-[#e4e2e1] font-normal">
          "The Soul of the Watch is not found in the ticking of its gears, but in the silence between them."
        </blockquote>
        <p className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.4em] text-[#f2ca50] mt-12 uppercase">
          — AURELIUS VANE
        </p>
      </motion.div>
    </section>
  );
}