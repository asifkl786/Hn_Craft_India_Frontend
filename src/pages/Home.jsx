import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  FaTools,
  FaShieldAlt,
  FaTruckMoving,
  FaHeadset,
  FaArrowRight,
  FaHandshake,
  FaMedal,
  FaIndustry,
} from 'react-icons/fa';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';

const features = [
  {
    icon: FaTools,
    title: 'Expert Installation',
    desc: 'Free installation and operator training at your site by experienced technicians.',
  },
  {
    icon: FaShieldAlt,
    title: '1-Year Warranty',
    desc: 'Comprehensive warranty on all machines with extended warranty options.',
  },
  {
    icon: FaTruckMoving,
    title: 'Pan-India Delivery',
    desc: 'Fast and safe delivery to all states across India with proper logistics.',
  },
  {
    icon: FaHeadset,
    title: '24/7 Support',
    desc: 'Round-the-clock customer support via phone, WhatsApp, and on-site visits.',
  },
];

const whyChooseUs = [
  { icon: FaIndustry, title: '15+ Years Experience', desc: 'Manufacturing excellence since 2009' },
  { icon: FaMedal, title: 'ISO Quality Standards', desc: 'Every machine built to last' },
  { icon: FaHandshake, title: '500+ Happy Customers', desc: 'Trusted across 20+ states' },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>HN Craft India (@hncraftindia) | Premium Brick-Making Machines in India</title>
        <meta name="description" content="Manufacturer of high-quality brick-making machines in India. Fly ash, clay, cement, interlocking, manual & automatic brick machines. Pan-India delivery, installation & AMC." />
        <meta name="keywords" content="brick machine India, fly ash brick machine, cement brick machine, hncraftindia, brick making machine, automatic brick plant" />
      </Helmet>

      <Hero />

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <SectionHeading
            subtitle="Why Choose Us"
            title="Built for Indian Builders, Backed by Trust"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-6 text-center group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-brick-50 text-brick-700 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:bg-brick-700 group-hover:text-white transition-all duration-300">
                  <feature.icon />
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 bg-slate-50">
        <div className="container-page">
          <SectionHeading
            subtitle="Our Products"
            title="Featured Brick-Making Machines"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="btn-primary">
              View All Products <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Stats */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="container-page relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brick-400 font-semibold text-sm uppercase tracking-wider mb-3 block">
                Why Hn Craft India
              </span>
              <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl leading-tight mb-6">
                India's Most Trusted Brick Machine Manufacturer
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                With over 15 years of experience, we've empowered hundreds of
                builders, contractors, and rural entrepreneurs across India.
                Our machines are built tough for Indian conditions — reliable,
                efficient, and backed by unmatched after-sales support.
              </p>
              <div className="space-y-4 mb-8">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brick-700/20 text-brick-400 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                      <item.icon />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-white">
                        {item.title}
                      </div>
                      <div className="text-sm text-slate-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-accent">
                Learn More About Us <FaArrowRight />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/4395554/pexels-photo-4395554.jpeg?auto=compress&cs=tinysrgb&h=600&w=500"
                alt="Brick production"
                className="rounded-2xl object-cover h-64 w-full"
                loading="lazy"
              />
              <img
                src="https://images.pexels.com/photos/15500197/pexels-photo-15500197.jpeg?auto=compress&cs=tinysrgb&h=600&w=500"
                alt="Stacked bricks"
                className="rounded-2xl object-cover h-64 w-full mt-8"
                loading="lazy"
              />
              <img
                src="https://images.pexels.com/photos/10039994/pexels-photo-10039994.jpeg?auto=compress&cs=tinysrgb&h=600&w=500"
                alt="Heavy machinery"
                className="rounded-2xl object-cover h-64 w-full"
                loading="lazy"
              />
              <img
                src="https://images.pexels.com/photos/39328831/pexels-photo-39328831.jpeg?auto=compress&cs=tinysrgb&h=600&w=500"
                alt="Red bricks"
                className="rounded-2xl object-cover h-64 w-full mt-8"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <SectionHeading
            subtitle="Customer Reviews"
            title="What Our Customers Say"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/testimonials" className="btn-outline">
              Read All Reviews <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-brick-700">
        <div className="container-page">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl mb-2">
                Ready to Start Your Brick Manufacturing Business?
              </h2>
              <p className="text-brick-100 text-lg">
                Get a free consultation and quote from our experts today.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-accent">
                Get Free Quote <FaArrowRight />
              </Link>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !border-white/30 !text-white hover:!border-white hover:!bg-white hover:!text-brick-700"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
