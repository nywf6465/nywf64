import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { FordNavChrome } from "@/components/FordNavChrome";

export const metadata: Metadata = {
  title: "Article: Preview of Disney's World's Fair Shows — Ford — nywf64.com",
  description:
    "Download the Ford Pavilion article — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ford — Article: Preview of Disney's World's Fair Shows.
 * Body from legacy ford13.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Ford13Page() {
  return (
    <BrochurePage
      heroLabel="Ford Pavilion"
      titleId="ford13-title"
      title="Article: Preview of Walt Disney\'s World\'s Fair Shows"
      hero={{
        src: "/images/fordoverview/hero-banner.jpg",
        alt: "Ford Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<FordNavChrome />}
      previousHref="/ford12"
      overviewHref="/fordoverview"
      nextHref="/ford14"
      cover={{
        src: "/images/ford13/ford153.jpg",
        width: 131,
        height: 200,
        alt: "Article: Preview of Walt Disney\'s World\'s Fair Shows",
      }}
      pdfHref="/pdf/ford/article-02.pdf"
      pdfAriaLabel="Download Article: Preview of Disney's World's Fair Shows (PDF)"
      documentNoun="article"
    />
  );
}
