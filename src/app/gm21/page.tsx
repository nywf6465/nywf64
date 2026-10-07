import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GmNavChrome } from "@/components/GmNavChrome";

export const metadata: Metadata = {
  title: "Article: Pontiac Safari Magazine March/April 1964 \u2014 General Motors \u2014 nywf64.com",
  description:
    "Article: Pontiac Safari Magazine March/April 1964 \u2014 General Motors Pavilion at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * General Motors — Article: Pontiac Safari Magazine March/April 1964.
 * Body from legacy gm21.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Gm21Page() {
  return (
    <BrochurePage
      heroLabel="General Motors Pavilion"
      titleId="gm21-title"
      title={"Article: Pontiac Safari Magazine March/April 1964"}
      hero={{
        src: "/images/gmoverview/hero-banner.jpg",
        alt: "General Motors Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<GmNavChrome />}
      previousHref="/gm20"
      overviewHref="/gmoverview"
      nextHref="/gm22"
      cover={{
        src: "/images/gm21/gm212.jpg",
        width: 150,
        height: 201,
        alt: "Article: Pontiac Safari Magazine March/April 1964",
      }}
      pdfHref="/pdf/gm/safari-02.pdf"
      pdfAriaLabel={"Download Article: Pontiac Safari Magazine March/April 1964 (PDF)"}
      documentNoun={"article"}
    />
  );
}
