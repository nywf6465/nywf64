import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { DanwatNavChrome } from "@/components/DanwatNavChrome";

export const metadata: Metadata = {
  title: "Souvenir Program — Dancing Waters — nywf64.com",
  description:
    "Download the Dancing Waters Souvenir Program — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Dancing Waters souvenir program PDF page.
 * Body from legacy danwat04.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard); documentNoun “program”.
 * Navy title matches menu label “Souvenir Program”.
 */
export default function Danwat04Page() {
  return (
    <BrochurePage
      heroLabel="Dancing Waters"
      titleId="danwat04-title"
      title="Souvenir Program"
      hero={{
        src: "/images/danwatoverview/hero-banner.jpg",
        alt: "Dancing Waters at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<DanwatNavChrome />}
      previousHref="/danwat03"
      overviewHref="/danwatoverview"
      nextHref="/danwatoverview"
      cover={{
        src: "/images/danwat04/danwat02.jpg",
        width: 157,
        height: 200,
        alt: "Dancing Waters Souvenir Program",
      }}
      pdfHref="/pdf/danwat/program.pdf"
      pdfAriaLabel="Download Dancing Waters Souvenir Program (PDF)"
      documentNoun="program"
    />
  );
}
