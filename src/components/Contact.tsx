import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User, Building } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: ['Contact@novapexinfohub.com', 'support@novapexinfohub.com']
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 2269718996']
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon - Fri: 10:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM']
  }
];


  const services = [
    'Custom Software Development',
    'Mobile App Development',
    'Web Development',
    'Cloud Solutions',
    'UI/UX Design',
    'Data Analytics',
    'AI & Machine Learning',
    'DevOps & Automation',
    'Cybersecurity',
    'Consulting Services'
  ];

  return (
<section id="contact" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Get In <span style={{ color: "#00C08B" }}>Touch</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Ready to start your next project? We'd love to hear from you. 
        Send us a message and we'll respond as soon as possible.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Contact Information */}
      <div className="lg:col-span-1">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Us for Exceptional Services</h3>
        <div className="space-y-6">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-[#00C08B] bg-opacity-20 p-3 rounded-lg">
                  <IconComponent className="h-6 w-6 text-[#00C08B]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Office Image */}
        <div className="mt-8">
          <img 
            src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Navapexhub Office" 
            className="w-full h-48 object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C08B] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C08B] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C08B] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C08B] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C08B] focus:border-transparent transition-all duration-200"
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C08B] focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project and requirements..."
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00C08B] to-[#008C6B] text-white py-4 px-8 rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Contact;