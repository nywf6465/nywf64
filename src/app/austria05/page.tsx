import type { Metadata } from "next";
import { AustriaNavChrome } from "@/components/AustriaNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Book: Assembling Manual — Austria — nywf64.com",
  description:
    "Download the Austria Assembling Manual book — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Austria book page — Assembling Manual PDF.
 * Body from legacy austria05.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Austria05Page() {
  return (
    <BrochurePage
      heroLabel="Austria"
      titleId="austria05-title"
      title="Book: Assembling Manual"
      hero={{
        src: "/images/austriaoverview/hero-banner.jpg",
        alt: "Austria at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AustriaNavChrome />}
      previousHref="/austria04"
      overviewHref="/austriaoverview"
      nextHref="/austria06"
      cover={{
        src: "/images/austria05/assembling-manual-cover.jpg",
        width: 204,
        height: 150,
        alt: "Austria Assembling Manual book",
      }}
      pdfHref="/pdf/austria/assembling-manual.pdf"
      pdfAriaLabel="Download Austria Assembling Manual book (PDF)"
      documentNoun="book"
    />
  );
}
