import type { Metadata } from "next";
import { AutthrNavChrome } from "@/components/AutthrNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Pamphlet: Preview — Auto Thrill Show — nywf64.com",
  description:
    "Download the Auto Thrill Show Preview pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Auto Thrill Show pamphlet page — Preview PDF.
 * Body from legacy autthr05.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Autthr05Page() {
  return (
    <BrochurePage
      heroLabel="Auto Thrill Show"
      titleId="autthr05-title"
      title="Pamphlet: Preview"
      hero={{
        src: "/images/autthroverview/hero-banner.jpg",
        alt: "Auto Thrill Show at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AutthrNavChrome />}
      previousHref="/autthr04"
      overviewHref="/autthroverview"
      nextHref="/autthr06"
      cover={{
        src: "/images/autthr05/preview-cover.jpg",
        width: 189,
        height: 125,
        alt: "Auto Thrill Show Preview pamphlet",
      }}
      pdfHref="/pdf/autthr/preview.pdf"
      pdfAriaLabel="Download Auto Thrill Show Preview pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
