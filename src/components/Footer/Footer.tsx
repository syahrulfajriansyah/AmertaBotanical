import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Information */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-3 text-white">About Us</h5>
            <p className="text-gray-400">
              We are a leading company in providing the best quality products and services. Our team is dedicated to ensuring customer satisfaction and continuous innovation.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-3 text-white">Quick Links</h5>
            <ul>
              <li className="mb-2">
                <a href="/about" className="text-gray-300 hover:text-yellow-400 hover:bg-gray-700 rounded-lg px-2 py-1 transition-colors duration-200">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-gray-300 hover:text-yellow-400 hover:bg-gray-700 rounded-lg px-2 py-1 transition-colors duration-200">Services</a>
              </li>
              <li className="mb-2">
                <a href="/teams" className="text-gray-300 hover:text-yellow-400 hover:bg-gray-700 rounded-lg px-2 py-1 transition-colors duration-200">Teams</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-gray-300 hover:text-yellow-400 hover:bg-gray-700 rounded-lg px-2 py-1 transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3">
            <h5 className="text-lg font-semibold mb-3 text-white">Follow Us</h5>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                className="text-xl text-blue-600 hover:bg-blue-600 hover:text-white rounded-full p-3 transition-colors duration-300 border-2 border-transparent hover:border-yellow-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com"
                className="text-xl text-pink-500 hover:bg-pink-500 hover:text-white rounded-full p-3 transition-colors duration-300 border-2 border-transparent hover:border-yellow-400"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                className="text-xl text-gray-700 hover:bg-gray-700 hover:text-white rounded-full p-3 transition-colors duration-300 border-2 border-transparent hover:border-yellow-400"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://youtube.com"
                className="text-xl text-gray-700 hover:bg-gray-700 hover:text-white rounded-full p-3 transition-colors duration-300 border-2 border-transparent hover:border-yellow-400"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
          &copy; 2024 AMERTA Botanical. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
