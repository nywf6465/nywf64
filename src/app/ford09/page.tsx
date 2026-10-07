import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { FordNavChrome } from "@/components/FordNavChrome";

export const metadata: Metadata = {
  title: "Brochure: Aurora — Ford — nywf64.com",
  description:
    "Download the Ford Pavilion brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ford — Brochure: Aurora.
 * Body from legacy ford09.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Ford09Page() {
  return (
    <BrochurePage
      heroLabel="Ford Pavilion"
      titleId="ford09-title"
      title="Brochure: Aurora"
      hero={{
        src: "/images/fordoverview/hero-banner.jpg",
        alt: "Ford Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<FordNavChrome />}
      previousHref="/ford08"
      overviewHref="/fordoverview"
      nextHref="/ford10"
      cover={{
        src: "/images/ford09/ford16.jpg",
        width: 200,
        height: 93,
        alt: "Brochure: Aurora",
      }}
      pdfHref="/pdf/ford/aurora.pdf"
      pdfAriaLabel="Download Brochure: Aurora (PDF)"
      documentNoun="brochure"
    />
  );
}
