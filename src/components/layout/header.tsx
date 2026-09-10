"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Sun, Moon, Mail } from "lucide-react";
import { useTheme } from "next-themes";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10"
    >
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo (Profile Image) */}
        <a
          href="#"
          className="flex items-center group transition-transform active:scale-95"
          aria-label="Marc Joefreal Guiang - Home"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-foreground/15 group-hover:border-foreground/40 transition-all shadow-sm flex-shrink-0 bg-foreground/[0.03]">
            <Image
              src="/profile.png"
              alt="Marc Joefreal Guiang"
              width={40}
              height={40}
              className="object-cover object-top w-full h-full transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </a>

        {/* Socials with labels */}
        <div className="hidden sm:flex items-center gap-6">
          <a
            href="https://github.com/MjGuiang03"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors text-base"
          >
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/marc-joefreal-guiang"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors text-base"
          >
            <FaLinkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:marcjoefreal@gmail.com"
            className="flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors text-base"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-full border border-foreground/10 bg-foreground/[0.03] text-foreground hover:bg-foreground/[0.1] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}
          <a
            href="/Marc_Joefreal_Guiang_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Marc_Joefreal_Guiang_CV.pdf"
            className="flex items-center gap-2.5 px-5 py-2.5 bg-foreground text-background font-semibold text-base rounded-full hover:bg-foreground/90 transition-transform active:scale-95"
          >
            <Download className="w-5 h-5" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
