import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaBullseye,
  FaEye,
  FaUsers,
  FaHandshake,
  FaAward,
  FaCogs,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';

const team = [
  {
    name: 'Ramesh Agrawal',
    role: 'Founder & Director',
    photo: 'https://images.pexels.com/photos/34392775/pexels-photo-34392775.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Operations',
    photo: 'https://images.pexels.com/photos/9491882/pexels-photo-9491882.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    name: 'Vijay Kumar',
    role: 'Chief Engineer',
    photo: 'https://images.pexels.com/photos/18471162/pexels-photo-18471162.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    name: 'Anil Mehta',
    role: 'Sales & Support Head',
    photo: 'https://images.pexels.com/photos/40059290/pexels-photo-40059290.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
];

const values = [
  { icon: FaAward, title: 'Quality First', desc: 'We never compromise on the quality of our machines or materials.' },
  { icon: FaHandshake, title: 'Customer Trust', desc: 'Building long-term relationships through honest service.' },
  { icon: FaCogs, title: 'Innovation', desc: 'Continuously improving our machines with latest technology.' },
  { icon: FaUsers, title: 'Team Excellence', desc: 'Skilled professionals dedicated to your success.' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Brick Machines Production (@hncraftindia)</title>
        <meta name="description" content="Learn about Brick Machines Production - India's trusted brick machine manufacturer with 15+ years of experience. Our story, mission, vision, and team." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-28 pb-12 bg-slate-900">
        <div className="container-page text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-white text-4xl sm:text-5xl mb-4"
          >
            About Us
          </motion.h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Empowering Indian builders and entrepreneurs with reliable,
            high-performance brick-making machines since 2009.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-brick-600 font-semibold text-sm uppercase tracking-wider mb-3 block">
                Our Story
              </span>
              <h2 className="font-heading font-bold text-3xl text-slate-900 mb-6 leading-tight">
                From a Small Workshop to India's Trusted Brick Machine Manufacturer
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded in 2009 by Ramesh Agrawal, Brick Machines Production
                  started as a small workshop in [Your City] with a simple
                  mission: to make quality brick-making machines accessible and
                  affordable for Indian builders and rural entrepreneurs.
                </p>
                <p>
                  Over the past 15+ years, we've grown from a local manufacturer
                  to a trusted brand serving customers across 20+ states in
                  India. Our machines have helped establish hundreds of
                  brick-making businesses, from small rural setups to
                  large-scale industrial plants.
                </p>
                <p>
                  Today, under the brand name <strong>@hncraftindia</strong>,
                  we continue to innovate, improve, and deliver machines that
                  are built for Indian conditions — tough, reliable, and
                  efficient. Every machine that leaves our factory carries our
                  promise of quality and our commitment to our customers'
                  success.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.pexels.com/photos/27425952/pexels-photo-27425952.jpeg?auto=compress&cs=tinysrgb&h=500&w=400"
                alt="Our factory"
                className="rounded-2xl object-cover h-72 w-full"
                loading="lazy"
              />
              <img
                src="https://images.pexels.com/photos/14804699/pexels-photo-14804699.jpeg?auto=compress&cs=tinysrgb&h=500&w=400"
                alt="Manufacturing facility"
                className="rounded-2xl object-cover h-72 w-full mt-8"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-brick-700"
            >
              <div className="w-14 h-14 bg-brick-50 text-brick-700 rounded-2xl flex items-center justify-center text-2xl mb-5">
                <FaBullseye />
              </div>
              <h3 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To empower every Indian builder, contractor, and entrepreneur
                with high-quality, affordable brick-making machines that drive
                business growth and contribute to India's infrastructure
                development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-amber-500"
            >
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center text-2xl mb-5">
                <FaEye />
              </div>
              <h3 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To become India's most trusted and widely-used brick machine
                brand, known for innovation, quality, and unwavering customer
                support — making "Made in India" a mark of excellence in
                manufacturing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <SectionHeading subtitle="What Drives Us" title="Our Core Values" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-brick-50 text-brick-700 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:bg-brick-700 group-hover:text-white transition-all duration-300">
                  <value.icon />
                </div>
                <h3 className="font-heading font-semibold text-slate-900 text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-500">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="container-page">
          <SectionHeading subtitle="Meet the Team" title="The People Behind Hn Craft India" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-6 text-center group"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-lg">
                  {member.name}
                </h3>
                <p className="text-brick-600 text-sm font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900">
        <div className="container-page">
          <SectionHeading
            subtitle="Why Choose Us"
            title="The Hn Craft India Advantage"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              '15+ years of manufacturing experience',
              '500+ machines installed across India',
              'Free installation and operator training',
              '1-year comprehensive warranty on all machines',
              'Genuine spare parts available 24/48 hours',
              'Flexible AMC plans for peace of mind',
              'Financing and EMI options available',
              'Dedicated after-sales support team',
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-3 text-slate-300"
              >
                <FaCheckCircle className="text-brick-400 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="btn-accent">
              Get in Touch <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
