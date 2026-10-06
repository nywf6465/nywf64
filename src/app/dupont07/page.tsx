import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { DupontNavChrome } from "@/components/DupontNavChrome";

export const metadata: Metadata = {
  title: "Brochure: DuPont Presents (1965) — DuPont — nywf64.com",
  description:
    "Download the DuPont Brochure: DuPont Presents (1965) — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * DuPont — Brochure: DuPont Presents (1965).
 * Body from legacy dupont07.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard); documentNoun “brochure”.
 */
export default function Dupont07Page() {
  return (
    <BrochurePage
      heroLabel="DuPont"
      titleId="dupont07-title"
      title="Brochure: DuPont Presents (1965)"
      hero={{
        src: "/images/dupontoverview/hero-banner.jpg",
        alt: "DuPont Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<DupontNavChrome />}
      previousHref="/dupont06"
      overviewHref="/dupontoverview"
      nextHref="/dupont08"
      cover={{
        src: "/images/dupont07/dupont67.jpg",
        width: 88,
        height: 200,
        alt: "DuPont Presents (1965) brochure",
      }}
      pdfHref="/pdf/dupont/dupont-presents-1965.pdf"
      pdfAriaLabel="Download DuPont Presents (1965) brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
