import type { Metadata } from "next";
import { UnisphNavChrome } from "@/components/UnisphNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Presentation: How to Make a Unisphere — Unisphere — nywf64.com",
  description:
    "Download the “How to Make a Unisphere” presentation — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Unisphere brochure page — “How to Make a Unisphere” PDF presentation.
 * Body from legacy unisph09.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Unisph09Page() {
  return (
    <BrochurePage
      heroLabel="Unisphere"
      titleId="unisph09-title"
      title="Presentation: How to Make a Unisphere"
      hero={{
        src: "/images/unisphoverview/hero-banner.jpg",
        alt: "Unisphere at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UnisphNavChrome />}
      previousHref="/unisph08"
      overviewHref="/unisph01"
      nextHref="/unisph10"
      cover={{
        src: "/images/unisph09/how-to-make-a-unisphere.jpg",
        width: 346,
        height: 150,
        alt: "How to Make a Unisphere presentation",
      }}
      pdfHref="/pdf/unisph/how-to-make-a-unisphere.pdf"
      pdfAriaLabel="Download How to Make a Unisphere presentation (PDF)"
      documentNoun="presentation"
    />
  );
}
