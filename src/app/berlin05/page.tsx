import type { Metadata } from "next";
import { BerlinNavChrome } from "@/components/BerlinNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Pavilion Guide II — Berlin — nywf64.com",
  description:
    "Download the Berlin Pavilion Guide II brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Berlin brochure page — Pavilion Guide II PDF.
 * Body from legacy berlin05.html with Adobe Reader paragraph/logo omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Berlin05Page() {
  return (
    <BrochurePage
      heroLabel="Berlin"
      titleId="berlin05-title"
      title="Brochure: Pavilion Guide II"
      hero={{
        src: "/images/berlinoverview/hero-banner.jpg",
        alt: "Berlin at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BerlinNavChrome />}
      previousHref="/berlin04"
      overviewHref="/berlin01"
      nextHref="/berlin06"
      cover={{
        src: "/images/berlin05/pavilion-guide-ii-cover.jpg",
        width: 94,
        height: 200,
        alt: "Berlin Pavilion Guide II brochure",
      }}
      pdfHref="/pdf/berlin/pavilion-guide-ii.pdf"
      pdfAriaLabel="Download Berlin Pavilion Guide II brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
