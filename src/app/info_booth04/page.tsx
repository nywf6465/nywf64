import type { Metadata } from "next";
import { InfoBoothNavChrome } from "@/components/InfoBoothNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title:
    "Brochure: The Economic Benefits of the New York World's Fair 1964-1965 — Fair Facts & Figures — nywf64.com",
  description:
    "Download The Economic Benefits of the New York World's Fair 1964-1965 brochure — Fair Facts & Figures from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fair Facts & Figures brochure — Economic Benefits PDF.
 * Body from legacy info_booth04.html with Adobe Reader paragraph/logo omitted.
 *
 * Layout: BrochurePage (“brochure” standard). Shared factshero.
 * Stack: factshero → InfoBoothNavChrome → navy title → cover/PDF → Nav2Bar.
 */
export default function InfoBooth04Page() {
  return (
    <BrochurePage
      heroLabel="Fair Facts & Figures"
      titleId="info-booth04-title"
      title="Brochure: The Economic Benefits of the New York World's Fair 1964-1965"
      hero={{
        src: "/images/info_booth/factshero.jpg",
        alt: "Fair Facts & Figures — 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<InfoBoothNavChrome />}
      previousHref="/info_booth03"
      nextHref="/info_booth05"
      cover={{
        src: "/images/info_booth04/booth04.jpg",
        width: 108,
        height: 200,
        alt: "Economic Benefits brochure",
      }}
      pdfHref="/pdf/info_booth/economic-benefits.pdf"
      pdfAriaLabel="Download The Economic Benefits of the New York World's Fair 1964-1965 brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
