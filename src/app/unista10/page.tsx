import type { Metadata } from "next";
import { UnistaNavChrome } from "@/components/UnistaNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: United States Pavilion — United States — nywf64.com",
  description:
    "Download the United States Pavilion brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * United States Pavilion brochure page — United States Pavilion PDF.
 * Body from legacy unista10.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Unista10Page() {
  return (
    <BrochurePage
      heroLabel="United States Pavilion"
      titleId="unista10-title"
      title="Brochure: United States Pavilion"
      hero={{
        src: "/images/unistaoverview/hero-banner.jpg",
        alt: "United States Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<UnistaNavChrome />}
      previousHref="/unista09"
      nextHref="/unista11"
      cover={{
        src: "/images/unista10/us42.jpg",
        width: 130,
        height: 200,
        alt: "United States Pavilion brochure",
      }}
      pdfHref="/pdf/unista/united-states-pavilion.pdf"
      pdfAriaLabel="Download United States Pavilion brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
