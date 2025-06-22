import React from 'react';

const services = [
  {
    name: 'Web & Application Development',
    description: 'We craft responsive, scalable, and feature-rich websites and applications that meet your business needs. Our team uses cutting-edge technologies like React, Angular, Node.js, and Python to deliver high-performance solutions.',
    features: [
      'Responsive Web Design',
      'Custom Web Application Development',
      'E-commerce Solutions',
      'API Development & Integration',
      'Cross-platform Development (Web & Mobile)',
    ],
    icon: 'https://path-to-your-icon/web-icon.svg', // Replace with actual icon URL
  },
  {
    name: 'Cloud Solutions',
    description: 'Our cloud solutions leverage AWS, Azure, and Google Cloud to offer secure, scalable, and cost-effective solutions. Whether migrating your business to the cloud or optimizing your cloud infrastructure, we provide tailored solutions for your business.',
    features: [
      'Cloud Migration & Optimization',
      'AWS, Azure, and GCP Expertise',
      'Infrastructure as a Service (IaaS)',
      'Disaster Recovery and Backup Solutions',
      'DevOps and Continuous Integration/Continuous Delivery (CI/CD)',
    ],
    icon: 'https://path-to-your-icon/cloud-icon.svg', // Replace with actual icon URL
  },
  {
    name: 'Cybersecurity & Compliance',
    description: 'We safeguard your business against evolving threats. Our cybersecurity services include risk assessments, vulnerability management, threat monitoring, and compliance to industry standards like GDPR and HIPAA.',
    features: [
      'Vulnerability Assessments',
      'Penetration Testing & Risk Analysis',
      'Network Security & Firewalls',
      'Compliance Management (GDPR, HIPAA)',
      'Incident Response & Forensics',
    ],
    icon: 'https://path-to-your-icon/cybersecurity-icon.svg', // Replace with actual icon URL
  },
  {
    name: 'DevOps & Automation',
    description: 'Our DevOps practices streamline the software development lifecycle, integrating continuous testing, integration, and delivery to improve collaboration and speed. We automate processes using cutting-edge tools and technologies.',
    features: [
      'CI/CD Pipeline Setup',
      'Infrastructure Automation (Terraform, Ansible)',
      'Cloud-Native Application Deployment',
      'Monitoring and Logging (Prometheus, Grafana)',
      'Containerization (Docker, Kubernetes)',
    ],
    icon: 'https://path-to-your-icon/devops-icon.svg', // Replace with actual icon URL
  },
  {
    name: 'IT Infrastructure & Support Services',
    description: 'We ensure your IT infrastructure is robust, reliable, and cost-effective. Our managed IT services cover hardware, software, network management, and 24/7 support to keep your business running smoothly.',
    features: [
      '24/7 IT Support & Helpdesk',
      'Network & Server Management',
      'Hardware Procurement & Maintenance',
      'System Monitoring & Troubleshooting',
      'Cloud Infrastructure Management',
    ],
    icon: 'https://path-to-your-icon/infrastructure-icon.svg', // Replace with actual icon URL
  },
  {
    name: 'Networking & Systems Integration',
    description: 'We design and integrate scalable, secure network infrastructures that support your business. Our solutions include network security, virtualization, and systems integration for seamless communication and performance.',
    features: [
      'Network Architecture Design & Implementation',
      'System Integration & Virtualization',
      'Firewall Configuration & Network Security',
      'Load Balancing & Traffic Management',
      'VPN & Remote Access Solutions',
    ],
    icon: 'https://path-to-your-icon/network-icon.svg', // Replace with actual icon URL
  },
];

const Services = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-100">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h1>

      <section className="text-center mb-16">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Innovative IT Solutions Tailored for You</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We offer a wide range of IT services designed to help businesses thrive in a digital world. From website development and cloud solutions to cybersecurity and DevOps automation, we provide comprehensive IT support that aligns with your business goals.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out p-8 hover:shadow-lg"
          >
            <div className="flex justify-center mb-6">
              <img
                src={service.icon}
                alt={service.name}
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.name}</h3>
            <p className="text-md text-gray-600 mb-6">{service.description}</p>

            <h4 className="text-lg font-semibold text-indigo-600 mb-3">Key Features:</h4>
            <ul className="list-disc list-inside text-sm text-gray-500 space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className="mt-6">
              <button className="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
