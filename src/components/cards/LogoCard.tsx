"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";

interface LogoCardProps {
  src: string;
}

export default function LogoCard({ src }: LogoCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative h-[120px] min-w-[180px] flex items-center justify-center rounded-xl bg- overflow-hidden"
    >
      <Image
        src={src}
        alt="Client logo"
        fill
        className="object-contain p-6"
      />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
