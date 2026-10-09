import type { Metadata } from "next";
import { AutthrNavChrome } from "@/components/AutthrNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "1965 Official Souvenir Program — Auto Thrill Show — nywf64.com",
  description:
    "Download the Auto Thrill Show 1965 Official Souvenir Program — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Auto Thrill Show program page — 1965 Official Souvenir Program PDF.
 * Body from legacy autthr06.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Autthr06Page() {
  return (
    <BrochurePage
      heroLabel="Auto Thrill Show"
      titleId="autthr06-title"
      title="1965 Official Souvenir Program"
      hero={{
        src: "/images/autthroverview/hero-banner.jpg",
        alt: "Auto Thrill Show at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AutthrNavChrome />}
      previousHref="/autthr05"
      overviewHref="/autthroverview"
      nextHref="/autthr07"
      cover={{
        src: "/images/autthr06/souvenir-program-cover.jpg",
        width: 162,
        height: 200,
        alt: "Auto Thrill Show 1965 Official Souvenir Program",
      }}
      pdfHref="/pdf/autthr/souvenir-program.pdf"
      pdfAriaLabel="Download Auto Thrill Show 1965 Official Souvenir Program (PDF)"
      documentNoun="program"
    />
  );
}
