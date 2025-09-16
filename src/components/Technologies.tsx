import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaAndroid,
  FaGithub,
  FaDocker,
  FaInfinity
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiTypescript,SiSpringboot, SiSupabase } from "react-icons/si";

const techRows = [
  [
    { icon: <FaReact className="text-cyan-400" />, name: "React" },
    { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
    { icon: <FaGithub className="text-gray-800 " />, name: "GitHub" },
    { icon: <SiSpringboot className="text-green-400" />, name: "Springboot" },
    { icon: <SiSupabase className="text-red-800 " />, name: "Supabase" },
  ],
  [
    { icon: <FaJava className="text-red-600" />, name: "Java" },
    { icon: <FaPython className="text-yellow-500" />, name: "Python" },
    { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
    { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
  ],
  [
    { icon: <FaAndroid className="text-green-600" />, name: "Android" },
    { icon: <SiMysql className="text- blue-500" />, name: "MySql" },
    { icon: <FaDocker className="text-blue-400" />, name: "Docker" },
    { icon: <FaReact className="text-cyan-400" />, name: "React Native" },
    { icon: <FaInfinity className="text-gray-800" />, name: "CI/CD" },
  ],
];

const Technologies: React.FC = () => {
  return (
    <section
      id="technologies"
      className="relative py-20 overflow-hidden
       bg-gradient-to-br from-teal-100 via-white to-cyan-100  
       transition-colors duration-500"
      >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold  ">
            Technologies We Use
          </h2>
          <p className="mt-4 text-lg text-gray-600 ">
            From web to mobile and backend — we use cutting-edge tools to build modern solutions 🚀
          </p>
        </div>

        {/* Railway Rows */}
        <div className="space-y-10">
          {techRows.map((row, idx) => (
            <div
              key={idx}
              className={`flex items-center space-x-10 whitespace-nowrap overflow-hidden group`}
            >
              <div
                className={`flex space-x-10 animate-railway ${
                  idx % 2 === 0 ? "" : "animate-railway-reverse"
                }`}
              >
                {row.concat(row).map((tech, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center bg-white/70
                               backdrop-blur-sm shadow-lg px-6 py-4 rounded-2xl min-w-[150px] hover:scale-105 
                               transition-transform"
                  >
                    <div className="text-4xl mb-2">{tech.icon}</div>
                    <p className="text-gray-800 font-medium">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
