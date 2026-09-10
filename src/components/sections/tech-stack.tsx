"use client";

import { useState, useEffect } from "react";
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
  SiGit,
} from "react-icons/si";
import { useTheme } from "next-themes";

const techGroups = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React",
        role: "UI Library",
        icon: SiReact,
        color: "#61DAFB",
        darkColor: "#61DAFB",
      },
      {
        name: "Next.js",
        role: "Full Stack Framework",
        icon: SiNextdotjs,
        color: "#000000",
        darkColor: "#FFFFFF",
      },
      {
        name: "TypeScript",
        role: "Type-Safe JavaScript",
        icon: SiTypescript,
        color: "#3178C6",
        darkColor: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        role: "Utility-First Styling",
        icon: SiTailwindcss,
        color: "#06B6D4",
        darkColor: "#06B6D4",
      },
      {
        name: "Framer Motion",
        role: "Animation Library",
        icon: SiFramer,
        color: "#0055FF",
        darkColor: "#0055FF",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        role: "JavaScript Runtime",
        icon: SiNodedotjs,
        color: "#339933",
        darkColor: "#339933",
      },
      {
        name: "Express",
        role: "REST API Framework",
        icon: SiExpress,
        color: "#000000",
        darkColor: "#FFFFFF",
      },
      {
        name: "JWT",
        role: "Authentication & Security",
        icon: SiJsonwebtokens,
        color: "#000000",
        darkColor: "#FFFFFF",
      },
    ],
  },
  {
    category: "Database & Tools",
    skills: [
      {
        name: "PostgreSQL",
        role: "Relational SQL Database",
        icon: SiPostgresql,
        color: "#4169E1",
        darkColor: "#4169E1",
      },
      {
        name: "MongoDB",
        role: "NoSQL Document Database",
        icon: SiMongodb,
        color: "#47A248",
        darkColor: "#47A248",
      },
      {
        name: "Git",
        role: "Version Control System",
        icon: SiGit,
        color: "#F05032",
        darkColor: "#F05032",
      },
    ],
  },
];

export function TechStack() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="tech-stack"
      className="py-16 sm:py-20 md:py-24 bg-background text-foreground px-4 border-y border-foreground/5 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
          >
            Technologies &amp; Tools
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/60 text-sm sm:text-base max-w-lg mx-auto mt-3"
          >
            The core technologies and tools I leverage to build scalable, high-performance web applications.
          </motion.p>
        </div>

        {/* Categorized Tech Groups with Dividers */}
        <div className="space-y-10 sm:space-y-12">
          {techGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
              className="flex flex-col"
            >
              {/* Category Divider Header */}
              <div className="flex items-center gap-4 mb-5">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground/90 whitespace-nowrap">
                  {group.category}
                </h3>
                <div className="h-px flex-1 bg-foreground/10" />
              </div>

              {/* Skills Grid - 2 columns on mobile, 3 on desktop */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
                {group.skills.map((tech) => {
                  const finalColor = mounted
                    ? theme === "dark"
                      ? tech.darkColor
                      : tech.color
                    : tech.color;

                  return (
                    <div
                      key={tech.name}
                      className="rounded-xl sm:rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-3 sm:p-4.5 flex items-center gap-2.5 sm:gap-3.5 hover:border-foreground/20 hover:bg-foreground/[0.04] transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-foreground/[0.03] border border-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <tech.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: finalColor }} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-xs sm:text-base text-foreground tracking-tight whitespace-normal break-words leading-tight">
                          {tech.name}
                        </h4>
                        <p className="text-[10px] sm:text-xs text-foreground/50 font-medium mt-0.5 whitespace-normal break-words leading-tight">
                          {tech.role}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
