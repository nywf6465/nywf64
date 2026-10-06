import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GmNavChrome } from "@/components/GmNavChrome";

export const metadata: Metadata = {
  title: "The Souvenir Book \u2014 General Motors \u2014 nywf64.com",
  description:
    "The Souvenir Book \u2014 General Motors Pavilion at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * General Motors — The Souvenir Book.
 * Body from legacy gm10.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Gm10Page() {
  return (
    <BrochurePage
      heroLabel="General Motors Pavilion"
      titleId="gm10-title"
      title={"The Souvenir Book"}
      hero={{
        src: "/images/gmoverview/hero-banner.jpg",
        alt: "General Motors Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<GmNavChrome />}
      previousHref="/gm09"
      overviewHref="/gmoverview"
      nextHref="/gm11"
      cover={{
        src: "/images/gm10/gm176.jpg",
        width: 200,
        height: 200,
        alt: "The Souvenir Book",
      }}
      pdfHref="/pdf/gm/souvenir-book.pdf"
      pdfAriaLabel={"Download The Souvenir Book (PDF)"}
      documentNoun={"book"}
    />
  );
}
