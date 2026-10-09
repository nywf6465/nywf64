import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";

export const metadata: Metadata = {
  title: "Article: An Elegantly Domed Carousel \u2014 General Electric \u2014 nywf64.com",
  description:
    "Article: An Elegantly Domed Carousel — General Electric Progressland at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Electric — Article: An Elegantly Domed Carousel.
 * Body from legacy genele19.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Genele19Page() {
  return (
    <BrochurePage
      heroLabel="General Electric Pavilion"
      titleId="genele19-title"
      title={"Article: An Elegantly Domed Carousel"}
      hero={{
        src: "/images/geneleoverview/hero-banner.jpg",
        alt: "General Electric Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GeneleNavChrome />}
      previousHref="/genele18"
      overviewHref="/geneleoverview"
      nextHref="/genele20"
      cover={{
        src: "/images/genele19/bell02.jpg",
        width: 157,
        height: 200,
        alt: "Article: An Elegantly Domed Carousel",
      }}
      pdfHref="/pdf/genele/elegantly-domed-carousel.pdf"
      pdfAriaLabel={"Download article (PDF)"}
      documentNoun="article"
    />
  );
}
