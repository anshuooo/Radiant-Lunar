import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Overview */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                R
              </div>
              <span className="ml-3 text-xl font-semibold text-white">Radiant Lunar</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Specializing in premium corporate promotional products that elevate your brand. We deliver custom solutions for businesses, NGOs, and institutions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Products', 'Corporate Gifting', 'Custom Branding', 'Contact'].map((item) => {
                const getPath = (name) => {
                  if (name === 'Home') return '/';
                  if (name === 'About Us') return '/about';
                  if (name === 'Products') return '/products';
                  if (name === 'Contact') return '/contact-us';
                  return '#';
                };
                return (
                  <li key={item}>
                    <Link
                      to={getPath(item)}
                      className="text-gray-400 hover:text-blue-400 text-sm transition-colors block py-1"
                    >
                      {item}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Product Categories</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Caps', 'T-Shirts', 'Hoodies', 'Bottles', 'Bags', 'Gift Hampers', 'Office Essentials'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors block py-1"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <svg className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@radiantlunar.com" className="hover:text-blue-400 transition-colors">
                  info@radiantlunar.com
                </a>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex">
                <svg className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Corporate Avenue, Business District,<br />Mumbai, Maharashtra 400001</span>
              </div>
              <div className="flex items-center pt-2">
                <svg className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Radiant Lunar. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            Designed for Corporate Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
