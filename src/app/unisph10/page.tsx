import type { Metadata } from "next";
import { UnisphNavChrome } from "@/components/UnisphNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Building a Unisphere — Unisphere — nywf64.com",
  description:
    "Download the “Building a Unisphere” brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Unisphere brochure page — “Building a Unisphere” PDF.
 * Body from legacy unisph10.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Unisph10Page() {
  return (
    <BrochurePage
      heroLabel="Unisphere"
      titleId="unisph10-title"
      title="Brochure: Building a Unisphere"
      hero={{
        src: "/images/unisphoverview/hero-banner.jpg",
        alt: "Unisphere at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UnisphNavChrome />}
      previousHref="/unisph09"
      overviewHref="/unisphoverview"
      nextHref="/unisph11"
      cover={{
        src: "/images/unisph10/building-a-unisphere.jpg",
        width: 92,
        height: 200,
        alt: "Building a Unisphere brochure",
      }}
      pdfHref="/pdf/unisph/building-a-unisphere.pdf"
      pdfAriaLabel="Download Building a Unisphere brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
