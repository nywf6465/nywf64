import type { Metadata } from "next";
import { InfoBoothNavChrome } from "@/components/InfoBoothNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: 1961 Promotion — Fair Facts & Figures — nywf64.com",
  description:
    "Download the 1961 Promotion brochure — Fair Facts & Figures from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fair Facts & Figures brochure — 1961 Promotion PDF.
 * Body from legacy info_booth03.html with Adobe Reader paragraph/logo omitted.
 *
 * Layout: BrochurePage (“brochure” standard). Shared factshero.
 * Stack: factshero → InfoBoothNavChrome → navy title → cover/PDF → Nav2Bar.
 */
export default function InfoBooth03Page() {
  return (
    <BrochurePage
      heroLabel="Fair Facts & Figures"
      titleId="info-booth03-title"
      title="Brochure: 1961 Promotion"
      hero={{
        src: "/images/info_booth/factshero.jpg",
        alt: "Fair Facts & Figures — 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<InfoBoothNavChrome />}
      previousHref="/info_booth02"
      nextHref="/info_booth04"
      cover={{
        src: "/images/info_booth03/booth05.jpg",
        width: 88,
        height: 200,
        alt: "1961 Promotion brochure",
      }}
      pdfHref="/pdf/info_booth/1961-promotion.pdf"
      pdfAriaLabel="Download 1961 Promotion brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
