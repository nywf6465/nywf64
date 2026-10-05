import type { Metadata } from "next";
import { ChrsciNavChrome } from "@/components/ChrsciNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title:
    "Brochure: Christian Science at the World's Fair 1964-1965 — Christian Science — nywf64.com",
  description:
    "Download the Christian Science at the World's Fair 1964-1965 brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Christian Science brochure page — pavilion brochure PDF.
 * Body from legacy chrsci11.html with Adobe Reader paragraph/logo omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Chrsci11Page() {
  return (
    <BrochurePage
      heroLabel="Christian Science"
      titleId="chrsci11-title"
      title="Brochure: Christian Science at the World's Fair 1964-1965"
      hero={{
        src: "/images/chrscioverview/hero-banner.jpg",
        alt: "Christian Science at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChrsciNavChrome />}
      previousHref="/chrsci10"
      overviewHref="/chrscioverview"
      nextHref="/chrsci12"
      cover={{
        src: "/images/chrsci11/brochure-cover.jpg",
        width: 84,
        height: 200,
        alt: "Christian Science at the World's Fair 1964-1965 brochure",
      }}
      pdfHref="/pdf/chrsci/brochure.pdf"
      pdfAriaLabel="Download Christian Science at the World's Fair 1964-1965 brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
