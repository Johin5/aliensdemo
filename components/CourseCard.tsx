
import React from 'react';
import { ChevronRight, Download, Target } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onReadMore: (courseId: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onReadMore }) => {
  return (
    <div className="flex flex-col h-full bg-[#111] text-white p-6 md:p-8 transition-all duration-300 hover:bg-[#1a1a1a] relative group border border-gray-800 hover:border-white/20">
      {course.badge && (
        <div className="absolute top-0 right-0 bg-white text-black text-[9px] md:text-[10px] font-bold uppercase tracking-widest py-1.5 px-3 z-10">
          {course.badge}
        </div>
      )}
      
      {/* Target Audience / "For Who?" Tag */}
      {course.targetAudience && (
        <div className="mb-6 inline-flex items-center gap-2 border border-gray-700 px-3 py-1 self-start">
            <Target className="w-3 h-3 text-gray-400" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-300">For: {course.targetAudience}</span>
        </div>
      )}
      
      <h3 className="mb-2 text-xl md:text-2xl font-black text-white leading-tight tracking-tight uppercase">
        {course.title}
      </h3>
      
      <div className="w-12 h-0.5 bg-gray-700 mb-4 group-hover:bg-white transition-colors"></div>

      <div className="flex gap-4 mb-6 border-b border-gray-800 pb-4">
         <div>
            <span className="block text-[9px] text-gray-500 uppercase tracking-widest mb-1">Duration</span>
            <span className="text-sm font-bold">{course.duration}</span>
         </div>
         <div>
            <span className="block text-[9px] text-gray-500 uppercase tracking-widest mb-1">Level</span>
            <span className="text-sm font-bold">{course.level}</span>
         </div>
      </div>
      
      <p className="mb-8 text-sm text-gray-400 leading-relaxed font-normal flex-grow">
        {course.description}
      </p>
      
      <div className="mt-auto">
        <button 
          onClick={() => onReadMore(course.id)}
          className="w-full bg-white text-black py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 rounded-none group-hover:bg-gray-200"
        >
          View Curriculum
          <Download className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
