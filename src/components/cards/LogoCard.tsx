"use client";

import { motion, AnimatePresence } from "framer-motion";
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
      className="relative h-[120px] min-w-[200px] flex items-center justify-center bg-[#1A0A07] border border-[#EEE5CA]/5 overflow-hidden transition-colors duration-500 hover:bg-[#712C1D]/5"
    >
      {/* 10% Teal - Technical Corner Accents */}
      <AnimatePresence>
        {hovered && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#1D6171] z-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#1D6171] z-10"
            />
          </>
        )}
      </AnimatePresence>

      {/* Logo Image with Grayscale to Color Transition */}
      <div className={`relative w-32 h-16 transition-all duration-700 ${hovered ? 'grayscale-0 opacity-100' : 'grayscale opacity-70'}`}>
        <Image
          src={src}
          alt="Client logo"
          fill
          className="object-contain p-2"
        />
      </div>

      {/* Subtle Bottom Glow on Hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1D6171] to-transparent origin-center"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}