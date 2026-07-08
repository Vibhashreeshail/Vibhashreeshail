import { motion } from "motion/react";
import React from "react";

interface GlitchTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
}

export function GlitchText({ text, as: Component = "h1", className = "", delay = 0 }: GlitchTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="inline-block"
    >
      <Component 
        className={`inline-block ${className}`} 
        data-text={text}
      >
        {text}
      </Component>
    </motion.div>
  );
}
