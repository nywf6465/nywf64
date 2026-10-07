import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GmNavChrome } from "@/components/GmNavChrome";

export const metadata: Metadata = {
  title: "Brochure: Frigidaire at the Fair \u2014 General Motors \u2014 nywf64.com",
  description:
    "Brochure: Frigidaire at the Fair \u2014 General Motors Pavilion at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * General Motors — Brochure: Frigidaire at the Fair.
 * Body from legacy gm16.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Gm16Page() {
  return (
    <BrochurePage
      heroLabel="General Motors Pavilion"
      titleId="gm16-title"
      title={"Brochure: Frigidaire at the Fair"}
      hero={{
        src: "/images/gmoverview/hero-banner.jpg",
        alt: "General Motors Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<GmNavChrome />}
      previousHref="/gm15"
      overviewHref="/gmoverview"
      nextHref="/gm17"
      cover={{
        src: "/images/gm16/gm174.jpg",
        width: 200,
        height: 87,
        alt: "Brochure: Frigidaire at the Fair",
      }}
      pdfHref="/pdf/gm/kitchens-around-the-world-brochure.pdf"
      pdfAriaLabel={"Download Brochure: Frigidaire at the Fair (PDF)"}
      documentNoun={"brochure"}
    />
  );
}
