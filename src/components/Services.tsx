import { useState, useCallback, useEffect } from 'react';
import { 
  Settings,
  X,
  CheckCircle,
  Clock,
} from 'lucide-react';

import data from '../data/data.json';
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    window.scrollTo({top:0,behavior:'smooth'})
  })

  const [selectedService, setSelectedService] = useState(null);
  const { services } = data;

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

  const openServiceModal = (service) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  // Service Modal Component
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
                <Link to="/contact">
                  <button className="bg-white text-[#00C08B] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                    Request a Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background and decorative elements remain unchanged */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Title */}
        <div className="text-center mb-16">
<h1 className="text-4xl md:text-5xl font-bold mb-6">
  <span className="text-black">Our</span>{" "}
  <span className="text-[#00C08B]">Services</span>
</h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of digital solutions designed to transform your business and drive growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#00C08B]/10 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Service image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
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
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00C08B] rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* CTA and Testimonials remain unchanged */}
      </div>
      
      {/* Service Detail Modal */}
      <ServiceModal service={selectedService} onClose={closeServiceModal} />
    </section>
  );
};

export default Services;