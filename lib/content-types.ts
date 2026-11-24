export type ContentItem = {
  _id: string;
  title: string;
  slug: string;
  format: "video" | "article";
  publishedAt?: string;
  youtubeUrl?: string;
  youtubeVideoId?: string;
  description: string;
  summary: string;
  category: string;
  tags: string[];
  language?: string;
  featured: boolean;
  thumbnailUrl?: string;
  thumbnailAlt?: string;
  externalLinks: { label: string; url: string }[];
  relatedContent: Pick<ContentItem, "_id" | "title" | "slug" | "category" | "publishedAt">[];
  transcript?: string;
};

export function youtubeId(item: Pick<ContentItem, "youtubeUrl" | "youtubeVideoId">) {
  if (item.youtubeVideoId) return item.youtubeVideoId;
  if (!item.youtubeUrl) return undefined;
  try {
    const url = new URL(item.youtubeUrl);
    if (url.hostname === "youtu.be") return url.pathname.slice(1) || undefined;
    if (url.hostname.endsWith("youtube.com")) {
      if (url.pathname.startsWith("/embed/")) return url.pathname.split("/")[2];
      if (url.pathname === "/watch") return url.searchParams.get("v") || undefined;
      if (url.pathname.startsWith("/shorts/")) return url.pathname.split("/")[2];
    }
  } catch {
    return undefined;
  }
  return undefined;
}

export function formatDate(value?: string | null) {
  if (!value) return "Date not listed";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Date not listed";
  return new Intl.DateTimeFormat("en", { dateStyle: "long", timeZone: "UTC" }).format(date);
}
