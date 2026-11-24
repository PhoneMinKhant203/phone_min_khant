import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  const sitemap = siteUrl("/sitemap.xml");
  return { rules: { userAgent: "*", allow: "/", disallow: ["/studio", "/studio/"] }, ...(sitemap ? { sitemap } : {}) };
}
