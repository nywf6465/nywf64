import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Article: 'Tower of Light' Pavilion is Major Fair Attraction — Tower of Light — nywf64.com",
  description: "Download the 'Tower of Light' Pavilion is Major Fair Attraction article — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — 'Tower of Light' Pavilion is Major Fair Attraction PDF.
 * Body from legacy twrlit21.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit21Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit21-title"
      title="Article: 'Tower of Light' Pavilion is Major Fair Attraction"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit20"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit22"
      cover={{
        src: "/images/twrlit21/tol80.jpg",
        width: 141,
        height: 200,
        alt: "'Tower of Light' Pavilion is Major Fair Attraction article",
      }}
      pdfHref="/pdf/twrlit/Article_11.pdf"
      pdfAriaLabel="Download 'Tower of Light' Pavilion is Major Fair Attraction article (PDF)"
      documentNoun="article"
    />
  );
}
