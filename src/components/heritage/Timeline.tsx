import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef, useState, useEffect } from 'react';

const timelineItems = [
  {
    year: '1912',
    title: 'The Obsidian Dial',
    description: 'The first timepiece to utilize volcanic glass, creating a depth of black never before seen in horology.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCma75YI2PQ15HeyqKO3WK94erlNKjFPXxoN4jDC5kHYrptBOrrLyMzof7Y7qZFbC-ApjwBt7eNoNJq212AdJi8U20vaRYAcQTnG_v70W5Y4KKpsqxhd-BmvV02tKxUMPfjbIGjtFFqDLfZ-7KMIzPbSEY9UP-pvxpCX4QYNNpVuDXDj8y2j30IIW4-kwEFl2R_CrLqPsypy9nkuSE1IB5ZFqiINrFHzs4fF9JY0fQFaKcgYoT5HnBCB7UtGijPcvmbvhHglETCSEE',
    delay: 0.1,
  },
  {
    year: '1948',
    title: 'Chronos V',
    description: 'A post-war masterpiece of utility and elegance, adopted by explorers and diplomats alike.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzSdB2wf1sJi80wGhmp-pfsmoGGb0vrO1qCviSJVJ3Fnesnf2fhKvMzHlXhA6uNHX1ZNxbiX_578SVLpfeQoPAyTxkNtjRXNQpqouHPuAYsXRE7fHUYdyjblWMhu3j5hD_LezhQO7xPKaDc6-SruBoke0t2TYVEjq3PUtdK74ZQK0wP0OlhdZJLbhXb1tHTSOwON_8BmyR3i-uY3DkMJup2IKfZe988lCGcD2kqRwtvOE3XdpfRMiatuYos7R1kFyOhX6HUqIPbd0',
    delay: 0.2,
  },
  {
    year: '1985',
    title: 'The Aurelian Moon',
    description: 'Introduction of the perpetual calendar moon phase, accurate for a thousand years.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD457VEhMJxuc-WvP5dUSi3IjFyQ_eZrbsN3LA9ROiYDayCSv5FaJQ6GCdnL49l4l3dgd2f9KgZ82kTauaSFfCIfuw7K_0-6-QwU0A0fIsmWRA-2_xFCBoinGJClns3T2shWvoHLqMXENobdXyga2OOaKJKY69NzunAYQInp8FNVG4gsM-8TzcLzBHjODBUpm5EzrcLjqcRv1zwv12H2_wfKg2zepQ1TNjs8Kur7vUWe-rFWzBNsMA-ZGakLmkf2_DT6ITQan23YSU',
    delay: 0.3,
  },
  {
    year: '2024',
    title: 'The Singularity',
    description: 'Our thinnest calibre to date, pushing the boundaries of material science and traditional craft.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWbCg2SA1wCv80eXe6x3wp5rRENzXf8aSXgx948dzQ8zQaLA_uVupy4_YJV86FKd0FwKfO3ga98bpKXEwNl25wzYqCwxHwUQCd56BUyCgT4dX3LeD8YF8hk-6PJ9xGj5_Xdi1V9zycX9mWgTO_b3J2joyV7Pth9HfZ4dIELc-9aHHS4UfxoTjMaJ_ipN9-TieScCfKvn8IIqH6Bz9mHtnmtrTrJBT4u6oN7ttKhJ7XYYo9T0eEYoq4vlenvbyh11PY6ApKJ4y-cGM',
    delay: 0.4,
  },
];

export default function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Horizontal scroll with mouse drag
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const handleMouseDown = (e: MouseEvent) => {
      setIsDown(true);
      setStartX(e.pageX - slider.offsetLeft);
      setScrollLeft(slider.scrollLeft);
    };

    const handleMouseLeave = () => {
      setIsDown(false);
    };

    const handleMouseUp = () => {
      setIsDown(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDown, startX, scrollLeft]);

  return (
    <section className="py-[160px] bg-[#0e0e0e]">
      {/* Header */}
      <motion.div 
        className="px-6 md:px-[80px] mb-24"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.3em] text-[#f2ca50] mb-4 uppercase">
          THE EVOLUTION
        </h2>
        <h3 className="font-['Bodoni_Moda'] text-[48px] leading-[56px] tracking-[0.05em] text-[#e4e2e1] font-normal">
          Milestones of Mastery
        </h3>
      </motion.div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-12 px-6 md:px-[80px] pb-12 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {timelineItems.map((item, index) => (
          <motion.div 
            key={index}
            className="min-w-[300px] md:min-w-[450px] flex-shrink-0"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: item.delay }}
          >
            <div className="aspect-[3/4] mb-8 overflow-hidden bg-[#1b1c1c]">
              <img 
                className="w-full h-full object-cover grayscale hover:scale-110 transition-transform duration-700" 
                src={item.image}
                alt={item.title}
              />
            </div>
            <span className="font-['Hanken_Grotesk'] text-[12px] font-semibold tracking-[0.2em] text-[#f2ca50] block mb-2 uppercase">
              {item.year}
            </span>
            <h4 className="font-['Bodoni_Moda'] text-[32px] leading-[40px] tracking-[0.05em] text-[#e4e2e1] mb-4 font-normal">
              {item.title}
            </h4>
            <p className="font-['Hanken_Grotesk'] text-[16px] leading-[24px] tracking-[0.01em] text-[#d0c5af]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}