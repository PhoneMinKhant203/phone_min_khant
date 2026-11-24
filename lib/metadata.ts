import type { Metadata } from "next";
import { site, siteUrl } from "@/data/site";

export function pageMetadata(title: string, description: string, path = "", openGraphType: "website" | "article" = "website"): Metadata {
  const canonical = siteUrl(path);
  const socialImage = siteUrl("/opengraph-image");
  return {
    title,
    description,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      title,
      description,
      type: openGraphType,
      ...(canonical ? { url: canonical } : {}),
      siteName: site.name,
      ...(socialImage ? { images: [{ url: socialImage, width: 1200, height: 630, alt: `${site.name} — work, research, and teaching` }] } : {}),
    },
    twitter: { card: "summary_large_image", title, description, ...(socialImage ? { images: [socialImage] } : {}) },
  };
}
