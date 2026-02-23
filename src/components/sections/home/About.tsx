import React from 'react';

const About = () => {
  return (
    <div className="relative w-full min-h-screen bg-hero px-8 py-32 flex items-center">
      
      {/* Background: Subtle geometric depth without being "patterny" */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col relative z-10">
          {/* Minimal Accent */}
          <div className="w-12 h-1 bg-secondary mb-12" />
          
          <h5 className="text-primary font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4">
            01 // About Chilada
          </h5>
          
          <h2 className="text-5xl md:text-7xl font-black text-hero uppercase leading-[0.95] tracking-tighter mb-10">
            An Approach <br />
            Built for <span className="opacity-50">Your Needs.</span>
          </h2>
          
          <div className="space-y-6 max-w-xl">
            <p className="text-hero text-xl font-medium leading-snug">
              Chilada is a digital collective based in Addis Ababa, 
              engineering high-performance experiences for global brands.
            </p>
            
            <p className="text-hero text-base leading-relaxed opacity-50">
              We focus on the intersection of technical strategy and purposeful design. 
              Our work is defined by a relentless pursuit of clarity, moving beyond 
              the decorative to deliver digital products that actually perform.
            </p>
          </div>

          {/* Simple Interaction Hook */}
          <div className="mt-12 group cursor-pointer flex items-center gap-4">
             <div className="w-10 h-10 rounded-full border border-hero-muted flex items-center justify-center group-hover:border-secondary transition-colors">
                <div className="w-2 h-2 bg-secondary" />
             </div>
             <span className="text-hero font-bold uppercase tracking-widest text-xs group-hover:text-secondary transition-colors">
                Our Methodology
             </span>
          </div>
        </div>

        {/* Right Side: Minimalist Architectural Element */}
        <div className="lg:col-span-5 relative flex justify-end">
          <div className="relative w-full aspect-square max-w-md bg-hero-dark border border-hero-subtle">
            {/* Minimalist Graphic: 3 Lines representing the Highland Ridge */}
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 opacity-20">
               <div className="w-32 h-[1px] bg-hero-fg" />
               <div className="w-48 h-[1px] bg-hero-fg translate-x-4" />
               <div className="w-24 h-[1px] bg-hero-fg -translate-x-6" />
            </div>

            {/* Corner Tech Stamp */}
            <div className="absolute top-0 right-0 p-4 border-b border-l border-hero-subtle text-hero font-mono text-[9px] uppercase tracking-tighter opacity-30">
               AA_Digital_HQ // 2026
            </div>
          </div>
          
          {/* Subtle Color Accent Block */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 -z-10" />
        </div>

      </div>
    </div>
  );
};

export default About;