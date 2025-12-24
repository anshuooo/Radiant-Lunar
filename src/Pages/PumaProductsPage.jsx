import React from 'react';
import { Link } from 'react-router-dom';

// Available Puma product images
const pumaImages = [
  '/pumaproduct/puma1.jpg',
  '/pumaproduct/puma2.jpg',
  '/pumaproduct/puma3.jpg',
  '/pumaproduct/puma4.jpg',
  '/pumaproduct/puma5.jpg',
  '/pumaproduct/puma6.jpg',
  '/pumaproduct/puma7.jpg',
  '/pumaproduct/puma8.jpg',
  '/pumaproduct/puma9.jpg',
  '/pumaproduct/puma10.jpg',
  '/pumaproduct/puma11.jpg',
  '/pumaproduct/puma12.jpg',
  '/pumaproduct/puma13.jpg',
  '/pumaproduct/puma14.jpg',
  '/pumaproduct/puma15.jpg',
  '/pumaproduct/puma16.jpg',
  '/pumaproduct/puma17.jpg',
  '/pumaproduct/puma18.jpg',
  '/pumaproduct/puma19.jpg',
  '/pumaproduct/puma20.jpg'
];

// Puma products data
const pumaProducts = [
  {
    id: 1,
    name: 'Puma RS-X Bold',
    price: 8499,
    image: pumaImages[0],
    category: 'Sneakers'
  },
  {
    id: 2,
    name: 'Puma Cali Sport',
    price: 5999,
    image: pumaImages[1],
    category: 'Casual Shoes'
  },
  {
    id: 3,
    name: 'Puma Smash V2',
    price: 3999,
    image: pumaImages[2],
    category: 'Casual Shoes'
  },
  {
    id: 4,
    name: 'Puma Future Rider',
    price: 5499,
    image: pumaImages[3],
    category: 'Running'
  },
  {
    id: 5,
    name: 'Puma Carina',
    price: 4499,
    image: pumaImages[5],
    category: 'Casual Shoes'
  },
  {
    id: 6,
    name: 'Puma Tazon 6',
    price: 4999,
    image: pumaImages[5],
    category: 'Running'
  },
  // Repeating the images for the remaining products
  {
    id: 7,
    name: 'Puma Speed 600',
    price: 5999,
    image: pumaImages[6],
    category: 'Running'
  },
  {
    id: 8,
    name: 'Puma Rider FV',
    price: 6599,
    image: pumaImages[7],
    category: 'Lifestyle'
  },
  {
    id: 9,
    name: 'Puma X-Ray',
    price: 5299,
    image: pumaImages[8],
    category: 'Sneakers'
  },
  {
    id: 10,
    name: 'Puma Cell Venom',
    price: 5799,
    image: pumaImages[9],
    category: 'Athletic'
  },
  {
    id: 11,
    name: 'Puma Mirage Sport',
    price: 3999,
    image: pumaImages[10],
    category: 'Training'
  },
  {
    id: 12,
    name: 'Puma Pacer Next',
    price: 7499,
    image: pumaImages[11],
    category: 'Running'
  },
  // Last 6 products with repeated images
  {
    id: 13,
    name: 'Puma Axelion',
    price: 4999,
    image: pumaImages[12],
    category: 'Running'
  },
  {
    id: 14,
    name: 'Puma X-Ray 2 Square',
    price: 5699,
    image: pumaImages[13],
    category: 'Sneakers'
  },
  {
    id: 15,
    name: 'Puma Fuse',
    price: 4899,
    image: pumaImages[14],
    category: 'Training'
  },
  {
    id: 16,
    name: 'Puma Enzo 2',
    price: 3899,
    image: pumaImages[15],
    category: 'Casual'
  },
  {
    id: 17,
    name: 'Puma Suede Classic',
    price: 5199,
    image: pumaImages[16],
    category: 'Lifestyle'
  },
  {
    id: 18,
    name: 'Puma Stunner',
    price: 3499,
    image: pumaImages[17],
    category: 'Casual'
  },
  {
    id: 19,
    name: 'Puma Future Rider Neo',
    price: 5999,
    image: pumaImages[18],
    category: 'Running'
  },
  {
    id: 20,
    name: 'Puma RS-X3',
    price: 7999,
    image: pumaImages[19],
    category: 'Sneakers'
  },
];

const PumaProductsPage = () => {
  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = '/placeholder-shoe.jpg'; // Make sure to add a placeholder image to your public folder
    e.target.className = 'w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300 bg-gray-100';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Puma Collection</h1>
          <p className="text-lg text-gray-600">Discover our latest Puma products</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {pumaProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              {/* Product Image */}
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  onError={handleImageError}
                  loading="lazy"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <span className="text-sm text-gray-500 mb-1 block">{product.category}</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                  <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Products Button */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            ← Back to All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PumaProductsPage;
