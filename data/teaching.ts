export type TeachingItem = {
  slug: string;
  institution: string;
  role: string;
  period: string;
  summary: string;
  courses: { name: string; detail?: string }[];
  studentYears: string[];
  teachingApproach: string[];
  href?: string;
  logoSrc?: string;
  sealSrc?: string;
};

export const teaching: TeachingItem[] = [
  {
    slug: "phaung-daw-oo-international-university",
    institution: "Phaung Daw Oo International University",
    role: "Tutor / Lecturer",
    period: "June 2026 – Present",
    summary:
      "Teaching students across first, second, and third year in innovative educational technology, programming, and human–computer interaction.",
    courses: [
      { name: "Innovative Educational Technology" },
      { name: "Programming (C and C#)", detail: "From programming fundamentals through advanced object-oriented programming." },
      { name: "Human–Computer Interaction" },
    ],
    studentYears: ["First Year", "Second Year", "Third Year"],
    href: "https://piu.edu.mm/",
    logoSrc: "/images/brand/piu-wordmark.png",
    sealSrc: "/images/brand/piu-seal.png",
    teachingApproach: [
      "Break complex ideas into small, practical steps.",
      "Use examples and exercises to build understanding from fundamentals.",
      "Prepare clear learning materials and support students as they practice.",
    ],
  },
];
