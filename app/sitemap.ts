import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { fortyTwoProjects } from "@/data/42-projects";
import { experience } from "@/data/experience";
import { siteUrl } from "@/data/site";
import { getPublishedContent } from "@/lib/content";

export const revalidate = 60;

const staticPaths = ["/", "/now", "/work", "/teaching", "/teaching/phaung-daw-oo-international-university", "/projects", "/42", "/content", "/timeline", "/resume", "/contact"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!siteUrl("/")) return [];
  const base = siteUrl("/")!;
  const now = new Date();
  const urls = [
    ...staticPaths.map((path) => ({ url: siteUrl(path)!, lastModified: now })),
    ...experience.map((item) => ({ url: siteUrl(`/experience/${item.slug}`)!, lastModified: now })),
    ...projects.map((project) => ({ url: siteUrl(`/projects/${project.slug}`)!, lastModified: now })),
    ...fortyTwoProjects.map((project) => ({ url: siteUrl(`/42/${project.slug}`)!, lastModified: now })),
  ];
  const content = await getPublishedContent();
  urls.push(...content.map((item) => ({ url: siteUrl(`/content/${item.slug}`)!, lastModified: item.publishedAt ? new Date(item.publishedAt) : now })));
  return urls.map((entry) => ({ ...entry, url: new URL(entry.url, base).toString() }));
}
