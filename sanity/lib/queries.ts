import { defineQuery } from "next-sanity";

export const allContentQuery = defineQuery(`*[_type == "contentItem" && defined(publishedAt) && publishedAt <= now()] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  format,
  publishedAt,
  youtubeUrl,
  youtubeVideoId,
  description,
  summary,
  category,
  language,
  "tags": coalesce(tags, []),
  "featured": coalesce(featured, false),
  "thumbnailUrl": thumbnail.asset->url,
  "thumbnailAlt": thumbnail.altText,
  "externalLinks": coalesce(externalLinks[]{label, url}, []),
  "relatedContent": coalesce(relatedContent[]->{_id, title, "slug": slug.current, category, publishedAt}, [])
}`);

export const contentBySlugQuery = defineQuery(`*[_type == "contentItem" && slug.current == $slug && defined(publishedAt) && publishedAt <= now()][0] {
  _id,
  title,
  "slug": slug.current,
  format,
  publishedAt,
  youtubeUrl,
  youtubeVideoId,
  description,
  summary,
  category,
  language,
  "tags": coalesce(tags, []),
  "featured": coalesce(featured, false),
  transcript,
  "thumbnailUrl": thumbnail.asset->url,
  "thumbnailAlt": thumbnail.altText,
  "externalLinks": coalesce(externalLinks[]{label, url}, []),
  "relatedContent": coalesce(relatedContent[]->{_id, title, "slug": slug.current, category, publishedAt}, [])
}`);
