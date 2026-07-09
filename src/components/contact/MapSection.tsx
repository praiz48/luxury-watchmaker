import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function MapSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section 
      ref={ref}
      className="w-full h-[700px] relative px-[80px] max-md:px-6 mb-[160px]"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full h-full bg-[#1b1c1c] rounded-lg overflow-hidden relative shadow-2xl">
        {/* Map Image */}
        <img 
          className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYOjOnp6MN-AfzSVm6gtVqt_jA_9a-VFqrAa5PcdkEudszwM-lrpw1DEnwTKACRskPThRyRPQUdTtA85iCh5Xp1V72BkiUCa5oukzSaX3iyD6wdIjFN3ArGbRHrPNwElWNsfZY9xci1pJ1DQAee-evWVpeKOzbmY8divx_fMH859hGyG8cJxAho-f2hvvSSrcMpQMEVRIZTxoUcXOxT9TJ8DRqy9XHF6rV5SokY3pesR5hfQAWFDJG5WM7cw3XWHBsyATi9z-yk10"
          alt="World Map with Aurelian Locations"
        />

        {/* Gold Pins */}
        <div className="absolute top-[35%] left-[48%] group cursor-pointer">
          <div className="w-4 h-4 bg-[#f2ca50] rounded-full animate-ping absolute opacity-75"></div>
          <div className="w-4 h-4 bg-[#f2ca50] rounded-full relative shadow-[0_0_15px_rgba(242,202,80,0.8)]"></div>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-[#131313] px-6 py-3 border border-[#f2ca50]/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            <p className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] uppercase">AURELIAN GENÈVE</p>
          </div>
        </div>

        <div className="absolute top-[38%] left-[46%] group cursor-pointer">
          <div className="w-3 h-3 bg-[#f2ca50] rounded-full relative opacity-80"></div>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-[#131313] px-6 py-3 border border-[#f2ca50]/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            <p className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] uppercase">AURELIAN PARIS</p>
          </div>
        </div>

        <div className="absolute top-[34%] left-[28%] group cursor-pointer">
          <div className="w-3 h-3 bg-[#f2ca50] rounded-full relative opacity-80"></div>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-[#131313] px-6 py-3 border border-[#f2ca50]/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            <p className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] uppercase">AURELIAN NEW YORK</p>
          </div>
        </div>

        {/* Border */}
        <div className="absolute inset-0 border border-[#f2ca50]/10 pointer-events-none"></div>

        {/* Bottom Info Card */}
        <div className="absolute bottom-12 left-12 bg-[#131313]/80 backdrop-blur-md p-8 border-l-2 border-[#f2ca50] max-w-sm">
          <h5 className="font-['Bodoni_Moda'] text-[32px] leading-[40px] tracking-[0.05em] text-[#e4e2e1] mb-2 font-normal">
            Private Appointments
          </h5>
          <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af]">
            Global travel is available for bespoke jewelry and complications presentations.
          </p>
        </div>
      </div>
    </motion.section>
  );
}