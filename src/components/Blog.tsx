import React, { useState } from "react";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "How AI is Transforming Businesses",
      description: "AI is helping companies automate tasks, improve customer experiences, and make data-driven decisions.",
      fullContent: `Artificial Intelligence is no longer a futuristic concept—it's here and transforming businesses across all industries. From automating routine tasks to providing deep insights through data analysis, AI is revolutionizing how companies operate.

Key areas where AI is making an impact:
- Customer service automation with chatbots
- Predictive analytics for better decision-making
- Process automation to increase efficiency
- Personalized marketing campaigns
- Enhanced cybersecurity measures

Companies that embrace AI technology are seeing significant improvements in productivity, cost reduction, and customer satisfaction. The future belongs to those who can effectively integrate AI into their business strategies.`,
      date: "Sep 3, 2025",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      readTime: "5 min read",
      author: "Sarah Johnson",
      authorRole: "AI Specialist"
    },
    {
      id: 2,
      title: "Top Services Every Tech Company Should Offer",
      description: "From cloud solutions to AI-driven analytics, discover the must-have services for modern businesses.",
      fullContent: `In today's competitive landscape, technology companies need to offer comprehensive services that address the evolving needs of modern businesses. The most successful tech firms provide end-to-end solutions that help clients navigate digital transformation.

Essential services include:
- Cloud migration and management
- Custom software development
- Data analytics and business intelligence
- Cybersecurity solutions
- IoT integration services
- AI and machine learning implementation

By offering these services, tech companies position themselves as valuable partners rather than just vendors, creating long-term relationships with clients.`,
      date: "Aug 20, 2025",
      category: "Services",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      readTime: "7 min read",
      author: "Michael Chen",
      authorRole: "Service Director"
    },
    {
      id: 3,
      title: "The Future of Work with AI",
      description: "Artificial Intelligence is reshaping industries. Learn how your company can stay ahead.",
      fullContent: `The workplace is undergoing a radical transformation thanks to artificial intelligence. Rather than replacing human workers, AI is augmenting human capabilities and creating new opportunities for innovation and growth.

Future work trends include:
- Hybrid human-AI teams
- Remote work enhanced by AI tools
- Continuous learning and skill development
- Focus on creative and strategic tasks
- Automated routine operations

Companies that successfully adapt to these changes will thrive in the new era of work, while those that resist may struggle to compete.`,
      date: "Aug 10, 2025",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      readTime: "6 min read",
      author: "Emma Rodriguez",
      authorRole: "Future Work Analyst"
    },
    {
      id: 4,
      title: "Cloud Computing Trends for 2025",
      description: "Discover the latest developments in cloud technology and how they impact business operations.",
      fullContent: `Cloud computing continues to evolve at a rapid pace, with new trends emerging that are reshaping how businesses leverage cloud infrastructure. Staying current with these developments is crucial for maintaining competitive advantage.

Key trends for 2025:
- Multi-cloud and hybrid cloud strategies
- Serverless computing adoption
- Edge computing integration
- AI-powered cloud management
- Enhanced security and compliance features
- Sustainable cloud solutions

These trends are making cloud computing more accessible, secure, and efficient for businesses of all sizes.`,
      date: "Jul 28, 2025",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      readTime: "8 min read",
      author: "David Kim",
      authorRole: "Cloud Architect"
    },
    {
      id: 5,
      title: "Cybersecurity Best Practices",
      description: "Essential strategies to protect your business from evolving cyber threats in the digital age.",
      fullContent: `As cyber threats become more sophisticated, businesses must adopt comprehensive security practices to protect their data, systems, and reputation. A proactive approach to cybersecurity is no longer optional—it's essential for survival.

Critical best practices include:
- Regular security assessments and audits
- Employee training and awareness programs
- Multi-factor authentication implementation
- Data encryption both at rest and in transit
- Incident response planning
- Regular software updates and patch management

Implementing these practices can significantly reduce your organization's vulnerability to cyber attacks.`,
      date: "Jul 15, 2025",
      category: "Security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      readTime: "9 min read",
      author: "Lisa Thompson",
      authorRole: "Security Expert"
    },
    {
      id: 6,
      title: "Digital Transformation Strategies",
      description: "How to successfully navigate the process of digital transformation in your organization.",
      fullContent: `Digital transformation is more than just adopting new technologies—it's about fundamentally changing how your organization operates and delivers value to customers. A successful transformation requires careful planning and execution.

Effective strategies include:
- Developing a clear digital vision and roadmap
- Fostering a culture of innovation and adaptability
- Investing in the right technology stack
- Prioritizing customer experience
- Building cross-functional teams
- Measuring progress with relevant KPIs

Organizations that approach digital transformation holistically are more likely to achieve sustainable success.`,
      date: "Jun 30, 2025",
      category: "Business",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      readTime: "10 min read",
      author: "James Wilson",
      authorRole: "Transformation Consultant"
    }
  ];

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#00C08B] mb-4">Our Blog</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, trends, and news about technology, business, and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => openModal(post)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full group cursor-pointer"
            >
              {/* Image with overlay */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-[#00C08B] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center text-white text-sm">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                  </svg>
                  {post.readTime}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00C08B] transition-colors duration-300">{post.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{post.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
                  <span>{post.date}</span>
                  <span className="inline-flex items-center text-[#00C08B] font-medium">
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal/Popup */}
      {isModalOpen && selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Header image */}
              <div className="h-64 relative">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-[#00C08B] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {selectedPost.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-500">{selectedPost.date}</span>
                  <span className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                    </svg>
                    {selectedPost.readTime}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedPost.title}</h2>
                <p className="text-gray-600 mb-6 text-lg">{selectedPost.description}</p>

                <div className="prose max-w-none mb-8">
                  {selectedPost.fullContent.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                  ))}
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#00C08B] rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {selectedPost.author.split(' ').map(name => name[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{selectedPost.author}</p>
                      <p className="text-sm text-gray-500">{selectedPost.authorRole}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;