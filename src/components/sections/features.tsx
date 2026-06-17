"use client";

import { motion } from "framer-motion";
import { Server, Layout, Database, Zap } from "lucide-react";

const features = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, accessible, and highly interactive user interfaces using React, Next.js, and Tailwind CSS.",
    icon: Layout,
  },
  {
    title: "Backend Architecture",
    description: "Designing scalable RESTful APIs and serverless functions with Node.js and Next.js App Router.",
    icon: Server,
  },
  {
    title: "Database Management",
    description: "Experienced with designing schemas, managing data relations, and optimizing database performance.",
    icon: Database,
  },
  {
    title: "Performance Optimization",
    description: "Ensuring lightning-fast load times and smooth micro-animations using Framer Motion and optimized assets.",
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
            Core Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/60 max-w-2xl mx-auto text-lg"
          >
            Delivering robust, end-to-end solutions by combining elegant minimalist design with powerful backend systems.
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
