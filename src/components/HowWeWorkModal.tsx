import React from 'react';
import { X, Users, Lightbulb, Code, Rocket, CheckCircle, Clock } from 'lucide-react';

interface HowWeWorkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HowWeWorkModal: React.FC<HowWeWorkModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const workflowSteps = [
    {
      icon: Lightbulb,
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, requirements, and challenges through detailed consultations.",
      duration: "1-2 weeks",
      details: [
        "Stakeholder interviews",
        "Requirements gathering",
        "Technical feasibility analysis",
        "Project roadmap creation"
      ]
    },
    {
      icon: Users,
      title: "Team Assembly",
      description: "We assemble a dedicated team of experts tailored to your project's specific needs and requirements.",
      duration: "3-5 days",
      details: [
        "Project manager assignment",
        "Developer team selection",
        "Designer allocation",
        "Quality assurance specialist"
      ]
    },
    {
      icon: Code,
      title: "Development & Design",
      description: "Our agile development process ensures regular updates and feedback loops throughout the project lifecycle.",
      duration: "4-16 weeks",
      details: [
        "Sprint-based development",
        "Regular client updates",
        "Continuous testing",
        "Design iterations"
      ]
    },
    {
      icon: CheckCircle,
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing ensures your solution meets the highest standards of quality and performance.",
      duration: "1-2 weeks",
      details: [
        "Automated testing",
        "Manual QA testing",
        "Performance optimization",
        "Security audits"
      ]
    },
    {
      icon: Rocket,
      title: "Deployment & Launch",
      description: "We handle the complete deployment process and provide ongoing support to ensure smooth operations.",
      duration: "1 week",
      details: [
        "Production deployment",
        "Performance monitoring",
        "User training",
        "Documentation delivery"
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2">
      <div className="bg-white rounded-2xl max-w-screen-2xl  max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">How Novapex Infohub Works</h2>
              <p className="text-gray-600 mt-2">Our proven 5-step process for delivering exceptional software solutions</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-700">Projects Completed</div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-700">Client Satisfaction</div>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-700">Support Available</div>
            </div>
          </div>

          {/* Workflow Steps */}
          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex gap-6">
                {/* Step Number & Icon */}
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {index + 1}
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-xl">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="w-px h-16 bg-gradient-to-b from-blue-200 to-purple-200 mt-4"></div>
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <div className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      <Clock className="w-4 h-4" />
                      {step.duration}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Our Team Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Expert Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { role: "Project Managers", count: "5+", description: "Certified PMP professionals" },
                { role: "Developers", count: "10+", description: "Full-stack experts" },
                { role: "Designers", count: "10+", description: "UI/UX specialists" },
                { role: "QA Engineers", count: "5+", description: "Quality assurance experts" }
              ].map((team, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{team.count}</div>
                  <div className="font-semibold text-gray-900 mb-1">{team.role}</div>
                  <div className="text-sm text-gray-600">{team.description}</div>
                </div>
              ))}
            </div>
          </div>


        
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkModal;