import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as any, delay },
});

export default function CraftHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="vignette-overlay absolute inset-0"></div>
        <motion.img 
          className="w-full h-full object-cover grayscale opacity-60"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvrRkqZ0qUVofyJCabnvUAt3rO0n41HNPx9uBuEGplEb98cONKI57h9z7Yg66OccZa_G-uoQANG6Xt3HxnlqCNdZzYKNgIf56lzQyLCNGmzUGqqCTdjxWtPwvWLvbojfw84o_MQYygPaWTCICHK59t--S7pCjcu5ppv6yy2oL2tSWFD9MBxQgHY6NRqnrWPkGyXZQ-xi1CqPidRp8Mu9jy4ORJNXgKRiqGSkU3IjTc9N5k4qVcLrBmJN_WkazSmqoE2JA7ZcO6G58"
          alt="Swiss watchmaker's workshop"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1 
          className="font-['Bodoni_Moda'] text-[48px] md:text-[84px] leading-[52px] md:leading-[92px] tracking-[-0.02em] text-[#f2ca50] mb-6 font-normal"
          {...fadeUp(0)}
        >
          THE ARTISAN'S CODE
        </motion.h1>
        <motion.p 
          className="font-['Hanken_Grotesk'] text-[18px] font-light leading-[28px] tracking-[0.01em] text-[#d0c5af] max-w-xl mx-auto uppercase tracking-widest"
          {...fadeUp(0.2)}
        >
          A silent symphony of metal and movement.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="material-symbols-outlined text-[#f2ca50] text-4xl">
          expand_more
        </span>
      </motion.div>
    </section>
  );
}