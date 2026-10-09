import type { Metadata } from "next";
import { CokeNavChrome } from "@/components/CokeNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Pamphlet: Dedication Ceremonies — Coca-Cola — nywf64.com",
  description:
    "Download the Coca-Cola Dedication Ceremonies pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Coca-Cola pamphlet page — Dedication Ceremonies PDF.
 * Body from legacy coke06.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard); documentNoun “pamphlet”.
 */
export default function Coke06Page() {
  return (
    <BrochurePage
      heroLabel="Coca-Cola"
      titleId="coke06-title"
      title="Pamphlet: Dedication Ceremonies"
      hero={{
        src: "/images/cokeoverview/hero-banner.jpg",
        alt: "Coca-Cola at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<CokeNavChrome />}
      previousHref="/coke05"
      overviewHref="/cokeoverview"
      nextHref="/coke07"
      cover={{
        src: "/images/coke06/coke04.jpg",
        width: 228,
        height: 150,
        alt: "Coca-Cola Dedication Ceremonies pamphlet",
      }}
      pdfHref="/pdf/coke/groundbreaking.pdf"
      pdfAriaLabel="Download Coca-Cola Dedication Ceremonies pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
