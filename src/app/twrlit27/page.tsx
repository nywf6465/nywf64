import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Article: Giant 'Lazy Susan' Takes Fair Visitors Through Industry Show — Tower of Light — nywf64.com",
  description: "Download the Giant 'Lazy Susan' Takes Fair Visitors Through Industry Show article — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — Giant 'Lazy Susan' Takes Fair Visitors Through Industry Show PDF.
 * Body from legacy twrlit27.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit27Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit27-title"
      title="Article: Giant 'Lazy Susan' Takes Fair Visitors Through Industry Show"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit26"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit28"
      cover={{
        src: "/images/twrlit27/tol76.jpg",
        width: 137,
        height: 200,
        alt: "Giant 'Lazy Susan' Takes Fair Visitors Through Industry Show article",
      }}
      pdfHref="/pdf/twrlit/Article_07.pdf"
      pdfAriaLabel="Download Giant 'Lazy Susan' Takes Fair Visitors Through Industry Show article (PDF)"
      documentNoun="article"
    />
  );
}
