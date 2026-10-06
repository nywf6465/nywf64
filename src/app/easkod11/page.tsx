import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";

export const metadata: Metadata = {
  title: "Brochure: Kodak at the Fair — Eastman Kodak — nywf64.com",
  description:
    "Download the Kodak at the Fair pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastman Kodak brochure page — Kodak at the Fair PDF.
 * Body from legacy easkod11.html with Adobe Reader copy and icon omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Easkod11Page() {
  return (
    <BrochurePage
      heroLabel="Eastman Kodak Pavilion"
      titleId="easkod11-title"
      title="Brochure: Kodak at the Fair"
      hero={{
        src: "/images/easkodoverview/hero-banner.jpg",
        alt: "Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<EaskodNavChrome />}
      previousHref="/easkod10"
      overviewHref="/easkodoverview"
      nextHref="/easkod12"
      cover={{
        src: "/images/easkod11/kodak83.jpg",
        width: 66,
        height: 150,
        alt: "Kodak at the Fair pamphlet",
      }}
      pdfHref="/pdf/easkod/kodak-at-the-fair.pdf"
      pdfAriaLabel="Download Kodak at the Fair pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
