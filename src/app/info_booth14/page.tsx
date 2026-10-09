import type { Metadata } from "next";
import { InfoBoothNavChrome } from "@/components/InfoBoothNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Food at the Fair — Fair Facts & Figures — nywf64.com",
  description:
    "Download the Food at the Fair brochure — Fair Facts & Figures from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fair Facts & Figures brochure — Food at the Fair PDF.
 * Body from legacy info_booth14.html with Adobe Reader paragraph/logo omitted.
 *
 * Layout: BrochurePage (“brochure” standard). Shared factshero.
 * Stack: factshero → InfoBoothNavChrome → navy title → cover/PDF → Nav2Bar.
 */
export default function InfoBooth14Page() {
  return (
    <BrochurePage
      heroLabel="Fair Facts & Figures"
      titleId="info-booth14-title"
      title="Brochure: Food at the Fair"
      hero={{
        src: "/images/info_booth/factshero.jpg",
        alt: "Fair Facts & Figures — 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<InfoBoothNavChrome />}
      previousHref="/info_booth13"
      nextHref="/info_booth15"
      cover={{
        src: "/images/info_booth14/booth13.jpg",
        width: 84,
        height: 200,
        alt: "Food at the Fair brochure",
      }}
      pdfHref="/pdf/info_booth/food-at-the-fair.pdf"
      pdfAriaLabel="Download Food at the Fair brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
