import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { FordNavChrome } from "@/components/FordNavChrome";

export const metadata: Metadata = {
  title: "The Souvenir Booklet — Ford — nywf64.com",
  description:
    "Download the Ford Pavilion souvenir booklet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ford — The Souvenir Booklet.
 * Body from legacy ford07.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Ford07Page() {
  return (
    <BrochurePage
      heroLabel="Ford Pavilion"
      titleId="ford07-title"
      title="The Souvenir Booklet"
      hero={{
        src: "/images/fordoverview/hero-banner.jpg",
        alt: "Ford Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<FordNavChrome />}
      previousHref="/ford06"
      overviewHref="/fordoverview"
      nextHref="/ford08"
      cover={{
        src: "/images/ford07/ford149.jpg",
        width: 264,
        height: 150,
        alt: "The Souvenir Booklet",
      }}
      pdfHref="/pdf/ford/souvenir-booklet.pdf"
      pdfAriaLabel="Download The Souvenir Booklet (PDF)"
      documentNoun="souvenir booklet"
    />
  );
}
