import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Final Concept — Tower of Light — nywf64.com",
  description: "Download the Final Concept brochure — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — Final Concept PDF.
 * Body from legacy twrlit07.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit07Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit07-title"
      title="Final Concept"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit06"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit08"
      cover={{
        src: "/images/twrlit07/tol69.jpg",
        width: 147,
        height: 200,
        alt: "Final Concept brochure",
      }}
      pdfHref="/pdf/twrlit/Final_Concept.pdf"
      pdfAriaLabel="Download Final Concept brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
