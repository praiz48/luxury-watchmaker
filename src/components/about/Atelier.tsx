import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const atelierImages = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsN7-Zcy3-HqqdWvjhhLwX_8Nn6mfyth10gT0hzIOSEnEuNO5i3gFR_bX6K9A9Ka0pLWbO0tb2JrOt-8AEsGNIWkwJjXCS_RJnFAaku_uvq0w4eun51JL5cGA6m0hi0p403AuFOvK3p-Wt9YA-FMVpFe1_EyyuRCvNPWl5c626LbpKvMsmv2iEnz_zxrqKLFKbKO7iKsCZ8STEnwSghJx7ZRzYbZzhh4gh_3XIH-foKCtqXaPjDm64n6d-iy03qRr8eAvg23DiMQc',
    span: 'md:col-span-1',
    height: 'h-full',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpo5Bk3qNpibE2YT2uq0OGnDugkppr-erq-_FWiGo0ZR2rl2yj1JNEANhFtW8Kj__ipNQmPD_9Rz8PXf61Ul97v_UfexrTp1DqGE7OnmnITjmFnG9ev9YYYJu_VJnkLbAQXYADAfwJ_anprBC2Jqfu3h3bWvyWiiXqXEU4aAWAmEekA2c2Xm7yHsArVwWfaCBVaRZb2oXYDUnfffLKPA0ZzbOY8YL3VeacSqhoRFynqbxB1oI03Dx-149GoxFEmRGRxliVmGaYS2k',
    span: 'row-span-1',
    height: 'h-full',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm4s1Fetlv7Aj8XJcI4K9H4vTZNKfzFR18zo38adjQwVUQJTLgadH6z5YN9l7fqgpwraFjeTOyKmIrwSJZG4SusgZrGTROz2VTfZeVaFRtUecIgcB94x5hT2O9eS2LarQ6B5KIgfq9xXQkaxBF4ds8bXqm99BI58YDdEFuPh4xIQhHsd-ApwI8HkGbxL7eIZMnR5xNugc3cXx8ub6rfpzTRtFKOpjwYt-_cOdPGBxIkdFjvOgIoimb3AhZXPiiCXyJDSLNiyRE2kw',
    span: 'row-span-1',
    height: 'h-full',
  },
];

export default function Atelier() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-[160px] overflow-hidden bg-[#131313]">
      {/* Header */}
      <div className="px-6 md:px-[80px] mb-24 flex flex-col md:flex-row justify-between items-end">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] mb-6 uppercase">
            THE ATELIER
          </p>
          <h2 className="font-['Bodoni_Moda'] text-[32px] md:text-[48px] leading-[38px] md:leading-[56px] tracking-[0.05em] text-[#e4e2e1] font-normal">
            Where Shadows Form Light
          </h2>
        </motion.div>
        <motion.div 
          className="mt-8 md:mt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-['Hanken_Grotesk'] text-[18px] font-light leading-[28px] tracking-[0.01em] text-[#d0c5af] max-w-md italic">
            Located in the heart of Geneva, our workshop remains a sanctuary of silence and focus.
          </p>
        </motion.div>
      </div>

      {/* Image Grid */}
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[819px] px-6 md:px-4">
        {/* Large Image */}
        <motion.div 
          className="relative overflow-hidden group h-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
            className="w-full h-full object-cover grayscale transition-transform duration-[2s] group-hover:scale-105" 
            src={atelierImages[0].src}
            alt="Modern watchmaking atelier"
          />
        </motion.div>

        {/* Right Column - 2 images stacked */}
        <div className="grid grid-rows-2 gap-4 h-full">
          <motion.div 
            className="relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <img 
              className="w-full h-full object-cover grayscale transition-transform duration-[2s] group-hover:scale-105" 
              src={atelierImages[1].src}
              alt="Watchmaking tool kit"
            />
          </motion.div>
          <motion.div 
            className="relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <img 
              className="w-full h-full object-cover grayscale transition-transform duration-[2s] group-hover:scale-105" 
              src={atelierImages[2].src}
              alt="Watch lubricant application"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}