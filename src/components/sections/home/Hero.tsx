import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] w-full">
      <main className="relative h-full w-full">
        <div className="relative w-full pt-40 px-8">
          <div className="relative max-w-6xl pt-24 mx-auto text-center flex flex-col gap-8 items-center">
            <h1 className="">
              Building Digital Experiences That Drive Growth
            </h1>
            <h4 className="text-xl text-foreground/75 tracking-wide max-w-4xl">
              We help businesses strengthen their digital presence through
              strategy, design, and performance-driven marketing.
            </h4>
            <div className="w-full flex gap-8 justify-center">
                <button className="text-background bg-foreground px-8 py-4 rounded-full text-lg">
                Start a Project
                </button>
                <button className="border-2 px-8 py-4 rounded-full text-lg">
                View Work
                </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
