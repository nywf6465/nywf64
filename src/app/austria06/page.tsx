import type { Metadata } from "next";
import { AustriaNavChrome } from "@/components/AustriaNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Pamphlet: Austria — Austria — nywf64.com",
  description:
    "Download the Austria pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Austria pamphlet page — About Austria PDF.
 * Body from legacy austria06.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Austria06Page() {
  return (
    <BrochurePage
      heroLabel="Austria"
      titleId="austria06-title"
      title="Pamphlet: Austria"
      hero={{
        src: "/images/austriaoverview/hero-banner.jpg",
        alt: "Austria at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AustriaNavChrome />}
      previousHref="/austria05"
      overviewHref="/austria01"
      nextHref="/austria07"
      cover={{
        src: "/images/austria06/about-austria-cover.jpg",
        width: 74,
        height: 150,
        alt: "Austria pamphlet",
      }}
      pdfHref="/pdf/austria/about-austria.pdf"
      pdfAriaLabel="Download Austria pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
