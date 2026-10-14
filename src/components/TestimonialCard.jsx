import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card p-6 flex flex-col h-full"
    >
      <FaQuoteLeft className="text-brick-200 text-3xl mb-4" />

      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={
              i < testimonial.rating
                ? 'text-amber-400 text-sm'
                : 'text-slate-200 text-sm'
            }
          />
        ))}
      </div>

      <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">
        "{testimonial.text}"
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <img
          src={testimonial.photo}
          alt={testimonial.name}
          loading="lazy"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="font-heading font-semibold text-slate-900 text-sm">
            {testimonial.name}
          </div>
          <div className="text-xs text-slate-500">{testimonial.city}</div>
        </div>
      </div>

      <div className="mt-3 text-xs text-brick-600 font-medium">
        Purchased: {testimonial.product}
      </div>
    </motion.div>
  );
}
