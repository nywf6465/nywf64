import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";

export const metadata: Metadata = {
  title: "Brochure: Facts About General Electric's Nuclear Fusion Demonstration \u2014 General Electric \u2014 nywf64.com",
  description:
    "Brochure: Facts About General Electric&apos;s Nuclear Fusion Demonstration — General Electric Progressland at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Electric — Brochure: Facts About General Electric's Nuclear Fusion Demonstration.
 * Body from legacy genele10.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Genele10Page() {
  return (
    <BrochurePage
      heroLabel="General Electric Pavilion"
      titleId="genele10-title"
      title={"Brochure: Facts About General Electric's Nuclear Fusion Demonstration"}
      hero={{
        src: "/images/geneleoverview/hero-banner.jpg",
        alt: "General Electric Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GeneleNavChrome />}
      previousHref="/genele09"
      overviewHref="/geneleoverview"
      nextHref="/genele11"
      cover={{
        src: "/images/genele10/ge158.jpg",
        width: 75,
        height: 175,
        alt: "Brochure: Facts About General Electric's Nuclear Fusion Demonstration",
      }}
      pdfHref="/pdf/genele/fusion-brochure.pdf"
      pdfAriaLabel={"Download brochure (PDF)"}
      documentNoun="brochure"
    />
  );
}
