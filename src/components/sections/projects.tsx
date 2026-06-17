"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Pahinga",
    role: "Full Stack Developer",
    description: "A comprehensive hiking marketplace and team management platform. Implemented role-based authentication, driver/coordinator fleet dashboards, and responsive UI layouts.",
    tags: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    link: "#",
  },
  {
    title: "IsangDiwa",
    role: "Full Stack Developer",
    description: "An enterprise-grade administrative dashboard and campus event system. Designed settings interfaces, financial PDF export reports, and secure role-based portals.",
    tags: ["React", "Node.js", "Express", "CSS", "MongoDB"],
    link: "#",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background text-foreground px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Selected Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-foreground/60 max-w-lg text-lg"
            >
              Highlighting recent projects where I managed full-stack development, from UI design to backend architecture.
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col md:flex-row gap-8 items-start border-t border-foreground/10 pt-12"
            >
              <div className="md:w-1/3 shrink-0">
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/60 font-medium">{project.role}</p>
              </div>

              <div className="md:w-2/3 flex flex-col gap-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full border border-foreground/20 text-sm font-medium text-foreground/80">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <a href={project.link} className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-foreground/70 transition-colors">
                    View Project Details <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
