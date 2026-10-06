import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Layanan', path: '/services' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Kontak', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-white/50 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <img
                src="https://horizons-cdn.hostinger.com/530dec68-53d3-43a7-8160-ab092245e48f/f30b6c5684cab5d157a48caf3b912ab2.png"
                alt="Leryn Pest Control Logo"
                className="h-14 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-gray-900 leading-none block">Leryn Pest Control</span>
                <p className="text-xs text-green-600 font-semibold mt-1">Indonesia</p>
              </div>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  (location.pathname.startsWith(link.path) && link.path !== '/') || location.pathname === link.path
                    ? 'text-green-600'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href="https://wa.me/6281267887788" target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 hover:bg-green-700 text-white border-none">
                <Phone className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Button>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium transition-colors hover:text-green-600 ${
                    (location.pathname.startsWith(link.path) && link.path !== '/') || location.pathname === link.path
                      ? 'text-green-600'
                      : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <a href="https://wa.me/6281267887788" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Hubungi Kami
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;