export type ExperienceItem = {
  slug: string;
  organization: string;
  role: string;
  period?: string;
  summary: string;
  responsibilities: string[];
  capabilities: string[];
  href?: string;
  logoSrc?: string;
  featured?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    slug: "thitsaworks",
    organization: "ThitsaWorks",
    role: "Business Analyst",
    period: "May 2026 – Present",
    summary:
      "Contributed to the implementation and launch of an interoperable national payment switch in Guinea. Work across product, engineering, and financial institutions to turn business needs into clear integration requirements and testable delivery.",
    responsibilities: [
      "Translate business and partner requirements into technical specifications and integration requirements with product and engineering teams.",
      "Support financial-service-provider onboarding through API mapping, functional testing, error analysis, and transaction-flow validation.",
      "Investigate integration issues across APIs and distributed components, coordinating technical follow-up and production-readiness activities.",
    ],
    capabilities: [
      "Requirements analysis",
      "Payment systems",
      "API testing",
      "Technical writing",
      "Stakeholder coordination",
      "Delivery tracking",
    ],
    logoSrc: "/images/brand/thitsaworks-horizontal.png",
    featured: true,
  },
  {
    slug: "sarthin",
    organization: "Sarthin.com",
    role: "Founder & Product Owner",
    period: "April 2025 – Present",
    summary:
      "Founded and lead the development of an EdTech platform focused on accessible online learning and technology education.",
    responsibilities: [
      "Set the platform direction, learning-management infrastructure, user workflows, and product roadmap.",
      "Integrated external APIs and local payment infrastructure to support course enrollment and platform operations.",
      "Coordinate technical development, educational content, operations, and partnerships while improving the learner experience.",
    ],
    capabilities: [
      "Product ownership",
      "EdTech",
      "Learning management systems",
      "API integration",
      "Local payments",
      "Partnership coordination",
    ],
    href: "https://sarthin.com/",
    logoSrc: "/images/brand/sarthin-wordmark.png",
  },
  {
    slug: "yssw-program-coordination",
    organization: "Yangon School of Social Work (YSSW)",
    role: "Project Coordinator & Youth Ambassador",
    period: "September 2023 – May 2025",
    summary:
      "Coordinated international programme operations and partner collaboration for an online Diploma in Social Work initiative.",
    responsibilities: [
      "Coordinated student enrollment and programme operations across Myanmar, Thailand, and Bangladesh.",
      "Worked with external partners, including UNDP and FNF Germany, on technical and operational activities.",
      "Supported more than 27 workshops and major events involving over 180 participants, including budgeting, logistics, and stakeholder coordination.",
    ],
    capabilities: [
      "Program operations",
      "Cross-functional coordination",
      "Digital learning",
      "International collaboration",
    ],
    href: "https://yssw.org/",
    logoSrc: "/images/brand/yssw-wordmark.png",
  },
];

export const currentExperience = experience.find((item) => item.featured)!;
