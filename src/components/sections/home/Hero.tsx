import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] w-full bg-hero overflow-hidden flex items-center justify-center">
      {/* 60% - The Deep Base & Atmosphere (Pulse removed) */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px]" />

      {/* 10% - The Teal Accent "Glow" */}
      {/* <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-[#1D6171]/15 blur-[100px]" /> */}

      {/* 30% - The Eggshell Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <main className="relative z-10 container mx-auto px-8">
        <div className="max-w-6xl mx-auto mt-24 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-10 group">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-hero font-mono text-sm tracking-[0.5em] font-black uppercase">
              Chilada Digital
            </span>
            <div className="w-12 h-[2px] bg-primary" />
          </div>
          {/* Headline (30% Hierarchy) */}
          <h1 className="text-6xl md:text-[120px] font-black text-hero leading-[0.85] tracking-[-0.04em] uppercase text-center mb-8">
            Craft Your{" "}
            <span className="text-transparent stroke-text pl-1">
              Symphony
            </span>
            <br />
            <span className="py-1">of Digital</span> Impact
          </h1>

          {/* Subheadline (Muted Secondary) */}
          <p className="text-hero-muted tracking-wide max-w-3xl leading-relaxed mb-14 font-light text-lg">
            We help businesses{" "}
            <span className="text-hero">
              strengthen their digital presence
            </span>{" "}
            through strategy, design, and performance-driven marketing.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            {/* Primary Action - The Teal Accent Pop */}
            <button className="relative group px-12 py-5 bg-secondary text-hero font-bold uppercase tracking-widest text-sm transition-all hover:bg-secondary/80 hover:shadow-secondary-glow active:scale-95">
              Contact Us
            </button>

            {/* Secondary Action - The Brand Brown Border */}
            <button className="px-10 py-5 border-2 border-primary text-hero font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-hero transition-all duration-300">
              Explore Our Work
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Detail - Updated to Brand Brown Gradient (#712C1D) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
        <div className="w-px h-12 bg-linear-to-b from-primary to-transparent" />
      </div>
    </div>
  );
};

export default Hero;
