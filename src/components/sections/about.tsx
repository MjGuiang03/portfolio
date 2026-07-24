"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { User, MapPin, Mail } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const infoItems = [
  {
    icon: User,
    label: "Name",
    value: "Marc Joefreal A. Guiang",
  },
  {
    icon: Mail,
    label: "Email",
    value: "marcjoefreal@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Paranaque City, Philippines",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/MjGuiang03",
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/marc-joefreal-guiang",
    Icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:marcjoefreal@gmail.com",
    Icon: Mail,
  },
];

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
            style={{ aspectRatio: "1" }}
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
                Hey! I&apos;m an Information Technology student with a deep love for building things on the web. I got hooked on coding when I realized I could take an idea from a sketch on paper to a fully working app — and I&apos;ve been chasing that feeling ever since.
              </p>
              <p>
                I&apos;m the kind of developer who obsesses over the little things — pixel-perfect layouts, smooth animations, and writing code that actually makes sense when you come back to it months later. I&apos;m still learning every day, and honestly, that&apos;s the part I enjoy the most.
              </p>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {infoItems.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="group relative flex flex-col gap-2 p-4 rounded-2xl bg-foreground/[0.02] border border-foreground/[0.08] hover:border-foreground/20 hover:bg-foreground/[0.05] transition-all duration-300 min-w-[180px] flex-1"
                >
                  {/* Subtle glow accent */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{ background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)" }}
                  />
                  <div className="flex items-center gap-2 text-foreground/40">
                    <Icon className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase tracking-widest font-semibold">{label}</span>
                  </div>
                  <p className="text-foreground/90 font-medium text-sm leading-snug">{value}</p>
                </div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-4 flex items-center gap-2 flex-wrap"
            >
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/[0.03] hover:bg-foreground/[0.08] hover:border-foreground/20 hover:scale-105 transition-all duration-200 text-foreground/55 hover:text-foreground text-xs font-medium tracking-wide"
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{label}</span>
                </a>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
