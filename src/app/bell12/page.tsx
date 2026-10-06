import type { Metadata } from "next";
import { BellNavChrome } from "@/components/BellNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Fun at the Fair (1965 Edition) — Bell System — nywf64.com",
  description:
    "Download the Bell System Pavilion Fun at the Fair brochure (1965 edition) — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bell System brochure page — Fun at the Fair (1965 Edition) PDF.
 * Body from legacy bell12.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Bell12Page() {
  return (
    <BrochurePage
      heroLabel="Bell System Pavilion"
      titleId="bell12-title"
      title="Brochure: Fun at the Fair (1965 Edition)"
      hero={{
        src: "/images/belloverview/hero-banner.jpg",
        alt: "Bell System Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BellNavChrome />}
      previousHref="/bell11"
      overviewHref="/bell01"
      nextHref="/bellfloatingwing"
      cover={{
        src: "/images/bell12/fun-at-the-fair-1965-cover.jpg",
        width: 97,
        height: 200,
        alt: "Fun at the Fair 1965 brochure",
      }}
      pdfHref="/pdf/bell/funatthefair1965.pdf"
      pdfAriaLabel="Download Fun at the Fair 1965 brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
