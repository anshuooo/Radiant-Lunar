import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productRequirement: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      productRequirement: '',
      message: ''
    });
    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Premium Product Customization
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Customize Your Products <span className="text-blue-600">With Your Brand Identity</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                We help you print your logo on premium bottles, t-shirts, and bags — perfect for corporate gifting, branding, and promotions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Custom Quote
                </a>
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                >
                  Talk to Our Team
                </a>
              </div>
              <p className="mt-6 text-gray-500 text-sm">
                <span className="inline-flex items-center">
                  <FiCheckCircle className="mr-2 text-green-500" /> Bulk orders available
                </span>
                <span className="mx-2">•</span>
                <span className="inline-flex items-center">
                  <FiCheckCircle className="mr-2 text-green-500" /> Premium quality materials
                </span>
                <span className="mx-2">•</span>
                <span className="inline-flex items-center">
                  <FiCheckCircle className="mr-2 text-green-500" /> Long-lasting print
                </span>
              </p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Customized products showcase"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="text-sm uppercase tracking-wider mb-2">Featured Products</div>
                  <h3 className="text-2xl font-bold">Custom Branded Merchandise</h3>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-yellow-100 rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Office</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                      <FiMapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Visit Us</h3>
                      <p className="text-gray-600">
                        First Floor, E-20, Block-F,<br />
                        Noida Sector 3,<br />
                        Noida, Uttar Pradesh 201301,<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                      <FiPhone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Call Us</h3>
                      <p className="text-gray-600">
                        +91 88005 20500<br />
                        +91 98765 43211
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                      <FiMail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Email Us</h3>
                      <p className="text-gray-600">
                        info@radiantlunar.com<br />
                        sales@radiantlunar.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                      <FiClock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Working Hours</h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose RadiantLunar?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Expertise in custom promotional products for all business needs</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Bulk order discounts and corporate gifting solutions</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Premium quality materials and printing techniques</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Fast turnaround times and reliable delivery</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Dedicated account management for corporate clients</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="bg-white rounded-lg shadow-lg p-6 md:p-8"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Quick Inquiry</h2>
                <p className="text-gray-600 mb-6">
                  Have questions about our products or services? Send us a message and our team will get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-6 rounded-lg text-center">
                    <FiCheckCircle className="w-12 h-12 mx-auto mb-4 text-green-500" />
                    <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Company Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="productRequirement" className="block text-sm font-medium text-gray-700 mb-1">Product Requirement <span className="text-red-500">*</span></label>
                      <select
                        id="productRequirement"
                        name="productRequirement"
                        value={formData.productRequirement}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select a product category</option>
                        <option value="Apparel (T-shirts, Hoodies, etc.)">Apparel (T-shirts, Hoodies, etc.)</option>
                        <option value="Bags & Backpacks">Bags & Backpacks</option>
                        <option value="Drinkware">Drinkware</option>
                        <option value="Corporate Gifts">Corporate Gifts</option>
                        <option value="Writing Instruments">Writing Instruments</option>
                        <option value="Diaries & Notebooks">Diaries & Notebooks</option>
                        <option value="Custom Merchandise">Custom Merchandise</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message <span className="text-red-500">*</span></label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          const message = encodeURIComponent("Hello, I am interested in your corporate promotional products. Please share details.");
                          window.open(`https://wa.me/919027992827?text=${message}`, '_blank');
                        }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-200 flex items-center justify-center"
                      >
                        <FiSend className="mr-2" /> Send Message
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              title="RadiantLunar Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.141117971974!2d77.33001531508248!3d28.62711808241976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50b5e5f1f2d%3A0x4d7b5f8a7c3f0b5e5!2sE-20%2C%20Block%20F%2C%20Sector%203%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
