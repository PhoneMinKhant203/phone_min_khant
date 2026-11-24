import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  intro,
  titleLang,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  titleLang?: string;
}) {
  return (
    <section className="page-intro shell">
      <p className="eyebrow">{eyebrow}</p>
      <h1 lang={titleLang}>{title}</h1>
      <p className="page-lead">{intro}</p>
    </section>
  );
}
