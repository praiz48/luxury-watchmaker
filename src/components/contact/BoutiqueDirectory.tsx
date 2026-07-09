import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const locations = [
  {
    type: 'FLAGSHIP',
    name: 'Genève',
    address: 'Quai de l\'Île 12\n1204 Genève, Switzerland',
    phone: '+41 22 123 45 67',
  },
  {
    type: 'BOUTIQUE',
    name: 'Paris',
    address: '26 Place Vendôme\n75001 Paris, France',
    phone: '+33 1 23 45 67 89',
  },
  {
    type: 'BOUTIQUE',
    name: 'New York',
    address: '730 Fifth Avenue\nNew York, NY 10019, USA',
    phone: '+1 212 987 6543',
  },
];

export default function BoutiqueDirectory() {
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
    <section className="px-[80px] max-md:px-6 mb-[160px]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
        <h2 className="font-['Bodoni_Moda'] text-[32px] md:text-[48px] leading-[38px] md:leading-[56px] tracking-[0.05em] text-[#e4e2e1] font-normal">
          Global <span className="italic">Boutiques</span>
        </h2>
        <div className="h-px flex-grow bg-[#4d4635] mx-12 hidden md:block"></div>
        <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#d0c5af] uppercase">
          9 LOCATIONS WORLDWIDE
        </span>
      </div>

      {/* Locations Grid */}
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-16"
      >
        {locations.map((location, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="border-l border-[#f2ca50]/20 pl-8"
          >
            <p className={`font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] mb-4 uppercase ${index === 0 ? 'text-[#f2ca50]' : 'text-[#d0c5af]'}`}>
              {location.type}
            </p>
            <h4 className="font-['Bodoni_Moda'] text-[32px] leading-[40px] tracking-[0.05em] text-[#e4e2e1] mb-6 font-normal">
              {location.name}
            </h4>
            <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af] italic mb-8 whitespace-pre-line">
              {location.address}
              {location.phone}
            </p>
            <a className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] hover:tracking-widest transition-all uppercase" href="#">
              DISCOVER LOCATION →
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}