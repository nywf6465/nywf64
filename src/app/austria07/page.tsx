import type { Metadata } from "next";
import { AustriaNavChrome } from "@/components/AustriaNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Austrian Information — Austria — nywf64.com",
  description:
    "Download the Austrian Information brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Austria brochure page — Austrian Information PDF.
 * Body from legacy austria07.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Austria07Page() {
  return (
    <BrochurePage
      heroLabel="Austria"
      titleId="austria07-title"
      title="Brochure: Austrian Information"
      hero={{
        src: "/images/austriaoverview/hero-banner.jpg",
        alt: "Austria at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AustriaNavChrome />}
      previousHref="/austria06"
      overviewHref="/austriaoverview"
      nextHref="/austria08"
      cover={{
        src: "/images/austria07/austrian-information-cover.jpg",
        width: 116,
        height: 150,
        alt: "Austrian Information brochure",
      }}
      pdfHref="/pdf/austria/austrian-information.pdf"
      pdfAriaLabel="Download Austrian Information brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
