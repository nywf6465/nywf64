import type { Metadata } from "next";
import { BelvilNavChrome } from "@/components/BelvilNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — Belgian Village — nywf64.com",
  description:
    "Download the Belgian Village Groundbreaking pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Belgian Village pamphlet page — Groundbreaking PDF.
 * Body from legacy belvil05.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Belvil05Page() {
  return (
    <BrochurePage
      heroLabel="Belgian Village"
      titleId="belvil05-title"
      title="Pamphlet: Groundbreaking"
      hero={{
        src: "/images/belviloverview/hero-banner.jpg",
        alt: "Belgian Village at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<BelvilNavChrome />}
      previousHref="/belvil04"
      overviewHref="/belvil01"
      nextHref="/belvil06"
      cover={{
        src: "/images/belvil05/groundbreaking-cover.jpg",
        width: 200,
        height: 133,
        alt: "Belgian Village Groundbreaking pamphlet",
      }}
      pdfHref="/pdf/belvil/groundbreaking.pdf"
      pdfAriaLabel="Download Belgian Village Groundbreaking pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
