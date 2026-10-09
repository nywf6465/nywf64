import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { WeshouNavChrome } from "@/components/WeshouNavChrome";

export const metadata: Metadata = {
  title:
    "Brochure: The Westinghouse Time Capsules (Version 1) — Westinghouse — nywf64.com",
  description:
    "Download The Westinghouse Time Capsules brochure (Version 1) — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Westinghouse Time Capsules brochure (Version 1).
 * Body from legacy weshou11.html (Adobe Reader paragraph/logo omitted).
 * Layout: BrochurePage.
 */
export default function Weshou11Page() {
  return (
    <BrochurePage
      heroLabel="Westinghouse"
      titleId="weshou11-title"
      title="Brochure: The Westinghouse Time Capsules (Version 1)"
      hero={{
        src: "/images/weshouoverview/hero-banner.jpg",
        alt: "Westinghouse pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WeshouNavChrome />}
      previousHref="/weshou10"
      overviewHref="/weshouoverview"
      nextHref="/weshou12"
      cover={{
        src: "/images/weshou11/weshou78.jpg",
        width: 62,
        height: 150,
        alt: "The Westinghouse Time Capsules brochure (Version 1)",
      }}
      pdfHref="/pdf/weshou/brochure-version-1.pdf"
      pdfAriaLabel="Download The Westinghouse Time Capsules brochure Version 1 (PDF)"
      documentNoun="brochure"
    />
  );
}
