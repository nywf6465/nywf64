import type { Metadata } from "next";
import { UnistaNavChrome } from "@/components/UnistaNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title:
    "Article: Lighting at the Fair - United States Pavilion — United States — nywf64.com",
  description:
    "Download the Lighting at the Fair article on the United States Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * United States Pavilion article page — Lighting at the Fair PDF.
 * Body from legacy unista14.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Unista14Page() {
  return (
    <BrochurePage
      heroLabel="United States Pavilion"
      titleId="unista14-title"
      title="Article: Lighting at the Fair - United States Pavilion"
      hero={{
        src: "/images/unistaoverview/hero-banner.jpg",
        alt: "United States Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<UnistaNavChrome />}
      previousHref="/unista13"
      nextHref="/unista15"
      cover={{
        src: "/images/unista14/us86.jpg",
        width: 200,
        height: 139,
        alt: "Lighting at the Fair — United States Pavilion article",
      }}
      pdfHref="/pdf/unista/lighting-at-the-fair.pdf"
      pdfAriaLabel="Download Lighting at the Fair - United States Pavilion article (PDF)"
      documentNoun="article"
      source={
        <>
          SOURCE: Magazine{" "}
          <em>Electrical Construction and Maintenance</em>, July 1964 -
          presented courtesy Wayne Bretl Collection
        </>
      }
    />
  );
}
