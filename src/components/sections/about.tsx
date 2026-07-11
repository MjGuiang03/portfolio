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
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-full md:aspect-square md:h-auto rounded-2xl bg-white dark:bg-foreground/[0.03] border border-foreground/10 flex items-center justify-center relative overflow-hidden"
            style={{ aspectRatio: '1' }}
          >
            <Image
              src="/profile.png"
              alt="Marc Joefreal Guiang"
              fill
              sizes="(max-width: 768px) 256px, 33vw"
              className="object-contain z-10"
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
                Hey! I'm an Information Technology student with a deep love for building things on the web. I got hooked on coding when I realized I could take an idea from a sketch on paper to a fully working app — and I've been chasing that feeling ever since.
              </p>
              <p>
                I'm the kind of developer who obsesses over the little things — pixel-perfect layouts, smooth animations, and writing code that actually makes sense when you come back to it months later. I'm still learning every day, and honestly, that's the part I enjoy the most.
              </p>
            </motion.div>

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-col gap-4 w-fit mx-auto md:mx-0"
            >
              <div className="flex items-center gap-3 p-4 rounded-xl bg-foreground/[0.02] border border-foreground/10 overflow-hidden">
                <User className="w-5 h-5 text-foreground/50 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-foreground/50 text-xs uppercase tracking-wider">Name</span>
                  <span className="text-foreground/90 font-medium whitespace-nowrap text-sm xl:text-base">Marc Joefreal A. Guiang</span>
                </div>
              </div>


              <div className="flex items-center gap-3 p-4 rounded-xl bg-foreground/[0.02] border border-foreground/10 overflow-hidden">
                <Mail className="w-5 h-5 text-foreground/50 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-foreground/50 text-xs uppercase tracking-wider">Email</span>
                  <span className="text-foreground/90 font-medium whitespace-nowrap text-sm xl:text-base">marcjoefreal@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-foreground/[0.02] border border-foreground/10 overflow-hidden">
                <MapPin className="w-5 h-5 text-foreground/50 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-foreground/50 text-xs uppercase tracking-wider">Location</span>
                  <span className="text-foreground/90 font-medium whitespace-nowrap text-sm xl:text-base">Paranaque City, Philippines</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
