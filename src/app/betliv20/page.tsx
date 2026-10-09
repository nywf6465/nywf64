import type { Metadata } from "next";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title:
    "Brochure: Purex Penthouse Official World's Fair Women's Hospitality Center — Better Living Center — nywf64.com",
  description:
    "Download the Purex Penthouse Official World's Fair Women's Hospitality Center brochure — Better Living Center at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Better Living Center brochure page — Purex Penthouse Women's Hospitality Center.
 * Body from legacy betliv20.html with Adobe Reader paragraph/logo omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Betliv20Page() {
  return (
    <BrochurePage
      heroLabel="Better Living Center"
      titleId="betliv20-title"
      title="Brochure: Purex Penthouse Official World's Fair Women's Hospitality Center"
      hero={{
        src: "/images/betlivoverview/hero-banner.jpg",
        alt: "Better Living Center at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BetlivNavChrome />}
      previousHref="/betliv19"
      overviewHref="/betliv01"
      nextHref="/betliv21"
      cover={{
        src: "/images/betliv20/purex-cover.jpg",
        width: 93,
        height: 150,
        alt: "Purex Penthouse Official World's Fair Women's Hospitality Center brochure",
      }}
      pdfHref="/pdf/betliv/purexbrochure.pdf"
      pdfAriaLabel="Download Purex Penthouse Women's Hospitality Center brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
