"use client";

import { motion, animate, useMotionValue } from "framer-motion"; // Note: changed from motion/react for standard import
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  speed?: "fast" | "slow";
}

export default function InfiniteMarquee({ children, speed = "fast" }: InfiniteMarqueeProps) {
  // Adjust speeds: Testimonials (slow) need to be readable.
  const FAST_DURATION = speed === "fast" ? 25 : 60;
  const SLOW_DURATION = speed === "fast" ? 75 : 200; // 200 makes it crawl/pause on hover

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    if (!width) return;

    const finalPosition = -width / 2 - 8; // Adjust for half the content width
    let controls;

    if (mustFinish) {
      controls = animate(
        xTranslation,
        [xTranslation.get(), finalPosition],
        {
          ease: "linear",
          duration: duration * (1 - xTranslation.get() / finalPosition),
          onComplete: () => {
            setMustFinish(false);
            setRerender(!rerender);
          },
        }
      );
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return () => controls?.stop();
  }, [width, duration, mustFinish, rerender, xTranslation]);

  return (
    <div className="relative overflow-hidden h-full py-4 group">
      
      {/* Gradient Masks for the "Infinite" look */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#1A0A07] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#1A0A07] to-transparent pointer-events-none" />

      <motion.div
        ref={ref}
        style={{ x: xTranslation }}
        className="absolute left-0 flex gap-0" // Gap handled by cards
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {/* We render children twice to create the loop */}
        <div className="flex gap-4 px-2">{children}</div>
        <div className="flex gap-4 px-2">{children}</div>
      </motion.div>
    </div>
  );
}