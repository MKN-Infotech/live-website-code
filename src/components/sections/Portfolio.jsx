// File: src/components/sections/Portfolio.jsx
// Portfolio/Case Studies section - place this in src/components/sections/Portfolio.jsx

import React, { useState } from 'react';
import { ArrowTopRightOnSquareIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: "Product Engineering",
      category: "engineering",
      location: "4580 McKnight Rd, USA",
      description: "We have the experience and the knowhow to help ensure effective decision-making, whether you are looking for strategic guidance or tactical execution.",
      image: "/images/portfolio/product-engineering.jpg",
      tags: ["Development", "Engineering"]
    },
    {
      id: 2,
      title: "Firewall Advance",
      category: "security",
      location: "4580 McKnight Rd, USA", 
      description: "If you've built up your IT system over a period of time, you probably have a mix of different hardware and software that needs advanced security solutions.",
      image: "/images/portfolio/firewall-advance.jpg",
      tags: ["Security", "Infrastructure"]
    },
    {
      id: 3,
      title: "Data Management",
      category: "data",
      location: "4580 McKnight Rd, USA",
      description: "We'll identify where potential problems might occur and provide you with a detailed set of recommendations for optimal data management.",
      image: "/images/portfolio/data-management.jpg",
      tags: ["Data", "Analytics"]
    },
    {
      id: 4,
      title: "Big Data & Analytics",
      category: "analytics",
      location: "4580 McKnight Rd, USA",
      description: "If you have decided to upgrade or extend your IT infrastructure, we can ensure that the project goes smoothly with advanced analytics.",
      image: "/images/portfolio/big-data.jpg",
      tags: ["Analytics", "Big Data"]
    },
    {
      id: 5,
      title: "Research & Energy",
      category: "research",
      location: "4580 McKnight Rd, USA",
      description: "So if you need to improve the speed and efficiency of your IT system, contact us for professional and unbiased research solutions.",
      image: "/images/portfolio/research-energy.jpg",
      tags: ["Research", "Energy"]
    },
    {
      id: 6,
      title: "Cloud Solutions",
      category: "cloud",
      location: "4580 McKnight Rd, USA",
      description: "Comprehensive cloud migration and management services to help your business scale efficiently and securely in the digital age.",
      image: "/images/portfolio/cloud-solutions.jpg",
      tags: ["Cloud", "Migration"]
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'engineering', label: 'Engineering' },
    { key: 'security', label: 'Security' },
    { key: 'data', label: 'Data & Analytics' },
    { key: 'cloud', label: 'Cloud Solutions' }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">Our Case Studies ~</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-4">
            Technology Is Transforming Every Industry Sector
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our successful projects and see how we've helped businesses across various industries 
            leverage technology to achieve their goals.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category.key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Location */}
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  {item.location}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Read More Link */}
                <div className="flex items-center justify-between">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                    View Project
                  </button>
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Want to see more of our work?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;