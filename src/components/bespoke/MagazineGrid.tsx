import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const gridItems = [
  {
    category: 'WATCHMAKING',
    title: 'The Anatomy of Silence',
    description: 'How Aurelian\'s new escapement mechanism redefines the auditory experience of time.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-HRNyotOqyXOU8y9MgL-QONBvVkFy3k79q7nnYiTAIhgB0XvFbVJ5nFWtnciS2zqeOtJPFplfzCfASx64awA-CRI2e3YOueKvPuaowcc4myMTIyfy6IW1C7lSUTf__n4IjRIxVlN4nvZumFghRpMKbnO1qq_VMkdS478y-WRUJSxA9Zjbeu4AJ57SL3gCod3iGOj-OPR0SDKgsR-6rAIQqUk9d72I6813lov64mmGaRDh_hLl5CZJqMfO_bPK3cZsGtYlDLOX7BA',
    span: 'md:col-span-7',
    height: 'h-[600px]',
    mt: '',
  },
  {
    category: 'DESIGN',
    title: 'Architectural Minimalism',
    description: 'The intersection of modern structures and classical proportions in our latest collection.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtyoWuOhFyDFYGgW8IiTfDbeQKBI8eFPYUBS23SijOx-X-DlAeBe8xxSTk-Tk38mHrVoZzrjHWkl-tZNy5lNxUnwXq1xj_scu48C5E2RzIwpujTeg2OKGT73_Cv97Wv4SamayElQLQt8ekxVSOOPeUiSXPpJIwVf6Xtkgu5hRiri1Vm1FBVURoxrIQp66a0ZkoMIebM1isiLUXdvKRNBGRwIJ-zMDkx_pMPCGc89MH4eq0xAVOneIE9LQckdA7j03SRDxqNQmMaOE',
    span: 'md:col-span-5',
    height: 'h-[400px]',
    mt: 'md:mt-40',
  },
  {
    category: 'EVENTS',
    title: 'Lake Geneva: The Summer Soirée',
    description: 'A retrospective on an evening of horology and haute cuisine.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpeYlrAp5Nn6qST18Jtpcnaja3eqi26AQkuRSgtB3DIHRwrf_sgoJGCvN7dM8z4J8i6BLJMMB9PI8RYHR3hdUDxa-aRAJeEsSmXOiz4_Ypqn8gtHYZRWyvrNqDS8210SFFa4ig7BpwwA4gEuGHedI3ZiNQil7mkKo5qtyxIPHBMPnuVNfWsMD59AJIy8Js5U5IXfKdZYdwVCqzM-2apObMkoH-TITIFTdnJbnSMoO-g6OzBCS9FfwCw5MMNkTwYC9a7Ytqi4EDE-A',
    span: 'md:col-span-4',
    height: 'h-[300px]',
    mt: '',
  },
];

export default function MagazineGrid() {
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
    <section className="py-[160px] px-6 md:px-[80px] bg-[#131313]">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-12 gap-[32px] items-start"
      >
        {/* Large Item - Watchmaking */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-7 group cursor-pointer"
        >
          <div className="overflow-hidden mb-8 relative">
            <div className="absolute inset-0 bg-[#f2ca50]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
            <img 
              className="w-full h-[600px] object-cover scale-100 group-hover:scale-105 transition-transform duration-1000" 
              src={gridItems[0].image}
              alt="Watchmaking Art"
            />
          </div>
          <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] mb-4 block uppercase">
            {gridItems[0].category}
          </span>
          <h2 className="font-['Bodoni_Moda'] text-[32px] md:text-[48px] leading-[38px] md:leading-[56px] tracking-[0.05em] text-[#e4e2e1] mb-6 font-normal">
            {gridItems[0].title}
          </h2>
          <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af] max-w-lg">
            {gridItems[0].description}
          </p>
        </motion.div>

        {/* Offset Small Story - Design */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-5 md:mt-40 group cursor-pointer"
        >
          <div className="overflow-hidden mb-8 relative">
            <img 
              className="w-full h-[400px] object-cover scale-100 group-hover:scale-105 transition-transform duration-1000" 
              src={gridItems[1].image}
              alt="Design Aesthetic"
            />
          </div>
          <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] mb-4 block uppercase">
            {gridItems[1].category}
          </span>
          <h2 className="font-['Bodoni_Moda'] text-[32px] leading-[40px] tracking-[0.05em] text-[#e4e2e1] mb-4 font-normal">
            {gridItems[1].title}
          </h2>
          <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af]">
            {gridItems[1].description}
          </p>
        </motion.div>

        {/* Events / Secondary */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-4 group cursor-pointer"
        >
          <div className="overflow-hidden mb-6">
            <img 
              className="w-full h-[300px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
              src={gridItems[2].image}
              alt="Luxury Event"
            />
          </div>
          <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] mb-4 block uppercase">
            {gridItems[2].category}
          </span>
          <h3 className="font-['Bodoni_Moda'] text-[24px] leading-[32px] tracking-[0.05em] text-[#e4e2e1] mb-4 font-normal">
            {gridItems[2].title}
          </h3>
          <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af]">
            {gridItems[2].description}
          </p>
        </motion.div>

        {/* Quote Block */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-8 flex flex-col justify-center items-center py-10 md:py-0 border-l border-[#99907c]/20 pl-[32px]"
        >
          <blockquote className="font-['Bodoni_Moda'] text-[32px] leading-[40px] tracking-[0.05em] italic text-center max-w-xl text-[#f2ca50] font-normal">
            "Precision is the child of patience, and beauty is its final reward."
          </blockquote>
          <p className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.5em] mt-8 text-[#d0c5af] uppercase">
            — MARCUS AURELIAN
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}