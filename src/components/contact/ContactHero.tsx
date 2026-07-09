import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as any, delay },
});

export default function ContactHero() {
  return (
    <section className="px-[80px] max-md:px-6 mb-[160px] relative min-h-[614px] flex items-center pt-32">
      <div className="relative z-10 max-w-4xl">
        <p className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.4em] text-[#f2ca50] mb-6 uppercase">
          EXCELLENCE AT YOUR SERVICE
        </p>
        <motion.h1 
          className="font-['Bodoni_Moda'] text-[48px] md:text-[84px] leading-[52px] md:leading-[92px] tracking-[0.02em] text-[#e4e2e1] mb-8 font-normal"
          {...fadeUp(0)}
        >
          The Aurelian <br/><span className="italic font-light">Concierge</span>
        </motion.h1>
        <motion.p 
          className="font-['Hanken_Grotesk'] text-[18px] font-light leading-[28px] tracking-[0.01em] text-[#d0c5af] max-w-xl"
          {...fadeUp(0.2)}
        >
          A dedicated team of specialists available around the clock to assist with private acquisitions, bespoke personalization, and worldwide collection care.
        </motion.p>
      </div>
    </section>
  );
}