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

export function Services() {
  const mainServices = [
    {
      icon: BarChart,
      title: "Google Analytics",
      description:
        "Comprehensive analytics solutions to track, measure, and optimize your website performance.",
      features: [
        "Real-time data tracking",
        "Custom reporting dashboards",
        "Conversion tracking",
        "Audience insights",
      ],
      image: "/analytics.jpg",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Full-service digital marketing strategies that drive results and growth.",
      features: [
        "Social media marketing",
        "Content marketing",
        "Email campaigns",
        "PPC advertising",
      ],
      image: "/marketing.jpg",
    },
    {
      icon: Layers,
      title: "Content Management",
      description:
        "Streamline your content creation, organization, and distribution.",
      features: [
        "CMS implementation",
        "Content strategy",
        "Workflow automation",
        "Multi-channel publishing",
      ],
      image: "/cms.jpg",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern responsive websites built with cutting-edge technologies.",
      features: [
        "Responsive design",
        "Custom development",
        "E-commerce solutions",
        "Progressive web apps",
      ],
      image: "/web.jpg",
    },
    {
      icon: Settings,
      title: "API Integration",
      description:
        "Seamless integration of third-party services and APIs.",
      features: [
        "RESTful API development",
        "Third-party integrations",
        "Microservices architecture",
        "API documentation",
      ],
      image: "/api.jpg",
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description:
        "Improve your online visibility and organic search rankings.",
      features: [
        "On-page optimization",
        "Technical SEO",
        "Link building",
        "Local SEO",
      ],
      image: "/seo.jpg",
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description:
        "Protect your business with advanced cybersecurity solutions.",
      features: [
        "Security audits",
        "Penetration testing",
        "Compliance management",
        "Security training",
      ],
      image: "/security.jpg",
    },
    {
      icon: Database,
      title: "Data Processing",
      description:
        "Enterprise-grade data processing solutions.",
      features: [
        "Data warehousing",
        "ETL processes",
        "Real-time processing",
        "Data migration",
      ],
      image: "/data.jpg",
    },
    {
      icon: Code,
      title: "Application Development",
      description:
        "Custom application development tailored to your needs.",
      features: [
        "Custom software",
        "Mobile apps",
        "Enterprise solutions",
        "Maintenance & support",
      ],
      image: "/app.jpg",
    },
    {
      icon: Users,
      title: "HR Consulting",
      description:
        "AI-powered HR solutions for talent acquisition and management.",
      features: [
        "Talent acquisition",
        "Staff sourcing",
        "HR technology",
        "Performance management",
      ],
      image: "/hr.jpg",
    },
    {
      icon: Calculator,
      title: "Bookkeeping",
      description:
        "Professional bookkeeping services to keep your finances organized.",
      features: [
        "Financial recording",
        "Account reconciliation",
        "Tax preparation",
        "Financial reporting",
      ],
      image: "/bookkeeping.jpg",
    },
    {
      icon: Smartphone,
      title: "Consulting",
      description:
        "Strategic management consulting for business growth.",
      features: [
        "Strategy development",
        "Process optimization",
        "Change management",
        "Technology advisory",
      ],
      image: "/consulting.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 to-teal-700 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-blue-100">
          Comprehensive solutions to drive your business forward
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div
                className="relative h-full p-8 rounded-2xl overflow-hidden text-white cursor-pointer"
                style={{
                  backgroundImage: service.image
                    ? `url(${service.image})`
                    : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* DARK OVERLAY */}
                {service.image && (
                  <div className="absolute inset-0 bg-black/60"></div>
                )}

                {/* CONTENT */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-teal-600 to-blue-600">
                    <service.icon size={32} />
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {service.title}
                  </h3>

                  <p className="mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
