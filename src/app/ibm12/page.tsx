import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { IbmNavChrome } from "@/components/IbmNavChrome";

export const metadata: Metadata = {
  title:
    "Booklet: Automatic Language Translation — IBM Pavilion — nywf64.com",
  description:
    "Download the Automatic Language Translation booklet — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Ibm12Page() {
  return (
    <BrochurePage
      heroLabel="IBM Pavilion"
      titleId="ibm12-title"
      title="Booklet:  Automatic Language Translation"
      hero={{
        src: "/images/ibmoverview/hero-banner.jpg",
        alt: "IBM Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IbmNavChrome />}
      previousHref="/ibm11"
      overviewHref="/ibmoverview"
      nextHref="/ibm13"
      cover={{
        src: "/images/ibm12/ibm119.jpg",
        width: 89,
        height: 150,
        alt: "Automatic Language Translation booklet",
      }}
      pdfHref="/pdf/ibm/language-translation.pdf"
      pdfAriaLabel="Download Automatic Language Translation booklet (PDF)"
      documentNoun="booklet"
    />
  );
}
