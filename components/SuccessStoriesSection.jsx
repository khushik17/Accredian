import { useState } from "react";
import { FiArrowRight, FiArrowLeft, FiStar } from "react-icons/fi";

const stories = [
  {
    id: 1,
    name: "Aman Gupta",
    role: "Senior Product Manager at TechSphere",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "Accredian's Enterprise program transformed our entire product team. We saw a 40% increase in product delivery speed within just 6 months. The focus on real-world applications is unmatched.",
    logo: "TechSphere",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "VP of Engineering at FinTech Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "We partnered with Accredian to upskill our workforce in AI and Machine Learning. The curriculum was exactly what we needed, resulting in two new AI-driven product features launching this year alone.",
    logo: "FinTech Sol",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    role: "Director of Data Analytics at RetailCorp",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "Finding the right training partner was tough until we found Accredian. Their expert faculty and hands-on case studies empowered our data team to build predictive models that saved us millions.",
    logo: "RetailCorp",
  }
];

export default function SuccessStoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section id="success-stories" className="success-stories-section py-24 relative overflow-hidden">
      
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="success-stories-title text-4xl md:text-5xl font-extrabold text-blue-600 mb-6 drop-shadow-sm">
            Success Stories
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-700">
            Don&apos;t just take our word for it. See how Accredian has empowered organizations to fast-track their growth and innovation.
          </p>
        </div>

        <div className="success-stories-card relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-blue-100 dark:border-slate-700 p-8 md:p-14 transition-all hover:shadow-2xl hover:border-blue-200">
          
          <div className="success-stories-quote-mark absolute top-0 right-0 -mt-8 -mr-8 text-blue-100 dark:text-slate-700 opacity-50 pointer-events-none">
             <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
               <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
             </svg>
          </div>

          <div className="grid md:grid-cols-5 gap-10 items-center">
            
            <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="relative w-40 h-40 md:w-56 md:h-56 mb-6">
                <div className="absolute inset-0 bg-blue-600 rounded-full translate-x-3 translate-y-3 opacity-20 dark:opacity-40"></div>
                <img 
                  src={stories[currentIndex].image} 
                  alt={stories[currentIndex].name}
                  className="w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-700 shadow-md relative z-10"
                />
              </div>
              <div className="flex text-yellow-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} fill="currentColor" />
                ))}
              </div>
              <h3 className="success-stories-name text-2xl font-bold text-slate-900 dark:text-white mb-1">
                {stories[currentIndex].name}
              </h3>
              <p className="success-stories-role text-blue-600 dark:text-blue-400 font-semibold mb-2">
                {stories[currentIndex].role}
              </p>
              <div className="success-stories-logo inline-block px-4 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-bold text-slate-600 dark:text-slate-300 mt-2">
                {stories[currentIndex].logo}
              </div>
            </div>

            <div className="md:col-span-3 relative z-10">
              <p className="success-stories-body text-xl md:text-3xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed italic mb-8">
                &quot;{stories[currentIndex].quote}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-8">
                <button 
                  onClick={prevStory}
                  className="p-3 md:p-4 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors shadow-sm text-slate-600 dark:text-slate-300"
                  aria-label="Previous story"
                >
                  <FiArrowLeft size={24} />
                </button>
                <div className="flex gap-2 mx-4">
                  {stories.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-blue-600 w-8' : 'bg-slate-300 dark:bg-slate-600 hover:bg-blue-400'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextStory}
                  className="p-3 md:p-4 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors shadow-sm text-slate-600 dark:text-slate-300"
                  aria-label="Next story"
                >
                  <FiArrowRight size={24} />
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}