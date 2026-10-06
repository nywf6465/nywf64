import type { Metadata } from "next";
import { ChrsciNavChrome } from "@/components/ChrsciNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Newsletter: Progress Report #4 — Christian Science — nywf64.com",
  description:
    "Download Christian Science Progress Report #4 — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Christian Science newsletter page — Progress Report #4 PDF.
 * Body from legacy chrsci10.html with Adobe Reader paragraph/logo omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Chrsci10Page() {
  return (
    <BrochurePage
      heroLabel="Christian Science"
      titleId="chrsci10-title"
      title="Newsletter: Progress Report #4"
      hero={{
        src: "/images/chrscioverview/hero-banner.jpg",
        alt: "Christian Science at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChrsciNavChrome />}
      previousHref="/chrsci09"
      overviewHref="/chrscioverview"
      nextHref="/chrsci11"
      cover={{
        src: "/images/chrsci10/report4-cover.jpg",
        width: 161,
        height: 200,
        alt: "Christian Science Progress Report #4",
      }}
      pdfHref="/pdf/chrsci/report4.pdf"
      pdfAriaLabel="Download Christian Science Progress Report #4 (PDF)"
      documentNoun="newsletter"
    />
  );
}
