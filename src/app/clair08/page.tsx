import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { ClairNavChrome } from "@/components/ClairNavChrome";

export const metadata: Metadata = {
  title: "Souvenir Booklet — Clairol — nywf64.com",
  description:
    "Download the Clairol Color Carousel souvenir booklet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Clairol souvenir booklet — brochure standard.
 * Body from legacy clair08.html with Adobe Reader paragraph/logo omitted.
 */
export default function Clair08Page() {
  return (
    <BrochurePage
      heroLabel="Clairol"
      titleId="clair08-title"
      title="Souvenir Booklet"
      hero={{
        src: "/images/clairoverview/hero-banner.jpg",
        alt: "Clairol Color Carousel at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ClairNavChrome />}
      previousHref="/clair07"
      overviewHref="/clairoverview"
      nextHref="/clair09"
      cover={{
        src: "/images/clair08/clair71.jpg",
        width: 145,
        height: 200,
        alt: "Clairol souvenir booklet",
      }}
      pdfHref="/pdf/clair/booklet.pdf"
      pdfAriaLabel="Download Clairol souvenir booklet (PDF)"
      documentNoun="booklet"
    />
  );
}
