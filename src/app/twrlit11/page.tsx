import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Con Edison at the Fair — Tower of Light — nywf64.com",
  description: "Download the Con Edison at the Fair brochure — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — Con Edison at the Fair PDF.
 * Body from legacy twrlit11.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit11Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit11-title"
      title="Brochure: Con Edison at the Fair"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit10"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit12"
      cover={{
        src: "/images/twrlit11/tol67.jpg",
        width: 200,
        height: 133,
        alt: "Con Edison at the Fair brochure",
      }}
      pdfHref="/pdf/twrlit/Brochure_3.pdf"
      pdfAriaLabel="Download Con Edison at the Fair brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
