import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { DupontNavChrome } from "@/components/DupontNavChrome";

export const metadata: Metadata = {
  title: "Press Releases — DuPont — nywf64.com",
  description:
    "Download the DuPont Press Releases — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * DuPont — Press Releases.
 * Body from legacy dupont05.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard); documentNoun “press release collection”.
 */
export default function Dupont05Page() {
  return (
    <BrochurePage
      heroLabel="DuPont"
      titleId="dupont05-title"
      title="Press Releases"
      hero={{
        src: "/images/dupontoverview/hero-banner.jpg",
        alt: "DuPont Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<DupontNavChrome />}
      previousHref="/dupont04"
      overviewHref="/dupontoverview"
      nextHref="/dupont06"
      cover={{
        src: "/images/dupont05/dupont70.jpg",
        width: 200,
        height: 272,
        alt: "Press Releases",
      }}
      pdfHref="/pdf/dupont/press-releases.pdf"
      pdfAriaLabel="Download Press Releases (PDF)"
      documentNoun="press release collection"
    />
  );
}
