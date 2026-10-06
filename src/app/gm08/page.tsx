import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GmNavChrome } from "@/components/GmNavChrome";

export const metadata: Metadata = {
  title: "Press Releases & Fact Sheets \u2014 General Motors \u2014 nywf64.com",
  description:
    "Press Releases & Fact Sheets \u2014 General Motors Pavilion at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * General Motors — Press Releases & Fact Sheets.
 * Body from legacy gm08.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Gm08Page() {
  return (
    <BrochurePage
      heroLabel="General Motors Pavilion"
      titleId="gm08-title"
      title={"Press Releases & Fact Sheets"}
      hero={{
        src: "/images/gmoverview/hero-banner.jpg",
        alt: "General Motors Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<GmNavChrome />}
      previousHref="/gm07"
      overviewHref="/gmoverview"
      nextHref="/gm09"
      cover={{
        src: "/images/gm08/gm216.jpg",
        width: 155,
        height: 200,
        alt: "Press Releases & Fact Sheets",
      }}
      pdfHref="/pdf/gm/newsletters.pdf"
      pdfAriaLabel={"Download Press Releases & Fact Sheets (PDF)"}
      documentNoun={"press releases"}
    />
  );
}
