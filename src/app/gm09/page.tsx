import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GmNavChrome } from "@/components/GmNavChrome";

export const metadata: Metadata = {
  title: "Invitation to Preview Futurama \u2014 General Motors \u2014 nywf64.com",
  description:
    "Invitation to Preview Futurama \u2014 General Motors Pavilion at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * General Motors — Invitation to Preview Futurama.
 * Body from legacy gm09.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Gm09Page() {
  return (
    <BrochurePage
      heroLabel="General Motors Pavilion"
      titleId="gm09-title"
      title={"Invitation to Preview Futurama"}
      hero={{
        src: "/images/gmoverview/hero-banner.jpg",
        alt: "General Motors Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<GmNavChrome />}
      previousHref="/gm08"
      overviewHref="/gmoverview"
      nextHref="/gm10"
      cover={{
        src: "/images/gm09/gm180.jpg",
        width: 82,
        height: 150,
        alt: "Invitation to Preview Futurama",
      }}
      pdfHref="/pdf/gm/preview-invitation.pdf"
      pdfAriaLabel={"Download Invitation to Preview Futurama (PDF)"}
      documentNoun={"invitation"}
    />
  );
}
