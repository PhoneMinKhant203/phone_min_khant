import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { YouTubePlayer } from "@/components/youtube-player";
import { getContentBySlug, getPublishedContent, formatDate, youtubeId } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

export async function generateStaticParams() {
  const items = await getPublishedContent();
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getContentBySlug(slug);
  if (!item) return {};
  return pageMetadata(item.title, item.description, `/content/${item.slug}`, item.format === "article" ? "article" : "website");
}

export default async function ContentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getContentBySlug(slug);
  if (!item) notFound();
  const related = item.relatedContent || [];
  const videoId = youtubeId(item);
  const contentJsonLd = item.format === "video"
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: item.title,
        description: item.description,
        uploadDate: item.publishedAt || undefined,
        thumbnailUrl: item.thumbnailUrl || (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : undefined),
        url: item.youtubeUrl,
        embedUrl: videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : undefined,
        publisher: { "@type": "Person", name: site.name },
      }
    : {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: item.title,
        description: item.description,
        datePublished: item.publishedAt || undefined,
        author: { "@type": "Person", name: site.name },
        publisher: { "@type": "Person", name: site.name },
      };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentJsonLd).replace(/</g, "\\u003c") }} />
      <PageIntro eyebrow={item.publishedAt ? `${item.category} · ${formatDate(item.publishedAt)}` : item.category} title={item.title} titleLang={item.language === "Burmese" ? "my" : item.language === "English" ? "en" : undefined} intro={item.description} />
      <section className="section shell content-detail-layout">
        <article className="content-detail-main">
          {item.format === "video" ? <YouTubePlayer videoId={videoId} title={item.title} thumbnailUrl={item.thumbnailUrl} /> : null}
          <div className="story-block"><p className="eyebrow">Summary</p><p className="content-summary">{item.summary}</p></div>
          {item.transcript ? <details className="transcript"><summary>Read transcript / expanded notes</summary><div>{item.transcript.split("\n").map((line, index) => <p key={`${index}-${line}`}>{line || " "}</p>)}</div></details> : null}
          <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </article>
        <aside className="detail-aside"><p className="eyebrow">Watch & follow</p>{item.youtubeUrl ? <a className="text-link" href={item.youtubeUrl} target="_blank" rel="noreferrer">Open on YouTube <span aria-hidden="true">↗</span></a> : null}{item.externalLinks.map((link) => <a className="text-link" href={link.url} key={link.url} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}<div className="aside-rule"></div><Link className="text-link" href="/content">Back to content library <span aria-hidden="true">↗</span></Link></aside>
      </section>
      {related.length ? <section className="section section-muted"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Continue exploring</p><h2>Related lessons.</h2></div></div><div className="related-content-grid">{related.map((entry) => <Link className="related-content" href={`/content/${entry.slug}`} key={entry._id}><span>{entry.category}</span><strong>{entry.title}</strong><span aria-hidden="true">↗</span></Link>)}</div></div></section> : null}
    </>
  );
}
