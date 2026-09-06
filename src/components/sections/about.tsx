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


export function About() {
  return (
    <section id="about" className="py-24 bg-background text-foreground px-4 border-t border-foreground/10">
      <div className="max-w-6xl mx-auto">

        {/* Title — top center */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center"
        >
          Behind the Code
        </motion.h2>

        {/* Image + Text row */}
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Avatar / Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-1/3 md:aspect-square md:h-auto rounded-2xl bg-white dark:bg-foreground/[0.03] border border-foreground/10 flex items-center justify-center relative overflow-hidden flex-shrink-0"
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
          <div className="flex-1">
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
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 py-6 border-y border-foreground/10"
            >
              {infoItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-foreground/50">
                    <Icon className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider font-semibold">{label}</span>
                  </div>
                  <p className="text-foreground/90 font-medium text-sm">{value}</p>
                </div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
