
import React, { useState } from 'react';
import { 
  X, Users, FileText, MessageSquare, TrendingUp, DollarSign, Shield,
  Heart, Briefcase, Award, CheckCircle, Phone, Mail, Calendar
} from 'lucide-react';

interface HRContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HRContactModal: React.FC<HRContactModalProps> = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    service: '',
    message: '',
    urgency: 'normal'
  });

  if (!isOpen) return null;

  const hrServices = [
    {
      id: 'recruitment',
      title: 'Recruitment & Hiring',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      services: [
        'Posting job openings',
        'Screening resumes',
        'Conducting interviews',
        'Coordinating onboarding for new employees'
      ]
    },
    {
      id: 'relations',
      title: 'Employee Relations',
      icon: Heart,
      color: 'from-purple-500 to-pink-500',
      services: [
        'Addressing employee concerns or conflicts',
        'Promoting a healthy work culture',
        'Ensuring fair treatment and inclusion',
        'Mediation and conflict resolution'
      ]
    },
    {
      id: 'training',
      title: 'Training & Development',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      services: [
        'Organizing training sessions',
        'Career development planning',
        'Upskilling employees',
        'Leadership development programs'
      ]
    },
    {
      id: 'performance',
      title: 'Performance Management',
      icon: Award,
      color: 'from-orange-500 to-red-500',
      services: [
        'Setting performance goals',
        'Conducting performance appraisals',
        'Giving feedback and managing promotions',
        'Performance improvement plans'
      ]
    },
    {
      id: 'payroll',
      title: 'Payroll & Benefits',
      icon: DollarSign,
      color: 'from-indigo-500 to-purple-500',
      services: [
        'Managing salaries, bonuses, and deductions',
        'Handling employee benefits (healthcare, insurance, leave, etc.)',
        'Retirement planning assistance',
        'Compensation analysis'
      ]
    },
    {
      id: 'compliance',
      title: 'Policy Creation & Compliance',
      icon: Shield,
      color: 'from-teal-500 to-blue-500',
      services: [
        'Creating company policies (leave, work ethics, dress code, etc.)',
        'Ensuring legal and labor law compliance',
        'Maintaining employee records',
        'Regulatory compliance monitoring'
      ]
    },
    {
      id: 'safety',
      title: 'Workplace Safety & Welfare',
      icon: Briefcase,
      color: 'from-rose-500 to-pink-500',
      services: [
        'Ensuring a safe work environment',
        'Managing employee wellness programs',
        'Health and safety training',
        'Emergency response planning'
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    const service = hrServices.find(s => s.id === serviceId);
    setFormData(prev => ({
      ...prev,
      service: service?.title || ''
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('HR Contact Form submitted:', formData);
    alert('Thank you for contacting our HR team! We will get back to you within 24 hours.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold">Contact HR Team</h2>
            <p className="text-blue-100 mt-1">We're here to help with all your HR needs</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* HR Services Grid */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Our HR Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hrServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className={`cursor-pointer rounded-xl p-4 border-2 transition-all duration-300 ${
                      selectedService === service.id
                        ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <div className={`bg-gradient-to-r ${service.color} p-3 rounded-lg w-fit mb-3`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.services.slice(0, 2).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                      {service.services.length > 2 && (
                        <li className="text-blue-600 text-xs font-medium">
                          +{service.services.length - 2} more services
                        </li>
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Selected Service Details */}
          {selectedService && (
            <div className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                {hrServices.find(s => s.id === selectedService)?.title} - Full Services
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {hrServices.find(s => s.id === selectedService)?.services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">HR Hotline</p>
                    <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">HR Email</p>
                    <p className="text-sm text-gray-600">hr@company.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Office Hours</p>
                    <p className="text-sm text-gray-600">Mon-Fri, 9AM-6PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Response Time</h4>
                <p className="text-sm text-green-700">
                  We typically respond to HR inquiries within 24 hours during business days.
                  Urgent matters are addressed within 4 hours.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Department</option>
                      <option value="engineering">Engineering</option>
                      <option value="design">Design</option>
                      <option value="marketing">Marketing</option>
                      <option value="sales">Sales</option>
                      <option value="operations">Operations</option>
                      <option value="finance">Finance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      HR Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Service</option>
                      {hrServices.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="low">Low - Within a week</option>
                      <option value="normal">Normal - Within 2-3 days</option>
                      <option value="high">High - Within 24 hours</option>
                      <option value="urgent">Urgent - Same day</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Please describe your HR inquiry or concern in detail..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRContactModal;