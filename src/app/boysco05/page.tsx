import type { Metadata } from "next";
import { BoyscoNavChrome } from "@/components/BoyscoNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Pamphlet: Start of Construction — Boy Scouts of America — nywf64.com",
  description:
    "Download the Boy Scouts of America Start of Construction pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Boy Scouts of America pamphlet page — Start of Construction PDF.
 * Body from legacy boysco05.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Boysco05Page() {
  return (
    <BrochurePage
      heroLabel="Boy Scouts of America"
      titleId="boysco05-title"
      title="Pamphlet: Start of Construction"
      hero={{
        src: "/images/boyscooverview/hero-banner.jpg",
        alt: "Boy Scouts of America at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BoyscoNavChrome />}
      previousHref="/boysco04"
      overviewHref="/boyscooverview"
      nextHref="/boysco06"
      cover={{
        src: "/images/boysco05/groundbreaking-cover.jpg",
        width: 227,
        height: 150,
        alt: "Boy Scouts of America Start of Construction pamphlet",
      }}
      pdfHref="/pdf/boysco/groundbreaking.pdf"
      pdfAriaLabel="Download Boy Scouts of America Start of Construction pamphlet (PDF)"
      documentNoun="pamphlet"
    />
  );
}
