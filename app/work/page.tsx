import Link from "next/link";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { teaching } from "@/data/teaching";
import { pageMetadata } from "@/lib/metadata";
import type { ExperienceItem } from "@/data/experience";
import type { TeachingItem } from "@/data/teaching";

export const metadata = pageMetadata(
  "Work & Experience",
  "Professional experience across fintech, software delivery, digital education, and programme coordination.",
  "/work",
);

function ExperienceCard({
  item,
  number,
}: {
  item: ExperienceItem;
  number: number;
}) {
  return (
    <article className="experience-card" key={item.slug}>
      <div className="experience-number">
        {String(number).padStart(2, "0")}
      </div>

      <div className="experience-main">
        {item.logoSrc ? (
          <div className="work-company-logo">
            <Image
              src={item.logoSrc}
              alt={`${item.organization} logo`}
              width={1796}
              height={594}
              sizes="205px"
            />
          </div>
        ) : null}

        <p className="eyebrow">{item.period || "Experience"}</p>
        <h2>{item.role}</h2>
        <h3>{item.organization}</h3>
        <p className="experience-summary">{item.summary}</p>

        <ul className="clean-list">
          {item.responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>

        <div className="tag-list">
          {item.capabilities.map((entry) => (
            <span key={entry}>{entry}</span>
          ))}
        </div>

        <Link className="text-link" href={`/experience/${item.slug}`}>
          View experience story <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}

function TeachingCard({
  item,
  number,
}: {
  item: TeachingItem;
  number: number;
}) {
  return (
    <article className="experience-card" key={`teaching-${item.slug}`}>
      <div className="experience-number">
        {String(number).padStart(2, "0")}
      </div>

      <div className="experience-main">
        {item.logoSrc ? (
          <div className="work-company-logo">
            <Image
              src={item.logoSrc}
              alt={`${item.institution} logo`}
              width={700}
              height={413}
              sizes="205px"
            />
          </div>
        ) : null}

        <p className="eyebrow">{item.period || "Teaching"}</p>
        <h2>{item.role}</h2>
        <h3>{item.institution}</h3>
        <p className="experience-summary">{item.summary}</p>

        <ul className="clean-list">
          {item.courses.map((course) => (
            <li key={course.name}>
              <strong>{course.name}</strong>
              {course.detail ? ` — ${course.detail}` : ""}
            </li>
          ))}
        </ul>

        <div className="tag-list">
          {item.studentYears.map((year) => (
            <span key={year}>{year}</span>
          ))}
        </div>

        <Link className="text-link" href={`/teaching/${item.slug}`}>
          View teaching profile <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}

export default function WorkPage() {
  const thitsaworks = experience.filter((item) => item.slug === "thitsaworks");
  const otherExperience = experience.filter(
    (item) => item.slug !== "thitsaworks",
  );

  return (
    <>
      <PageIntro
        eyebrow="Work & experience"
        title="Technical work, grounded in people and delivery."
        intro="I work across business analysis, payment systems, software engineering, and programme delivery. Each role has strengthened how I connect technical detail with a clear outcome."
      />

      <section className="section shell">
        <div className="experience-list">
          {thitsaworks.map((item, index) => (
            <ExperienceCard
              item={item}
              number={index + 1}
              key={item.slug}
            />
          ))}

          {teaching.map((item, index) => (
            <TeachingCard
              item={item}
              number={thitsaworks.length + index + 1}
              key={item.slug}
            />
          ))}

          {otherExperience.map((item, index) => (
            <ExperienceCard
              item={item}
              number={thitsaworks.length + teaching.length + index + 1}
              key={item.slug}
            />
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Education</p>
              <h2>Computer science, built from fundamentals.</h2>
            </div>
            <Link className="text-link" href="/resume">
              Résumé view <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="education-list">
            {education.map((item) => (
              <div
                className="education-row"
                key={item.institution + item.credential}
              >
                <span>{item.period || ""}</span>
                <div>
                  {item.logoSrc ? (
                    <div className="work-company-logo">
                      <Image
                        src={item.logoSrc}
                        alt={`${item.institution} logo`}
                        width={1070}
                        height={456}
                        sizes="205px"
                      />
                    </div>
                  ) : null}
                  <h3>{item.credential}</h3>
                  <p>{item.institution}</p>
                </div>
                <strong>{item.result}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell section-cta-row">
        <div>
          <p className="eyebrow">Professional context</p>
          <h2>Payment work described responsibly.</h2>
          <p className="section-detail">
            My fintech experience is described at a public portfolio level and
            avoids client, customer, production, and internal system details.
          </p>
        </div>
        <Link className="button button-secondary" href="/contact">
          Contact me <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}