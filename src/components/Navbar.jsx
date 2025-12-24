import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";



import { FiMenu, FiX, FiUser, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Customize', href: '/customize' },
    { name: 'BulkOrders', href: '/bulkorders' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact-us' },
  ];


  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center">
              <div className="w-10 h-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                R
              </div>
              <span className="ml-3 text-xl font-semibold text-gray-900">Radiantlunar</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-[#1E3A8A] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>


          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#login"
              className="text-[#1E3A8A] border border-[#1E3A8A] hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              <div className="flex items-center">
                <FiUser className="mr-2" />
                Login
              </div>
            </a>
            <a
              href="#quote"
              className="bg-[#1E3A8A] text-white hover:bg-[#1a3173] px-5 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#1E3A8A] hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'
          }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#1E3A8A]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2 border-t border-gray-200 mt-2">
            <a
              href="#login"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#1E3A8A]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center">
                <FiUser className="mr-2" />
                Login
              </div>
            </a>
            <a
              href="#quote"
              className="mt-2 block w-full text-center bg-[#1E3A8A] text-white hover:bg-[#1a3173] px-5 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;