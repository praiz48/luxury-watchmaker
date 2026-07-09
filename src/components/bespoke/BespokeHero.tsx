import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as any, delay },
});

export default function BespokeHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7yAF6gz8qJNaVgM9DZ7JmuaWbAnEGEWBEZwm0SwLWxudvWCEDGCVthQQ6tlF4Z3izWCfzn_4e_gONnsMvIJ6Up7OykTK_vh8ZDVDa9rcUxNtNqFO2LBxOtoiknh6AmiFLnfOcQzFSq7o45fdjkFUMZfpj2ZOkXXaYrIG9FeBcUar04uVKJpuF9DksxZuEKB6l7fX2uPfExC5xwYX46Jzwlrg_ZhLFSXcAFtc-6ELSmPQeIC4mWW0UbGREfEK7YtplKeMBTCgkIOU"
          alt="Swiss Engineering Movement"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/20 to-transparent"></div>
        <div className="vignette absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 md:px-0">
        <motion.span 
          className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.4em] text-[#f2ca50] mb-6 block uppercase"
          {...fadeUp(0)}
        >
          FEATURED PERSPECTIVE
        </motion.span>
        <motion.h1 
          className="font-['Bodoni_Moda'] text-[48px] md:text-[84px] leading-[52px] md:leading-[92px] tracking-[0.02em] text-[#e4e2e1] mb-8 font-normal"
          {...fadeUp(0.2)}
        >
          The Future of Swiss Engineering
        </motion.h1>
        <motion.p 
          className="font-['Hanken_Grotesk'] text-[18px] font-light leading-[28px] tracking-[0.01em] text-[#d0c5af] max-w-2xl mx-auto mb-10 opacity-80"
          {...fadeUp(0.4)}
        >
          Exploring the convergence of legacy craftsmanship and the next frontier of horological innovation.
        </motion.p>
        <motion.div {...fadeUp(0.6)}>
          <button className="border border-[#d4af37] text-[#d4af37] px-10 py-4 font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] hover:bg-[#d4af37] hover:text-[#554300] transition-all duration-500 uppercase">
            READ THE ARTICLE
          </button>
        </motion.div>
      </div>
    </section>
  );
}