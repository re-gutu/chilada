'use client'

import React, { useEffect, useRef, useState } from 'react';

const Showreel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-screen bg-hero px-8 py-24">
      {/* Vertical Cultural Marker */}
      <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-primary/20 hidden lg:block" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <h2 className={`text-hero text-5xl md:text-7xl font-black uppercase transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            The <span className="text-primary">Showreel</span>
          </h2>
          <div className="text-secondary font-mono text-right">
            [ ETHIOPIA // 09°01′N 38°44′E ]
          </div>
        </div>

        {/* Video Container - Rugged Frame */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Geometric Corner Decals */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-secondary" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-primary" />

          <div className="videocontainer relative h-[70vh] w-full bg-hero-dark rounded-none shadow-offset-primary flex items-center justify-center">
             {/* Center Play Interaction */}
             <div className="group cursor-pointer flex flex-col items-center">
                <div className="w-24 h-24 bg-hero-fg flex items-center justify-center clip-triangle rotate-90 group-hover:bg-secondary transition-colors duration-300">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-b-[10px] border-b-transparent border-hero ml-1" />
                </div>
                <span className="mt-4 text-hero font-black uppercase tracking-[0.3em] text-xs">Play Reel</span>
             </div>
          </div>
        </div>

        {/* Caption Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-12">
            <p className="text-hero-muted text-lg leading-relaxed border-t border-primary pt-6">
                Inspired by the resilient spirit of the Chilada baboon, our work is indigenous in heart and global in standard. We don't just build sites; we build digital landmarks.
            </p>
            <div className="flex flex-col items-end gap-6">
                <div className="w-full h-[1px] bg-hero-subtle" />
                <span className="text-secondary font-mono text-xs uppercase tracking-widest">Built in Addis Ababa</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Showreel