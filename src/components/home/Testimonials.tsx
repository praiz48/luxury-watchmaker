import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "SIR ARTHUR WHITTAKER",
      text: "An Aurelian timepiece is more than an accessory; it's a silent partner in every major decision I've made over the last decade.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBvOV_1Fq6mAn0rs-lkZZh-gyH_5Ww4QqKkdC-W1amt-tlhHWvwSb8izKt796pbWg1nrX0viXxlfMnPGvoNw8l9CHql0Y3Z3Ci53rgqjbeVbczSZMVkicbJ57Bv8Bi9Hvf3I7f_Ei6FFlEnTAjn7WVJt1e-TtXFntVQzusX9ylcOTDfpieSlxUapCvmgX-zEY6EGNX0oacSXr9F58nheGga61yQ7O4HZKpYoZ2gC_t4e3xfEeNIaadgW2P_wlkv0SSxGsX350nHbQ",
      delay: 0.1
    },
    {
      name: "ELENA COVINGTON",
      text: "The craftsmanship is unparalleled. I've seen many 'luxury' brands, but none capture the soul of Geneva like Aurelian.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEZi-R7ghifCNpBHmoC4h4OVgqhnumLnmOxrG4yizcmHvmCliW5XSLa1ZfSsPh7hJq63AY8D2g7FzPru33k3GgjlJiyl_i3fLHkDOix3PWvYgXwwMyAOFNDchwZd2_2CkLpwKc8hxbYy0t27WrAKfx3Vil8ldqzKyoyiOsKj-HpRHdxVgPjmlUtYsRq_V05BEYoW5_IpTdf8fSIChm2MGVitr2sWLmqkzBLV-rywrrt33jtize4u2Zv_B-FdPFc1RoLOYKFUPFSqQ",
      delay: 0.2
    },
    {
      name: "JULIAN VANCE",
      text: "As an architect, I value the structural integrity. Aurelian watches are a masterclass in functional art.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYwiyEqIIdjI9WLQd5wbo3IHSFdi8NVK2ub351aZy4J10itREQ6eYrvKT7mLTH-hFJ3p1dfGaNhSD4YbohSWam880rpo1QwnCBKMNEAEMe8cEf7axXRnR32hfF2uvLc7Z8FVEovXMF46eETyVbYwrAJCGY9a0_B1qbQGAlgd-GbUzxjWDAX6dD27O8S2Xa_R9r-26OkMc_SGpjkFq-ThtftnW5mDNuc7PHSyXRx44D9L_LbbvY2zY-87qvUk6RSnAx_ldxlIAxNoA",
      delay: 0.3
    }
  ];

  return (
    <section className="py-section-gap bg-surface-container-low px-margin-desktop">
      <motion.div 
        className="text-center mb-24"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <span className="font-label-caps text-label-caps text-primary mb-2 block">
          THE AURELIAN CIRCLE
        </span>
        <h2 className="font-headline-lg text-headline-lg">VOICES OF DISTINCTION</h2>
      </motion.div>

      <div ref={ref} className="grid md:grid-cols-3 gap-12">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: testimonial.delay }}
          >
            <motion.div 
              className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-8 grayscale hover:grayscale-0 transition-all duration-700"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                className="w-full h-full object-cover" 
                src={testimonial.image}
                alt={testimonial.name}
              />
            </motion.div>
            <p className="font-body-md text-on-surface-variant italic mb-6">
              "{testimonial.text}"
            </p>
            <h5 className="font-label-caps text-label-caps text-primary">
              {testimonial.name}
            </h5>
          </motion.div>
        ))}
      </div>
    </section>
  );
}