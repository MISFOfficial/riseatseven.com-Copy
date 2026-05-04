export interface WorkItem {
  id: number;
  title: string;
  year: string;
  image: string;
  color: string;
  service: string;
  description: string;
  href: string;
}

export const featuredWork: WorkItem[] = [
  {
    id: 8366,
    title: "SIXT",
    year: "2023-2025",
    image: "/rise_files/sixt-1.jpg",
    color: "#cb7b3a",
    service: "Car rental",
    description: "An extra 3m clicks regionally through SEO",
    href: "/work/sixt",
  },
  {
    id: 7670,
    title: "Dojo - B2B",
    year: "2021-2025",
    image: "/rise_files/dojo-go-product-shot-1.jpg",
    color: "#fdd8c4",
    service: "Card Machines",
    description: "A B2B success story for Dojo card machines",
    href: "/work/dojo",
  },
  {
    id: 19708,
    title: "Magnet Trade - B2B",
    year: "2023-2024",
    image: "/rise_files/Screenshot-2026-02-07-at-17.01.43.png",
    color: "#d8c4fd",
    service: "B2B Marketing",
    description: "A full service SEO success story 170%+ increase",
    href: "/work/magnet-trade",
  },
  {
    id: 16982,
    title: "Leading E Sim brand",
    year: "2023-2025",
    image: "/rise_files/eSIM-Europe-p1-what-is-eSIM-2-1.jpg",
    color: "#cb7b3a",
    service: "Esims",
    description: "Increasing brand and non brand visibility UK/ES",
    href: "/work/esim",
  },
  {
    id: 17067,
    title: "JD Sports",
    year: "2025",
    image: "/rise_files/maxresdefault_2025-10-22-141838_nmnu.jpg",
    color: "#3a8ccb",
    service: "Trainers",
    description: "65% up YoY in clicks for JDSports FR, IT, ES",
    href: "/work/jd-sports",
  },
];