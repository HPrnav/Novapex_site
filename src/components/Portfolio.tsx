import { useState, useEffect } from 'react';
import { 
  ExternalLink,  Calendar, Users, Code, X, ArrowRight, Zap, Shield, ChevronRight,
   Server, Cpu, BarChart2, Award 
  } from 'lucide-react';

import data from '../data/data.json'

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  const {projects}= data;
  const {projectCategories}=data;

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
  };

  const closeProjectDetails = (e) => {
    if (e.target === e.currentTarget || e.target.closest('.modal-close-button')) {
      setSelectedProject(null);
      document.body.style.overflow = 'unset';
    }
  };

  if (isLoading) {
    return (
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loading Portfolio...
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg h-96 animate-pulse">
                <div className="bg-gray-200 h-48 w-full"></div>
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span style={{ color: "#00C08B" }}>Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our diverse range of business websites and applications that showcase our expertise 
            in creating tailored digital solutions for various industries.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                filter === category
                  ? 'bg-[#00C08B] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#00C08B] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <ChevronRight className="h-3 w-3 text-[#00C08B] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto flex space-x-3">
                  <button 
                    onClick={() => openProjectDetails(project)}
                    className="flex-1 bg-[#00C08B] text-white py-2 px-4 rounded-lg hover:bg-[#00a87a] transition-colors duration-200 flex items-center justify-center space-x-2 text-sm font-medium"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No projects found</h3>
            <p className="text-gray-500">We don't have any projects in this category yet.</p>
            <button 
              onClick={() => setFilter('All')}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#00C08B] hover:bg-[#00a87a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00C08B]"
            >
              View all projects
            </button>
          </div>
        )}

        {/* Portfolio Stats */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#00C08B] mb-2">20+</div>
              <div className="text-gray-600">Websites Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#00C08B] mb-2">10+</div>
              <div className="text-gray-600">Business Types</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#00C08B] mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#00C08B] mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* Business Types We Serve */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Business Types We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'Restaurants', 'Gyms & Fitness', 'Schools & Education', 
              'Cleaning Services', 'E-commerce', 'Healthcare',
              'Beauty Salons', 'Consulting', 'Real Estate',
              'Legal Services', 'Automotive', 'Travel & Tourism'
            ].map((business, index) => (
              <div key={index} className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="font-medium text-gray-900">{business}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeProjectDetails}
        >
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center shadow-sm z-10">
              <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
              <button
                onClick={closeProjectDetails}
                className="modal-close-button p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                aria-label="Close project details"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            <div className="p-6">
              {/* Project Header */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="relative rounded-xl overflow-hidden h-64">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div>
                  <div className="mb-4">
                    <span className="bg-[#00C08B] bg-opacity-20 text-[#00a87a] px-3 py-1 rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {selectedProject.detailedInfo.overview}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{selectedProject.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{selectedProject.team}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Cpu className="h-4 w-4" />
                      <span>{selectedProject.technologies.length} Technologies</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Server className="h-4 w-4" />
                      <span>{selectedProject.features.length} Key Features</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Code className="h-6 w-6 text-[#00C08B] mr-2" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-[#00C08B] bg-opacity-10 text-[#00a87a] px-4 py-2 rounded-lg font-medium flex items-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Shield className="h-6 w-6 text-red-600 mr-2" />
                    The Challenge
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.detailedInfo.challenge}
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Zap className="h-6 w-6 text-green-600 mr-2" />
                    Our Solution
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.detailedInfo.solution}
                  </p>
                </div>
              </div>

              {/* Development Workflow */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <ArrowRight className="h-6 w-6 text-[#00C08B] mr-2" />
                  Development Process
                </h3>
                <div className="relative">
                  <div className="absolute left-5 h-full w-0.5 bg-gray-200"></div>
                  <div className="space-y-8">
                    {selectedProject.detailedInfo.workflow.map((step, index) => (
                      <div key={index} className="relative pl-12">
                        <div className="absolute left-5 top-0 h-6 w-6 rounded-full bg-[#00C08B] text-white flex items-center justify-center -ml-3">
                          {index + 1}
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <p className="font-medium text-gray-900">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Key Features & Functionality</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedProject.detailedInfo.keyFeatures.map((feature, index) => (
                    <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                        <span className="text-[#00C08B] mr-2">{feature.icon}</span>
                        <span>{feature.title}</span>
                      </h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              {/* <div className="bg-gradient-to-r from-[#00C08B] to-[#00a87a] p-8 rounded-xl text-white mb-8">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <BarChart2 className="h-6 w-6 mr-2" />
                  Measurable Results
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {selectedProject.detailedInfo.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                        <div className="text-2xl font-bold mb-1">{result.value}</div>
                        <div className="text-sm">{result.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Testimonials */}
              {selectedProject.detailedInfo.testimonials && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Award className="h-6 w-6 text-[#00C08B] mr-2" />
                    Client Testimonials
                  </h3>
                  <div className="bg-[#00C08B] bg-opacity-10 p-6 rounded-xl">
                    <blockquote className="text-gray-700 italic mb-4">
                      "{selectedProject.detailedInfo.testimonials[0].quote}"
                    </blockquote>
                    <p className="font-medium text-gray-900">
                      — {selectedProject.detailedInfo.testimonials[0].author}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;