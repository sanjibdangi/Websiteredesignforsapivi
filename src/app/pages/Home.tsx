import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Users,
  TrendingUp,
  Laptop,
  Shield,
  Layers,
  Calculator,
  BarChart,
  Database,
  Globe,
  Settings,
  Search,
  ArrowRight,
} from "lucide-react";
import heroImage from "figma:asset/105fa17128d33e28039ea423fd9f6224b71c5184.png";
import skillsImage from "figma:asset/4b7ab189ea27d2df3eeb54aeab8e43d15876edcd.png";

export function Home() {
  const skills = [
    { name: "HR consultation & Staff sourcing", value: 98 },
    { name: "Digital Marketing", value: 95 },
    { name: "IT consulting", value: 95 },
    { name: "Cyber Security", value: 93 },
    { name: "Application integration", value: 96 },
    { name: "Accounting", value: 94 },
  ];

  const services = [
    {
      icon: BarChart,
      title: "Google Analytics",
      description: "Track and analyze your website performance with comprehensive analytics solutions.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Full-service digital marketing agency that drives results and growth.",
    },
    {
      icon: Layers,
      title: "Content Management",
      description: "Streamline your content creation and management processes efficiently.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies.",
    },
    {
      icon: Settings,
      title: "API Integration",
      description: "Seamless integration of third-party services and APIs.",
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Improve your online visibility and organic search rankings.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(15, 118, 110, 0.85)), url(${heroImage})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl mb-4 text-gray-200">We are providing</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Application Integration
            </h1>
            <p className="text-xl mb-12 text-gray-200">
              & Advanced Digital Solutions
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <a href="#" className="text-white hover:text-teal-300 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-teal-300 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-white hover:text-teal-300 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-teal-300 transition-colors">
                <FaPinterest size={24} />
              </a>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors group"
            >
              Explore Our Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2"
          >
            <div className="w-2 h-2 bg-white rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
                ABOUT SAPIVI
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Empowering Your Business with Expert Solutions
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We have rich experience in HR consultation, Staff sourcing, Digital
                  Marketing, IT services, and management.
                </p>
                <p>
                  We at Sapivi have over 14 years of experience in staff sourcing and
                  delivering IT and Digital solutions with our in-house team. This
                  experience allows our team to offer unique perspectives on talent
                  requisition and architecting solutions, analysis of technology returns,
                  and product recommendations for our clients in one place.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 group"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Our Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-teal-600 font-bold">{skill.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-teal-600 to-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-xl text-gray-600">SAPIVI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors group"
            >
              View All Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how we can help you achieve your goals with our expert solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-teal-700 rounded-full font-medium hover:bg-gray-100 transition-colors group"
            >
              Get In Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Import social icons
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { FaPinterest } from "react-icons/fa";