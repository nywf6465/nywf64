import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { IbmNavChrome } from "@/components/IbmNavChrome";

export const metadata: Metadata = {
  title: "Booklet: IBM Fair — IBM Pavilion — nywf64.com",
  description:
    "Download the IBM Fair booklet — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Ibm08Page() {
  return (
    <BrochurePage
      heroLabel="IBM Pavilion"
      titleId="ibm08-title"
      title="Booklet:  IBM Fair"
      hero={{
        src: "/images/ibmoverview/hero-banner.jpg",
        alt: "IBM Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IbmNavChrome />}
      previousHref="/ibm07"
      overviewHref="/ibmoverview"
      nextHref="/ibm09"
      cover={{
        src: "/images/ibm08/ibm114.jpg",
        width: 89,
        height: 150,
        alt: "IBM Fair booklet",
      }}
      pdfHref="/pdf/ibm/ibm-fair-booklet.pdf"
      pdfAriaLabel="Download IBM Fair booklet (PDF)"
      documentNoun="booklet"
    />
  );
}
