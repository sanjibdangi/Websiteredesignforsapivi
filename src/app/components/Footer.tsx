import { Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router";
import logoImage from "figma:asset/a85c7ac0c1bf2644dc5a784b827313e8e2f7e34f.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 mx-auto mb-6 border-2 border-white rounded-full flex items-center justify-center">
            <Mail size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-6">Get The Latest Update by Email</h2>
          <form className="max-w-2xl mx-auto">
            <div className="flex gap-0 bg-white rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email here..."
                className="flex-1 px-6 py-4 text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
  <img
    src="/image.png"
    alt="SAPIVI Logo"
    className="w-12 h-12 rounded-full object-cover"
  />

  <div className="flex flex-col leading-tight">
    <span className="text-2xl font-bold">SAPIVI</span>
    <span className="text-xs text-gray-400">
      ISO 9001:2015
    </span>
  </div>
</div>

              <p className="text-gray-400 mb-6">
                Providing innovative solutions in HR consulting, digital marketing, IT services, and management for over 14 years.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors"
                >
                  <FaPinterest size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-teal-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Email Us At</p>
                    <a href="mailto:contact@sapivi.com" className="text-gray-400 hover:text-teal-400">
                      contact@sapivi.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Head Office</p>
                    <p className="text-gray-400">
                      No:58, 5th Main Krishna Niwas, Halasahalli,
                      <br />
                      Bangalore, Karnataka, India, 560087
                    </p>
                    <p className="text-gray-400 mt-2 text-sm">
                      CIN : U72900KA2021PTC155725
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>2022 © Sapivi Enterprises Private Limited.</p>
        </div>
      </div>
    </footer>
  );
}