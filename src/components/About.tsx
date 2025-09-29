import { useState } from "react";
import { Target, Eye, Award, Globe } from "lucide-react";
import data from "../data/data.json";

const icons: Record<string, any> = { Target, Eye, Award, Globe };

// 🔹 Zig-Zag Title Component
const ZigZagTitle = ({ text }) => {
  return (
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex flex-wrap justify-center">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={`inline-block transition-transform duration-500 ${
            i % 2 === 0 ? "-translate-y-2 text-[#00C08B]" : "translate-y-2"
          }`}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
};

// 🔹 Team Member Card (Reusable)
const TeamMemberCard = ({ initials, name, role, description, align = "left" }) => {
  const isLeft = align === "left";

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
        isLeft ? "animate-slide-in-left" : "animate-slide-in-right"
      }`}
      style={{ animationDelay: isLeft ? "0.4s" : "0.6s" }}
    >
      {/* Image Column */}
      <div
        className={`lg:col-span-5 flex justify-center ${
          isLeft ? "" : "lg:order-2"
        }`}
      >
        <div className="relative group">
          <div
            className={`w-64 h-64 bg-gradient-to-r ${
              isLeft ? "from-[#00C08B] to-[#008C6B]" : "from-[#008C6B] to-[#00C08B]"
            } rounded-2xl flex items-center justify-center text-white text-7xl font-bold shadow-2xl ${
              isLeft ? "rotate-3" : "-rotate-3"
            } group-hover:rotate-0 group-hover:scale-105 transition-all duration-700`}
          >
            {initials}
          </div>
          {/* Decorative Circles */}
          <div
            className={`absolute w-20 h-20 bg-[#00C08B]/20 rounded-full group-hover:scale-125 group-hover:opacity-70 transition-all duration-1000 ${
              isLeft ? "-top-4 -left-4" : "-top-4 -right-4"
            }`}
          ></div>
          <div
            className={`absolute w-16 h-16 bg-[#00C08B]/10 rounded-full group-hover:scale-125 group-hover:opacity-70 transition-all duration-1000 delay-200 ${
              isLeft ? "-bottom-4 -right-4" : "-bottom-4 -left-4"
            }`}
          ></div>
          {/* Pulse Border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-[#00C08B] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 animate-pulse"></div>
        </div>
      </div>

      {/* Content Column */}
      <div
        className={`lg:col-span-7 ${
          isLeft ? "lg:pl-12" : "lg:order-1 lg:pr-12"
        }`}
      >
        <div
          className={`bg-white rounded-2xl p-8 shadow-lg ${
            isLeft
              ? "border-l-4 hover:translate-x-2"
              : "border-r-4 hover:-translate-x-2"
          } border-[#00C08B] hover:shadow-xl transition-all duration-500 group`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#00C08B] transition-colors duration-500">
            {name}
          </h2>
          <p className="text-[#00C08B] font-semibold text-lg mb-6 border-b border-gray-200 pb-4 group-hover:border-[#00C08B] transition-colors duration-500">
            {role}
          </p>
          <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const { about } = data;
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {about.title.replace("Novapex Infohub", "")}
            <span style={{ color: "#00C08B" }}> Novapex Infohub</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {about.description}
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {about.ourStory.heading}
            </h3>
            {about.ourStory.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-600 mb-6">
                {p}
              </p>
            ))}
            <div className="mt-8 relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={about.ourStory.image}
                alt="Our Story"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-[#00C08B] to-[#008C65] rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">
              {about.whyChooseUs.heading}
            </h4>
            <ul className="space-y-3">
              {about.whyChooseUs.points.map((point, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Office */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src={about.office.image}
              alt="Office"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {about.office.heading}
            </h3>
            <p className="text-gray-600 mb-6">{about.office.description}</p>
            <div className="grid grid-cols-2 gap-4">
              {about.office.features.map((f, i) => (
                <div key={i} className="bg-[#00C08B]/10 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">{f.title}</h5>
                  <p className="text-sm text-gray-600">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {about.architecture.heading}
            </h3>
            <p className="text-gray-600 mb-6">{about.architecture.description}</p>
            <div className="space-y-4">
              {about.architecture.highlights.map((h, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#00C08B] rounded-full"></div>
                  <span className="text-gray-700">{h}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src={about.architecture.image}
              alt="Architecture"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Team Section - Updated with new pattern */}
        <div className="mb-20">
          <div className="text-center mb-16">
               <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Co-Founders
          </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The visionary leaders who drive our company's success and innovation.
            </p>
          </div>

          <div className="space-y-32">
            {about.teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                initials={getInitials(member.name)}
                name={member.name}
                role={member.shortRole}
                description={member.description}
                align={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {about.values.map((val, i) => {
            const Icon = icons[val.icon];
            return (
              <div key={i} className="text-center group">
                <div className="bg-[#00C08B]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00C08B] transition-colors duration-300">
                  {Icon && (
                    <Icon className="h-8 w-8 text-[#00C08B] group-hover:text-white transition-colors duration-300" />
                  )}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {val.title}
                </h4>
                <p className="text-gray-600">{val.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Helper function to get initials from name
const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
};

export default About;