import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0A0F2D] via-[#1A2368] to-[#00C08B] z-50 overflow-hidden">
      {/* Animated background elements - Slower and more cartoonish */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#00C08B]/10 rounded-full animate-pulse-very-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#1A2368]/20 rounded-full animate-pulse-very-slow animation-delay-6000"></div>
      <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-[#00C08B]/15 rounded-full animate-ping-very-slow"></div>
      
      {/* Floating cartoon clouds */}
      <div className="absolute top-10 left-1/4 animate-float-very-slow">
        <div className="w-24 h-12 bg-white/30 rounded-full relative">
          <div className="absolute -top-3 left-4 w-10 h-10 bg-white/30 rounded-full"></div>
          <div className="absolute -top-5 left-10 w-12 h-12 bg-white/30 rounded-full"></div>
          <div className="absolute -top-2 left-16 w-8 h-8 bg-white/30 rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute bottom-20 right-1/4 animate-float-very-slow animation-delay-3000">
        <div className="w-20 h-10 bg-white/30 rounded-full relative">
          <div className="absolute -top-2 left-3 w-8 h-8 bg-white/30 rounded-full"></div>
          <div className="absolute -top-4 left-8 w-10 h-10 bg-white/30 rounded-full"></div>
          <div className="absolute -top-1 left-14 w-6 h-6 bg-white/30 rounded-full"></div>
        </div>
      </div>
      
      {/* Cartoon character */}
      <div className="absolute bottom-10 left-10 animate-bounce-very-slow">
        <div className="relative">
          {/* Body */}
          <div className="w-16 h-20 bg-[#00C08B] rounded-t-full rounded-b-3xl"></div>
          {/* Head */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#00C08B] rounded-full"></div>
          {/* Eyes */}
          <div className="absolute -top-4 left-4 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute -top-4 right-4 w-4 h-4 bg-white rounded-full"></div>
          {/* Pupils */}
          <div className="absolute -top-3 left-5 w-2 h-2 bg-black rounded-full animate-ping-very-slow"></div>
          <div className="absolute -top-3 right-5 w-2 h-2 bg-black rounded-full animate-ping-very-slow animation-delay-1000"></div>
        </div>
      </div>
      
      {/* Central logo container */}
      <div className="relative mb-8">
        {/* Outer glow effect */}
        <div className="absolute inset-0 bg-[#00C08B]/30 rounded-3xl blur-xl animate-pulse-very-slow"></div>
        
        {/* Main logo */}
        <div className="relative w-28 h-28 bg-gradient-to-br from-[#0A0F2D] to-[#1A2368] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#00C08B]/20 border border-[#00C08B]/30">
          {/* Hexagon icon */}
          <div className="relative">
            <svg 
              className="w-14 h-14 text-[#00C08B]" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path 
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" 
                stroke="currentColor" 
                strokeWidth="2"
              />
              <path 
                d="M17 15C17 16.6569 15.6569 18 14 18H10C8.34315 18 7 16.6569 7 15" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            
            {/* Animated elements inside logo */}
            <div className="absolute top-3 left-3 w-2 h-2 bg-[#00C08B] rounded-full animate-ping-very-slow"></div>
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-[#00C08B] rounded-full animate-pulse-very-slow"></div>
          </div>
        </div>
        
        {/* Orbiting dots - Slower */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#00C08B] rounded-full animate-orbit-very-slow shadow-lg shadow-[#00C08B]/50"></div>
        <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#00C08B] rounded-full animate-orbit-reverse-very-slow animation-delay-3000 shadow-lg shadow-[#00C08B]/50"></div>
      </div>
      
      {/* Company name with animation - Slower */}
      <div className="text-center mb-2">
        <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
          <span className="inline-block animate-fade-in-very-slow animation-delay-1200 opacity-0">N</span>
          <span className="inline-block animate-fade-in-very-slow animation-delay-1600 opacity-0">o</span>
          <span className="inline-block animate-fade-in-very-slow animation-delay-2000 opacity-0">v</span>
          <span className="inline-block animate-fade-in-very-slow animation-delay-2400 opacity-0">a</span>
          <span className="inline-block animate-fade-in-very-slow animation-delay-2800 opacity-0">P</span>
          <span className="inline-block animate-fade-in-very-slow animation-delay-3200 opacity-0">e</span>
          <span className="inline-block animate-fade-in-very-slow animation-delay-3600 opacity-0">x</span>
          <span className="inline-block mx-2"> </span>
          <span className="inline-block animate-fade-in-very-slow animation-delay-4000 opacity-0">I</span>
          <span className="inline-block animate-fade-in-very-slow animation-delay-4400 opacity-0">n</span>
          <span className="inline-block animate-fade-in-very-slow animation-delay-4800 opacity-0">f</span>
          <span className="inline-block animate-fade-in-very-slow animation-delay-5200 opacity-0">o</span>
          <span className="inline-block animate-fade-in-very-slow animation-delay-5600 opacity-0">h</span>
          <span className="inline-block animate-fade-in-very-slow animation-delay-6000 opacity-0">u</span>
          <span className="inline-block animate-fade-in-very-slow animation-delay-6400 opacity-0">b</span>
        </h1>
        <p className="text-[#00C08B] text-lg font-medium tracking-wider animate-pulse-very-slow">
          Intelligent Digital Solutions
        </p>
      </div>
      
      {/* Tech-inspired loading bar - Slower */}
      <div className="w-80 h-1.5 bg-[#0A0F2D] rounded-full mt-8 overflow-hidden border border-[#00C08B]/20">
        <div className="h-full bg-gradient-to-r from-[#00C08B] to-[#1A2368] rounded-full w-0 animate-progress-glow-very-slow shadow-lg shadow-[#00C08B]/40"></div>
      </div>
      
      {/* Binary code animation - Slower */}
      <div className="mt-6 text-xs text-[#00C08B]/40 font-mono flex space-x-4">
        <div className="animate-binary-flow-very-slow">10101010 00110100 11110000</div>
        <div className="animate-binary-flow-very-slow animation-delay-6000">01010101 11001100 00001111</div>
      </div>
      
      {/* Loading status */}
      <div className="mt-6 text-[#00C08B] text-sm font-light flex items-center">
        <svg className="w-4 h-4 mr-2 animate-spin-very-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Initializing systems...
      </div>
      
      {/* Custom animations - Very slow versions */}
      <style jsx>{`
        @keyframes progress-glow-very-slow {
          0% { width: 0%; opacity: 0.7; }
          50% { opacity: 1; }
          100% { width: 100%; opacity: 0.7; }
        }
        @keyframes orbit-very-slow {
          0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
        }
        @keyframes orbit-reverse-very-slow {
          0% { transform: rotate(0deg) translateX(15px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(15px) rotate(360deg); }
        }
        @keyframes fade-in-very-slow {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes binary-flow-very-slow {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
        @keyframes float-very-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes bounce-very-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-progress-glow-very-slow {
          animation: progress-glow-very-slow 9s ease-in-out infinite;
        }
        .animate-orbit-very-slow {
          animation: orbit-very-slow 12s linear infinite;
        }
        .animate-orbit-reverse-very-slow {
          animation: orbit-reverse-very-slow 9s linear infinite;
        }
        .animate-fade-in-very-slow {
          animation: fade-in-very-slow 2s forwards;
        }
        .animate-binary-flow-very-slow {
          animation: binary-flow-very-slow 6s ease-in-out infinite;
        }
        .animate-float-very-slow {
          animation: float-very-slow 8s ease-in-out infinite;
        }
        .animate-bounce-very-slow {
          animation: bounce-very-slow 4s ease-in-out infinite;
        }
        .animate-pulse-very-slow {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-ping-very-slow {
          animation: ping 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-spin-very-slow {
          animation: spin 4s linear infinite;
        }
        .animation-delay-1200 { animation-delay: 1.2s; }
        .animation-delay-1600 { animation-delay: 1.6s; }
        .animation-delay-2000 { animation-delay: 2.0s; }
        .animation-delay-2400 { animation-delay: 2.4s; }
        .animation-delay-2800 { animation-delay: 2.8s; }
        .animation-delay-3200 { animation-delay: 3.2s; }
        .animation-delay-3600 { animation-delay: 3.6s; }
        .animation-delay-4000 { animation-delay: 4.0s; }
        .animation-delay-4400 { animation-delay: 4.4s; }
        .animation-delay-4800 { animation-delay: 4.8s; }
        .animation-delay-5200 { animation-delay: 5.2s; }
        .animation-delay-5600 { animation-delay: 5.6s; }
        .animation-delay-6000 { animation-delay: 6.0s; }
        .animation-delay-6400 { animation-delay: 6.4s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-6000 { animation-delay: 6s; }
      `}</style>
    </div>
  );
};

export default Loader;