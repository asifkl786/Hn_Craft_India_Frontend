import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg py-2'
            : 'bg-white/95 backdrop-blur-sm py-3'
        }`}
      >
        <div className="container-page flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-brick-700 rounded-xl flex items-center justify-center text-white font-heading font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              HCI
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-slate-900 text-base leading-tight">
                HN CRAFT INDIA
              </span>
              <span className="text-xs font-body text-brick-600 font-medium">
                @hncraftindia
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-brick-700 bg-brick-50'
                    : 'text-slate-600 hover:text-brick-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary text-sm ml-2 !py-2 !px-4">
              Get a Quote
            </Link>
          </div>

          <button
            className="lg:hidden text-3xl text-slate-800 p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <span className="font-heading font-bold text-slate-900">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl text-slate-600"
                aria-label="Close menu"
              >
                <HiX />
              </button>
            </div>
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    location.pathname === link.path
                      ? 'text-brick-700 bg-brick-50'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary mt-3 w-full">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
