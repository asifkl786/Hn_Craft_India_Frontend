import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaQuoteLeft } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const avgRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <>
      <Helmet>
        <title>Testimonials | Brick Machines Production (@hncraftindia)</title>
        <meta name="description" content="Read what our customers across India say about our brick-making machines. Real reviews from real customers in Bihar, Gujarat, Rajasthan, and more." />
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
            Testimonials
          </motion.h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Don't just take our word for it — hear what our customers across
            India have to say about our machines and service.
          </p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-brick-700">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '500+', label: 'Happy Customers' },
              { number: avgRating, label: 'Average Rating' },
              { number: '20+', label: 'States Served' },
              { number: '15+', label: 'Years of Trust' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="font-heading font-bold text-4xl text-white">
                  {stat.number}
                </div>
                <div className="text-brick-200 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container-page">
          <SectionHeading subtitle="Customer Reviews" title="What Our Customers Say" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-20 bg-slate-900">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <FaQuoteLeft className="text-brick-400 text-4xl mx-auto mb-6" />
            <p className="font-heading text-2xl text-white leading-relaxed mb-6">
              "Hn Craft India didn't just sell me a machine — they helped me
              build a business. From selecting the right model to training my
              team, they were with me at every step. Today I produce 10,000
              bricks a day."
            </p>
            <div className="flex items-center justify-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="text-amber-400" />
              ))}
            </div>
            <div className="font-heading font-semibold text-white">
              Rajesh Kumar
            </div>
            <div className="text-slate-400 text-sm">Patna, Bihar</div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-page text-center">
          <h2 className="font-heading font-bold text-slate-900 text-2xl sm:text-3xl mb-4">
            Join Our Happy Customers
          </h2>
          <p className="text-slate-500 mb-6 max-w-xl mx-auto">
            Become the next success story. Get in touch and let us help you
            find the perfect brick machine for your business.
          </p>
          <Link to="/contact" className="btn-primary">
            Get Started <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
