"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { projects } from "@/lib/projects-data";

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

        <div className="flex flex-col gap-24">
          {(["Capstone Project", "Personal Project"] as const).map((category) => {
            const categoryProjects = projects.filter((p) => p.category === category);
            if (categoryProjects.length === 0) return null;

            return (
              <div key={category} className="flex flex-col">
                <div className="flex items-center gap-6 mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground/80 whitespace-nowrap">
                    {category}{category === "Capstone Project" ? "" : "s"}
                  </h3>
                  <div className="h-px flex-1 bg-foreground/10" />
                </div>
                <div className="flex flex-col gap-12">
                  {categoryProjects.map((project, index) => (
                    <motion.div
                      key={project.slug}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative flex flex-col border-t border-foreground/10 pt-12"
                    >
                      {/* Image / Placeholder */}
                      <div className="w-full aspect-[21/9] rounded-2xl bg-foreground/[0.03] border border-foreground/10 overflow-hidden mb-10 flex items-center justify-center relative">
                        {project.image ? (
                          <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        ) : (
                          <div className="flex flex-col items-center gap-3 text-foreground/40">
                            <ImageIcon className="w-10 h-10 opacity-50" />
                            <span className="text-sm font-medium tracking-wide uppercase">Image Placeholder</span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="md:w-1/3 shrink-0">
                          <div className="flex flex-col items-start gap-3 mb-2">
                            <h3 className="text-3xl font-bold">{project.title}</h3>
                            {project.status && (
                              <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20">
                                {project.status}
                              </span>
                            )}
                          </div>
                          <p className="text-foreground/60 font-medium">{project.role}</p>
                          <p className="text-foreground/40 text-sm mt-1">{project.year}</p>
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
                          <Link
                            href={`/projects/${project.slug}`}
                            className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-foreground/70 transition-colors"
                          >
                            View Project Details <ArrowUpRight className="h-5 w-5" />
                          </Link>
                        </div>
                      </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
