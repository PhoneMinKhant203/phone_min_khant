import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { experience } from "@/data/experience";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return experience.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = experience.find((entry) => entry.slug === slug);
  if (!item) return {};
  return pageMetadata(`${item.role} · ${item.organization}`, item.summary, `/experience/${item.slug}`);
}

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = experience.find((entry) => entry.slug === slug);
  if (!item) notFound();
  const isFintechRole = item.slug === "thitsaworks";
  return (
    <>
      <PageIntro eyebrow={`Experience${item.period ? ` · ${item.period}` : ""}`} title={`${item.role} at ${item.organization}`} intro={item.summary} />
      <section className="section shell detail-layout"><div className="detail-main"><div className="story-block"><p className="eyebrow">The role</p><p>{item.summary}</p></div><div className="story-block"><p className="eyebrow">What I did</p><ul className="clean-list">{item.responsibilities.map((entry) => <li key={entry}>{entry}</li>)}</ul></div><div className="story-block"><p className="eyebrow">How I work</p><p>{isFintechRole ? "Clarify the expected outcome, document system behavior, validate integration responses, and keep product, engineering, and partner teams aligned on open questions and next steps." : "Coordinate people and delivery details around the shared goal, keeping learning experiences and participants at the center."}</p></div><div className="story-block"><p className="eyebrow">Skills demonstrated</p><div className="tag-list">{item.capabilities.map((entry) => <span key={entry}>{entry}</span>)}</div></div></div><aside className="detail-aside"><p className="eyebrow">Work context</p>{item.logoSrc ? <div className="organization-logo-panel"><Image src={item.logoSrc} alt={`${item.organization} logo`} width={1796} height={594} sizes="(max-width: 850px) 80vw, 320px" /></div> : null}<p>{item.organization}</p>{item.href ? <a className="text-link" href={item.href} target="_blank" rel="noreferrer">Organization website <span aria-hidden="true">↗</span></a> : null}{isFintechRole ? <p className="confidential-note">This public summary omits confidential client, customer, production, and internal system information.</p> : null}<div className="aside-rule"></div><Link className="text-link" href="/work">Back to experience <span aria-hidden="true">↗</span></Link></aside></section>
    </>
  );
}
