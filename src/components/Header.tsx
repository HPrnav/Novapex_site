import  { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  // Determine if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : isHomePage 
            ? 'bg-white shadow-sm' 
            : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <NavLink 
              to="/" 
              className="flex items-center"
              onClick={closeMenu}
            >
              <img 
                src="/src/Assets/LogoBT.png" 
                alt="Logo" 
                className="h-20 w-auto object-cover"
              />
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `text-sm font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-[#00C08B] font-semibold' 
                      : isScrolled || isHomePage
                        ? 'text-gray-900 hover:text-[#00C08B]' 
                        : 'text-black hover:text-[#00C08B]'
                  }`}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className={`h-4 w-6 ${isScrolled || isHomePage ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`h-4 w-6 ${isScrolled || isHomePage ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 py-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) => `block w-full text-left px-4 py-3 transition-colors duration-200 ${
                    isActive
                      ? 'bg-[#00C08B]/10 text-[#00C08B] font-medium'
                      : 'text-gray-900 hover:bg-gray-50 hover:text-[#00C08B]'
                  }`}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* WhatsApp Button - Fixed position outside header */}
      <div className="fixed right-6 bottom-6 z-40">
        <a 
          href="https://wa.me/919420409902" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#00C08B] text-white rounded-full w-16 h-16 shadow-xl hover:bg-[#009970] transition-all duration-300 hover:shadow-2xl hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </>
  );
};

export default Header;
