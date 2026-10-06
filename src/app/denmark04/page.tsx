import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { DenmarkNavChrome } from "@/components/DenmarkNavChrome";

export const metadata: Metadata = {
  title: "Pamphlet: Flag Raising — Denmark — nywf64.com",
  description:
    "Download the Denmark Flag Raising pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Denmark pamphlet page — Flag Raising PDF.
 * Body from legacy denmark04.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard); documentNoun “pamphlet”.
 */
export default function Denmark04Page() {
  return (
    <BrochurePage
      heroLabel="Denmark"
      titleId="denmark04-title"
      title="Pamphlet: Flag Raising"
      hero={{
        src: "/images/denmarkoverview/hero-banner.jpg",
        alt: "Denmark at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<DenmarkNavChrome />}
      previousHref="/denmark03"
      overviewHref="/denmarkoverview"
      nextHref="/denmark05"
      cover={{
        src: "/images/denmark04/denmar11.jpg",
        width: 228,
        height: 150,
        alt: "Denmark Flag Raising pamphlet",
      }}
      pdfHref="/pdf/denmark/flag-raising.pdf"
      pdfAriaLabel="Download Denmark Flag Raising pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
