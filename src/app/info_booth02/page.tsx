import type { Metadata } from "next";
import { InfoBoothNavChrome } from "@/components/InfoBoothNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: 1960 Promotion — Fair Facts & Figures — nywf64.com",
  description:
    "Download the 1960 Promotion booklet — Fair Facts & Figures from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fair Facts & Figures brochure — 1960 Promotion PDF booklet.
 * Body from legacy info_booth02.html with Adobe Reader paragraph/logo omitted.
 *
 * Layout: BrochurePage (“brochure” standard). Shared factshero.
 * Stack: factshero → InfoBoothNavChrome → navy title → cover/PDF → Nav2Bar.
 */
export default function InfoBooth02Page() {
  return (
    <BrochurePage
      heroLabel="Fair Facts & Figures"
      titleId="info-booth02-title"
      title="Brochure: 1960 Promotion"
      hero={{
        src: "/images/info_booth/factshero.jpg",
        alt: "Fair Facts & Figures — 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<InfoBoothNavChrome />}
      previousHref="/info_booth01"
      nextHref="/info_booth03"
      cover={{
        src: "/images/info_booth02/booth16.jpg",
        width: 154,
        height: 200,
        alt: "1960 Promotion booklet",
      }}
      pdfHref="/pdf/info_booth/1960-promotion.pdf"
      pdfAriaLabel="Download 1960 Promotion booklet (PDF)"
      documentNoun="booklet"
    />
  );
}
