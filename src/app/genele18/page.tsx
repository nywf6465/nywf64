import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";

export const metadata: Metadata = {
  title: "Article: Lighting at the Fair - General Electric Pavilion \u2014 General Electric \u2014 nywf64.com",
  description:
    "Article: Lighting at the Fair - General Electric Pavilion — General Electric Progressland at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Electric — Article: Lighting at the Fair - General Electric Pavilion.
 * Body from legacy genele18.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Genele18Page() {
  return (
    <BrochurePage
      heroLabel="General Electric Pavilion"
      titleId="genele18-title"
      title={"Article: Lighting at the Fair - General Electric Pavilion"}
      hero={{
        src: "/images/geneleoverview/hero-banner.jpg",
        alt: "General Electric Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GeneleNavChrome />}
      previousHref="/genele17"
      overviewHref="/geneleoverview"
      nextHref="/genele19"
      cover={{
        src: "/images/genele18/ge156.jpg",
        width: 122,
        height: 150,
        alt: "Article: Lighting at the Fair - General Electric Pavilion",
      }}
      pdfHref="/pdf/genele/lighting-article.pdf"
      pdfAriaLabel={"Download article (PDF)"}
      documentNoun="article"
    />
  );
}
