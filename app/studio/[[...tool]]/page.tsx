import Link from "next/link";
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import { site } from "@/data/site";

export const dynamic = "force-static";
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return <div className="studio-setup"><p className="eyebrow">Sanity Studio</p><h1>Content publishing is ready to connect.</h1><p>Add a Sanity project ID and dataset to the environment variables to activate the video and article editor.</p><p>After setup, open this route at <code>/studio</code> to publish without editing site code.</p><Link className="text-link" href="/content">View the content library <span aria-hidden="true">↗</span></Link><span className="sr-only">{site.name}</span></div>;
  }
  return <div className="studio-shell"><NextStudio config={config} /></div>;
}
