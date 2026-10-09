import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Article: Bliss Creates Electronically Controlled Characters — Tower of Light — nywf64.com",
  description: "Download the Bliss Creates Electronically Controlled Characters article — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — Bliss Creates Electronically Controlled Characters PDF.
 * Body from legacy twrlit22.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit22Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit22-title"
      title="Article: Bliss Creates Electronically Controlled Characters"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit21"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit23"
      cover={{
        src: "/images/twrlit22/tol81.jpg",
        width: 139,
        height: 200,
        alt: "Bliss Creates Electronically Controlled Characters article",
      }}
      pdfHref="/pdf/twrlit/Article_12.pdf"
      pdfAriaLabel="Download Bliss Creates Electronically Controlled Characters article (PDF)"
      documentNoun="article"
    />
  );
}
