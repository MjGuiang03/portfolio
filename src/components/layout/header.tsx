"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 bg-background/80 backdrop-blur-md border-b border-foreground/10"
      >
        {/* Logo */}
        <div className="font-bold text-xl tracking-tight text-foreground">
          <a href="#">MG.</a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2 sm:gap-4">
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
            href="/Marc_Joefreal_Guiang_CV.pdf"
            target="_blank"
            download="Marc_Joefreal_Guiang_CV.pdf"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-foreground text-background font-semibold text-sm rounded-full hover:bg-foreground/90 transition-transform active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </a>
          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full border border-foreground/10 bg-foreground/[0.03] text-foreground hover:bg-foreground/[0.1] transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-b border-foreground/10 px-6 py-6 flex flex-col gap-5"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Marc_Joefreal_Guiang_CV.pdf"
              target="_blank"
              download="Marc_Joefreal_Guiang_CV.pdf"
              className="flex items-center gap-2 px-5 py-3 bg-foreground text-background font-semibold text-sm rounded-full w-fit"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
