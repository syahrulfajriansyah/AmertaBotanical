'use client';

import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="relative video-section bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-12">
      <div className="relative container mx-auto px-4">
        <h2 className="relative text-3xl font-bold mb-8 text-center animate-fadeIn">Watch Kratom Story</h2>
        <div className="relative flex flex-col md:flex-row gap-8">
          {/* First Video */}
          <div className="relative aspect-w-16 aspect-h-9 mb-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl w-full md:w-1/2">
            <a href="https://www.youtube.com/embed/NcrvTEvszy4" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.youtube.com/vi/NcrvTEvszy4/maxresdefault.jpg"
                alt="YouTube video 1"
                className="relative w-full h-full rounded-lg border-4 border-gray-700 shadow-lg object-cover"
              />
            </a>
          </div>

          {/* Second Video */}
          <div className="relative aspect-w-16 aspect-h-9 mb-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl w-full md:w-1/2">
            <a href="https://www.youtube.com/embed/WfzW1DsTNiY" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.youtube.com/vi/WfzW1DsTNiY/maxresdefault.jpg"
                alt="YouTube video 2"
                className="relative w-full h-full rounded-lg border-4 border-gray-700 shadow-lg object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
