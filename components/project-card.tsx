import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index = "01" }: { project: Project; index?: string }) {
  return (
    <article className="project-card">
      <Link className="project-art" href={`/projects/${project.slug}`} aria-label={`Explore ${project.title}`}>
        {project.coverImage ? <Image className="project-art-image" src={project.coverImage} alt="" fill sizes="(max-width: 620px) 100vw, (max-width: 850px) 50vw, 33vw" /> : null}
        <span className="project-art-index">{index}</span>
        <span className="project-art-label">{project.visualLabel}</span>
        <span className="project-art-word">{project.title.split(/[ ·:]/)[0]}</span>
        <span className="project-art-arrow" aria-hidden="true">↗</span>
      </Link>
      <div className="project-card-meta"><span>{project.category}</span>{project.date ? <span>{project.date}</span> : null}</div>
      <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
      <p>{project.summary}</p>
      <Link className="text-link" href={`/projects/${project.slug}`}>Read the project story <span aria-hidden="true">↗</span></Link>
    </article>
  );
}
