import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { DupontNavChrome } from "@/components/DupontNavChrome";

export const metadata: Metadata = {
  title: "Article: Lighting at the Fair - Dupont Pavilion — DuPont — nywf64.com",
  description:
    "Download the DuPont Article: Lighting at the Fair - Dupont Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * DuPont — Article: Lighting at the Fair - Dupont Pavilion.
 * Body from legacy dupont13.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard); documentNoun “article”.
 */
export default function Dupont13Page() {
  return (
    <BrochurePage
      heroLabel="DuPont"
      titleId="dupont13-title"
      title="Article: Lighting at the Fair - Dupont Pavilion"
      hero={{
        src: "/images/dupontoverview/hero-banner.jpg",
        alt: "DuPont Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<DupontNavChrome />}
      previousHref="/dupont12"
      overviewHref="/dupontoverview"
      nextHref="/dupont14"
      cover={{
        src: "/images/dupont13/dupont76.jpg",
        width: 200,
        height: 129,
        alt: "Lighting at the Fair article",
      }}
      pdfHref="/pdf/dupont/lighting-at-the-fair.pdf"
      pdfAriaLabel="Download Lighting at the Fair article (PDF)"
      documentNoun="article"
    />
  );
}
