import type { Metadata } from "next";
import { CengriNavChrome } from "@/components/CengriNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — Century Grill — nywf64.com",
  description:
    "Download the Century Grill Groundbreaking pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Century Grill pamphlet page — Groundbreaking PDF.
 * Body from legacy cengri04.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 * Last Century Grill topic: NEXT returns to /cengrioverview.
 */
export default function Cengri04Page() {
  return (
    <BrochurePage
      heroLabel="Century Grill"
      titleId="cengri04-title"
      title="Pamphlet: Groundbreaking"
      hero={{
        src: "/images/cengrioverview/hero-banner.jpg",
        alt: "Century Grill at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<CengriNavChrome />}
      previousHref="/cengri03"
      overviewHref="/cengrioverview"
      nextHref="/cengrioverview"
      cover={{
        src: "/images/cengri04/groundbreaking-cover.jpg",
        width: 227,
        height: 150,
        alt: "Century Grill Groundbreaking pamphlet",
      }}
      pdfHref="/pdf/cengri/groundbreaking.pdf"
      pdfAriaLabel="Download Century Grill Groundbreaking pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
