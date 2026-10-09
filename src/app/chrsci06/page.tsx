import type { Metadata } from "next";
import { ChrsciNavChrome } from "@/components/ChrsciNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — Christian Science — nywf64.com",
  description:
    "Download the Christian Science Groundbreaking pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Christian Science pamphlet page — Groundbreaking PDF.
 * Body from legacy chrsci06.html with Adobe Reader paragraph/logo omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Chrsci06Page() {
  return (
    <BrochurePage
      heroLabel="Christian Science"
      titleId="chrsci06-title"
      title="Pamphlet: Groundbreaking"
      hero={{
        src: "/images/chrscioverview/hero-banner.jpg",
        alt: "Christian Science at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChrsciNavChrome />}
      previousHref="/chrsci05"
      overviewHref="/chrscioverview"
      nextHref="/chrsci07"
      cover={{
        src: "/images/chrsci06/groundbreaking-cover.jpg",
        width: 259,
        height: 150,
        alt: "Christian Science Groundbreaking pamphlet",
      }}
      pdfHref="/pdf/chrsci/groundbreaking.pdf"
      pdfAriaLabel="Download Christian Science Groundbreaking pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
