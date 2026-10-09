import type { Metadata } from "next";
import { JulfarNavChrome } from "@/components/JulfarNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Pavilion Guide — Julimar Farm — nywf64.com",
  description:
    "Download the Julimar Farm Pavilion Guide brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Julimar Farm brochure page — Pavilion Guide PDF.
 * Body from legacy julfar04.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Julfar04Page() {
  return (
    <BrochurePage
      heroLabel="Julimar Farm"
      titleId="julfar04-title"
      title="Brochure: Pavilion Guide"
      hero={{
        src: "/images/julfaroverview/hero-banner.jpg",
        alt: "Julimar Farm at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JulfarNavChrome />}
      previousHref="/julfar03"
      overviewHref="/julfaroverview"
      nextHref="/julfaroverview"
      cover={{
        src: "/images/julfar04/julfar06.jpg",
        width: 109,
        height: 250,
        alt: "Julimar Farm Pavilion Guide brochure",
      }}
      pdfHref="/images/julfar04/pavilionguide.pdf"
      pdfAriaLabel="Download Julimar Farm Pavilion Guide brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
