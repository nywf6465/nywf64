import type { Metadata } from "next";
import { ConcirNavChrome } from "@/components/ConcirNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title: "Souvenir Program — Continental Circus — nywf64.com",
  description:
    "Download the Continental Circus Souvenir Program — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Circus souvenir program PDF page.
 * Body from legacy concir05.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard); documentNoun “program”.
 * Navy title matches menu label “Souvenir Program”.
 */
export default function Concir05Page() {
  return (
    <BrochurePage
      heroLabel="Continental Circus"
      titleId="concir05-title"
      title="Souvenir Program"
      hero={{
        src: "/images/conciroverview/hero-banner.jpg",
        alt: "Continental Circus at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<ConcirNavChrome />}
      previousHref="/concir04"
      overviewHref="/conciroverview"
      nextHref="/conciroverview"
      cover={{
        src: "/images/concir05/concir04.jpg",
        width: 152,
        height: 200,
        alt: "Continental Circus Souvenir Program",
      }}
      pdfHref="/pdf/concir/souvenir-program.pdf"
      pdfAriaLabel="Download Continental Circus Souvenir Program (PDF)"
      documentNoun="program"
    />
  );
}
