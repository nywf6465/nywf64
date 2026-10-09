import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { FordNavChrome } from "@/components/FordNavChrome";

export const metadata: Metadata = {
  title: "Article: Hit Show for '65 — Ford — nywf64.com",
  description:
    "Download the Ford Pavilion article — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ford — Article: Hit Show for '65.
 * Body from legacy ford18.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Ford18Page() {
  return (
    <BrochurePage
      heroLabel="Ford Pavilion"
      titleId="ford18-title"
      title="Article: Hit Show for \'65"
      hero={{
        src: "/images/fordoverview/hero-banner.jpg",
        alt: "Ford Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<FordNavChrome />}
      previousHref="/ford17"
      overviewHref="/fordoverview"
      nextHref="/ford19"
      cover={{
        src: "/images/ford18/ford158.jpg",
        width: 145,
        height: 200,
        alt: "Article: Hit Show for \'65",
      }}
      pdfHref="/pdf/ford/article-04.pdf"
      pdfAriaLabel="Download Article: Hit Show for '65 (PDF)"
      documentNoun="article"
    />
  );
}
