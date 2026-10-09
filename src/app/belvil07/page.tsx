import type { Metadata } from "next";
import { BelvilNavChrome } from "@/components/BelvilNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Booklet: Souvenir Program — Belgian Village — nywf64.com",
  description:
    "Download the Belgian Village Souvenir Program booklet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Belgian Village booklet page — Souvenir Program PDF.
 * Body from legacy belvil07.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Belvil07Page() {
  return (
    <BrochurePage
      heroLabel="Belgian Village"
      titleId="belvil07-title"
      title="Booklet: Souvenir Program"
      hero={{
        src: "/images/belviloverview/hero-banner.jpg",
        alt: "Belgian Village at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<BelvilNavChrome />}
      previousHref="/belvil06"
      overviewHref="/belvil01"
      nextHref="/belvil08"
      cover={{
        src: "/images/belvil07/souvenir-program-cover.jpg",
        width: 154,
        height: 200,
        alt: "Belgian Village Souvenir Program booklet",
      }}
      pdfHref="/pdf/belvil/souvenir-program.pdf"
      pdfAriaLabel="Download Belgian Village Souvenir Program booklet (PDF)"
      documentNoun="booklet"
    />
  );
}
