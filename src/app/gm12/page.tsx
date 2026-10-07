import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GmNavChrome } from "@/components/GmNavChrome";

export const metadata: Metadata = {
  title: "Booklet: Let's go to the Fair and Futurama \u2014 General Motors \u2014 nywf64.com",
  description:
    "Booklet: Let's go to the Fair and Futurama \u2014 General Motors Pavilion at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * General Motors — Booklet: Let's go to the Fair and Futurama.
 * Body from legacy gm12.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Gm12Page() {
  return (
    <BrochurePage
      heroLabel="General Motors Pavilion"
      titleId="gm12-title"
      title={"Booklet: Let's go to the Fair and Futurama"}
      hero={{
        src: "/images/gmoverview/hero-banner.jpg",
        alt: "General Motors Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<GmNavChrome />}
      previousHref="/gm11"
      overviewHref="/gmoverview"
      nextHref="/gm13"
      cover={{
        src: "/images/gm12/gm170.jpg",
        width: 200,
        height: 125,
        alt: "Booklet: Let's go to the Fair and Futurama",
      }}
      pdfHref="/pdf/gm/lets-go-to-the-fair-booklet.pdf"
      pdfAriaLabel={"Download Booklet: Let's go to the Fair and Futurama (PDF)"}
      documentNoun={"booklet"}
    />
  );
}
