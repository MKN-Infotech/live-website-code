// File: src/components/sections/About.jsx
import React from 'react';
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const features = [
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-blue-600" />,
      title: "Trusted IT Advisors",
      description: "Expert strategic planning and consulting tailored to your business goals."
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-600" />,
      title: "Reliable Support Systems",
      description: "We provide real-time, scalable support to ensure business continuity."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* === Left Content === */}
          <div>
            <span className="text-blue-600 font-semibold tracking-wide text-lg uppercase">
              About Our Company
            </span>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mt-3 leading-tight">
              Empowering Your Business with Smart IT Solutions
            </h2>

            <p className="text-gray-600 text-lg mt-6 mb-10 leading-relaxed">
              At the heart of everything we do is your success. From infrastructure planning to ongoing support,
              we deliver dependable, scalable, and secure IT services that fuel growth and innovation.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Highlights */}
            <div className="space-y-3 mb-10">
              {[
                "Certified IT professionals with 15+ years experience",
                "Solutions tailored to your industry and goals",
                "Proven implementation success across 30+ sectors",
                "Committed to innovation with secure, scalable tech"
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:scale-105 transition">
              Learn More About Us
            </button>
          </div>

          {/* === Right Side Image + Stats === */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/src/images/about-img.jpg"
                alt="IT Company Team"
                className="w-full h-auto rounded-3xl shadow-xl"
              />


            </div>

            {/* Decorative Background Layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl rotate-2 scale-105 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
