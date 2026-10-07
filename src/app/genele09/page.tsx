import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";

export const metadata: Metadata = {
  title: "Brochure: Your Tour of Progressland \u2014 General Electric \u2014 nywf64.com",
  description:
    "Brochure: Your Tour of Progressland — General Electric Progressland at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Electric — Brochure: Your Tour of Progressland.
 * Body from legacy genele09.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Genele09Page() {
  return (
    <BrochurePage
      heroLabel="General Electric Pavilion"
      titleId="genele09-title"
      title={"Brochure: Your Tour of Progressland"}
      hero={{
        src: "/images/geneleoverview/hero-banner.jpg",
        alt: "General Electric Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GeneleNavChrome />}
      previousHref="/genele08"
      overviewHref="/geneleoverview"
      nextHref="/genele10"
      cover={{
        src: "/images/genele09/ge150.jpg",
        width: 75,
        height: 175,
        alt: "Brochure: Your Tour of Progressland",
      }}
      pdfHref="/pdf/genele/tour-of-progressland.pdf"
      pdfAriaLabel={"Download brochure (PDF)"}
      documentNoun="brochure"
    />
  );
}
