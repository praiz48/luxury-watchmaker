import { motion } from 'framer-motion';


export default function HeritageHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuADVElLn3d7oECdDPMsiYdbQGiw_jFnM2IzvyT6TXdrz2luYb5Me_vh-dj21pNb0Ka4uCkVt9iSc4ni61c3er-RqsaEaLGmodkLM18Dj7w0eptfMMHJrLv77vA3U11XjIaEoWZcq1eGC75cnKkuNkBlny7MdKYzNIvMkrLyZ245DhsPoChqEDXJ-esnfBbZIFtt4grrm4t00xRU0IHVM8uKu9x7gB3k4olA2_2G_9gPGPZObQAlnAnHIrkoVsOWvPQaOaoZ7shaKAc"
          alt="Vintage mechanical watch movement"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/80 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-4">
        <motion.span 
          className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.5em] text-[#f2ca50] mb-4 block uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          THE FOUNDATION OF TIME
        </motion.span>
        <motion.h1 
          className="font-['Bodoni_Moda'] text-[48px] md:text-[84px] leading-[52px] md:leading-[92px] tracking-[0.02em] text-[#e4e2e1] font-normal"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Generations of Precision
        </motion.h1>
      </div>
    </section>
  );
}