import type { Metadata } from "next";
import { BelvilNavChrome } from "@/components/BelvilNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Inventions Exhibit — Belgian Village — nywf64.com",
  description:
    "Download the Belgian Village Inventions Exhibit brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Belgian Village brochure page — Inventions Exhibit PDF.
 * Body from legacy belvil08.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 * Last Belgian Village topic — NEXT returns to overview.
 */
export default function Belvil08Page() {
  return (
    <BrochurePage
      heroLabel="Belgian Village"
      titleId="belvil08-title"
      title="Brochure: Inventions Exhibit"
      hero={{
        src: "/images/belviloverview/hero-banner.jpg",
        alt: "Belgian Village at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<BelvilNavChrome />}
      previousHref="/belvil07"
      overviewHref="/belvil01"
      nextHref="/belvil01"
      cover={{
        src: "/images/belvil08/inventions-exhibit-cover.jpg",
        width: 89,
        height: 200,
        alt: "Belgian Village Inventions Exhibit brochure",
      }}
      pdfHref="/pdf/belvil/inventions-exhibit.pdf"
      pdfAriaLabel="Download Belgian Village Inventions Exhibit brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
