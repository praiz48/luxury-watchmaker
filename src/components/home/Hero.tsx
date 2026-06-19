import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as any, delay },
});

export default function Hero() {
  const navigate = useNavigate();

  const handleExploreCollection = () => {
    navigate('/collection');
  };

  const handlePrivateViewing = () => {
    navigate('/private-viewing');
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvgFBDliM4DHd8gbMzFUF0Uec6_TgA6oVRYTYTz3Zj-73dSmmlwSKK4MA5WMvUBVgoC1-pVIMvS2cMuLk0q-Ymsf19e_CGJIIE0dD0Vctc-FvJyqfCC37a71AYDRMIcWLN3Ly_jkWJcOA2cNJaaRXsMcVU7kYFEFdb4ULOQe0fbFRM-cEeJiv_kkQ-EEEDHH1f6G1Tamo6XlgczgG2AMY7jHR0JU44CJ_gkzU3nfO9iSpU8oTGT0Ig2RFxwaTA03P33dMI1YbgDnA')`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 md:px-4">
        <motion.h1
          {...fadeUp(0)}
          className="font-['Bodoni_Moda'] text-[48px] md:text-[84px] leading-[52px] md:leading-[92px] tracking-[0.02em] text-[#e4e2e1] mb-4"
        >
          A LEGACY OF PRECISION
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="font-['Hanken_Grotesk'] text-[18px] font-light leading-[28px] tracking-[0.01em] text-[#d0c5af] mb-12 max-w-xl mx-auto"
        >
          The Art of Timeless Swiss Watchmaking.
        </motion.p>

        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <motion.button 
            className="bg-[#f2ca50] text-[#3c2f00] px-10 py-4 font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] uppercase hover:scale-105 transition-transform duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExploreCollection}
          >
            EXPLORE COLLECTION
          </motion.button>
          <motion.button 
            className="border border-[#f2ca50] text-[#f2ca50] px-10 py-4 font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] uppercase hover:bg-[#f2ca50]/10 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrivateViewing}
          >
            BOOK PRIVATE VIEWING
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="material-symbols-outlined text-[#f2ca50] text-3xl">
          keyboard_double_arrow_down
        </span>
      </motion.div>
    </section>
  );
}