import type { Metadata } from "next";
import { GreyhoundNavChrome } from "@/components/GreyhoundNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title:
    "Brochure: Go Greyhound to New York and the World's Fair — Greyhound — nywf64.com",
  description:
    "Download the Go Greyhound to New York and the World's Fair brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Greyhound brochure page — Go Greyhound PDF.
 * Body from legacy greyhound05.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Greyhound05Page() {
  return (
    <BrochurePage
      heroLabel="Greyhound"
      titleId="greyhound05-title"
      title="Brochure: Go Greyhound to New York and the World's Fair"
      hero={{
        src: "/images/greyhoundoverview/hero-banner.jpg",
        alt: "Greyhound at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GreyhoundNavChrome />}
      previousHref="/greyhound04"
      overviewHref="/greyhoundoverview"
      nextHref="/greyhound06"
      cover={{
        src: "/images/greyhound05/greyhound63.jpg",
        width: 88,
        height: 200,
        alt: "Go Greyhound to New York and the World's Fair brochure",
      }}
      pdfHref="/pdf/greyhound/go-greyhound.pdf"
      pdfAriaLabel="Download Go Greyhound to New York and the World's Fair brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
