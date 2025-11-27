
import React, { useState } from 'react';
import { Menu, Phone, Instagram, Facebook, Youtube, ChevronDown, ChevronRight, Star, Award, Users, Globe, ArrowRight, CheckCircle, GraduationCap, Briefcase, DollarSign, Plus, ZoomIn, ArrowDown, Wallet, CreditCard, Zap, Trophy, Rocket, Layers, PenTool } from 'lucide-react';
import { Course, Testimonial, Stat, Mentor, FAQItem, Artwork } from './types';
import CourseCard from './components/CourseCard';
import LeadForm from './components/LeadForm';
import ChatWidget from './components/ChatWidget';
import TestimonialCard from './components/TestimonialCard';

// --- DATA: High Intent / ROI Focused ---

const STATS: Stat[] = [
  { id: 's1', label: 'Studios Opened by Alumni', value: '450+' },
  { id: 's2', label: 'Global Awards Won', value: '150+' },
];

const COURSES: Course[] = [
  {
    id: '1',
    title: 'Escape The 9-to-5: Diploma in Tattoo Art',
    description: 'Sick of your desk job? This is your exit strategy. A complete 6-month transformation from "Doodler" to "Professional Studio Artist". We teach you the art, the tools, and the business.',
    duration: '6 Months',
    level: 'Beginner to Pro',
    badge: 'Flagship Program',
    targetAudience: 'Career Switchers'
  },
  {
    id: '2',
    title: 'Start Earning Fast: Complete Course',
    description: 'Need to start making money asap? This intensive 3-month bootcamp cuts the fluff. Learn the essential skills to start inking clients and generating income immediately.',
    duration: '3 Months',
    level: 'All Levels',
    badge: 'Fast Track',
    targetAudience: 'Hustlers'
  },
  {
    id: '3',
    title: 'Break Your Plateau: Realism Masterclass',
    description: 'Stuck doing basic line work? Stop leaving money on the table. Learn high-ticket Hyper-Realism techniques from the masters and double your hourly rate.',
    duration: '45 Days',
    level: 'Existing Artists',
    targetAudience: 'Pros Leveling Up'
  }
];

const ALUMNI_ART: Artwork[] = [
  {
    id: 'w1',
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800',
    artist: 'Rahul K.',
    style: 'Owner, InkBlade Studio'
  },
  {
    id: 'w2',
    image: 'https://images.unsplash.com/photo-1612459797692-bc4a806e3229?auto=format&fit=crop&q=80&w=800',
    artist: 'Sarah Jenkins',
    style: 'Now in London, UK'
  },
  {
    id: 'w3',
    image: 'https://images.unsplash.com/photo-1560707303-4e98035872dc?auto=format&fit=crop&q=80&w=800',
    artist: 'Mike Chen',
    style: 'Freelance Pro'
  },
  {
    id: 'w4',
    image: 'https://images.unsplash.com/photo-1542318285-d9df0d845e28?auto=format&fit=crop&q=80&w=800',
    artist: 'Ananya Gupta',
    style: 'Owner, ArtHouse Delhi'
  },
  {
    id: 'w5',
    image: 'https://images.unsplash.com/photo-1574163397945-8c08c4e094c9?auto=format&fit=crop&q=80&w=800',
    artist: 'Davide Rossi',
    style: 'Traveling Artist'
  },
  {
    id: 'w6',
    image: 'https://images.unsplash.com/photo-1590246294320-f470503f8480?auto=format&fit=crop&q=80&w=800',
    artist: 'Elena V.',
    style: 'Resident Artist, Aliens'
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rohan Sharma',
    role: 'Owner, InkCult Studio (Bangalore)',
    quote: "I was working a corporate job I hated. Aliens gave me the skills to quit. 8 months after graduating, I opened my own studio. I make 3x my old salary now.",
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't2',
    name: 'Priya Mehta',
    role: 'Freelance Artist (Mumbai)',
    quote: "The business training is what separates Aliens from local shops. They don't just teach you how to tattoo; they teach you how to sell your art.",
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't3',
    name: 'Arjun Das',
    role: 'Traveling Artist',
    quote: "I traveled from Delhi for this. Best decision ever. The networking alone is worth the fee. I've already guested at 3 major conventions thanks to Aliens.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  }
];

const MENTORS: Mentor[] = [
  {
    id: 'm1',
    name: 'Sunny Bhanushali',
    role: 'Founder & Realism Master',
    image: 'https://images.unsplash.com/photo-1583345237708-1f3243774523?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'm2',
    name: 'Allan Gois',
    role: 'Hyper-Realism Specialist',
    image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'm3',
    name: 'Sameer Patange',
    role: 'Celebrity Tattoo Artist',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400'
  }
];

const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: 'Do I need to be good at drawing to join?',
    answer: 'No. 80% of our successful students started with basic or zero drawing skills. Our curriculum starts with "Drawing for Tattoos" fundamentals.'
  },
  {
    id: 'f2',
    question: 'Is there a job guarantee?',
    answer: 'We provide 100% placement assistance. Top performers are absorbed directly into Aliens Tattoo Studios or partner studios worldwide.'
  },
  {
    id: 'f3',
    question: 'How much can a tattoo artist earn in India?',
    answer: 'Beginners typically start at ₹30k-50k/month. Experienced artists charge ₹5k-15k per hour, easily crossing ₹1.5L/month.'
  },
  {
    id: 'f4',
    question: 'Do you offer EMI or loans?',
    answer: 'Yes, we have 0% interest EMI options available with our banking partners to make the course accessible.'
  }
];

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleFaq = (id: string) => setOpenFaqId(openFaqId === id ? null : id);

  return (
    <div className="min-h-screen bg-white text-black font-sans pb-20 md:pb-0">
      
      {/* --- Navbar (Minimalist) --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3 px-4 md:py-4 md:px-12 flex justify-between items-center transition-all">
        <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-black flex items-center justify-center">
                 <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M12 2L2 22h20L12 2zm0 3.5L18.5 20h-13L12 5.5z"/></svg>
             </div>
             <div className="flex flex-col leading-none">
                <span className="font-black text-xs uppercase tracking-widest">Aliens</span>
                <span className="font-bold text-[10px] uppercase tracking-wider">Tattoo Art School</span>
             </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
           <a href="#alumni" className="text-xs font-bold uppercase tracking-widest hover:text-gray-600 transition-colors">Alumni</a>
           <a href="#courses" className="text-xs font-bold uppercase tracking-widest hover:text-gray-600 transition-colors">Courses</a>
           <a href="#reviews" className="text-xs font-bold uppercase tracking-widest hover:text-gray-600 transition-colors">Reviews</a>
           <button onClick={openModal} className="bg-black text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-lg">
              Check Eligibility
           </button>
        </div>
        <button className="md:hidden" onClick={openModal}>
          <span className="text-[10px] font-bold uppercase tracking-widest border border-black px-3 py-1.5 active:bg-black active:text-white transition-colors">Apply Now</span>
        </button>
      </nav>

      {/* --- 1. Hero Section: Market Leader Focus --- */}
      <section className="relative pt-20 pb-12 lg:pt-40 lg:pb-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            
            {/* Left: Authority Copy */}
            <div className="flex flex-col items-start order-2 lg:order-1">
               <div className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 mb-4 md:mb-6">
                  <Trophy className="w-3 h-3 text-[#D0FD3E]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">The World's #1 Tattoo School</span>
               </div>

               <h1 className="text-4xl md:text-5xl lg:text-[5rem] font-black text-black leading-[0.95] md:leading-[0.9] mb-4 md:mb-6 tracking-tighter uppercase">
                  Where Legends<br/>
                  Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black">Made.</span>
               </h1>

               <p className="text-base md:text-lg text-gray-700 font-medium mb-6 md:mb-8 leading-relaxed max-w-lg">
                  We don't just teach you how to tattoo. We transform you into an industry icon. Join the academy that has trained the biggest names in the game.
               </p>

               <div className="flex flex-col gap-4 w-full sm:max-w-lg">
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                      <button 
                        onClick={openModal}
                        className="flex-1 bg-black text-white px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-xl flex items-center justify-center gap-2 group text-center"
                      >
                        <span>Start Your Legacy</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                      <a 
                        href="#courses"
                        className="flex-1 border border-black text-black px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all flex items-center justify-center text-center gap-2 group"
                      >
                        Explore Courses
                        <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                      </a>
                  </div>
                  <p className="text-[10px] text-left text-gray-500 font-bold uppercase tracking-wider flex items-center gap-1">
                     <span className="text-red-500 animate-pulse">●</span> Admissions Closing Soon for Oct Batch
                  </p>
               </div>
               
               <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-gray-100 flex gap-8 md:gap-12 w-full">
                  <div>
                      <h4 className="text-2xl md:text-3xl font-black text-black">450+</h4>
                      <p className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Studios Launched</p>
                  </div>
                  <div>
                      <h4 className="text-2xl md:text-3xl font-black text-black">150+</h4>
                      <p className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Intl. Awards</p>
                  </div>
               </div>
            </div>

            {/* Right: Visual Proof */}
            <div className="relative h-[280px] md:h-[500px] lg:h-[650px] bg-gray-100 order-1 lg:order-2 group w-full">
               <img 
                  src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=1200" 
                  alt="Student tattooing" 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
               />
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. Alumni Section (Faces who came out of Aliens) --- */}
      <section id="alumni" className="bg-[#F5F5F7] py-16 md:py-24">
         <div className="container mx-auto px-4 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-4 md:gap-6">
               <div>
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2 block">The Alumni Network</span>
                  <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight leading-none">They Walked In As Students.<br/>They Left As <span className="underline decoration-4 decoration-black">Legends.</span></h2>
               </div>
               <div className="text-left md:text-right w-full md:w-auto flex justify-between md:block items-center">
                  <div>
                    <p className="text-sm font-bold text-black uppercase tracking-wide">450+ Studios Opened.</p>
                    <p className="text-sm text-gray-500 font-medium">This could be you.</p>
                  </div>
                  <span className="md:hidden text-[10px] font-bold uppercase bg-black text-white px-2 py-1">Swipe →</span>
               </div>
            </div>

            {/* Mobile: Horizontal Snap Scroll / Desktop: Grid */}
            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory no-scrollbar -mx-4 px-4 pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:mx-0 md:px-0 md:pb-0">
               {ALUMNI_ART.map((work) => (
                  <div key={work.id} className="min-w-[85vw] md:min-w-0 snap-center group relative aspect-square overflow-hidden bg-white border border-gray-200 cursor-pointer shadow-lg" onClick={openModal}>
                     <img 
                        src={work.image} 
                        alt={`Artist ${work.artist}`} 
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 flex flex-col justify-end p-6">
                        <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                           <p className="text-[#D0FD3E] text-[10px] font-bold uppercase tracking-widest mb-1">Aliens Alumni</p>
                           <h4 className="text-white text-2xl font-black uppercase tracking-tight mb-1">{work.artist}</h4>
                           <p className="text-gray-300 text-xs font-bold uppercase tracking-wider">{work.style}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- 3. Courses Section (Offer) --- */}
      <section id="courses" className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-12">
           <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-6">
              <div>
                 <span className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2 block">The Curriculum</span>
                 <h2 className="text-3xl md:text-5xl font-black leading-tight uppercase">Don't Just Learn.<br/><span className="text-white">Transform.</span></h2>
              </div>
              <p className="text-gray-400 text-sm max-w-sm text-left md:text-right hidden md:block">
                 Choose the path that solves your problem. Whether you want to escape a job, start earning fast, or master your craft.
              </p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-6">
              {COURSES.map(course => (
                <CourseCard key={course.id} course={course} onReadMore={openModal} />
              ))}
           </div>

           {/* --- 3-Day Trial CTA --- */}
           <div className="mt-16 flex justify-center">
              <div 
                onClick={openModal}
                className="w-full max-w-2xl border border-[#D0FD3E] p-8 md:p-10 text-center cursor-pointer transition-transform hover:scale-[1.01] hover:bg-[#D0FD3E]/5 group"
              >
                 <p className="text-white text-xl md:text-2xl font-light mb-2 group-hover:text-white/80 transition-colors">Not ready to commit?</p>
                 <h3 className="text-3xl md:text-5xl font-black text-[#D0FD3E] uppercase tracking-tighter">
                    Take a 3-Day Trial
                 </h3>
              </div>
           </div>
        </div>
      </section>

      {/* --- 4. Reviews Section (Validation) --- */}
      <section id="reviews" className="py-16 md:py-24 bg-white">
         <div className="container mx-auto px-4 md:px-12">
            <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight mb-10 md:mb-16 text-center">Real Students. Real Studios.</h2>
             {/* Mobile: Horizontal Snap Scroll / Desktop: Grid */}
            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory no-scrollbar -mx-4 px-4 pb-4 md:grid md:grid-cols-3 md:gap-6 md:mx-0 md:px-0 md:pb-0">
               {TESTIMONIALS.map(t => (
                  <div key={t.id} className="min-w-[85vw] md:min-w-0 snap-center h-full">
                     <TestimonialCard testimonial={t} />
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- 5. Benefits Section (The Aliens Advantage) --- */}
      <section id="benefits" className="py-16 md:py-24 bg-[#F5F5F7] border-t border-gray-200">
         <div className="container mx-auto px-4 md:px-12">
            <div className="mb-12 md:mb-16 text-center">
               <span className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2 block">Why Choose Aliens?</span>
               <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight leading-none">The Aliens Advantage</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
               {/* Tile 1: Mentorship (Kept as is) */}
               <div className="bg-white p-8 border border-gray-200 hover:border-black transition-colors group">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6">
                     <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black uppercase mb-3">Learn From Legends</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                     You aren't taught by teachers. You are mentored by world-renowned artists like Sunny Bhanushali and Allan Gois.
                  </p>
                  <div className="flex -space-x-3">
                     {MENTORS.map(m => (
                        <img key={m.id} src={m.image} alt={m.name} className="w-10 h-10 rounded-full border-2 border-white object-cover grayscale group-hover:grayscale-0 transition-all" />
                     ))}
                     <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold border-2 border-white">+10</div>
                  </div>
               </div>

               {/* Tile 2: USP & Process (What they will learn) */}
               <div className="bg-white p-8 border border-gray-200 hover:border-black transition-colors group">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6">
                     <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black uppercase mb-3">The Aliens Method™</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                     Our proprietary curriculum deconstructs complex art into simple steps. We teach the 'Why' before the 'How', ensuring you master every style—from Geometry to Hyper-Realism.
                  </p>
                  <ul className="mt-4 space-y-2">
                     <li className="flex items-center text-xs font-bold uppercase"><CheckCircle className="w-4 h-4 mr-2" /> 360° Art Foundations</li>
                     <li className="flex items-center text-xs font-bold uppercase"><CheckCircle className="w-4 h-4 mr-2" /> Advanced Digital Design</li>
                  </ul>
               </div>

               {/* Tile 3: Result (What they get) */}
               <div className="bg-white p-8 border border-gray-200 hover:border-black transition-colors group">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6">
                     <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black uppercase mb-3">Career Launchpad</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                     You don't just get a certificate; you get a business blueprint. Graduate with a professional portfolio, brand strategy, and access to our global studio network.
                  </p>
                  <ul className="mt-4 space-y-2">
                     <li className="flex items-center text-xs font-bold uppercase"><CheckCircle className="w-4 h-4 mr-2" /> Studio Management</li>
                     <li className="flex items-center text-xs font-bold uppercase"><CheckCircle className="w-4 h-4 mr-2" /> Global Certification</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* --- 6. New Section: Money Is No Barrier --- */}
      <section className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
         <div className="container mx-auto px-4 md:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
               <div>
                  <div className="inline-flex items-center gap-2 border border-[#D0FD3E] text-[#D0FD3E] px-3 py-1 mb-6 rounded-none">
                      <Wallet className="w-3 h-3" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Financial Aid Available</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
                     Money Is <span className="text-[#D0FD3E]">No Barrier.</span>
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                     We believe world-class art education should be accessible to everyone. Don't let finances hold back your dream career.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                     <button onClick={openModal} className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#D0FD3E] transition-colors">
                        Check Scholarship
                     </button>
                     <button onClick={openModal} className="border border-white text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                        Download Fee Structure
                     </button>
                  </div>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#111] border border-gray-800 p-6 hover:border-[#D0FD3E] transition-colors">
                     <div className="text-[#D0FD3E] mb-2">
                        <CreditCard className="w-8 h-8" />
                     </div>
                     <h4 className="text-2xl font-black mb-1">0% EMI</h4>
                     <p className="text-gray-500 text-xs font-bold uppercase">Pay in easy installments</p>
                  </div>
                  <div className="bg-[#111] border border-gray-800 p-6 hover:border-[#D0FD3E] transition-colors">
                     <div className="text-[#D0FD3E] mb-2">
                        <Zap className="w-8 h-8" />
                     </div>
                     <h4 className="text-2xl font-black mb-1">Instant</h4>
                     <p className="text-gray-500 text-xs font-bold uppercase">Loan Approval</p>
                  </div>
                  <div className="bg-[#111] border border-gray-800 p-6 hover:border-[#D0FD3E] transition-colors sm:col-span-2">
                     <div className="text-[#D0FD3E] mb-2">
                        <Award className="w-8 h-8" />
                     </div>
                     <h4 className="text-2xl font-black mb-1">Merit Scholarship</h4>
                     <p className="text-gray-500 text-xs font-bold uppercase">Up to 30% off for qualifying portfolios</p>
                  </div>
               </div>
            </div>

            {/* FAQ Sub-section */}
            <div className="max-w-3xl mx-auto pt-16 mt-16 border-t border-gray-800">
               <h3 className="text-xl font-black text-center mb-8 uppercase text-white">Common Questions</h3>
               <div className="space-y-4">
                  {FAQS.map(faq => (
                     <div key={faq.id} className="bg-[#111] border border-gray-800">
                        <button 
                           onClick={() => toggleFaq(faq.id)}
                           className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-900 transition-colors"
                        >
                           <span className="font-bold text-xs uppercase tracking-wide pr-4 text-white">{faq.question}</span>
                           <div className={`transition-transform duration-300 flex-shrink-0 text-white ${openFaqId === faq.id ? 'rotate-45' : ''}`}>
                              <Plus className="w-4 h-4" />
                           </div>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openFaqId === faq.id ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                           <div className="p-4 pt-0 text-sm text-gray-400 leading-relaxed font-medium">
                              {faq.answer}
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* --- Embedded Application Form Section --- */}
      <section id="apply" className="py-16 md:py-24 bg-white text-black relative overflow-hidden border-t border-gray-200">
         <div className="container mx-auto px-4 md:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
               <div>
                  <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none text-center lg:text-left">
                     Ready to Ink<br/>Your Future?
                  </h2>
                  <p className="text-gray-600 text-base md:text-lg font-medium mb-10 max-w-md leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
                     Don't let your talent go to waste. Seats for the upcoming batch are filling fast. Secure your spot today.
                  </p>
                  
                  <div className="space-y-6 max-w-sm mx-auto lg:mx-0">
                     <div className="flex items-start gap-4">
                        <div className="bg-black p-3 rounded-none flex-shrink-0">
                           <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                           <h4 className="font-bold uppercase tracking-wider mb-1">Career Consultation</h4>
                           <p className="text-gray-500 text-sm">Get a free portfolio review and career roadmap from our experts.</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-black p-3 rounded-none flex-shrink-0">
                           <DollarSign className="w-6 h-6 text-white" />
                        </div>
                        <div>
                           <h4 className="font-bold uppercase tracking-wider mb-1">Scholarship Eligible</h4>
                           <p className="text-gray-500 text-sm">Apply now to check if you qualify for our merit-based financial aid.</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bg-[#F5F5F7] p-1 md:p-2 mt-8 lg:mt-0 shadow-2xl border border-gray-200">
                  <LeadForm />
               </div>
            </div>
         </div>
      </section>

      {/* --- Footer (Clean) --- */}
      <footer className="bg-black py-10 md:py-12 text-white border-t border-gray-900 mb-16 md:mb-0">
         <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
               <span className="font-black text-lg uppercase tracking-widest">Aliens Tattoo School</span>
               <span className="text-xs text-gray-500 uppercase tracking-wider mt-2">© 2024 All Rights Reserved</span>
            </div>
            <div className="flex gap-6">
               <Instagram className="w-5 h-5 hover:text-gray-400 cursor-pointer" />
               <Facebook className="w-5 h-5 hover:text-gray-400 cursor-pointer" />
               <Youtube className="w-5 h-5 hover:text-gray-400 cursor-pointer" />
            </div>
         </div>
      </footer>

      {/* --- Lead Form Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative z-10 w-full max-w-lg animate-fade-in-up">
            <LeadForm onClose={closeModal} isModal={true} />
          </div>
        </div>
      )}
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-4 shadow-[0_-5px_10px_rgba(0,0,0,0.1)]">
         <button onClick={openModal} className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-widest active:scale-95 transition-transform">
            Check Eligibility
         </button>
      </div>

      {/* --- Chat Widget --- */}
      <ChatWidget />
    </div>
  );
};

export default App;
