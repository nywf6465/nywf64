import type { Metadata } from "next";
import { InfoBoothNavChrome } from "@/components/InfoBoothNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: What's Free at the Fair — Fair Facts & Figures — nywf64.com",
  description:
    "Download the What's Free at the Fair brochure — Fair Facts & Figures from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fair Facts & Figures brochure — What's Free at the Fair PDF.
 * Body from legacy info_booth11.html with Adobe Reader paragraph/logo omitted.
 *
 * Layout: BrochurePage (“brochure” standard). Shared factshero.
 * Stack: factshero → InfoBoothNavChrome → navy title → cover/PDF → Nav2Bar.
 */
export default function InfoBooth11Page() {
  return (
    <BrochurePage
      heroLabel="Fair Facts & Figures"
      titleId="info-booth11-title"
      title="Brochure: What's Free at the Fair"
      hero={{
        src: "/images/info_booth/factshero.jpg",
        alt: "Fair Facts & Figures — 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<InfoBoothNavChrome />}
      previousHref="/info_booth10"
      nextHref="/info_booth12"
      cover={{
        src: "/images/info_booth11/booth09.jpg",
        width: 83,
        height: 200,
        alt: "What's Free at the Fair brochure",
      }}
      pdfHref="/pdf/info_booth/whats-free.pdf"
      pdfAriaLabel="Download What's Free at the Fair brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
