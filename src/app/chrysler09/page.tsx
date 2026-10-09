import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { ChryslerNavChrome } from "@/components/ChryslerNavChrome";

export const metadata: Metadata = {
  title: "Brochure: THIS IS autofare — Chrysler — nywf64.com",
  description:
    "Download the Chrysler THIS IS autofare brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chrysler brochure page — THIS IS autofare PDF.
 * Body from legacy chrysler09.html with Adobe Reader paragraph/logo omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Chrysler09Page() {
  return (
    <BrochurePage
      heroLabel="Chrysler"
      titleId="chrysler09-title"
      title={
        <>
          Brochure: THIS IS <em>autofare</em>
        </>
      }
      hero={{
        src: "/images/chrysleroverview/hero-banner.jpg",
        alt: "Chrysler at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChryslerNavChrome />}
      previousHref="/chrysler08"
      overviewHref="/chrysleroverview"
      nextHref="/chrysler10"
      cover={{
        src: "/images/chrysler09/brochure-cover.jpg",
        width: 242,
        height: 100,
        alt: "THIS IS autofare brochure",
      }}
      pdfHref="/pdf/chrysler/brochure.pdf"
      pdfAriaLabel="Download THIS IS autofare brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
