import React, { useState, useEffect } from 'react';
import Technologies from './Technologies';
import data from '../data/data.json'

const NovapexPage = () => {
  const conferenceImage = "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
  const maintenanceIllustration = "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
  const appScreenshot = "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";

  // Custom cursor state
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [hoverElement, setHoverElement] = useState(null);
  
  // Slider states
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [featureIndex, setFeatureIndex] = useState(0);
  const [statsIndex, setStatsIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

const {heroSlides }= data 
const {testimonials} = data
const {features}= data
const {stats}=data
  

  useEffect(() => {
    // Track mouse movement
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Detect hover state for elements
      const element = document.elementFromPoint(e.clientX, e.clientY);
      setHoverElement(element);
    };

    // Track mouse down/up
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Auto-rotate testimonials
    const testimonialInterval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    // Auto-rotate features
    const featureInterval = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    // Auto-rotate hero slides
    const heroInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      clearInterval(testimonialInterval);
      clearInterval(featureInterval);
      clearInterval(heroInterval);
    };
  }, [testimonials.length, features.length, heroSlides.length]);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextFeature = () => {
    setFeatureIndex((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setFeatureIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans cursor-none">
      {/* Custom Cursor */}
      <div 
        className="fixed w-8 h-8 rounded-full bg-blue-600/20 border-2 border-blue-600 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-100 ease-out"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          scale: isClicking ? '0.5' : '1',
          backgroundColor: hoverElement?.closest('button') ? 'rgba(37, 99, 235, 0.3)' : 'rgba(37, 99, 235, 0.2)',
        }}
      >
        <div className="w-2 h-2 bg-blue-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Slider Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Slides */}
  <div className="absolute inset-0">
    {heroSlides.map((slide, index) => (
      <div
        key={slide.id}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
    ))}
  </div>

  {/* Slide Content */}
  <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
    <div className="space-y-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
        <span className="block">{heroSlides[currentSlide].title}</span>
      </h1>
      <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto">
        {heroSlides[currentSlide].subtitle}
      </p>
    </div>

    {/* Slider Indicators */}
    <div className="flex justify-center space-x-3">
      {heroSlides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentSlide ? "bg-white scale-125" : "bg-white/50"
          }`}
        />
      ))}
    </div>

    {/* Navigation Arrows */}
    <button
      onClick={prevSlide}
      className="absolute left-8 md:left-12 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
    <button
      onClick={nextSlide}
      className="absolute right-8 md:right-12 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</section>





      {/* Conference Hero Section */}
      {/* <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${conferenceImage})` }}
        >
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight text-white">
              <span className="block">Novapex Infohub</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto">
              Join the world's leading developers, designers, and innovators for three days of 
              cutting-edge insights and networking opportunities.
            </p>
          </div>
        </div>
      </section> */}

      {/* Novapex Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Elevate Your Business with 
                  <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Novapex Solutions
                  </span>
                </h1>
                
                <p className="text-lg text-gray-600">
                  Discover innovative strategies and cutting-edge technology designed to propel your business forward in today's competitive market.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800">Customized business solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800">24/7 expert support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800">Proven results</span>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-20 blur-2xl rounded-3xl"></div>
              <div className="relative bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80" 
                  alt="Team collaboration at Novapex" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                
                {/* Floating Card */}
                <div className="absolute -bottom-4 -left-4 bg-white border border-gray-200 rounded-xl p-4 shadow-lg max-w-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">📈</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Growth Strategy</h4>
                      <p className="text-sm text-gray-600">Custom solutions for your business</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* // Add this section after the Event Development & Design Section */}

{/* About Novapex Section */}
<section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Novapex</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Pioneering innovation and excellence in digital solutions
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Company Story */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
          <p className="text-gray-600">
            Novapex began as a small team of passionate developers and designers 
            with a vision to transform how businesses leverage technology. Today, we're a leading 
            digital solutions provider serving clients across 15+ countries.
          </p>
          <p className="text-gray-600">
            Our journey has been marked by continuous innovation, client success stories, and 
            a relentless pursuit of excellence in everything we do.
          </p>
        </div>


{/* 
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300">
          Read Our Full Story
          <svg className="inline ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button> */}
      </div>

      {/* Team Image & Values */}
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-20 blur-2xl rounded-3xl"></div>
        <div className="relative bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-6 shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
            alt="Novapex Team" 
            className="w-full h-auto rounded-2xl shadow-lg"
          />
          
          {/* Values Floating Cards */}
          <div className="absolute -bottom-4 -left-4 bg-white border border-gray-200 rounded-xl p-4 shadow-lg max-w-xs">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xl">🌟</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Innovation</h4>
                <p className="text-sm text-gray-600">Pushing boundaries</p>
              </div>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 bg-white border border-gray-200 rounded-xl p-4 shadow-lg max-w-xs">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xl">🤝</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Collaboration</h4>
                <p className="text-sm text-gray-600">Partnership approach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Mission & Vision */}
    <div className="grid md:grid-cols-2 gap-12 mt-20">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4">
          🎯
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
        <p className="text-gray-600">
          To empower businesses with cutting-edge digital solutions that drive growth, 
          enhance efficiency, and create meaningful impact in today's competitive landscape.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-2xl mb-4">
          🔭
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
        <p className="text-gray-600">
          To be the world's most trusted partner for digital transformation, 
          setting new standards in innovation, quality, and client satisfaction.
        </p>
      </div>
    </div>


  </div>
</section>

<Technologies></Technologies>

      {/* Testimonials Slider Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Hear from businesses that have transformed their operations with Novapex solutions.
          </p>
          
          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xl text-gray-800 italic mb-6 max-w-2xl mx-auto">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === testimonialIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Novapex?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                🚀
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Implementation</h3>
              <p className="text-gray-600">Get your solutions up and running quickly with our efficient processes.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                🛡️
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security measures to protect your data and operations.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                🔍
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Detailed Analytics</h3>
              <p className="text-gray-600">Gain insights with our comprehensive reporting and analysis tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Development & Design Section */}
      <section className="py-20 bg-white px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Event Development & Design Excellence
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Creating immersive digital experiences that bring your event to life across all platforms
          </p>

          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Comprehensive Event Solutions</h3>
                  <p className="text-gray-600">
                    From initial concept to final execution, we craft seamless digital experiences that 
                    engage attendees and amplify your event's impact across all touchpoints.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Responsive Web Design</h4>
                      <p className="text-gray-600 text-sm">Beautiful, functional websites that work perfectly on any device</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Mobile Applications</h4>
                      <p className="text-gray-600 text-sm">Native and cross-platform apps for seamless event engagement</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Registration Systems</h4>
                      <p className="text-gray-600 text-sm">Streamlined ticketing and attendee management solutions</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Live Streaming</h4>
                      <p className="text-gray-600 text-sm">High-quality broadcast capabilities for virtual attendees</p>
                    </div>
                  </div>
                </div>

                {/* <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300">
                  View Our Portfolio
                  <svg className="inline ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button> */}
              </div>

              {/* Image Slider */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <div className="relative h-80 md:h-96">
                    <img 
                      src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Event website design"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h4 className="font-bold text-lg">Conference 2023 Website</h4>
                        <p className="text-sm">Fully responsive design with integrated registration</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slider Controls */}
               

                {/* Floating Stats */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">250+</div>
                    <div className="text-sm text-gray-600">Events Developed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Logos */}
            {/* <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-center text-gray-600 mb-6">Trusted by leading event organizers worldwide</h4>
              <div className="flex flex-wrap justify-center gap-8 opacity-60">
                <div className="w-24 h-12 bg-gray-200 rounded-lg"></div>
                <div className="w-24 h-12 bg-gray-200 rounded-lg"></div>
                <div className="w-24 h-12 bg-gray-200 rounded-lg"></div>
                <div className="w-24 h-12 bg-gray-200 rounded-lg"></div>
                <div className="w-24 h-12 bg-gray-200 rounded-lg"></div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NovapexPage;