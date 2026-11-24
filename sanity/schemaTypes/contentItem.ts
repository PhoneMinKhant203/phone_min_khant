import { defineArrayMember, defineField, defineType } from "sanity";

const categories = [
  "AI & Machine Learning",
  "Software Engineering",
  "Computer Science",
  "Fintech & Product",
  "Teaching & Learning",
  "Career & General Learning",
];

export const contentItem = defineType({
  name: "contentItem",
  title: "Video / Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "format",
      title: "Format",
      type: "string",
      initialValue: "video",
      options: { list: [{ title: "YouTube video", value: "video" }, { title: "Written article", value: "article" }], layout: "radio" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "language",
      title: "Content language",
      type: "string",
      initialValue: "English",
      options: { list: ["English", "Burmese", "Other"] },
    }),
    defineField({
      name: "publishedAt",
      title: "Published date",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
      description: "The video stays on YouTube. The site stores only the link and metadata.",
      hidden: ({ document }) => document?.format === "article",
      validation: (rule) => rule.custom((value, context) => context.document?.format === "video" && !value ? "Add the YouTube URL for this video." : true),
    }),
    defineField({
      name: "youtubeVideoId",
      title: "YouTube video ID (optional)",
      type: "string",
      description: "Fill this only if the video ID cannot be read from the URL.",
      hidden: ({ document }) => document?.format === "article",
    }),
    defineField({
      name: "description",
      title: "Short description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(240),
    }),
    defineField({
      name: "summary",
      title: "Summary / notes",
      type: "text",
      rows: 8,
      description: "A useful written summary for visitors and search engines.",
      validation: (rule) => rule.required().max(6000),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: categories, layout: "dropdown" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Topics / tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
      validation: (rule) => rule.max(12),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail (optional)",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "altText", title: "Alt text", type: "string" })],
    }),
    defineField({
      name: "featured",
      title: "Feature on homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "externalLinks",
      title: "Other links",
      type: "array",
      of: [
        defineArrayMember({
          name: "externalLink",
          type: "object",
          fields: [
            defineField({ name: "label", title: "Link label", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "url", title: "URL", type: "url", validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: "label", subtitle: "url" } },
        }),
      ],
    }),
    defineField({
      name: "relatedContent",
      title: "Related content",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "contentItem" }] })],
      validation: (rule) => rule.max(4),
    }),
    defineField({
      name: "transcript",
      title: "Transcript (optional)",
      type: "text",
      rows: 12,
    }),
  ],
  orderings: [
    { title: "Publication date, newest", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
  preview: { select: { title: "title", subtitle: "category", media: "thumbnail" } },
});
