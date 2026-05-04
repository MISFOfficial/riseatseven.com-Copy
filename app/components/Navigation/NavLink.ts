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
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
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
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
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
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    items: ["About Us", "Meet The Risers", "Culture", "Testimonials"],
  },
  { label: "Work", id: "work", href: "/work", badge: "25" },
  { label: "Careers", id: "careers", href: "/careers" },
  { label: "Blog", id: "blog", href: "/blog" },
  { label: "Webinars", id: "webinars", href: "/webinars" },
];
