"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { User, MapPin, Mail, Calendar } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background text-foreground px-4 border-t border-foreground/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">

          {/* Avatar / Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 aspect-square rounded-2xl bg-foreground/[0.03] border border-foreground/10 flex items-center justify-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-foreground/10 to-transparent opacity-50 z-0" />
            <Image 
              src="/profile.png" 
              alt="Marc Joefreal Guiang" 
              fill
              className="object-cover z-10 scale-100 group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </motion.div>

          {/* Info Details */}
          <div className="w-full md:w-2/3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Behind the Code
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-lg text-foreground/70 leading-relaxed"
            >
              <p>
                I am a dedicated Full Stack Developer with a strong foundation in building modern, scalable web applications. My journey in tech is driven by a passion for solving complex problems and designing seamless user experiences.
              </p>
              <p>
                From architecting databases to perfecting front-end micro-animations, I enjoy taking ownership of the entire development lifecycle. I believe in clean code, continuous learning, and building products that actually make an impact.
              </p>
            </motion.div>

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex items-center gap-3 p-4 rounded-xl bg-foreground/[0.02] border border-foreground/10">
                <User className="w-5 h-5 text-foreground/50" />
                <div className="flex flex-col">
                  <span className="text-foreground/50 text-xs uppercase tracking-wider">Name</span>
                  <span className="text-foreground/90 font-medium">Marc Joefreal A. Guiang</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-foreground/[0.02] border border-foreground/10">
                <Calendar className="w-5 h-5 text-foreground/50" />
                <div className="flex flex-col">
                  <span className="text-foreground/50 text-xs uppercase tracking-wider">Age</span>
                  <span className="text-foreground/90 font-medium">21</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-foreground/[0.02] border border-foreground/10">
                <Mail className="w-5 h-5 text-foreground/50" />
                <div className="flex flex-col">
                  <span className="text-foreground/50 text-xs uppercase tracking-wider">Email</span>
                  <span className="text-foreground/90 font-medium">marcjoefreal@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-foreground/[0.02] border border-foreground/10">
                <MapPin className="w-5 h-5 text-foreground/50" />
                <div className="flex flex-col">
                  <span className="text-foreground/50 text-xs uppercase tracking-wider">Location</span>
                  <span className="text-foreground/90 font-medium">Paranaque City, Philippines</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
