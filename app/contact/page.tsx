import { PageIntro } from "@/components/page-intro";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contact", "Contact Phone Min Khant about professional opportunities, research, teaching, and collaboration.", "/contact");

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let’s talk about thoughtful work." intro="I’m open to conversations around fintech, payment systems, software, applied AI, technical education, and product-oriented roles across Singapore and the wider Southeast Asia region." />
      <section className="section shell contact-page"><div className="contact-primary"><p className="eyebrow">Email</p><a className="contact-email" href={`mailto:${site.email}`}>{site.email}<span aria-hidden="true">↗</span></a><p>I usually find a direct note easiest. Include a little context about the work or opportunity, and I’ll reply when I can.</p></div><div className="contact-secondary"><p className="eyebrow">Elsewhere</p><a className="contact-social" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>{site.github ? <a className="contact-social" href={site.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a> : null}{site.youtube ? <a className="contact-social" href={site.youtube} target="_blank" rel="noreferrer">YouTube <span aria-hidden="true">↗</span></a> : null}</div></section>
    </>
  );
}
