import { motion } from "motion/react";
import { Users, Code, TrendingUp, BookOpen, Database, Briefcase } from "lucide-react";
import experienceImage from "figma:asset/850b4d180ea9eef194dc7caf4b56cf302cb87ef6.png";

export function About() {
  const experiences = [
    {
      icon: Users,
      title: "HR Consulting",
      period: "2007 / 2022",
      description:
        "SAPIVI is not just a Hr consulting firm, We are AI based consulting firm using the updated HR technologies to empower your business with the right talent.",
    },
    {
      icon: Code,
      title: "Software development and Implementation",
      period: "2007 / 2022",
      description:
        "SAPIVI has over 14 years of combined Project development and information technology experience delivering cutting-edge solutions for businesses.",
    },
    {
      icon: Briefcase,
      title: "Consulting",
      period: "2007 / 2022",
      description:
        "Our management consulting services focus on our clients' most critical issues and opportunities: strategy, marketing, organization, operations, and technology.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      period: "2007 / 2022",
      description:
        "SAPIVI is a dynamic, versatile and full-service digital marketing agency that doesn't rely on smoke and mirrors to attract new clients.",
    },
    {
      icon: BookOpen,
      title: "Bookkeeping",
      period: "2007 / 2022",
      description:
        "SAPIVI is providing a bookkeeping solution that helps all types of business owners keep their finances on track, so they can focus on what matters most.",
    },
    {
      icon: Database,
      title: "Data Analytics",
      period: "2007 / 2022",
      description:
        "We know how to separate the signal from the noise. Data, analytics and AI are opening the door to new possibilities for how organizations operate and compete.",
    },
  ];

  const stats = [
    { number: "14+", label: "Years Experience" },
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "25+", label: "Team Members" },
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About SAPIVI</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Over 14 years of experience in delivering innovative solutions in HR, IT, Digital Marketing, and Business Consulting
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
                WHO WE ARE
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Transforming Businesses Through Innovation
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We have rich experience in HR consultation, Staff sourcing, Digital
                  Marketing, IT services, and management. Our comprehensive approach
                  ensures that we deliver solutions that are not only technically sound
                  but also aligned with your business objectives.
                </p>
                <p>
                  We at Sapivi have over 14 years of experience in staff sourcing and
                  delivering IT and Digital solutions with our in-house team. This
                  experience allows our team to offer unique perspectives on talent
                  requisition and architecting solutions, analysis of technology returns,
                  and product recommendations for our clients in one place.
                </p>
                <p>
                  Our commitment to excellence and innovation has made us a trusted
                  partner for businesses looking to leverage technology and expert
                  consulting to achieve their strategic goals.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={experienceImage}
                alt="Our Experience"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Experience</h2>
            <p className="text-xl text-gray-600">
              Proven expertise across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-gray-900 text-white rounded-2xl hover:scale-105 transition-transform"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <exp.icon size={24} />
                  </div>
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{exp.title}</h3>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12 bg-white rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative technology solutions and expert
                consulting services that drive growth, efficiency, and competitive
                advantage in the digital age.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-12 bg-gradient-to-br from-blue-900 to-teal-700 text-white rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-blue-100 leading-relaxed">
                To be the leading provider of integrated business solutions, recognized
                for our innovation, expertise, and commitment to client success across
                all industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}