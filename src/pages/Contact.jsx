import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaClock,
} from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const contactInfo = [
  {
    icon: FaPhoneAlt,
    label: 'Phone',
    value: '+91-9456453983',
    link: 'tel:+91-7037206692',
    color: 'bg-brick-700',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'info@hncraftindia.com',
    link: 'mailto:info@hncraftindia.com',
    color: 'bg-amber-500',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: 'Chat with us',
    link: 'https://wa.me/+91-9456453983',
    color: 'bg-green-500',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Behjoi Road Village Mugaffar Pur, Industrial Area, [SAMBHAL Uttar Pradesh 244303], India',
    link: 'https://maps.google.com',
    color: 'bg-slate-700',
  },
];

const socialLinks = [
  { icon: FaFacebookF, url: 'https://facebook.com', label: 'Facebook', color: 'hover:bg-blue-600' },
  { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-pink-600' },
  { icon: FaYoutube, url: 'https://youtube.com', label: 'YouTube', color: 'hover:bg-red-600' },
  { icon: FaLinkedinIn, url: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-700' },
  { icon: FaWhatsapp, url: 'https://wa.me/91XXXXXXXXXX', label: 'WhatsApp', color: 'hover:bg-green-500' },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | HN CRAFT INDIA (@hncraftindia)</title>
        <meta name="description" content="Get in touch with Brick Machines Production. Call, email, WhatsApp, or visit us. Get a free quote for brick-making machines in India." />
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
            Contact Us
          </motion.h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Ready to start your brick manufacturing journey? We're here to help.
            Reach out through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.link}
                target={info.label === 'WhatsApp' || info.label === 'Location' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-6 text-center group hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 ${info.color} text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <info.icon />
                </div>
                <h3 className="font-heading font-semibold text-slate-900 text-sm mb-1">
                  {info.label}
                </h3>
                <p className="text-sm text-slate-500 break-words">{info.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />

            <div className="space-y-6">
              {/* Map */}
              <div className="card overflow-hidden h-80">
                <iframe
                  title="Our Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d76.81306785!3d28.6448097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Office Hours */}
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brick-50 text-brick-700 rounded-xl flex items-center justify-center">
                    <FaClock />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Sunday</span>
                    <span className="font-medium text-red-500">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="card p-6">
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3 flex-wrap">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`w-11 h-11 bg-slate-100 ${social.color} text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1`}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
