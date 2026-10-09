import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { DupontNavChrome } from "@/components/DupontNavChrome";

export const metadata: Metadata = {
  title: "Brochure: DuPont Presents (1964) — DuPont — nywf64.com",
  description:
    "Download the DuPont Brochure: DuPont Presents (1964) — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * DuPont — Brochure: DuPont Presents (1964).
 * Body from legacy dupont06.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard); documentNoun “brochure”.
 */
export default function Dupont06Page() {
  return (
    <BrochurePage
      heroLabel="DuPont"
      titleId="dupont06-title"
      title="Brochure: DuPont Presents (1964)"
      hero={{
        src: "/images/dupontoverview/hero-banner.jpg",
        alt: "DuPont Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<DupontNavChrome />}
      previousHref="/dupont05"
      overviewHref="/dupontoverview"
      nextHref="/dupont07"
      cover={{
        src: "/images/dupont06/dupont67.jpg",
        width: 88,
        height: 200,
        alt: "DuPont Presents (1964) brochure",
      }}
      pdfHref="/pdf/dupont/dupont-presents-1964.pdf"
      pdfAriaLabel="Download DuPont Presents (1964) brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
