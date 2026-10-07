import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { FordNavChrome } from "@/components/FordNavChrome";

export const metadata: Metadata = {
  title: "Article: A Fair for the World — Ford — nywf64.com",
  description:
    "Download the Ford Pavilion article — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ford — Article: A Fair for the World.
 * Body from legacy ford12.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Ford12Page() {
  return (
    <BrochurePage
      heroLabel="Ford Pavilion"
      titleId="ford12-title"
      title="Article: A Fair for the World"
      hero={{
        src: "/images/fordoverview/hero-banner.jpg",
        alt: "Ford Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<FordNavChrome />}
      previousHref="/ford11"
      overviewHref="/fordoverview"
      nextHref="/ford13"
      cover={{
        src: "/images/ford12/ford152.jpg",
        width: 139,
        height: 200,
        alt: "Article: A Fair for the World",
      }}
      pdfHref="/pdf/ford/article-01.pdf"
      pdfAriaLabel="Download Article: A Fair for the World (PDF)"
      documentNoun="article"
    />
  );
}
