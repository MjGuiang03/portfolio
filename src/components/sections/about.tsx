"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const facts = [
  { label: "Location", value: "Parañaque City, PH" },
  { label: "Education", value: "BS Information Technology" },
  { label: "Email", value: "marcjoefreal@gmail.com", href: "mailto:marcjoefreal@gmail.com" },
  { label: "Status", value: "Open to opportunities", live: true },
];

const strengths = [
  { title: "Pixel-perfect UI", note: "Tight layouts and smooth interactions." },
  { title: "Full-stack architecture", note: "From rough sketch to working app." },
  { title: "Clean, maintainable code", note: "Still makes sense months later." },
  { title: "Fast learner", note: "Always picking up something new." },
];

const hairline = "border-foreground/[0.08]";

export function About() {
  const reduceMotion = useReducedMotion();

  // Each block animates on its own when it scrolls into view
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
      duration: reduceMotion ? 0 : 0.5,
      ease: "easeOut" as const,
      delay: reduceMotion ? 0 : delay,
    },
  });

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={`py-20 sm:py-32 px-6 sm:px-10 border-t ${hairline}`}
    >
      <div className="mx-auto max-w-[1040px]">
        {/* Statement */}
        <motion.h2
          id="about-heading"
          {...fadeUp(0)}
          className="max-w-[26ch] text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1] text-foreground [text-wrap:balance]"
        >
          I build full-stack web apps from scratch — clean UI, solid backend, shipped.
        </motion.h2>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-[320px_minmax(0,1fr)] gap-12 md:gap-16 items-start">
          {/* LEFT: photo, name, info (info sits directly under the photo) */}
          <motion.div {...fadeUp(0.1)} className="w-full max-w-[320px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-foreground/10 bg-foreground/[0.03]">
              <Image
                src="/profile.png"
                alt="Marc Joefreal Guiang"
                fill
                sizes="320px"
                className="object-cover object-top"
              />
            </div>

            <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
              Marc Joefreal Guiang
            </h3>
            <p className="text-sm text-foreground/50">Full Stack Developer</p>

            {/* One row per fact: label left, value right, never wraps */}
            <dl className={`mt-5 border-b ${hairline}`}>
              {facts.map(({ label, value, href, live }) => (
                <div
                  key={label}
                  className={`flex items-center justify-between gap-4 border-t ${hairline} py-3`}
                >
                  <dt className="shrink-0 text-sm text-foreground/50">{label}</dt>
                  <dd className="flex items-center gap-2 whitespace-nowrap text-sm text-foreground">
                    {live && (
                      <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                        <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                    )}
                    {href ? (
                      <a
                        href={href}
                        className="underline decoration-foreground/20 underline-offset-4 transition-colors hover:decoration-foreground"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* RIGHT: story + how I work */}
          <motion.div {...fadeUp(0.2)} className="flex flex-col gap-10 sm:gap-12">
            <p className="max-w-[60ch] text-base leading-relaxed text-foreground/70">
              I&apos;m an IT student who got hooked on coding the moment I turned a rough
              sketch into a working app. I care about the details: clean layouts, smooth
              interactions, and code that still makes sense months later.
            </p>

            <div>
              <h3 className="text-sm font-medium text-foreground/50">How I work</h3>
              <ul className={`mt-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 border-b ${hairline}`}>
                {strengths.map(({ title, note }) => (
                  <li key={title} className={`border-t ${hairline} py-4`}>
                    <p className="font-medium text-foreground">{title}</p>
                    <p className="mt-1 text-sm text-foreground/50">{note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}