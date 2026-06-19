import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as any, delay },
});

export default function PrivateHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <motion.img 
          className="w-full h-full object-cover grayscale opacity-60"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOZSq9rW3DnMdakdcdyLUwOTFuWFnDehBjnXl4E0P5DKUkyfpWwzlscpE_ytVdX6aa8Wd6oprDzHsU4dkdyFhczugUf0byK1GyL09rPCb8xShfOB3UWwUcanIn938I51lgVAOc4SEdfsdMCU3i-Hnu2M1GfWFnh5U9W40oq8JiYNpFeNra98HrqqeZFyaPhxmowAGDVZYqc-dNS_vbWZuEqsVy9xmd9dk6D5lIUEXp9XZhn62ZhgtKoOlOG78QuWPB1QG8-a68o2Q"
          alt="Luxury boutique interior"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 md:px-4">
        <motion.p 
          className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.4em] text-[#f2ca50] mb-8 uppercase"
          {...fadeUp(0)}
        >
          EXCLUSIVITY REDEFINED
        </motion.p>
        
        <motion.h1 
          className="font-['Bodoni_Moda'] text-[48px] md:text-[84px] leading-[52px] md:leading-[92px] tracking-[0.02em] text-[#e4e2e1] mb-8 max-w-4xl mx-auto font-normal"
          {...fadeUp(0.2)}
        >
          AN EXCLUSIVE INVITATION
        </motion.h1>
        
        <motion.p 
          className="font-['Hanken_Grotesk'] text-[18px] font-light leading-[28px] tracking-[0.01em] text-[#d0c5af] max-w-xl mx-auto mb-12"
          {...fadeUp(0.4)}
        >
          Experience the world of Aurelian in total privacy. A sanctuary of horological mastery and bespoke service, tailored for the discerning few.
        </motion.p>
        
        <motion.div {...fadeUp(0.6)}>
          <a 
            className="inline-block px-12 py-4 border border-[#f2ca50] text-[#f2ca50] font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] uppercase hover:bg-[#2a2a2a] transition-all duration-500"
            href="#booking"
          >
            Request Entry
          </a>
        </motion.div>
      </div>
    </section>
  );
}