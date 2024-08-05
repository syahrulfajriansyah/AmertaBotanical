import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section id="contact-us" className="py-12 bg-gradient-to-r from-green-900 via-green-800 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h2>
        <p className="text-center mb-6 text-green-200">
          If you have any questions or would like to reach out to us, please fill out the form below:
        </p>
        <form className="max-w-2xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows={5}
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
