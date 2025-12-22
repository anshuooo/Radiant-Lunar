import React from 'react';
import { FiAward, FiShield, FiTruck, FiUsers, FiStar, FiTarget } from 'react-icons/fi';
import { motion } from 'framer-motion';

const AboutUs = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 from-blue-800 text-black py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Empowering Brands Through Exceptional Promotional Products</h1>
            <p className="text-xl text-blue-100">
              At RadiantLunar, we transform ordinary items into powerful brand ambassadors that leave lasting impressions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                RadiantLunar was founded with a simple yet powerful vision: to help businesses shine through exceptional branded merchandise. 
                What started as a small operation with a passion for quality printing has grown into a trusted partner for businesses 
                across industries, delivering innovative promotional solutions that make an impact.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">What We Do</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto my-4"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We specialize in creating high-quality corporate promotional products that elevate your brand. 
                From initial concept to final delivery, we handle every detail with precision and care.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: <FiAward className="w-8 h-8 text-blue-600" />,
                  title: 'Custom Branding',
                  description: 'Premium printing and embroidery services that bring your brand to life on various products.'
                },
                {
                  icon: <FiShield className="w-8 h-8 text-blue-600" />,
                  title: 'Quality Assurance',
                  description: 'Rigorous quality checks ensure every product meets our high standards before reaching you.'
                },
                {
                  icon: <FiTruck className="w-8 h-8 text-blue-600" />,
                  title: 'Reliable Delivery',
                  description: 'Timely delivery across the globe with real-time tracking and support.'
                },
                {
                  icon: <FiUsers className="w-8 h-8 text-blue-600" />,
                  title: 'Bulk Order Solutions',
                  description: 'Specialized solutions for corporate gifting and large-scale orders.'
                },
                {
                  icon: <FiStar className="w-8 h-8 text-blue-600" />,
                  title: 'Premium Products',
                  description: 'Carefully curated selection of high-quality promotional items.'
                },
                {
                  icon: <FiTarget className="w-8 h-8 text-blue-600" />,
                  title: 'Brand Strategy',
                  description: 'Expert guidance to select products that align with your brand identity.'
                },
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto my-4"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { name: 'Quality', color: 'bg-blue-600' },
                { name: 'Trust', color: 'bg-blue-700' },
                { name: 'Creativity', color: 'bg-blue-800' },
                { name: 'Commitment', color: 'bg-blue-900' },
                { name: 'Innovation', color: 'bg-blue-950' },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`${value.color} text-white py-4 px-6 rounded-lg shadow-md`}
                >
                  <span className="font-medium text-lg">{value.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FiTarget className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted partner for businesses seeking innovative and impactful promotional solutions that drive brand recognition and customer engagement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FiStar className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional promotional products and branding solutions that help our clients build stronger connections with their audience through creativity, quality, and outstanding service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose RadiantLunar?</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto my-4"></div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise You Can Trust</h3>
                <p className="text-gray-600">With years of experience in the promotional products industry, we understand what it takes to create items that truly represent your brand.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">End-to-End Solutions</h3>
                <p className="text-gray-600">From concept to delivery, we handle every aspect of your order, ensuring a seamless and stress-free experience.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customization at Its Best</h3>
                <p className="text-gray-600">We offer a wide range of customization options to ensure your promotional products are as unique as your brand.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer-Centric Approach</h3>
                <p className="text-gray-600">Your satisfaction is our top priority. We work closely with you to understand your needs and deliver beyond expectations.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Partner with RadiantLunar for promotional products that make a lasting impression.
            </p>
            <button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full transition-colors duration-300">
              Get a Free Quote
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
