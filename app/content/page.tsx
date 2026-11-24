import { PageIntro } from "@/components/page-intro";
import { ContentLibrary } from "@/components/content-library";
import { getPublishedContent } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Videos & Notes", "Search Phone Min Khant’s library of videos and notes on AI, machine learning, software engineering, computer science, fintech, and learning.", "/content");

export default async function ContentPage() {
  const items = await getPublishedContent();
  return <><PageIntro eyebrow="Content library" title="Learnings, made searchable." intro="Technical lessons and notes across AI, software, computer science, fintech, and learning. Videos are hosted on YouTube; this site keeps the useful context around them." /><section className="section shell content-library-section"><ContentLibrary items={items} /></section></>;
}
