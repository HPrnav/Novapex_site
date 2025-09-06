import React from 'react';
import { 
  X, 
  MessageCircle, 
  Calendar, 
  Clock, 
  Users, 
  Mail, 
  Phone, 
  CheckCircle,
  ArrowRight,
  User,
  Briefcase,
  Target
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const hrTeam = [
    {
      name: "Raghunath Dange",
      role: "HR Director",
      email: "Raghunath@novapex.com",
    
      image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
  
  ];

  const consultationProcess = [
    {
      step: 1,
      title: "Initial Contact",
      description: "Reach out via email or phone to schedule your consultation",
      duration: "5 minutes",
      icon: MessageCircle
    },
    {
      step: 2,
      title: "Project Discovery",
      description: "Detailed discussion about your project requirements and goals",
      duration: "30-45 minutes",
      icon: Target
    },
    {
      step: 3,
      title: "Technical Assessment",
      description: "Our technical team evaluates the scope and complexity",
      duration: "1-2 days",
      icon: Users
    },
    {
      step: 4,
      title: "Proposal & Timeline",
      description: "Receive detailed proposal with timeline and cost breakdown",
      duration: "2-3 days",
      icon: Calendar
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl  w-full max-h-screen overflow-y-auto relative">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-full">
              <MessageCircle className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Free Consultation</h2>
              <p className="opacity-90">Let's discuss your project and how we can help</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Project Information Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">About Our Projects</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">What We Deliver</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Custom software solutions tailored to your needs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Modern, scalable architecture and clean code</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Comprehensive testing and quality assurance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Ongoing support and maintenance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">Our Approach</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Agile development methodology</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Regular progress updates and demos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Collaborative design and development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Transparent communication throughout</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* HR Team Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Meet Our HR Team</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {hrTeam.map((member, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="font-semibold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-sm text-blue-600 mb-4">{member.role}</p>
                    
                    <div className="space-y-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        <span>{member.email}</span>
                      </a>
                    
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Consultation Process */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-green-100 p-2 rounded-lg">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Our Consultation Process</h3>
            </div>
            
            <div className="space-y-4">
              {consultationProcess.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                        <h4 className="font-semibold text-gray-900">{step.title}</h4>
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                    {index < consultationProcess.length - 1 && (
                      <ArrowRight className="h-5 w-5 text-gray-400 mt-2" />
                    )}
                  </div>
                );
              })}
            </div>
          </section>

      
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;