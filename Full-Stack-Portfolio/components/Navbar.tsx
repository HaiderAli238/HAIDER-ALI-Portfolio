"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Sun aur Moon icon yahan se hata diye
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll effect ko handle karne ke liye
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      scrolled ? 'bg-[#020617]/80 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="text-3xl font-black tracking-tighter cursor-pointer group">
          <span className="text-white drop-shadow-[0_0_10px_#00f2ff]">HAIDER ALI</span>
        </div>

        {/* Desktop Links - Yahan se Theme Button hata diya hai */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-bold text-gray-300 hover:text-[#00f2ff] relative group transition-colors duration-300"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00f2ff] shadow-[0_0_10px_#00f2ff] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
           <button onClick={() => setIsOpen(!isOpen)} className="text-[#00f2ff]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-[#020617] border-b border-[#00f2ff]/20 py-6 md:hidden flex flex-col items-center gap-6"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-gray-300 hover:text-[#00f2ff]"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;