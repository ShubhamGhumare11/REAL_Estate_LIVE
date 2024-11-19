import React from 'react';
import { Container } from '@chakra-ui/react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import AboutUsSection from './AboutUsSection';
import Clients from './Clients';
import StatsSection from './StatsSection';
import Services from './Services';
import FindLocation from './FindLocation';

const HomePage = () => {
  return (
    <section  style={{marginTop: '6px'}}>
      {/* Hero Section */}
      <HeroSection />

      {/* StatsSection */}
      <StatsSection/>

      {/* Features Section */}
      <FeaturesSection />

      {/* Services */}
      <Services/>

      {/* About Us Section */}
      <AboutUsSection />

      {/* Location */}

      <FindLocation/>


      {/* Contact Section */}
      <Clients />
    </section>
  );
};

export default HomePage;
