"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[calc(100dvh-5rem)] px-4 py-8 sm:py-12 md:py-0 overflow-hidden bg-background text-foreground"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-foreground/[0.03] rounded-full blur-3xl pointer-events-none" />
      
      <div className="z-10 flex flex-col items-center text-center space-y-7 sm:space-y-8 max-w-4xl my-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="px-4 py-1.5 rounded-full border border-foreground/20 text-xs sm:text-sm font-medium tracking-wide text-foreground/80 uppercase"
        >
          Full Stack Developer
        </motion.div>
        
        <div className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter flex flex-col items-center leading-[1.1]">
          <AnimatedText text="Crafting digital" className="justify-center" delay={0.2} />
          <AnimatedText text="experiences that matter." className="justify-center text-foreground/60" delay={0.6} />
        </div>
        
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-foreground/60 max-w-2xl px-2"
          >
            A BSIT student who loves turning ideas into real, working products — from clean UI to solid backends. Currently building with React, Next.js, and a whole lot of curiosity.
          </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto"
        >
          <a href="#features" className="px-8 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] text-center">
            Explore Features
          </a>
          <a href="#contact" className="px-8 py-3 bg-transparent border border-foreground/20 text-foreground font-semibold rounded-lg hover:bg-foreground/10 transition-colors text-center">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
