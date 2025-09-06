import { useState } from "react";
import { Target, Eye, Award, Globe } from "lucide-react";
import data from "../data/data.json";

const icons: Record<string, any> = { Target, Eye, Award, Globe };

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

        {/* Team */}
        <div className="mb-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Co-Founders
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Meet the visionary leaders who drive our company's success and
            innovation
          </p>
          <div className="space-y-16">
            {about.teamMembers.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#00C08B] max-w-3xl mx-auto"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h2>
                <p className="text-[#00C08B] font-semibold mb-4">
                  {member.shortRole}
                </p>
                <p className="text-gray-700">{member.description}</p>
              </div>
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

export default About;
