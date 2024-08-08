import React from 'react';
import Image from 'next/image';

const CompanyOverview: React.FC = () => {
  return (
    <section id="company-overview" className="py-12 bg-gray-100">
      <div className="relative container mx-auto px-4">
        <div className="relative text-center mb-12">
          <h2 className="relative text-5xl font-extrabold mb-6 text-green-900">Company Overview</h2>
          <p className="relative text-xl text-gray-700">
            Discover the story of our journey, meet the brilliant minds behind our success, and explore the vibrant culture that drives us.
          </p>
        </div>

        {/* Company History */}
        <div className="relative mb-12 bg-white rounded-lg shadow-xl p-8 border border-gray-200">
          <h3 className="relative text-4xl font-semibold mb-6 text-green-800">Our History</h3>
          <p className="relative text-gray-800 leading-relaxed">
            Established in 2000, our company began with a vision to innovate and excel. Over the years, we’ve expanded our horizons, transforming challenges into opportunities and setting new industry standards. Our journey is a testament to our relentless pursuit of excellence.
          </p>
        </div>

        {/* Team */}
        <div className="relative mb-12">
          <h3 className="relative text-4xl font-semibold mb-6 text-green-800">Meet Our Team</h3>
          <p className="relative text-gray-800 mb-6 leading-relaxed">
            Our team consists of extraordinary individuals who are dedicated to pushing the boundaries of what’s possible. Each member brings a wealth of experience and a unique perspective, collectively driving our mission forward with passion and precision.
          </p>
          <div className="relative flex flex-wrap justify-center gap-10">
            {[
              { id: 1, name: 'John Doe', role: 'CEO', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
              { id: 2, name: 'Jane Smith', role: 'CTO', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
              { id: 3, name: 'Alice Johnson', role: 'CFO', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
              { id: 4, name: 'Bob Brown', role: 'CMO', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
            ].map((member) => (
              <div key={member.id} className="relative w-full md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105">
                <div className="relative w-full h-48 mb-4 border border-gray-200 rounded-t-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    className="relative object-cover rounded-t-lg"
                    priority
                  />
                </div>
                <div className="relative text-center">
                  <h4 className="relative text-xl font-semibold text-gray-900">{member.name}</h4>
                  <p className="relative text-gray-700">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Culture */}
        <div className="relative bg-white rounded-lg shadow-xl p-8 border border-gray-200">
          <h3 className="relative text-4xl font-semibold mb-6 text-green-800">Our Culture</h3>
          <p className="relative text-gray-800 leading-relaxed">
            At the heart of our company is a culture that champions creativity, teamwork, and inclusivity. We believe in nurturing an environment where ideas flourish, innovation thrives, and every team member’s voice is heard and valued. Our culture is the driving force behind our success and our commitment to excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
