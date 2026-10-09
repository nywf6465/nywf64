import type { Metadata } from "next";
import { InfoBoothNavChrome } from "@/components/InfoBoothNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title:
    "Brochure: What Every Family Should Know About the World's Fair — Fair Facts & Figures — nywf64.com",
  description:
    "Download the What Every Family Should Know About the World's Fair brochure — Fair Facts & Figures from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fair Facts & Figures brochure — What Every Family Should Know About the World's Fair PDF.
 * Body from legacy info_booth12.html with Adobe Reader paragraph/logo omitted.
 *
 * Layout: BrochurePage (“brochure” standard). Shared factshero.
 * Stack: factshero → InfoBoothNavChrome → navy title → cover/PDF → Nav2Bar.
 */
export default function InfoBooth12Page() {
  return (
    <BrochurePage
      heroLabel="Fair Facts & Figures"
      titleId="info-booth12-title"
      title="Brochure: What Every Family Should Know About the World's Fair"
      hero={{
        src: "/images/info_booth/factshero.jpg",
        alt: "Fair Facts & Figures — 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<InfoBoothNavChrome />}
      previousHref="/info_booth11"
      nextHref="/info_booth13"
      cover={{
        src: "/images/info_booth12/booth11.jpg",
        width: 87,
        height: 200,
        alt: "What Every Family Should Know About the World's Fair brochure",
      }}
      pdfHref="/pdf/info_booth/what-every-family.pdf"
      pdfAriaLabel="Download What Every Family Should Know About the World's Fair brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
