import React from "react";

export interface ProjectCardProps {
  category?: string;
  title: string;
  description: string;
  tags?: string[];
  href?: string;
}

const ProjectCard = ({
  category = "Project",
  title,
  description,
  tags = [],
  href = "#",
}: ProjectCardProps) => {
  return (
    <div className="min-w-[85vw] md:min-w-[33vw] shrink-0 group" data-project-card>
      <div className="relative h-[70vh] bg-hero-dark border border-hero-subtle-5 p-8 pb-12 flex flex-col justify-between overflow-hidden">
        
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -rotate-45 translate-x-16 -translate-y-16" />

        <div>
          <h4 className="uppercase font-mono text-[10px] tracking-[0.4em] text-secondary font-bold">
            {category}
          </h4>
        </div>

        <div className="flex flex-col gap-6 relative z-10">
          <h3 className="text-4xl font-black text-hero uppercase tracking-tighter leading-none">
            {title}
          </h3>
          <p className="text-hero font-light leading-relaxed opacity-50">
            {description}
          </p>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 uppercase text-[9px] font-bold tracking-widest">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-primary/10 text-primary px-3 py-1 border border-primary/20"
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <a
        href={href}
        className="group flex justify-between items-center bg-primary text-hero w-full px-8 py-6 transition-all duration-300 hover:bg-secondary"
      >
        <span className="font-black uppercase tracking-[0.2em] text-xs">View Work</span>
        <span className="transform group-hover:translate-x-2 transition-transform">→</span>
      </a>
    </div>
  );
};

export default ProjectCard;