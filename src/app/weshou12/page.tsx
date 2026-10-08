import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { WeshouNavChrome } from "@/components/WeshouNavChrome";

export const metadata: Metadata = {
  title:
    "Brochure: The Westinghouse Time Capsules (Version 2) — Westinghouse — nywf64.com",
  description:
    "Download The Westinghouse Time Capsules brochure (Version 2) — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Westinghouse Time Capsules brochure (Version 2).
 * Body from legacy weshou12.html (Adobe Reader paragraph/logo omitted).
 * Layout: BrochurePage.
 */
export default function Weshou12Page() {
  return (
    <BrochurePage
      heroLabel="Westinghouse"
      titleId="weshou12-title"
      title="Brochure: The Westinghouse Time Capsules (Version 2)"
      hero={{
        src: "/images/weshouoverview/hero-banner.jpg",
        alt: "Westinghouse pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WeshouNavChrome />}
      previousHref="/weshou11"
      overviewHref="/weshouoverview"
      nextHref="/weshou13"
      cover={{
        src: "/images/weshou12/weshou78.jpg",
        width: 62,
        height: 150,
        alt: "The Westinghouse Time Capsules brochure (Version 2)",
      }}
      pdfHref="/pdf/weshou/brochure-version-2.pdf"
      pdfAriaLabel="Download The Westinghouse Time Capsules brochure Version 2 (PDF)"
      documentNoun="brochure"
    />
  );
}
