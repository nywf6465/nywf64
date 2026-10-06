import type { Metadata } from "next";
import { BelvilNavChrome } from "@/components/BelvilNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Sales Brochure — Belgian Village — nywf64.com",
  description:
    "Download the Belgian Village Sales Brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Belgian Village brochure page — Sales Brochure PDF.
 * Body from legacy belvil06.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Belvil06Page() {
  return (
    <BrochurePage
      heroLabel="Belgian Village"
      titleId="belvil06-title"
      title="Brochure: Sales Brochure"
      hero={{
        src: "/images/belviloverview/hero-banner.jpg",
        alt: "Belgian Village at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<BelvilNavChrome />}
      previousHref="/belvil05"
      overviewHref="/belvil01"
      nextHref="/belvil07"
      cover={{
        src: "/images/belvil06/sales-brochure-cover.jpg",
        width: 88,
        height: 200,
        alt: "Belgian Village Sales Brochure",
      }}
      pdfHref="/pdf/belvil/sales-brochure.pdf"
      pdfAriaLabel="Download Belgian Village Sales Brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
