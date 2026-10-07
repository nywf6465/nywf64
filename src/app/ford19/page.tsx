import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { FordNavChrome } from "@/components/FordNavChrome";

export const metadata: Metadata = {
  title: "Article: Lighting at the Fair - Ford Pavilion — Ford — nywf64.com",
  description:
    "Download the Ford Pavilion article — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ford — Article: Lighting at the Fair - Ford Pavilion.
 * Body from legacy ford19.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Ford19Page() {
  return (
    <BrochurePage
      heroLabel="Ford Pavilion"
      titleId="ford19-title"
      title="Article: Lighting at the Fair - Ford Pavilion"
      hero={{
        src: "/images/fordoverview/hero-banner.jpg",
        alt: "Ford Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<FordNavChrome />}
      previousHref="/ford18"
      overviewHref="/fordoverview"
      nextHref="/ford20"
      cover={{
        src: "/images/ford19/ford156.jpg",
        width: 132,
        height: 200,
        alt: "Article: Lighting at the Fair - Ford Pavilion",
      }}
      pdfHref="/pdf/ford/article-05.pdf"
      pdfAriaLabel="Download Article: Lighting at the Fair - Ford Pavilion (PDF)"
      documentNoun="article"
    />
  );
}
