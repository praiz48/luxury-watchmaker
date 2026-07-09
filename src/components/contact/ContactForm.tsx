import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function ContactForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section className="px-[80px] max-md:px-6 mb-[160px]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-[32px] items-stretch">
        {/* Left Column - Info */}
        <motion.div 
          className="md:col-span-4 bg-[#2a2a2a] p-12 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="font-['Bodoni_Moda'] text-[48px] leading-[56px] tracking-[0.05em] text-[#e4e2e1] mb-8 font-normal">
            Inquire <span className="italic">Directly</span>
          </h3>
          <p className="font-['Hanken_Grotesk'] text-[18px] font-light leading-[28px] tracking-[0.01em] text-[#d0c5af] mb-12">
            Whether you seek a specific timepiece or require technical documentation, our concierge responds within two business hours.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#f2ca50]">mail</span>
              <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] uppercase">
                concierge@aurelian-geneve.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#f2ca50]">call</span>
              <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] uppercase">
                +41 22 500 00 00
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div 
          className="md:col-span-8 bg-[#1b1c1c] p-12"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-12" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="relative">
              <input 
                className="w-full bg-transparent border-b border-[#99907c] py-4 px-0 focus:outline-none focus:border-[#f2ca50] transition-colors text-[#e4e2e1] peer placeholder-transparent" 
                id="name" 
                placeholder="Full Name" 
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label className="absolute left-0 -top-4 font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#d0c5af] peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px] peer-focus:-top-4 peer-focus:text-[#f2ca50] transition-all pointer-events-none uppercase" htmlFor="name">
                FULL NAME
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input 
                className="w-full bg-transparent border-b border-[#99907c] py-4 px-0 focus:outline-none focus:border-[#f2ca50] transition-colors text-[#e4e2e1] peer placeholder-transparent" 
                id="email" 
                placeholder="Email Address" 
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label className="absolute left-0 -top-4 font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#d0c5af] peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px] peer-focus:-top-4 peer-focus:text-[#f2ca50] transition-all pointer-events-none uppercase" htmlFor="email">
                EMAIL ADDRESS
              </label>
            </div>

            {/* Subject */}
            <div className="md:col-span-2 relative">
              <input 
                className="w-full bg-transparent border-b border-[#99907c] py-4 px-0 focus:outline-none focus:border-[#f2ca50] transition-colors text-[#e4e2e1] peer placeholder-transparent" 
                id="subject" 
                placeholder="Interest" 
                type="text"
                value={formData.subject}
                onChange={handleChange}
              />
              <label className="absolute left-0 -top-4 font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#d0c5af] peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px] peer-focus:-top-4 peer-focus:text-[#f2ca50] transition-all pointer-events-none uppercase" htmlFor="subject">
                INTEREST (TIMEPIECES / JEWELRY / OTHER)
              </label>
            </div>

            {/* Message */}
            <div className="md:col-span-2 relative">
              <textarea 
                className="w-full bg-transparent border-b border-[#99907c] py-4 px-0 focus:outline-none focus:border-[#f2ca50] transition-colors text-[#e4e2e1] peer placeholder-transparent" 
                id="message" 
                placeholder="Message" 
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label className="absolute left-0 -top-4 font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#d0c5af] peer-placeholder-shown:top-4 peer-placeholder-shown:text-[16px] peer-focus:-top-4 peer-focus:text-[#f2ca50] transition-all pointer-events-none uppercase" htmlFor="message">
                MESSAGE
              </label>
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-end">
              <motion.button 
                className="group flex items-center gap-4 py-4 px-12 border border-[#f2ca50] text-[#f2ca50] hover:bg-[#f2ca50] hover:text-[#131313] transition-all duration-500"
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] uppercase">SEND INQUIRY</span>
                <span className="material-symbols-outlined transform group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}