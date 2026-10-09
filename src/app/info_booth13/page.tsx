import type { Metadata } from "next";
import { InfoBoothNavChrome } from "@/components/InfoBoothNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Family Fun at the Fair — Fair Facts & Figures — nywf64.com",
  description:
    "Download the Family Fun at the Fair brochure — Fair Facts & Figures from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fair Facts & Figures brochure — Family Fun at the Fair PDF.
 * Body from legacy info_booth13.html with Adobe Reader paragraph/logo omitted.
 *
 * Layout: BrochurePage (“brochure” standard). Shared factshero.
 * Stack: factshero → InfoBoothNavChrome → navy title → cover/PDF → Nav2Bar.
 */
export default function InfoBooth13Page() {
  return (
    <BrochurePage
      heroLabel="Fair Facts & Figures"
      titleId="info-booth13-title"
      title="Brochure: Family Fun at the Fair"
      hero={{
        src: "/images/info_booth/factshero.jpg",
        alt: "Fair Facts & Figures — 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<InfoBoothNavChrome />}
      previousHref="/info_booth12"
      nextHref="/info_booth14"
      cover={{
        src: "/images/info_booth13/booth12.jpg",
        width: 83,
        height: 200,
        alt: "Family Fun at the Fair brochure",
      }}
      pdfHref="/pdf/info_booth/family-fun.pdf"
      pdfAriaLabel="Download Family Fun at the Fair brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
