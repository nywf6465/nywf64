import type { Metadata } from "next";
import { BilgraNavChrome } from "@/components/BilgraNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Book: Man in the 5th Dimension — Billy Graham — nywf64.com",
  description:
    "Download the Man in the 5th Dimension book — Billy Graham Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Billy Graham book page — Man in the 5th Dimension PDF.
 * Body from legacy bilgra10.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 * Legacy title wording (“5th”) is preserved.
 */
export default function Bilgra10Page() {
  return (
    <BrochurePage
      heroLabel="Billy Graham"
      titleId="bilgra10-title"
      title="Book: Man in the 5th Dimension"
      hero={{
        src: "/images/bilgraoverview/hero-banner.jpg",
        alt: "Billy Graham Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BilgraNavChrome />}
      previousHref="/bilgra09"
      overviewHref="/bilgra01"
      nextHref="/bilgra11"
      cover={{
        src: "/images/bilgra10/man-in-5th-dimension-cover.jpg",
        width: 155,
        height: 200,
        alt: "Man in the 5th Dimension book",
      }}
      pdfHref="/pdf/bilgra/book5thdimension.pdf"
      pdfAriaLabel="Download Man in the 5th Dimension book (PDF)"
      documentNoun="book"
    />
  );
}
