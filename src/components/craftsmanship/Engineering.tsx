import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Engineering() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="bg-[#0e0e0e] py-[160px] relative">
      <div className="px-[80px] max-md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-[32px]">
        {/* Left Content */}
        <motion.div 
          className="lg:col-span-5 flex flex-col justify-center"
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-['Bodoni_Moda'] text-[32px] md:text-[48px] leading-[38px] md:leading-[56px] tracking-[0.05em] text-[#f2ca50] mb-6 font-normal">
            The Calibration of Time
          </h2>
          <p className="font-['Hanken_Grotesk'] text-[18px] font-light leading-[28px] tracking-[0.01em] text-[#d0c5af] mb-12">
            Beyond the aesthetic lies a mathematical marvel. Our Calibre 901 movement consists of 284 individual hand-finished components, operating at a frequency of 28,800 vibrations per hour.
          </p>
          <div className="space-y-6">
            <motion.div 
              className="flex items-center gap-4 group"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              <span className="w-12 h-px bg-[#f2ca50] transition-all group-hover:w-20"></span>
              <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#e4e2e1] uppercase">
                TOURBILLON ESCAPEMENT
              </span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-4 group"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              <span className="w-12 h-px bg-[#f2ca50] transition-all group-hover:w-20"></span>
              <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#e4e2e1] uppercase">
                PERPETUAL CALENDAR
              </span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-4 group"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              <span className="w-12 h-px bg-[#f2ca50] transition-all group-hover:w-20"></span>
              <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#e4e2e1] uppercase">
                72-HOUR POWER RESERVE
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="lg:col-span-7 relative"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative z-10">
            <motion.img 
              className="w-full h-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALROK3O3e1Mbc1-q3zq-iQcxwcGrvlTGWYFpLr8PtPZijRGZzj26IEG0j0067nhGDVQzxjrurg7UFieiZ1P_T4WL6-l7A67fvUzJ2vKM3F5oCs4I19LwunqoGeurX1uuJPFHv_Z_iS8blZsi3bhQntXH54KtDbCckedLwQs6dEXzDmaPsyKH1LFx4_hT-x0U685MfjFJvJQnnV6LExOGbaDmlOBahQLsgbUarE2WnCp3I0gsxl3FhvwEneilpTxxuKkReGmmG_DSA"
              alt="Deconstructed watch movement"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          {/* Decorative rotating ring */}
          <motion.div 
            className="absolute -top-10 -right-10 w-64 h-64 border border-[#f2ca50]/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </section>
  );
}