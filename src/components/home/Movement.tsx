import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Movement() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative py-[160px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=1600&q=80')`,
          }}
          initial={{ scale: 1.1 }}
          animate={inView ? { scale: 1 } : { scale: 1.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-[#131313]/80 to-[#131313]/60 z-10"></div>
        <div className="absolute inset-0 bg-[#131313]/40 z-10"></div>
      </div>

      <div className="px-[80px] max-md:px-6 grid lg:grid-cols-2 gap-[160px] items-center relative z-20">
        {/* Content */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] mb-4 block uppercase">
            CALIBER A-940
          </span>
          <h2 className="font-['Bodoni_Moda'] text-[32px] md:text-[48px] leading-[38px] md:leading-[56px] tracking-[0.05em] text-[#e4e2e1] mb-8 font-normal">
            ENGINEERING THE SUBLIME
          </h2>
          
          <div className="space-y-8">
            <motion.div 
              className="flex gap-6 items-start group"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <span className="material-symbols-outlined text-[#f2ca50] text-4xl">
                settings_input_component
              </span>
              <div>
                <h4 className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#e4e2e1] mb-2 uppercase">
                  TOURBILLON ESCAPEMENT
                </h4>
                <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af]">
                  Counteracting gravity's influence through a rotating cage of absolute precision.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex gap-6 items-start group"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <span className="material-symbols-outlined text-[#f2ca50] text-4xl">
                history_edu
              </span>
              <div>
                <h4 className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#e4e2e1] mb-2 uppercase">
                  72-HOUR RESERVE
                </h4>
                <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af]">
                  Dual-barrel architecture ensuring consistent energy delivery for three full days.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex gap-6 items-start group"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <span className="material-symbols-outlined text-[#f2ca50] text-4xl">
                verified
              </span>
              <div>
                <h4 className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#e4e2e1] mb-2 uppercase">
                  HAND-ENGRAVED BRIDGES
                </h4>
                <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af]">
                  The signature of a master artist on every microscopic surface.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Small decorative line */}
          <motion.div 
            className="mt-12 w-16 h-px bg-[#f2ca50]/50"
            initial={{ width: 0 }}
            animate={inView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Visual Elements - Floating Gears & Technical Art */}
        <motion.div 
          className="relative h-[600px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Large Decorative Gear - Outer */}
          <motion.div 
            className="absolute top-0 right-0 w-72 h-72 border-2 border-[#f2ca50]/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Medium Decorative Gear - Inner */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-[#f2ca50]/20 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Small Decorative Gear - Bottom Left */}
          <motion.div 
            className="absolute bottom-10 left-10 w-32 h-32 border-2 border-[#f2ca50]/15 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          {/* Small Decorative Gear - Top Left */}
          <motion.div 
            className="absolute top-10 left-20 w-20 h-20 border-2 border-[#f2ca50]/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {/* Small Decorative Gear - Bottom Right */}
          <motion.div 
            className="absolute bottom-20 right-10 w-24 h-24 border-2 border-[#f2ca50]/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />

          {/* Gold Dot accents - simulating jewels in movement */}
          <motion.div 
            className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#f2ca50]/30"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-[#f2ca50]/40"
            animate={{ scale: [1, 1.8, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/3 w-2.5 h-2.5 rounded-full bg-[#f2ca50]/20"
            animate={{ scale: [1, 1.6, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          
          {/* Technical Lines SVG - More detailed */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
            {/* Concentric circles */}
            <circle className="text-[#f2ca50]" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="0.15" />
            <circle className="text-[#f2ca50]" cx="50" cy="50" fill="none" r="30" stroke="currentColor" strokeWidth="0.1" />
            <circle className="text-[#f2ca50]" cx="50" cy="50" fill="none" r="15" stroke="currentColor" strokeWidth="0.08" />
            
            {/* Cross lines */}
            <line className="text-[#f2ca50]" stroke="currentColor" strokeWidth="0.1" x1="10" x2="90" y1="50" y2="50" />
            <line className="text-[#f2ca50]" stroke="currentColor" strokeWidth="0.1" x1="50" x2="50" y1="10" y2="90" />
            <line className="text-[#f2ca50]" stroke="currentColor" strokeWidth="0.08" x1="20" x2="80" y1="20" y2="80" />
            <line className="text-[#f2ca50]" stroke="currentColor" strokeWidth="0.08" x1="80" x2="20" y1="20" y2="80" />
            
            {/* Gear tooth indicators */}
            <circle className="text-[#f2ca50]" cx="50" cy="10" r="2" fill="currentColor" />
            <circle className="text-[#f2ca50]" cx="90" cy="50" r="2" fill="currentColor" />
            <circle className="text-[#f2ca50]" cx="50" cy="90" r="2" fill="currentColor" />
            <circle className="text-[#f2ca50]" cx="10" cy="50" r="2" fill="currentColor" />
          </svg>

          {/* Glowing center orb */}
          <motion.div 
            className="absolute w-32 h-32 rounded-full bg-[#f2ca50]/5 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}