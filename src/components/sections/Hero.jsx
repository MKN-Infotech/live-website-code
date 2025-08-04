// File: src/components/sections/Hero.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Smart IT Services for Future-Ready Businesses",
      subtitle: "Simplify. Scale. Secure.",
      description: "We empower businesses with scalable, secure, and intelligent IT infrastructure—designed to future-proof your operations.",
      buttonText: "Meet Our Experts",
      image: "/src/assets/images/about-img.jpg"
    },
    {
      title: "Accelerate Digital Innovation with Confidence",
      subtitle: "Digital is Now",
      description: "Harness automation, cloud, and data to transform your business. We make complex technology simple and reliable.",
      buttonText: "Get Started",
      image: "/images/hero-bg-2.jpg"
    },
    {
      title: "Enterprise-Grade Support. Human-Centered Delivery.",
      subtitle: "Trust at Every Step",
      description: "Our support team is always on—so your business never stops. Partner with us for peace of mind in a digital-first world.",
      buttonText: "Talk to Us",
      image: "/images/hero-bg-3.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Layers */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: index === currentSlide ? 'blur(0px)' : 'blur(4px)',
            transform: 'scale(1.05)'
          }}
        />
      ))}

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-6 sm:px-10">
        <div className="max-w-4xl text-white text-center animate-fadeInUp">
          <span className="inline-block mb-5 text-sm sm:text-base font-medium tracking-wide bg-white/10 px-4 py-2 rounded-full border border-white/20">
            {slides[currentSlide].subtitle}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-md mb-6">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
              {slides[currentSlide].buttonText}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 p-3 rounded-full"
      >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 p-3 rounded-full"
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 right-6 z-30 text-white animate-bounce hidden sm:flex flex-col items-center">
        <span className="text-xs mb-1">Scroll</span>
        <div className="w-5 h-9 border-2 border-white rounded-full flex items-start justify-center">
          <div className="w-1 h-2 mt-1 bg-white rounded-full animate-ping" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
