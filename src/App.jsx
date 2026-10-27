import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<ProductDetails />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
