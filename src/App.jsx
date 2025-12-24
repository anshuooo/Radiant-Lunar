import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import ProductCustomization from './Pages/ProductCustomization';
import BulkOrder from './Pages/BulkOrder';
import PumaProductsPage from './Pages/PumaProductsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/customize" element={<ProductCustomization />} />
            <Route path="/bulkorders" element={<BulkOrder />} />
            <Route path="/puma" element={<PumaProductsPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
