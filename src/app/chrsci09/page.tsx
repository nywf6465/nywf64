import type { Metadata } from "next";
import { ChrsciNavChrome } from "@/components/ChrsciNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Newsletter: Progress Report #3 — Christian Science — nywf64.com",
  description:
    "Download Christian Science Progress Report #3 — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Christian Science newsletter page — Progress Report #3 PDF.
 * Body from legacy chrsci09.html with Adobe Reader paragraph/logo omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Chrsci09Page() {
  return (
    <BrochurePage
      heroLabel="Christian Science"
      titleId="chrsci09-title"
      title="Newsletter: Progress Report #3"
      hero={{
        src: "/images/chrscioverview/hero-banner.jpg",
        alt: "Christian Science at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChrsciNavChrome />}
      previousHref="/chrsci08"
      overviewHref="/chrscioverview"
      nextHref="/chrsci10"
      cover={{
        src: "/images/chrsci09/report3-cover.jpg",
        width: 171,
        height: 200,
        alt: "Christian Science Progress Report #3",
      }}
      pdfHref="/pdf/chrsci/report3.pdf"
      pdfAriaLabel="Download Christian Science Progress Report #3 (PDF)"
      documentNoun="newsletter"
    />
  );
}
