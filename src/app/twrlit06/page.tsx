import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Original Concept — Tower of Light — nywf64.com",
  description: "Download the Original Concept brochure — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — Original Concept PDF.
 * Body from legacy twrlit06.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit06Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit06-title"
      title="Original Concept"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit05"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit07"
      cover={{
        src: "/images/twrlit06/tol68.jpg",
        width: 147,
        height: 200,
        alt: "Original Concept brochure",
      }}
      pdfHref="/pdf/twrlit/Original_Concept.pdf"
      pdfAriaLabel="Download Original Concept brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
