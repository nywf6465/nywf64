import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Newsletter: January 1965 - First Fair Season a Success — Tower of Light — nywf64.com",
  description: "Download the January 1965 - First Fair Season a Success newsletter — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — January 1965 - First Fair Season a Success PDF.
 * Body from legacy twrlit14.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit14Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit14-title"
      title="Newsletter: January 1965 - First Fair Season a Success"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit13"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit15"
      cover={{
        src: "/images/twrlit14/tol85.jpg",
        width: 136,
        height: 200,
        alt: "January 1965 - First Fair Season a Success newsletter",
      }}
      pdfHref="/pdf/twrlit/Newsletter_01.pdf"
      pdfAriaLabel="Download January 1965 - First Fair Season a Success newsletter (PDF)"
      documentNoun="newsletter"
    />
  );
}
