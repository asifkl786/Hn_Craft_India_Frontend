import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card group overflow-hidden"
    >
      <Link
        to={`/products/${product.id}`}
        className="relative block h-72 bg-white"
        aria-label={`View details for ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-transparent pt-16 px-5 pb-5">
          <p className="text-white font-heading font-bold text-lg">{product.name}</p>
          <span className="text-slate-200 text-xs">View product details</span>
        </div>
        {product.badge && (
          <span className="absolute top-3 left-3 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {product.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium px-3 py-1 rounded-full">
          {product.category}
        </span>
      </Link>
    </motion.div>
  );
}
