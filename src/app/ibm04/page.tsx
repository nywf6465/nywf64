import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { IbmNavChrome } from "@/components/IbmNavChrome";

export const metadata: Metadata = {
  title: "Advertising — IBM Pavilion — nywf64.com",
  description:
    "Download IBM Pavilion advertising from the 1964 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Ibm04Page() {
  return (
    <BrochurePage
      heroLabel="IBM Pavilion"
      titleId="ibm04-title"
      title="Advertising"
      hero={{
        src: "/images/ibmoverview/hero-banner.jpg",
        alt: "IBM Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IbmNavChrome />}
      previousHref="/ibm03"
      overviewHref="/ibmoverview"
      nextHref="/ibm05"
      cover={{
        src: "/images/ibm04/ibm118.jpg",
        width: 89,
        height: 150,
        alt: "IBM Pavilion advertising",
      }}
      pdfHref="/pdf/ibm/advertising.pdf"
      pdfAriaLabel="Download IBM Pavilion advertising (PDF)"
      documentNoun="advertisements"
    />
  );
}
