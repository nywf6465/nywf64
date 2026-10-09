import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Article: Magnificent Pavilion Houses Show of Investor-Owned Electric Utility Industry — Tower of Light — nywf64.com",
  description: "Download the Magnificent Pavilion Houses Show of Investor-Owned Electric Utility Industry article — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light brochure page — Magnificent Pavilion Houses Show of Investor-Owned Electric Utility Industry PDF.
 * Body from legacy twrlit19.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Twrlit19Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit19-title"
      title="Article: Magnificent Pavilion Houses Show of Investor-Owned Electric Utility Industry"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit18"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit20"
      cover={{
        src: "/images/twrlit19/tol71.jpg",
        width: 209,
        height: 200,
        alt: "Magnificent Pavilion Houses Show of Investor-Owned Electric Utility Industry article",
      }}
      pdfHref="/pdf/twrlit/Article_02.pdf"
      pdfAriaLabel="Download Magnificent Pavilion Houses Show of Investor-Owned Electric Utility Industry article (PDF)"
      documentNoun="article"
    />
  );
}
