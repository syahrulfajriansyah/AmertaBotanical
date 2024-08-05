import React from 'react';

const CompanyOverview: React.FC = () => {
  return (
    <section id="company-overview" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-6 text-green-900">Company Overview</h2>
          <p className="text-xl text-gray-700">
            Discover the story of our journey, meet the brilliant minds behind our success, and explore the vibrant culture that drives us.
          </p>
        </div>

        {/* Company History */}
        <div className="mb-12 bg-white rounded-lg shadow-xl p-8 border border-gray-200">
          <h3 className="text-4xl font-semibold mb-6 text-green-800">Our History</h3>
          <p className="text-gray-800 leading-relaxed">
            Established in 2000, our company began with a vision to innovate and excel. Over the years, we’ve expanded our horizons, transforming challenges into opportunities and setting new industry standards. Our journey is a testament to our relentless pursuit of excellence.
          </p>
        </div>

        {/* Team */}
        <div className="mb-12">
          <h3 className="text-4xl font-semibold mb-6 text-green-800">Meet Our Team</h3>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Our team consists of extraordinary individuals who are dedicated to pushing the boundaries of what’s possible. Each member brings a wealth of experience and a unique perspective, collectively driving our mission forward with passion and precision.
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            {/* Example Team Members */}
            <div className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105">
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="John Doe" className="w-full h-48 object-cover rounded-t-lg mb-4 border border-gray-200" />
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-900">John Doe</h4>
                <p className="text-gray-700">CEO</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105">
              <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Jane Smith" className="w-full h-48 object-cover rounded-t-lg mb-4 border border-gray-200" />
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-900">Jane Smith</h4>
                <p className="text-gray-700">CTO</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105">
              <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Alice Johnson" className="w-full h-48 object-cover rounded-t-lg mb-4 border border-gray-200" />
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-900">Alice Johnson</h4>
                <p className="text-gray-700">CFO</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105">
              <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="Bob Brown" className="w-full h-48 object-cover rounded-t-lg mb-4 border border-gray-200" />
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-900">Bob Brown</h4>
                <p className="text-gray-700">CMO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Culture */}
        <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
          <h3 className="text-4xl font-semibold mb-6 text-green-800">Our Culture</h3>
          <p className="text-gray-800 leading-relaxed">
            At the heart of our company is a culture that champions creativity, teamwork, and inclusivity. We believe in nurturing an environment where ideas flourish, innovation thrives, and every team member’s voice is heard and valued. Our culture is the driving force behind our success and our commitment to excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
