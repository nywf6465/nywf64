import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { FordNavChrome } from "@/components/FordNavChrome";

export const metadata: Metadata = {
  title: "Article: The Show's the Thing — Ford — nywf64.com",
  description:
    "Download the Ford Pavilion article — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ford — Article: The Show's the Thing.
 * Body from legacy ford17.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Ford17Page() {
  return (
    <BrochurePage
      heroLabel="Ford Pavilion"
      titleId="ford17-title"
      title="Article: The Show\'s the Thing"
      hero={{
        src: "/images/fordoverview/hero-banner.jpg",
        alt: "Ford Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<FordNavChrome />}
      previousHref="/ford16"
      overviewHref="/fordoverview"
      nextHref="/ford18"
      cover={{
        src: "/images/ford17/ford115.jpg",
        width: 150,
        height: 218,
        alt: "Article: The Show\'s the Thing",
      }}
      pdfHref="/pdf/ford/clues-summer-1964.pdf"
      pdfAriaLabel="Download Article: The Show's the Thing (PDF)"
      documentNoun="article"
    />
  );
}
