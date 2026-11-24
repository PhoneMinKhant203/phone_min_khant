import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { currentFocus, graduateStudyNote } from "@/data/now";
import { studyFocus } from "@/data/education";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Now", "What Phone Min Khant is working on, studying, teaching, and learning right now.", "/now");

export default function NowPage() {
  return (
    <>
      <PageIntro eyebrow="Now · Updated November 2026" title="What I’m working on, and becoming." intro="A snapshot of the work, study, teaching, and learning shaping my next chapter." />
      <section className="section shell">
        <div className="now-list">
          {currentFocus.map((item, index) => <article className="now-item" key={item.label}><span className="now-index">0{index + 1}</span><div className="now-main"><p className="eyebrow">{item.label}</p><h2>{item.title}</h2><p>{item.detail}</p></div><span className="now-marker" aria-hidden="true">↗</span></article>)}
        </div>
      </section>
      <section className="section section-muted"><div className="shell split-feature"><div><p className="eyebrow">Next direction</p><h2>Graduate study & research</h2></div><div className="split-feature-body"><p>{graduateStudyNote}</p><div className="tag-list large-tags">{studyFocus.map((entry) => <span key={entry}>{entry}</span>)}</div><p className="quiet-note">Formal programme and research details will be added once confirmed.</p></div></div></section>
      <section className="section shell section-cta-row"><div><p className="eyebrow">Looking for more context?</p><h2>See how the pieces connect.</h2></div><Link className="button button-secondary" href="/timeline">Explore my timeline <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
