import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: 'history_edu',
    title: 'Personal Consultation',
    description: 'One-on-one sessions with our senior specialists to discuss investment-grade pieces and future commissions.',
  },
  {
    icon: 'architecture',
    title: 'Restoration Atelier',
    description: 'Access to our heritage restoration services, where vintage Aurelian pieces are returned to their original glory.',
  },
  {
    icon: 'diamond',
    title: 'Private Collection Access',
    description: 'Invitations to view and acquire limited-edition prototypes and vault-exclusive jewelry designs before public release.',
  },
  {
    icon: 'flight_takeoff',
    title: 'Global White-Glove Delivery',
    description: 'Insured, secure, and hand-delivered handovers anywhere in the world by our trained security personnel.',
  },
];

export default function VipServices() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-[160px] px-6 md:px-[80px] bg-[#131313] relative overflow-hidden">
      {/* Header */}
      <motion.div 
        className="max-w-4xl mx-auto text-center mb-24"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-['Bodoni_Moda'] text-[48px] leading-[56px] tracking-[0.05em] text-[#f2ca50] mb-6 font-normal">
          VIP CONCIERGE SERVICES
        </h2>
        <p className="font-['Hanken_Grotesk'] text-[18px] font-light leading-[28px] tracking-[0.01em] text-[#d0c5af]">
          Beyond the viewing, we offer a lifetime of dedicated care and exclusive access for our global family.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="flex gap-8 p-10 bg-[#1b1c1c] border border-[#99907c]/5 hover:border-[#f2ca50]/30 transition-all duration-500 group"
          >
            <span className="material-symbols-outlined text-4xl text-[#f2ca50] shrink-0 group-hover:scale-110 transition-transform duration-500">
              {service.icon}
            </span>
            <div>
              <h4 className="font-['Bodoni_Moda'] text-[24px] leading-[32px] tracking-[0.05em] text-[#e4e2e1] mb-3 font-normal">
                {service.title}
              </h4>
              <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af]">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}