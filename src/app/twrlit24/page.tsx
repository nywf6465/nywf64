import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Article: Birds, Aircraft and the 'Tower of Light' — Tower of Light — nywf64.com",
  description: "Download the Birds, Aircraft and the 'Tower of Light' article — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — Birds, Aircraft and the 'Tower of Light' PDF.
 * Body from legacy twrlit24.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit24Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit24-title"
      title="Article: Birds, Aircraft and the 'Tower of Light'"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit23"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit25"
      cover={{
        src: "/images/twrlit24/tol73.jpg",
        width: 155,
        height: 200,
        alt: "Birds, Aircraft and the 'Tower of Light' article",
      }}
      pdfHref="/pdf/twrlit/Article_04.pdf"
      pdfAriaLabel="Download Birds, Aircraft and the 'Tower of Light' article (PDF)"
      documentNoun="article"
    />
  );
}
