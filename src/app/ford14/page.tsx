import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { FordNavChrome } from "@/components/FordNavChrome";

export const metadata: Metadata = {
  title: "Article: Preview of Ford's Pavilion at the New York World's Fair — Ford — nywf64.com",
  description:
    "Download the Ford Pavilion article — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ford — Article: Preview of Ford's Pavilion at the New York World's Fair.
 * Body from legacy ford14.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Ford14Page() {
  return (
    <BrochurePage
      heroLabel="Ford Pavilion"
      titleId="ford14-title"
      title="Article: Preview of Ford\'s Pavilion at the New York World\'s Fair"
      hero={{
        src: "/images/fordoverview/hero-banner.jpg",
        alt: "Ford Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<FordNavChrome />}
      previousHref="/ford13"
      overviewHref="/fordoverview"
      nextHref="/ford15"
      cover={{
        src: "/images/ford14/ford114.jpg",
        width: 150,
        height: 211,
        alt: "Article: Preview of Ford\'s Pavilion at the New York World\'s Fair",
      }}
      pdfHref="/pdf/ford/ford-times-december-1963.pdf"
      pdfAriaLabel="Download Article: Preview of Ford's Pavilion at the New York World's Fair (PDF)"
      documentNoun="article"
    />
  );
}
