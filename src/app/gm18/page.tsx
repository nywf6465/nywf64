import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GmNavChrome } from "@/components/GmNavChrome";

export const metadata: Metadata = {
  title: "Article: Oldsmobile Rocket Circle Magazine March/April 1964 \u2014 General Motors \u2014 nywf64.com",
  description:
    "Article: Oldsmobile Rocket Circle Magazine March/April 1964 \u2014 General Motors Pavilion at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * General Motors — Article: Oldsmobile Rocket Circle Magazine March/April 1964.
 * Body from legacy gm18.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Gm18Page() {
  return (
    <BrochurePage
      heroLabel="General Motors Pavilion"
      titleId="gm18-title"
      title={"Article: Oldsmobile Rocket Circle Magazine March/April 1964"}
      hero={{
        src: "/images/gmoverview/hero-banner.jpg",
        alt: "General Motors Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<GmNavChrome />}
      previousHref="/gm17"
      overviewHref="/gmoverview"
      nextHref="/gm19"
      cover={{
        src: "/images/gm18/gm178.jpg",
        width: 150,
        height: 166,
        alt: "Article: Oldsmobile Rocket Circle Magazine March/April 1964",
      }}
      pdfHref="/pdf/gm/rocket-circle-01.pdf"
      pdfAriaLabel={"Download Article: Oldsmobile Rocket Circle Magazine March/April 1964 (PDF)"}
      documentNoun={"article"}
    />
  );
}
