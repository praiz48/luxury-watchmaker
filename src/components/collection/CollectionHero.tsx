import { motion } from 'framer-motion';

export default function CollectionHero() {
  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with vignette */}
      <div className="vignette absolute inset-0 z-10"></div>
      
      {/* Background image - using a dark atmospheric image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=1600&q=80')`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 md:px-0">
        <motion.span 
          className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.4em] text-[#f2ca50] mb-4 block uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          CURATED EXCELLENCE
        </motion.span>
        
        <motion.h1 
          className="font-['Bodoni_Moda'] text-[48px] md:text-[84px] leading-[52px] md:leading-[92px] tracking-[0.02em] text-white font-normal"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          THE<br className="block md:hidden"/>COLLECTIONS
        </motion.h1>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <span className="font-['Hanken_Grotesk'] text-[10px] font-semibold tracking-[0.2em] text-white/50 uppercase">
          SCROLL TO EXPLORE
        </span>
        <motion.div 
          className="w-px h-16 bg-gradient-to-b from-[#f2ca50] to-transparent"
          animate={{ height: [16, 64, 16] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </header>
  );
}