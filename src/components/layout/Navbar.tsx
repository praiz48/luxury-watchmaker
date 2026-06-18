import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 flex justify-between items-center px-margin-desktop py-6 w-full ${
        scrolled ? 'bg-surface/90 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link to="/" className="font-display-lg text-headline-md tracking-widest text-primary">
        AURELIAN
      </Link>
      
      <nav className="hidden md:flex gap-gutter items-center">
        <Link to="/heritage" className="font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors duration-300">
          Heritage
        </Link>
        <Link to="/collection" className="font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors duration-300">
          Timepieces
        </Link>
        <a href="#" className="font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors duration-300">
          Fine Jewelry
        </a>
        <a href="#" className="font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors duration-300">
          Bespoke
        </a>
      </nav>

      <div className="flex items-center gap-6">
        <button className="font-label-caps text-label-caps text-primary border border-primary px-6 py-2 hover:bg-primary hover:text-on-primary transition-all duration-500 uppercase tracking-widest">
          Private Viewing
        </button>
        <span className="material-symbols-outlined text-primary cursor-pointer">
          menu
        </span>
      </div>
    </motion.header>
  );
};