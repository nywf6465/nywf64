import type { Metadata } from "next";
import { InfoBoothNavChrome } from "@/components/InfoBoothNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: How to Come to the Fair — Fair Facts & Figures — nywf64.com",
  description:
    "Download the How to Come to the Fair brochure — Fair Facts & Figures from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fair Facts & Figures brochure — How to Come to the Fair PDF.
 * Body from legacy info_booth06.html with Adobe Reader paragraph/logo omitted.
 *
 * Layout: BrochurePage (“brochure” standard). Shared factshero.
 * Stack: factshero → InfoBoothNavChrome → navy title → cover/PDF → Nav2Bar.
 */
export default function InfoBooth06Page() {
  return (
    <BrochurePage
      heroLabel="Fair Facts & Figures"
      titleId="info-booth06-title"
      title="Brochure: How to Come to the Fair"
      hero={{
        src: "/images/info_booth/factshero.jpg",
        alt: "Fair Facts & Figures — 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<InfoBoothNavChrome />}
      previousHref="/info_booth05"
      nextHref="/info_booth07"
      cover={{
        src: "/images/info_booth06/booth15.jpg",
        width: 88,
        height: 200,
        alt: "How to Come to the Fair brochure",
      }}
      pdfHref="/pdf/info_booth/how-to-come.pdf"
      pdfAriaLabel="Download How to Come to the Fair brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
