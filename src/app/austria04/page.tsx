import type { Metadata } from "next";
import { AustriaNavChrome } from "@/components/AustriaNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking Ceremonies — Austria — nywf64.com",
  description:
    "Download the Austria Groundbreaking Ceremonies pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Austria pamphlet page — Groundbreaking Ceremonies PDF.
 * Body from legacy austria04.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Austria04Page() {
  return (
    <BrochurePage
      heroLabel="Austria"
      titleId="austria04-title"
      title="Pamphlet: Groundbreaking Ceremonies"
      hero={{
        src: "/images/austriaoverview/hero-banner.jpg",
        alt: "Austria at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AustriaNavChrome />}
      previousHref="/austria03"
      overviewHref="/austriaoverview"
      nextHref="/austria05"
      cover={{
        src: "/images/austria04/groundbreaking-cover.jpg",
        width: 186,
        height: 125,
        alt: "Austria Groundbreaking Ceremonies pamphlet",
      }}
      pdfHref="/pdf/austria/groundbreaking.pdf"
      pdfAriaLabel="Download Austria Groundbreaking Ceremonies pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
