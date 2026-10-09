import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { IbmNavChrome } from "@/components/IbmNavChrome";

export const metadata: Metadata = {
  title: "Press Release: From IBM (1965) — IBM Pavilion — nywf64.com",
  description:
    "Download the IBM Pavilion press release From IBM (1965) — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Ibm06Page() {
  return (
    <BrochurePage
      heroLabel="IBM Pavilion"
      titleId="ibm06-title"
      title="Press Release:  From IBM (1965)"
      hero={{
        src: "/images/ibmoverview/hero-banner.jpg",
        alt: "IBM Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IbmNavChrome />}
      previousHref="/ibm05"
      overviewHref="/ibmoverview"
      nextHref="/ibm07"
      cover={{
        src: "/images/ibm06/ibm122.jpg",
        width: 89,
        height: 150,
        alt: "From IBM press release",
      }}
      pdfHref="/pdf/ibm/from-ibm.pdf"
      pdfAriaLabel="Download From IBM press release (PDF)"
      documentNoun="press release"
    />
  );
}
