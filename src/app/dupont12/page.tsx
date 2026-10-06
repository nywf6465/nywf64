import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { DupontNavChrome } from "@/components/DupontNavChrome";

export const metadata: Metadata = {
  title: "Article: Backstage Toil and Skill — DuPont — nywf64.com",
  description:
    "Download the DuPont Article: Backstage Toil and Skill — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * DuPont — Article: Backstage Toil and Skill.
 * Body from legacy dupont12.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard); documentNoun “article”.
 */
export default function Dupont12Page() {
  return (
    <BrochurePage
      heroLabel="DuPont"
      titleId="dupont12-title"
      title="Article: Backstage Toil and Skill"
      hero={{
        src: "/images/dupontoverview/hero-banner.jpg",
        alt: "DuPont Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<DupontNavChrome />}
      previousHref="/dupont11"
      overviewHref="/dupontoverview"
      nextHref="/dupont13"
      cover={{
        src: "/images/dupont12/dupont75.jpg",
        width: 148,
        height: 200,
        alt: "Backstage Toil and Skill article",
      }}
      pdfHref="/pdf/dupont/backstage-toil-and-skill.pdf"
      pdfAriaLabel="Download Backstage Toil and Skill article (PDF)"
      documentNoun="article"
    />
  );
}
