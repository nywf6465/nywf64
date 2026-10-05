import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { ChryslerNavChrome } from "@/components/ChryslerNavChrome";

export const metadata: Metadata = {
  title: "Pamphlet: THIS IS autofare — Chrysler — nywf64.com",
  description:
    "Download the Chrysler THIS IS autofare pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chrysler pamphlet page — THIS IS autofare PDF.
 * Body from legacy chrysler08.html with Adobe Reader paragraph/logo omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Chrysler08Page() {
  return (
    <BrochurePage
      heroLabel="Chrysler"
      titleId="chrysler08-title"
      title={
        <>
          Pamphlet: THIS IS <em>autofare</em>
        </>
      }
      hero={{
        src: "/images/chrysleroverview/hero-banner.jpg",
        alt: "Chrysler at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChryslerNavChrome />}
      previousHref="/chrysler07"
      overviewHref="/chrysleroverview"
      nextHref="/chrysler09"
      cover={{
        src: "/images/chrysler08/pamphlet-cover.jpg",
        width: 248,
        height: 150,
        alt: "THIS IS autofare pamphlet",
      }}
      pdfHref="/pdf/chrysler/pamphlet.pdf"
      pdfAriaLabel="Download THIS IS autofare pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
