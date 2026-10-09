import type { Metadata } from "next";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Visitor's Guide — Better Living Center — nywf64.com",
  description:
    "Download the Better Living Center Visitor's Guide brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Better Living Center brochure page — Visitor's Guide PDF.
 * Body from legacy betliv10.html with Adobe Reader paragraph/logo omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Betliv10Page() {
  return (
    <BrochurePage
      heroLabel="Better Living Center"
      titleId="betliv10-title"
      title="Brochure: Visitor's Guide"
      hero={{
        src: "/images/betlivoverview/hero-banner.jpg",
        alt: "Better Living Center at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BetlivNavChrome />}
      previousHref="/betliv09"
      overviewHref="/betliv01"
      nextHref="/betliv11"
      cover={{
        src: "/images/betliv10/visitors-guide-cover.jpg",
        width: 82,
        height: 200,
        alt: "Better Living Center Visitor's Guide brochure",
      }}
      pdfHref="/pdf/betliv/visitorsguide.pdf"
      pdfAriaLabel="Download Better Living Center Visitor's Guide brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
