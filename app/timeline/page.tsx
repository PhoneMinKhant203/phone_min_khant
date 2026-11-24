import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { timeline } from "@/lib/timeline";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Timeline",
  "A chronological story of Phone Min Khant’s work across software, AI research, fintech, education, and social impact.",
  "/timeline",
);

const destinations: Record<string, string> = {
  "myanmar-agri-med-ai": "/projects/myanmar-agri-med-ai",
  "sarthin-platform-launch": "/projects/sarthin-learning-platform",
  "social-enterprise-evolution-grant": "/projects/sarthin-learning-platform",
  "edtech-innovation-ideation": "/projects/sarthin-learning-platform",
  "iot-robotics-research": "/projects/iot-robotics-research",
  "generative-ai-capacity-building": "/projects/generative-ai-literacy",
  "nextgen-impact-initiatives": "/projects/nextgen-impact",
};

function optimizedImagePath(reference: string) {
  const normalizedReference = reference.startsWith("/")
    ? reference.slice(1)
    : reference;
  const extensionStart = normalizedReference.lastIndexOf(".");
  return `/${normalizedReference.slice(0, extensionStart)}.webp`;
}

export default function TimelinePage() {
  return (
    <>
      <PageIntro
        eyebrow="Timeline · 2020—2026"
        title="A path shaped by building and service."
        intro="A chronological view of the projects, research, education, and community work that shaped how I work today. The story moves from youth organizing and social impact into software, fintech, and applied AI."
      />
      <section className="section shell">
        <div className="timeline-list">
          {timeline.map((item, index) => {
            const images = item.legacyAssetReferences.map(optimizedImagePath);
            return (
              <article className="timeline-entry" key={item.id}>
                <div className="timeline-date-column">
                  <time
                    dateTime={
                      /^[0-9]{4}$/.test(item.dateLabel)
                        ? item.dateLabel
                        : item.sortDate
                    }
                  >
                    {item.dateLabel}
                  </time>
                  <span className="timeline-dot" aria-hidden="true"></span>
                </div>
                <details className="timeline-details">
                  <summary>
                    <span className="timeline-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`timeline-thumb${
                        item.logoSrc || images[0] ? "" : " timeline-thumb-empty"
                      }`}
                      aria-hidden="true"
                    >
                      {item.logoSrc ? (
                        <Image
                          src={item.logoSrc}
                          alt=""
                          fill
                          sizes="(max-width: 620px) 64px, 86px"
                          className="timeline-thumb-logo"
                        />
                      ) : images[0] ? (
                        <Image
                          src={images[0]}
                          alt=""
                          fill
                          sizes="(max-width: 620px) 64px, 86px"
                        />
                      ) : null}
                    </span>
                    <span className="timeline-title-group">
                      <span className="eyebrow">Milestone</span>
                      <strong>{item.title}</strong>
                    </span>
                    <span className="timeline-expand" aria-hidden="true">
                      ＋
                    </span>
                  </summary>
                  <div className="timeline-story">
                    <div>
                      <p className="eyebrow">What I Did</p>
                      <p>{item.what}</p>
                    </div>
                    <div>
                      <p className="eyebrow">How I Did It</p>
                      <p>{item.how}</p>
                    </div>
                    <div>
                      <p className="eyebrow">Success &amp; Impact</p>
                      <p>{item.impact}</p>
                    </div>
                    {images.length > 1 ? (
                      <div
                        className="timeline-gallery"
                        role="group"
                        aria-label={`Images associated with ${item.title}`}
                      >
                        {images.slice(1).map((src) => (
                          <span className="timeline-gallery-frame" key={src}>
                            <Image
                              src={src}
                              alt=""
                              fill
                              sizes="(max-width: 620px) 30vw, 150px"
                            />
                          </span>
                        ))}
                      </div>
                    ) : null}
                    {item.externalLinks.length ? (
                      <div className="timeline-links">
                        {item.externalLinks.map((link) => (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            key={link.href}
                          >
                            {link.label} <span aria-hidden="true">↗</span>
                          </a>
                        ))}
                      </div>
                    ) : null}
                    {destinations[item.id] ? (
                      <Link className="text-link" href={destinations[item.id]}>
                        Open the full project page{" "}
                        <span aria-hidden="true">↗</span>
                      </Link>
                    ) : null}
                  </div>
                </details>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section section-muted">
        <div className="shell timeline-note">
          <p className="eyebrow">Earlier work still matters</p>
          <p>
            Community programmes, teaching, advocacy, and entrepreneurship
            remain part of my professional foundation. They taught me to
            coordinate people, communicate clearly, and keep the intended human
            outcome in view.
          </p>
        </div>
      </section>
    </>
  );
}
