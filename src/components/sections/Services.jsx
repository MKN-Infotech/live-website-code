// File: src/components/sections/Services.jsx

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
      icon: <PaintBrushIcon className="h-10 w-10" />,
      title: "Web & Application Development",
      description: "Custom websites and apps built to power your business and engage your users across all platforms.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <ChartBarIcon className="h-10 w-10" />,
      title: "Cloud Solutions",
      description: "Scalable cloud services to boost flexibility, reduce costs, and support your digital transformation.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <RocketLaunchIcon className="h-10 w-10" />,
      title: "Cybersecurity & Compliance",
      description: "Protect your data and ensure compliance with tailored security strategies and proactive monitoring.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <LightBulbIcon className="h-10 w-10" />,
      title: "DevOps & Automation",
      description: "Accelerate delivery and improve efficiency with smart automation and streamlined DevOps practices.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <MegaphoneIcon className="h-10 w-10" />,
      title: "IT Infrastructure & Support Services",
      description: "Reliable infrastructure and responsive support to keep your systems running smoothly every day.",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: <CogIcon className="h-10 w-10" />,
      title: "Networking & Systems Integration",
      description: "Seamless network solutions and system integrations that connect your entire business securely.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-lg font-medium">~ Our Awesome Services ~</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3 mb-4">
            We are dedicated to serve you all time
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From startup MVPs to enterprise-grade systems, our solutions scale with your ambition and are backed by a team you can trust.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white border border-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Icon Container */}
              <div
                className={`inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 transition-transform transform group-hover:scale-110`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-5">{service.description}</p>

              {/* Learn More */}
              <div className="flex items-center text-blue-600 font-medium cursor-pointer group-hover:text-blue-700 transition-all">
                <span className="mr-2">Learn More</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Hover Background Effect */}
              <div
                className={`absolute inset-0 z-[-1] bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4 text-lg">Need a tailored solution built for your business?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
            Get a Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
