import React from 'react';

const About = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
          Born to Build the Future of IT
        </h2>
        <p className="text-lg leading-relaxed">
          Founded in <strong>May 2025</strong>, we're not just another IT service company—we're a powerhouse of innovation, strategy, and execution. Though new on the map, our foundation is rock-solid: a handpicked team of Subject Matter Experts (SMEs) with decades of combined experience across every major IT vertical.
        </p>
      </section>

      <section className="mb-8">
        <p className="text-lg leading-relaxed">
          From crafting high-performance websites and automating infrastructure to securing digital assets and scaling on the cloud—we don’t just follow best practices, we help define them.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">
          We Specialize In:
        </h2>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>Web & Application Development</li>
          <li>IT Infrastructure & Support Services</li>
          <li>Cybersecurity & Compliance</li>
          <li>DevOps & Automation</li>
          <li>Cloud Solutions (AWS, Azure, GCP)</li>
          <li>Networking & Systems Integration</li>
          <li>…and everything in between</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
          Why We Exist
        </h2>
        <p className="text-lg leading-relaxed">
          Technology never stands still, and neither do we. We launched with one mission: <strong>to deliver agile, future-ready IT solutions that drive real business impact.</strong> Whether you're a startup needing a digital launchpad or an enterprise looking to scale, we bring the expertise, energy, and edge to make it happen.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
          Built by Experts. Driven by Passion.
        </h2>
        <p className="text-lg leading-relaxed">
          Our team is our biggest asset. Each member brings deep domain knowledge, creative problem-solving skills, and a client-first mindset. Together, we’re building a company that delivers more than just services—we deliver outcomes.
        </p>
      </section>
    </div>
  );
};

export default About;
