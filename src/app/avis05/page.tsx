import type { Metadata } from "next";
import { AvisNavChrome } from "@/components/AvisNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Map & Guide to Avis at the Fair — Avis Antique Car Ride — nywf64.com",
  description:
    "Download the Map & Guide to Avis at the Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Avis Antique Car Ride brochure page — Map & Guide PDF.
 * Body from legacy avis05.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Avis05Page() {
  return (
    <BrochurePage
      heroLabel="Avis Antique Car Ride"
      titleId="avis05-title"
      title="Map & Guide to Avis at the Fair"
      hero={{
        src: "/images/avisoverview/hero-banner.jpg",
        alt: "Avis Antique Car Ride at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AvisNavChrome />}
      previousHref="/avis04"
      overviewHref="/avis01"
      nextHref="/avis01"
      cover={{
        src: "/images/avis05/map-and-guide-cover.jpg",
        width: 128,
        height: 150,
        alt: "Map & Guide to Avis at the Fair",
      }}
      pdfHref="/pdf/avis/map-and-guide.pdf"
      pdfAriaLabel="Download Map & Guide to Avis at the Fair (PDF)"
      documentNoun="map & guide"
    />
  );
}
