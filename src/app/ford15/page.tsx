import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { FordNavChrome } from "@/components/FordNavChrome";

export const metadata: Metadata = {
  title: "Article: Up and Running — Ford — nywf64.com",
  description:
    "Download the Ford Pavilion article — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ford — Article: Up and Running.
 * Body from legacy ford15.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Ford15Page() {
  return (
    <BrochurePage
      heroLabel="Ford Pavilion"
      titleId="ford15-title"
      title="Article: Up and Running"
      hero={{
        src: "/images/fordoverview/hero-banner.jpg",
        alt: "Ford Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<FordNavChrome />}
      previousHref="/ford14"
      overviewHref="/fordoverview"
      nextHref="/ford16"
      cover={{
        src: "/images/ford15/ford157.jpg",
        width: 200,
        height: 130,
        alt: "Article: Up and Running",
      }}
      pdfHref="/pdf/ford/article-06.pdf"
      pdfAriaLabel="Download Article: Up and Running (PDF)"
      documentNoun="article"
    />
  );
}
