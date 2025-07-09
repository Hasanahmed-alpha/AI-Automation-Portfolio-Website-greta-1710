import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiHome, FiTruck, FiActivity, FiUser } = FiIcons;

const ServicesGrid = () => {
  const services = [
    {
      icon: FiHeart,
      title: 'Dental Clinics',
      emoji: '🦷',
      features: [
        'AI appointment scheduler',
        'Voice & WhatsApp reminders',
        '24/7 chatbot assistant',
        'Paperless CRM recordkeeping'
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: FiHome,
      title: 'Real Estate Agencies',
      emoji: '🏡',
      features: [
        'WhatsApp bot for property info',
        'AI agent to qualify and call leads',
        'CRM dashboard for inventory',
        'Facebook/Instagram automation'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiTruck,
      title: 'Automotive Dealerships',
      emoji: '🚘',
      features: [
        'Lead tracking CRM',
        'Automated vehicle inquiry replies',
        'WhatsApp test drive scheduling',
        'Call agent for customer support'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FiActivity,
      title: 'Hospitals & Clinics',
      emoji: '🏥',
      features: [
        'Multilingual voice assistant',
        'Doctor availability management',
        'Appointment confirmations',
        'SMS/WhatsApp integration'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiUser,
      title: 'CEOs & Founders',
      emoji: '👨‍💼',
      features: [
        'AI Personal Assistant',
        'Email automation',
        'Calendar scheduling',
        'Meeting summaries & lead responses'
      ],
      color: 'from-purple-500 to-indigo-500'
    }
  ];

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
            <span className="text-neon-cyan">Industries</span> I Work With
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized AI automation solutions tailored for different business sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-dark-card border border-dark-border rounded-xl p-6 hover:border-neon-cyan/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                  <SafeIcon icon={service.icon} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <span className="text-2xl">{service.emoji}</span>
                </div>
              </div>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 to-neon-blue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;