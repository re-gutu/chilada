import React from "react";
import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative min-h-screen bg-hero text-hero overflow-hidden flex flex-col justify-between">
      {/* 1. The Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/chilada.png"
            alt="Chilada"
            className="w-full h-full object-cover opacity-40 grayscale"
            fill
          />
        </div>

        {/* Gradient Overlay to ensure text readability and blend with the hero base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--hero-bg)] via-transparent to-[color:var(--hero-bg)] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--hero-bg)] via-transparent to-[color:var(--hero-bg)] opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Huge Call to Action */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[1px] bg-secondary" />
              <span className="text-secondary font-mono text-xs font-black uppercase tracking-[0.4em]">
                Next Step
              </span>
            </div>

            <h2 className="text-6xl md:text-[110px] font-black uppercase leading-[0.8] tracking-tighter mb-12">
              Start the <br />
              <span className="text-primary">Ascent.</span>
            </h2>

            <a
              href="mailto:hello@chilada.digital"
              className="group flex items-center gap-4 text-2xl md:text-3xl font-serif italic hover:text-secondary transition-all duration-300"
            >
              hello@chilada.digital
              <ArrowUpRight className="size-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
            </a>
          </div>

          {/* Right: Quick Info */}
          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end text-left lg:text-right gap-12">
            <div className="space-y-4">
              <span className="text-secondary font-mono text-[10px] uppercase tracking-widest block">
                Base of Operations
              </span>
              <p className="text-xl font-medium uppercase leading-tight">
                Addis Ababa, Ethiopia <br />
                Bole District
              </p>
            </div>

            <div className="flex gap-8 lg:justify-end">
              <a
                href="#"
                className="hover:text-secondary transition-colors uppercase font-mono text-[10px] tracking-widest"
              >
                Instagram
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors uppercase font-mono text-[10px] tracking-widest"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. The Bottom Navigation Bar */}
      <div className="relative z-10 w-full px-8 pb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end border-t border-hero-subtle pt-12 gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-black uppercase tracking-tighter">
              CHILADA.
            </span>
            <span className="text-[9px] font-mono uppercase tracking-[0.5em] opacity-40">
              Digital Collective // ETH
            </span>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <div className="flex gap-8 text-[10px] font-mono uppercase tracking-widest opacity-40">
              <span>© {currentYear}</span>
              <span className="hidden md:inline">
                Indigenous Spirit — Global Impact
              </span>
            </div>
            <div className="h-[2px] w-32 bg-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
