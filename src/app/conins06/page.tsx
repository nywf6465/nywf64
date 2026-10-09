import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { ConinsNavChrome } from "@/components/ConinsNavChrome";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — Continental Insurance — nywf64.com",
  description:
    "Download the Continental Insurance Groundbreaking pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Insurance pamphlet page — Groundbreaking PDF.
 * Body from legacy conins06.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard); documentNoun “pamphlet”.
 */
export default function Conins06Page() {
  return (
    <BrochurePage
      heroLabel="Continental Insurance"
      titleId="conins06-title"
      title="Pamphlet: Groundbreaking"
      hero={{
        src: "/images/coninsoverview/hero-banner.jpg",
        alt: "Continental Insurance at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<ConinsNavChrome />}
      previousHref="/conins05"
      overviewHref="/coninsoverview"
      nextHref="/conins07"
      cover={{
        src: "/images/conins06/conins02.jpg",
        width: 229,
        height: 150,
        alt: "Continental Insurance Groundbreaking pamphlet",
      }}
      pdfHref="/pdf/conins/groundbreaking.pdf"
      pdfAriaLabel="Download Continental Insurance Groundbreaking pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
