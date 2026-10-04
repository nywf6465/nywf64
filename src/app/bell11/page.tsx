import type { Metadata } from "next";
import { BellNavChrome } from "@/components/BellNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Fun at the Fair (1964 Edition) — Bell System — nywf64.com",
  description:
    "Download the Bell System Pavilion Fun at the Fair brochure (1964 edition) — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bell System brochure page — Fun at the Fair (1964 Edition) PDF.
 * Body from legacy bell11.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Bell11Page() {
  return (
    <BrochurePage
      heroLabel="Bell System Pavilion"
      titleId="bell11-title"
      title="Brochure: Fun at the Fair (1964 Edition)"
      hero={{
        src: "/images/belloverview/hero-banner.jpg",
        alt: "Bell System Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BellNavChrome />}
      previousHref="/bell10"
      overviewHref="/belloverview"
      nextHref="/bellfunatthefair1965"
      cover={{
        src: "/images/bell11/fun-at-the-fair-1964-cover.jpg",
        width: 96,
        height: 200,
        alt: "Fun at the Fair 1964 brochure",
      }}
      pdfHref="/pdf/bell/funatthefair1964.pdf"
      pdfAriaLabel="Download Fun at the Fair 1964 brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
