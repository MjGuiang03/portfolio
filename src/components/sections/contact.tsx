"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-background text-foreground px-4 border-t border-foreground/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-8"
        >
          Let's build something extraordinary.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-foreground/60 mb-12 max-w-2xl mx-auto px-2"
        >
          I'm currently open for new opportunities. Whether you have a project in mind or just want to say hi, I'll try my best to get back to you!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a href="mailto:marcjoefreal@gmail.com" className="inline-block px-10 py-4 bg-foreground text-background font-bold text-lg rounded-full hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
