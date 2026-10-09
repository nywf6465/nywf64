import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { IbmNavChrome } from "@/components/IbmNavChrome";

export const metadata: Metadata = {
  title:
    "Brochure: Welcome to the IBM Pavilion (Version 1) — IBM Pavilion — nywf64.com",
  description:
    "Download Welcome to the IBM Pavilion brochure (Version 1) — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Ibm09Page() {
  return (
    <BrochurePage
      heroLabel="IBM Pavilion"
      titleId="ibm09-title"
      title="Brochure:  Welcome to the IBM Pavilion (Version 1)"
      hero={{
        src: "/images/ibmoverview/hero-banner.jpg",
        alt: "IBM Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IbmNavChrome />}
      previousHref="/ibm08"
      overviewHref="/ibmoverview"
      nextHref="/ibm10"
      cover={{
        src: "/images/ibm09/ibm117.jpg",
        width: 89,
        height: 150,
        alt: "Welcome to the IBM Pavilion brochure Version 1",
      }}
      pdfHref="/pdf/ibm/brochure-version-1.pdf"
      pdfAriaLabel="Download Welcome to the IBM Pavilion brochure Version 1 (PDF)"
    />
  );
}
