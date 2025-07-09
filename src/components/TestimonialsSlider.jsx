import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiChevronLeft, FiChevronRight } = FiIcons;

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Dr. Sarah Al-Mahmoud",
      role: "Dental Clinic Owner",
      location: "Dubai, UAE 🇦🇪",
      content: "Hasan's AI system transformed our clinic operations. We reduced appointment no-shows by 80% and our staff can now focus on patient care instead of scheduling.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ahmed Al-Thani",
      role: "Real Estate Developer",
      location: "Doha, Qatar 🇶🇦",
      content: "The WhatsApp automation system increased our lead conversion by 70%. Clients get instant responses 24/7, and our sales team became 3x more efficient.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael O'Connor",
      role: "Tech Startup CEO",
      location: "Dublin, Ireland 🇮🇪",
      content: "Hasan's AI assistant handles all my scheduling and email management. It's like having a full-time personal assistant that never sleeps. Game changer!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Fatima Al-Zahra",
      role: "Automotive Showroom Manager",
      location: "Abu Dhabi, UAE 🇦🇪",
      content: "Our test drive bookings increased by 150% after implementing the AI system. Customers love the instant WhatsApp responses and automated follow-ups.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            <span className="text-neon-cyan">Client</span> Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming businesses across UAE, Qatar, and Ireland
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-dark-card border border-dark-border rounded-2xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full border-2 border-neon-cyan object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start space-x-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl text-gray-300 mb-6 italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-white text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-neon-cyan">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-dark-card border border-dark-border rounded-full p-3 text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300"
          >
            <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark-card border border-dark-border rounded-full p-3 text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300"
          >
            <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-neon-cyan'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;