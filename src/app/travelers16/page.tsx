import type { Metadata } from "next";
import { TravelersNavChrome } from "@/components/TravelersNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title:
    "Article: Lighting at the Fair - Travelers Pavilion — Travelers Insurance — nywf64.com",
  description:
    "Article: Lighting at the Fair - Travelers Pavilion — Travelers Insurance at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Travelers — Lighting at the Fair article PDF (legacy travelers16.html). */
export default function Travelers16Page() {
  return (
    <BrochurePage
      heroLabel="Travelers Insurance Pavilion"
      titleId="travelers16-title"
      title="Article: Lighting at the Fair - Travelers Pavilion"
      hero={{
        src: "/images/travelersoverview/hero-banner.jpg",
        alt: "Travelers Insurance Pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TravelersNavChrome />}
      previousHref="/travelers15"
      overviewHref="/travelersoverview"
      nextHref="/travelers17"
      cover={{
        src: "/images/travelers16/trvlrs113.jpg",
        width: 200,
        height: 141,
        alt: "Lighting at the Fair - Travelers Pavilion article",
      }}
      pdfHref="/pdf/travelers/Article_01.pdf"
      pdfAriaLabel="Download Lighting at the Fair - Travelers Pavilion article (PDF)"
      documentNoun="article"
      source={
        <>
          SOURCE: Magazine <em>Electrical Construction and Maintenance</em>,
          July 1964 - presented courtesy Wayne Bretl Collection
        </>
      }
    />
  );
}
