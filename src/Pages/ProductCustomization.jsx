import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUpload, FiCheckCircle, FiTruck, FiShield, FiAward, FiChevronRight } from 'react-icons/fi';
import { FaTshirt, FaWater, FaBriefcase } from 'react-icons/fa';

const ProductCustomization = () => {
  const [activeTab, setActiveTab] = useState('bottles');
  const [uploadedLogo, setUploadedLogo] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const products = {
    bottles: {
      name: 'Custom Water Bottles',
      description: 'Premium quality water bottles with high-definition logo printing',
      features: [
        'Durable stainless steel construction',
        'Double-wall vacuum insulation',
        'Sweat-proof design',
        'Perfect for corporate gifting'
      ],
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    tshirts: {
      name: 'Custom T-Shirts',
      description: 'Premium cotton t-shirts with vibrant, long-lasting prints',
      features: [
        '100% premium cotton',
        'Breathable fabric',
        'Multiple color options',
        'Perfect for team uniforms'
      ],
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    bags: {
      name: 'Premium Bags',
      description: 'Stylish and durable bags with your brand identity',
      features: [
        'Water-resistant materials',
        'Multiple compartments',
        'Durable zippers and stitching',
        'Ideal for corporate events'
      ],
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  };

  const currentProduct = products[activeTab];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-blue-500 opacity-10"
              style={{
                width: Math.random() * 100 + 50 + 'px',
                height: Math.random() * 100 + 50 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                filter: 'blur(40px)',
                transform: `scale(${Math.random() * 2 + 1})`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Customize Your Brand.</span> Make It Stand Out.
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Print your logo on bottles, t-shirts & premium bags – perfect for corporate gifting & branding.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                Customize Now
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-lg text-lg border border-white/20 transition-all duration-300 hover:shadow-lg">
                Get Free Mockup
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Customization Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Transform your brand into a statement with our simple 3-step process</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Upload Your Logo',
                description: 'Share your logo or design in high resolution',
                icon: <FiUpload className="h-8 w-8 text-blue-600" />
              },
              {
                step: 2,
                title: 'Choose Product & Placement',
                description: 'Select from our premium product range and placement options',
                icon: <FaTshirt className="h-8 w-8 text-blue-600" />
              },
              {
                step: 3,
                title: 'Get Preview & Confirm',
                description: 'Review your design and place your order with confidence',
                icon: <FiCheckCircle className="h-8 w-8 text-blue-600" />
              }
            ].map((item, index) => (
              <motion.div 
                key={item.step}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
                <div className="mt-4 text-center text-blue-600 font-medium">
                  Step {item.step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Customization Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Customizable Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Select a product category to start customizing</p>
          </div>

          {/* Product Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border border-gray-200 bg-gray-100 p-1">
              {[
                { id: 'bottles', label: 'Water Bottles', icon: <FaWater className="mr-2" /> },
                { id: 'tshirts', label: 'T-Shirts', icon: <FaTshirt className="mr-2" /> },
                { id: 'bags', label: 'Premium Bags', icon: <FaBriefcase className="mr-2" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-md flex items-center font-medium text-sm md:text-base transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl p-8">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="w-full h-auto max-h-96 object-contain"
                />
                {uploadedLogo && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{
                      backgroundImage: `url(${uploadedLogo})`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      opacity: 0.8,
                      mixBlendMode: 'multiply'
                    }}
                  />
                )}
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{currentProduct.name}</h3>
              <p className="text-gray-600 mb-6">{currentProduct.description}</p>
              
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-900">Key Features:</h4>
                <ul className="space-y-2">
                  {currentProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FiCheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Your Logo</label>
                <div className="mt-1 flex items-center">
                  <label className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <span>Choose File</span>
                    <input
                      type="file"
                      className="sr-only"
                      onChange={handleLogoUpload}
                      accept="image/*"
                    />
                  </label>
                  <span className="ml-3 text-sm text-gray-500">
                    {uploadedLogo ? 'Logo uploaded!' : 'No file chosen'}
                  </span>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  For best results, upload a high-resolution PNG with transparent background.
                </p>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose RadiantLunar</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We deliver premium quality with exceptional attention to detail</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Premium Quality',
                description: 'Only the finest materials and printing techniques',
                icon: <FiAward className="h-6 w-6 text-blue-600" />
              },
              {
                title: 'Fast Turnaround',
                description: 'Quick production without compromising quality',
                icon: <FiTruck className="h-6 w-6 text-blue-600" />
              },
              {
                title: 'Secure Payments',
                description: 'Safe and secure checkout process',
                icon: <FiShield className="h-6 w-6 text-blue-600" />
              },
              {
                title: 'Dedicated Support',
                description: 'Expert assistance throughout your order',
                icon: <FiCheckCircle className="h-6 w-6 text-blue-600" />
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started with your custom product order today and receive a free digital mockup within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              Talk to an Expert
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300">
              Request Callback
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCustomization;
