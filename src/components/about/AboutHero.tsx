import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as any, delay },
});

export default function AboutHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          className="w-full h-full object-cover grayscale brightness-50"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCprNzNZFCMTEXb0uh4Wr7xbgOhbQs1JaFiW_L2OBMzcsT9YZVRboS1nVZf-ECQLfI7R33yRfA5ZItV3Q0hqd078Qk8fj11i5fYsTdq25ZitUrkD1na4QSVr8oVKkeFRX3NUzarJXcgYPSNtk7rJHSrWdHNSpjyZRTBYzFxxDVuU9vkt3UZz-5tnTWBKYxh90zfegfdoTKmAvx0c35Oz0fze2ZTtg8N7Em0tnBcZHQeJmmsZ01TL36nDyGvGbI-GDxGneyJh_n1S5Q"
          alt="Luxury watch movement"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 vignette"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-0">
        <motion.p 
          className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.5em] text-[#f2ca50] mb-6 uppercase"
          {...fadeUp(0)}
        >
          THE MISSION
        </motion.p>
        <motion.h1 
          className="font-['Bodoni_Moda'] text-[48px] md:text-[84px] leading-[52px] md:leading-[92px] tracking-[0.02em] text-[#e4e2e1] italic font-normal"
          {...fadeUp(0.2)}
        >
          Defining the Pinnacle of Luxury
        </motion.h1>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <span className="font-['Hanken_Grotesk'] text-[10px] font-semibold tracking-[0.2em] text-[#d0c5af] uppercase">
          SCROLL TO DISCOVER
        </span>
        <motion.div 
          className="w-px h-16 bg-gradient-to-b from-[#f2ca50] to-transparent"
          animate={{ height: [16, 64, 16] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}