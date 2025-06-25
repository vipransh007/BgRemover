import React from 'react';
import { testimonialsData } from '../assets/assets';

function Testimonials() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gray-50">
      {/* Title */}
      <h1 className="mb-12 text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-300 
      bg-clip-text text-transparent hover:scale-105 transition-all duration-500">
        Customer Testimonials
      </h1>

      {/* Flexbox Testimonials */}
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="bg-white w-full max-w-sm p-6 rounded-xl shadow-md text-center hover:scale-105 transition-all duration-500"
          >
            <p className="text-5xl text-gray-300 leading-none mb-4 hover:scale-105 transition-all duration-500">“</p>
            <p className="text-gray-700 italic mb-6 hover:scale-105 transition-all duration-500">{item.text}</p>
            <div className="flex items-center justify-center gap-4 hover:scale-105 transition-all duration-500">
              <img
                src={item.image}
                alt={item.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{item.author}</h3>
                <p className="text-sm text-gray-500">{item.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
