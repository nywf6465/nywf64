import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { DupontNavChrome } from "@/components/DupontNavChrome";

export const metadata: Metadata = {
  title: "Article: wonderful world of CHEMISTRY — DuPont — nywf64.com",
  description:
    "Download the DuPont Article: wonderful world of CHEMISTRY — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * DuPont — Article: wonderful world of CHEMISTRY.
 * Body from legacy dupont09.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard); documentNoun “article”.
 */
export default function Dupont09Page() {
  return (
    <BrochurePage
      heroLabel="DuPont"
      titleId="dupont09-title"
      title="Article: wonderful world of CHEMISTRY"
      hero={{
        src: "/images/dupontoverview/hero-banner.jpg",
        alt: "DuPont Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<DupontNavChrome />}
      previousHref="/dupont08"
      overviewHref="/dupontoverview"
      nextHref="/dupont10"
      cover={{
        src: "/images/dupont09/dupont72.jpg",
        width: 169,
        height: 200,
        alt: "wonderful world of CHEMISTRY article",
      }}
      pdfHref="/pdf/dupont/wonderful-world-of-chemistry.pdf"
      pdfAriaLabel="Download wonderful world of CHEMISTRY article (PDF)"
      documentNoun="article"
    />
  );
}
