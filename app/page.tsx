import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { currentExperience } from "@/data/experience";
import { education } from "@/data/education";
import { site } from "@/data/site";
import { featuredProjects } from "@/data/projects";
import { recentTimeline } from "@/lib/timeline";
import { getPublishedContent, formatDate } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Fintech, Software Engineering & Applied AI",
  "Meet Phone Min Khant: Business Analyst, Software Engineer, educator, and AI researcher in training building at the intersection of fintech, product, software, and AI.",
  "/",
);

export default async function HomePage() {
  const content = await getPublishedContent();
  const featured = content.filter((item) => item.featured);
  const latest = (featured.length ? featured : content).slice(0, 2);
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.siteUrl || undefined,
    email: `mailto:${site.email}`,
    jobTitle: currentExperience.role,
    worksFor: { "@type": "Organization", name: "ThitsaWorks" },
    sameAs: [site.linkedin, site.github].filter(Boolean),
    knowsAbout: ["Fintech", "Payment systems", "Business analysis", "Software engineering", "Applied AI", "Machine learning", "Technical education"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }} />
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="signal-dot" /> Business Analyst · Software Engineer · AI Researcher in Training</p>
          <h1>Building useful products where <em>fintech, software and AI</em> meet.</h1>
          <p className="hero-lead">I’m Phone Min Khant — a Computer Science graduate working across payment systems, product delivery, software engineering, and technical education.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/projects">Explore my work <span aria-hidden="true">↗</span></Link>
            <Link className="button button-quiet" href="/resume">View résumé <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="hero-meta"><span>Based in {site.location}</span><span>Interested in fintech · AI · product</span></div>
        </div>
        <aside className="hero-side" aria-label="Current role">
          <p className="eyebrow">Currently</p>
          <p className="hero-side-role">{currentExperience.role}</p>
          <p className="hero-side-company">{currentExperience.organization}</p>
          <p className="hero-side-copy">Making complex technical work clearer for product, engineering, and partner teams.</p>
          <Link className="arrow-link" href="/now">What I’m focused on <span aria-hidden="true">↗</span></Link>
          <div className="hero-index"><span>01</span><span>WORK · LEARN · SHARE</span></div>
        </aside>
      </section>

      <section className="proof-band">
        <div className="shell proof-grid">
          <div><span className="proof-number">01</span><span className="proof-label">Fintech delivery</span><span className="proof-detail">Requirements · APIs · integration</span></div>
          <div><span className="proof-number">02</span><span className="proof-label">Applied AI research</span><span className="proof-detail">Burmese NLP · RAG · IoT</span></div>
          <div><span className="proof-number">03</span><span className="proof-label">Technical education</span><span className="proof-detail">Teaching · mentoring · content</span></div>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading eyebrow="Selected work" title="Proof, in practice." detail="A few projects that show how I think, build, research, and work with people." />
        <div className="project-grid home-projects">
          {featuredProjects.slice(0, 3).map((project, index) => <ProjectCard project={project} index={`0${index + 1}`} key={project.slug} />)}
        </div>
        <div className="section-tail"><Link className="text-link" href="/projects">Explore all projects <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className="section section-muted">
        <div className="shell split-feature">
          <div className="split-feature-heading"><p className="eyebrow">The through-line</p><h2>From systems thinking to human outcomes.</h2></div>
          <div className="split-feature-body">
            <p>My work has moved from youth programmes and community learning into software engineering, payment systems, and applied AI. The common thread is making complex systems useful, understandable, and accessible.</p>
            <div className="tag-list large-tags"><span>Product thinking</span><span>Technical communication</span><span>Payments</span><span>AI & NLP</span><span>Education</span></div>
            <Link className="text-link" href="/timeline">Explore the full journey <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading eyebrow="Learning in public" title="Ideas, explained clearly." detail="A growing library of technical videos and notes, with YouTube hosting the videos." />
        {latest.length ? (
          <div className="latest-content-grid">
            {latest.map((item) => <Link className="latest-content" href={`/content/${item.slug}`} key={item._id}><span className="latest-content-category">{item.category}{item.publishedAt ? ` · ${formatDate(item.publishedAt)}` : ""}</span><span className="latest-content-title" lang={item.language === "Burmese" ? "my" : item.language === "English" ? "en" : undefined}>{item.title}</span><span className="latest-content-description">{item.description}</span><span className="text-link">Open lesson <span aria-hidden="true">↗</span></span></Link>)}
          </div>
        ) : (
          <div className="content-coming"><div><p className="eyebrow">In progress</p><h3>The video library is ready for its first episode.</h3><p>New lessons will live on YouTube and here as searchable summaries, notes, and topic tags.</p></div><Link className="text-link" href="/content">Visit the content library <span aria-hidden="true">↗</span></Link></div>
        )}
      </section>

      <section className="section section-muted">
        <div className="shell journey-preview">
          <div className="journey-copy"><p className="eyebrow">A career in motion</p><h2>Learning by building, then helping others build.</h2><p>Computer Science at Sunderland, software engineering at 42 Bangkok, research in applied AI, and delivery work in fintech.</p><Link className="text-link" href="/timeline">See the timeline <span aria-hidden="true">↗</span></Link></div>
          <div className="journey-list">
            {recentTimeline.map((item) => <Link className="journey-item" href={item.id === "myanmar-agri-med-ai" ? "/projects/myanmar-agri-med-ai" : item.id === "iot-robotics-research" ? "/projects/iot-robotics-research" : "/timeline"} key={item.id}><time>{item.dateLabel}</time><span>{item.title}</span><span aria-hidden="true">↗</span></Link>)}
          </div>
        </div>
      </section>

      <section className="section shell education-strip">
        <div><p className="eyebrow">Foundation</p><h2>Learning that keeps moving.</h2></div>
        <div className="education-highlight"><span>{education[0].result}</span><strong>{education[0].credential}</strong><small>{education[0].institution} · {education[0].period}</small></div>
        <Link className="text-link" href="/resume">See education & experience <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="opportunity-band">
        <div className="shell opportunity-inner"><div><p className="eyebrow">Open to good conversations</p><h2>Building something thoughtful?</h2><p>I’m interested in work that connects technology with real needs — across fintech, AI, product, and education, including opportunities in Singapore and the wider Southeast Asia region.</p></div><Link className="button button-primary" href="/contact">Let’s talk <span aria-hidden="true">↗</span></Link></div>
      </section>
    </>
  );
}
