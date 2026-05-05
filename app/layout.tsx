import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmothScroll/SmoothScroll";
import PageReveal from "./components/PageReveal/PageReveal";
import CustomCursor from "./components/CustomCursor/CustomCursor";

export const metadata: Metadata = {
  title: "Rise at Seven | Award Winning Search-First Content Marketing Agency",
  description:
    "Rise at Seven is a search-first content marketing agency with offices in London, Sheffield, Manchester & New York that specialises in SEO, Digital PR, and Content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <SmoothScroll>
        <PageReveal />
        <CustomCursor />
        <body className="min-h-full flex flex-col">{children}</body>
      </SmoothScroll>
    </html>
  );
}
