import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { DynmatNavChrome } from "@/components/DynmatNavChrome";

export const metadata: Metadata = {
  title: "Pamphlet: Helpful Hints — Dynamic Maturity — nywf64.com",
  description:
    "Download the Dynamic Maturity Helpful Hints pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Dynamic Maturity pamphlet page — Helpful Hints PDF.
 * Body from legacy dynmat06.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard); documentNoun “pamphlet”.
 * Last Dynamic Maturity topic — NEXT returns to overview.
 */
export default function Dynmat06Page() {
  return (
    <BrochurePage
      heroLabel="Dynamic Maturity"
      titleId="dynmat06-title"
      title="Pamphlet: Helpful Hints"
      hero={{
        src: "/images/dynmatoverview/hero-banner.jpg",
        alt: "Dynamic Maturity at the 1964/1965 New York World’s Fair",
        width: 1906,
        height: 825,
      }}
      nav={<DynmatNavChrome />}
      previousHref="/dynmat05"
      overviewHref="/dynmatoverview"
      nextHref="/dynmatoverview"
      cover={{
        src: "/images/dynmat06/dynmat04.jpg",
        width: 88,
        height: 200,
        alt: "Dynamic Maturity Helpful Hints pamphlet",
      }}
      pdfHref="/pdf/dynmat/helpful-hints.pdf"
      pdfAriaLabel="Download Dynamic Maturity Helpful Hints pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
