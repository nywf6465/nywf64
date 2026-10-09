import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Article: 'Tower of Light' Beacon Produces 12 Billion Candlepower — Tower of Light — nywf64.com",
  description: "Download the 'Tower of Light' Beacon Produces 12 Billion Candlepower article — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — 'Tower of Light' Beacon Produces 12 Billion Candlepower PDF.
 * Body from legacy twrlit23.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit23Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit23-title"
      title="Article: 'Tower of Light' Beacon Produces 12 Billion Candlepower"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit22"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit24"
      cover={{
        src: "/images/twrlit23/tol72.jpg",
        width: 142,
        height: 200,
        alt: "'Tower of Light' Beacon Produces 12 Billion Candlepower article",
      }}
      pdfHref="/pdf/twrlit/Article_03.pdf"
      pdfAriaLabel="Download 'Tower of Light' Beacon Produces 12 Billion Candlepower article (PDF)"
      documentNoun="article"
    />
  );
}
