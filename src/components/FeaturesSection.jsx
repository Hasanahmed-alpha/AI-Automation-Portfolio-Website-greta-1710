import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiLink, FiBrain, FiDollarSign, FiTrendingUp, FiShield } = FiIcons;

const FeaturesSection = () => {
  const features = [
    {
      icon: FiClock,
      title: '24/7 Availability',
      description: 'Works round the clock, no human intervention needed',
      color: 'text-green-400'
    },
    {
      icon: FiLink,
      title: 'Seamless Integration',
      description: 'Connects with Meta, WhatsApp API, Gmail, Calendly, Twilio',
      color: 'text-blue-400'
    },
    {
      icon: FiBrain,
      title: 'Smart Learning',
      description: 'Adapts to your business flow for better personalization',
      color: 'text-purple-400'
    },
    {
      icon: FiDollarSign,
      title: 'Cost Reduction',
      description: 'Cuts operational costs by 50-70%',
      color: 'text-yellow-400'
    },
    {
      icon: FiTrendingUp,
      title: 'Real-time Analytics',
      description: 'Live dashboard with comprehensive insights',
      color: 'text-pink-400'
    },
    {
      icon: FiShield,
      title: 'Secure & Scalable',
      description: 'Enterprise-grade security with unlimited scalability',
      color: 'text-cyan-400'
    }
  ];

  return (
    <section className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            <span className="text-neon-cyan">Key Features</span> of My AI Systems
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technology that transforms how businesses operate
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-dark-card border border-dark-border rounded-xl p-6 hover:border-neon-cyan/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-dark-bg rounded-lg">
                  <SafeIcon icon={feature.icon} className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-4 h-1 bg-dark-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-cyan to-neon-blue"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;