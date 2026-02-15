import React from 'react';

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const TestimonialCard = ({ quote, author, role, company }: TestimonialProps) => {
  return (
    <div className="group relative flex flex-col justify-between h-[350px] w-[450px] p-8 bg-[#0d0504] border border-[#EEE5CA]/10 hover:border-[#712C1D] transition-colors duration-500 shrink-0 mx-4">
      
      {/* 10% Teal Accent - Top Line */}
      <div className="w-12 h-[2px] bg-[#1D6171] mb-6" />

      {/* The Quote */}
      <p className="text-xl md:text-2xl font-serif italic text-[#EEE5CA]/90 leading-relaxed">
        "{quote}"
      </p>

      {/* The Author */}
      <div className="border-t border-[#712C1D]/30 pt-4 flex justify-between items-end">
         <div>
            <h4 className="text-[#EEE5CA] font-black uppercase tracking-widest text-xs mb-1">
               {author}
            </h4>
            <span className="text-[#1D6171] font-mono text-[10px] uppercase">
               {role}, {company}
            </span>
         </div>
         {/* Decorative Icon */}
         <div className="w-8 h-8 rounded-full border border-[#EEE5CA]/20 flex items-center justify-center text-[#EEE5CA]/20 group-hover:text-[#1D6171] group-hover:border-[#1D6171] transition-all">
            <span className="text-xl leading-none mb-1">”</span>
         </div>
      </div>
    </div>
  );
};

export default TestimonialCard;