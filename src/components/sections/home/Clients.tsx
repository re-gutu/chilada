import React from "react";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import LogoCard from "@/components/cards/LogoCard";
import TestimonialCard from "@/components/cards/TestimonialCard";

const partners = [
  "/partners/Addis way.png",
  "/partners/Ahununu.png",
  "/partners/Amba.png",
  "/partners/Amen furniture.png",
  "/partners/Amole.png",
  "/partners/Arif.png",
  "/partners/Atobaba.png",
  "/partners/BW.png",
  "/partners/Chanoly.png",
  "/partners/Dashen.png",
];

const reviews = [
  {
    quote:
      "Chilada engineered a digital ecosystem that can handle the pulse of Addis Ababa.",
    author: "Dawit A.",
    role: "CTO",
    company: "Safaricom",
  },
  {
    quote:
      "Indigenous thinking with a global standard. They bridge the gap perfectly.",
    author: "Sarah M.",
    role: "Marketing Dir.",
    company: "Zemen Bank",
  },
  {
    quote:
      "We needed a shift in perception, not just a website. Chilada delivered.",
    author: "Elias K.",
    role: "Founder",
    company: "Ahununu",
  },
  {
    quote:
      "The visual language they created has set a new benchmark in the industry.",
    author: "Lydia T.",
    role: "Creative Lead",
    company: "Canal+",
  },
];

const Clients = () => {
  return (
    <div className="min-h-screen bg-hero py-24 flex flex-col gap-32">
      
      {/* SECTION 2: TESTIMONIALS */}
      <div className="flex flex-col gap-12">
        <div className="px-8 md:px-24">
          <h2 className="text-5xl md:text-7xl font-black text-hero uppercase leading-[0.9]">
            Voices from <br />{" "}
            <span className="text-secondary">The Plateau</span>
          </h2>
        </div>
        <div className="h-[400px]">
          <InfiniteMarquee speed="slow">
            {reviews.map((review, i) => (
              <TestimonialCard
                key={i}
                quote={review.quote}
                author={review.author}
                role={review.role}
                company={review.company}
              />
            ))}
          </InfiniteMarquee>
        </div>

        {/* SECTION 1: PARTNERS */}
        <div className="flex flex-col gap-10">
          <div className="px-8 md:px-24 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-primary" />
            <h5 className="text-hero font-mono text-xs uppercase tracking-[0.3em] opacity-50">
              Trusted Partners
            </h5>
          </div>

          <div className="h-[150px]">
            <InfiniteMarquee speed="fast">
              {partners.map((logo, i) => (
                <LogoCard key={i} src={logo} />
              ))}
            </InfiniteMarquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
