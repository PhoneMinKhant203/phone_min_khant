import Link from "next/link";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <p className="eyebrow">Keep in touch</p>
          <h2>Good work starts with a conversation.</h2>
          <p className="footer-copy">For thoughtful opportunities, research, teaching, or collaboration.</p>
        </div>
        <div className="footer-actions">
          <a className="text-link" href={`mailto:${site.email}`}>Email Phone <span aria-hidden="true">↗</span></a>
          <a className="text-link" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          {site.github ? <a className="text-link" href={site.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a> : null}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <div><Link href="/resume">Résumé</Link><Link href="/timeline">Journey</Link><Link href="/contact">Contact</Link></div>
        </div>
      </div>
    </footer>
  );
}
