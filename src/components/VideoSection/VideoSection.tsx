import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="video-section bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center animate-fadeIn">Watch Kratom Story</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* First Video */}
          <div className="relative aspect-w-16 aspect-h-9 mb-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl w-full md:w-1/2">
            <iframe
              className="w-full h-full rounded-lg border-4 border-gray-700 shadow-lg"
              src="https://www.youtube.com/embed/NcrvTEvszy4"
              title="YouTube video 1"
              frameBorder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Second Video */}
          <div className="relative aspect-w-16 aspect-h-9 mb-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl w-full md:w-1/2">
            <iframe
              className="w-full h-full rounded-lg border-4 border-gray-700 shadow-lg"
              src="https://www.youtube.com/embed/WfzW1DsTNiY"
              title="YouTube video 2"
              frameBorder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
