import type { Metadata } from "next";
import { ChrsciNavChrome } from "@/components/ChrsciNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Newsletter: Progress Report #2 — Christian Science — nywf64.com",
  description:
    "Download Christian Science Progress Report #2 — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Christian Science newsletter page — Progress Report #2 PDF.
 * Body from legacy chrsci08.html with Adobe Reader paragraph/logo omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Chrsci08Page() {
  return (
    <BrochurePage
      heroLabel="Christian Science"
      titleId="chrsci08-title"
      title="Newsletter: Progress Report #2"
      hero={{
        src: "/images/chrscioverview/hero-banner.jpg",
        alt: "Christian Science at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChrsciNavChrome />}
      previousHref="/chrsci07"
      overviewHref="/chrscioverview"
      nextHref="/chrsci09"
      cover={{
        src: "/images/chrsci08/report2-cover.jpg",
        width: 170,
        height: 200,
        alt: "Christian Science Progress Report #2",
      }}
      pdfHref="/pdf/chrsci/report2.pdf"
      pdfAriaLabel="Download Christian Science Progress Report #2 (PDF)"
      documentNoun="newsletter"
    />
  );
}
