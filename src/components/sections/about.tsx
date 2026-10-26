"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const facts = [
  { label: "Location", value: "Metro Manila, PH" },
  { label: "Status", value: "Open to internships, junior roles, and freelance", live: true },
];

const hairline = "border-foreground/[0.08]";

export function About() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: reduceMotion ? 0 : 0.5, ease: "easeOut" as const },
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={`border-t ${hairline} px-6 py-16 sm:px-10 sm:py-28`}
    >
      <div className="mx-auto max-w-[1040px]">
        <h2
          id="about-heading"
          className="max-w-[24ch] text-[2.1rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl sm:leading-[1.1] [text-wrap:balance]"
        >
          I build full-stack web apps from scratch — clean UI, solid backend, shipped.
        </h2>

        <motion.div
          {...reveal}
          className="mt-8 grid grid-cols-1 items-start gap-8 sm:mt-16 md:grid-cols-[280px_minmax(0,1fr)] md:gap-16"
        >
          {/* LEFT: wide photo on mobile, stacked 4:5 card on desktop */}
          <div className="w-full md:max-w-[280px]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-foreground/10 bg-foreground/[0.03] md:aspect-[4/5]">
              <Image
                src="/profile.png"
                alt="Marc Joefreal Guiang"
                fill
                sizes="(min-width: 768px) 280px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground md:mt-5 md:text-lg">
              Marc Joefreal Guiang
            </h3>
          </div>

          {/* RIGHT: story + facts */}
          <div className="flex min-w-0 flex-col gap-8 md:gap-10">
            <p className="max-w-[58ch] text-[1.0625rem] leading-relaxed text-foreground/75 sm:text-lg">
              I&apos;m an IT student who got hooked on coding the moment I turned a rough
              sketch into a working app. I care about the details: clean layouts, smooth
              interactions, and code that still makes sense months later.
            </p>

            {/* Mobile: label above value. sm+: label left, value right */}
            <dl className={`max-w-[58ch] border-b ${hairline}`}>
              {facts.map(({ label, value, live }) => (
                <div
                  key={label}
                  className={`grid grid-cols-1 gap-1 border-t ${hairline} py-4 text-base sm:grid-cols-[96px_minmax(0,1fr)] sm:gap-4 sm:text-sm`}
                >
                  <dt className="text-sm text-foreground/50">{label}</dt>
                  <dd className="flex items-start gap-2 text-foreground">
                    {live && (
                      <span className="relative mt-1.5 flex h-2 w-2 shrink-0" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 motion-safe:animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                    )}
                    <span>{value}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About; 