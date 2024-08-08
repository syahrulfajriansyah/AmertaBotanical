'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend: Record<string, unknown> = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send('service_24hmi89', 'template_8158p55', formDataToSend, 'pZjx_Azgo5U0tNZBI');
      setFeedback('Thank you for reaching out! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setFeedback('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-us" className="relative py-12 bg-gradient-to-r from-green-900 via-green-800 to-black text-white">
      <div className="relative container mx-auto px-4">
        <h2 className="relative text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h2>
        <p className="relative text-center mb-6 text-green-200">
          If you have any questions or would like to reach out to us, please fill out the form below:
        </p>
        <form className="relative max-w-2xl mx-auto" onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <label htmlFor="name" className="relative block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="relative w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300"
              placeholder="Your name"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="relative block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="relative w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300"
              placeholder="Your email"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="relative block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="relative w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <div className="relative text-center">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="relative px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        {feedback && <p className="relative text-center mt-4">{feedback}</p>}
      </div>
    </section>
  );
};

export default ContactUs;
