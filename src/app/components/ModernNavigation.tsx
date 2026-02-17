import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ModernNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  /* Detect Scroll */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close menu on route change */
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-xl"
          : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* ================= LOGO ================= */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="SAPIVI Logo"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div className="flex flex-col leading-tight">
              <span
                className={`text-2xl font-bold ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                SAPIVI
              </span>

              <span
                className={`text-xs ${
                  isScrolled ? "text-gray-600" : "text-white/80"
                }`}
              >
                ISO 9001:2015
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="relative px-4 py-2">
                <span
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-teal-600"
                      : isScrolled
                      ? "text-gray-800 hover:text-teal-600"
                      : "text-white hover:text-teal-300"
                  }`}
                >
                  {item.label}
                </span>

                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 rounded-full"
                  />
                )}
              </Link>
            ))}

            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 hover:shadow-lg hover:scale-105 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-xl ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 rounded-xl font-medium ${
                    location.pathname === item.path
                      ? "bg-teal-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/contact"
                className="block px-4 py-3 bg-teal-600 text-white rounded-xl font-medium text-center mt-4"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
