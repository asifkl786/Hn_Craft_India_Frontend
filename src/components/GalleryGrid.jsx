import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function GalleryGrid({ items, categories }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems =
    activeCategory === 'All'
      ? items
      : items.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
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

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => openLightbox(index)}
              className="relative overflow-hidden rounded-xl cursor-pointer group aspect-square"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <span className="text-amber-400 text-xs font-semibold uppercase tracking-wide block mb-1">
                    {item.category}
                  </span>
                  <span className="text-white font-heading font-semibold text-sm">
                    {item.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white text-3xl hover:text-brick-400 transition-colors z-10"
              aria-label="Close"
            >
              <FiX />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-white text-3xl hover:text-brick-400 transition-colors p-2 z-10"
              aria-label="Previous"
            >
              <FiChevronLeft />
            </button>

            <motion.img
              key={filteredItems[lightboxIndex].id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-white text-3xl hover:text-brick-400 transition-colors p-2 z-10"
              aria-label="Next"
            >
              <FiChevronRight />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-wide block mb-1">
                {filteredItems[lightboxIndex].category}
              </span>
              <span className="text-white font-heading font-semibold">
                {filteredItems[lightboxIndex].title}
              </span>
              <span className="text-slate-400 text-sm block mt-1">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
