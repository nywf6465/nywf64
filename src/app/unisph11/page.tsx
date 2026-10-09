import type { Metadata } from "next";
import { UnisphNavChrome } from "@/components/UnisphNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Graphic Standards Manual — Unisphere — nywf64.com",
  description:
    "Download the Unisphere Graphic Standards Manual brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Unisphere brochure page — Graphic Standards Manual PDF.
 * Body from legacy unisph11.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Unisph11Page() {
  return (
    <BrochurePage
      heroLabel="Unisphere"
      titleId="unisph11-title"
      title="Brochure: Graphic Standards Manual"
      hero={{
        src: "/images/unisphoverview/hero-banner.jpg",
        alt: "Unisphere at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UnisphNavChrome />}
      previousHref="/unisph10"
      overviewHref="/unisphoverview"
      nextHref="/unisph12"
      cover={{
        src: "/images/unisph11/graphic-standards-manual.jpg",
        width: 88,
        height: 200,
        alt: "Unisphere Graphic Standards Manual brochure",
      }}
      pdfHref="/pdf/unisph/graphic-standards-manual.pdf"
      pdfAriaLabel="Download Graphic Standards Manual brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
