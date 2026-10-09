import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";

export const metadata: Metadata = {
  title: "The Souvenir Booklet \u2014 General Electric \u2014 nywf64.com",
  description:
    "The Souvenir Booklet — General Electric Progressland at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Electric — The Souvenir Booklet.
 * Body from legacy genele08.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Genele08Page() {
  return (
    <BrochurePage
      heroLabel="General Electric Pavilion"
      titleId="genele08-title"
      title={"The Souvenir Booklet"}
      hero={{
        src: "/images/geneleoverview/hero-banner.jpg",
        alt: "General Electric Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GeneleNavChrome />}
      previousHref="/genele07"
      overviewHref="/geneleoverview"
      nextHref="/genele09"
      cover={{
        src: "/images/genele08/ge151.jpg",
        width: 150,
        height: 205,
        alt: "The Souvenir Booklet",
      }}
      pdfHref="/pdf/genele/souvenir-booklet.pdf"
      pdfAriaLabel={"Download souvenir booklet (PDF)"}
      documentNoun="brochure"
    />
  );
}
