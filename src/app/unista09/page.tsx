import type { Metadata } from "next";
import { UnistaNavChrome } from "@/components/UnistaNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title:
    'Article: A "Hovering" Hollow Square — United States — nywf64.com',
  description:
    'Download the United States Pavilion article A "Hovering" Hollow Square — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * United States Pavilion article page — A "Hovering" Hollow Square PDF.
 * Body from legacy unista09.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Unista09Page() {
  return (
    <BrochurePage
      heroLabel="United States Pavilion"
      titleId="unista09-title"
      title='Article: A "Hovering" Hollow Square'
      hero={{
        src: "/images/unistaoverview/hero-banner.jpg",
        alt: "United States Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<UnistaNavChrome />}
      previousHref="/unista08"
      overviewHref="/unistaoverview"
      nextHref="/unista10"
      cover={{
        src: "/images/unista09/cover.jpg",
        width: 157,
        height: 200,
        alt: 'A "Hovering" Hollow Square article',
      }}
      pdfHref="/pdf/unista/a-hollow-square.pdf"
      pdfAriaLabel='Download A "Hovering" Hollow Square article (PDF)'
      documentNoun="article"
    />
  );
}
