import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaQuestionCircle } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import FAQItem from '../components/FAQItem';
import { faqs } from '../data/faqs';

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>FAQ | Brick Machines Production (@hncraftindia)</title>
        <meta name="description" content="Frequently asked questions about our brick-making machines — warranty, installation, capacity, spare parts, financing, and more." />
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
            FAQ
          </motion.h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Got questions? We've got answers. Find answers to the most common
            questions about our brick-making machines and services.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-white">
        <div className="container-page max-w-3xl">
          <SectionHeading subtitle="Questions & Answers" title="Frequently Asked Questions" />
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-slate-50">
        <div className="container-page">
          <div className="bg-brick-700 rounded-2xl p-8 sm:p-12 text-center">
            <FaQuestionCircle className="text-white text-4xl mx-auto mb-4" />
            <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl mb-3">
              Still Have Questions?
            </h2>
            <p className="text-brick-100 mb-6 max-w-xl mx-auto">
              Can't find the answer you're looking for? Our team is just a
              message away. Feel free to reach out — we're happy to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-accent">
                Contact Us <FaArrowRight />
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
