import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.jpeg'; // Adjust path if needed

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Diagnostics', href: '/diagnostic' },
    { name: 'VR Therapy', href: '/therapy' },
    { name: 'Attention Lab', href: '/attention-lab' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Research', href: '/research' },
    { name: 'Contact', href: '/contact' },
    { name: 'Reports', href: '/reports' }, // <-- Make sure this matches the route below
  ];

  return (
    <header className="fixed top-0 w-full bg-neural-900/95 backdrop-blur-md border-b border-neural-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img
              src={logo}
              alt="Mindpal Logo"
              className="h-8 w-8 rounded-full object-cover"
              draggable={false}
            />
            <span className="font-bold text-xl text-white">Mindpal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                  location.pathname === item.href
                    ? 'text-teal-400'
                    : 'text-neural-300 hover:text-white'
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* HIPAA Badge & CTA */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <div className="flex items-center space-x-1 px-2 py-1 bg-neural-800 rounded-full">
              <Shield className="h-3 w-3 text-teal-400" />
              <span className="text-xs text-neural-300">HIPAA Compliant</span>
            </div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-teal-500 to-primary-500 hover:from-teal-600 hover:to-primary-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/25"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neural-400 hover:text-white hover:bg-neural-800 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neural-800 border-t border-neural-700"
          >
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                    location.pathname === item.href
                      ? 'text-teal-400 bg-neural-700'
                      : 'text-neural-300 hover:text-white hover:bg-neural-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-gradient-to-r from-teal-500 to-primary-500 px-4 py-2 rounded-lg text-center font-medium"
                >
                  Book Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};