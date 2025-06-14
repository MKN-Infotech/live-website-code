// File: src/components/sections/PricingPlans.jsx
// Pricing plans section - place this in src/components/sections/PricingPlans.jsx

import React, { useState } from 'react';
import { CheckIcon, StarIcon } from '@heroicons/react/24/solid';

const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic Plan",
      description: "Our purpose is to build solutions that remove barriers preventing people from doing their best work.",
      monthlyPrice: 29,
      yearlyPrice: 99,
      isRecommended: false,
      features: [
        "24/7 system monitoring",
        "Security management",
        "Secure finance backup",
        "Remote support",
        "Basic reporting",
        "Email support"
      ],
      color: "from-gray-500 to-gray-600",
      buttonColor: "bg-gray-600 hover:bg-gray-700"
    },
    {
      name: "Standard Plan",
      description: "We encourage every team member to be a whole person. We have a flexible work environment.",
      monthlyPrice: 49,
      yearlyPrice: 299,
      isRecommended: true,
      features: [
        "24/7 system monitoring",
        "Security management", 
        "Secure finance backup",
        "Remote support",
        "Advanced reporting",
        "Priority phone support",
        "Data analytics",
        "Custom integrations"
      ],
      color: "from-blue-500 to-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Extended Plan",
      description: "What separates us from all other web design agencies is the ability to offer comprehensive solutions.",
      monthlyPrice: 59,
      yearlyPrice: 399,
      isRecommended: false,
      features: [
        "24/7 system monitoring",
        "Security management",
        "Secure finance backup", 
        "Remote support",
        "Premium reporting",
        "24/7 phone support",
        "Advanced analytics",
        "Custom development",
        "Dedicated account manager",
        "White-label solutions"
      ],
      color: "from-purple-500 to-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">~ Pricing Plan ~</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-8">
            Our Awesome Pricing Plans
          </h2>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`font-semibold ${!isYearly ? 'text-blue-600' : 'text-gray-600'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                isYearly ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isYearly ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`font-semibold ${isYearly ? 'text-blue-600' : 'text-gray-600'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.isRecommended ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {/* Recommended Badge */}
              {plan.isRecommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <StarIcon className="h-4 w-4 mr-1" />
                    Recommended
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {plan.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-800">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-600 ml-2">
                        / {isYearly ? 'yearly' : 'monthly'}
                      </span>
                    </div>
                    {isYearly && (
                      <div className="text-green-600 text-sm font-semibold mt-2">
                        Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} per year
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <CheckIcon className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button className={`w-full ${plan.buttonColor} text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}>
                  Choose Plan
                </button>
              </div>

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              Every business is unique. If our standard plans don't fit your needs, 
              we'll create a custom solution that's perfect for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;