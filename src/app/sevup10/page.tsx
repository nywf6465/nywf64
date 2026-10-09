import type { Metadata } from "next";
import { SevupNavChrome } from "@/components/SevupNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title:
    "Article: Lighting at the Fair - 7-Up Pavilion — Seven-Up — nywf64.com",
  description:
    "Download the Lighting at the Fair article on the 7-Up Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Seven-Up article page — Lighting at the Fair PDF.
 * Body from legacy sevup10.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard), same pattern as /astfount05.
 * Last Seven-Up topic: NEXT returns to /sevupoverview.
 */
export default function Sevup10Page() {
  return (
    <BrochurePage
      heroLabel="Seven-Up"
      titleId="sevup10-title"
      title="Article: Lighting at the Fair - 7-Up Pavilion"
      hero={{
        src: "/images/sevupoverview/hero-banner.jpg",
        alt: "Seven-Up at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SevupNavChrome />}
      previousHref="/sevup09"
      overviewHref="/sevupoverview"
      nextHref="/sevupoverview"
      cover={{
        src: "/images/sevup10/sevup53.jpg",
        width: 200,
        height: 125,
        alt: "Lighting at the Fair — 7-Up Pavilion article",
      }}
      pdfHref="/pdf/sevup/lighting-at-the-fair.pdf"
      pdfAriaLabel="Download Lighting at the Fair - 7-Up Pavilion article (PDF)"
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
