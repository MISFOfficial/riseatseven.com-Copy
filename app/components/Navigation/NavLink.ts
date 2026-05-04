export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  id: string;
  href: string;
  items?: string[];
  badge?: string;
  hasPlus?: boolean;
  image?: string;
}

export const navLinks: NavLink[] = [
  {
    label: "Services",
    id: "services",
    href: "/services",
    hasPlus: true,
    image: "/rise_files/0B5A7827.jpg",
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
    image: "/rise_files/0B5A7487.jpg",
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
    image: "/rise_files/0B5A6875.jpg",
    items: ["About Us", "Meet The Risers", "Culture", "Testimonials"],
  },
  { label: "Work", id: "work", href: "/work", badge: "25" },
  { label: "Careers", id: "careers", href: "/careers" },
  { label: "Blog", id: "blog", href: "/blog" },
  { label: "Webinars", id: "webinars", href: "/webinars" },
];
