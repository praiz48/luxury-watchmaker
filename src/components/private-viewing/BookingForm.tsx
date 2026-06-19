import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FloatingLabelInput from '../shared/FloatingLabelInput';

export default function BookingForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section className="py-[160px] px-6 md:px-[80px] bg-[#131313]" id="booking">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
        {/* Left Column - Info */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="reveal-text"
        >
          <h2 className="font-['Bodoni_Moda'] text-[48px] leading-[56px] tracking-[0.05em] text-[#f2ca50] mb-8 font-normal">
            SECURE YOUR PRIVATE VIEWING
          </h2>
          <p className="font-['Hanken_Grotesk'] text-[18px] font-light leading-[28px] tracking-[0.01em] text-[#d0c5af] mb-12">
            Our Private Viewings are curated experiences designed to offer you uninterrupted access to our most rare and exclusive collections. Please provide your details below, and a concierge member will contact you within 24 hours to confirm your invitation.
          </p>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#f2ca50]">verified</span>
              <p className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] uppercase">Priority Collection Access</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#f2ca50]">concierge</span>
              <p className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] uppercase">Personal Master Watchmaker</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#f2ca50]">lock</span>
              <p className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] uppercase">Discreet On-Site Entry</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div 
          className="bg-[#1b1c1c] p-8 md:p-16 border border-[#99907c]/10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form className="space-y-12" onSubmit={handleSubmit}>
            <FloatingLabelInput 
              label="Full Name"
              type="text"
              required
            />
            
            <FloatingLabelInput 
              label="Electronic Mail"
              type="email"
              required
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FloatingLabelInput 
                label="Preferred Location"
                as="select"
                options={[
                  { value: 'geneva', label: 'Geneva Atelier' },
                  { value: 'london', label: 'London Salon' },
                  { value: 'newyork', label: 'New York Gallery' },
                ]}
              />
              <FloatingLabelInput 
                label="Desired Date"
                type="date"
              />
            </div>
            
            <FloatingLabelInput 
              label="Special Interests (Optional)"
              as="textarea"
              rows={4}
            />
            
            <motion.button 
              className="w-full py-5 bg-[#f2ca50] text-[#3c2f00] font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.3em] uppercase hover:brightness-110 transition-all duration-300"
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Invitation Request
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}