import { useState, useEffect } from 'react';
import Technologies from './Technologies';
import data from '../data/data.json'
import Event_and_design from './Event_and_design';
import Hero_slider from './Hero_slider';
import Client from './Client';


const NovapexPage = () => {
  
  
   const {features}= data
  
  const [isClicking, setIsClicking] = useState(false);
    // Slider states
     const [featureIndex, setFeatureIndex] = useState(0);
    const [statsIndex, setStatsIndex] = useState(0);
    
    useEffect(() => {

    // Track mouse down/up
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Auto-rotate features
    const featureInterval = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    // window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      // window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
       clearInterval(featureInterval);
    };
  }, [features.length]);




  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans ">
      {/* Slider Hero Section */}
      <Hero_slider/>

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

      {/* rotational technologies section  */}
      <Technologies></Technologies>

      {/* Client review section */}
      <Client/>

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

      <Event_and_design/>

      
    </div>
  );
};

export default NovapexPage;