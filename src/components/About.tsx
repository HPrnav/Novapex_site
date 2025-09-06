import { useState } from 'react';
import { Target, Eye, Award, Globe} from 'lucide-react';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      name: "Mr. Amol Harne",
      image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      description: "As an experienced HR professional and visionary entrepreneur, Amol brings a unique perspective to Novapex Infohub. His strategic thinking and people-first approach lay the foundation for a strong, client-centric organization. Amol oversees operations and ensures the delivery of exceptional services tailored to client needs.",
      role: "Chief Executive Officer & Founder",
      color: "#00C08B"
    },
    {
      name: "Mrs. Mrunal Ghenge",
      image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      description: "Mrunal is a creative thinker and problem solver. Her focus on design, quality, and user experience brings life to Novapex Infohub's projects. She specializes in translating client visions into visually appealing, functional web applications.",
      role: "Creative Director & Co-Founder",
      color: "#00C08B"
    },
    {
      name: "Mrs. Rasika Aswar",
      image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      description: "Rasika is a dynamic leader with expertise in web development and project management. Her commitment to delivering excellence drives Novapex Infohub's innovative solutions. She plays a pivotal role in leading the technical team and ensuring projects are executed flawlessly.",
      role: "Technical Lead & Co-Founder",
      color: "#00C08B"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span style={{ color: "#00C08B" }}>Novapex Infohub</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a forward-thinking software development company dedicated to 
            creating innovative solutions that empower businesses to thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Novapex Infohub emerged from a passion for technology and a vision to 
              bridge the gap between complex business challenges and elegant software solutions. 
              Our team of expert developers, designers, and strategists work collaboratively to 
              deliver exceptional results.
            </p>
            <p className="text-gray-600 mb-6">
              We believe in the power of innovation, quality craftsmanship, and building 
              long-lasting partnerships with our clients. Every project we undertake is 
              an opportunity to push boundaries and set new standards in software excellence.
            </p>
            
            {/* Company Building Image */}
            <div className="mt-8 relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern corporate building" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            {/* CEO Information Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                <div className="flex-shrink-0">
                  <img 
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
                    alt="CEO Portrait" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-[#00C08B] shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Mr. Amol Harne</h4>
                  <p className="text-[#00C08B] font-semibold mb-3">
                    Chief Executive Officer & Founder
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    As an experienced HR professional and visionary entrepreneur, Amol brings a unique perspective to Novapex Infohub. His strategic thinking and people-first approach lay the foundation for a strong, client-centric organization. Amol oversees operations and ensures the delivery of exceptional services tailored to client needs.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Why Choose Us Card */}
            <div className="bg-gradient-to-br from-[#00C08B] to-[#008C65] rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Why Choose Novapex Infohub?</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Expert team with proven track record</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Cutting-edge technologies and methodologies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Agile development process</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>24/7 support and maintenance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Transparent communication</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Collaboration Section */}
        {/* <div className="mb-20">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img 
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Team collaboration" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00C08B]/80 via-[#00C08B]/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl mx-auto px-8 text-white">
                <h3 className="text-4xl font-bold mb-6">Collaboration at Its Best</h3>
                <p className="text-xl leading-relaxed">
                  Our diverse team of experts works together seamlessly, combining creativity, 
                  technical expertise, and strategic thinking to deliver exceptional results for every project.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Office Workspace Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern office workspace" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Innovation-Driven Environment</h3>
              <p className="text-gray-600 mb-6">
                Our state-of-the-art facilities are designed to foster creativity and collaboration. 
                From open-concept workspaces to dedicated innovation labs, every corner of our office 
                is optimized for productivity and breakthrough thinking.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#00C08B]/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Open Collaboration</h5>
                  <p className="text-sm text-gray-600">Flexible spaces that encourage teamwork</p>
                </div>
                <div className="bg-[#00C08B]/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Innovation Labs</h5>
                  <p className="text-sm text-gray-600">Dedicated areas for experimentation</p>
                </div>
                <div className="bg-[#00C08B]/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Focus Zones</h5>
                  <p className="text-sm text-gray-600">Quiet spaces for deep work</p>
                </div>
                <div className="bg-[#00C08B]/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Tech Hub</h5>
                  <p className="text-sm text-gray-600">Latest tools and technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Architecture Building */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Architectural Excellence</h3>
              <p className="text-gray-600 mb-6">
                Just as we believe in clean, efficient code, our workspace reflects our commitment to 
                clarity, functionality, and aesthetic excellence. Every detail is thoughtfully designed 
                to inspire our team and impress our clients.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#00C08B] rounded-full"></div>
                  <span className="text-gray-700">Sustainable design principles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#00C08B] rounded-full"></div>
                  <span className="text-gray-700">Energy-efficient systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#00C08B] rounded-full"></div>
                  <span className="text-gray-700">Smart building technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#00C08B] rounded-full"></div>
                  <span className="text-gray-700">Wellness-focused amenities</span>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Clean modern building architecture" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2">Clean Architecture</h4>
                <p className="text-sm opacity-90">Form follows function</p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="mb-20 relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Co-Founders</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders who drive our company's success and innovation
            </p>
          </div>
          
          {/* Slider Container */}
<div className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}


    {/* Team Members */}
   <div className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}


    {/* Team Members in Animated Zig Zag Pattern */}
    <div className="space-y-32">
      {/* Mr. Amol Harne - Left Aligned */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-slide-in-left" style={{animationDelay: '0.4s'}}>
        {/* Image Column */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group">
            <div className="w-64 h-64 bg-gradient-to-r from-[#00C08B] to-[#008C6B] rounded-2xl flex items-center justify-center text-white text-7xl font-bold shadow-2xl transform rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-700">
              AH
            </div>
            {/* Animated Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#00C08B]/20 rounded-full group-hover:scale-125 group-hover:opacity-70 transition-all duration-1000"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#00C08B]/10 rounded-full group-hover:scale-125 group-hover:opacity-70 transition-all duration-1000 delay-200"></div>
            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-2xl border-2 border-[#00C08B] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 animate-pulse"></div>
          </div>
        </div>
        
        {/* Content Column */}
        <div className="lg:col-span-7 lg:pl-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#00C08B] hover:shadow-xl hover:translate-x-2 transition-all duration-500 group">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#00C08B] transition-colors duration-500">
              Mr. Amol Harne
            </h2>
            <p className="text-[#00C08B] font-semibold text-lg mb-6 border-b border-gray-200 pb-4 group-hover:border-[#00C08B] transition-colors duration-500">
              HR Professional & Entrepreneur
            </p>
            <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-500">
              As an experienced HR professional and visionary entrepreneur, Amol brings a unique perspective 
              to Novapex Infohub. His strategic thinking and people-first approach lay the foundation for 
              a strong, client-centric organization. Amol oversees operations and ensures the delivery of 
              exceptional services tailored to client needs.
            </p>
          </div>
        </div>
      </div>

      {/* Mrs. Mrunal Ghenge - Right Aligned */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-slide-in-right" style={{animationDelay: '0.6s'}}>
        {/* Content Column */}
        <div className="lg:col-span-7 lg:order-1">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-r-4 border-[#00C08B] hover:shadow-xl hover:-translate-x-2 transition-all duration-500 group">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#00C08B] transition-colors duration-500">
              Mrs. Mrunal Ghenge
            </h2>
            <p className="text-[#00C08B] font-semibold text-lg mb-6 border-b border-gray-200 pb-4 group-hover:border-[#00C08B] transition-colors duration-500">
              Creative Director & UX Specialist
            </p>
            <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-500">
              Mrunal is a creative thinker and problem solver. Her focus on design, quality, and user 
              experience brings life to Novapex Infohub's projects. She specializes in translating 
              client visions into visually appealing, functional web applications that exceed expectations.
            </p>
          </div>
        </div>
        
        {/* Image Column */}
        <div className="lg:col-span-5 lg:order-2 flex justify-center">
          <div className="relative group">
            <div className="w-64 h-64 bg-gradient-to-r from-[#008C6B] to-[#00C08B] rounded-2xl flex items-center justify-center text-white text-7xl font-bold shadow-2xl transform -rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-700">
              MG
            </div>
            {/* Animated Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#00C08B]/20 rounded-full group-hover:scale-125 group-hover:opacity-70 transition-all duration-1000"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#00C08B]/10 rounded-full group-hover:scale-125 group-hover:opacity-70 transition-all duration-1000 delay-200"></div>
            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-2xl border-2 border-[#00C08B] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Mrs. Daila Aswar - Left Aligned */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-slide-in-left" style={{animationDelay: '0.8s'}}>
        {/* Image Column */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group">
            <div className="w-64 h-64 bg-gradient-to-r from-[#00C08B] to-[#008C6B] rounded-2xl flex items-center justify-center text-white text-7xl font-bold shadow-2xl transform rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-700">
              DA
            </div>
            {/* Animated Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#00C08B]/20 rounded-full group-hover:scale-125 group-hover:opacity-70 transition-all duration-1000"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#00C08B]/10 rounded-full group-hover:scale-125 group-hover:opacity-70 transition-all duration-1000 delay-200"></div>
            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-2xl border-2 border-[#00C08B] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 animate-pulse"></div>
          </div>
        </div>
        
        {/* Content Column */}
        <div className="lg:col-span-7 lg:pl-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#00C08B] hover:shadow-xl hover:translate-x-2 transition-all duration-500 group">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#00C08B] transition-colors duration-500">
              Mrs. Daila Aswar
            </h2>
            <p className="text-[#00C08B] font-semibold text-lg mb-6 border-b border-gray-200 pb-4 group-hover:border-[#00C08B] transition-colors duration-500">
              Technical Lead & Developer
            </p>
            <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-500">
              Daila brings technical expertise and innovation to Novapex Infohub. With a strong background 
              in development and technology solutions, she ensures that projects are built with cutting-edge 
              technologies and robust architecture. Her attention to detail and problem-solving skills make 
              her an invaluable part of our team.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
</div>

          {/* Navigation Dots */}
      
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-[#00C08B]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00C08B] transition-colors duration-300">
              <Target className="h-8 w-8 text-[#00C08B] group-hover:text-white transition-colors duration-300" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Mission</h4>
            <p className="text-gray-600">
              To deliver innovative software solutions that drive business success and create lasting value.
            </p>
          </div>
          <div className="text-center group">
            <div className="bg-[#00C08B]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00C08B] transition-colors duration-300">
              <Eye className="h-8 w-8 text-[#00C08B] group-hover:text-white transition-colors duration-300" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Vision</h4>
            <p className="text-gray-600">
              To be the leading software development partner, known for excellence and innovation.
            </p>
          </div>
          <div className="text-center group">
            <div className="bg-[#00C08B]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00C08B] transition-colors duration-300">
              <Award className="h-8 w-8 text-[#00C08B] group-hover:text-white transition-colors duration-300" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Excellence</h4>
            <p className="text-gray-600">
              We maintain the highest standards in every aspect of our work and client relationships.
            </p>
          </div>
          <div className="text-center group">
            <div className="bg-[#00C08B]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00C08B] transition-colors duration-300">
              <Globe className="h-8 w-8 text-[#00C08B] group-hover:text-white transition-colors duration-300" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h4>
            <p className="text-gray-600">
              Serving clients worldwide with local expertise and global best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;