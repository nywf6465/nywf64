import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { WeshouNavChrome } from "@/components/WeshouNavChrome";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — Westinghouse — nywf64.com",
  description:
    "Download the Westinghouse Groundbreaking pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Westinghouse Groundbreaking pamphlet page.
 * Body from legacy weshou06.html (Adobe Reader paragraph/logo omitted).
 * Layout: BrochurePage.
 */
export default function Weshou06Page() {
  return (
    <BrochurePage
      heroLabel="Westinghouse"
      titleId="weshou06-title"
      title="Pamphlet: Groundbreaking"
      hero={{
        src: "/images/weshouoverview/hero-banner.jpg",
        alt: "Westinghouse pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WeshouNavChrome />}
      previousHref="/weshou05"
      overviewHref="/weshouoverview"
      nextHref="/weshou07"
      cover={{
        src: "/images/weshou06/weshou80.jpg",
        width: 200,
        height: 133,
        alt: "Westinghouse Groundbreaking pamphlet",
      }}
      pdfHref="/pdf/weshou/groundbreaking.pdf"
      pdfAriaLabel="Download Westinghouse Groundbreaking pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
