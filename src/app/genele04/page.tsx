import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";

export const metadata: Metadata = {
  title: "Advertising \u2014 General Electric \u2014 nywf64.com",
  description:
    "Advertising — General Electric Progressland at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Electric — Advertising.
 * Body from legacy genele04.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Genele04Page() {
  return (
    <BrochurePage
      heroLabel="General Electric Pavilion"
      titleId="genele04-title"
      title={"Advertising"}
      hero={{
        src: "/images/geneleoverview/hero-banner.jpg",
        alt: "General Electric Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GeneleNavChrome />}
      previousHref="/genele03"
      overviewHref="/geneleoverview"
      nextHref="/genele05"
      cover={{
        src: "/images/genele04/ge152.jpg",
        width: 150,
        height: 182,
        alt: "Advertising",
      }}
      pdfHref="/pdf/genele/advertisements.pdf"
      pdfAriaLabel={"Download advertisements (PDF)"}
      documentNoun="advertisements"
    />
  );
}
