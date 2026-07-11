"use client";

import { motion } from "framer-motion";
import { Server, Layout, Database, Zap } from "lucide-react";

const features = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, interactive interfaces with React, Next.js, and Tailwind CSS — focused on clean layouts, smooth interactions, and great user experience across devices.",
    icon: Layout,
  },
  {
    title: "Backend Architecture",
    description: "Designing well-structured RESTful APIs with Node.js and Express — clean routing, proper validation, and reliable error handling that keeps things running smoothly.",
    icon: Server,
  },
  {
    title: "Database Design",
    description: "Structuring schemas in MongoDB and managing relational data with PostgreSQL and Prisma — keeping the data layer organized, efficient, and ready to scale.",
    icon: Database,
  },
  {
    title: "Performance & Polish",
    description: "Optimizing load times, implementing smooth Framer Motion animations, and adding the finishing touches that take a project from functional to refined.",
    icon: Zap,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background text-foreground px-4 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            What I Bring to the Table
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/60 max-w-2xl mx-auto text-lg"
          >
            I like to work across the entire stack — from designing clean interfaces to building the APIs that power them.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.06] transition-all group duration-300"
            >
              <div className="h-12 w-12 rounded-full bg-foreground/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
