import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink } from "lucide-react";
import worksHero from "figma:asset/5490a5873ae29f3af2cc1c5d00e4c93a0ae65c4d.png";
import portfolioImage from "figma:asset/5cad1c0859eaf10565db4145476dedfe77e9d590.png";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filters = ["ALL", "SEO", "WEBDESIGN", "WORK", "WORDPRESS"];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      category: "WEBDESIGN",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      description: "Complete redesign of enterprise e-commerce platform",
    },
    {
      id: 2,
      title: "SEO Optimization Campaign",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80",
      description: "Improved organic search rankings by 300%",
    },
    {
      id: 3,
      title: "Corporate Website Development",
      category: "WORDPRESS",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      description: "Modern WordPress website for Fortune 500 company",
    },
    {
      id: 4,
      title: "Brand Identity Design",
      category: "WORK",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      description: "Complete brand identity package for tech startup",
    },
    {
      id: 5,
      title: "Mobile App UI/UX",
      category: "WEBDESIGN",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&q=80",
      description: "User-centered design for healthcare mobile app",
    },
    {
      id: 6,
      title: "Local SEO Strategy",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      description: "Multi-location SEO strategy for retail chain",
    },
    {
      id: 7,
      title: "SaaS Dashboard Design",
      category: "WEBDESIGN",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      description: "Analytics dashboard for SaaS platform",
    },
    {
      id: 8,
      title: "Content Marketing Hub",
      category: "WORDPRESS",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      description: "Custom WordPress theme for content creators",
    },
    {
      id: 9,
      title: "Digital Marketing Campaign",
      category: "WORK",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80",
      description: "Integrated digital campaign for product launch",
    },
  ];

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Works</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Showcasing our recent projects and success stories
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium bg-teal-600 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        <ExternalLink size={20} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-300">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Clients</h2>
            <p className="text-xl text-gray-600">SAPIVI works with</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rebath",
                logo: "RE BATH",
                subtitle: "Rebath",
                color: "from-teal-600 to-blue-600",
              },
              {
                name: "Teach For All",
                logo: "Teach For All",
                subtitle: "TeachForAll",
                color: "from-blue-700 to-cyan-600",
              },
              {
                name: "S B D G",
                logo: "SBDG",
                subtitle: "small biz dev group",
                color: "from-slate-700 to-teal-600",
              },
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-12 bg-gray-900 rounded-2xl text-center text-white hover:scale-105 transition-transform"
              >
                <div
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${client.color} rounded-full flex items-center justify-center`}
                >
                  <span className="text-2xl font-bold">{client.logo.charAt(0)}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{client.name}</h3>
                <p className="text-gray-400">{client.subtitle}</p>
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
            <h2 className="text-4xl font-bold mb-6">Want to see your project here?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's collaborate and create something amazing together.
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