import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { HougtNavChrome } from "@/components/HougtNavChrome";

export const metadata: Metadata = {
  title:
    "Magazine: Better Homes & Gardens - September 1964 — House of Good Taste — nywf64.com",
  description:
    "Download the Better Homes & Gardens September 1964 House of Good Taste article — 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Body from legacy hougt08.html (Adobe Reader paragraph/logo omitted). */
export default function Hougt08Page() {
  return (
    <BrochurePage
      heroLabel="House of Good Taste"
      titleId="hougt08-title"
      title="Magazine: Better Homes and Gardens - September 1964"
      hero={{
        src: "/images/hougtoverview/hero-banner.jpg",
        alt: "House of Good Taste at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HougtNavChrome />}
      previousHref="/hougt07"
      overviewHref="/hougtoverview"
      nextHref="/hougt09"
      cover={{
        src: "/images/hougt08/hougt03.jpg",
        width: 150,
        height: 194,
        alt: "Better Homes and Gardens September 1964",
      }}
      pdfHref="/pdf/hougt/better-homes-september-1964.pdf"
      pdfAriaLabel="Download Better Homes and Gardens September 1964 article (PDF)"
      documentNoun="magazine article"
    />
  );
}
