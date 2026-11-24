import { notFound } from "next/navigation";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { teaching } from "@/data/teaching";
import { pageMetadata } from "@/lib/metadata";

const item = teaching.find((entry) => entry.slug === "phaung-daw-oo-international-university");

export const metadata = pageMetadata("Tutor / Lecturer · Phaung Daw Oo International University", "Phone Min Khant’s teaching experience in educational technology, C and C# programming, and human–computer interaction at Phaung Daw Oo International University.", "/teaching/phaung-daw-oo-international-university");

export default function PhaungDawOoPage() {
  if (!item) notFound();
  return (
    <>
      <PageIntro eyebrow="Teaching experience" title={item.institution} intro={item.role} />
      <section className="section shell detail-layout"><div className="detail-main"><div className="story-block"><p className="eyebrow">Teaching</p><p>{item.summary}</p></div><div className="story-block"><p className="eyebrow">Courses</p><ul className="clean-list course-list">{item.courses.map((course) => <li key={course.name}><strong>{course.name}</strong>{course.detail ? <span>{course.detail}</span> : null}</li>)}</ul></div><div className="story-block"><p className="eyebrow">Student years</p><div className="tag-list">{item.studentYears.map((year) => <span key={year}>{year}</span>)}</div></div><div className="story-block"><p className="eyebrow">Approach</p><ul className="clean-list">{item.teachingApproach.map((entry) => <li key={entry}>{entry}</li>)}</ul></div></div><aside className="detail-aside"><p className="eyebrow">Institution</p>{item.sealSrc ? <div className="institution-seal-panel"><Image src={item.sealSrc} alt={`${item.institution} seal`} width={960} height={960} sizes="150px" /></div> : null}<p>Role: {item.role}</p>{item.href ? <a className="text-link" href={item.href} target="_blank" rel="noreferrer">Visit official website <span aria-hidden="true">↗</span></a> : null}<p className="quiet-note">Teaching dates are not listed yet.</p></aside></section>
    </>
  );
}
