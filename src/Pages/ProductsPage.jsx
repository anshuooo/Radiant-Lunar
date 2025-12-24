import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiShoppingBag, FiTruck, FiShield, FiAward } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { FaApple, FaMicrosoft } from 'react-icons/fa';
import { SiSamsung, SiPuma, SiAmericanexpress, SiVisa, SiAdidas, SiNike } from 'react-icons/si';
import { BsSunglasses } from 'react-icons/bs';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Premium Cotton T-Shirt',
    description: 'High-quality cotton t-shirt with premium print quality',
    category: 'Apparel',
    price: 270,
    originalPrice: 270,
    discount: 25,
    rating: 4.5,
    reviewCount: 128,
    colors: ['Black', 'White', 'Navy', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: '/Screenshot 2025-12-16 170118.png',
    details: [
      '100% Premium Cotton',
      'Pre-shrunk fabric',
      'Double-stitched seams',
      'Reinforced collar',
      'Tear-away label'
    ]
  },
  {
    id: 2,
    name: 'Urban Explorer Backpack',
    description: 'Durable and stylish backpack for everyday use with laptop compartment',
    category: 'Bags',
    price: 350,
    originalPrice: 350,
    discount: 20,
    rating: 4.8,
    reviewCount: 215,
    colors: ['Black', 'Navy', 'Olive', 'Charcoal'],
    sizes: ['One Size'],
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    details: [
      'Water-resistant polyester fabric',
      'Padded laptop compartment (fits up to 15.6")',
      'Multiple storage compartments',
      'Ergonomic shoulder straps',
      'Built-in USB charging port',
      'Anti-theft back pocket',
      'Dimensions: 18" x 12" x 8"',
      'Weight: 2.2 lbs'
    ]
  },
  {
    id: 3,
    name: 'EcoFlow Stainless Steel Water Bottle',
    description: 'Premium insulated water bottle for hot and cold beverages',
    category: 'Accessories',
    price: 240,
    originalPrice: 240,
    discount: 22,
    rating: 4.7,
    reviewCount: 342,
    colors: ['Matte Black', 'Stainless Steel', 'Rose Gold', 'Navy Blue'],
    sizes: ['20oz', '32oz', '40oz'],
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    details: [
      'Double-wall vacuum insulation',
      'Keeps drinks cold for 24 hours',
      'Keeps drinks hot for 12 hours',
      '100% BPA-free stainless steel',
      'Sweat-proof design',
      'Leak-proof flip lid',
      'Fits most cup holders',
      'Dishwasher safe',
      'Lifetime warranty'
    ]
  },
  {
    id: 4,
    name: 'Classic Fit Cap',
    description: 'Structured cap with curved visor and adjustable strap',
    category: 'Headwear',
    price: 50,
    originalPrice: 50,
    discount: 17,
    rating: 4.6,
    reviewCount: 187,
    colors: ['Black', 'Navy', 'Charcoal', 'Khaki', 'White'],
    sizes: ['One Size Fits All'],
    image: 'caps.jpg',
    details: [
      '100% Cotton twill fabric',
      'Structured, medium profile',
      'Curved visor with matching under-visor',
      'Adjustable plastic snapback closure',
      'Pre-curved visor',
      'Sweat-absorbing sweatband',
      'Unstructured, low-profile crown',
      '6-panel design with matching color fabric under visor',
      'Custom embroidery ready'
    ]
  },
  {
    id: 5,
    name: 'Premium Joining Kit',
    description: 'Complete welcome package for new team members',
    category: 'Corporate',
    price: 199,
    originalPrice: 250,
    discount: 20,
    rating: 4.8,
    reviewCount: 189,
    colors: ['Black', 'Navy', 'Gray'],
    sizes: ['Standard'],
    image: '/src/assets/joiningkit.png',
    details: [
      'Includes branded notebook and pen',
      'Company handbook and guidelines',
      'Personalized welcome letter',
      'Access card and lanyard',
      'Company merchandise',
      'Digital welcome package'
    ]
  },
  {
    id: 6,
    name: 'Adidas Ultraboost 21',
    description: 'Running shoes with responsive cushioning and energy return',
    category: 'Footwear',
    price: 180,
    originalPrice: 200,
    discount: 10,
    rating: 4.8,
    reviewCount: 342,
    colors: ['Black', 'White', 'Red', 'Blue'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    image: 'src/assets/adidas.png',
    details: [
      'Responsive Boost midsole for energy return',
      'Primeknit+ material for adaptive fit',
      'Stretchweb outsole flexes naturally',
      'Continental™ Rubber outsole for traction',
      'Sock-like fit for comfort',
      'Lace closure for secure fit'
    ]
  },
  {
    id: 7,
    name: 'Puma Apparel',
    description: 'Chunky sneakers with bold design and superior comfort',
    category: 'Lifestyle',
    price: 110,
    originalPrice: 130,
    discount: 15,
    rating: 4.7,
    reviewCount: 289,
    colors: ['Black/Red', 'White/Blue', 'Gray/Orange', 'Black/White'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    image: 'pumaapparel.jpg',
    details: [
      'Chunky, retro-inspired design',
      'Cushioned footbed for all-day comfort',
      'Textile and synthetic upper',
      'Rubber outsole for traction',
      'Padded collar for ankle support',
      'Signature PUMA Formstrip branding'
    ]
  },
  {
    id: 8,
    name: 'Premium Leather Diary',
    description: 'Elegant leather-bound diary for your personal and professional needs',
    category: 'Stationery',
    price: 45,
    originalPrice: 60,
    discount: 25,
    rating: 4.9,
    reviewCount: 198,
    colors: ['Black', 'Brown', 'Blue', 'Red'],
    sizes: ['A5', 'B5', 'A4'],
    image: '/diary.png',
    details: [
      'Genuine leather cover',
      '200 ruled pages',
      'Ribbon bookmark',
      'Elastic closure band',
      'Inner pocket for loose sheets',
      'Ideal for journaling and note-taking'
    ]
  }
];

const brandLogos = [
  { icon: <SiNike className="h-12 w-24 text-gray-300" /> },
  { icon: <SiSamsung className="h-12 w-24 text-gray-300" /> },
  { icon: <FaApple className="h-12 w-24 text-gray-300" /> },
  { icon: <FaMicrosoft className="h-12 w-24 text-gray-300" /> },
  { icon: <SiAdidas className="h-12 w-24 text-gray-300" /> },
  { icon: <SiPuma className="h-12 w-24 text-gray-300" /> },
  { icon: <SiAmericanexpress className="h-12 w-24 text-gray-300" /> },
  { icon: <BsSunglasses className="h-12 w-24 text-gray-300" /> },
  { icon: <SiVisa className="h-12 w-24 text-gray-300" /> },
];

const ProductsPage = () => {
  const navigate = useNavigate();
  const brandContainerRef = useRef(null);
  const brandLogosRef = useRef([]);
  const [quantities, setQuantities] = useState({});

  // Initialize quantities
  useEffect(() => {
    const initialQuantities = {};
    products.forEach(product => {
      initialQuantities[product.id] = 50; // Default quantity
    });
    setQuantities(initialQuantities);
  }, []);

  const updateQuantity = (productId, newQuantity) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.min(Math.max(50, newQuantity), 100000)
    }));
  };

  const incrementQuantity = (productId) => {
    updateQuantity(productId, (quantities[productId] || 50) + 50);
  };

  const decrementQuantity = (productId) => {
    updateQuantity(productId, (quantities[productId] || 50) - 50);
  };

  useEffect(() => {
    const container = brandContainerRef.current;
    const logos = brandLogosRef.current;

    if (!container || !logos.length) return;

    const logoWidth = logos[0].offsetWidth;
    const containerWidth = container.offsetWidth;
    const totalWidth = logoWidth * brandLogos.length;

    let position = 0;
    const speed = 1;

    const animate = () => {
      position -= speed;

      if (position <= -logoWidth) {
        position = 0;
      }

      container.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
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
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Customize Your Brand, <span className="text-white">Elevate Every Product</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Premium Corporate Gifting with Personalized Branding That Truly Stands Out.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:opacity-90 transition-all transform hover:scale-105">
                Explore Products
              </button>
              <button className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-lg font-medium hover:bg-white/20 transition-all backdrop-blur-sm">
                Request a Quote
              </button>
            </motion.div>
          </div>
        </div>

        {/* Brand Carousel */}
        <div className="bg-black/30 py-8 overflow-hidden">
          <div className="relative">
            <div
              ref={brandContainerRef}
              className="flex items-center whitespace-nowrap"
              style={{ width: 'max-content' }}
            >
              {[...brandLogos, ...brandLogos].map((brand, index) => (
                <div
                  key={index}
                  ref={el => brandLogosRef.current[index] = el}
                  className="inline-flex items-center justify-center px-12"
                >
                  {brand.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our premium selection of corporate promotional products designed to make your brand shine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden bg-gray-100">
                  <div className="aspect-square w-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain p-4 group-hover:opacity-90 transition-opacity"
                    />
                  </div>

                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {product.discount}% OFF
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-6">
                    <div className="flex justify-end">
                      <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                        <FiPlus className="h-5 w-5 text-gray-800" />
                      </button>
                    </div>

                    {/* Quantity Selector */}
                    <div className="bg-white/90 rounded-lg p-3 mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Quantity</span>
                        <span className="text-sm font-semibold text-gray-900">
                          {(quantities[product.id] || 50).toLocaleString('en-IN')} pcs
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate('/puma');
                          }}
                          className="flex-1 bg-gray-900 text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                        >
                          <FiShoppingBag className="h-4 w-4" />
                          More Products
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            decrementQuantity(product.id);
                          }}
                          className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
                          aria-label="Decrease quantity"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <input
                          type="range"
                          min="50"
                          max="100000"
                          step="50"
                          value={quantities[product.id] || 50}
                          onChange={(e) => {
                            updateQuantity(product.id, parseInt(e.target.value));
                          }}
                          className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            incrementQuantity(product.id);
                          }}
                          className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
                          aria-label="Increase quantity"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>

                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-xl font-bold text-gray-900">₹{product.price.toFixed(2)}</span>
                      {product.originalPrice > product.price && (
                        <span className="ml-2 text-sm text-gray-500 line-through">₹{product.originalPrice.toFixed(2)}</span>
                      )}
                    </div>

                    {/* Color Swatches */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Colors:</p>
                      <div className="flex space-x-2">
                        {product.colors.map((color, i) => (
                          <button
                            key={i}
                            className="w-6 h-6 rounded-full border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            style={{ backgroundColor: color.toLowerCase() }}
                            aria-label={color}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Sizes */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Size:</p>
                      <div className="grid grid-cols-5 gap-2">
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            className="px-2 py-1 text-sm border rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quick View Button - Mobile */}
                  <button className="mt-4 w-full py-2.5 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors md:hidden">
                    Quick View
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Highlights */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiTruck className="h-8 w-8 text-blue-500" />,
                title: 'Fast & Reliable Delivery',
                description: 'Nationwide shipping with real-time tracking'
              },
              {
                icon: <FiShoppingBag className="h-8 w-8 text-blue-500" />,
                title: 'Bulk Order Discounts',
                description: 'Competitive pricing for corporate volume orders'
              },
              {
                icon: <FiShield className="h-8 w-8 text-blue-500" />,
                title: 'Premium Quality',
                description: 'Only the finest materials and craftsmanship'
              },
              {
                icon: <FiAward className="h-8 w-8 text-blue-500" />,
                title: 'Brand Excellence',
                description: 'Your logo, perfectly printed every time'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-blue-50 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
            Let's create something extraordinary together. Our team is ready to help you design the perfect promotional products for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-700 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Get a Free Quote
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
