import React, { useState } from 'react';
import { FormStatus, LeadFormData } from '../types';
import { CheckCircle, AlertCircle, ArrowRight, X, Lock } from 'lucide-react';

interface LeadFormProps {
  onClose?: () => void;
  isModal?: boolean;
  className?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ onClose, isModal = false, className = '' }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    courseInterest: 'Diploma Course in Tattoo Art',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);

    // Simulate API call
    setTimeout(() => {
      setStatus(FormStatus.SUCCESS);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        courseInterest: 'Diploma Course in Tattoo Art',
        message: ''
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={`bg-white p-5 md:p-10 relative ${isModal ? 'max-w-xl w-full mx-auto shadow-2xl border border-black' : ''} ${className}`}>
      {onClose && (
        <button onClick={onClose} className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 hover:text-black transition-colors p-2">
          <X className="h-6 w-6" />
        </button>
      )}
      
      <div className="mb-6 md:mb-8">
        <span className="bg-red-600 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-2 py-1 mb-2 md:mb-3 inline-block">
            Scholarship Available
        </span>
        <h3 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tighter leading-none">Check Eligibility</h3>
        <p className="text-gray-500 mt-2 md:mt-3 font-medium text-xs md:text-sm leading-relaxed">
           Get your profile evaluated by our senior counselors. Download the fee structure and syllabus immediately.
        </p>
      </div>

      {status === FormStatus.SUCCESS ? (
        <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
          <div className="bg-black p-4 mb-6 rounded-full">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h4 className="text-xl font-bold text-black mb-2 uppercase">Application Received</h4>
          <p className="text-gray-500 font-light text-sm mb-6">Our admissions team will contact you within 24 hours.</p>
          <button 
            onClick={() => {
              setStatus(FormStatus.IDLE);
              if(onClose) onClose();
            }}
            className="text-black border-b border-black pb-1 hover:opacity-70 font-bold uppercase text-xs tracking-widest"
          >
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              /* text-base on mobile prevents iOS zoom, text-sm on desktop keeps it compact */
              className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-base md:text-sm text-black placeholder-gray-300 font-medium focus:border-black focus:outline-none focus:ring-0 transition-all rounded-none appearance-none rounded-none"
              placeholder="Enter your name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <div>
              <label htmlFor="email" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-base md:text-sm text-black placeholder-gray-300 font-medium focus:border-black focus:outline-none focus:ring-0 transition-all rounded-none appearance-none rounded-none"
                placeholder="email@address.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Phone (WhatsApp)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-base md:text-sm text-black placeholder-gray-300 font-medium focus:border-black focus:outline-none focus:ring-0 transition-all rounded-none appearance-none rounded-none"
                placeholder="+91 99999 99999"
              />
            </div>
          </div>

          <div>
            <label htmlFor="courseInterest" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">I want to become a...</label>
            <div className="relative">
              <select
                id="courseInterest"
                name="courseInterest"
                value={formData.courseInterest}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-base md:text-sm text-black font-bold focus:border-black focus:outline-none focus:ring-0 appearance-none transition-all rounded-none"
              >
                <option>Professional Tattoo Artist (6 Months)</option>
                <option>Fast-Track Artist (3 Months)</option>
                <option>Realism Specialist (Advanced)</option>
                <option>3-Day Trial Class</option>
                <option>Just Exploring / Hobbyist</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === FormStatus.SUBMITTING}
            className="mt-6 md:mt-8 w-full bg-black px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-gray-800 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center group shadow-xl hover:shadow-2xl hover:-translate-y-0.5 rounded-none"
          >
            {status === FormStatus.SUBMITTING ? (
              <div className="flex items-center">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-3"></div>
                Processing...
              </div>
            ) : (
              <span className="flex items-center">
                Check My Eligibility Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            )}
          </button>
          
          {status === FormStatus.ERROR && (
             <div className="flex items-center text-red-600 text-xs font-bold mt-2 uppercase">
                <AlertCircle className="h-4 w-4 mr-2" />
                Error. Please try again or call us.
             </div>
          )}
          
          <div className="flex items-center justify-center gap-2 mt-4 md:mt-6 text-[10px] text-gray-400 uppercase tracking-wider">
            <Lock className="w-3 h-3" />
            <span>Your data is secure & private</span>
          </div>
        </form>
      )}
    </div>
  );
};

export default LeadForm;