import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/4395554/pexels-photo-4395554.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Brick manufacturing facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
      </div>

      <div className="container-page relative z-10 pt-24 pb-12">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-brick-700/90 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5"
          >
            India's Trusted Brick Machine Manufacturer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
          >
            Build Your Future with{' '}
            <span className="text-brick-400">Premium Brick Machines</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl"
          >
            From manual to fully automatic — we manufacture high-performance
            brick-making machines for Indian builders, contractors, and
            entrepreneurs. Quality you can trust, service you can rely on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/products" className="btn-accent">
              Explore Products <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn-outline !border-white/30 !text-white hover:!border-brick-400 hover:!text-brick-400">
              <FaPlay className="text-xs" /> Get a Quote
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 mt-14 max-w-xl"
          >
            {[
              { number: '500+', label: 'Machines Installed' },
              { number: '15+', label: 'Years Experience' },
              { number: '20+', label: 'States Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading font-bold text-3xl text-brick-400">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
