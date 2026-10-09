import type { Metadata } from "next";
import { InfoBoothNavChrome } from "@/components/InfoBoothNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: World's Fair — Fair Facts & Figures — nywf64.com",
  description:
    "Download the World's Fair brochure — Fair Facts & Figures from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fair Facts & Figures brochure — World's Fair PDF.
 * Body from legacy info_booth09.html with Adobe Reader paragraph/logo omitted.
 *
 * Layout: BrochurePage (“brochure” standard). Shared factshero.
 * Stack: factshero → InfoBoothNavChrome → navy title → cover/PDF → Nav2Bar.
 */
export default function InfoBooth09Page() {
  return (
    <BrochurePage
      heroLabel="Fair Facts & Figures"
      titleId="info-booth09-title"
      title="Brochure: World's Fair"
      hero={{
        src: "/images/info_booth/factshero.jpg",
        alt: "Fair Facts & Figures — 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<InfoBoothNavChrome />}
      previousHref="/info_booth08"
      nextHref="/info_booth10"
      cover={{
        src: "/images/info_booth09/booth06.jpg",
        width: 82,
        height: 200,
        alt: "World's Fair brochure",
      }}
      pdfHref="/pdf/info_booth/worlds-fair.pdf"
      pdfAriaLabel="Download World's Fair brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
