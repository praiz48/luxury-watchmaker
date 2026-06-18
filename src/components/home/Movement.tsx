import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Movement() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative py-section-gap overflow-hidden bg-surface-container-lowest">
      <div className="px-margin-desktop grid lg:grid-cols-2 gap-section-gap items-center relative z-10">
        {/* Content */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="font-label-caps text-label-caps text-primary mb-4 block">
            CALIBER A-940
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8">
            ENGINEERING THE SUBLIME
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <span className="material-symbols-outlined text-primary text-4xl">
                settings_input_component
              </span>
              <div>
                <h4 className="font-label-caps text-label-caps text-on-surface mb-2">
                  TOURBILLON ESCAPEMENT
                </h4>
                <p className="font-body-md text-on-surface-variant">
                  Counteracting gravity's influence through a rotating cage of absolute precision.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <span className="material-symbols-outlined text-primary text-4xl">
                history_edu
              </span>
              <div>
                <h4 className="font-label-caps text-label-caps text-on-surface mb-2">
                  72-HOUR RESERVE
                </h4>
                <p className="font-body-md text-on-surface-variant">
                  Dual-barrel architecture ensuring consistent energy delivery for three full days.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <span className="material-symbols-outlined text-primary text-4xl">
                verified
              </span>
              <div>
                <h4 className="font-label-caps text-label-caps text-on-surface mb-2">
                  HAND-ENGRAVED BRIDGES
                </h4>
                <p className="font-body-md text-on-surface-variant">
                  The signature of a master artist on every microscopic surface.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visual Elements */}
        <motion.div 
          className="relative h-[600px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Decorative Gears */}
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 border border-primary/10 rounded-full opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-10 left-10 w-48 h-48 border border-primary/20 rounded-full opacity-30"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Technical Lines SVG */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
            <line className="text-primary" stroke="currentColor" strokeWidth="0.1" x1="10" x2="90" y1="50" y2="50" />
            <circle className="text-primary" cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeWidth="0.1" />
            <line className="text-primary" stroke="currentColor" strokeWidth="0.1" x1="50" x2="50" y1="10" y2="90" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}