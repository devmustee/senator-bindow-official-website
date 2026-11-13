export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jibrillabindow.com",
  name: "Muhammadu Umaru Jibrilla Bindow",
  shortName: "Jibrilla Bindow",
  description:
    "The documented life, public service and record of Muhammadu Umaru Jibrilla Bindow, Governor of Adamawa State from 2015 to 2019 and Senator for Adamawa North from 2011 to 2015.",
};

export const nav: { href: string; label: string }[] = [
  { href: "/biography", label: "Biography" },
  { href: "/career", label: "Public Service" },
  { href: "/governorship", label: "Governorship" },
  { href: "/projects", label: "Projects" },
  { href: "/senate", label: "Senate" },
  { href: "/timeline", label: "Timeline" },
  { href: "/media", label: "Media" },
];

export const footerNav: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "His Story",
    links: [
      { href: "/biography", label: "Biography" },
      { href: "/education", label: "Education" },
      { href: "/timeline", label: "Life Timeline" },
      { href: "/leadership", label: "Leadership & Values" },
    ],
  },
  {
    heading: "Public Record",
    links: [
      { href: "/career", label: "Political & Public Career" },
      { href: "/governorship", label: "Governorship 2015–2019" },
      { href: "/projects", label: "Projects Index" },
      { href: "/senate", label: "Senate 2011–2015" },
      { href: "/achievements", label: "Achievements" },
      { href: "/awards", label: "Awards & Recognition" },
    ],
  },
  {
    heading: "Archive",
    links: [
      { href: "/gallery", label: "Photo Gallery" },
      { href: "/media", label: "Media & Press" },
      { href: "/speeches", label: "Speeches & Remarks" },
      { href: "/sources", label: "Sources & Verification" },
      { href: "/contact", label: "Contact" },
    ],
  },
];
