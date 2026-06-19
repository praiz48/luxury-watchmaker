import { motion } from 'framer-motion';

interface ProductCardProps {
  id: number;
  name: string;
  series: string;
  description: string;
  price: string;
  priceNote: string;
  buttonText: string;
  image: string;
  imagePosition: 'left' | 'right';
  delay?: number;
}

export default function ProductCard({
  id,
  name,
  series,
  description,
  price,
  priceNote,
  buttonText,
  image,
  imagePosition,
  delay = 0,
}: ProductCardProps) {
  return (
    <motion.div 
      className={`grid grid-cols-1 md:grid-cols-12 gap-[32px] items-center`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    >
      {/* Image */}
      <div className={`${imagePosition === 'left' ? 'md:col-span-7' : 'md:col-span-7 md:col-start-6 md:order-2'} aspect-[4/5] relative`}>
        <div className={`absolute -inset-10 ${id === 1 ? 'bg-[#f2ca50]/5' : 'bg-[#d4af37]/10'} rounded-full blur-[120px] pointer-events-none`}></div>
        <motion.img 
          className="w-full h-full object-cover relative z-10" 
          src={image}
          alt={name}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Content */}
      <div className={`${imagePosition === 'left' ? 'md:col-span-4 md:col-start-9' : 'md:col-span-4 md:order-1'} space-y-8`}>
        <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.3em] text-[#f2ca50] uppercase">
          {series}
        </span>
        <h3 className="font-['Bodoni_Moda'] text-[48px] leading-[56px] tracking-[0.05em] text-white font-normal">
          {name}
        </h3>
        <p className="font-['Hanken_Grotesk'] text-[18px] font-light leading-[28px] tracking-[0.01em] text-[#d0c5af]">
          {description}
        </p>
        <div className="flex items-baseline gap-4">
          <span className="font-['Hanken_Grotesk'] text-[32px] leading-[40px] tracking-[0.05em] text-[#f2ca50] font-normal">
            {price}
          </span>
          <span className="font-['Hanken_Grotesk'] text-[10px] font-semibold tracking-[0.2em] text-[#d0c5af] italic uppercase">
            {priceNote}
          </span>
        </div>
        <motion.button 
          className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] bg-transparent border border-[#f2ca50] text-[#f2ca50] px-10 py-4 hover:bg-[#f2ca50] hover:text-[#3c2f00] transition-all duration-500 uppercase"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText}
        </motion.button>
      </div>
    </motion.div>
  );
}