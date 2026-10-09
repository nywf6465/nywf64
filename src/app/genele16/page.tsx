import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";

export const metadata: Metadata = {
  title: "Article: G.E.'s \"Progressland\" \u2014 General Electric \u2014 nywf64.com",
  description:
    "Article: G.E.&apos;s &quot;Progressland&quot; — General Electric Progressland at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Electric — Article: G.E.'s "Progressland".
 * Body from legacy genele16.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Genele16Page() {
  return (
    <BrochurePage
      heroLabel="General Electric Pavilion"
      titleId="genele16-title"
      title={"Article: G.E.'s \"Progressland\""}
      hero={{
        src: "/images/geneleoverview/hero-banner.jpg",
        alt: "General Electric Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GeneleNavChrome />}
      previousHref="/genele15"
      overviewHref="/geneleoverview"
      nextHref="/genele17"
      cover={{
        src: "/images/genele16/ge154.jpg",
        width: 133,
        height: 200,
        alt: "Article: G.E.'s \"Progressland\"",
      }}
      pdfHref="/pdf/genele/industrial-photography.pdf"
      pdfAriaLabel={"Download article (PDF)"}
      documentNoun="article"
    />
  );
}
