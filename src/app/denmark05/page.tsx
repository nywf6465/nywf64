import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { DenmarkNavChrome } from "@/components/DenmarkNavChrome";

export const metadata: Metadata = {
  title: "Pamphlet: Pavilion Guide — Denmark — nywf64.com",
  description:
    "Download the Denmark Pavilion Guide pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Denmark pamphlet page — Pavilion Guide PDF.
 * Body from legacy denmark05.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard); documentNoun “pamphlet”.
 */
export default function Denmark05Page() {
  return (
    <BrochurePage
      heroLabel="Denmark"
      titleId="denmark05-title"
      title="Pamphlet: Pavilion Guide"
      hero={{
        src: "/images/denmarkoverview/hero-banner.jpg",
        alt: "Denmark at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<DenmarkNavChrome />}
      previousHref="/denmark04"
      overviewHref="/denmarkoverview"
      nextHref="/denmarkoverview"
      cover={{
        src: "/images/denmark05/denmar12.jpg",
        width: 105,
        height: 150,
        alt: "Denmark Pavilion Guide pamphlet",
      }}
      pdfHref="/pdf/denmark/pavilion-guide.pdf"
      pdfAriaLabel="Download Denmark Pavilion Guide pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
