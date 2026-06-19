import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'The Obsidian Chronograph',
    series: 'SERIES ALPHA',
    description: "Hand-crafted over 400 hours, featuring our proprietary 'Void' obsidian casing and a perpetual moon-phase movement. A testament to silence and precision.",
    price: '$42,000',
    priceNote: 'EXCL. TAXES',
    buttonText: 'REQUEST ALLOCATION',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWiHHMku9j2JMkdKjZsCdoWEQP16eohlF9KudUb0y77PbEq_H7Ocsl_Sq6cFMPsVqGespiqv9SAc13kHogS45Jwd3LKd4T8jAd3na3cGZHMmNvUPLtPCXye-0c8K7PsJibnam68NU4aR5eeBOJbjlVZUpAtZlqlqnzY54I9O0-EesqTPiBVZQlcjNS88vjKA2J6d6LUp1AJeU1OfcewvOBfrBG34MUcHVH-fGI3qEzK-mRs2CC5Y648hNSgZ-yNt7TwEBBbtdWwZU',
    imagePosition: 'left' as const,
  },
  {
    id: 2,
    name: 'Royal Rose Gold Cuff',
    series: 'CRAFTSMANSHIP',
    description: 'An architectural masterpiece in 18k Rose Gold, set with 4.5 carats of ethically sourced champagne diamonds. Designed to catch light in every shadow.',
    price: '$18,500',
    priceNote: 'BESPOKE SIZING',
    buttonText: 'VIEW DETAILS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZip2XMT3NsQPg_kfbN4_t4mexFXPoo3b9MH544BySDCRzGgu5gpBNQx0AQSVJED6aPp4cmfR2Il7-cgEjaAl4TNIqr7hr1u_10rVnVQV_dPIHNZEJuUzHV3D4goByqSgfJgzafetOwcRww9FIS-u0poLN_sTcb0E2b4l2awdd3rRhLTU54iG7zV0xgV_ZpZApwGvKpFzTP1mKb_jkpG1xat_W31bJHSh3_2gnjD_Xpk9dQJnGxUp4nzriEDZFNsxD-C5QdGGaSzQ',
    imagePosition: 'right' as const,
  },
];

export default function ProductShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-[160px] space-y-[160px] px-[80px] max-md:px-6 bg-[#131313]">
      {products.map((product, index) => (
        <ProductCard 
          key={product.id}
          {...product}
          delay={index * 0.2}
        />
      ))}

      {/* Center Art Piece */}
      <motion.div 
        ref={ref}
        className="max-w-4xl mx-auto text-center space-y-12 py-[160px]"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="relative w-full aspect-video group overflow-hidden">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxkQxp07KuH_ZpF5YeCzKBDluvr-QcDeqP7fzWluHZqoVsE__vLF-kYJRDl3tf41AbcoBw2Qnji2TaHdpnVdUZpBKHwo-dZeSa2XWwhomard5SFZbrT9OMGVh5_suXn485wSwdv3cSz89XLcpsc2OaOtYlDLRhNiHgRNnlJthEvSsqoGfewvKP8L0Kaaen9IRJBKBnw2z2tQoqfw6N5Pl30sjM5sAVT6e2IIPP0jFLGJ9bBjz-_qUlQfeVVXVOkIwR6EJlMzSMSMs"
            alt="The Art of Time"
          />
          <motion.div 
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/40"
          >
            <motion.button 
              className="w-20 h-20 rounded-full border border-[#f2ca50] flex items-center justify-center text-[#f2ca50] hover:scale-110 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="material-symbols-outlined text-4xl">play_arrow</span>
            </motion.button>
          </motion.div>
        </div>
        <div className="space-y-4">
          <h4 className="font-['Bodoni_Moda'] text-[32px] leading-[40px] tracking-[0.05em] text-white font-normal">
            THE ART OF TIME
          </h4>
          <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af] max-w-xl mx-auto italic">
            "Luxury is not the absence of imperfection, but the presence of character."
          </p>
        </div>
      </motion.div>
    </section>
  );
}