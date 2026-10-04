import type { Metadata } from "next";
import { BerlinNavChrome } from "@/components/BerlinNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Pavilion Guide I — Berlin — nywf64.com",
  description:
    "Download the Berlin Pavilion Guide I brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Berlin brochure page — Pavilion Guide I PDF.
 * Body from legacy berlin04.html with Adobe Reader paragraph/logo omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Berlin04Page() {
  return (
    <BrochurePage
      heroLabel="Berlin"
      titleId="berlin04-title"
      title="Brochure: Pavilion Guide I"
      hero={{
        src: "/images/berlinoverview/hero-banner.jpg",
        alt: "Berlin at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BerlinNavChrome />}
      previousHref="/berlin03"
      overviewHref="/berlinoverview"
      nextHref="/berlin05"
      cover={{
        src: "/images/berlin04/pavilion-guide-i-cover.jpg",
        width: 84,
        height: 200,
        alt: "Berlin Pavilion Guide I brochure",
      }}
      pdfHref="/pdf/berlin/pavilion-guide-i.pdf"
      pdfAriaLabel="Download Berlin Pavilion Guide I brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
