import type { Metadata } from "next";
import { InfoBoothNavChrome } from "@/components/InfoBoothNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Brochure: Lake Amusement Area — Fair Facts & Figures — nywf64.com",
  description:
    "Download the Lake Amusement Area brochure — Fair Facts & Figures from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fair Facts & Figures brochure — Lake Amusement Area PDF.
 * Body from legacy info_booth15.html with Adobe Reader paragraph/logo omitted.
 * Next returns to info_booth01 (Facts & Figures), matching legacy morebutton.
 *
 * Layout: BrochurePage (“brochure” standard). Shared factshero.
 * Stack: factshero → InfoBoothNavChrome → navy title → cover/PDF → Nav2Bar.
 */
export default function InfoBooth15Page() {
  return (
    <BrochurePage
      heroLabel="Fair Facts & Figures"
      titleId="info-booth15-title"
      title="Brochure: Lake Amusement Area"
      hero={{
        src: "/images/info_booth/factshero.jpg",
        alt: "Fair Facts & Figures — 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<InfoBoothNavChrome />}
      previousHref="/info_booth14"
      nextHref="/info_booth01"
      cover={{
        src: "/images/info_booth15/booth14.jpg",
        width: 92,
        height: 200,
        alt: "Lake Amusement Area brochure",
      }}
      pdfHref="/pdf/info_booth/lake-amusement.pdf"
      pdfAriaLabel="Download Lake Amusement Area brochure (PDF)"
      documentNoun="brochure"
    />
  );
}
