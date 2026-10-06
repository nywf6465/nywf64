import type { Metadata } from "next";
import { BrochurePage } from "@/components/BrochurePage";
import { GmNavChrome } from "@/components/GmNavChrome";

export const metadata: Metadata = {
  title: "Mailer: If You've Only Seen it Once \u2014 General Motors \u2014 nywf64.com",
  description:
    "Mailer: If You've Only Seen it Once \u2014 General Motors Pavilion at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * General Motors — Mailer: If You've Only Seen it Once.
 * Body from legacy gm15.html with Adobe Reader chrome omitted.
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Gm15Page() {
  return (
    <BrochurePage
      heroLabel="General Motors Pavilion"
      titleId="gm15-title"
      title={"Mailer: If You've Only Seen it Once"}
      hero={{
        src: "/images/gmoverview/hero-banner.jpg",
        alt: "General Motors Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<GmNavChrome />}
      previousHref="/gm14"
      overviewHref="/gmoverview"
      nextHref="/gm16"
      cover={{
        src: "/images/gm15/gm173.jpg",
        width: 200,
        height: 87,
        alt: "Mailer: If You've Only Seen it Once",
      }}
      pdfHref="/pdf/gm/if-youve-only-seen-it-once-mailer.pdf"
      pdfAriaLabel={"Download Mailer: If You've Only Seen it Once (PDF)"}
      documentNoun={"mailer"}
    />
  );
}
