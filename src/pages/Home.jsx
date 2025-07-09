import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesGrid from '../components/ServicesGrid';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSlider from '../components/TestimonialsSlider';
import ContactSection from '../components/ContactSection';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
  return (
    <div className="relative">
      <AnimatedBackground />
      <HeroSection />
      <ServicesGrid />
      <FeaturesSection />
      <TestimonialsSlider />
      <ContactSection />
    </div>
  );
};

export default Home;