// File: src/pages/Home.jsx

import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Stats from '../components/sections/Stats';
import PricingPlans from '../components/sections/PricingPlans';
import Testimonials from '../components/sections/Testimonials';
import BlogSection from '../components/sections/BlogSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Stats />

      {/* <PricingPlans /> */}

      <Testimonials />

      {/* <BlogSection /> */}
    </div>
  );
};

export default Home;
