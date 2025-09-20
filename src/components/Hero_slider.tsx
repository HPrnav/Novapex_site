import { motion } from "framer-motion";
import data from '../data/data.json'
import { useState, useEffect } from "react";

function Hero_slider() {
  const { heroSlides } = data;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // 🔹 Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const services = [
    "App Development",
    "Web Development",
    "Chatbot Development",
    "Custom Software",
    "UI/UX Design",
    "Cloud Solutions",
    "AI/ML Integration",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {index === currentSlide && (
              <img
                src={`${slide.image}&w=1200&q=70`}
                alt={slide.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          </div>
        ))}
      </div>

      {/* Slide Content */}
      <div className="relative z-10 text-center space-y-10 px-6 max-w-5xl mx-auto">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-lg">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {heroSlides[currentSlide].subtitle}
          </p>
        </motion.div>

        {/* Slider Indicators */}
        <div className="flex justify-center space-x-3 mt-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125 shadow-md"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Rotating Service Boxes */}
        <div className="overflow-hidden mt-12">
          <motion.div
            className="flex space-x-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...services, ...services].map((service, index) => (
              <div
                key={index}
                className="flex-none bg-white/10 backdrop-blur-md border border-teal-400 text-white px-6 py-3 rounded-xl shadow-lg text-lg font-semibold"
              >
                {service}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 md:left-12 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm shadow-lg"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 md:right-12 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm shadow-lg"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </section>
  );
}

export default Hero_slider;
