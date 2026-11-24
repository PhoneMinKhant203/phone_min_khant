import Link from "next/link";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { teaching } from "@/data/teaching";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Teaching & Mentoring", "Teaching experience in educational technology, C and C# programming, and human–computer interaction at Phaung Daw Oo International University.", "/teaching");

export default function TeachingPage() {
  return (
    <>
      <PageIntro eyebrow="Teaching & mentoring" title="Making technical ideas easier to learn." intro="Teaching strengthens the same skills I use in analysis and engineering: understand the hard part, find a clear explanation, and help someone build confidence through practice." />
      <section className="section shell">
        {teaching.map((item) => <article className="teaching-feature" key={item.slug}><div className="teaching-brand">{item.logoSrc ? <a className="institution-logo-panel teaching-logo-panel" href={item.href} target="_blank" rel="noreferrer" aria-label={`${item.institution} official website`}><Image src={item.logoSrc} alt="" width={700} height={413} sizes="160px" /></a> : null}</div><div><p className="eyebrow">{item.role}</p><h2>{item.institution}</h2><p className="teaching-summary">{item.summary}</p><div className="teaching-columns"><div><p className="eyebrow">Courses</p><ul className="clean-list course-list">{item.courses.map((course) => <li key={course.name}><strong>{course.name}</strong>{course.detail ? <span>{course.detail}</span> : null}</li>)}</ul></div><div><p className="eyebrow">Student years</p><div className="tag-list">{item.studentYears.map((year) => <span key={year}>{year}</span>)}</div><p className="eyebrow teaching-practice-label">Teaching practice</p><ul className="clean-list">{item.teachingApproach.map((entry) => <li key={entry}>{entry}</li>)}</ul></div></div><Link className="text-link" href={`/teaching/${item.slug}`}>Teaching profile <span aria-hidden="true">↗</span></Link></div></article>)}
      </section>
      <section className="section section-muted"><div className="shell split-feature"><div><p className="eyebrow">Why teaching matters</p><h2>Communication is part of engineering.</h2></div><div className="split-feature-body"><p>Preparing lessons and guiding practice make me more precise about assumptions, terminology, and the steps between an idea and a working solution.</p><p>Term dates and course-to-year allocations can be added as those details are confirmed.</p></div></div></section>
    </>
  );
}
