"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[100svh] py-24 px-6 sm:px-10 text-center overflow-hidden bg-background"
    >

      {/* Main content */}
      <div className="flex flex-col items-center gap-6 max-w-4xl">
        {/* Headline — ALL CAPS, heavy, centered */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          className="text-[clamp(2.6rem,8.5vw,7rem)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-foreground"
        >
          From idea to{" "}
          <br className="hidden sm:block" />
          working product.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.28 }}
          className="text-base sm:text-lg text-foreground/50 max-w-sm leading-relaxed"
        >
          Your go-to full-stack developer for building clean, fast, and real web products from scratch.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.44 }}
          className="flex flex-col sm:flex-row items-center gap-3 mt-2"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background text-sm font-bold hover:opacity-80 active:scale-95 transition-all"
          >
            View my work →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-foreground/15 bg-background text-foreground text-sm font-semibold hover:border-foreground/35 hover:bg-foreground/[0.04] active:scale-95 transition-all"
          >
            Get in touch →
          </a>
        </motion.div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/20"
      >
        <div className="w-px h-10 bg-foreground/15 rounded-full" />
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
      </motion.div>
    </section>
  );
}