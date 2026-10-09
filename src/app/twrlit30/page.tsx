import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Article: Lighting at the Fair - Tower of Light Pavilion — Tower of Light — nywf64.com",
  description: "Download the Lighting at the Fair - Tower of Light Pavilion article — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — Lighting at the Fair - Tower of Light Pavilion PDF.
 * Body from legacy twrlit30.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit30Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit30-title"
      title="Article: Lighting at the Fair - Tower of Light Pavilion"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit29"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit31"
      cover={{
        src: "/images/twrlit30/tol82.jpg",
        width: 146,
        height: 200,
        alt: "Lighting at the Fair - Tower of Light Pavilion article",
      }}
      pdfHref="/pdf/twrlit/Article_13.pdf"
      pdfAriaLabel="Download Lighting at the Fair - Tower of Light Pavilion article (PDF)"
      documentNoun="article"
    />
  );
}
