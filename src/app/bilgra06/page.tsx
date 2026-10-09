import type { Metadata } from "next";
import { BilgraNavChrome } from "@/components/BilgraNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — Billy Graham — nywf64.com",
  description:
    "Download the Billy Graham Pavilion Groundbreaking pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Billy Graham pamphlet page — Groundbreaking PDF.
 * Body from legacy bilgra06.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Bilgra06Page() {
  return (
    <BrochurePage
      heroLabel="Billy Graham"
      titleId="bilgra06-title"
      title="Pamphlet: Groundbreaking"
      hero={{
        src: "/images/bilgraoverview/hero-banner.jpg",
        alt: "Billy Graham Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BilgraNavChrome />}
      previousHref="/bilgra05"
      overviewHref="/bilgra01"
      nextHref="/bilgra07"
      cover={{
        src: "/images/bilgra06/groundbreaking-cover.jpg",
        width: 229,
        height: 150,
        alt: "Billy Graham Pavilion Groundbreaking pamphlet",
      }}
      pdfHref="/pdf/bilgra/groundbreaking.pdf"
      pdfAriaLabel="Download Billy Graham Pavilion Groundbreaking pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
