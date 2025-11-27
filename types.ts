
export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  image?: string;
  price?: string;
  badge?: string; // For "Most Popular", "Best Value", etc.
  targetAudience?: string; // e.g. "For Career Switchers"
}

export interface Program {
  id: string;
  title: string;
  description?: string;
  image: string;
  link: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Artwork {
  id: string;
  image: string;
  artist: string;
  style: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  courseInterest: string;
  message?: string;
}
