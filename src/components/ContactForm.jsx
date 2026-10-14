import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (frontend-only)
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData(initialForm);

    setTimeout(() => setShowSuccess(false), 5000);
  };

  const inputClass = (fieldName) =>
    `w-full px-4 py-3 rounded-xl border bg-white text-slate-700 placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brick-500/30 ${
      errors[fieldName]
        ? 'border-red-400 bg-red-50'
        : 'border-slate-200 focus:border-brick-500'
    }`;

  return (
    <div className="card p-6 sm:p-8 relative">
      <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2">
        Send Us a Message
      </h3>
      <p className="text-slate-500 text-sm mb-6">
        Fill out the form below and our team will get back to you within 24
        hours.
      </p>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3"
          >
            <FaCheckCircle className="text-green-600 text-xl flex-shrink-0" />
            <div>
              <p className="font-semibold text-green-800 text-sm">
                Message sent successfully!
              </p>
              <p className="text-green-600 text-xs">
                We'll contact you within 24 hours.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={inputClass('name')}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
              <FaExclamationCircle /> {errors.name}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={inputClass('email')}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <FaExclamationCircle /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className={inputClass('phone')}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <FaExclamationCircle /> {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your requirements..."
            className={`${inputClass('message')} resize-none`}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
              <FaExclamationCircle /> {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message <FaPaperPlane className="text-sm" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
