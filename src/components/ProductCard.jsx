import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card group flex flex-col"
    >
      <div className="relative overflow-hidden h-56">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {product.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-slate-900 text-lg mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-slate-500 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="bg-slate-50 rounded-lg px-3 py-2">
            <span className="text-slate-400 text-xs block">Capacity</span>
            <span className="text-slate-700 font-semibold">
              {product.capacity}
            </span>
          </div>
          <div className="bg-slate-50 rounded-lg px-3 py-2">
            <span className="text-slate-400 text-xs block">Power</span>
            <span className="text-slate-700 font-semibold">
              {product.power}
            </span>
          </div>
        </div>

        <ul className="space-y-1.5 mb-5">
          {product.features.slice(0, 3).map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-slate-600"
            >
              <FaCheckCircle className="text-brick-600 text-xs flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            <span className="text-xs text-slate-400 block">Starting at</span>
            <span className="font-heading font-bold text-xl text-brick-700">
              {product.price}
            </span>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brick-700 hover:text-brick-800 group/link"
          >
            Enquire
            <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
