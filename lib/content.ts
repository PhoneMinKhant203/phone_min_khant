import { sanityClient } from "@/sanity/lib/client";
import { allContentQuery, contentBySlugQuery } from "@/sanity/lib/queries";
import type { ContentItem } from "@/lib/content-types";
import { localVideoContent } from "@/data/content";

export type { ContentItem } from "@/lib/content-types";
export { formatDate, youtubeId } from "@/lib/content-types";

export async function getPublishedContent(): Promise<ContentItem[]> {
  if (!sanityClient) return localVideoContent;
  const cmsItems = await sanityClient.fetch<ContentItem[]>(allContentQuery, {}, { next: { revalidate: 60 } });
  const itemsBySlug = new Map<string, ContentItem>(localVideoContent.map((item) => [item.slug, item] as const));
  for (const item of cmsItems) itemsBySlug.set(item.slug, item);
  return [...itemsBySlug.values()].sort((a, b) => {
    const aDate = a.publishedAt ? Date.parse(a.publishedAt) : Number.NaN;
    const bDate = b.publishedAt ? Date.parse(b.publishedAt) : Number.NaN;
    if (Number.isNaN(aDate) && Number.isNaN(bDate)) return 0;
    if (Number.isNaN(aDate)) return 1;
    if (Number.isNaN(bDate)) return -1;
    return bDate - aDate;
  });
}

export async function getContentBySlug(slug: string): Promise<ContentItem | null> {
  if (sanityClient) {
    const item = await sanityClient.fetch<ContentItem | null>(contentBySlugQuery, { slug }, { next: { revalidate: 60 } });
    if (item) return item;
  }
  return localVideoContent.find((item) => item.slug === slug) || null;
}
