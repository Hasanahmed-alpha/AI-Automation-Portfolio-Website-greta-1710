import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCode, FiCpu, FiZap, FiGlobe, FiAward, FiUsers } = FiIcons;

const About = () => {
  const skills = [
    { name: 'AI Automation', level: 95, icon: FiCpu },
    { name: 'CRM Development', level: 90, icon: FiCode },
    { name: 'No-code/Low-code', level: 88, icon: FiZap },
    { name: 'WhatsApp API', level: 92, icon: FiUsers },
    { name: 'Voice AI (Vapi)', level: 85, icon: FiGlobe },
    { name: 'Twilio Integration', level: 87, icon: FiAward }
  ];

  const achievements = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3', label: 'Countries Served' },
    { number: '70%', label: 'Average Cost Reduction' },
    { number: '24/7', label: 'System Availability' }
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
              <span className="text-neon-cyan">About</span> Hasan Ahmed
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI Automation Developer & CRM System Architect transforming businesses globally
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-dark-card border border-dark-border rounded-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">My Expertise</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full" />
                    <span className="text-gray-300">AI Automation Developer</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full" />
                    <span className="text-gray-300">CRM System Architect</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full" />
                    <span className="text-gray-300">No-code & Low-code Specialist</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full" />
                    <span className="text-gray-300">24/7 AI Assistant Creator</span>
                  </div>
                </div>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Global Impact</h3>
                <p className="text-gray-300 leading-relaxed">
                  Successfully delivered AI automation projects across UAE, Qatar, and Ireland, 
                  helping businesses reduce costs by 50-70% while improving efficiency and customer satisfaction.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-dark-card border border-dark-border rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <SafeIcon icon={skill.icon} className="w-5 h-5 text-neon-cyan" />
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <span className="text-neon-cyan font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-dark-border rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-neon-cyan to-neon-blue h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-dark-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
              <span className="text-neon-cyan">Achievements</span> & Impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-neon-cyan/50 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-neon-cyan mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {achievement.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;