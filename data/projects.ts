export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  date?: string;
  summary: string;
  problem: string;
  what: string;
  how: string;
  impact: string;
  technologies: string[];
  links: ProjectLink[];
  coverImage?: string;
  gallery?: { src: string; alt: string; caption?: string }[];
  related?: string[];
  featured?: boolean;
  visualLabel: string;
  legacyTimelineId?: string;
};

export const projects: Project[] = [
  {
    slug: "myanmar-agri-med-ai",
    title: "Myanmar Agri-Med AI",
    category: "Applied AI · NLP",
    date: "March 2026",
    summary:
      "A Burmese-first, domain-specific conversational AI project exploring how localized language models and retrieval can support rural agriculture and health information needs.",
    problem:
      "Rural communities can face barriers to useful, understandable information in their own language. The project explored a focused AI assistant for agriculture and health questions.",
    what:
      "Designed and developed an instruction-tuned conversational system for agriculture and healthcare topics, with separate domain experiences and safety messaging.",
    how:
      "Fine-tuned a lightweight multilingual model with localized data, then added retrieval-augmented generation using FAISS. A Streamlit interface supported domain switching, confidence thresholds, and medical disclaimers.",
    impact:
      "The original project reports 90% semantic match accuracy, a 0.85-second response time, and a 4.67/5 user rating for safety and language clarity. It formed the basis of my undergraduate thesis and is available as an open research record.",
    technologies: ["mT5-small", "LoRA", "RAG", "FAISS", "Streamlit", "Burmese NLP"],
    links: [{ label: "Research record on Zenodo", href: "https://zenodo.org/records/19339756" }],
    coverImage: "/images/Agri_Med/overview.webp",
    gallery: [
      { src: "/images/Agri_Med/Phoneview.webp", alt: "Mobile view of the Myanmar Agri-Med AI interface" },
      { src: "/images/Agri_Med/PhoneView_2.webp", alt: "Second mobile view of the Myanmar Agri-Med AI interface" },
      { src: "/images/Agri_Med/Conversation.webp", alt: "Conversation view from the Myanmar Agri-Med AI project" },
      { src: "/images/Agri_Med/Mapping.webp", alt: "Mapping view from the Myanmar Agri-Med AI project" },
    ],
    related: ["iot-robotics-research", "generative-ai-literacy"],
    featured: true,
    visualLabel: "AI · BURMESE NLP",
    legacyTimelineId: "myanmar-agri-med-ai",
  },
  {
    slug: "iot-robotics-research",
    title: "Smart Autonomous Navigation with IoT-Enhanced Obstacle Detection",
    category: "Research · IoT",
    date: "March 2025",
    summary:
      "An ESP32-based autonomous robot research project exploring low-cost obstacle detection, navigation, and connected spatial data.",
    problem:
      "The research explored how a small, low-cost robot could detect obstacles and navigate while making spatial data available for remote observation.",
    what:
      "Designed and built an autonomous obstacle-detection and avoidance robot using an ESP32 and a three-point ultrasonic sensor array.",
    how:
      "Combined embedded hardware, sensor readings, and the ESP32's wireless capabilities to support real-time navigation and remote data collection.",
    impact:
      "The work was accepted at the 10th International Conference on Big Data Analytics (ICBDA 2025) in Singapore. The full paper is available on Zenodo.",
    technologies: ["ESP32", "Ultrasonic sensors", "Embedded C", "IoT", "Robotics"],
    links: [{ label: "Research paper on Zenodo", href: "https://zenodo.org/records/19335334" }],
    coverImage: "/images/iot/final.webp",
    gallery: [
      { src: "/images/iot/1.webp", alt: "Prototype view from the IoT robotics research project" },
      { src: "/images/iot/2.webp", alt: "Hardware detail from the IoT robotics research project" },
      { src: "/images/iot/3.webp", alt: "Robot testing view from the IoT robotics research project" },
      { src: "/images/iot/4.webp", alt: "Additional testing view from the IoT robotics research project" },
      { src: "/images/iot/5.webp", alt: "Additional hardware view from the IoT robotics research project" },
      { src: "/images/iot/6.webp", alt: "Additional navigation view from the IoT robotics research project" },
    ],
    related: ["myanmar-agri-med-ai"],
    featured: true,
    visualLabel: "RESEARCH · EMBEDDED",
    legacyTimelineId: "iot-robotics-research",
  },
  {
    slug: "sarthin-learning-platform",
    title: "Sarthin · Learning in Burmese",
    category: "EdTech · Social impact",
    date: "2025",
    summary:
      "A social-enterprise learning platform built around accessible IT education for learners in Myanmar.",
    problem:
      "The original idea asked how learners could study coding from anywhere, in their own language, while working around access and local payment barriers.",
    what:
      "Founded and helped build Sarthin, a localized learning platform connecting online IT education with a scholarship model.",
    how:
      "Worked with a cross-functional team on a Moodle-based learning platform, local payment integrations, course delivery, and partnerships supporting access to education.",
    impact:
      "The platform launched a web development course and supported a scholarship initiative for 38 students with Community Partners International and New Future YouthCorner.",
    technologies: ["Moodle", "EdTech", "Local payment integration", "Program design"],
    links: [
      { label: "Visit Sarthin", href: "https://sarthin.com/" },
      { label: "Community Partners International", href: "https://cpintl.org/" },
      { label: "New Future YouthCorner", href: "https://www.cpt-foundation.org/" },
    ],
    coverImage: "/images/Sarthin.webp",
    gallery: [
      { src: "/images/Sarthin/Payment.webp", alt: "Local payment experience from the Sarthin learning platform" },
      { src: "/images/Sarthin/overview.webp", alt: "Overview of the Sarthin learning platform" },
      { src: "/images/Sarthin/scholarship.webp", alt: "Scholarship initiative associated with Sarthin" },
      { src: "/images/Sarthin/Web.webp", alt: "Web development learning content on Sarthin" },
    ],
    related: ["offline-virtual-learning-system", "sarthin-virtual-campus"],
    featured: true,
    visualLabel: "EDTECH · ACCESS",
    legacyTimelineId: "sarthin-platform-launch",
  },
  {
    slug: "offline-virtual-learning-system",
    title: "Offline Virtual Learning System",
    category: "EdTech · Offline access",
    summary: "A Raspberry Pi-based learning hotspot designed to make digital education resources available without continuous internet access.",
    problem: "Learners in low-connectivity settings may not be able to rely on continuous access to online education resources.",
    what: "Engineered a Raspberry Pi-based offline learning hotspot to provide access to digital educational resources.",
    how: "Designed local content delivery so learners can access stored learning materials through a local connection, even when internet access is limited or unavailable.",
    impact: "The project explored a practical way to make digital learning resources available in low-connectivity environments. Deployment scale and usage results were not provided.",
    technologies: ["Raspberry Pi", "Offline content delivery", "EdTech"],
    links: [],
    related: ["sarthin-learning-platform"],
    visualLabel: "EDTECH · OFFLINE ACCESS",
  },
  {
    slug: "sarthin-virtual-campus",
    title: "Sarthin Virtual Campus",
    category: "EdTech · Virtual learning",
    summary: "A WorkAdventure-based virtual environment designed to support online community interaction and learning activities.",
    problem: "Online learning communities can benefit from shared spaces for interaction beyond course pages and video calls.",
    what: "Deployed an interactive virtual campus using WorkAdventure as part of the Sarthin learning ecosystem.",
    how: "Configured the virtual environment to support online community interaction and immersive learning activities.",
    impact: "Extended the Sarthin learning ecosystem with a shared virtual space. Usage and outcome metrics were not provided.",
    technologies: ["WorkAdventure", "Virtual campus", "Digital learning"],
    links: [{ label: "Visit Sarthin", href: "https://sarthin.com/" }],
    related: ["sarthin-learning-platform"],
    visualLabel: "EDTECH · VIRTUAL CAMPUS",
  },
  {
    slug: "generative-ai-literacy",
    title: "Generative AI Literacy Programme",
    category: "AI · Teaching",
    date: "December 2023 – March 2024",
    summary:
      "A multi-organization programme that introduced practical generative AI workflows to nonprofit, community, and institutional teams in Myanmar.",
    problem:
      "Many teams were curious about generative AI but needed practical guidance on using it for communications, content, and everyday workflows.",
    what:
      "Coordinated and co-taught more than 25 AI literacy workshops, including sessions for UNDP Myanmar, 22 civil society organizations, KBZ Bank, and a large public event at the American Center.",
    how:
      "Prepared learning activities on prompt engineering, workflow improvement, and AI-assisted multimedia, adapting examples for nonprofit and institutional needs.",
    impact:
      "The programme recorded a 4.7/5 satisfaction rating. The original portfolio reports over 180 attendees at the American Center event.",
    technologies: ["Generative AI", "Prompt design", "Curriculum development", "Facilitation"],
    links: [
      { label: "UNDP Myanmar", href: "https://www.undp.org/myanmar" },
      { label: "KBZ Bank", href: "https://www.kbzbank.com/en/" },
    ],
    coverImage: "/images/ai/ac.webp",
    gallery: [
      { src: "/images/ai/bank.webp", alt: "Generative AI literacy session for a banking audience" },
      { src: "/images/ai/co.webp", alt: "Generative AI literacy workshop" },
      { src: "/images/ai/cso.webp", alt: "Generative AI literacy session with civil society participants" },
      { src: "/images/ai/un.webp", alt: "Generative AI literacy session with UNDP Myanmar" },
    ],
    featured: true,
    visualLabel: "AI · CAPACITY BUILDING",
    legacyTimelineId: "generative-ai-capacity-building",
  },
  {
    slug: "nextgen-impact",
    title: "NextGen Impact",
    category: "Community · Social impact",
    date: "March – August 2023",
    summary:
      "A youth-led community initiative focused on education, mental wellness, and practical support.",
    problem:
      "Young people and local communities needed accessible spaces for learning, wellbeing, and mutual support during a period of instability.",
    what:
      "Co-founded a youth-led nonprofit initiative and helped coordinate volunteers across community support activities.",
    how:
      "Organized fundraising, donation drives, and knowledge-sharing workshops with a volunteer team.",
    impact:
      "The initiative mobilized grassroots educational and psychosocial support. The original portfolio does not provide a quantified outcome.",
    technologies: ["Community organizing", "Volunteer coordination", "Fundraising"],
    links: [],
    coverImage: "/images/ngi/overview.webp",
    gallery: [
      { src: "/images/ngi/founders.webp", alt: "NextGen Impact founding team" },
      { src: "/images/ngi/1.webp", alt: "Community activity organized by NextGen Impact" },
      { src: "/images/ngi/2.webp", alt: "Community activity organized by NextGen Impact" },
      { src: "/images/ngi/3.webp", alt: "Community activity organized by NextGen Impact" },
      { src: "/images/ngi/4.webp", alt: "Community activity organized by NextGen Impact" },
    ],
    visualLabel: "COMMUNITY · ACTION",
    legacyTimelineId: "nextgen-impact-initiatives",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
