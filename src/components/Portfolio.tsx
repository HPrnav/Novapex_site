import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, Github, Calendar, Users, Code, X, 
  CheckCircle, ArrowRight, Zap, Shield, Database, 
  Globe, Phone, MapPin, Clock, Star, ChevronRight,
  Layout, Server, Cpu, Smartphone, BarChart2, Award,
  Dumbbell, BookOpen, ShoppingCart, Clipboard, Search,
  Truck, MessageSquare, Activity,
  Store,
  CreditCard,
  ShoppingBag,
  Utensils
} from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const projectCategories = [
    'All',
    'Restaurant',
    'Gym',
    'Education',
    'Service',
    'E-commerce',
    'Booking',
  
  ];

  const projects = [
    // Restaurant Project
    {
      id: 1,
      title: 'Restaurant Platform',
      category: 'Restaurant',
      description: 'A complete digital solution for restaurants with online food ordering, table booking, and kitchen management.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
      duration: '3 months',
      team: '4 developers',
      features: ['Online Ordering', 'Table Reservations', 'Kitchen Dashboard', 'Delivery Tracking'],
      detailedInfo: {
        overview: 'Foodiez is a modern restaurant platform that enables customers to order food online, reserve tables, and track their deliveries in real-time while helping restaurants manage operations efficiently.',
        challenge: 'Restaurants faced challenges with handling phone-based orders, limited visibility into table availability, and poor coordination between front-office and kitchen staff.',
        solution: 'We developed a robust system with online ordering, table booking, real-time kitchen dashboards, and delivery tracking to streamline the entire workflow.',
        workflow: [
          'Requirement Analysis',
          'Menu & Ordering System',
          'Table Booking Module',
          'Kitchen Management Dashboard',
          'Payment Gateway Integration',
          'Delivery Tracking Setup',
          'Testing & QA',
          'Deployment & Support'
        ],
        keyFeatures: [
          {
            title: 'Online Food Ordering',
            description: 'Easy menu browsing, customization, and online order placement',
            icon: <ShoppingBag className="h-5 w-5" />
          },
          {
            title: 'Table Reservations',
            description: 'Customers can book tables in advance with live availability',
            icon: <Calendar className="h-5 w-5" />
          },
          {
            title: 'Kitchen Dashboard',
            description: 'Real-time order updates and status tracking for chefs',
            icon: <Utensils className="h-5 w-5" />
          },
          {
            title: 'Delivery Tracking',
            description: 'Track food delivery with live status updates',
            icon: <Truck className="h-5 w-5" />
          }
        ],
        results: [
          { value: '60%', label: 'Increase in online orders' },
          { value: '2x', label: 'Faster table turnovers' },
          { value: '35%', label: 'Reduction in order errors' },
          { value: '4.8/5', label: 'Customer satisfaction score' }
        ],
        testimonials: [
          {
            quote: "Foodiez transformed our restaurant operations. Online orders doubled and our table reservations are now fully automated.",
            author: "Priya Sharma, Restaurant Owner"
          },
          {
            quote: "The kitchen dashboard helped us reduce errors and serve faster. Our chefs love it!",
            author: "Rahul Verma, Head Chef"
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Citi Offers - E-commerce Platform',
      category: 'E-commerce',
      description: 'A next-gen e-commerce marketplace offering a wide range of products, fast delivery, secure payments, and personalized shopping experiences.',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      duration: '6 months',
      team: '8 developers',
      features: ['Product Catalog', 'Personalized Recommendations', 'Cart & Checkout', 'Order Tracking', 'Vendor Dashboard'],
      detailedInfo: {
        overview: 'Citi Offers is a robust e-commerce marketplace built to deliver a seamless shopping experience, connecting buyers and sellers with secure, scalable, and feature-rich digital tools.',
        challenge: 'Customers demanded a reliable online shopping solution with a smooth user interface, quick order processing, and a wide variety of products. Existing platforms lacked personalization and vendor-friendly tools.',
        solution: 'We designed and developed a scalable multi-vendor platform with personalized shopping, AI-driven product recommendations, and streamlined logistics integration.',
        workflow: [
          'Market Research & Competitor Analysis',
          'Product Catalog & Vendor Integration',
          'Shopping Cart & Secure Payments',
          'AI Recommendation System',
          'Order Tracking Development',
          'Mobile App Development',
          'Logistics & Delivery Integration',
          'Launch & Ongoing Support'
        ],
        keyFeatures: [
          {
            title: 'Smart Product Catalog',
            description: 'Organized product listings with advanced filters and search',
            icon: <ShoppingCart className="h-5 w-5" />
          },
          {
            title: 'Personalized Recommendations',
            description: 'AI-powered suggestions tailored to user preferences',
            icon: <Star className="h-5 w-5" />
          },
          {
            title: 'Order Tracking',
            description: 'Real-time updates on shipment and delivery status',
            icon: <Truck className="h-5 w-5" />
          },
          {
            title: 'Vendor Dashboard',
            description: 'Tools for sellers to manage inventory, pricing, and promotions',
            icon: <Store className="h-5 w-5" />
          }
        ],
        results: [
          {
            value: '1M+',
            label: 'Active Users within first year'
          },
          {
            value: '50K+',
            label: 'Orders processed monthly'
          },
          {
            value: '30%',
            label: 'Increase in vendor revenue'
          },
          {
            value: '4.8/5',
            label: 'Average customer satisfaction score'
          }
        ],
        testimonials: [
          {
            quote: "Citi Offers transformed our online shopping experience. The speed, recommendations, and tracking are on par with global giants.",
            author: "Ramesh Patel, Vendor Partner"
          },
          {
            quote: "I switched from other e-commerce apps to Citi Offers – the personalized deals and fast delivery are unbeatable!",
            author: "Priya Sharma, Customer"
          }
        ]
      }
    },
    {
      id: 3,
      title: 'FitTrack Gym Management System',
      category: 'Gym',
      description: 'A comprehensive gym management platform with member tracking, class scheduling, workout analytics, and payment processing.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      duration: '4 months',
      team: '5 developers',
      features: ['Member Management', 'Class Scheduling', 'Workout Tracking', 'Progress Analytics'],
      detailedInfo: {
        overview: 'An all-in-one gym management solution that helps fitness centers streamline operations, enhance member experience, and track performance metrics with digital tools.',
        challenge: 'Gyms were struggling with manual member management, inefficient class scheduling, and lacked tools to track member progress and engagement.',
        solution: 'We developed a comprehensive system with member portals, trainer dashboards, real-time class scheduling, and detailed workout analytics.',
        workflow: [
          'Gym Requirements Analysis',
          'Member Management System Design',
          'Class Scheduling Integration',
          'Workout Tracking Development',
          'Payment Processing Setup',
          'Mobile App Development',
          'Staff Training & Onboarding',
          'Launch & Support'
        ],
        keyFeatures: [
          {
            title: 'Member Portal',
            description: 'Personalized dashboards with workout history, progress tracking, and payment management',
            icon: <Users className="h-5 w-5" />
          },
          {
            title: 'Class Scheduling',
            description: 'Real-time class booking with capacity management and waitlist features',
            icon: <Calendar className="h-5 w-5" />
          },
          {
            title: 'Workout Analytics',
            description: 'Detailed performance metrics and visual progress tracking',
            icon: <Activity className="h-5 w-5" />
          },
          {
            title: 'Trainer Dashboard',
            description: 'Tools for client management and personalized workout plans',
            icon: <Dumbbell className="h-5 w-5" />
          }
        ],
        results: [
          {
            value: '90%',
            label: 'Member retention rate'
          },
          {
            value: '3x',
            label: 'More class bookings'
          },
          {
            value: '40%',
            label: 'Reduced administrative work'
          },
          {
            value: '4.9/5',
            label: 'Member satisfaction score'
          }
        ],
        testimonials: [
          {
            quote: "FitTrack revolutionized how we manage our gym. Member engagement has never been higher and our staff spends 60% less time on admin tasks.",
            author: "Sarah Johnson, Gym Owner"
          }
        ]
      }
    },
    {
      id: 4,
      title: 'EduConnect School Portal',
      category: 'Education',
      description: 'Complete school management system with public website, parent portal, teacher dashboard, and administrative ERP features.',
      image: 'https://images.pexels.com/photos/4144225/pexels-photo-4144225.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'JWT Auth'],
      duration: '6 months',
      team: '8 developers',
      features: [
        'School Website CMS',
        'ERP Login System',
        'Grade Management',
        'Attendance Tracking',
        'Fee Payment Portal',
        'Parent-Teacher Communication'
      ],
      detailedInfo: {
        overview: 'A comprehensive education platform combining a modern school website with a powerful ERP system for complete school administration, student management, and parent engagement.',
        challenge: 'Schools needed an integrated solution that combined their public-facing website with secure internal management tools while maintaining data consistency across platforms.',
        solution: 'Developed a unified platform with role-based access (admin, teacher, student, parent) connecting the public website with backend ERP functionality through a secure login system.',
        workflow: [
          'Stakeholder interviews with school administrators',
          'User journey mapping for all roles',
          'Public website CMS development',
          'ERP backend architecture',
          'Role-based authentication system',
          'Grade and attendance modules',
          'Payment gateway integration',
          'Training and deployment'
        ],
        keyFeatures: [
          {
            title: 'School Website',
            description: 'Customizable CMS for school information, news, and event management',
            icon: <Globe className="h-5 w-5" />
          },
          {
            title: 'ERP Login System',
            description: 'Secure multi-role authentication with SSO capabilities',
            icon: <Shield className="h-5 w-5" />
          },
          {
            title: 'Admin Dashboard',
            description: 'Complete school management with student records, staff management, and reporting',
            icon: <Database className="h-5 w-5" />
          },
          {
            title: 'Parent Portal',
            description: 'Real-time access to grades, attendance, and school communications',
            icon: <Users className="h-5 w-5" />
          },
          {
            title: 'Teacher Workspace',
            description: 'Grade submission, attendance marking, and lesson planning tools',
            icon: <BookOpen className="h-5 w-5" />
          },
          {
            title: 'Fee Management',
            description: 'Online payment processing with receipts and payment history',
            icon: <CreditCard className="h-5 w-5" />
          }
        ],
        results: [
          {
            value: '75%',
            label: 'Reduction in administrative workload'
          },
          {
            value: '95%',
            label: 'Parent engagement rate'
          },
          {
            value: '100+',
            label: 'Schools implemented'
          },
          {
            value: '4.9/5',
            label: 'User satisfaction score'
          }
        ],
        testimonials: [
          {
            quote: "EduConnect transformed how our school operates. The seamless integration between our website and management system saved us countless hours.",
            author: "Dr. Robert Johnson, School Principal"
          },
          {
            quote: "As a parent, I love being able to see my child's progress in real-time through the portal.",
            author: "Lisa Thompson, Parent"
          }
        ]
      }
    },
    {
      id: 5,
      title: 'CleanPro Manpower Services',
      category: 'Service',
      description: 'On-demand housekeeping and manpower service platform connecting clients with professional cleaners and service providers.',
      image: 'https://images.pexels.com/photos/5081392/pexels-photo-5081392.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API', 'Twilio'],
      duration: '5 months',
      team: '5 developers',
      features: [
        'Service Booking System',
        'Worker Management',
        'Real-time Tracking',
        'Quality Assurance',
        'Payment Processing',
        'Client Portal'
      ],
      detailedInfo: {
        overview: 'A complete digital solution for housekeeping and manpower services that streamlines booking, dispatching, and quality control for service businesses.',
        challenge: 'Service providers struggled with manual booking processes, inefficient worker dispatch, and lacked transparency for clients about service status.',
        solution: 'Developed a mobile-friendly platform with real-time booking, GPS tracking of workers, quality assurance checks, and automated payment processing.',
        workflow: [
          'Service provider interviews',
          'Booking flow design',
          'Worker management system',
          'Real-time tracking integration',
          'Quality control features',
          'Payment processing setup',
          'Mobile app development',
          'Deployment and training'
        ],
        keyFeatures: [
          {
            title: 'Instant Booking',
            description: '24/7 online booking with immediate confirmation',
            icon: <Calendar className="h-5 w-5" />
          },
          {
            title: 'Worker Management',
            description: 'Complete staff profiles with skills, ratings and availability',
            icon: <Users className="h-5 w-5" />
          },
          {
            title: 'Live Tracking',
            description: 'Real-time GPS tracking of service providers',
            icon: <MapPin className="h-5 w-5" />
          },
          {
            title: 'Quality Control',
            description: 'Post-service checklists and client ratings',
            icon: <CheckCircle className="h-5 w-5" />
          },
          {
            title: 'Flexible Payments',
            description: 'Multiple payment options with automated invoicing',
            icon: <CreditCard className="h-5 w-5" />
          },
          {
            title: 'Client Portal',
            description: 'Service history, receipts and rebooking',
            icon: <Clipboard className="h-5 w-5" />
          }
        ],
        results: [
          {
            value: '3x',
            label: 'More bookings'
          },
          {
            value: '90%',
            label: 'On-time arrivals'
          },
          {
            value: '4.8/5',
            label: 'Average service rating'
          },
          {
            value: '50%',
            label: 'Reduced admin costs'
          }
        ],
        testimonials: [
          {
            quote: "CleanPro transformed our small cleaning business into a professional service with 3x more clients in just 6 months.",
            author: "Maria Gonzalez, Cleaning Business Owner"
          },
          {
            quote: "I love being able to see exactly when my cleaner will arrive and track their progress to my home.",
            author: "David Wilson, Regular Client"
          }
        ]
      }
    },
    {
      id: 6,
      title: 'Lagu Udhyog Papad Center Website',
      category: 'Lagu Udhyog',
      description: 'A complete online presence for a papad manufacturing business with product showcase, order management, and distributor network.',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
      duration: '2 months',
      team: '3 developers',
      features: ['Product Catalog', 'Online Orders', 'Distributor Portal', 'Bulk Order System'],
      detailedInfo: {
        overview: 'A specialized website for a papad manufacturing business that showcases their products, handles online orders, and manages distributor relationships.',
        challenge: 'Traditional papad businesses lacked digital presence, making it difficult to reach new customers and manage bulk orders efficiently.',
        solution: 'We created a comprehensive platform with product showcase, online ordering system, and a dedicated portal for distributors to place bulk orders.',
        workflow: [
          'Business Requirements Analysis',
          'Product Catalog Design',
          'Order Management System',
          'Distributor Portal Development',
          'Payment Gateway Integration',
          'Quality Testing',
          'Launch & Training'
        ],
        keyFeatures: [
          {
            title: 'Product Showcase',
            description: 'Beautiful display of papad varieties with detailed descriptions and images',
            icon: <ShoppingCart className="h-5 w-5" />
          },
          {
            title: 'Online Ordering',
            description: 'Easy ordering system for retail and bulk customers',
            icon: <Clipboard className="h-5 w-5" />
          },
          {
            title: 'Distributor Portal',
            description: 'Dedicated area for distributors to place and track bulk orders',
            icon: <Truck className="h-5 w-5" />
          },
          {
            title: 'Recipe Section',
            description: 'Creative recipes using their papad products to increase engagement',
            icon: <BookOpen className="h-5 w-5" />
          }
        ],
        results: [
          { value: '200%', label: 'Increase in orders' },
          { value: '50+', label: 'New distributors onboarded' },
          { value: '4.7/5', label: 'Customer satisfaction' },
          { value: '30%', label: 'Reduction in order processing time' }
        ],
        testimonials: [
          {
            quote: "This website transformed our small papad business. We now receive orders from across the region and our distributor network has expanded significantly.",
            author: "Rajesh Patel, Papad Center Owner"
          }
        ]
      }
    },
    {
      id: 7,
      title: 'BookEasy - Online Booking Platform',
      category: 'Booking',
      description: 'A seamless online booking platform for hotels, travel, and events with real-time availability, secure payments, and personalized recommendations.',
      image: 'https://images.pexels.com/photos/4144225/pexels-photo-4144225.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Firebase'],
      duration: '5 months',
      team: '6 developers',
      features: ['Hotel & Travel Booking', 'Event Reservations', 'Payment Gateway', 'User Reviews', 'Smart Recommendations'],
      detailedInfo: {
        overview: 'BookEasy is a one-stop booking solution designed to simplify reservations for hotels, travel packages, and events with real-time availability and secure payments.',
        challenge: 'Users often faced issues with fragmented booking services, lack of real-time availability updates, and unreliable payment integrations.',
        solution: 'We built a unified booking platform with multi-category reservations, real-time seat/room availability, smart recommendations, and secure payment integration.',
        workflow: [
          'Market Research & Requirement Gathering',
          'Booking Flow Design',
          'Availability & Inventory Integration',
          'Payment Gateway Setup',
          'Event & Travel Modules',
          'User Reviews & Ratings',
          'Mobile App Development',
          'Testing & Deployment'
        ],
        keyFeatures: [
          {
            title: 'Unified Booking System',
            description: 'Book hotels, events, and travel packages in one platform',
            icon: <Calendar className="h-5 w-5" />
          },
          {
            title: 'Real-Time Availability',
            description: 'Instant updates on room availability and event seats',
            icon: <Clock className="h-5 w-5" />
          },
          {
            title: 'Smart Recommendations',
            description: 'AI-driven suggestions based on user preferences and past bookings',
            icon: <Star className="h-5 w-5" />
          },
          {
            title: 'Secure Payments',
            description: 'Integrated with Stripe & multiple wallets for safe checkout',
            icon: <CreditCard className="h-5 w-5" />
          },
          {
            title: 'User Reviews',
            description: 'Ratings and feedback system for transparency and trust',
            icon: <Users className="h-5 w-5" />
          }
        ],
        results: [
          { value: '500K+', label: 'Bookings in first year' },
          { value: '70%', label: 'Returning users rate' },
          { value: '40%', label: 'Faster booking process' },
          { value: '4.9/5', label: 'Average user rating' }
        ],
        testimonials: [
          {
            quote: "BookEasy made my vacation planning so simple. I could book my hotel, event tickets, and travel in one place!",
            author: "Ananya Mehta, Frequent Traveler"
          },
          {
            quote: "As an event organizer, BookEasy helped me reach more customers and manage bookings effortlessly.",
            author: "Karan Singh, Event Organizer"
          }
        ]
      }
    }
  ];

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
              <div className="bg-gradient-to-r from-[#00C08B] to-[#00a87a] p-8 rounded-xl text-white mb-8">
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
              </div>

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