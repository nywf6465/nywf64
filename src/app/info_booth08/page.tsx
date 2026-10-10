import type { Metadata } from "next";
import { InfoBoothNavChrome } from "@/components/InfoBoothNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Come to the Fair! — Fair Facts & Figures — nywf64.com",
  description:
    "Download the Come to the Fair! brochure — Fair Facts & Figures from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fair Facts & Figures brochure — Come to the Fair! PDF.
 * Body from legacy info_booth08.html with Adobe Reader paragraph/logo omitted.
 *
 * Layout: BrochurePage (“brochure” standard). Shared factshero.
 * Stack: factshero → InfoBoothNavChrome → navy title → cover/PDF → Nav2Bar.
 */
export default function InfoBooth08Page() {
  return (
    <BrochurePage
      heroLabel="Fair Facts & Figures"
      titleId="info-booth08-title"
      title="Brochure: Come to the Fair!"
      hero={{
        src: "/images/info_booth/factshero.jpg",
        alt: "Fair Facts & Figures — 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<InfoBoothNavChrome />}
      previousHref="/info_booth07"
      nextHref="/info_booth09"
      cover={{
        src: "/images/info_booth08/booth07.jpg",
        width: 87,
        height: 200,
        alt: "Come to the Fair! brochure",
      }}
      pdfHref="/pdf/info_booth/come-to-the-fair.pdf"
      pdfAriaLabel="Download Come to the Fair! brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
