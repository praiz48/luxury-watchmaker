import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function DesignMaterials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  return (
    <section ref={ref} className="py-[160px] px-[80px] max-md:px-6 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] items-center">
        {/* Left Column */}
        <div className="space-y-12">
          <motion.div 
            className="reveal-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] mb-4 block uppercase">
              PHASE I: ORIGIN
            </span>
            <h2 className="font-['Bodoni_Moda'] text-[32px] md:text-[48px] leading-[38px] md:leading-[56px] tracking-[0.05em] text-[#e4e2e1] mb-8 font-normal">
              Purity in Alchemy
            </h2>
            <p className="font-['Hanken_Grotesk'] text-[18px] font-light leading-[28px] tracking-[0.01em] text-[#d0c5af] max-w-md">
              Our proprietary gold alloy is smelted at 1,064°C, creating a luster that defies the passage of centuries.
            </p>
          </motion.div>

          <motion.div 
            className="relative group overflow-hidden"
            style={{ boxShadow: '0 0 50px rgba(242, 202, 80, 0.05)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhaR6JB3N61gWXvAlzbtSFV19fS9_jqTJh8w_c4nuodqrX30axxxz6NAnLUMxQsbQirUFfrxqbaR56L7JF_8ibYfkinLW3QVAQTzoWsHjQ54xttODAPnAVpy4bzARccLMQPbjgdchNUwuwrrU7U87Ssmad7EsD6MOrgWXz1Dea_f4d4TIrPVhR7nkYYBF5ZWEUxwUUcKmMR0za9VVTz0bpDSuQpujPBY23nIqAfTw8zsglC2arKNm5s5uzfdSmCBW7tPsmnigYXbM"
              alt="Molten gold being poured"
            />
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-12 md:mt-40">
          <motion.div 
            className="relative group overflow-hidden"
            style={{ boxShadow: '0 0 50px rgba(242, 202, 80, 0.05)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img 
              className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCjhI0bT2tQ4mQy3XCZxSxfkv_kPtq20f-b1o8ZTznIqldg6rwvTVDx8fwtJ8e5wLLuXZxynR9I7n1Id1qkTwF7baKLVJjaUyKiUy1S8xBrou3WNdC4MJwrTx5EP-PETIa40xP8Y5hzyC3XIcvT4Feg9CUKWXsnjHQfOlHypZTG8lyIJ_DSKhdRVcupIYt4fq7www7Ea8u9RXUF3wL_coz71BwnW4JDOryfZFZZwHIJJTtPQm15upnjaOb501ENzvShCh1U39s2eg"
              alt="Watch design sketch"
            />
          </motion.div>
          <motion.p 
            className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af] max-w-sm italic ml-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            "Every line is a promise. Every curve is a testament to the pursuit of perfection."
          </motion.p>
        </div>
      </div>
    </section>
  );
}