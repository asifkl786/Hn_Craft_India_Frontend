import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCogs,
  FaChalkboardTeacher,
  FaFileContract,
  FaWrench,
  FaUserTie,
  FaArrowRight,
} from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';

const services = [
  {
    icon: FaCogs,
    title: 'Machine Installation',
    desc: 'Professional installation of all brick-making machines at your site. Our experienced technicians ensure proper setup, calibration, and testing before handing over.',
    features: ['Free site inspection', 'Expert technicians', 'Testing & calibration', 'Same-day setup'],
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Operator Training',
    desc: 'Comprehensive hands-on training for your operators and staff. We ensure your team can run the machine efficiently and safely before we leave.',
    features: ['On-site training', 'Safety procedures', 'Maintenance basics', 'Troubleshooting guide'],
  },
  {
    icon: FaFileContract,
    title: 'Annual Maintenance (AMC)',
    desc: 'Flexible AMC plans starting from ₹15,000/year. Regular inspections, preventive maintenance, and priority service to keep your machine running smoothly.',
    features: ['Regular inspections', 'Priority service', 'Preventive maintenance', 'Discounted parts'],
  },
  {
    icon: FaWrench,
    title: 'Spare Parts Supply',
    desc: 'Genuine spare parts for all our machines, dispatched within 24-48 hours. We maintain a comprehensive inventory to minimize your downtime.',
    features: ['Genuine parts only', '24-48hr dispatch', 'All models covered', 'Bulk order discounts'],
  },
  {
    icon: FaUserTie,
    title: 'Business Consultation',
    desc: 'Expert guidance on setting up your brick manufacturing business — from machine selection to raw material sourcing and production planning.',
    features: ['Machine selection', 'Raw material sourcing', 'Production planning', 'ROI analysis'],
  },
  {
    icon: FaCogs,
    title: 'Custom Machine Design',
    desc: 'Need something specific? We design and manufacture custom brick machines tailored to your unique requirements and production needs.',
    features: ['Custom moulds', 'Special capacities', 'Unique brick sizes', 'Automation upgrades'],
  },
];

const process = [
  { step: '01', title: 'Consultation', desc: 'Discuss your requirements and get expert advice.' },
  { step: '02', title: 'Quotation', desc: 'Receive a detailed quote within 24 hours.' },
  { step: '03', title: 'Manufacturing', desc: 'Your machine is built with quality materials.' },
  { step: '04', title: 'Delivery & Installation', desc: 'We deliver, install, and train your team.' },
  { step: '05', title: 'Ongoing Support', desc: 'AMC, spare parts, and support whenever needed.' },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Brick Machines Production (@hncraftindia)</title>
        <meta name="description" content="Complete services: machine installation, operator training, AMC, spare parts, business consultation, and custom machine design for brick manufacturing in India." />
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
            Our Services
          </motion.h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            End-to-end support for your brick manufacturing business — from
            installation and training to maintenance and spare parts.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <SectionHeading subtitle="What We Offer" title="Complete Brick Machine Services" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-6 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-brick-50 text-brick-700 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:bg-brick-700 group-hover:text-white transition-all duration-300">
                  <service.icon />
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="container-page">
          <SectionHeading subtitle="How We Work" title="Our Simple 5-Step Process" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-md p-6 text-center h-full">
                  <div className="font-heading font-bold text-4xl text-brick-200 mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold text-slate-900 text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-brick-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brick-700">
        <div className="container-page text-center">
          <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl mb-4">
            Need a Service for Your Machine?
          </h2>
          <p className="text-brick-100 mb-6 max-w-xl mx-auto">
            Whether it's installation, maintenance, or spare parts — we're here
            to help. Get in touch today.
          </p>
          <Link to="/contact" className="btn-accent">
            Contact Us <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
