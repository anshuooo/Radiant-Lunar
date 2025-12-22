import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FiCheck,
  FiTruck,
  FiShield,
  FiAward,
  FiStar,
  FiGift,
  FiBox,
  FiTag,
  FiUsers,
  FiPackage,
  FiArrowRight
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const featuredProductsRef = useRef(null);

  // Animation variants for hero section
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const valueProps = [
    {
      icon: <FiTruck className="w-6 h-6" />,
      title: "Bulk Orders & Fast Delivery",
      description: "Reliable shipping for all order sizes with tracking"
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Premium Quality Products",
      description: "Only the finest materials and printing techniques"
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Custom Logo Printing",
      description: "High-quality embroidery and printing options"
    },
    {
      icon: <FiGift className="w-6 h-6" />,
      title: "Corporate Gifting Experts",
      description: "Perfect solutions for corporate events and gifts"
    }
  ];

  const services = [
    {
      icon: <FiBox className="w-8 h-8" />,
      title: "Bulk Ordering",
      description: "Special pricing for large quantity orders"
    },
    {
      icon: <FiTag className="w-8 h-8" />,
      title: "Custom Branding",
      description: "Multiple branding options available"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Dedicated Support",
      description: "Personal account manager for all your needs"
    },
    {
      icon: <FiPackage className="w-8 h-8" />,
      title: "Nationwide Delivery",
      description: "Fast and reliable shipping across India"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
            >
              Premium Corporate <span className="text-amber-400">Promotional Products</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Custom Branding • Bulk Orders • PAN India Delivery
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            >
              <button
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/20"
              >
                Get a Quote
              </button>
              <button
                onClick={() => scrollToSection(featuredProductsRef)}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                View Products
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Manufacturing Section (Formerly Featured Products) */}
        <section ref={featuredProductsRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Advanced Manufacturing Process"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium uppercase tracking-wider mb-1">State of the Art</p>
                  <p className="text-xl font-bold">Manufacturing Facility</p>
                </div>
              </motion.div>

              {/* Right Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Premium Customization
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  In-House Manufacturing & <br />
                  <span className="text-blue-600">Custom Branding Solutions</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We take pride in our end-to-end manufacturing capabilities. From custom logo printing to bulk production, we control every step of the process to ensure the highest quality for your corporate gifting needs. Our dedicated facility ensures precision and speed for every order.
                </p>

                <ul className="space-y-4 mb-10">
                  {[
                    'Advanced printing technology for lasting impressions',
                    'Bulk order fulfillment with consistent quality',
                    'Premium quality materials sourced globally',
                    'Timely delivery across India with tracking'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                        <FiCheck className="w-3.5 h-3.5 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 font-medium text-lg"
                >
                  Start Your Project <FiArrowRight className="ml-2" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose RadiantLunar</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We deliver exceptional quality and service for all your corporate gifting needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valueProps.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Corporate Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions for all your corporate branding needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get started with our premium promotional products and make a lasting impression
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Get a Free Quote
              </button>
              <button
                onClick={() => navigate('/products')}
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Browse Products
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;