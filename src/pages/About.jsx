import React from 'react';

const About = () => {
  // Example team data, you can replace this with actual data
  const teamMembers = [
    {
      name: 'John Doe',
      designation: 'CEO & Founder',
      experience: '15+ years in IT leadership',
      image: 'path/to/john-image.jpg', // replace with actual image path
    },
    {
      name: 'Jane Smith',
      designation: 'Lead Developer',
      experience: '10+ years in software engineering',
      image: 'path/to/jane-image.jpg', // replace with actual image path
    },
    {
      name: 'Carlos Perez',
      designation: 'Senior Cloud Architect',
      experience: '12+ years in cloud solutions',
      image: 'path/to/carlos-image.jpg', // replace with actual image path
    },
    {
      name: 'Surendar Singh Bhandari',
      designation: 'Cybersecurity Specialist',
      experience: '8+ years in cybersecurity',
      image: 'path/to/emma-image.jpg', // replace with actual image path
    },
    {
      name: 'David Lee',
      designation: 'DevOps Engineer',
      experience: '7+ years in DevOps and automation',
      image: 'path/to/david-image.jpg', // replace with actual image path
    },
    {
      name: 'Sophia Turner',
      designation: 'Network Engineer',
      experience: '9+ years in networking solutions',
      image: 'path/to/sophia-image.jpg', // replace with actual image path
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
          Founded in 2025
        </h2>
        <p className="text-lg leading-relaxed">
          We're not just another IT service company—we're a powerhouse of innovation, strategy, and execution. Though new on the map, our foundation is rock-solid: a handpicked team of Subject Matter Experts (SMEs) with decades of combined experience across every major IT vertical.
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

      {/* New Team Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-md text-gray-600">{member.designation}</p>
                <p className="text-sm text-gray-500 mt-2">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
