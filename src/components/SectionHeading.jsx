import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      <span className="inline-block text-brick-600 font-semibold text-sm uppercase tracking-wider mb-3">
        {subtitle}
      </span>
      <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
        {title}
      </h2>
      {center && (
        <div className="w-20 h-1 bg-brick-700 rounded-full mt-4 mx-auto" />
      )}
    </motion.div>
  );
}
