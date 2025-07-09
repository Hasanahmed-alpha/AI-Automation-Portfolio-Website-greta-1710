import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiCalendar, FiArrowRight, FiSend } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-space mb-6">
              <span className="text-neon-cyan">Get In</span> Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with AI automation? Let's discuss your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-dark-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-dark-card border border-dark-border rounded-xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:border-neon-cyan focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-bg px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SafeIcon icon={FiSend} className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-dark-card border border-dark-border rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
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
              </div>

              <motion.button
                className="w-full bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-bg px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                <span>Schedule a Free Demo</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </motion.button>

              <div className="bg-dark-card border border-dark-border rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Response Time</h3>
                <p className="text-gray-300">
                  I typically respond to inquiries within 2-4 hours during business hours. 
                  For urgent matters, please call directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;