import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { FordNavChrome } from "@/components/FordNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Ford — nywf64.com",
  description:
    "Download the Ford Pavilion advertisements — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ford — Advertising.
 * Body from legacy ford04.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Ford04Page() {
  return (
    <BrochurePage
      heroLabel="Ford Pavilion"
      titleId="ford04-title"
      title="Advertising"
      hero={{
        src: "/images/fordoverview/hero-banner.jpg",
        alt: "Ford Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<FordNavChrome />}
      previousHref="/ford03"
      overviewHref="/fordoverview"
      nextHref="/ford05"
      cover={{
        src: "/images/ford04/ford150.jpg",
        width: 122,
        height: 200,
        alt: "Advertising",
      }}
      pdfHref="/pdf/ford/advertisements.pdf"
      pdfAriaLabel="Download Advertising (PDF)"
      documentNoun="advertisement collection"
    />
  );
}
