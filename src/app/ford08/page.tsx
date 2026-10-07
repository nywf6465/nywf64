import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { FordNavChrome } from "@/components/FordNavChrome";

export const metadata: Metadata = {
  title: "Brochure: Ride Walt Disney's Magic Skyway — Ford — nywf64.com",
  description:
    "Download the Ford Pavilion brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ford — Brochure: Ride Walt Disney's Magic Skyway.
 * Body from legacy ford08.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Ford08Page() {
  return (
    <BrochurePage
      heroLabel="Ford Pavilion"
      titleId="ford08-title"
      title="Brochure: Ride Walt Disney\'s Magic Skyway"
      hero={{
        src: "/images/fordoverview/hero-banner.jpg",
        alt: "Ford Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<FordNavChrome />}
      previousHref="/ford07"
      overviewHref="/fordoverview"
      nextHref="/ford09"
      cover={{
        src: "/images/ford08/ford151.jpg",
        width: 200,
        height: 85,
        alt: "Brochure: Ride Walt Disney\'s Magic Skyway",
      }}
      pdfHref="/pdf/ford/brochure-01.pdf"
      pdfAriaLabel="Download Brochure: Ride Walt Disney's Magic Skyway (PDF)"
      documentNoun="brochure"
    />
  );
}
