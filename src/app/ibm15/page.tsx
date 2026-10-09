import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { IbmNavChrome } from "@/components/IbmNavChrome";

export const metadata: Metadata = {
  title:
    "Article: IBM Creates an Information Machine — IBM Pavilion — nywf64.com",
  description:
    "Download the article I.B.M. Creates an Information Machine — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Ibm15Page() {
  return (
    <BrochurePage
      heroLabel="IBM Pavilion"
      titleId="ibm15-title"
      title="Article:  I.B.M. Creates an Information Machine"
      hero={{
        src: "/images/ibmoverview/hero-banner.jpg",
        alt: "IBM Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IbmNavChrome />}
      previousHref="/ibm14"
      overviewHref="/ibmoverview"
      nextHref="/ibm16"
      cover={{
        src: "/images/ibm15/ibm121.jpg",
        width: 89,
        height: 150,
        alt: "I.B.M. Creates an Information Machine article",
      }}
      pdfHref="/pdf/ibm/article-one.pdf"
      pdfAriaLabel="Download I.B.M. Creates an Information Machine article (PDF)"
      documentNoun="article"
    />
  );
}
