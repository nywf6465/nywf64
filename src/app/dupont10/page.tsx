import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { DupontNavChrome } from "@/components/DupontNavChrome";

export const metadata: Metadata = {
  title: "Article: Backstage at the Fair — DuPont — nywf64.com",
  description:
    "Download the DuPont Article: Backstage at the Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * DuPont — Article: Backstage at the Fair.
 * Body from legacy dupont10.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard); documentNoun “article”.
 */
export default function Dupont10Page() {
  return (
    <BrochurePage
      heroLabel="DuPont"
      titleId="dupont10-title"
      title="Article: Backstage at the Fair"
      hero={{
        src: "/images/dupontoverview/hero-banner.jpg",
        alt: "DuPont Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<DupontNavChrome />}
      previousHref="/dupont09"
      overviewHref="/dupontoverview"
      nextHref="/dupont11"
      cover={{
        src: "/images/dupont10/dupont73.jpg",
        width: 200,
        height: 124,
        alt: "Backstage at the Fair article",
      }}
      pdfHref="/pdf/dupont/backstage-at-the-fair.pdf"
      pdfAriaLabel="Download Backstage at the Fair article (PDF)"
      documentNoun="article"
    />
  );
}
