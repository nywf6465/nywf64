import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GmNavChrome } from "@/components/GmNavChrome";

export const metadata: Metadata = {
  title: "Advertising \u2014 General Motors \u2014 nywf64.com",
  description:
    "Advertising \u2014 General Motors Pavilion at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * General Motors — Advertising.
 * Body from legacy gm04.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Gm04Page() {
  return (
    <BrochurePage
      heroLabel="General Motors Pavilion"
      titleId="gm04-title"
      title={"Advertising"}
      hero={{
        src: "/images/gmoverview/hero-banner.jpg",
        alt: "General Motors Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<GmNavChrome />}
      previousHref="/gm03"
      overviewHref="/gmoverview"
      nextHref="/gm05"
      cover={{
        src: "/images/gm04/gm217.jpg",
        width: 200,
        height: 244,
        alt: "Advertising",
      }}
      pdfHref="/pdf/gm/advertisements.pdf"
      pdfAriaLabel={"Download Advertising (PDF)"}
      documentNoun={"advertisements"}
    />
  );
}
