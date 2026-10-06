import type { Metadata } from "next";
import { AvisNavChrome } from "@/components/AvisNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Pamphlet: Dedication Day — Avis Antique Car Ride — nywf64.com",
  description:
    "Download the Avis Antique Car Ride Dedication Day pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Avis Antique Car Ride pamphlet page — Dedication Day PDF.
 * Body from legacy avis04.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Avis04Page() {
  return (
    <BrochurePage
      heroLabel="Avis Antique Car Ride"
      titleId="avis04-title"
      title="Pamphlet: Dedication Day"
      hero={{
        src: "/images/avisoverview/hero-banner.jpg",
        alt: "Avis Antique Car Ride at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AvisNavChrome />}
      previousHref="/avis03"
      overviewHref="/avis01"
      nextHref="/avis05"
      cover={{
        src: "/images/avis04/dedication-day-cover.jpg",
        width: 192,
        height: 125,
        alt: "Avis Antique Car Ride Dedication Day pamphlet",
      }}
      pdfHref="/pdf/avis/dedication-day.pdf"
      pdfAriaLabel="Download Avis Antique Car Ride Dedication Day pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
