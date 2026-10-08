import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Article: The History of the Industry's Participation in the N. Y. World's Fair — Tower of Light — nywf64.com",
  description: "Download the The History of the Industry's Participation in the N. Y. World's Fair article — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — The History of the Industry's Participation in the N. Y. World's Fair PDF.
 * Body from legacy twrlit18.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit18Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit18-title"
      title="Article: The History of the Industry's Participation in the N. Y. World's Fair"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit17"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit19"
      cover={{
        src: "/images/twrlit18/tol70.jpg",
        width: 170,
        height: 200,
        alt: "The History of the Industry's Participation in the N. Y. World's Fair article",
      }}
      pdfHref="/pdf/twrlit/Article_01.pdf"
      pdfAriaLabel="Download The History of the Industry's Participation in the N. Y. World's Fair article (PDF)"
      documentNoun="article"
    />
  );
}
