import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-[#F5F5F7] p-8 flex flex-col h-full relative group hover:bg-black hover:text-white transition-colors duration-500">
      <Quote className="w-10 h-10 text-gray-300 mb-6 group-hover:text-gray-600 transition-colors" />
      
      <p className="text-sm font-medium leading-relaxed mb-8 flex-grow">
        "{testimonial.quote}"
      </p>
      
      <div className="flex items-center gap-4 mt-auto">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-10 h-10 object-cover grayscale"
        />
        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-widest">{testimonial.name}</span>
          <span className="text-[10px] text-gray-500 group-hover:text-gray-400 uppercase tracking-wider">{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;