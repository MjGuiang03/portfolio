"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiFramer,
  SiJsonwebtokens,
  SiGit
} from "react-icons/si";
import { useTheme } from "next-themes";

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "" }, // Will adapt based on theme
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "" }, // Will adapt
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "JWT", icon: SiJsonwebtokens, color: "#000000" }, // Will adapt
  { name: "Git", icon: SiGit, color: "#F05032" }
];

// Duplicate for infinite scroll effect
const duplicatedTech = [...technologies, ...technologies, ...technologies];

export function TechStack() {
  const { theme } = useTheme();

  return (
    <section className="py-12 bg-background border-y border-foreground/5 overflow-hidden flex flex-col items-center">
      <p className="text-foreground/40 text-sm tracking-widest uppercase mb-8">Technologies & Tools</p>

      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex overflow-hidden w-full">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex flex-nowrap gap-6"
          >
            {duplicatedTech.map((tech, idx) => {
              // Handle icons that should invert in dark mode (black logos)
              let finalColor = tech.color;
              if ((tech.name === "Next.js" || tech.name === "Express" || tech.name === "JWT") && theme === "dark") {
                finalColor = "#FFFFFF";
              } else if ((tech.name === "Next.js" || tech.name === "Express" || tech.name === "JWT") && theme !== "dark") {
                finalColor = "#000000";
              }

              return (
                <div
                  key={idx}
                  className="whitespace-nowrap px-6 py-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] flex items-center gap-3 shadow-sm hover:scale-105 transition-transform"
                >
                  <tech.icon className="w-6 h-6" style={{ color: finalColor }} />
                  <span className="text-foreground/80 font-medium tracking-wide">{tech.name}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
