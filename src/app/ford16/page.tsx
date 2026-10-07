import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { FordNavChrome } from "@/components/FordNavChrome";

export const metadata: Metadata = {
  title: "Article: Ford Wonder Rotunda — Ford — nywf64.com",
  description:
    "Download the Ford Pavilion article — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ford — Article: Ford Wonder Rotunda.
 * Body from legacy ford16.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Ford16Page() {
  return (
    <BrochurePage
      heroLabel="Ford Pavilion"
      titleId="ford16-title"
      title="Article: Ford Wonder Rotunda"
      hero={{
        src: "/images/fordoverview/hero-banner.jpg",
        alt: "Ford Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<FordNavChrome />}
      previousHref="/ford15"
      overviewHref="/fordoverview"
      nextHref="/ford17"
      cover={{
        src: "/images/ford16/ford154.jpg",
        width: 142,
        height: 200,
        alt: "Article: Ford Wonder Rotunda",
      }}
      pdfHref="/pdf/ford/article-03.pdf"
      pdfAriaLabel="Download Article: Ford Wonder Rotunda (PDF)"
      documentNoun="article"
    />
  );
}
