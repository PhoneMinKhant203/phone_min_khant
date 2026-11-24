export const site = {
  name: "Phone Min Khant",
  shortName: "PMK",
  roleLine: "Business Analyst · Software Engineer · AI Researcher in Training",
  description:
    "Phone Min Khant works across fintech, software engineering, technical education, and applied AI research.",
  email: "phoneminkhant1030501@gmail.com",
  linkedin: "https://www.linkedin.com/in/phone-min-khant/",
  github: "https://github.com/PhoneMinKhant203",
  youtube: "",
  facebook: "",
  tiktok: "",
  resumePdf: "/files/Phone_Min_Khant_CV.pdf",
  location: "Bangkok, Thailand",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.mgphone.me",
};

export const siteNavigation = [
  { href: "/", label: "Home" },
  { href: "/now", label: "Now" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/42", label: "42" },
  { href: "/teaching", label: "Teaching" },
  { href: "/content", label: "Content" },
  { href: "/timeline", label: "Timeline" },
];

export const siteUrl = (path = "") => {
  if (!site.siteUrl) return undefined;
  return new URL(path, site.siteUrl).toString();
};
