import type { Metadata } from "next";
import { ChrsciNavChrome } from "@/components/ChrsciNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Newsletter: Progress Report #1 — Christian Science — nywf64.com",
  description:
    "Download Christian Science Progress Report #1 — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Christian Science newsletter page — Progress Report #1 PDF.
 * Body from legacy chrsci07.html with Adobe Reader paragraph/logo omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Chrsci07Page() {
  return (
    <BrochurePage
      heroLabel="Christian Science"
      titleId="chrsci07-title"
      title="Newsletter: Progress Report #1"
      hero={{
        src: "/images/chrscioverview/hero-banner.jpg",
        alt: "Christian Science at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChrsciNavChrome />}
      previousHref="/chrsci06"
      overviewHref="/chrscioverview"
      nextHref="/chrsci08"
      cover={{
        src: "/images/chrsci07/report1-cover.jpg",
        width: 171,
        height: 200,
        alt: "Christian Science Progress Report #1",
      }}
      pdfHref="/pdf/chrsci/report1.pdf"
      pdfAriaLabel="Download Christian Science Progress Report #1 (PDF)"
      documentNoun="newsletter"
    />
  );
}
