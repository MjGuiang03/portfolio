"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "features", label: "Features" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function SectionIndicator() {
  const [activeSection, setActiveSection] = useState("hero");

  const getActiveSection = useCallback(() => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Find which section is currently most visible in the viewport
    let closest = sections[0].id;
    let closestDistance = Infinity;

    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      // Use the center of the section relative to viewport center
      const sectionCenter = sectionTop + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distance = Math.abs(sectionCenter - viewportCenter);

      // Also consider: if we're at the very bottom, pick the last section
      if (
        scrollY + viewportHeight >= document.documentElement.scrollHeight - 10
      ) {
        closest = sections[sections.length - 1].id;
        break;
      }

      // A section is "in view" if its top is above the center of the viewport
      if (sectionTop <= viewportHeight * 0.5 && sectionBottom > 0) {
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = id;
        }
      }
    }

    setActiveSection(closest);
  }, []);

  useEffect(() => {
    // Run once on mount
    getActiveSection();

    window.addEventListener("scroll", getActiveSection, { passive: true });
    window.addEventListener("resize", getActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", getActiveSection);
      window.removeEventListener("resize", getActiveSection);
    };
  }, [getActiveSection]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // Update active immediately on click
    setActiveSection(id);
  };

  const activeIndex = sections.findIndex((s) => s.id === activeSection);

  return (
    <div className="fixed right-10 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-0">
      {sections.map(({ id, label }, i) => {
        const isActive = activeSection === id;
        const isPast = i < activeIndex;

        return (
          <div key={id} className="flex flex-col items-end">
            {/* Connecting line (skip first) */}
            {i > 0 && (
              <div className="flex justify-end pr-[9px]">
                <div
                  className={`w-px h-6 transition-colors duration-500 ${isPast || isActive ? "bg-foreground/40" : "bg-foreground/12"}`}
                />
              </div>
            )}

            {/* Row: label + dot */}
            <a
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className="flex items-center gap-4 group"
            >
              {/* Label */}
              <motion.span
                animate={{
                  opacity: isActive ? 1 : 0.3,
                  x: isActive ? 0 : 4,
                  fontWeight: isActive ? 600 : 400,
                }}
                transition={{ duration: 0.25 }}
                className={`text-sm tracking-wide transition-colors duration-300 ${isActive
                    ? "text-foreground"
                    : "text-foreground/40 group-hover:text-foreground/60"
                  }`}
              >
                {label}
              </motion.span>

              {/* Dot */}
              <motion.div
                animate={{
                  borderColor: isActive
                    ? "var(--foreground)"
                    : "rgba(var(--tw-foreground-rgb, 0 0 0) / 0.3)",
                }}
                transition={{ duration: 0.25 }}
                className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isActive ? "border-foreground" : "border-foreground/30"}`}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1 : isPast ? 0.5 : 0,
                    opacity: isActive ? 1 : isPast ? 0.5 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className="w-[8px] h-[8px] rounded-full bg-foreground"
                />
              </motion.div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
