import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { ClairNavChrome } from "@/components/ClairNavChrome";

export const metadata: Metadata = {
  title: "Souvenir Analysis Card — Clairol — nywf64.com",
  description:
    "Download the Clairol Color Carousel souvenir analysis card — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Clairol souvenir analysis card — brochure standard.
 * Body from legacy clair07.html with Adobe Reader paragraph/logo omitted.
 */
export default function Clair07Page() {
  return (
    <BrochurePage
      heroLabel="Clairol"
      titleId="clair07-title"
      title="Souvenir Analysis Card"
      hero={{
        src: "/images/clairoverview/hero-banner.jpg",
        alt: "Clairol Color Carousel at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ClairNavChrome />}
      previousHref="/clair06"
      overviewHref="/clairoverview"
      nextHref="/clair08"
      cover={{
        src: "/images/clair07/clair70.jpg",
        width: 82,
        height: 200,
        alt: "Clairol souvenir analysis card",
      }}
      pdfHref="/pdf/clair/analysiscard.pdf"
      pdfAriaLabel="Download Clairol souvenir analysis card (PDF)"
      documentNoun="card"
    />
  );
}
