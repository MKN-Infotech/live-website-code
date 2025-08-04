import React, { useState } from 'react';

// Form Validation function
const validateForm = (name, email, message) => {
  const errors = {};
  if (!name) errors.name = "Name is required.";
  if (!email || !/\S+@\S+\.\S+/.test(email)) errors.email = "Valid email is required.";
  if (!message) errors.message = "Message cannot be empty.";
  return errors;
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData.name, formData.email, formData.message);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setSuccess(true); // Show success message
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form fields
    }
  };

  return (
    <div className="bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-lg text-gray-600 mt-4">Get in touch with our team. We’d love to hear from you!</p>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone (Optional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                  rows="5"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
              >
                Request a Quote
              </button>

              {success && (
                <div className="text-green-600 mt-4">
                  <p>Your message has been sent successfully. We'll get back to you shortly!</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Details Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Our Contact Information</h2>
            <p className="text-lg text-gray-600">
              Address: Noida Sec-62, Uttar Pradesh,
India 201309
            </p>
            <p className="text-lg text-gray-600">Phone: <a href="tel:+91-99909 85392" className="text-indigo-600">+91-9990985392</a></p>
            <p className="text-lg text-gray-600">Email: <a href="mailto:admin@mkninfotech.com" className="text-indigo-600">admin@mkninfotech.com</a></p>

            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/company/mkn-info-technologies" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://twitter.com/mkninfotech" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://www.facebook.com/mkninfotech" className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Location</h2>
          <div className="overflow-hidden rounded-lg shadow-lg">
<iframe title="Google Map Location"              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112178.64480204455!2d77.40182545!3d28.5222018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1750590585783!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
