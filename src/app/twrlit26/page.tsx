import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Article: 'Tower of Light' Pavilion Covered With 'Sandwich-Type' Aluminum — Tower of Light — nywf64.com",
  description: "Download the 'Tower of Light' Pavilion Covered With 'Sandwich-Type' Aluminum article — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — 'Tower of Light' Pavilion Covered With 'Sandwich-Type' Aluminum PDF.
 * Body from legacy twrlit26.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit26Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit26-title"
      title="Article: 'Tower of Light' Pavilion Covered With 'Sandwich-Type' Aluminum"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit25"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit27"
      cover={{
        src: "/images/twrlit26/tol75.jpg",
        width: 132,
        height: 200,
        alt: "'Tower of Light' Pavilion Covered With 'Sandwich-Type' Aluminum article",
      }}
      pdfHref="/pdf/twrlit/Article_06.pdf"
      pdfAriaLabel="Download 'Tower of Light' Pavilion Covered With 'Sandwich-Type' Aluminum article (PDF)"
      documentNoun="article"
    />
  );
}
