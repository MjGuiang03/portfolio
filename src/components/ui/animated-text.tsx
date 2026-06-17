"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: React.ElementType;
  delay?: number;
}

export function AnimatedText({
  text,
  className,
  el: Wrapper = "div",
  delay = 0,
}: AnimatedTextProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay + 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Wrapper className={cn("flex flex-wrap", className)}>
      <motion.div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "inherit" }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            style={{ marginRight: "0.25em" }}
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </Wrapper>
  );
}
