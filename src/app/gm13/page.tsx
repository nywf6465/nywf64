import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GmNavChrome } from "@/components/GmNavChrome";

export const metadata: Metadata = {
  title: "Brochure: Your Guide to the General Motors Futurama \u2014 General Motors \u2014 nywf64.com",
  description:
    "Brochure: Your Guide to the General Motors Futurama \u2014 General Motors Pavilion at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * General Motors — Brochure: Your Guide to the General Motors Futurama.
 * Body from legacy gm13.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Gm13Page() {
  return (
    <BrochurePage
      heroLabel="General Motors Pavilion"
      titleId="gm13-title"
      title={"Brochure: Your Guide to the General Motors Futurama"}
      hero={{
        src: "/images/gmoverview/hero-banner.jpg",
        alt: "General Motors Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<GmNavChrome />}
      previousHref="/gm12"
      overviewHref="/gmoverview"
      nextHref="/gm14"
      cover={{
        src: "/images/gm13/gm171.jpg",
        width: 61,
        height: 150,
        alt: "Brochure: Your Guide to the General Motors Futurama",
      }}
      pdfHref="/pdf/gm/pavilion-guide-brochure.pdf"
      pdfAriaLabel={"Download Brochure: Your Guide to the General Motors Futurama (PDF)"}
      documentNoun={"brochure"}
    />
  );
}
