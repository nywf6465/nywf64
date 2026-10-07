import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { IbmNavChrome } from "@/components/IbmNavChrome";

export const metadata: Metadata = {
  title:
    "Souvenir Cards from Optical Scanning Exhibit — IBM Pavilion — nywf64.com",
  description:
    "Download souvenir cards from the Optical Scanning Exhibit — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Ibm14Page() {
  return (
    <BrochurePage
      heroLabel="IBM Pavilion"
      titleId="ibm14-title"
      title="Souvenir Cards from Optical Scanning Exhibit"
      hero={{
        src: "/images/ibmoverview/hero-banner.jpg",
        alt: "IBM Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IbmNavChrome />}
      previousHref="/ibm13"
      overviewHref="/ibmoverview"
      nextHref="/ibm15"
      cover={{
        src: "/images/ibm14/ibm120.jpg",
        width: 89,
        height: 150,
        alt: "Souvenir cards from Optical Scanning Exhibit",
      }}
      pdfHref="/pdf/ibm/character-recognition.pdf"
      pdfAriaLabel="Download Souvenir Cards from Optical Scanning Exhibit (PDF)"
      documentNoun="souvenir cards"
    />
  );
}
