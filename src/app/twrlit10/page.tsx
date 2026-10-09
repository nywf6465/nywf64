import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Follow the Tower of Light — Tower of Light — nywf64.com",
  description: "Download the Follow the Tower of Light brochure — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — Follow the Tower of Light PDF.
 * Body from legacy twrlit10.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit10Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit10-title"
      title="Brochure: Follow the Tower of Light"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit09"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit11"
      cover={{
        src: "/images/twrlit10/tol66.jpg",
        width: 87,
        height: 200,
        alt: "Follow the Tower of Light brochure",
      }}
      pdfHref="/pdf/twrlit/Brochure_2.pdf"
      pdfAriaLabel="Download Follow the Tower of Light brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
