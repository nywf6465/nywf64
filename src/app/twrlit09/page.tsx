import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Tower of Light — Tower of Light — nywf64.com",
  description: "Download the Tower of Light brochure — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — Tower of Light PDF.
 * Body from legacy twrlit09.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit09Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit09-title"
      title="Brochure: Tower of Light"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit08"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit10"
      cover={{
        src: "/images/twrlit09/tol65.jpg",
        width: 88,
        height: 200,
        alt: "Tower of Light brochure",
      }}
      pdfHref="/pdf/twrlit/Brochure_1.pdf"
      pdfAriaLabel="Download Tower of Light brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
