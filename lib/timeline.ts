import legacyItems from "@/data/timeline.json";

export type TimelineItem = {
  id: string;
  title: string;
  dateLabel: string;
  sortDate: string;
  what: string;
  how: string;
  impact: string;
  logoSrc?: string;
  legacyAssetReferences: string[];
  externalLinks: { label: string; href: string }[];
};

const legacySortDates: Record<string, string> = {
  "myanmar-agri-med-ai": "2026-03-30",
  "sarthin-platform-launch": "2025-12-18",
  "social-enterprise-evolution-grant": "2025-08-01",
  "edtech-innovation-ideation": "2025-04-01",
  "iot-robotics-research": "2025-03-01",
  "global-program-management": "2024-06-01",
  "open-mic-2024-advocacy-inclusion": "2024-05-01",
  "life-skills-for-street-children": "2024-01-01",
  "generative-ai-capacity-building": "2023-12-01",
  "corporate-wellness-trauma-healing": "2023-10-01",
  "asean-economic-roundtable": "2023-08-10",
  "youth-entrepreneurship-award": "2023-07-29",
  "nextgen-impact-initiatives": "2023-03-01",
  "youth-conversation-club-mmu": "2020-04-01",
};

const currentMilestones: TimelineItem[] = [
  {
    id: "business-analyst-thitsaworks",
    title: "Business Analyst at ThitsaWorks",
    dateLabel: "May 2026 – Present",
    sortDate: "2026-05-01",
    what: "Joined ThitsaWorks as a Business Analyst, supporting product and integration delivery for digital payment systems.",
    how: "Connect business requirements with technical specifications, API validation, partner coordination, and delivery follow-up.",
    impact:
      "Building experience across fintech, software delivery, and product thinking. Public descriptions are intentionally kept at a portfolio level.",
    logoSrc: "/images/brand/thitsaworks-horizontal.png",
    legacyAssetReferences: [],
    externalLinks: [],
  },
  {
    id: "bsc-computer-science",
    title: "BSc (Hons) Computer Science · First Class Honours",
    dateLabel: "March 2026",
    sortDate: "2026-03-01",
    what: "Completed a BSc (Hons) in Computer Science at the University of Sunderland.",
    how: "Combined formal computer science study with software engineering practice, research, and technical education work.",
    impact:
      "Graduated with First Class Honours. My undergraduate research focused on Burmese-language AI for agriculture and healthcare information.",
    logoSrc: "/images/brand/university-of-sunderland.png",
    legacyAssetReferences: [],
    externalLinks: [],
  },
  {
    id: "piu-teaching",
    title: "Tutor / Lecturer at Phaung Daw Oo International University",
    dateLabel: "June 2026 – Present",
    sortDate: "2026-06-01",
    what: "Teach Innovative Educational Technology, Programming (C and C#), and Human–Computer Interaction to first-, second-, and third-year students.",
    how: "Prepare lessons and practical learning activities covering programming foundations through object-oriented programming, alongside human–computer interaction.",
    impact:
      "Teaching strengthens my technical communication and mentoring experience.",
    logoSrc: "/images/brand/piu-wordmark.png",
    legacyAssetReferences: [],
    externalLinks: [
      {
        label: "Phaung Daw Oo International University",
        href: "https://piu.edu.mm/",
      },
    ],
  },
];

export const timeline: TimelineItem[] = [
  ...legacyItems.map((item) => ({
    ...item,
    sortDate: legacySortDates[item.id] ?? "1900-01-01",
  })),
  ...currentMilestones,
].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

export const recentTimeline = timeline.slice(0, 3);
