import type { Metadata } from "next";
import { BellNavChrome } from "@/components/BellNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Article: A Colossal Floating Wing — Bell System — nywf64.com",
  description:
    "Download the Bell System Pavilion article A Colossal Floating Wing — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bell System article page — A Colossal Floating Wing PDF.
 * Body from legacy bell13.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 * Last Bell System topic — NEXT returns to overview.
 */
export default function Bell13Page() {
  return (
    <BrochurePage
      heroLabel="Bell System Pavilion"
      titleId="bell13-title"
      title="Article: A Colossal Floating Wing"
      hero={{
        src: "/images/belloverview/hero-banner.jpg",
        alt: "Bell System Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BellNavChrome />}
      previousHref="/bell12"
      overviewHref="/belloverview"
      nextHref="/belloverview"
      cover={{
        src: "/images/bell13/colossal-floating-wing-cover.jpg",
        width: 157,
        height: 200,
        alt: "A Colossal Floating Wing article",
      }}
      pdfHref="/pdf/bell/a-colossal-floating-wing.pdf"
      pdfAriaLabel="Download A Colossal Floating Wing article (PDF)"
      documentNoun="article"
    />
  );
}
