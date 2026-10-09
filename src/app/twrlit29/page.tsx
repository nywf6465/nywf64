import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Article: Aluminum Sculpture Adds Final Touch to Exhibit Building — Tower of Light — nywf64.com",
  description: "Download the Aluminum Sculpture Adds Final Touch to Exhibit Building article — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — Aluminum Sculpture Adds Final Touch to Exhibit Building PDF.
 * Body from legacy twrlit29.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit29Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit29-title"
      title="Article: Aluminum Sculpture Adds Final Touch to Exhibit Building"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit28"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit30"
      cover={{
        src: "/images/twrlit29/tol78.jpg",
        width: 145,
        height: 200,
        alt: "Aluminum Sculpture Adds Final Touch to Exhibit Building article",
      }}
      pdfHref="/pdf/twrlit/Article_09.pdf"
      pdfAriaLabel="Download Aluminum Sculpture Adds Final Touch to Exhibit Building article (PDF)"
      documentNoun="article"
    />
  );
}
