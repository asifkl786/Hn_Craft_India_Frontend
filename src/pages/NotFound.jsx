import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Brick Machines Production</title>
      </Helmet>
      <section className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <div className="font-heading font-bold text-brick-700 text-8xl sm:text-9xl mb-4">
            404
          </div>
          <h1 className="font-heading font-bold text-white text-2xl sm:text-3xl mb-3">
            Page Not Found
          </h1>
          <p className="text-slate-400 mb-8">
            Oops! The page you're looking for doesn't exist. It may have been
            moved or removed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="btn-primary">
              <FaHome /> Go Home
            </Link>
            <Link to="/contact" className="btn-outline !border-white/30 !text-white hover:!border-brick-400 hover:!text-brick-400">
              <FaArrowLeft /> Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
