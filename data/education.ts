export type EducationItem = {
  institution: string;
  logoSrc?: string;
  credential: string;
  result: string;
  period?: string;
  verificationUrl?: string;
  certificateImage?: string;
};

export const education: EducationItem[] = [
  {
    institution: "University of Sunderland",
    logoSrc: "/images/brand/university-of-sunderland.png",
    credential: "BSc (Hons) Computer Science",
    result: "First Class Honours",
    period: "March 2026",
    verificationUrl: "https://dcweb-verify.sunderland.ac.uk/?reference=18258014-01-UQQE",
    certificateImage: "/images/education/sunderland-bsc-certificate.png",
  },
  {
    institution: "42 Bangkok",
    credential: "Software Engineering programme",
    result: "In progress · expected 2028",
    period: "August 2025 – Present",
  },
  {
    institution: "Pearson",
    credential: "Higher National Diploma (HND), Computing · Level 5",
    result: "Merit",
    period: "March 2025",
  },
  {
    institution: "Info Myanmar University",
    credential: "Higher National Certificate (HNC), Computing",
    result: "Completed February 2024",
  },
  {
    institution: "OTHM Qualifications",
    credential: "International Award in Business Administration · Level 7",
    result: "Completed",
    period: "September 2022",
  },
];

export const studyFocus = [
  "AI and machine learning",
  "Low-resource language technology and NLP",
  "Fintech products and payment systems",
  "Software engineering",
  "Product thinking and technical communication",
];
