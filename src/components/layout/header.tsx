"use client";

import { motion } from "framer-motion";
import { Download, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/50 backdrop-blur-md border-b border-foreground/10"
    >
      <div className="font-bold text-xl tracking-tight text-foreground">
        <a href="#">MG.</a>
      </div>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#features" className="hover:text-foreground transition-colors">Features</a>
        <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
      </nav>
      
      <div className="flex items-center gap-4">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full border border-foreground/10 bg-foreground/[0.03] text-foreground hover:bg-foreground/[0.1] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        )}
        <a 
          href="#contact" 
          className="hidden md:block text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
        >
          Contact
        </a>
        <a 
          href="/Marc_Joefreal_Guiang_CV.pdf" 
          target="_blank"
          download="Marc_Joefreal_Guiang_CV.pdf"
          className="flex items-center gap-2 px-4 py-2 bg-foreground text-background font-semibold text-sm rounded-full hover:bg-foreground/90 transition-transform active:scale-95"
        >
          <Download className="w-4 h-4" />
          <span>Resume</span>
        </a>
      </div>
    </motion.header>
  );
}
