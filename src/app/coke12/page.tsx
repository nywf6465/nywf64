import type { Metadata } from "next";
import { CokeNavChrome } from "@/components/CokeNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title:
    "Brochure: News of the World of Refreshment 1964 — Coca-Cola — nywf64.com",
  description:
    "Download the Coca-Cola News of the World of Refreshment 1964 brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Coca-Cola brochure page — News of the World of Refreshment 1964 PDF.
 * Body from legacy coke12.html with Adobe Reader paragraph/logo omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Coke12Page() {
  return (
    <BrochurePage
      heroLabel="Coca-Cola"
      titleId="coke12-title"
      title="Brochure: News of the World of Refreshment 1964"
      hero={{
        src: "/images/cokeoverview/hero-banner.jpg",
        alt: "Coca-Cola at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<CokeNavChrome />}
      previousHref="/coke11"
      overviewHref="/cokeoverview"
      nextHref="/coke13"
      cover={{
        src: "/images/coke12/coke05.jpg",
        width: 157,
        height: 200,
        alt: "News of the World of Refreshment 1964 brochure",
      }}
      pdfHref="/pdf/coke/news-refreshment-1964.pdf"
      pdfAriaLabel="Download News of the World of Refreshment 1964 brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
