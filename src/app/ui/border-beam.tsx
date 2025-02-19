"use client";

import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";

interface BorderBeamProps {
  size?: number;
  duration?: number;
}

export function BorderBeam({ size = 50, duration = 8 }: BorderBeamProps) {
  return (
    <motion.div
      className="absolute inset-0 z-10 pointer-events-none"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
    >
      <div
        className={cn(
          "absolute -inset-1 rounded-lg border border-transparent",
          "bg-gradient-to-r from-transparent via-purple-500 to-transparent",
          "opacity-30"
        )}
        style={{ width: size, height: size }}
      />
    </motion.div>
  );
}