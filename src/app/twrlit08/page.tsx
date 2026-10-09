import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — Tower of Light — nywf64.com",
  description: "Download the Groundbreaking pamphlet — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — Groundbreaking PDF.
 * Body from legacy twrlit08.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit08Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit08-title"
      title="Pamphlet: Groundbreaking"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit07"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit09"
      cover={{
        src: "/images/twrlit08/tl66.jpg",
        width: 257,
        height: 200,
        alt: "Groundbreaking pamphlet",
      }}
      pdfHref="/pdf/twrlit/groundbreaking.pdf"
      pdfAriaLabel="Download Groundbreaking pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
