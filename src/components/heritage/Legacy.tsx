import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Legacy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px 0px',
  });

  return (
    <section ref={ref} className="px-6 md:px-[80px] py-[160px] grid grid-cols-1 md:grid-cols-2 gap-20">
      {/* Archive - Left */}
      <motion.div 
        className="space-y-[32px]"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="overflow-hidden">
          <img 
            className="w-full grayscale hover:scale-105 transition-transform duration-1000" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3SI4RaTddXZG_F_6wJpnVYDTNMsexcaoUh9URQVQ6rm_iYOBtCfI6FMKHUbCvNGcEfqtFt5mnfEIJ2uXwY0T2F4ooBEUqDobPvL4Qw2I35DEVfvJMJ7Fk2u-N_yW6Gr-I50GTvI2hJbqhl4Xu2pqEJzC0qydQTOM4nIiOmLphyBJJO10IcvzrRqAUDPZMXtI4UDi9sWF3lIsmXpizU4RdjW3ycoSh-98KqvuLwr6pyWBhgCQBYyQwqey1mPyp0jQXGfQ7BA012g0"
            alt="Original Aurelian atelier in Geneva"
          />
        </div>
        <div className="flex justify-between items-end">
          <div>
            <h4 className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] mb-2 uppercase">
              ARCHIVE
            </h4>
            <p className="font-['Bodoni_Moda'] text-[32px] leading-[40px] tracking-[0.05em] text-[#e4e2e1] italic font-normal">
              1902
            </p>
          </div>
          <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af] max-w-[200px]">
            The original hearth of invention, where every screw was turned by hand.
          </p>
        </div>
      </motion.div>

      {/* Present Day - Right */}
      <motion.div 
        className="space-y-[32px] md:mt-40"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 30 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="overflow-hidden">
          <img 
            className="w-full hover:scale-105 transition-transform duration-1000" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIeD46mSHzMBoZDTeHjMMezFIiUVmCYKVQDkB1jkd68xN_FTv6f_fkMp1jA3KsWeygKZH9h83bwWsIFBU5RjEaFx-J7b2MtXzhYeumIoneAEVy1q0GZNQ7dIo0L22Vxp_Adhzde17kCvZDUo1xCAJWhyCxUbR7BRnvTdWk3HP6TXguG9GGePeryLHu-2nH3Byh_yeOrTl06lyYRQR3COraGOI914YIQsfKC385yF1DRGhp7RjyG456JwB0dIGDimzVmBrYDkUUpog"
            alt="Modern watchmaking laboratory"
          />
        </div>
        <div className="flex justify-between items-end">
          <div>
            <h4 className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] mb-2 uppercase">
              PRESENT DAY
            </h4>
            <p className="font-['Bodoni_Moda'] text-[32px] leading-[40px] tracking-[0.05em] text-[#e4e2e1] italic font-normal">
              The Lab
            </p>
          </div>
          <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af] max-w-[200px]">
            Where aerospace alloys meet the century-old soul of Swiss craft.
          </p>
        </div>
      </motion.div>
    </section>
  );
}