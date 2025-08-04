import React, { useState, useEffect, useRef } from 'react';
import {
  CalendarIcon,
  UsersIcon,
  GlobeAltIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    years: 0,
    customers: 0,
    countries: 0,
    rating: 0
  });

  const statsRef = useRef();

  const stats = [
    {
      icon: <CalendarIcon className="h-8 w-8" />,
      value: 15,
      suffix: "+",
      label: "Years of Establishment",
      description: "Reliable IT solutions since 2008",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <UsersIcon className="h-8 w-8" />,
      value: 1500,
      suffix: "+",
      label: "Global Clients",
      description: "Empowering over 1500 businesses worldwide",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8" />,
      value: 25,
      suffix: "+",
      label: "Countries Served",
      description: "Proven global presence and outreach",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <StarIcon className="h-8 w-8" />,
      value: 4.9,
      suffix: "/5",
      label: "Client Satisfaction",
      description: "Rated excellent by happy clients",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        const progress = currentStep / steps;
        const eased = 1 - Math.pow(1 - progress, 3);

        setAnimatedStats({
          years: Math.floor(15 * eased),
          customers: Math.floor(1500 * eased),
          countries: Math.floor(25 * eased),
          rating: +(4.9 * eased).toFixed(1)
        });

        currentStep++;
        if (currentStep > steps) {
          clearInterval(timer);
          setAnimatedStats({ years: 15, customers: 1500, countries: 25, rating: 4.9 });
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const getDisplayValue = (index) => {
    switch (index) {
      case 0: return animatedStats.years;
      case 1: return animatedStats.customers;
      case 2: return animatedStats.countries;
      case 3: return animatedStats.rating;
      default: return 0;
    }
  };

  return (
    <section
      aria-labelledby="company-stats"
      className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4" ref={statsRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="company-stats" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proven Results. Trusted Worldwide.
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Our expertise drives measurable impact for clients around the globe.
            Here’s a glimpse of our journey.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} text-white mb-6 group-hover:shadow-xl`}
              >
                {stat.icon}
              </div>
              <div className="mb-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                  {getDisplayValue(index)}
                  <span className="text-blue-300">{stat.suffix}</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-200 mb-1">{stat.label}</h3>
                <p className="text-blue-300 text-sm">{stat.description}</p>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full group-hover:w-24 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-10 shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4">
            Focus on Growth, We’ll Handle the Technology
          </h3>
          <p className="text-blue-200 mb-6">
            Partner with us for strategic, scalable, and secure IT solutions tailored for your business.
          </p>
          <button className="bg-white text-blue-900 hover:bg-blue-100 px-8 py-4 rounded-lg font-semibold transition-transform duration-300 transform hover:scale-105 shadow-lg">
            Schedule a Free Consultation
          </button>
        </div>
      </div>

      {/* Floating Blobs */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />
    </section>
  );
};

export default Stats;
