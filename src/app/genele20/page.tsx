import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";

export const metadata: Metadata = {
  title: "Article: Parrot & Atoms Help GE Tell Story of Power \u2014 General Electric \u2014 nywf64.com",
  description:
    "Article: Parrot &amp; Atoms Help GE Tell Story of Power — General Electric Progressland at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Electric — Article: Parrot & Atoms Help GE Tell Story of Power.
 * Body from legacy genele20.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Genele20Page() {
  return (
    <BrochurePage
      heroLabel="General Electric Pavilion"
      titleId="genele20-title"
      title={"Article: Parrot and Atoms Help GE Tell Story of Power"}
      hero={{
        src: "/images/geneleoverview/hero-banner.jpg",
        alt: "General Electric Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GeneleNavChrome />}
      previousHref="/genele19"
      overviewHref="/geneleoverview"
      nextHref="/genele21"
      cover={{
        src: "/images/genele20/ge157.jpg",
        width: 110,
        height: 150,
        alt: "Article: Parrot and Atoms Help GE Tell Story of Power",
      }}
      pdfHref="/pdf/genele/parrot-atoms.pdf"
      pdfAriaLabel={"Download article (PDF)"}
      documentNoun="article"
    />
  );
}
