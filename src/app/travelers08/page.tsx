import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { TravelersNavChrome } from "@/components/TravelersNavChrome";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — Travelers Insurance — nywf64.com",
  description:
    "Travelers Insurance Pavilion groundbreaking pamphlet (PDF) — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Travelers Insurance groundbreaking pamphlet PDF page.
 * Body from legacy travelers08.html (Adobe Reader block omitted).
 */
export default function Travelers08Page() {
  return (
    <BrochurePage
      heroLabel="Travelers Insurance"
      titleId="travelers08-title"
      title="Pamphlet: Groundbreaking"
      hero={{
        src: "/images/travelersoverview/hero-banner.jpg",
        alt: "Travelers Insurance at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TravelersNavChrome />}
      previousHref="/travelers07"
      overviewHref="/travelersoverview"
      nextHref="/travelers09"
      cover={{
        src: "/images/travelers08/trvlrs115.jpg",
        width: 200,
        height: 144,
        alt: "Travelers Insurance groundbreaking pamphlet cover",
      }}
      pdfHref="/pdf/travelers/Groundbreaking.pdf"
      pdfAriaLabel="Download Travelers Insurance groundbreaking pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
