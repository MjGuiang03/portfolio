import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Layers, Image as ImageIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { getProjectBySlug, projects } from "@/lib/projects-data";
import { ProjectGallery } from "@/components/ui/project-gallery";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Marc Joefreal Guiang`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden border-b border-foreground/10">

        <div className="relative max-w-5xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          <div className="flex flex-wrap gap-3 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full border border-foreground/20 text-foreground/70"
              >
                {tag}
              </span>
            ))}
            {project.status && (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20">
                {project.status}
              </span>
            )}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-foreground/60 text-sm mt-6">
            <span className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              {project.role}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {project.year}
            </span>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="px-4 pt-12 pb-8 border-b border-foreground/10 bg-background">
        <div className="max-w-5xl mx-auto">
          {project.slug === "isangdiwa" ? (
            <ProjectGallery
              images={[
                { src: "/images/isangdiwa/homepage.jpg", alt: "Home Page" },
                { src: "/images/isangdiwa/admindashboard.jpg", alt: "Admin Dashboard" },
                { src: "/images/isangdiwa/chatbot.jpg", alt: "AI Chatbot" },
              ]}
            />
          ) : project.image ? (
            <div className="w-full aspect-[21/9] md:aspect-[3/1] rounded-3xl bg-foreground/[0.03] border border-foreground/10 overflow-hidden flex items-center justify-center relative shadow-2xl">
              <Image src={project.image} alt={project.title} fill className="object-cover" priority />
            </div>
          ) : (
            <div className="w-full aspect-[21/9] md:aspect-[3/1] rounded-3xl bg-foreground/[0.03] border border-foreground/10 overflow-hidden flex items-center justify-center relative shadow-2xl">
              <div className="flex flex-col items-center gap-4 text-foreground/30">
                <ImageIcon className="w-16 h-16 opacity-50" />
                <span className="text-lg font-medium tracking-widest uppercase">Project Cover Image</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4 border-b border-foreground/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 tracking-tight">Overview</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {project.longDescription}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-foreground text-background font-semibold text-sm rounded-full hover:bg-foreground/90 transition-all active:scale-95"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 border border-foreground/20 text-foreground font-semibold text-sm rounded-full hover:bg-foreground/5 transition-all active:scale-95"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 border-b border-foreground/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 tracking-tight">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-foreground/50" />
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-foreground/60 text-sm leading-relaxed pl-5">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Outcome */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 tracking-tight">Challenges</h2>
            <p className="text-foreground/70 leading-relaxed">{project.challenges}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6 tracking-tight">Outcome</h2>
            <p className="text-foreground/70 leading-relaxed">{project.outcome}</p>
          </div>
        </div>

        {/* Navigation between projects */}
        <div className="max-w-5xl mx-auto mt-20 pt-12 border-t border-foreground/10 flex justify-between items-center gap-4 flex-wrap">
          {projects.map((p) =>
            p.slug !== project.slug ? (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group flex items-center gap-3 text-foreground/60 hover:text-foreground transition-colors"
              >
                <span className="text-sm font-medium">Next: {p.title}</span>
                <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : null
          )}
        </div>
      </section>
    </main>
  );
}