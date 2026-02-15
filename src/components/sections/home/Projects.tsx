"use client";

import ProjectCard, {
  type ProjectCardProps,
} from "@/components/cards/ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useCallback } from "react";

const projects: ProjectCardProps[] = [
  // ... your project data ...
  {
    category: "Hospitality",

    title: "Project Title",

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",

    tags: ["Digital Marketing", "Photography & Visual Production"],

    href: "#",
  },

  {
    category: "Retail",

    title: "Brand Refresh",

    description:
      "A full brand identity and digital experience for a growing retailer.",

    tags: ["Branding", "Web Design", "Strategy"],

    href: "#",
  },

  {
    category: "Technology",

    title: "Product Launch",

    description:
      "End-to-end campaign and product site for a new software platform.",

    tags: ["Digital Marketing", "UX", "Content"],

    href: "#",
  },

  {
    category: "Hospitality",

    title: "Project Title",

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",

    tags: ["Digital Marketing", "Photography & Visual Production"],

    href: "#",
  },
];

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("[data-project-card]");
    const cardWidth = firstCard?.offsetWidth ?? el.clientWidth;
    const gap = 64; // Matching the gap-16 (16 * 4px)
    const amount = direction === "right" ? cardWidth + gap : -(cardWidth + gap);
    el.scrollBy({ left: amount, behavior: "smooth" });
  }, []);

  return (
    <div className="py-32 px-8 md:px-24 flex flex-col bg-[#1A0A07]">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div className="max-w-2xl">
          <h5 className="text-[#1D6171] font-mono text-xs font-black uppercase tracking-[0.4em] mb-4">
            Featured Projects
          </h5>
          <h2 className="text-5xl md:text-7xl font-black text-[#EEE5CA] uppercase tracking-tighter leading-[0.9]">
            Results you <br />
            <span className="text-[#712C1D]">can feel</span>
          </h2>
        </div>
        <p className="text-[#EEE5CA]/50 font-light leading-relaxed max-w-sm text-right">
          Work that shifts perception and drives measurable results. Built for
          impact, refined for the modern digital landscape.
        </p>
      </div>

      {/* Horizontal Scroll Area */}
      <div
        ref={scrollRef}
        className="flex gap-16 overflow-x-auto overflow-y-hidden scroll-smooth no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* CSS to hide scrollbar for Webkit browsers */}
        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="pt-16 flex justify-between items-center">
        <div className="h-[1px] flex-grow bg-[#712C1D]/20 mr-12" />
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => scrollByCard("left")}
            className="group p-4 border border-[#712C1D] text-[#712C1D] hover:bg-[#712C1D] hover:text-[#EEE5CA] transition-all"
            aria-label="Previous project"
          >
            <ChevronLeft className="size-5 group-active:scale-90 transition-transform" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("right")}
            className="group p-4 border border-[#1D6171] text-[#1D6171] hover:bg-[#1D6171] hover:text-[#EEE5CA] transition-all"
            aria-label="Next project"
          >
            <ChevronRight className="size-5 group-active:scale-90 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
