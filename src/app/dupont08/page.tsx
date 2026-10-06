import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { DupontNavChrome } from "@/components/DupontNavChrome";

export const metadata: Metadata = {
  title: "Brochure: Visit DuPont — DuPont — nywf64.com",
  description:
    "Download the DuPont Brochure: Visit DuPont — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * DuPont — Brochure: Visit DuPont.
 * Body from legacy dupont08.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard); documentNoun “brochure”.
 */
export default function Dupont08Page() {
  return (
    <BrochurePage
      heroLabel="DuPont"
      titleId="dupont08-title"
      title="Brochure: Visit DuPont"
      hero={{
        src: "/images/dupontoverview/hero-banner.jpg",
        alt: "DuPont Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<DupontNavChrome />}
      previousHref="/dupont07"
      overviewHref="/dupontoverview"
      nextHref="/dupont09"
      cover={{
        src: "/images/dupont08/dupont71.jpg",
        width: 200,
        height: 78,
        alt: "Visit DuPont brochure",
      }}
      pdfHref="/pdf/dupont/visit-dupont.pdf"
      pdfAriaLabel="Download Visit DuPont brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
