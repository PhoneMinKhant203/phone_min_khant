import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { getProject, projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata(project.title, project.summary, `/projects/${project.slug}`);
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = (project.related || []).flatMap((entry) => {
    const relatedProject = getProject(entry);
    return relatedProject ? [relatedProject] : [];
  });

  return (
    <>
      <section className="project-hero shell">
        <p className="eyebrow">{project.category}{project.date ? <> <span>·</span> {project.date}</> : null}</p>
        <h1>{project.title}</h1>
        <p className="page-lead">{project.summary}</p>
        <div className="project-hero-art">{project.coverImage ? <Image className="project-hero-image" src={project.coverImage} alt="" fill priority sizes="100vw" /> : null}<span>{project.visualLabel}</span><strong>{project.title}</strong><i aria-hidden="true"></i></div>
        {project.gallery?.length ? <div className="project-gallery">{project.gallery.map((image) => <figure key={image.src}><div className="project-gallery-frame"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 620px) 100vw, 50vw" /></div>{image.caption ? <figcaption>{image.caption}</figcaption> : null}</figure>)}</div> : null}
      </section>
      <section className="section shell detail-layout project-story">
        <div className="detail-main">
          <div className="story-block"><p className="eyebrow">The problem</p><p>{project.problem}</p></div>
          <div className="story-block"><p className="eyebrow">What I Did</p><p>{project.what}</p></div>
          <div className="story-block"><p className="eyebrow">How I Did It</p><p>{project.how}</p></div>
          <div className="story-block"><p className="eyebrow">Success & Impact</p><p>{project.impact}</p></div>
          <div className="story-block"><p className="eyebrow">Technologies & methods</p><div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
        </div>
        <aside className="detail-aside"><p className="eyebrow">Project links</p>{project.links.length ? <ul className="aside-links">{project.links.map((link) => <li key={link.href}><a href={link.href} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a></li>)}</ul> : <p className="quiet-note">Public links will be added if available.</p>}<div className="aside-rule"></div><Link className="text-link" href="/contact">Discuss this work <span aria-hidden="true">↗</span></Link></aside>
      </section>
      {related.length ? <section className="section section-muted"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Related work</p><h2>More of the same thread.</h2></div></div><div className="project-grid">{related.map((entry, index) => <ProjectCard project={entry} index={`0${index + 1}`} key={entry.slug} />)}</div></div></section> : null}
    </>
  );
}
