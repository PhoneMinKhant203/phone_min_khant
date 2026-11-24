import Link from "next/link";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { teaching } from "@/data/teaching";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import type { ExperienceItem } from "@/data/experience";
import type { TeachingItem } from "@/data/teaching";

export const metadata = pageMetadata(
  "Résumé",
  "Web résumé for Phone Min Khant, Business Analyst, Software Engineer, and AI researcher in training.",
  "/resume",
);

function ResumeLogo({ src, alt }: { src?: string; alt: string }) {
  if (!src) return null;

  return (
    <span className="resume-entry-logo">
      <Image src={src} alt={alt} width={150} height={55} sizes="115px" />
    </span>
  );
}

function ResumeExperienceEntry({ item }: { item: ExperienceItem }) {
  return (
    <div className="resume-entry" key={item.slug}>
      <div className="resume-entry-heading">
        <ResumeLogo src={item.logoSrc} alt={`${item.organization} logo`} />
        <div>
          <h3>{item.role}</h3>
          <p>{item.organization}</p>
        </div>
      </div>

      <span>{item.period || ""}</span>

      <ul className="clean-list">
        {item.responsibilities.slice(0, 3).map((entry) => (
          <li key={entry}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

function ResumeTeachingEntry({ item }: { item: TeachingItem }) {
  return (
    <div className="resume-entry" key={item.slug}>
      <div className="resume-entry-heading">
        <ResumeLogo src={item.logoSrc} alt={`${item.institution} logo`} />
        <div>
          <h3>{item.role}</h3>
          <p>{item.institution}</p>
        </div>
      </div>

      <span>{item.period || ""}</span>

      <ul className="clean-list">
        <li>{item.summary}</li>
        {item.courses.map((course) => (
          <li key={course.name}>
            {course.name}
            {course.detail ? ` — ${course.detail}` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ResumePage() {
  const thitsaworks = experience.filter((item) => item.slug === "thitsaworks");
  const otherExperience = experience.filter(
    (item) => item.slug !== "thitsaworks",
  );

  return (
    <>
      <PageIntro
        eyebrow="Résumé"
        title="A concise view of my work so far."
        intro="A professional snapshot across fintech delivery, software engineering, applied AI research, and technical education."
      />

      <section className="section shell resume-page">
        <div className="resume-top">
          <div>
            <p className="eyebrow">Phone Min Khant</p>
            <h2>Business Analyst · Software Engineer · AI Researcher in Training</h2>
            <p>Fintech · Payment systems · Product delivery · Technical education</p>
          </div>

          <div className="resume-contact">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn profile
            </a>
          </div>
        </div>

        <div className="resume-section">
          <p className="eyebrow">Profile</p>
          <p>
            First Class Honours Computer Science graduate with experience across
            financial technology, software engineering, EdTech, and applied AI
            research. I connect business needs with technical delivery and am
            interested in human-centered AI, product development, and
            low-resource language technology.
          </p>
        </div>

        <div className="resume-section">
          <p className="eyebrow">Experience</p>
          <div className="resume-section-content">
            {thitsaworks.map((item) => (
              <ResumeExperienceEntry item={item} key={item.slug} />
            ))}

            {teaching.map((item) => (
              <ResumeTeachingEntry item={item} key={item.slug} />
            ))}

            {otherExperience.map((item) => (
              <ResumeExperienceEntry item={item} key={item.slug} />
            ))}
          </div>
        </div>

        <div className="resume-section">
          <p className="eyebrow">Selected projects &amp; research</p>
          <ul className="resume-projects">
            <li>
              <strong>Myanmar Agri-Med AI</strong>
              <span>
                Burmese NLP, instruction tuning, retrieval-augmented generation,
                FAISS, and Streamlit.
              </span>
            </li>
            <li>
              <strong>IoT Robotics Research</strong>
              <span>
                ESP32-based obstacle detection and navigation research; paper
                published on Zenodo.
              </span>
            </li>
            <li>
              <strong>Offline Virtual Learning System</strong>
              <span>
                Raspberry Pi-based offline learning hotspot for digital
                education resources.
              </span>
            </li>
            <li>
              <strong>Sarthin</strong>
              <span>
                Localized EdTech platform for online learning and technology
                education.
              </span>
            </li>
            <li>
              <strong>Sarthin Virtual Campus</strong>
              <span>
                WorkAdventure-based virtual environment for online community and
                learning activities.
              </span>
            </li>
          </ul>
        </div>

        <div className="resume-section">
          <p className="eyebrow">Research direction</p>
          <p>
            Proposed graduate research on evidence-grounded cognitive state
            tracking from learner–AI dialogue, combining language-model evidence
            extraction with probabilistic knowledge tracing and
            educator-reviewed prerequisite graphs. This is a proposed
            direction, not a completed study.
          </p>
        </div>

        <div className="resume-section">
          <p className="eyebrow">Education</p>
          <div className="resume-section-content">
            {education.map((item) => (
              <div
                className="resume-education"
                key={item.institution + item.credential}
              >
                <div>
                  {item.logoSrc ? (
                    <ResumeLogo
                      src={item.logoSrc}
                      alt={`${item.institution} logo`}
                    />
                  ) : null}
                  <h3>{item.credential}</h3>
                  <p>{item.institution}</p>
                  {item.verificationUrl ? (
                    <a
                      className="resume-verify-link"
                      href={item.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Verify degree <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </div>
                <strong>{item.result}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-section">
          <p className="eyebrow">Technical &amp; professional focus</p>
          <div className="tag-list">
            {[
              "Business analysis",
              "Payments",
              "API testing",
              "C",
              "Python",
              "Machine learning",
              "Burmese NLP",
              "Human-centered AI",
              "Knowledge tracing",
              "Learning analytics",
              "Graph-based ML",
              "RAG",
              "Technical writing",
              "Teaching",
              "Product thinking",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="resume-actions">
          <a className="button button-primary" href={site.resumePdf} download>
            Download résumé PDF <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="section section-muted">
        <div className="shell section-cta-row">
          <div>
            <p className="eyebrow">More detail</p>
            <h2>Explore the work behind the summary.</h2>
          </div>
          <Link className="button button-secondary" href="/projects">
            Projects <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}