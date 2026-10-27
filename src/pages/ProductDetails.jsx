import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { products } from '../data/products';

export default function ProductDetails() {
  const { productId } = useParams();
  const product = products.find((item) => String(item.id) === productId);
  const images = product?.images ?? (product ? [product.image] : []);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(0);
  }, [productId]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{product.name} | HN CRAFT INDIA</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <section className="pt-28 pb-12 bg-slate-900">
        <div className="container-page">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors mb-6"
          >
            <FaArrowLeft />
            Back to Products
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="text-brick-400 text-sm font-semibold uppercase tracking-[0.18em]">
              {product.category}
            </span>
            {product.badge && (
              <span className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                {product.badge}
              </span>
            )}
          </motion.div>
          <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl mt-3">
            {product.name}
          </h1>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 h-[420px] sm:h-[520px] flex items-center justify-center">
              <img
                src={images[selectedIndex]}
                alt={`${product.name} view ${selectedIndex + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-3 mt-4">
                {images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={`h-24 rounded-xl overflow-hidden bg-white border-2 transition-colors ${
                      selectedIndex === index
                        ? 'border-brick-700'
                        : 'border-transparent hover:border-slate-300'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <span className="text-xs text-slate-400 block mb-1">Capacity</span>
                <span className="font-semibold text-slate-800">{product.capacity}</span>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <span className="text-xs text-slate-400 block mb-1">Power</span>
                <span className="font-semibold text-slate-800">{product.power}</span>
              </div>
            </div>

            <h2 className="font-heading font-bold text-slate-900 text-2xl mb-4">
              Product Features
            </h2>
            <ul className="space-y-3 mb-8">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-slate-600">
                  <FaCheckCircle className="text-brick-600 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-wrap items-center justify-between gap-5">
              <div>
                <span className="text-xs text-slate-400 block mb-1">
                  {product.price === 'Price on Request' ? 'Pricing' : 'Starting at'}
                </span>
                <span className="font-heading font-bold text-2xl text-brick-700">
                  {product.price}
                </span>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brick-700 text-white px-5 py-3 rounded-lg font-semibold hover:bg-brick-800 transition-colors"
              >
                Enquire Now
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
