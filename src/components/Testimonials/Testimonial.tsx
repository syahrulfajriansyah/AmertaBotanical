// src/components/Testimonials/Testimonials.tsx
import React from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  position: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Alice Johnson',
    position: 'CEO of TechCorp',
    text: 'This company has been a game-changer for us. Their products are top-notch and their customer service is outstanding.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Bob Smith',
    position: 'Marketing Director at AdWorks',
    text: 'We have seen tremendous results since partnering with this company. Highly recommend their services to anyone looking for quality.',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    name: 'Carol Davis',
    position: 'Founder of DesignStudio',
    text: 'Their team is incredibly professional and the results speak for themselves. We are thrilled with the outcome of our collaboration.',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg p-6 flex items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        width={64}
        height={64}
        className="rounded-full object-cover mr-4"
      />
      <div className="relative">
        <p className="relative text-lg font-semibold text-gray-900">{testimonial.name}</p>
        <p className="relative text-gray-600 mb-2">{testimonial.position}</p>
        <p className="relative text-gray-700">{testimonial.text}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <div className="relative container mx-auto px-4 py-12">
      <h2 className="relative text-3xl font-bold text-center mb-8 text-gray-900">What Our Clients Say</h2>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
