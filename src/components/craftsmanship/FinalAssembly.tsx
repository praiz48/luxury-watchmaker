import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function FinalAssembly() {
  

  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalHeight = sectionRef.current.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max(0, -rect.top / totalHeight), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="h-[200vh] bg-black relative"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            className="w-full h-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCaq_gQOmRm2QWDa1QJBOYpCfarbrBTRIJX2HSn9_xSkwsIS6YTOGtnxgavb3RUhAzyV4bYDkp7XCHZJspAjMGWcdfJ52QixkGTWRhfH47aMhQ07YGERTwA8FiGUhXEfCmY5OnV74VFDSKPS2dFMQKd6nkSmeVrj0K7vC_Vk55Jzr0SV1kwmIVEten1C2uzcO8bO_8nOmrpY-o9zcpT4xtsCztK0kMZKKoOOaVNfoIwzmifgzPHxtV8pK_ALPsTwgJppnnBtu-oE0"
            alt="Sapphire crystal being lowered"
            style={{ 
              transform: `scale(${1 + scrollProgress * 0.2})`,
              opacity: 0.6 - (scrollProgress * 0.3)
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h2 className="font-['Bodoni_Moda'] text-[48px] md:text-[84px] leading-[52px] md:leading-[92px] tracking-[0.02em] text-[#f2ca50] uppercase font-normal">
            The Final Assembly
          </h2>
          <p className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.5em] mt-4 opacity-50 uppercase">
            SCROLL TO CONSTRUCT
          </p>
        </div>

        {/* Rotating Construction Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            className="w-[500px] h-[500px] border border-[#f2ca50]/10 rounded-full"
            style={{ 
              transform: `scale(${1 + scrollProgress * 2}) rotate(${scrollProgress * 90}deg)` 
            }}
          />
          <motion.div 
            className="absolute w-[400px] h-[400px] border border-[#f2ca50]/20 rounded-full"
            style={{ 
              transform: `scale(${1 + scrollProgress * 1.5}) rotate(${-scrollProgress * 45}deg)` 
            }}
          />
        </div>
      </div>
    </section>
  );
}