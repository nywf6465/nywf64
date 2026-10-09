import type { Metadata } from "next";
import { InfoBoothNavChrome } from "@/components/InfoBoothNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Graphic Standards Manual — Fair Facts & Figures — nywf64.com",
  description:
    "Download the Graphic Standards Manual — Fair Facts & Figures from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fair Facts & Figures brochure — Graphic Standards Manual PDF.
 * Body from legacy info_booth07.html with Adobe Reader paragraph/logo omitted.
 *
 * Layout: BrochurePage (“brochure” standard). Shared factshero.
 * Stack: factshero → InfoBoothNavChrome → navy title → cover/PDF → Nav2Bar.
 * PDF shared with /unisph11 (same legacy document).
 */
export default function InfoBooth07Page() {
  return (
    <BrochurePage
      heroLabel="Fair Facts & Figures"
      titleId="info-booth07-title"
      title="Graphic Standards Manual"
      hero={{
        src: "/images/info_booth/factshero.jpg",
        alt: "Fair Facts & Figures — 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<InfoBoothNavChrome />}
      previousHref="/info_booth06"
      nextHref="/info_booth08"
      cover={{
        src: "/images/info_booth07/graphic-standards-manual.jpg",
        width: 88,
        height: 200,
        alt: "Graphic Standards Manual",
      }}
      pdfHref="/pdf/unisph/graphic-standards-manual.pdf"
      pdfAriaLabel="Download Graphic Standards Manual (PDF)"
      documentNoun="manual"
    />
  );
}
