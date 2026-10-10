import type { Metadata } from "next";
import { InfoBoothNavChrome } from "@/components/InfoBoothNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Highlights of the Fair — Fair Facts & Figures — nywf64.com",
  description:
    "Download the Highlights of the Fair brochure — Fair Facts & Figures from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fair Facts & Figures brochure — Highlights of the Fair PDF.
 * Body from legacy info_booth10.html with Adobe Reader paragraph/logo omitted.
 *
 * Layout: BrochurePage (“brochure” standard). Shared factshero.
 * Stack: factshero → InfoBoothNavChrome → navy title → cover/PDF → Nav2Bar.
 */
export default function InfoBooth10Page() {
  return (
    <BrochurePage
      heroLabel="Fair Facts & Figures"
      titleId="info-booth10-title"
      title="Brochure: Highlights of the Fair"
      hero={{
        src: "/images/info_booth/factshero.jpg",
        alt: "Fair Facts & Figures — 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<InfoBoothNavChrome />}
      previousHref="/info_booth09"
      nextHref="/info_booth11"
      cover={{
        src: "/images/info_booth10/booth08.jpg",
        width: 83,
        height: 200,
        alt: "Highlights of the Fair brochure",
      }}
      pdfHref="/pdf/info_booth/highlights.pdf"
      pdfAriaLabel="Download Highlights of the Fair brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
