import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Advertising — Tower of Light — nywf64.com",
  description:
    "Download Tower of Light advertisements — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light advertising PDF page.
 * Body from legacy twrlit04.html with Adobe Reader copy and icon removed.
 * Layout: BrochurePage (/unisph09 pattern).
 */
export default function Twrlit04Page() {
  return (
    <BrochurePage
      heroLabel="Tower of Light"
      titleId="twrlit04-title"
      title="Advertising"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlit03"
      overviewHref="/twrlitoverview"
      nextHref="/twrlit05"
      cover={{
        src: "/images/twrlit04/tol88.jpg",
        width: 123,
        height: 200,
        alt: "Tower of Light advertisements",
      }}
      pdfHref="/pdf/twrlit/Advertisements.pdf"
      pdfAriaLabel="Download Tower of Light advertisements (PDF)"
      documentNoun="advertisements"
    />
  );
}
