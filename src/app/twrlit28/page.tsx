import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Article: 'Tower of Light' Architects Known Around the Globe for 'Out-of-This-World' Creations — Tower of Light — nywf64.com",
  description: "Download the 'Tower of Light' Architects Known Around the Globe for 'Out-of-This-World' Creations article — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — 'Tower of Light' Architects Known Around the Globe for 'Out-of-This-World' Creations PDF.
 * Body from legacy twrlit28.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit28Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit28-title"
      title="Article: 'Tower of Light' Architects Known Around the Globe for 'Out-of-This-World' Creations"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit27"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit29"
      cover={{
        src: "/images/twrlit28/tol77.jpg",
        width: 134,
        height: 200,
        alt: "'Tower of Light' Architects Known Around the Globe for 'Out-of-This-World' Creations article",
      }}
      pdfHref="/pdf/twrlit/Article_08.pdf"
      pdfAriaLabel="Download 'Tower of Light' Architects Known Around the Globe for 'Out-of-This-World' Creations article (PDF)"
      documentNoun="article"
    />
  );
}
