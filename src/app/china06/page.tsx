import type { Metadata } from "next";
import { ChinaNavChrome } from "@/components/ChinaNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — China — nywf64.com",
  description:
    "Download the Republic of China Groundbreaking pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * China pamphlet page — Groundbreaking PDF.
 * Body from legacy china06.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function China06Page() {
  return (
    <BrochurePage
      heroLabel="China"
      titleId="china06-title"
      title="Pamphlet: Groundbreaking"
      hero={{
        src: "/images/chinaoverview/hero-banner.jpg",
        alt: "China at the 1964/1965 New York World’s Fair",
        width: 1906,
        height: 825,
      }}
      nav={<ChinaNavChrome />}
      previousHref="/china05"
      overviewHref="/chinaoverview"
      nextHref="/china07"
      cover={{
        src: "/images/china06/groundbreaking-cover.jpg",
        width: 191,
        height: 150,
        alt: "Republic of China Groundbreaking pamphlet",
      }}
      pdfHref="/pdf/china/groundbreaking.pdf"
      pdfAriaLabel="Download Republic of China Groundbreaking pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
