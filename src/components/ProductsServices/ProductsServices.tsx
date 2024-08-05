import React from 'react';
import Image from 'next/image';

interface ProductService {
  title: string;
  description: string;
  image: string;
}

const productsServices: ProductService[] = [
  {
    title: 'Super Green',
    description: 'A premium green kratom strain known for its balanced effects, providing both energy and relaxation.',
    image: '/images/supergreen.JPEG',
  },
  {
    title: 'Green Maengda',
    description: 'A potent green kratom strain offering enhanced mood and energy levels with long-lasting effects.',
    image: '/images/greenmaengda.JPEG',
  },
  {
    title: 'White Amerta',
    description: 'A powerful white kratom strain that delivers a stimulating effect, ideal for boosting productivity and focus.',
    image: '/images/white.JPEG',
  },
  {
    title: 'Red Amerta',
    description: 'A soothing red kratom strain perfect for relaxation and stress relief, providing a calming experience.',
    image: '/images/redamerta.JPEG',
  },
  {
    title: 'Wholesale & Retail Export Services',
    description: 'We offer comprehensive export services for our kratom products, available in wholesale and retail quantities.',
    image: '/images/Whole-Sale-Services.jpg',
  },
];

const ProductsServices: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-green-900 via-green-800 to-black overflow-hidden py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-200">Our Products and Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productsServices.map((item, index) => (
            <div
              key={index}
              className="relative bg-gray-800 border border-green-600 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="relative w-full h-40 sm:h-48 md:h-60 lg:h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-800 via-transparent to-transparent opacity-40 pointer-events-none"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-300">{item.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsServices;
