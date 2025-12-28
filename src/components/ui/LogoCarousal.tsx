"use client";

import { motion, animate, useMotionValue } from "motion/react";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import LogoCard from "@/components/cards/LogoCard";

interface LogoCarouselProps {
  logos: string[];
}

export default function LogoCarousel({ logos }: LogoCarouselProps) {
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    if (!width) return;

    const finalPosition = -width / 2 - 16;
    let controls;

    if (mustFinish) {
      controls = animate(
        xTranslation,
        [xTranslation.get(), finalPosition],
        {
          ease: "linear",
          duration:
            duration *
            (1 - xTranslation.get() / finalPosition),
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
    <section className="relative overflow-hidden py-12 h-full">
      <motion.div
        ref={ref}
        style={{ x: xTranslation }}
        className="absolute left-0 flex gap-4"
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <LogoCard key={index} src={logo} />
        ))}
      </motion.div>
    </section>
  );
}
