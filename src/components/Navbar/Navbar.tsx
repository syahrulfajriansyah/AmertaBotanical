'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar relative bg-[#004d40] text-white">
      <div className="navbar-container flex items-center justify-between px-4 py-2 md:px-8">
        {/* Logo */}
        <div className="navbar-logo flex items-center">
          <Link href="/">
            <Image
              src="/AMERTA-BOTANICAL-2-W-T.PNG"
              alt="AMERTA Botanical"
              width={2500}
              height={1500}
              className="w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <Link href="/" className="inline-flex items-center px-4 py-2 rounded-full text-white font-medium hover:bg-gray-800 hover:text-yellow-300 transition-colors">
            Home
          </Link>
          <Link href="/about" className="inline-flex items-center px-4 py-2 rounded-full text-white font-medium hover:bg-gray-800 hover:text-yellow-300 transition-colors">
            About Us
          </Link>
          <Link href="/services" className="inline-flex items-center px-4 py-2 rounded-full text-white font-medium hover:bg-gray-800 hover:text-yellow-300 transition-colors">
            Services
          </Link>
          <Link href="/teams" className="inline-flex items-center px-4 py-2 rounded-full text-white font-medium hover:bg-gray-800 hover:text-yellow-300 transition-colors">
            Teams
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            className="navbar-mobile-menu-button focus:outline-none"
            aria-label="Toggle navigation"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:hidden bg-[#004d40] text-white shadow-lg rounded-lg absolute top-0 left-0 w-full h-screen p-4 z-10 flex flex-col gap-4 transition-all duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          type="button"
          className="navbar-mobile-menu-button-close self-end focus:outline-none"
          aria-label="Close navigation"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Mobile Menu Links */}
        <Link href="/" className="block px-4 py-2 rounded-full text-white font-medium hover:bg-gray-800 hover:text-yellow-300 transition-colors" onClick={toggleMenu}>
          Home
        </Link>
        <Link href="/about" className="block px-4 py-2 rounded-full text-white font-medium hover:bg-gray-800 hover:text-yellow-300 transition-colors" onClick={toggleMenu}>
          About Us
        </Link>
        <Link href="/services" className="block px-4 py-2 rounded-full text-white font-medium hover:bg-gray-800 hover:text-yellow-300 transition-colors" onClick={toggleMenu}>
          Services
        </Link>
        <Link href="/teams" className="block px-4 py-2 rounded-full text-white font-medium hover:bg-gray-800 hover:text-yellow-300 transition-colors" onClick={toggleMenu}>
          Teams
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
