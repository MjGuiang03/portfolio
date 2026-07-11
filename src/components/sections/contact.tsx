"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles } from "lucide-react";

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="py-32 bg-background text-foreground px-4 border-t border-foreground/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-8"
        >
          Let's work on something cool.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-foreground/60 mb-12 max-w-2xl mx-auto px-2"
        >
           I'm always open to new opportunities, collaborations, or even just a good conversation about tech. Drop me a message and I'll get back to you as soon as I can!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-10 py-4 bg-foreground text-background font-bold text-lg rounded-full hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            <Sparkles className="w-5 h-5" />
            Say Hello
          </button>
        </motion.div>
      </div>

      {/* Contact Bottom Sheet / Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex flex-col justify-end md:justify-center items-center p-0 md:p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="relative w-full max-w-lg bg-background border border-foreground/10 rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden mt-auto md:mt-0 max-h-[90vh] flex flex-col"
            >
              <div className="px-8 py-6 border-b border-foreground/10 flex justify-between items-center bg-foreground/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-medium text-sm tracking-widest uppercase opacity-70">Available for work</span>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-foreground/5 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 opacity-50 hover:opacity-100" />
                </button>
              </div>

              <div className="p-8 overflow-y-auto">
                <h3 className="text-2xl font-bold mb-2">Send a message</h3>
                <p className="text-foreground/60 mb-8 text-sm">
                  Fill out the form below or email me directly at <a href="mailto:marcjoefreal@gmail.com" className="font-medium text-foreground hover:underline">marcjoefreal@gmail.com</a>
                </p>

                <form 
                  action="https://formspree.io/f/mjgnbgdp" 
                  method="POST"
                  className="space-y-4"
                >
                  <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium opacity-70">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-foreground/[0.03] border border-foreground/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium opacity-70">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-foreground/[0.03] border border-foreground/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium opacity-70">Message</label>
                    <textarea 
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-foreground/[0.03] border border-foreground/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-4 mt-4 bg-foreground text-background font-bold rounded-xl hover:bg-foreground/90 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

