import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";

export const metadata: Metadata = {
  title: "Article: Preview of Disney's World's Fair Shows \u2014 General Electric \u2014 nywf64.com",
  description:
    "Article: Preview of Disney&apos;s World&apos;s Fair Shows — General Electric Progressland at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Electric — Article: Preview of Disney's World's Fair Shows.
 * Body from legacy genele15.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Genele15Page() {
  return (
    <BrochurePage
      heroLabel="General Electric Pavilion"
      titleId="genele15-title"
      title={"Article: Preview of Disney's World's Fair Shows"}
      hero={{
        src: "/images/geneleoverview/hero-banner.jpg",
        alt: "General Electric Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GeneleNavChrome />}
      previousHref="/genele14"
      overviewHref="/geneleoverview"
      nextHref="/genele16"
      cover={{
        src: "/images/genele15/ge153.jpg",
        width: 98,
        height: 150,
        alt: "Article: Preview of Disney's World's Fair Shows",
      }}
      pdfHref="/pdf/genele/science-digest.pdf"
      pdfAriaLabel={"Download article (PDF)"}
      documentNoun="article"
    />
  );
}
