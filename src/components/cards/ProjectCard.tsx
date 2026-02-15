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
    <div className="min-w-[33vw] max-w-[33vw] shrink-0" data-project-card>
      <div className="relative h-[70vh] bg-muted p-8 pb-12 flex flex-col justify-between">
        <div>
          <h4 className="uppercase tracking-wider">{category}</h4>
        </div>
        <div className="flex flex-col gap-6">
          <h3>{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-4 uppercase text-sm">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="rounded-full border border-primary px-4 py-2"
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
        className="block text-background bg-primary w-full px-8 py-4 text-start tracking-wider uppercase"
      >
        View Work
      </a>
    </div>
  );
};

export default ProjectCard;
