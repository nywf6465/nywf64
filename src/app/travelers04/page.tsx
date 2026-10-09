import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { TravelersNavChrome } from "@/components/TravelersNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Travelers Insurance — nywf64.com",
  description:
    "Travelers Insurance pavilion advertising booklet (PDF) — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Travelers Insurance advertising PDF page.
 * Body from legacy travelers04.html (Adobe Reader block omitted).
 */
export default function Travelers04Page() {
  return (
    <BrochurePage
      heroLabel="Travelers Insurance"
      titleId="travelers04-title"
      title="Advertising"
      hero={{
        src: "/images/travelersoverview/hero-banner.jpg",
        alt: "Travelers Insurance at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TravelersNavChrome />}
      previousHref="/travelers03"
      overviewHref="/travelersoverview"
      nextHref="/travelers05"
      cover={{
        src: "/images/travelers04/trvlrs114.jpg",
        width: 153,
        height: 200,
        alt: "Travelers Insurance advertising booklet cover",
      }}
      pdfHref="/pdf/travelers/Advertising.pdf"
      pdfAriaLabel="Download Travelers Insurance advertising booklet (PDF)"
      documentNoun="advertisements"
    />
  );
}
