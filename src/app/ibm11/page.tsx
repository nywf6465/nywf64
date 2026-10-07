import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { IbmNavChrome } from "@/components/IbmNavChrome";

export const metadata: Metadata = {
  title:
    "Brochure: Welcome to the IBM Pavilion (Version 3) — IBM Pavilion — nywf64.com",
  description:
    "Download Welcome to the IBM Pavilion brochure (Version 3) — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Ibm11Page() {
  return (
    <BrochurePage
      heroLabel="IBM Pavilion"
      titleId="ibm11-title"
      title="Brochure:  Welcome to the IBM Pavilion (Version 3)"
      hero={{
        src: "/images/ibmoverview/hero-banner.jpg",
        alt: "IBM Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IbmNavChrome />}
      previousHref="/ibm10"
      overviewHref="/ibmoverview"
      nextHref="/ibm12"
      cover={{
        src: "/images/ibm11/ibm116.jpg",
        width: 89,
        height: 150,
        alt: "Welcome to the IBM Pavilion brochure Version 3",
      }}
      pdfHref="/pdf/ibm/brochure-version-3.pdf"
      pdfAriaLabel="Download Welcome to the IBM Pavilion brochure Version 3 (PDF)"
    />
  );
}
