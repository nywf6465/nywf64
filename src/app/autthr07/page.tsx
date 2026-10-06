import type { Metadata } from "next";
import { AutthrNavChrome } from "@/components/AutthrNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Article: Dodge Stars at New York Fair — Auto Thrill Show — nywf64.com",
  description:
    "Download the Dodge Stars at New York Fair article — Auto Thrill Show at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Auto Thrill Show article page — Dodge Stars at New York Fair PDF.
 * Body from legacy autthr07.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Autthr07Page() {
  return (
    <BrochurePage
      heroLabel="Auto Thrill Show"
      titleId="autthr07-title"
      title="Article: Dodge Stars at New York Fair"
      hero={{
        src: "/images/autthroverview/hero-banner.jpg",
        alt: "Auto Thrill Show at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AutthrNavChrome />}
      previousHref="/autthr06"
      overviewHref="/autthr01"
      nextHref="/autthr01"
      cover={{
        src: "/images/autthr07/dodge-stars-cover.jpg",
        width: 153,
        height: 200,
        alt: "Dodge Stars at New York Fair article",
      }}
      pdfHref="/pdf/autthr/dodge-stars-article.pdf"
      pdfAriaLabel="Download Dodge Stars at New York Fair article (PDF)"
      documentNoun="article"
    />
  );
}
