import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Newsletter: March 1965 - Holiday With Light Press Preview \"A Hit\" — Tower of Light — nywf64.com",
  description: "Download the March 1965 - Holiday With Light Press Preview \"A Hit\" newsletter — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — March 1965 - Holiday With Light Press Preview "A Hit" PDF.
 * Body from legacy twrlit15.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit15Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit15-title"
      title={'Newsletter: March 1965 - Holiday With Light Press Preview "A Hit"'}
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit14"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit16"
      cover={{
        src: "/images/twrlit15/tol86.jpg",
        width: 138,
        height: 200,
        alt: 'March 1965 - Holiday With Light Press Preview "A Hit" newsletter',
      }}
      pdfHref="/pdf/twrlit/Newsletter_02.pdf"
      pdfAriaLabel={'Download March 1965 - Holiday With Light Press Preview "A Hit" newsletter (PDF)'}
      documentNoun="newsletter"
    />
  );
}
