import React from 'react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-green-900 text-gray-100 relative">
      <div className="container mx-auto px-4 py-12">
        
        {/* Our Products */}
        <section className="products-overview mb-12">
          <h1 className="text-4xl font-bold mb-6 text-green-400 border-b-4 border-green-400 pb-2">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product Item */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600 hover:shadow-xl transition-shadow duration-300 relative transform hover:scale-105">
              <img loading="lazy" src="/images/supergreen.JPEG" alt="Super Green" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-green-300">Super Green</h2>
              <p className="text-lg mb-4">
                Super Green is known for its balanced effects and is a favorite among those who seek both energy and relaxation.
              </p>
            </div>
            {/* Other Products */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600 hover:shadow-xl transition-shadow duration-300 relative transform hover:scale-105">
              <img loading="lazy" src="/images/greenmaengda.JPEG" alt="Green Maengda" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-green-300">Green Maengda</h2>
              <p className="text-lg mb-4">
                Green Maengda is prized for its strong and long-lasting energizing effects, perfect for boosting productivity.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600 hover:shadow-xl transition-shadow duration-300 relative transform hover:scale-105">
              <img loading="lazy" src="/images/white.JPEG" alt="White Amerta" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-green-300">White Amerta</h2>
              <p className="text-lg mb-4">
                White Amerta offers a smooth, clean energy boost and enhances focus, making it ideal for busy days.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600 hover:shadow-xl transition-shadow duration-300 relative transform hover:scale-105">
              <img loading="lazy" src="/images/redamerta.JPEG" alt="Red Amerta" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-green-300">Red Amerta</h2>
              <p className="text-lg mb-4">
                Red Amerta is perfect for those looking to unwind, offering a calming experience with potent relaxing properties.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="services-overview mb-12">
          <h1 className="text-4xl font-bold mb-6 text-green-400 border-b-4 border-green-400 pb-2">Our Services</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Item */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600 hover:shadow-xl transition-shadow duration-300 relative transform hover:scale-105">
              <img loading="lazy" src="/images/PREMIUM KRATOM POWDER.jpg" alt="Premium Kratom Powder" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-green-300">Premium Kratom Powder</h2>
              <p className="text-lg mb-4">
                Our kratom powder is meticulously processed to ensure purity and potency. We offer various strains to cater to different needs and preferences.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600 hover:shadow-xl transition-shadow duration-300 relative transform hover:scale-105">
              <img loading="lazy" src="/images/Whole-Sale-Services.jpg" alt="Wholesale & Retail Solutions" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-green-300">Wholesale &amp; Retail Solutions</h2>
              <p className="text-lg mb-4">
                We provide flexible wholesale and retail solutions to accommodate businesses of all sizes. Our goal is to support our partners with high-quality products and reliable service.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600 hover:shadow-xl transition-shadow duration-300 relative transform hover:scale-105">
              <img loading="lazy" src="/images/sustainability.jpg" alt="Sustainability Programs" className="w-full h-40 object-cover rounded-lg mb-4" />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Item */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600 hover:shadow-xl transition-shadow duration-300 relative transform hover:scale-105">
              <blockquote className="text-lg mb-4">
                <p className="italic">
                  &quot;AMERTA BOTANICAL&apos;s kratom powder has transformed our product line. The quality is unmatched and their service is exceptional.&quot;
                </p>
              </blockquote>
              <cite className="text-green-300">— Alex R., Product Manager</cite>
            </div>
            {/* Repeat for other testimonials */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600 hover:shadow-xl transition-shadow duration-300 relative transform hover:scale-105">
              <blockquote className="text-lg mb-4">
                <p className="italic">
                  &quot;The wholesale solutions provided by AMERTA BOTANICAL have been a game-changer for our business. Highly recommend!&quot;
                </p>
              </blockquote>
              <cite className="text-green-300">— Jamie L., Retail Owner</cite>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600 hover:shadow-xl transition-shadow duration-300 relative transform hover:scale-105">
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
