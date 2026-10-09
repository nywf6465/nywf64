import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Article: Exterior Illumination of 'Tower of Light' Creates a Man-Made Aurora Borealis — Tower of Light — nywf64.com",
  description: "Download the Exterior Illumination of 'Tower of Light' Creates a Man-Made Aurora Borealis article — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — Exterior Illumination of 'Tower of Light' Creates a Man-Made Aurora Borealis PDF.
 * Body from legacy twrlit25.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit25Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit25-title"
      title="Article: Exterior Illumination of 'Tower of Light' Creates a Man-Made Aurora Borealis"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit24"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit26"
      cover={{
        src: "/images/twrlit25/tol74.jpg",
        width: 133,
        height: 200,
        alt: "Exterior Illumination of 'Tower of Light' Creates a Man-Made Aurora Borealis article",
      }}
      pdfHref="/pdf/twrlit/Article_05.pdf"
      pdfAriaLabel="Download Exterior Illumination of 'Tower of Light' Creates a Man-Made Aurora Borealis article (PDF)"
      documentNoun="article"
    />
  );
}
