import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Article: The Story of the 'Tower of Light' and 'The Enjoyment of Electricity' — Tower of Light — nywf64.com",
  description: "Download the The Story of the 'Tower of Light' and 'The Enjoyment of Electricity' article — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — The Story of the 'Tower of Light' and 'The Enjoyment of Electricity' PDF.
 * Body from legacy twrlit20.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit20Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit20-title"
      title="Article: The Story of the 'Tower of Light' and 'The Enjoyment of Electricity'"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit19"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit21"
      cover={{
        src: "/images/twrlit20/tol79.jpg",
        width: 150,
        height: 200,
        alt: "The Story of the 'Tower of Light' and 'The Enjoyment of Electricity' article",
      }}
      pdfHref="/pdf/twrlit/Article_10.pdf"
      pdfAriaLabel="Download The Story of the 'Tower of Light' and 'The Enjoyment of Electricity' article (PDF)"
      documentNoun="article"
    />
  );
}
