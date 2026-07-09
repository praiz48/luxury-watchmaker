import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: 'calendar_month',
    title: 'Private Consultation',
    description: 'Reserve a private appointment at our flagship salons or via digital presentation with a master specialist.',
    buttonText: 'Book Appointment',
  },
  {
    icon: 'support_agent',
    title: 'After Sales & Care',
    description: 'Our master artisans ensure your AURELIAN masterpiece remains pristine through generations of wear.',
    buttonText: 'Connect With Care',
  },
];

export default function ConciergeServices() {
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
    <section className="px-[80px] max-md:px-6 mb-[160px]">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-[32px]"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="group relative overflow-hidden bg-[#1b1c1c] p-12"
          >
            <div className="flex flex-col h-full justify-between gap-12">
              <span className="material-symbols-outlined text-[#f2ca50] text-4xl">
                {service.icon}
              </span>
              <div>
                <h3 className="font-['Bodoni_Moda'] text-[32px] leading-[40px] tracking-[0.05em] text-[#e4e2e1] mb-4 font-normal">
                  {service.title}
                </h3>
                <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af] mb-8 max-w-md">
                  {service.description}
                </p>
                <motion.button 
                  className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] px-8 py-4 border border-[#f2ca50] text-[#f2ca50] group-hover:bg-[#f2ca50] group-hover:text-[#131313] transition-all duration-500 uppercase"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {service.buttonText}
                </motion.button>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[120px]">
                {index === 0 ? 'diamond' : 'precision_manufacturing'}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}