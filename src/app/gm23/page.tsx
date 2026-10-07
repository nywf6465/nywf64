import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GmNavChrome } from "@/components/GmNavChrome";

export const metadata: Metadata = {
  title: "Article: Design Summary of the GM Futurama II Ride \u2014 General Motors \u2014 nywf64.com",
  description:
    "Article: Design Summary of the GM Futurama II Ride \u2014 General Motors Pavilion at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * General Motors — Article: Design Summary of the GM Futurama II Ride.
 * Body from legacy gm23.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Gm23Page() {
  return (
    <BrochurePage
      heroLabel="General Motors Pavilion"
      titleId="gm23-title"
      title={"Article: Design Summary of the GM Futurama II Ride"}
      hero={{
        src: "/images/gmoverview/hero-banner.jpg",
        alt: "General Motors Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<GmNavChrome />}
      previousHref="/gm22"
      overviewHref="/gmoverview"
      nextHref="/gmoverview"
      cover={{
        src: "/images/gm23/gm177.jpg",
        width: 200,
        height: 133,
        alt: "Article: Design Summary of the GM Futurama II Ride",
      }}
      pdfHref="/pdf/gm/engineering-design-journal.pdf"
      pdfAriaLabel={"Download Article: Design Summary of the GM Futurama II Ride (PDF)"}
      documentNoun={"article"}
    />
  );
}
