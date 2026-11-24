"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ContentItem } from "@/lib/content-types";
import { formatDate } from "@/lib/content-types";

function compareByNewest(a: ContentItem, b: ContentItem) {
  const aDate = a.publishedAt ? Date.parse(a.publishedAt) : Number.NaN;
  const bDate = b.publishedAt ? Date.parse(b.publishedAt) : Number.NaN;
  if (Number.isNaN(aDate) && Number.isNaN(bDate)) return 0;
  if (Number.isNaN(aDate)) return 1;
  if (Number.isNaN(bDate)) return -1;
  return bDate - aDate;
}

function compareByOldest(a: ContentItem, b: ContentItem) {
  const aDate = a.publishedAt ? Date.parse(a.publishedAt) : Number.NaN;
  const bDate = b.publishedAt ? Date.parse(b.publishedAt) : Number.NaN;
  if (Number.isNaN(aDate) && Number.isNaN(bDate)) return 0;
  if (Number.isNaN(aDate)) return 1;
  if (Number.isNaN(bDate)) return -1;
  return aDate - bDate;
}

export function ContentLibrary({ items }: { items: ContentItem[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const [tag, setTag] = useState("All topics");
  const [year, setYear] = useState("All years");
  const [sort, setSort] = useState("newest");

  const categories = useMemo(() => [...new Set(items.map((item) => item.category))].sort(), [items]);
  const tags = useMemo(() => [...new Set(items.flatMap((item) => item.tags || []))].sort(), [items]);
  const years = useMemo(() => {
    const publishedYears = items.flatMap((item) => item.publishedAt ? [new Date(item.publishedAt).getUTCFullYear().toString()] : []);
    const sortedYears = [...new Set(publishedYears)].sort().reverse();
    return items.some((item) => !item.publishedAt) ? [...sortedYears, "undated"] : sortedYears;
  }, [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items
      .filter((item) => category === "All categories" || item.category === category)
      .filter((item) => tag === "All topics" || item.tags?.includes(tag))
      .filter((item) => {
        if (year === "All years") return true;
        if (year === "undated") return !item.publishedAt;
        return Boolean(item.publishedAt) && new Date(item.publishedAt!).getUTCFullYear().toString() === year;
      })
      .filter((item) => !q || [item.title, item.description, item.summary, item.category, ...(item.tags || [])].join(" ").toLowerCase().includes(q))
      .sort((a, b) => {
        if (sort === "oldest") return compareByOldest(a, b);
        if (sort === "featured") return Number(b.featured) - Number(a.featured) || compareByNewest(a, b);
        if (sort === "relevant" && q) {
          const score = (item: ContentItem) => item.title.toLowerCase().includes(q) ? 2 : (item.tags || []).some((entry) => entry.toLowerCase().includes(q)) ? 1 : 0;
          return score(b) - score(a) || compareByNewest(a, b);
        }
        return compareByNewest(a, b);
      });
  }, [items, query, category, tag, year, sort]);

  return (
    <div className="library-shell">
      <div className="library-controls">
        <label className="search-field">
          <span>Search the library</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try “gradient descent” or “C programming”" />
        </label>
        <label><span>Category</span><select value={category} onChange={(event) => setCategory(event.target.value)}><option>All categories</option>{categories.map((entry) => <option key={entry}>{entry}</option>)}</select></label>
        <label><span>Topic</span><select value={tag} onChange={(event) => setTag(event.target.value)}><option>All topics</option>{tags.map((entry) => <option key={entry}>{entry}</option>)}</select></label>
        <label><span>Year</span><select value={year} onChange={(event) => setYear(event.target.value)}><option>All years</option>{years.map((entry) => <option value={entry} key={entry}>{entry === "undated" ? "Date not listed" : entry}</option>)}</select></label>
        <label><span>Sort</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="newest">Newest</option><option value="oldest">Oldest</option><option value="featured">Featured</option><option value="relevant" disabled={!query}>Most relevant{query ? "" : " (search first)"}</option></select></label>
      </div>
      <p className="results-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? "item" : "items"}</p>
      {filtered.length ? (
        <div className="content-grid">
          {filtered.map((item, index) => (
            <article className="content-card" key={item._id}>
              <Link className={`content-cover tone-${index % 4}`} href={`/content/${item.slug}`} aria-label={`${item.format === "video" ? "Watch" : "Read"} ${item.title}`}>
                {item.thumbnailUrl ? <img src={item.thumbnailUrl} alt={item.thumbnailAlt || ""} loading="lazy" /> : <span className="cover-mark">{item.format === "video" ? "▶" : "Aa"}</span>}
                {item.featured ? <span className="featured-flag">Featured</span> : null}
              </Link>
              <div className="content-card-meta"><span>{item.category}</span>{item.publishedAt ? <time dateTime={item.publishedAt}>{formatDate(item.publishedAt)}</time> : null}</div>
              <h2><Link href={`/content/${item.slug}`} lang={item.language === "Burmese" ? "my" : item.language === "English" ? "en" : undefined}>{item.title}</Link></h2>
              <p>{item.description}</p>
              <div className="tag-list">{(item.tags || []).slice(0, 4).map((entry) => <span key={entry}>{entry}</span>)}</div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p className="eyebrow">The library is ready</p>
          <h2>{items.length ? "No items match this search." : "The first lessons are on the way."}</h2>
          <p>{items.length ? "Try a different phrase or clear one of the filters." : "Published YouTube videos and written notes will appear here. Videos stay hosted on YouTube; this site stores their descriptions, tags, and links."}</p>
          {items.length ? <button className="text-button" onClick={() => { setQuery(""); setCategory("All categories"); setTag("All topics"); setYear("All years"); setSort("newest"); }}>Clear filters <span aria-hidden="true">↗</span></button> : null}
        </div>
      )}
    </div>
  );
}
