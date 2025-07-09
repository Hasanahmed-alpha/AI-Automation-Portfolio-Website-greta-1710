import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiCalendar, FiArrowRight } = FiIcons;

const ContactSection = () => {
  return (
    <section className="py-20 bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            <span className="text-neon-cyan">Let's Build</span> Your AI Future
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI automation? Let's discuss your project.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg">
                  <SafeIcon icon={FiMail} className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white font-semibold">hasanahmedah5@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg">
                  <SafeIcon icon={FiPhone} className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white font-semibold">0324 8338652</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg">
                  <SafeIcon icon={FiMapPin} className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white font-semibold">Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            <motion.button
              className="group w-full bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-bg px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <SafeIcon icon={FiCalendar} className="w-5 h-5" />
              <span>Schedule a Free Demo</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;