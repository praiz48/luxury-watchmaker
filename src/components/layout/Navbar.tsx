import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on window resize (if switching to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handlePrivateViewing = () => {
    navigate('/private-viewing');
  };

  const navLinks = [
    { to: '/heritage', label: 'Heritage' },
    { to: '/collection', label: 'Timepieces' },
    { to: '/about', label: 'About' },
    { to: '/bespoke', label: 'Bespoke' },
  ];

  // Check if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <motion.header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 flex justify-between items-center px-margin-desktop py-6 ${
          scrolled ? 'bg-surface/90 backdrop-blur-md' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <Link to="/" className="font-display-lg text-headline-md tracking-widest text-primary z-50">
          AURELIAN
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-gutter items-center">
          {navLinks.map((link) => {
            const active = isActive(link.to);
            return (
              <Link 
                key={link.label}
                to={link.to} 
                className={`font-label-caps text-label-caps transition-colors duration-300 relative ${
                  active 
                    ? 'text-primary border-b border-primary pb-1' 
                    : 'text-on-surface hover:text-primary'
                }`}
              >
                {link.label}
                {active && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                    layoutId="activeNavIndicator"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-6 z-50">
          <button 
            onClick={handlePrivateViewing} 
            className={`hidden md:block font-label-caps text-label-caps px-6 py-2 transition-all duration-500 uppercase tracking-widest ${
              location.pathname === '/private-viewing'
                ? 'bg-primary text-on-primary'
                : 'border border-primary text-primary hover:bg-primary hover:text-on-primary'
            }`}
          >
            Private Viewing
          </button>
          
          {/* Hamburger Menu Button */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span 
              className="block w-6 h-0.5 bg-primary transition-all duration-300"
              animate={isMobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            />
            <motion.span 
              className="block w-6 h-0.5 bg-primary transition-all duration-300"
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span 
              className="block w-6 h-0.5 bg-primary transition-all duration-300"
              animate={isMobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-12 px-8">
              {/* Mobile Navigation Links */}
              <motion.div 
                className="flex flex-col items-center gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {navLinks.map((link, index) => {
                  const active = isActive(link.to);
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <Link 
                        to={link.to} 
                        className={`font-serif text-4xl transition-colors duration-300 ${
                          active 
                            ? 'text-primary' 
                            : 'text-on-surface hover:text-primary'
                        }`}
                        onClick={handleLinkClick}
                      >
                        {link.label}
                        {active && (
                          <motion.span 
                            className="block w-full h-0.5 bg-primary mt-2 mx-auto"
                            layoutId="mobileActiveIndicator"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Mobile CTA Button */}
              <motion.button 
                className={`font-label-caps text-label-caps px-8 py-4 transition-all duration-500 uppercase tracking-widest ${
                  location.pathname === '/private-viewing'
                    ? 'bg-primary text-on-primary'
                    : 'border border-primary text-primary hover:bg-primary hover:text-on-primary'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => {
                  handleLinkClick();
                  handlePrivateViewing();
                }}
              >
                Private Viewing
              </motion.button>

              {/* Social/Footer Icons */}
              <motion.div 
                className="flex gap-6 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                  public
                </span>
                <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                  camera
                </span>
                <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
                  share
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};