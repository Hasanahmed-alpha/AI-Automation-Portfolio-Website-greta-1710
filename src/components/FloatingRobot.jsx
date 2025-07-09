import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCpu } = FiIcons;

const FloatingRobot = () => {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40 cursor-pointer"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        className="w-16 h-16 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-full flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: [
            '0 0 20px rgba(0, 255, 255, 0.5)',
            '0 0 30px rgba(0, 255, 255, 0.8)',
            '0 0 20px rgba(0, 255, 255, 0.5)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <SafeIcon icon={FiCpu} className="w-8 h-8 text-dark-bg" />
        </motion.div>
      </motion.div>
      
      <motion.div
        className="absolute -top-12 -left-8 bg-dark-card border border-neon-cyan/30 rounded-lg px-3 py-1 text-sm text-neon-cyan whitespace-nowrap"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        AI Assistant
      </motion.div>
    </motion.div>
  );
};

export default FloatingRobot;