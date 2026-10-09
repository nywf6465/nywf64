import type { Metadata } from "next";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title:
    "Brochure: Plan for the Development of Better Living Building — Better Living Center — nywf64.com",
  description:
    "Download the Plan for the Development of Better Living Building brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Better Living Center brochure page — Plan for the Development PDF.
 * Body from legacy betliv06.html with Adobe Reader paragraph/logo omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Betliv06Page() {
  return (
    <BrochurePage
      heroLabel="Better Living Center"
      titleId="betliv06-title"
      title="Brochure: Plan for the Development of Better Living Building"
      hero={{
        src: "/images/betlivoverview/hero-banner.jpg",
        alt: "Better Living Center at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BetlivNavChrome />}
      previousHref="/betliv05"
      overviewHref="/betliv01"
      nextHref="/betliv07"
      cover={{
        src: "/images/betliv06/sales-brochure-cover.jpg",
        width: 157,
        height: 200,
        alt: "Plan for the Development of Better Living Building brochure",
      }}
      pdfHref="/pdf/betliv/salesbrochure.pdf"
      pdfAriaLabel="Download Plan for the Development of Better Living Building brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
