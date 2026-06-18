import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HeritagePreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-section-gap px-margin-desktop bg-surface relative">
      <div className="grid lg:grid-cols-12 gap-gutter items-center">
        {/* Text Content */}
        <motion.div 
          className="lg:col-span-5 order-2 lg:order-1"
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-headline-lg text-headline-lg mb-8">BORN IN GENÈVE, 1894</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-loose">
            Founded by Julian Aurelian in a small workshop overlooking Lake Geneva, 
            the house of Aurelian has stood as a guardian of traditional watchmaking 
            for over a century. From the first pocket watches commissioned by royalty 
            to the modern icons of today, our commitment to absolute precision has 
            never wavered.
          </p>
          <div className="flex gap-12 mt-12 border-t border-surface-container-highest pt-12">
            <div>
              <span className="block font-display-lg text-headline-lg text-primary">130</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                YEARS OF HISTORY
              </span>
            </div>
            <div>
              <span className="block font-display-lg text-headline-lg text-primary">Genève</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                ORIGIN CITY
              </span>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div 
          className="lg:col-span-7 order-1 lg:order-2 mb-12 lg:mb-0"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative pl-12">
            <img 
              className="w-full h-[700px] object-cover grayscale brightness-50 contrast-125" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_MRmSYQJWqtG7Plmb3AF5DpIAn9Tfu7LGcN1PeLJLSjo6OcGqb4j77yqlOeC_Z1-Vk4gbr85uUeSumLS8Ap497G9v1VheZe6b_tA7xi6gDhcfMojpSFUs2rtDYdxA3cYJRVuWBrf3kUsMcJ1OXBfL8VL1zhcJRF-EiNeBLMHXJdsMYVz8obIO4riHIdO1_fkahfCtCX62N6Vii8gxUpuk1zYpqBw_I1g_lVlR9K8TVoZLDd9H0A3AGQ_72SdOSQmPTQI_uDh2qTc"
              alt="Aurelian Atelier Geneva 1894"
            />
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-24 h-[400px] bg-primary/20 backdrop-blur-xl"></div>
            <div className="absolute bottom-8 right-8 bg-surface p-8 max-w-xs shadow-2xl">
              <p className="font-body-md italic">
                "My grandfather used to say that a watch doesn't just tell time; 
                it tells the world who you are."
              </p>
              <p className="font-label-caps text-label-caps text-primary mt-4">
                — MARC AURELIAN, CEO
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}