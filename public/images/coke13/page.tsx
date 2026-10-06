import type { Metadata } from "next";
import { CokeNavChrome } from "@/components/CokeNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title:
    "Brochure: News of the World of Refreshment 1965 — Coca-Cola — nywf64.com",
  description:
    "Download the Coca-Cola News of the World of Refreshment 1965 brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Coca-Cola brochure page — News of the World of Refreshment 1965 PDF.
 * Body from legacy coke13.html with Adobe Reader paragraph/logo omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Coke13Page() {
  return (
    <BrochurePage
      heroLabel="Coca-Cola"
      titleId="coke13-title"
      title="Brochure: News of the World of Refreshment 1965"
      hero={{
        src: "/images/cokeoverview/hero-banner.jpg",
        alt: "Coca-Cola at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<CokeNavChrome />}
      previousHref="/coke12"
      overviewHref="/cokeoverview"
      nextHref="/cokeoverview"
      cover={{
        src: "/images/coke13/coke57.jpg",
        width: 155,
        height: 200,
        alt: "News of the World of Refreshment 1965 brochure",
      }}
      pdfHref="/pdf/coke/news-refreshment-1965.pdf"
      pdfAriaLabel="Download News of the World of Refreshment 1965 brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
