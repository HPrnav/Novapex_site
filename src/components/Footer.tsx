import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  // navigate to route + scroll to section
  const handleNavigate = (path: string, sectionId: string) => {
    navigate(path, { state: { sectionId } });
  };

  const services = [
    "Custom Software Development",
    "Mobile App Development",
    "Web Development",
    "Cloud Solutions",
    "UI/UX Design",
    "Data Analytics",
  ];

  const company = [
    { name: "About Us", path: "/about", id: "about" },
    { name: "Our Services", path: "/services", id: "services" },
    { name: "Portfolio", path: "/portfolio", id: "portfolio" },
    { name: "Careers", path: "/careers", id: "careers" },
    { name: "Contact", path: "/contact", id: "contact" },
  ];

  const resources = [
    { name: "Blog", path: "/blog" },
    { name: "Support Center", path: "/support" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              {/* <div className="bg-[#00C08B] p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div> */}
              <span className="text-2xl font-bold">Novapex Infohub</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4" />
                <Link
    to="/contact"
    className="hover:text-[#00C08B] transition-colors duration-200"
  >
    support@novapexhub.com
  </Link>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4" />
               <Link
    to="/contact"
    className="hover:text-[#00C08B] transition-colors duration-200"
  >
    contact@novapexhub.com
  </Link>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+912269718996"
                  className="hover:text-[#00C08B] transition-colors duration-200"
                >
                  +91 22 6971 8996
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Remote</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigate("/services", "services")}
                    className="text-gray-400 hover:text-[#00C08B] transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigate(item.path, item.id)}
                    className="text-gray-400 hover:text-[#00C08B] transition-colors duration-200 text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    to={resource.path}
                    className="text-gray-400 hover:text-[#00C08B] transition-colors duration-200"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="https://www.facebook.com/people/Novapexhub/61570985271108/#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00C08B] transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/novapexhub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00C08B] transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/novapex-infohub/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00C08B] transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-gray-400 text-sm">
                © 2024 Novapex Infohub. All rights reserved.
              </div>
              <button
                onClick={scrollToTop}
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#00C08B] transition-colors duration-200"
                aria-label="Back to top"
              >
                <ArrowUp className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
