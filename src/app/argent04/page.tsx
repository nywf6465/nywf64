import type { Metadata } from "next";
import { ArgentNavChrome } from "@/components/ArgentNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Pamphlet: Cornerstone Laying Ceremony — Argentina — nywf64.com",
  description:
    "Download the Argentina Cornerstone Laying Ceremony pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Argentina pamphlet page — Cornerstone Laying Ceremony PDF.
 * Body from legacy argent04.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Argent04Page() {
  return (
    <BrochurePage
      heroLabel="Argentina"
      titleId="argent04-title"
      title="Pamphlet: Cornerstone Laying Ceremony"
      hero={{
        src: "/images/argentoverview/hero-banner.jpg",
        alt: "Argentina at the 1964/1965 New York World’s Fair",
        width: 1907,
        height: 825,
      }}
      nav={<ArgentNavChrome />}
      previousHref="/argent03"
      overviewHref="/argentoverview"
      nextHref="/argentoverview"
      cover={{
        src: "/images/argent04/cornerstone-cover.jpg",
        width: 190,
        height: 125,
        alt: "Argentina Cornerstone Laying Ceremony pamphlet",
      }}
      pdfHref="/pdf/argent/cornerstonelaying.pdf"
      pdfAriaLabel="Download Argentina Cornerstone Laying Ceremony pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
