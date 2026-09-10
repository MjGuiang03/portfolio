"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mail, GraduationCap, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const quickDetails = [
  {
    icon: MapPin,
    label: "Location",
    value: "Paranaque City, Philippines",
    href: null,
  },
  {
    icon: Mail,
    label: "Email",
    value: "marcjoefreal@gmail.com",
    href: "mailto:marcjoefreal@gmail.com",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "BS Information Technology",
    href: null,
  },
];

const highlights = [
  "Pixel-Perfect UI",
  "Full Stack Architecture",
  "Clean & Maintainable Code",
  "Fast Learner",
];

export function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 bg-background text-foreground px-4 border-t border-foreground/10 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
          >
            Behind the Code
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/60 text-sm sm:text-base md:text-lg max-w-xl mx-auto mt-3"
          >
            A quick look into who I am, what drives me, and the standards I bring to every project.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6 sm:p-7 flex flex-col justify-between hover:border-foreground/20 transition-all duration-300 relative overflow-hidden"
          >
            {/* Ambient subtle glow */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-foreground/[0.03] rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col items-center text-center">
              {/* Photo */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-foreground/10 shadow-md relative bg-foreground/[0.03] mb-4 group flex-shrink-0">
                <Image
                  src="/profile.png"
                  alt="Marc Joefreal Guiang"
                  fill
                  sizes="(max-width: 640px) 128px, 160px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Marc Joefreal Guiang
              </h3>
              <p className="text-xs sm:text-sm text-foreground/60 mt-1 font-medium">
                Full Stack Developer &amp; BSIT Student
              </p>

              <p className="text-xs sm:text-sm text-foreground/70 mt-3.5 max-w-xs leading-relaxed">
                Passionate about turning ideas into clean, reliable web products with smooth interactions.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 mt-6 pt-5 border-t border-foreground/10 w-full justify-center">
              <a
                href="https://github.com/MjGuiang03"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-foreground/10 bg-foreground/[0.03] text-foreground/70 hover:text-foreground hover:bg-foreground/[0.08] hover:border-foreground/20 transition-all"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/marc-joefreal-guiang"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-foreground/10 bg-foreground/[0.03] text-foreground/70 hover:text-foreground hover:bg-foreground/[0.08] hover:border-foreground/20 transition-all"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:marcjoefreal@gmail.com"
                className="p-2.5 rounded-full border border-foreground/10 bg-foreground/[0.03] text-foreground/70 hover:text-foreground hover:bg-foreground/[0.08] hover:border-foreground/20 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Narrative & Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-7 rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6 sm:p-8 flex flex-col justify-between hover:border-foreground/20 transition-all duration-300"
          >
            <div>
              {/* Pull quote headline */}
              <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground leading-snug">
                Turning ideas from a blank screen into clean, working web applications that solve real problems.
              </p>

              {/* Bio paragraphs */}
              <div className="space-y-4 text-foreground/70 text-sm sm:text-base leading-relaxed mt-5">
                <p>
                  Hey! I&apos;m an Information Technology student with a deep love for building things on the web. I got hooked on coding when I realized I could take an idea from a sketch on paper to a fully working app — and I&apos;ve been chasing that feeling ever since.
                </p>
                <p>
                  I&apos;m the kind of developer who obsesses over the little things — pixel-perfect layouts, smooth animations, and writing code that actually makes sense when you come back to it months later. I&apos;m constantly learning every day, and honestly, that&apos;s the part I enjoy the most.
                </p>
              </div>
            </div>

            {/* Highlights pills */}
            <div className="pt-6 mt-6 border-t border-foreground/10">
              <p className="text-xs uppercase tracking-wider text-foreground/50 font-semibold mb-3">
                Core Focus &amp; Strengths
              </p>
              <div className="flex flex-wrap gap-2">
                {highlights.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-foreground/[0.04] text-foreground/80 border border-foreground/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Info Grid - Fully Visible Without Truncation */}
          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {quickDetails.map(({ icon: Icon, label, value, href }, index) => {
              const content = (
                <div className="flex items-center gap-3.5 p-1">
                  <div className="w-10 h-10 rounded-xl bg-foreground/[0.04] border border-foreground/10 flex items-center justify-center text-foreground flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1">
                      <span className="text-[11px] uppercase tracking-wider text-foreground/50 font-semibold">
                        {label}
                      </span>
                      {href && <ArrowUpRight className="w-3 h-3 text-foreground/40 flex-shrink-0" />}
                    </div>
                    <p className="text-foreground text-xs sm:text-sm font-medium mt-0.5 leading-snug whitespace-normal break-words">
                      {value}
                    </p>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index + 0.2 }}
                  className="rounded-xl border border-foreground/10 bg-foreground/[0.02] p-4 hover:border-foreground/20 hover:bg-foreground/[0.04] transition-all duration-300"
                >
                  {href ? (
                    <a href={href} className="block group">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
