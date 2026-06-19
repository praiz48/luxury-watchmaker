import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FeaturedCollection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#1b1c1c] py-[160px] px-[80px] max-md:px-6">
      {/* Header */}
      <motion.div 
        className="text-center mb-24"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-['Bodoni_Moda'] text-[48px] leading-[56px] tracking-[0.05em] text-[#e4e2e1] mb-4 font-normal">
          CURATED SELECTIONS
        </h2>
        <div className="w-24 h-px bg-[#f2ca50] mx-auto"></div>
      </motion.div>

      {/* Bento Grid */}
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-12 gap-[32px] h-auto md:h-[900px]"
      >
        {/* Large Item 1 - Heritage Series */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-8 relative group overflow-hidden"
        >
          <img 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3jlYKa6BO9LAZ-8WzdmQzJbe-DaItZYpupEOxyP6VyNrXxyQOs38AiidBHf6XxnHcDbZ5H0RpkV3UXRjEK58W2kjqyWO5B2IWh5wan_8ctv5K4RP3cBWL1Cl9am5h2ESFUqUPnb5Q7TGMZlybSX1nJzZtU0HgStLx4s_tc6Ltm336Xp5GVCy0lgDE1szpSgNkBCNw3fHI1kRzBzKEY7KwisdGyqAuEqMNuuhQDdo0ZEqQcn14GAtlIU-nncgh-nE3jXNFYH4a3Co"
            alt="Heritage Series Watch"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500"></div>
          <div className="absolute bottom-12 left-12">
            <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] uppercase">COLLECTION</span>
            <h3 className="font-['Bodoni_Moda'] text-[32px] leading-[40px] tracking-[0.05em] text-white mt-2 font-normal">THE HERITAGE SERIES</h3>
            <a className="inline-block mt-4 text-white font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] border-b border-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 uppercase" href="#">
              VIEW PIECES
            </a>
          </div>
        </motion.div>

        {/* Small Item 1 - High Jewelry */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-4 relative group overflow-hidden"
        >
          <img 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5kdLkLWK0DpJIY8dZqIDsLUTCjALWSVaLCxoDxitZ6F1bemS873BTNDNW1Hellb2295QoyGYmRSPebvm80SpB6Pjw5EqON3VePNmIWuArbpxoOVhPjLFljN7fhDgmEK1Fzq7oT0uJ08RgGL4ijj5ZpTfw1CMBkEP9mSh7sODJjTxvI2iBv399ikFwMZQrwAJfOe6CUNNSuP30v98NUOBnhy0rwq4UNNc8fwVA16fQK2BC-BEPmdn6aKIlD0xExYv48pdHSVHYFbg"
            alt="High Jewelry Watch"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500"></div>
          <div className="absolute bottom-12 left-12">
            <h3 className="font-['Bodoni_Moda'] text-[32px] leading-[40px] tracking-[0.05em] text-white font-normal">HIGH JEWELRY</h3>
          </div>
        </motion.div>

        {/* Small Item 2 - Chronographs */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-4 relative group overflow-hidden"
        >
          <img 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpIN71BJ-QEJuXrPDODNGs-H3EV6IDee3neRIezYL7njx8D2LIdH74NxLbizVHQcArz2M8aTxD8zP_aJCSdqYIIIUpAy_Elt0wXO_s8YYtvEY8EjZFh3uqWZiein-7QQM-1T5c5U9UUKTY1t0Kj_-qYDHUajiDFCfuNzQ5fhYJWzHZo7sfM7HJKg5nv4I4eTrEzbijABR_jSDPqzM0Fi1sWPyiemeFIAwMvjNcgIy6bHSELGt5gZi5MumF_ap6aActZnBJoJG_vjQ"
            alt="Chronograph Watch"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
          <div className="absolute bottom-12 left-12">
            <h3 className="font-['Bodoni_Moda'] text-[32px] leading-[40px] tracking-[0.05em] text-white font-normal">CHRONOGRAPHS</h3>
          </div>
        </motion.div>

        {/* Medium Item - Bespoke Services */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-8 relative group overflow-hidden"
        >
          <img 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb4SQ6T6_ORiWKqMKKUgPPuo8H4B2F8t4xUOVePz8lcHn8AhxQYgsLiehOAa3GXlmq6tlY47hBD4yD9E8oPPww3Z3Smp944vKRETAPJCp4xbUDPLRDBAHzNtCXnlkZFYnfHIlzM30_Y5GPd7-KZA4YnUK-1Rp8XZKeynvoUkNiJcQAXtEk0imLZebvlK3y4-kxrXPF0nEc-f8GBdXfAvZdTgIYZ9bW4nklUpLkPebOo22DCosC1qzULM2nq-McQ3hPRkuiTG47WaI"
            alt="Bespoke Services"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <motion.div 
            className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          >
            <div className="p-8">
              <h3 className="font-['Bodoni_Moda'] text-[48px] leading-[56px] tracking-[0.05em] text-white mb-4 font-normal">BESPOKE SERVICES</h3>
              <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#e4e2e1] max-w-xs mx-auto">
                Create a legacy that is uniquely yours with our master craftsmen.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}