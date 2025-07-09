import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiCalendar } = FiIcons;

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Grid */}
      <div className="absolute inset-0 tech-grid opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold font-space leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-white">Crafting Custom </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple animate-glow">
              AI CRM Systems
            </span>
            <span className="text-white"> & Automation</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform Global Businesses with futuristic systems that reduce cost, save time, and scale success across the world.
          </motion.p>

          {/* Features */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-sm md:text-base"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {['Voice AI', 'WhatsApp Automation', '24/7 AI Assistants', 'CRM Systems'].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-neon-cyan">
                <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="group bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-bg px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiCalendar} className="w-5 h-5" />
              <span>Schedule Free Demo</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Global Experience */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-gray-400 text-sm mb-4">Global Experience</p>
            <div className="flex justify-center space-x-8 text-2xl">
              <span>🇦🇪 UAE</span>
              <span>🇶🇦 QATAR</span>
              <span>🇮🇪 IRELAND</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 border-2 border-neon-cyan rounded-full opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-16 h-16 border-2 border-neon-blue rounded-full opacity-30"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};

export default HeroSection;