import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GmNavChrome } from "@/components/GmNavChrome";

export const metadata: Metadata = {
  title: "Article: Will this be the No. 1 Show? \u2014 General Motors \u2014 nywf64.com",
  description:
    "Article: Will this be the No. 1 Show? \u2014 General Motors Pavilion at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * General Motors — Article: Will this be the No. 1 Show?.
 * Body from legacy gm17.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Gm17Page() {
  return (
    <BrochurePage
      heroLabel="General Motors Pavilion"
      titleId="gm17-title"
      title={"Article: Will this be the No. 1 Show?"}
      hero={{
        src: "/images/gmoverview/hero-banner.jpg",
        alt: "General Motors Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<GmNavChrome />}
      previousHref="/gm16"
      overviewHref="/gmoverview"
      nextHref="/gm18"
      cover={{
        src: "/images/gm17/gm175.jpg",
        width: 200,
        height: 125,
        alt: "Article: Will this be the No. 1 Show?",
      }}
      pdfHref="/pdf/gm/article-science-digest.pdf"
      pdfAriaLabel={"Download Article: Will this be the No. 1 Show? (PDF)"}
      documentNoun={"article"}
    />
  );
}
