import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GmNavChrome } from "@/components/GmNavChrome";

export const metadata: Metadata = {
  title: "Brochure: See the Future First \u2014 General Motors \u2014 nywf64.com",
  description:
    "Brochure: See the Future First \u2014 General Motors Pavilion at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * General Motors — Brochure: See the Future First.
 * Body from legacy gm14.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Gm14Page() {
  return (
    <BrochurePage
      heroLabel="General Motors Pavilion"
      titleId="gm14-title"
      title={"Brochure: See the Future First"}
      hero={{
        src: "/images/gmoverview/hero-banner.jpg",
        alt: "General Motors Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<GmNavChrome />}
      previousHref="/gm13"
      overviewHref="/gmoverview"
      nextHref="/gm15"
      cover={{
        src: "/images/gm14/gm172.jpg",
        width: 200,
        height: 82,
        alt: "Brochure: See the Future First",
      }}
      pdfHref="/pdf/gm/see-the-future-first-brochure.pdf"
      pdfAriaLabel={"Download Brochure: See the Future First (PDF)"}
      documentNoun={"brochure"}
    />
  );
}
