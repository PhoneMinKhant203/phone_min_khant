import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { fortyTwoProjects } from "@/data/42-projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("42 Bangkok", "Phone Min Khant’s software engineering journey at 42 Bangkok, including C projects, systems programming, and algorithmic work.", "/42");

export default function FortyTwoPage() {
  return (
    <>
      <PageIntro eyebrow="42 Bangkok · Software Engineering" title="A practice of building from first principles." intro="At 42, each project turns a concept into something working. This section records the problem, the ideas I practiced, and the repository link when available. The code belongs on GitHub; this site tells the learning story." />
      <section className="section shell">
        <div className="forty-two-summary"><div><p className="eyebrow">Programme</p><h2>Software Engineering</h2><p>42 Bangkok · Expected completion 2028</p></div><div><p className="eyebrow">Progress</p><h2>Exam Rank 02</h2><p>Peer-led, project-based learning</p></div><div><p className="eyebrow">Current foundation</p><h2>C & systems</h2><p>Memory, processes, algorithms, and careful interfaces</p></div></div>
        <div className="forty-two-list">
          {fortyTwoProjects.map((project, index) => <article className="forty-two-row" key={project.slug}><span className="forty-two-index">{String(index + 1).padStart(2, "0")}</span><div><p className="eyebrow">42 Project</p><h2><Link href={`/42/${project.slug}`}>{project.name}</Link></h2><p>{project.summary}</p><div className="tag-list">{project.concepts.slice(0, 4).map((concept) => <span key={concept}>{concept}</span>)}</div></div><Link className="arrow-link" href={`/42/${project.slug}`}>Project notes <span aria-hidden="true">↗</span></Link></article>)}
        </div>
      </section>
      <section className="section section-muted"><div className="shell project-callout"><div><p className="eyebrow">Source code</p><h2>Repositories belong on GitHub.</h2><p>Each project page links to its public repository and focuses on the problem, the learning, and the engineering ideas behind the code.</p></div></div></section>
    </>
  );
}
