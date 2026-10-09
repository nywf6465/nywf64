import type { Metadata } from "next";
import { CenamerNavChrome } from "@/components/CenamerNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Fiesta Land — Central America — nywf64.com",
  description:
    "Download the Central America Fiesta Land brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Central America brochure page — Fiesta Land PDF.
 * Body from legacy cenamer05.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Cenamer05Page() {
  return (
    <BrochurePage
      heroLabel="Central America"
      titleId="cenamer05-title"
      title="Brochure: Fiesta Land"
      hero={{
        src: "/images/cenameriverview/hero-banner.jpg",
        alt: "Central America at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<CenamerNavChrome />}
      previousHref="/cenamer04"
      overviewHref="/cenameriverview"
      nextHref="/cenamer06"
      cover={{
        src: "/images/cenamer05/fiesta-land-cover.jpg",
        width: 88,
        height: 200,
        alt: "Fiesta Land brochure",
      }}
      pdfHref="/pdf/cenamer/fiesta-land.pdf"
      pdfAriaLabel="Download Fiesta Land brochure (PDF)"
    />
  );
}
