import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import logo from '../assets/logo.jpeg';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Diagnostics', href: '/diagnostic' },
    { name: 'VR Therapy', href: '/therapy' },
    { name: 'Attention Lab', href: '/attention-lab' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Research', href: '/research' },
    { name: 'Contact', href: '/contact' },
    { name: 'Reports', href: '/reports' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-slate-900/20 border-b border-white/20 shadow-2xl'
          : 'backdrop-blur-md bg-slate-900/10 border-b border-white/10'
      }`}
      style={{
        background: scrolled 
          ? 'rgba(15, 23, 42, 0.1)' 
          : 'rgba(15, 23, 42, 0.05)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(12px)',
        boxShadow: scrolled ? '0 8px 32px rgba(20, 184, 166, 0.1)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between gap-8">
          
          {/* Logo with Glass Effect */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0 group">
            <div className="relative">
              <img
                src={logo}
                alt="Mindpal Logo"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-teal-400/50 group-hover:ring-teal-400/80 transition-all duration-300 hover:scale-110"
                draggable={false}
              />
              <div 
                className="absolute inset-0 rounded-full blur-sm opacity-30 group-hover:opacity-60 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.3), rgba(8, 145, 178, 0.3))'
                }}
              />
            </div>
            <span className="font-bold text-xl text-white group-hover:text-teal-200 transition-colors duration-300">
              Mindpal
            </span>
          </Link>

          {/* Desktop Navigation with Glass Pills */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div 
              className="flex space-x-1 p-1 rounded-full border transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderColor: 'rgba(255, 255, 255, 0.1)'
              }}
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 ${
                    location.pathname === item.href
                      ? 'text-white shadow-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  style={{
                    background: location.pathname === item.href 
                      ? 'linear-gradient(135deg, rgba(20, 184, 166, 0.8), rgba(8, 145, 178, 0.8))'
                      : 'transparent',
                    boxShadow: location.pathname === item.href 
                      ? '0 4px 15px rgba(20, 184, 166, 0.3)' 
                      : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== item.href) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== item.href) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* HIPAA Badge & CTA with Glass Effect */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            
            
            <Link
              to="/contact"
              className="relative px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #14b8a6, #0891b2)',
                boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(20, 184, 166, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(20, 184, 166, 0.3)';
              }}
            >
              <span className="relative z-10">Book Demo</span>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(90deg, transparent, white, transparent)'
                }}
              />
            </Link>
          </div>

          {/* Mobile menu button with Glass Effect */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 border"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderColor: 'rgba(255, 255, 255, 0.1)'
            }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation with Enhanced Glass Effect */}
      {isMenuOpen && (
        <div 
          className="md:hidden border-t overflow-hidden"
          style={{
            background: 'rgba(15, 23, 42, 0.15)',
            backdropFilter: 'blur(20px)',
            borderColor: 'rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="px-4 py-6 space-y-2">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 hover:scale-102 ${
                  location.pathname === item.href
                    ? 'text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
                style={{
                  background: location.pathname === item.href 
                    ? 'linear-gradient(135deg, rgba(20, 184, 166, 0.6), rgba(8, 145, 178, 0.6))'
                    : 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  animationDelay: `${index * 0.1}s`
                }}
                onMouseEnter={(e) => {
                  if (location.pathname !== item.href) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== item.href) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-3 rounded-xl text-center font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #14b8a6, #0891b2)',
                  boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3)'
                }}
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};