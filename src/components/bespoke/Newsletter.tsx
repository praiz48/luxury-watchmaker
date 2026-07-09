import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function Newsletter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-[160px] px-6 md:px-[80px] bg-[#0e0e0e] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#f2ca50]/5 rounded-full blur-[100px]"></div>
      
      <motion.div 
        ref={ref}
        className="max-w-4xl mx-auto text-center border border-[#f2ca50]/20 p-12 md:p-24 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.3em] text-[#f2ca50] mb-6 block uppercase">
          THE AURELIAN CIRCLE
        </span>
        <h2 className="font-['Bodoni_Moda'] text-[32px] md:text-[48px] leading-[38px] md:leading-[56px] tracking-[0.05em] text-[#e4e2e1] mb-8 font-normal">
          Join the Inner Sanctum
        </h2>
        <p className="font-['Hanken_Grotesk'] text-[18px] font-light leading-[28px] tracking-[0.01em] text-[#d0c5af] mb-12 max-w-lg mx-auto opacity-70">
          Receive exclusive insights into our latest acquisitions, bespoke commissions, and private invitations.
        </p>
        
        <form 
          className="flex flex-col md:flex-row gap-6 max-w-md mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex-grow relative">
            <input 
              className="w-full bg-transparent border-b border-[#99907c]/30 focus:border-[#f2ca50] text-[#e4e2e1] py-3 px-1 font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] focus:ring-0 transition-colors placeholder:text-[#4d4635] uppercase" 
              placeholder="EMAIL ADDRESS" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <motion.button 
            className="bg-[#f2ca50] text-[#3c2f00] px-8 py-3 font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] hover:bg-[#e9c349] transition-colors uppercase"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SUBSCRIBE
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}