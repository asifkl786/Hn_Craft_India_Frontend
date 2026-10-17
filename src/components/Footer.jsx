import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
} from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { icon: FaFacebookF, url: 'https://facebook.com', label: 'Facebook' },
  { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
  { icon: FaYoutube, url: 'https://youtube.com', label: 'YouTube' },
  { icon: FaLinkedinIn, url: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaWhatsapp, url: 'https://wa.me/91XXXXXXXXXX', label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-brick-700 rounded-xl flex items-center justify-center text-white font-heading font-bold text-xl">
                BP
              </div>
              <div>
                <span className="font-heading font-bold text-white block leading-tight">
                  Brick Machines
                </span>
                <span className="text-xs text-brick-400 font-medium">
                  @hncraftindia
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Leading manufacturer and supplier of high-quality brick-making
              machines in India. Empowering builders and entrepreneurs with
              reliable, efficient machinery.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 bg-slate-800 hover:bg-brick-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="text-white text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-brick-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-5">
              Our Products
            </h3>
            <ul className="space-y-2.5">
              {[
                'Fly Ash Brick Machine',
                'Clay Brick Machine',
                'Cement Brick Machine',
                'Interlocking Brick Machine',
                'Manual Brick Machine',
                'Fully Automatic Plant',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-sm text-slate-400 hover:text-brick-400 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-brick-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-slate-400">
                  Behjoi Road , Village Mugaffar Pur,
                  <br />
                  [Sambhal Uttar Pradesh - 244303], India 
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-brick-400 flex-shrink-0" />
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-sm text-slate-400 hover:text-brick-400 transition-colors"
                >
                  +91-9456453983, 7037206692
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-brick-400 flex-shrink-0" />
                <a
                  href="mailto:info@hncraftindia.com"
                  className="text-sm text-slate-400 hover:text-brick-400 transition-colors"
                >
                  info@hncraftindia.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaBuilding className="text-brick-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-slate-400">
                  <span className="text-slate-500">GSTIN:</span>{' '}
                  <span className="text-white font-semibold tracking-wide">09AXMPK1223A2ZW</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} HN CRAFT INDIA
            (@hncraftindia). All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Made in India 🇮🇳 for Indian Builders
          </p>
        </div>
      </div>
    </footer>
  );
}
