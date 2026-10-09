import type { Metadata } from "next";
import { BoyscoNavChrome } from "@/components/BoyscoNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title:
    "Brochure: The Wonderful World of Scouting — Boy Scouts of America — nywf64.com",
  description:
    "Download The Wonderful World of Scouting brochure — Boy Scouts of America at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Boy Scouts of America brochure page — The Wonderful World of Scouting PDF.
 * Body from legacy boysco06.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Boysco06Page() {
  return (
    <BrochurePage
      heroLabel="Boy Scouts of America"
      titleId="boysco06-title"
      title="Brochure: The Wonderful World of Scouting"
      hero={{
        src: "/images/boyscooverview/hero-banner.jpg",
        alt: "Boy Scouts of America at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BoyscoNavChrome />}
      previousHref="/boysco05"
      overviewHref="/boyscooverview"
      nextHref="/boyscooverview"
      cover={{
        src: "/images/boysco06/wonderful-world-of-scouting-cover.jpg",
        width: 116,
        height: 150,
        alt: "The Wonderful World of Scouting brochure",
      }}
      pdfHref="/pdf/boysco/wonderful-world-of-scouting.pdf"
      pdfAriaLabel="Download The Wonderful World of Scouting brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
