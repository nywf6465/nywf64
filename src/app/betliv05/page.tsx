import type { Metadata } from "next";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — Better Living Center — nywf64.com",
  description:
    "Download the Better Living Center Groundbreaking pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Better Living Center pamphlet page — Groundbreaking PDF.
 * Body from legacy betliv05.html with Adobe Reader paragraph/logo omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Betliv05Page() {
  return (
    <BrochurePage
      heroLabel="Better Living Center"
      titleId="betliv05-title"
      title="Pamphlet: Groundbreaking"
      hero={{
        src: "/images/betlivoverview/hero-banner.jpg",
        alt: "Better Living Center at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BetlivNavChrome />}
      previousHref="/betliv04"
      overviewHref="/betlivoverview"
      nextHref="/betliv06"
      cover={{
        src: "/images/betliv05/groundbreaking-cover.jpg",
        width: 227,
        height: 150,
        alt: "Better Living Center Groundbreaking pamphlet",
      }}
      pdfHref="/pdf/betliv/groundbreaking.pdf"
      pdfAriaLabel="Download Better Living Center Groundbreaking pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
