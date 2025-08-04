// src/components/common/CTA.jsx
import React from 'react';

const CTA = () => (
  <section className="bg-blue-700 text-white py-12 px-4 text-center rounded-xl shadow-xl my-10 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing Together</h2>
    <p className="mb-6">Partner with us for reliable, secure, and scalable IT solutions tailored to your business goals.</p>
    <a href="/contact" className="inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition">
      Contact Us
    </a>
  </section>
);

export default CTA;
