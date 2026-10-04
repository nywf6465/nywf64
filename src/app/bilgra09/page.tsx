import type { Metadata } from "next";
import { BilgraNavChrome } from "@/components/BilgraNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Man in the Fifth Dimension — Billy Graham — nywf64.com",
  description:
    "Download the Man in the Fifth Dimension brochure — Billy Graham Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Billy Graham brochure page — Man in the Fifth Dimension PDF.
 * Body from legacy bilgra09.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Bilgra09Page() {
  return (
    <BrochurePage
      heroLabel="Billy Graham"
      titleId="bilgra09-title"
      title="Brochure: Man in the Fifth Dimension"
      hero={{
        src: "/images/bilgraoverview/hero-banner.jpg",
        alt: "Billy Graham Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BilgraNavChrome />}
      previousHref="/bilgra08"
      overviewHref="/bilgraoverview"
      nextHref="/bilgra10"
      cover={{
        src: "/images/bilgra09/man-in-fifth-dimension-cover.jpg",
        width: 233,
        height: 150,
        alt: "Man in the Fifth Dimension brochure",
      }}
      pdfHref="/pdf/bilgra/brochure5thdimension.pdf"
      pdfAriaLabel="Download Man in the Fifth Dimension brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
