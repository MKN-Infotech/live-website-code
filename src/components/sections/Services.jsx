// File: src/components/sections/Services.jsx
// Services section component - place this in src/components/sections/Services.jsx

import React from 'react';
import { 
  PaintBrushIcon, 
  ChartBarIcon, 
  RocketLaunchIcon, 
  LightBulbIcon, 
  MegaphoneIcon,
  CogIcon 
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      icon: <PaintBrushIcon className="h-12 w-12" />,
      title: "UI/UX Design",
      description: "We're wildly passionate about our purpose, and it has us transforming everything we touch into beautiful, functional designs.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <ChartBarIcon className="h-12 w-12" />,
      title: "Business Planning",
      description: "Our customers get solutions and business opportunities instead of just projects. Strategic planning for sustainable growth.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <RocketLaunchIcon className="h-12 w-12" />,
      title: "Project Management",
      description: "Our global community of about 5,000 people can be found working from corporate offices to deliver exceptional results.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <LightBulbIcon className="h-12 w-12" />,
      title: "Internet Thinking",
      description: "We're so excited about our new Learning & Development programs where people can grow and innovate together.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <MegaphoneIcon className="h-12 w-12" />,
      title: "Digital Marketing",
      description: "From the basics, including health and life insurance, to retirement and savings plans - we cover all digital marketing needs.",
      color: "from-pink-500 to-red-600"
    },
    {
      icon: <CogIcon className="h-12 w-12" />,
      title: "IT Consulting",
      description: "Expert consultation services to help you make informed decisions about your technology infrastructure and digital strategy.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">~ Our Awesome Services ~</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-4">
            We are dedicated to serve you all time
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our comprehensive range of IT services is designed to meet all your business technology needs, 
            from design and development to maintenance and support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Read More Link */}
              <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                <span className="mr-2">Learn More</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Hover Effect Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Need a custom solution for your business?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;