import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight, FiTruck, FiShield, FiUsers, FiTag, FiAward, FiClock } from 'react-icons/fi';

const BulkOrder = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Data for different sections
  const targetAudience = [
    'Corporate companies',
    'Startups & enterprises',
    'Schools & institutions',
    'Event & marketing agencies'
  ];

  const benefits = [
    {
      icon: <FiTag className="h-6 w-6" />,
      title: 'Competitive Pricing',
      description: 'Special rates for bulk orders'
    },
    {
      icon: <FiAward className="h-6 w-6" />,
      title: 'Premium Quality',
      description: 'Only the best materials used'
    },
    {
      icon: <FiCheck className="h-6 w-6" />,
      title: 'Durable Printing',
      description: 'Long-lasting logo application'
    },
    {
      icon: <FiUsers className="h-6 w-6" />,
      title: 'Dedicated Support',
      description: 'Personal account manager'
    },
    {
      icon: <FiTruck className="h-6 w-6" />,
      title: 'Scalable Production',
      description: 'Handling any order size'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Share Requirements',
      description: 'Tell us about your order needs'
    },
    {
      number: '02',
      title: 'Get Quote & Mockup',
      description: 'Receive pricing and design preview'
    },
    {
      number: '03',
      title: 'Confirm & Produce',
      description: 'Approve and we handle the rest'
    }
  ];

  const productCategories = [
    {
      name: 'Water Bottles',
      description: 'Premium custom water bottles for corporate gifting and branding',
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'T-Shirts',
      description: 'High-quality custom t-shirts for teams and events',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Premium Bags',
      description: 'Stylish and durable custom bags for corporate needs',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const whyChooseUs = [
    {
      icon: <FiShield className="h-6 w-6 text-blue-600" />,
      title: 'Trusted Partner',
      description: 'Reliable service for businesses of all sizes'
    },
    {
      icon: <FiCheck className="h-6 w-6 text-blue-600" />,
      title: 'Quality Assured',
      description: 'Rigorous quality control processes'
    },
    {
      icon: <FiClock className="h-6 w-6 text-blue-600" />,
      title: 'On-Time Delivery',
      description: 'We meet deadlines, every time'
    },
    {
      icon: <FiUsers className="h-6 w-6 text-blue-600" />,
      title: 'Expert Team',
      description: 'Dedicated professionals for your project'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Bulk Orders Made <span className="text-blue-600">Easy</span> for Your Brand
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Order premium customized bottles, t-shirts, and bags in bulk for corporate gifting, events, and branding.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {['Best pricing', 'Consistent quality', 'On-time delivery'].map((item, index) => (
                <div key={index} className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <FiCheck className="text-green-500 mr-2" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
            >
              Request Bulk Quote
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who This Is For</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Perfect for businesses and organizations looking for premium custom products
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {targetAudience.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <FiUsers className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-center">{item}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bulk Order Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bulk Order Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Why businesses choose RadiantLunar for their bulk customization needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Bulk Ordering Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Bulk Ordering Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple three-step process to get your custom products
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="relative bg-white lg:bg-transparent p-6 lg:p-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold flex items-center justify-center mb-4 relative z-10">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Bulk Order Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium quality products available for bulk customization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Enquire Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose RadiantLunar</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional quality and service for your bulk order needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking for a Reliable Bulk Customization Partner?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you with your bulk order requirements. Get in touch today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Talk to Bulk Order Expert
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Request Callback
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BulkOrder;
