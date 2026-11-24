import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Projects", "Selected projects in applied AI, software, IoT research, fintech-adjacent education, and community technology.", "/projects");

export default function ProjectsPage() {
  return (
    <>
      <PageIntro eyebrow="Projects" title="Built, researched, and learned in public." intro="A selection of work across applied AI, software engineering, connected systems, and technology for learning. Each project page explains the problem, the work, and what came out of it." />
      <section className="section shell"><div className="project-grid project-grid-wide">{projects.map((project, index) => <ProjectCard project={project} index={String(index + 1).padStart(2, "0")} key={project.slug} />)}</div></section>
      <section className="section section-muted"><div className="shell project-callout"><div><p className="eyebrow">Learning by doing</p><h2>Software engineering foundations at 42.</h2><p>Small systems projects, deep fundamentals, and an expanding body of C work.</p></div><Link className="text-link" href="/42">Explore my 42 journey <span aria-hidden="true">↗</span></Link></div></section>
    </>
  );
}
