import type { Metadata } from "next";
import { CenamerNavChrome } from "@/components/CenamerNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — Central America — nywf64.com",
  description:
    "Download the Central America Groundbreaking pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Central America pamphlet page — Groundbreaking PDF.
 * Body from legacy cenamer04.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Cenamer04Page() {
  return (
    <BrochurePage
      heroLabel="Central America"
      titleId="cenamer04-title"
      title="Pamphlet: Groundbreaking"
      hero={{
        src: "/images/cenameriverview/hero-banner.jpg",
        alt: "Central America at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<CenamerNavChrome />}
      previousHref="/cenamer03"
      overviewHref="/cenameriverview"
      nextHref="/cenamer05"
      cover={{
        src: "/images/cenamer04/groundbreaking-cover.jpg",
        width: 200,
        height: 131,
        alt: "Central America Groundbreaking pamphlet",
      }}
      pdfHref="/pdf/cenamer/groundbreaking.pdf"
      pdfAriaLabel="Download Central America Groundbreaking pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
