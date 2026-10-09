import type { Metadata } from "next";
import { BellNavChrome } from "@/components/BellNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — Bell System — nywf64.com",
  description:
    "Download the Bell System Pavilion Groundbreaking pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bell System pamphlet page — Groundbreaking PDF.
 * Body from legacy bell07.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Bell07Page() {
  return (
    <BrochurePage
      heroLabel="Bell System Pavilion"
      titleId="bell07-title"
      title="Pamphlet: Groundbreaking"
      hero={{
        src: "/images/belloverview/hero-banner.jpg",
        alt: "Bell System Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BellNavChrome />}
      previousHref="/bell06"
      overviewHref="/bell01"
      nextHref="/bellride"
      cover={{
        src: "/images/bell07/groundbreaking-cover.jpg",
        width: 195,
        height: 150,
        alt: "Bell System Pavilion Groundbreaking pamphlet",
      }}
      pdfHref="/pdf/bell/groundbreaking.pdf"
      pdfAriaLabel="Download Bell System Pavilion Groundbreaking pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
