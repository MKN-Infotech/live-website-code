// File: src/pages/Home.jsx

import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Stats from '../components/sections/Stats';
import Testimonials from '../components/sections/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
	  
      {/* <Portfolio /> */}

      <WhyChooseUs />
      <Stats />

      {/* <PricingPlans /> */}

Anuj

      <Testimonials />

      {/* <BlogSection /> */}
    </div>
  );
};

export default Home;
