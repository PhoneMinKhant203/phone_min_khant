import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { fortyTwoProjects, getFortyTwoProject } from "@/data/42-projects";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return fortyTwoProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getFortyTwoProject(slug);
  if (!project) return {};
  return pageMetadata(`${project.name} · 42 Bangkok`, project.summary, `/42/${project.slug}`);
}

export default async function FortyTwoProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getFortyTwoProject(slug);
  if (!project) notFound();
  return (
    <>
      <PageIntro eyebrow="42 Bangkok · Project notes" title={project.name} intro={project.summary} />
      <section className="section shell detail-layout"><div className="detail-main"><div className="story-block"><p className="eyebrow">What I Did</p><p>{project.what}</p></div><div className="story-block"><p className="eyebrow">What I Learned</p><ul className="clean-list">{project.learning.map((entry) => <li key={entry}>{entry}</li>)}</ul></div><div className="story-block"><p className="eyebrow">Key concepts</p><div className="tag-list">{project.concepts.map((entry) => <span key={entry}>{entry}</span>)}</div></div></div><aside className="detail-aside"><p className="eyebrow">Source</p>{project.githubUrl ? <a className="text-link" href={project.githubUrl} target="_blank" rel="noreferrer">View source on GitHub <span aria-hidden="true">↗</span></a> : <p className="quiet-note">GitHub repository URL to add.</p>}<div className="aside-rule"></div><Link className="text-link" href="/42">Back to 42 projects <span aria-hidden="true">↗</span></Link></aside></section>
    </>
  );
}
