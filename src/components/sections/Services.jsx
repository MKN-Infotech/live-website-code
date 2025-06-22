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
{
  icon: <GlobeAltIcon className="h-12 w-12" />,  
  title: "Web & Application Development",
  description: "Custom websites and apps built to power your business and engage your users across all platforms.",
  color: "from-blue-500 to-blue-600"
},
{
  icon: <CloudIcon className="h-12 w-12" />,
  title: "Cloud Solutions",
  description: "Scalable cloud services to boost flexibility, reduce costs, and support your digital transformation.",
  color: "from-purple-500 to-purple-600"
},
{
  icon: <ShieldCheckIcon className="h-12 w-12" />,
  title: "Cybersecurity & Compliance",
  description: "Protect your data and ensure compliance with tailored security strategies and proactive monitoring.",
  color: "from-green-500 to-green-600"
},
{
  icon: <WrenchScrewdriverIcon className="h-12 w-12" />,
  title: "DevOps & Automation",
  description: "Accelerate delivery and improve efficiency with smart automation and streamlined DevOps practices.",
  color: "from-yellow-500 to-orange-600"
},
{
  icon: <ServerStackIcon className="h-12 w-12" />,
  title: "IT Infrastructure & Support Services",
  description: "Reliable infrastructure and responsive support to keep your systems running smoothly every day.",
  color: "from-pink-500 to-red-600"
},
{
  icon: <DevicePhoneMobileIcon className="h-12 w-12" />,
  title: "Networking & Systems Integration",
  description: "Seamless network solutions and system integrations that connect your entire business securely.",
  color: "from-indigo-500 to-indigo-600"
}

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