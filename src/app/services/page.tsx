import React from 'react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-green-900 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Services Overview */}
        <section className="services-overview mb-12">
          <h1 className="text-4xl font-bold mb-6 text-green-400 border-b-4 border-green-400 pb-2">Our Services</h1>
          <p className="text-lg mb-8 leading-relaxed">
            At AMERTA BOTANICAL, we offer a range of premium kratom products and services designed to meet the highest standards of quality and sustainability. Our offerings include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Item */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-2 text-green-300">Premium Kratom Powder</h2>
              <p className="text-lg mb-4">
                Our kratom powder is meticulously processed to ensure purity and potency. We offer various strains to cater to different needs and preferences.
              </p>
            </div>
            {/* Repeat for other services */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-2 text-green-300">Wholesale &amp; Retail Solutions</h2>
              <p className="text-lg mb-4">
                We provide flexible wholesale and retail solutions to accommodate businesses of all sizes. Our goal is to support our partners with high-quality products and reliable service.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-2 text-green-300">Sustainability Programs</h2>
              <p className="text-lg mb-4">
                We are committed to eco-friendly practices and support sustainable kratom farming initiatives to protect the environment and support local communities.
              </p>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="testimonials">
          <h2 className="text-3xl font-semibold mb-6 text-green-400 border-b-4 border-green-400 pb-2">Customer Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Item */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600 hover:shadow-xl transition-shadow duration-300">
              <blockquote className="text-lg mb-4">
                <p className="italic">
                  &quot;AMERTA BOTANICAL&apos;s kratom powder has transformed our product line. The quality is unmatched and their service is exceptional.&quot;
                </p>
              </blockquote>
              <cite className="text-green-300">— Alex R., Product Manager</cite>
            </div>
            {/* Repeat for other testimonials */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600 hover:shadow-xl transition-shadow duration-300">
              <blockquote className="text-lg mb-4">
                <p className="italic">
                  &quot;The wholesale solutions provided by AMERTA BOTANICAL have been a game-changer for our business. Highly recommend!&quot;
                </p>
              </blockquote>
              <cite className="text-green-300">— Jamie L., Retail Owner</cite>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600 hover:shadow-xl transition-shadow duration-300">
              <blockquote className="text-lg mb-4">
                <p className="italic">
                  &quot;Their commitment to sustainability is impressive. It&apos;s great to work with a company that values both quality and the environment.&quot;
                </p>
              </blockquote>
              <cite className="text-green-300">— Taylor M., Environmental Consultant</cite>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
