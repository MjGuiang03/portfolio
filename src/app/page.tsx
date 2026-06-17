import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import { About } from "@/components/sections/about";
import { Features } from "@/components/sections/features";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="bg-background selection:bg-foreground/30 selection:text-foreground">
      <Hero />
      <TechStack />
      <About />
      <Features />
      <Projects />
      <Contact />
    </div>
  );
}
