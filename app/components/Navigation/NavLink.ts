export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  id: string;
  href: string;
  items?: string[]; // Simplified for now as per current components
  badge?: string;
  hasPlus?: boolean;
}

export const navLinks: NavLink[] = [
  {
    label: "Services",
    id: "services",
    href: "/services",
    hasPlus: true,
    items: [
      "Search & Growth Strategy",
      "Onsite SEO",
      "Content Experience",
      "B2B Marketing",
      "Digital PR",
      "Social Media & Campaigns",
      "Data & Insights",
      "Social SEO/Search",
    ],
  },
  {
    label: "International",
    id: "international",
    href: "/international",
    hasPlus: true,
    items: [
      "US Digital PR",
      "Spain Digital PR",
      "Germany Digital PR",
      "Netherlands Digital PR",
    ],
  },
  {
    label: "About",
    id: "about",
    href: "/about",
    hasPlus: true,
    items: [
      "About Us",
      "Meet The Risers",
      "Culture",
      "Testimonials",
    ],
  },
  { label: "Work", id: "work", href: "/work", badge: "25" },
  { label: "Careers", id: "careers", href: "/careers" },
  { label: "Blog", id: "blog", href: "/blog" },
  { label: "Webinars", id: "webinars", href: "/webinars" },
];