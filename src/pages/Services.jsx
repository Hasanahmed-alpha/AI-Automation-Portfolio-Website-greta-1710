import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiArrowRight } = FiIcons;

const Services = () => {
  const serviceCategories = [
    {
      title: 'AI Voice Assistants',
      description: 'Multilingual voice AI that handles customer calls, appointments, and inquiries',
      features: [
        'Natural conversation flow',
        'Multi-language support',
        'Call routing and transfers',
        'Appointment scheduling',
        'Lead qualification',
        'Customer support automation'
      ]
    },
    {
      title: 'Omnichannel Automation',
      description: 'Complete business automation across all platforms including WhatsApp, Instagram, Facebook, LinkedIn, Gmail',
      features: [
        'WhatsApp Business API setup',
        'Instagram messaging automation',
        'Facebook Messenger integration',
        'LinkedIn outreach automation',
        'Gmail response automation',
        'Multi-channel campaign management'
      ]
    },
    {
      title: 'Custom CRM Systems',
      description: 'Tailored CRM solutions that grow with your business needs',
      features: [
        'Custom dashboard design',
        'Lead management system',
        'Sales pipeline tracking',
        'Customer data management',
        'Reporting and analytics',
        'Third-party integrations'
      ]
    },
    {
      title: 'AI Personal Assistants',
      description: '24/7 AI assistants for executives and business owners',
      features: [
        'Email management',
        'Calendar scheduling',
        'Meeting coordination',
        'Follow-up automation',
        'Task management',
        'Executive reporting'
      ]
    },
    {
      title: 'No-Code Automation',
      description: 'Workflow automation using Make.com, N8N, and other no-code platforms',
      features: [
        'Workflow design and setup',
        'Data synchronization',
        'API integrations',
        'Process automation',
        'Trigger-based actions',
        'Performance monitoring'
      ]
    },
    {
      title: 'Integration Services',
      description: 'Seamless integration with existing business tools and platforms',
      features: [
        'API development',
        'Database connections',
        'Cloud service integration',
        'Legacy system migration',
        'Real-time data sync',
        'Security implementation'
      ]
    }
  ];

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
              <span className="text-neon-cyan">AI Automation</span> Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions to transform your business operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-dark-card border border-dark-border rounded-xl p-8 hover:border-neon-cyan/50 transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-dark-border pt-6">
                  <div className="flex items-center justify-end">
                    <motion.button
                      className="bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan px-4 py-2 rounded-lg hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300 flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Learn More</span>
                      <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
              <span className="text-neon-cyan">Why Choose Me</span> Over an Agency?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Full Ownership',
                description: 'You own everything - your CRM, data & tools'
              },
              {
                title: 'Direct Collaboration',
                description: 'Work directly with me, no middleman delays'
              },
              {
                title: 'Fully Customizable',
                description: 'Tailored solutions specific to your business'
              },
              {
                title: 'Long-term Support',
                description: 'Ongoing optimization and maintenance'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-dark-card border border-dark-border rounded-xl p-6 text-center hover:border-neon-cyan/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;