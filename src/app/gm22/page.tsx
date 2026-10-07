import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GmNavChrome } from "@/components/GmNavChrome";

export const metadata: Metadata = {
  title: "Article: Lighting at the Fair - General Motors \u2014 General Motors \u2014 nywf64.com",
  description:
    "Article: Lighting at the Fair - General Motors \u2014 General Motors Pavilion at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * General Motors — Article: Lighting at the Fair - General Motors.
 * Body from legacy gm22.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Gm22Page() {
  return (
    <BrochurePage
      heroLabel="General Motors Pavilion"
      titleId="gm22-title"
      title={"Article: Lighting at the Fair - General Motors"}
      hero={{
        src: "/images/gmoverview/hero-banner.jpg",
        alt: "General Motors Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<GmNavChrome />}
      previousHref="/gm21"
      overviewHref="/gmoverview"
      nextHref="/gm23"
      cover={{
        src: "/images/gm22/gm213.jpg",
        width: 150,
        height: 195,
        alt: "Article: Lighting at the Fair - General Motors",
      }}
      pdfHref="/pdf/gm/lighting-article.pdf"
      pdfAriaLabel={"Download Article: Lighting at the Fair - General Motors (PDF)"}
      documentNoun={"article"}
    />
  );
}
