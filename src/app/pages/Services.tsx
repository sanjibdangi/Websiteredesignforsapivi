import { motion } from "motion/react";
import {
  BarChart,
  TrendingUp,
  Layers,
  Globe,
  Settings,
  Search,
  Shield,
  Database,
  Code,
  Users,
  Calculator,
  Smartphone,
} from "lucide-react";
import servicesImage from "figma:asset/3a448f10dfffd128c11c99bd55a6bbbc572040ae.png";

export function Services() {
  const mainServices = [
    {
      icon: BarChart,
      title: "Google Analytics",
      description:
        "Comprehensive analytics solutions to track, measure, and optimize your website performance. Get actionable insights to make data-driven decisions.",
      features: [
        "Real-time data tracking",
        "Custom reporting dashboards",
        "Conversion tracking",
        "Audience insights",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Full-service digital marketing strategies that drive results. From SEO to social media, we help you reach and engage your target audience.",
      features: [
        "Social media marketing",
        "Content marketing",
        "Email campaigns",
        "PPC advertising",
      ],
    },
    {
      icon: Layers,
      title: "Content Management",
      description:
        "Streamline your content creation, organization, and distribution with our advanced content management solutions.",
      features: [
        "CMS implementation",
        "Content strategy",
        "Workflow automation",
        "Multi-channel publishing",
      ],
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications built with cutting-edge technologies to deliver exceptional user experiences.",
      features: [
        "Responsive design",
        "Custom development",
        "E-commerce solutions",
        "Progressive web apps",
      ],
    },
    {
      icon: Settings,
      title: "API Integration",
      description:
        "Seamless integration of third-party services and APIs to extend your application's capabilities and streamline operations.",
      features: [
        "RESTful API development",
        "Third-party integrations",
        "Microservices architecture",
        "API documentation",
      ],
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description:
        "Improve your online visibility and organic search rankings with our proven SEO strategies and techniques.",
      features: [
        "On-page optimization",
        "Technical SEO",
        "Link building",
        "Local SEO",
      ],
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description:
        "Protect your business with comprehensive cybersecurity solutions that safeguard your data and systems from threats.",
      features: [
        "Security audits",
        "Penetration testing",
        "Compliance management",
        "Security training",
      ],
    },
    {
      icon: Database,
      title: "Data Processing",
      description:
        "Enterprise-grade data processing solutions to transform raw data into meaningful insights for better business decisions.",
      features: [
        "Data warehousing",
        "ETL processes",
        "Real-time processing",
        "Data migration",
      ],
    },
    {
      icon: Code,
      title: "Application Development",
      description:
        "Custom application development tailored to your specific business needs, from concept to deployment and beyond.",
      features: [
        "Custom software",
        "Mobile apps",
        "Enterprise solutions",
        "Maintenance & support",
      ],
    },
    {
      icon: Users,
      title: "HR Consulting",
      description:
        "AI-powered HR solutions for talent acquisition, management, and development to build high-performing teams.",
      features: [
        "Talent acquisition",
        "Staff sourcing",
        "HR technology",
        "Performance management",
      ],
    },
    {
      icon: Calculator,
      title: "Bookkeeping",
      description:
        "Professional bookkeeping services to keep your finances organized and compliant, so you can focus on growing your business.",
      features: [
        "Financial recording",
        "Account reconciliation",
        "Tax preparation",
        "Financial reporting",
      ],
    },
    {
      icon: Smartphone,
      title: "Consulting",
      description:
        "Strategic management consulting to address your most critical business challenges and unlock new opportunities.",
      features: [
        "Strategy development",
        "Process optimization",
        "Change management",
        "Technology advisory",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive solutions to drive your business forward
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal-600 font-medium mb-2">SAPIVI</p>
            <h2 className="text-4xl font-bold text-gray-900">What We Offer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full p-8 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-teal-600 hover:to-blue-700 hover:text-white transition-all duration-300 cursor-pointer">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 bg-gradient-to-br from-teal-600 to-blue-600 group-hover:from-white group-hover:to-white">
                    <service.icon className="transition-colors duration-300 text-white group-hover:text-teal-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-blue-100 mb-6 leading-relaxed transition-colors duration-300">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600 group-hover:text-blue-100 transition-colors duration-300"
                      >
                        <div className="w-1.5 h-1.5 bg-teal-600 group-hover:bg-white rounded-full mr-2 transition-colors duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              A proven approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your business goals and challenges",
              },
              {
                step: "02",
                title: "Strategy",
                description: "Crafting a tailored solution for your needs",
              },
              {
                step: "03",
                title: "Execution",
                description: "Implementing solutions with precision and care",
              },
              {
                step: "04",
                title: "Support",
                description: "Ongoing optimization and maintenance",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
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
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Ready to take your business to the next level? Get in touch with us today.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-teal-700 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}