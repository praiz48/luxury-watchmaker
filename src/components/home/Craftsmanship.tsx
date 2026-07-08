import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
export default function Craftsmanship() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const navigate = useNavigate();

  return (
    <section className="py-[160px] px-[80px] grid md:grid-cols-2 gap-[32px] items-center max-md:px-6">
      {/* Image */}
      <div className="relative h-[600px] overflow-hidden group">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSAWObTjfz7_1hL8xZUlabyaPR2tUNaWqwpwvVZtzaUurtz3Fco1Il-W_xaIauUXNGmS3ADwCQatfUQFaczmYQMhdKvuEq2zw0KKFYct2D8E1-snCvbO6nXWscGZ5Q4QbRg45phR968SmnQIspHuXaOiXfyNSxgc2ZsSDYm0-0Ygiu_uXQL8FMQ-1yns68NG9GPldpVowBlSOk2FSfvckWcl1FmwtF4FKlca6K3Vw43RIpRNERhoTUTSkSwJIp89MetttYQSTZWhI')`,
          }}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] to-transparent opacity-40"></div>
      </div>

      {/* Content */}
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] mb-4 block uppercase">
          HAND-FINISHED PERFECTION
        </span>
        <h2 className="font-['Bodoni_Moda'] text-[32px] md:text-[48px] leading-[38px] md:leading-[56px] tracking-[0.05em] text-[#e4e2e1] mb-8 font-normal">
          THE ARTISAN'S TOUCH
        </h2>
        <p className="font-['Hanken_Grotesk'] text-[18px] font-light leading-[28px] tracking-[0.01em] text-[#d0c5af] mb-6">
          Each Aurelian caliber is a symphony of over 300 hand-finished components. 
          Our master watchmakers in Geneva spend months meticulously chamfering, 
          polishing, and engraving every bridge and wheel, ensuring that even the 
          parts never seen by the eye are masterpieces in their own right.
        </p>
        <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af]/80 mb-10 italic">
          "Precision is not a goal; it is our baseline. Beauty is what we build upon it."
        </p>
        <button 
          className="border-b border-[#f2ca50] text-[#f2ca50] font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] pb-2 hover:pr-4 transition-all duration-300 uppercase"
          onClick={() => navigate('/craftsmanship')}
        >
          DISCOVER THE CRAFT
        </button>
      </motion.div>
    </section>
  );
}