import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site, siteUrl } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: site.siteUrl ? new URL(site.siteUrl) : undefined,
  ...(siteUrl("/") ? { alternates: { canonical: siteUrl("/") } } : {}),
  title: { default: "Phone Min Khant — Fintech, Software & Applied AI", template: "%s · Phone Min Khant" },
  description: site.description,
  openGraph: {
    title: "Phone Min Khant — Fintech, Software & Applied AI",
    description: site.description,
    type: "website",
    siteName: site.name,
    ...(siteUrl("/opengraph-image") ? { images: [{ url: siteUrl("/opengraph-image")!, width: 1200, height: 630, alt: "Phone Min Khant — work, research, and teaching" }] } : {}),
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, ...(siteUrl("/opengraph-image") ? { images: [siteUrl("/opengraph-image")!] } : {}) },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101211",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
