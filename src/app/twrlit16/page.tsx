import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "1964's The Enjoyment of Electricity - The Production Script — Tower of Light — nywf64.com",
  description: "Download the 1964's The Enjoyment of Electricity - The Production Script script — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — 1964's The Enjoyment of Electricity - The Production Script PDF.
 * Body from legacy twrlit16.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit16Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit16-title"
      title="1964's The Enjoyment of Electricity - The Production Script"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit15"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit17"
      cover={{
        src: "/images/twrlit16/tol87.jpg",
        width: 141,
        height: 200,
        alt: "1964's The Enjoyment of Electricity - The Production Script script",
      }}
      pdfHref="/pdf/twrlit/Script.pdf"
      pdfAriaLabel="Download 1964's The Enjoyment of Electricity - The Production Script script (PDF)"
      documentNoun="script"
    />
  );
}
