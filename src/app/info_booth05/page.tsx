import type { Metadata } from "next";
import { InfoBoothNavChrome } from "@/components/InfoBoothNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Tickets — Fair Facts & Figures — nywf64.com",
  description:
    "Download the Tickets brochure — Fair Facts & Figures from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fair Facts & Figures brochure — Tickets PDF.
 * Body from legacy info_booth05.html with Adobe Reader paragraph/logo omitted.
 *
 * Layout: BrochurePage (“brochure” standard). Shared factshero.
 * Stack: factshero → InfoBoothNavChrome → navy title → cover/PDF → Nav2Bar.
 */
export default function InfoBooth05Page() {
  return (
    <BrochurePage
      heroLabel="Fair Facts & Figures"
      titleId="info-booth05-title"
      title="Brochure: Tickets"
      hero={{
        src: "/images/info_booth/factshero.jpg",
        alt: "Fair Facts & Figures — 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<InfoBoothNavChrome />}
      previousHref="/info_booth04"
      nextHref="/info_booth06"
      cover={{
        src: "/images/info_booth05/booth10.jpg",
        width: 87,
        height: 200,
        alt: "Tickets brochure",
      }}
      pdfHref="/pdf/info_booth/tickets.pdf"
      pdfAriaLabel="Download Tickets brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
