import type { Metadata } from "next";
import { CenamerNavChrome } from "@/components/CenamerNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title:
    "Brochure: Art from Central America and Panama — Central America — nywf64.com",
  description:
    "Download the Art from Central America and Panama brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Central America brochure page — Art from Central America and Panama PDF.
 * Body from legacy cenamer06.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 * Last Central America topic: NEXT returns to /cenameriverview.
 */
export default function Cenamer06Page() {
  return (
    <BrochurePage
      heroLabel="Central America"
      titleId="cenamer06-title"
      title="Brochure: Art from Central America and Panama"
      hero={{
        src: "/images/cenameriverview/hero-banner.jpg",
        alt: "Central America at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<CenamerNavChrome />}
      previousHref="/cenamer05"
      overviewHref="/cenameriverview"
      nextHref="/cenameriverview"
      cover={{
        src: "/images/cenamer06/art-from-cover.jpg",
        width: 200,
        height: 146,
        alt: "Art from Central America and Panama brochure",
      }}
      pdfHref="/pdf/cenamer/art-from.pdf"
      pdfAriaLabel="Download Art from Central America and Panama brochure (PDF)"
    />
  );
}
