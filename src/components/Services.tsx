import { useState, useCallback } from 'react';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  Palette, 
  Settings, 
  Zap,
  Globe,
  Bot,
  BarChart3,
  Headphones,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  X,
  CheckCircle,
  Clock,
  Users,
  Target,
  Mail,
  MessageCircle,
  FileText,
  Video,
  Brush,
  TrendingUp
} from 'lucide-react';

import data from '../data/data.json';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedServiceForComparison, setSelectedServiceForComparison] = useState(null);
  const {services}= data;

  const testimonials = [
    {
      name: "Praful Nikam",
      role: "Techno Friends",
      content: "The team delivered outstanding results, significantly improving our digital presence and customer interactions. Their expertise is unmatched in the industry.",
      rating: 5,
      avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      name: "Rahul D",
      role: "Tech Luster",
      content: "They transformed our customer experience with their innovative digital solutions. Highly recommend their services for any business looking to enhance engagement.",
      rating: 5,
      avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    }
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }, [testimonials.length]);

  const openServiceModal = (service) => {
    setSelectedService(service);
  };

  const openComparisonModal = (service) => {
    setSelectedServiceForComparison(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  const closeComparisonModal = () => {
    setSelectedServiceForComparison(null);
  };

  const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;
    
    const IconComponent = service.icon;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            {/* Header with image */}
            <div className="relative h-64">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6 text-gray-800" />
              </button>
              
              <div className="absolute bottom-4 left-6 flex items-center">
                <div className="bg-white rounded-lg p-3 mr-4">
                  <IconComponent className="h-8 w-8 text-[#00C08B]" />
                </div>
                <h2 className="text-3xl font-bold text-white">{service.title}</h2>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 text-lg mb-8">{service.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#00C08B] mr-2" />
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {service.details.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-[#00C08B]/20 flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-[#00C08B]"></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Development Process */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Settings className="h-5 w-5 text-[#00C08B] mr-2" />
                    Our Process
                  </h3>
                  <ol className="space-y-3">
                    {service.details.process.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-[#00C08B] flex items-center justify-center mr-3 text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              
              {/* Timeline & Pricing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-6 rounded-xl mb-8">
                <div className="flex items-center">
                  <Clock className="h-8 w-8 text-[#00C08B] mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Estimated Timeline</h4>
                    <p className="text-gray-700">{service.details.timeline}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-[#00C08B] flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">$</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pricing</h4>
                    <p className="text-gray-700">{service.details.pricing}</p>
                  </div>
                </div>
              </div>
              
              {/* Additional Images Gallery */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Work</h3>
                <div className="grid grid-cols-3 gap-4">
                  {service.additionalImages.map((img, index) => (
                    <div key={index} className="rounded-lg overflow-hidden h-24">
                      <img 
                        src={img} 
                        alt={`${service.title} example ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="bg-gradient-to-r from-[#00C08B] to-[#008C65] p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold text-white mb-4">Ready to get started?</h3>
                <p className="text-white/90 mb-6">Contact us today to discuss your project requirements</p>
                <button className="bg-white text-[#00C08B] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // New Comparison Modal Component
  const ComparisonModal = ({ service, onClose }) => {
    if (!service) return null;
    
    const IconComponent = service.icon;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative p-6">
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-colors z-10"
            >
              <X className="h-6 w-6 text-gray-800" />
            </button>
            
            <div className="flex items-center mb-8">
              <div className="bg-[#00C08B]/10 p-4 rounded-xl mr-4">
                <IconComponent className="h-10 w-10 text-[#00C08B]" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Benefits */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 text-[#00C08B] mr-2" />
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {service.details.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                      <div className="h-6 w-6 rounded-full bg-[#00C08B] flex items-center justify-center mr-3 text-white text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Technologies */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Code className="h-5 w-5 text-[#00C08B] mr-2" />
                  Technologies We Use
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.details.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-[#00C08B]/10 text-[#00C08B] rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="mt-8 bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Why Choose This Service?</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Success Rate</span>
                      <span className="font-bold text-[#00C08B]">95%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Client Satisfaction</span>
                      <span className="font-bold text-[#00C08B]">98%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Projects Completed</span>
                      <span className="font-bold text-[#00C08B]">250+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Case Study */}
            <div className="bg-gradient-to-r from-[#00C08B]/5 to-[#008C65]/5 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Case Study</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-[#00C08B] mb-2">+40%</div>
                  <div className="text-gray-600">Increase in conversion rates for clients</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-[#00C08B] mb-2">3.5x</div>
                  <div className="text-gray-600">ROI on average for investment</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-[#00C08B] mb-2">2 weeks</div>
                  <div className="text-gray-600">Average time to see initial results</div>
                </div>
              </div>
            </div>
            
            {/* Package Comparison */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Package Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-xl p-5 text-center">
                  <h4 className="font-bold text-gray-900 mb-2">Basic</h4>
                  <div className="text-2xl font-bold text-[#00C08B] mb-4">$499</div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>Essential features</li>
                    <li>Standard support</li>
                    <li>Basic customization</li>
                  </ul>
                  <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg font-medium">
                    Select Plan
                  </button>
                </div>
                
                <div className="border-2 border-[#00C08B] rounded-xl p-5 text-center relative">
                  <div className="absolute top-0 right-0 bg-[#00C08B] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                    POPULAR
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Professional</h4>
                  <div className="text-2xl font-bold text-[#00C08B] mb-4">$1,299</div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>Advanced features</li>
                    <li>Priority support</li>
                    <li>Full customization</li>
                    <li>3 months maintenance</li>
                  </ul>
                  <button className="w-full bg-[#00C08B] text-white py-2 rounded-lg font-medium hover:bg-[#008C65] transition-colors">
                    Select Plan
                  </button>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-5 text-center">
                  <h4 className="font-bold text-gray-900 mb-2">Enterprise</h4>
                  <div className="text-2xl font-bold text-[#00C08B] mb-4">Custom</div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>All features included</li>
                    <li>24/7 dedicated support</li>
                    <li>Custom solutions</li>
                    <li>Ongoing maintenance</li>
                  </ul>
                  <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg font-medium">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="bg-gradient-to-r from-[#00C08B] to-[#008C65] p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold text-white mb-4">Not sure which option is right for you?</h3>
              <p className="text-white/90 mb-6">Schedule a free consultation with our experts</p>
              <button className="bg-white text-[#00C08B] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors mr-4">
                Book a Call
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background with office image and gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Modern office workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-[#00C08B]/10 to-[#008C65]/10"></div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00C08B]/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#008C65]/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-[#00C08B]/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section with background image */}
        <div className="relative text-center mb-16 py-16 rounded-3xl overflow-hidden">
          {/* Background image for hero section only */}
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920" 
              alt="Modern office workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-[#00C08B]/70 to-[#008C65]/80"></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-black">Services</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              We offer comprehensive digital solutions to help businesses transform their ideas 
              into powerful digital experiences that drive growth and innovation across all platforms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#00C08B]/10 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Service image background */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-[#00C08B] transition-all duration-300">
                    <IconComponent className="h-6 w-6 text-[#00C08B] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00C08B] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => openServiceModal(service)}
                      className="text-[#00C08B] font-medium flex items-center py-1 px-3 bg-[#00C08B]/10 rounded-lg hover:bg-[#00C08B]/20 transition-colors"
                    >
                      <span>Details</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => openComparisonModal(service)}
                      className="text-gray-700 font-medium flex items-center py-1 px-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <span>Compare</span>
                      <BarChart3 className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00C08B] rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#00C08B] to-[#008C65] rounded-3xl p-10 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a custom solution?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            We specialize in creating tailored digital experiences that address your unique business challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#00C08B] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Request a Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors">
              View Our Portfolio
            </button>
          </div>
        </div>

        {/* Customer Feedback Section */}
        <div className="mt-24 bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00C08B]/10 rounded-full mb-6">
              <Quote className="h-8 w-8 text-[#00C08B]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-[#00C08B]">Customer Feedback</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clients appreciate the exceptional digital services we provide.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                      <div className="flex items-center mb-6">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-[#00C08B]/30"
                        />
                        <div>
                          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                      <Quote className="h-6 w-6 text-[#00C08B]/30 mb-4" />
                      <p className="text-gray-700 text-lg mb-6">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#00C08B]/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-[#00C08B]" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#00C08B]/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-[#00C08B]" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Service Detail Modal */}
      <ServiceModal service={selectedService} onClose={closeServiceModal} />
      
      {/* Comparison Modal */}
      <ComparisonModal service={selectedServiceForComparison} onClose={closeComparisonModal} />
    </section>
  );
};

export default Services;