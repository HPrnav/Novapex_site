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

  // 🔹 Auto slide every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); 
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
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {index === currentSlide && (
            <img
  src={`${slide.image}&w=800&q=70`}
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
      <div className="relative z-10 text-center space-y-5 sm:space-y-6 px-3 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-3 sm:space-y-5"
        >
          {/* 🔹 Title */}
        <h1
  className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 
             font-extrabold leading-snug text-white drop-shadow-lg 
             break-words text-balance px-2"
>
  {heroSlides[currentSlide].title}
</h1>

{/* 🔹 Subtitle */}
{/* 🔹 Title */}
{/* <h1
  className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 
             font-extrabold leading-snug text-white drop-shadow-lg 
             break-words whitespace-normal 
             max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-2"
>
  {heroSlides[currentSlide].title}
</h1> */}

{/* 🔹 Subtitle */}
<p
  className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 
             text-gray-200 leading-relaxed px-2 text-center
             break-words whitespace-normal 
             max-w-[16rem] sm:max-w-lg md:max-w-2xl mx-auto"
>
  {heroSlides[currentSlide].subtitle}
</p>

        </motion.div>

        {/* 🔹 Slider Indicators */}
        <div className="flex justify-center flex-wrap gap-3 mt-4 sm:mt-6 md:mt-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 focus:outline-none ${
                index === currentSlide
                  ? "bg-white scale-125 shadow-md"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* 🔹 Rotating Service Boxes */}
        <div className="overflow-hidden mt-6 sm:mt-10">
          <motion.div
            className="flex space-x-4 sm:space-x-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...services, ...services].map((service, index) => (
              <div
                key={index}
                className="flex-none bg-white/10 backdrop-blur-md border border-teal-400 text-white 
                           px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl 
                           shadow-lg text-xs sm:text-sm md:text-lg font-semibold"
              >
                {service}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 🔹 Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 md:left-12 top-1/2 transform -translate-y-1/2 
                 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center 
                 transition-all duration-300 backdrop-blur-sm shadow-lg z-20"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 md:right-12 top-1/2 transform -translate-y-1/2 
                 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
                 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center 
                 transition-all duration-300 backdrop-blur-sm shadow-lg z-20"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </section>
  );
}

export default Hero_slider;
