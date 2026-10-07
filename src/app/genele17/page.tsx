import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";

export const metadata: Metadata = {
  title: "Article: G.E. in Progressland \u2014 General Electric \u2014 nywf64.com",
  description:
    "Article: G.E. in Progressland — General Electric Progressland at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Electric — Article: G.E. in Progressland.
 * Body from legacy genele17.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Genele17Page() {
  return (
    <BrochurePage
      heroLabel="General Electric Pavilion"
      titleId="genele17-title"
      title={"Article: G.E.in Progressland"}
      hero={{
        src: "/images/geneleoverview/hero-banner.jpg",
        alt: "General Electric Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GeneleNavChrome />}
      previousHref="/genele16"
      overviewHref="/geneleoverview"
      nextHref="/genele18"
      cover={{
        src: "/images/genele17/ge155.jpg",
        width: 147,
        height: 200,
        alt: "Article: G.E.in Progressland",
      }}
      pdfHref="/pdf/genele/business-screen.pdf"
      pdfAriaLabel={"Download article (PDF)"}
      documentNoun="article"
    />
  );
}
