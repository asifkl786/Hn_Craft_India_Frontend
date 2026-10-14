import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import { products, productCategories } from '../data/products';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Products | Brick Machines Production (@hncraftindia)</title>
        <meta name="description" content="Explore our range of brick-making machines: fly ash, clay, cement, interlocking, manual, and fully automatic brick plants. Prices starting from ₹85,000." />
      </Helmet>

      {/* Header */}
      <section className="pt-28 pb-12 bg-slate-900">
        <div className="container-page text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-white text-4xl sm:text-5xl mb-4"
          >
            Our Products
          </motion.h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            High-quality brick-making machines for every need and budget — from
            manual machines for small setups to fully automatic plants for
            large-scale production.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-slate-50">
        <div className="container-page">
          <SectionHeading
            subtitle="Browse Machines"
            title="Find the Right Brick Machine for You"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {productCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-brick-700 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Free Installation', desc: 'At your site, anywhere in India' },
              { title: '1-Year Warranty', desc: 'On all machines, no questions asked' },
              { title: 'EMI Options Available', desc: 'Starting from ₹8,000/month' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 rounded-2xl p-6 text-center"
              >
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
