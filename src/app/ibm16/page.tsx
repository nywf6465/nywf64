import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { IbmNavChrome } from "@/components/IbmNavChrome";

export const metadata: Metadata = {
  title: "Article: People in Motion — IBM Pavilion — nywf64.com",
  description:
    "Download the article People in Motion — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Ibm16Page() {
  return (
    <BrochurePage
      heroLabel="IBM Pavilion"
      titleId="ibm16-title"
      title="Article:  People in Motion"
      hero={{
        src: "/images/ibmoverview/hero-banner.jpg",
        alt: "IBM Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IbmNavChrome />}
      previousHref="/ibm15"
      overviewHref="/ibmoverview"
      nextHref="/ibm17"
      cover={{
        src: "/images/ibm16/ibm123.jpg",
        width: 89,
        height: 150,
        alt: "People in Motion article",
      }}
      pdfHref="/pdf/ibm/article-two.pdf"
      pdfAriaLabel="Download People in Motion article (PDF)"
      documentNoun="article"
    />
  );
}
