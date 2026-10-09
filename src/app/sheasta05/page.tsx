import type { Metadata } from "next";
import { SheastaNavChrome } from "@/components/SheastaNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Groundbreaking — Shea Stadium — nywf64.com",
  description:
    "Download the Shea Stadium Groundbreaking brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Shea Stadium Groundbreaking brochure page.
 * Body from legacy sheasta05.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Sheasta05Page() {
  return (
    <BrochurePage
      heroLabel="Shea Stadium"
      titleId="sheasta05-title"
      title="Groundbreaking"
      hero={{
        src: "/images/sheastaoverview/hero-banner.jpg",
        alt: "Shea Stadium at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SheastaNavChrome />}
      previousHref="/sheasta04"
      overviewHref="/sheastaoverview"
      nextHref="/sheasta06"
      cover={{
        src: "/images/sheasta05/groundbreaking-cover.jpg",
        width: 107,
        height: 250,
        alt: "Shea Stadium Groundbreaking brochure",
      }}
      pdfHref="/pdf/sheasta/groundbreaking.pdf"
      pdfAriaLabel="Download Shea Stadium Groundbreaking brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
