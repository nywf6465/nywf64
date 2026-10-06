import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { DynmatNavChrome } from "@/components/DynmatNavChrome";

export const metadata: Metadata = {
  title: "Pamphlet: Welcome — Dynamic Maturity — nywf64.com",
  description:
    "Download the Dynamic Maturity Welcome pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Dynamic Maturity pamphlet page — Welcome PDF.
 * Body from legacy dynmat05.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard); documentNoun “pamphlet”.
 */
export default function Dynmat05Page() {
  return (
    <BrochurePage
      heroLabel="Dynamic Maturity"
      titleId="dynmat05-title"
      title="Pamphlet: Welcome"
      hero={{
        src: "/images/dynmatoverview/hero-banner.jpg",
        alt: "Dynamic Maturity at the 1964/1965 New York World’s Fair",
        width: 1906,
        height: 825,
      }}
      nav={<DynmatNavChrome />}
      previousHref="/dynmat04"
      overviewHref="/dynmatoverview"
      nextHref="/dynmat06"
      cover={{
        src: "/images/dynmat05/dynmat03.jpg",
        width: 87,
        height: 200,
        alt: "Dynamic Maturity Welcome pamphlet",
      }}
      pdfHref="/pdf/dynmat/welcome.pdf"
      pdfAriaLabel="Download Dynamic Maturity Welcome pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
