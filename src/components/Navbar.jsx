import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiCpu, FiHome, FiUser, FiSettings, FiMail } = FiIcons;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: FiHome },
    { name: 'About', path: '/about', icon: FiUser },
    { name: 'Services', path: '/services', icon: FiSettings },
    { name: 'Contact', path: '/contact', icon: FiMail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="text-neon-cyan"
            >
              <SafeIcon icon={FiCpu} className="w-8 h-8" />
            </motion.div>
            <span className="text-xl font-bold font-space text-neon-cyan">
              Hasan Ahmed
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-neon-cyan border border-neon-cyan/30 bg-neon-cyan/10'
                    : 'text-gray-300 hover:text-neon-cyan hover:bg-neon-cyan/5'
                }`}
              >
                <SafeIcon icon={item.icon} className="w-4 h-4" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-neon-cyan"
          >
            <SafeIcon icon={isOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-dark-card/90 backdrop-blur-md border border-dark-border rounded-lg mt-2 mb-4"
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-neon-cyan border border-neon-cyan/30 bg-neon-cyan/10'
                      : 'text-gray-300 hover:text-neon-cyan hover:bg-neon-cyan/5'
                  }`}
                >
                  <SafeIcon icon={item.icon} className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;