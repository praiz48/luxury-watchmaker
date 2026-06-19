import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const categories = [
  {
    title: 'Timepieces',
    subtitle: 'EXPLORE MASTERPIECES',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcJkk6uo8hj2LbPedOMCDtO6xifi-wrsnkrYAtttivOdvDlVyyX4Sij5C42aJlSy7nJFojFF4Ib_9lXdNlx_vSQBvR3liGGN3Swp89wxgyP790Avawrkr73eFP9GlkRHLU-ib8pRQhAZwlAnwQqmNxP-kX2UCQejRjywY38qy4EG_jyLeiHg7hzCAHVE8KsIr78NeLNFXdrXXm72iPO1-zoApduyxwyqSaYhtQQEcRxw250WBIWBpZvHw2x4M12bfBf7SRG74ZbDg',
    span: 'md:col-span-7',
    height: 'h-[819px]',
    position: '',
    textPosition: 'bottom-12 left-12',
    titleSize: 'text-headline-lg',
  },
  {
    title: 'Fine Jewelry',
    subtitle: 'THE ADORNMENT',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjvnb9Ta5p-h-9AouDYx-TUKiG_CHa0WVXoiQ9TKXslxD2FhhCWskuxsB6p8-4J5MylKNOGb_thP9u5DMvyjRibIew8No1TKV00pf9xOs0f9ETzXv73XUATcDVmBcfdt9fTCJzuzN4G2uwriJ8eW4nHTmCJY2apVv3YPTipPMOuIRXcOtvwmnsu7uQbv0xKES3qaLOVd1AEkTQUspxrVtp1TJ3ylIJ5CGcqgvjxFsLa-yUGEHeAFUCoTKWc95DOeP9lAd3uIbdYZ0',
    span: 'md:col-span-5',
    height: 'h-[614px]',
    position: 'mt-24',
    textPosition: 'bottom-10 left-10',
    titleSize: 'text-headline-md',
  },
  {
    title: 'Limited',
    subtitle: 'RARE FINDS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyjAa8tQqnXhUEgV3aBdADiFptcl8mwzUqO_mbTO9hiCZQIiHNv-i_5rbCVw_3C8WMIrMEIYi30-tFGtd2xcqhV5zj7_oj6_hcvVHq2L0Ds5AMlHIWie80BaRPPgtoXyH6zB1OtyHoY84bcNt4Cvuhb3rpjdoWIpfzcQsj8bsARIG9CDabESnyiO27jkMHr1RFJt-uE84DdiJ5MqFhf6QIWdtJ4V0idAJCKK115ExdIkzX72w783M6hh5-wW3UITGBsgz1dWCeeIc',
    span: 'md:col-span-4',
    height: 'h-[512px]',
    position: '-mt-12',
    textPosition: 'bottom-8 left-8',
    titleSize: 'text-headline-md',
  },
  {
    title: 'New Arrivals',
    subtitle: 'THE NEW CANON',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABPdpMXUfLSflqhZOGN5G9sWq58MXNVrQtBKV-09Rdtx2uMpuKKiFZ278mbTLJjz1fzl1kLYZpd_lSuZ2MEF6LO46gfKUBLkXKCpo5adxiOSv9U15v2KpAjCI8wIQ8cO46nADdrVIJkwpSwBV7W_Y_x1rZEX7ci7b0hwoPBrWrmBrm5Edxt9Jui_Xe40BSjgqFEVqc8cW-CWB8gv_FKdRF6SHcfNBHcKK2lnw0Mmj6Q6H7_10_BHybH966e1W_JCoALVoS-zP3ilI',
    span: 'md:col-span-8',
    height: 'h-[716px]',
    position: '',
    textPosition: 'bottom-12 right-12 text-right',
    titleSize: 'text-headline-lg',
  },
];

export default function CategoryGrid() {
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
    <section className="py-[160px] px-[80px] max-md:px-6 bg-[#131313]">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-12 gap-[32px]"
      >
        {categories.map((category, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className={`${category.span} ${category.height} ${category.position} relative group overflow-hidden`}
          >
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              src={category.image}
              alt={category.title}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700"></div>
            <div className={`absolute ${category.textPosition}`}>
              <h2 className={`font-['Bodoni_Moda'] ${category.titleSize} leading-[56px] tracking-[0.05em] text-white mb-2 font-normal`}>
                {category.title}
              </h2>
              <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] border-b border-[#f2ca50] pb-1 uppercase">
                {category.subtitle}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}