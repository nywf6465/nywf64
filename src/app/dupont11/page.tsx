import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { DupontNavChrome } from "@/components/DupontNavChrome";

export const metadata: Metadata = {
  title: "Article: First Year at the Fair — DuPont — nywf64.com",
  description:
    "Download the DuPont Article: First Year at the Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * DuPont — Article: First Year at the Fair.
 * Body from legacy dupont11.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard); documentNoun “article”.
 */
export default function Dupont11Page() {
  return (
    <BrochurePage
      heroLabel="DuPont"
      titleId="dupont11-title"
      title="Article: First Year at the Fair"
      hero={{
        src: "/images/dupontoverview/hero-banner.jpg",
        alt: "DuPont Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<DupontNavChrome />}
      previousHref="/dupont10"
      overviewHref="/dupontoverview"
      nextHref="/dupont12"
      cover={{
        src: "/images/dupont11/dupont74.jpg",
        width: 200,
        height: 273,
        alt: "First Year at the Fair article",
      }}
      pdfHref="/pdf/dupont/first-year-at-the-fair.pdf"
      pdfAriaLabel="Download First Year at the Fair article (PDF)"
      documentNoun="article"
    />
  );
}
