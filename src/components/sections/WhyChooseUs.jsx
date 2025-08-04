// File: src/components/sections/WhyChooseUs.jsx

import React from 'react';
import { CheckCircleIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

const points = [
  {
    title: 'Proven Track Record',
    description: 'With years of industry experience, we’ve delivered reliable tech solutions to global clients.',
    icon: CheckCircleIcon,
  },
  {
    title: 'Security First',
    description: 'We follow best practices to ensure your data and infrastructure stay secure.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Innovation Driven',
    description: 'We leverage emerging technologies to give your business a competitive edge.',
    icon: SparklesIcon,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Our commitment to excellence and client satisfaction sets us apart in the IT industry.</p>

        <div className="grid md:grid-cols-3 gap-10">
          {points.map(({ title, description, icon: Icon }, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-left hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <Icon className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
              </div>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
