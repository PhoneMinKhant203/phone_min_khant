import Link from "next/link";
import Image from "next/image";
import { siteNavigation, site } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link className="wordmark" href="/" aria-label="Phone Min Khant home">
          <Image className="wordmark-logo" src="/images/brand/pmk-mage.png" alt="" width={40} height={40} priority />
          <span className="wordmark-name">Phone Min Khant</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {siteNavigation.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>
        <Link className="header-contact" href="/contact">Contact <span aria-hidden="true">↗</span></Link>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span></span><span></span></summary>
          <nav aria-label="Mobile navigation">
            {siteNavigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
            <Link href="/contact">Contact</Link>
          </nav>
        </details>
      </div>
      <span className="sr-only">{site.roleLine}</span>
    </header>
  );
}
