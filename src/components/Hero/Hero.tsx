import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen bg-gradient-to-r from-green-900 via-green-800 to-black overflow-hidden">
      {/* Logo */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30">
        <Link href="/">
          <Image
            src="/AMERTA-BOTANICAL-2-W-T.PNG"
            alt="AMERTA Botanical"
            width={350}
            height={90}
            className="relative w-auto transition-transform duration-300 ease-in-out transform hover:scale-125"
            priority
          />
        </Link>
      </div>

      {/* Hero Content */}
      <div className="relative flex items-center justify-center w-full h-full bg-black bg-opacity-60">
        <div className="relative text-center text-white px-6 py-8 md:px-12 md:py-16 z-20">
          <h1 className="relative text-4xl md:text-6xl font-bold mb-6 text-green-200 drop-shadow-lg animate-fadeInUp">
            Welcome to
            <br />
            Amerta Botanical West Borneo
          </h1>
          <p className="relative text-lg md:text-2xl mb-8 text-green-300 drop-shadow-md animate-fadeIn animate-delay-200">
            From West Borneo to You: Reliable Kratom Quality with Amerta Botanical.
          </p>
          <Link href="/contact">
            <div className="relative inline-block px-10 py-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-400 text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl animate-fadeIn animate-delay-400">
              Get Kratom
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
