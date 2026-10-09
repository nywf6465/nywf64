import type { Metadata } from "next";
import { TravelersNavChrome } from "@/components/TravelersNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title:
    "Article: A New Concept in Space Structures — Travelers Insurance — nywf64.com",
  description:
    "Article: A New Concept in Space Structures — Travelers Insurance at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Travelers — Article PDF (legacy travelers14.html). */
export default function Travelers14Page() {
  return (
    <BrochurePage
      heroLabel="Travelers Insurance Pavilion"
      titleId="travelers14-title"
      title="Article: A New Concept in Space Structures"
      hero={{
        src: "/images/travelersoverview/hero-banner.jpg",
        alt: "Travelers Insurance Pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TravelersNavChrome />}
      previousHref="/travelers13"
      overviewHref="/travelersoverview"
      nextHref="/travelers15"
      cover={{
        src: "/images/travelers14/bell02.jpg",
        width: 157,
        height: 200,
        alt: "A New Concept in Space Structures article",
      }}
      pdfHref="/pdf/travelers/A_New_Concept.pdf"
      pdfAriaLabel="Download A New Concept in Space Structures article (PDF)"
      documentNoun="article"
    />
  );
}
