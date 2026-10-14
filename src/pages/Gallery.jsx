import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import GalleryGrid from '../components/GalleryGrid';
import { galleryItems, galleryCategories } from '../data/gallery';

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Gallery | Brick Machines Production (@hncraftindia)</title>
        <meta name="description" content="View our gallery of brick manufacturing machines, factory facilities, and brick production images. See our machines in action." />
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
            Gallery
          </motion.h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Take a look at our machines, factory, and the quality bricks they
            produce. Click any image to view it in full size.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <SectionHeading subtitle="Photo Gallery" title="Our Machines, Factory & Products" />
          <GalleryGrid items={galleryItems} categories={galleryCategories} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container-page text-center">
          <h2 className="font-heading font-bold text-slate-900 text-2xl sm:text-3xl mb-4">
            Like What You See?
          </h2>
          <p className="text-slate-500 mb-6 max-w-xl mx-auto">
            Get a free quote for any of our machines. Our team is ready to help
            you choose the right one for your business.
          </p>
          <Link to="/contact" className="btn-primary">
            Request a Quote <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
