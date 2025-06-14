// File: src/components/sections/About.jsx
// About section component - place this in src/components/sections/About.jsx

import React from 'react';
import { CheckCircleIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/outline';

const About = () => {
  const features = [
    {
      icon: <ShieldCheckIcon className="h-12 w-12 text-blue-600" />,
      title: "Moneyback Guarantee",
      description: "We stand behind our work with a 100% satisfaction guarantee"
    },
    {
      icon: <ClockIcon className="h-12 w-12 text-blue-600" />,
      title: "24/7 Technical Support",
      description: "Round-the-clock support to keep your business running smoothly"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="text-blue-600 font-semibold text-lg">About Our Company ~</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 leading-tight">
                Choose The Best IT Service Company
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes; that's what they are supposed to do. Many IT firms struggle to provide consistent, reliable service that businesses can depend on.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Points */}
            <div className="space-y-3 mb-8">
              {[
                "Experienced team of certified professionals",
                "Customized solutions for your business needs",
                "Proven track record of successful implementations",
                "Cutting-edge technology and best practices"
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Learn More About Us
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/about-img.jpg"
                alt="About IT Firm"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;