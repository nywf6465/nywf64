import type { Metadata } from "next";
import { AstfountNavChrome } from "@/components/AstfountNavChrome";
import { BrochurePage } from "@/components/BrochurePage";

export const metadata: Metadata = {
  title:
    "Article: Lighting at the Fair - Astral Fountain — Astral Fountain — nywf64.com",
  description:
    "Download the Lighting at the Fair article on the Astral Fountain — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Astral Fountain article page — Lighting at the Fair PDF.
 * Body from legacy astfount05.html with:
 * - second paragraph (Adobe Reader requirement) removed
 * - Adobe Reader logo / download icon removed
 *
 * Layout: BrochurePage (“brochure” standard).
 */
export default function Astfount05Page() {
  return (
    <BrochurePage
      heroLabel="Astral Fountain"
      titleId="astfount05-title"
      title="Article: Lighting at the Fair - Astral Fountain"
      hero={{
        src: "/images/astfountoverview/hero-banner.jpg",
        alt: "Astral Fountain at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<AstfountNavChrome />}
      previousHref="/astfount04"
      overviewHref="/astfountoverview"
      nextHref="/astfountoverview"
      cover={{
        src: "/images/astfount05/lighting-article-cover.jpg",
        width: 200,
        height: 160,
        alt: "Lighting at the Fair — Astral Fountain article",
      }}
      pdfHref="/pdf/astfount/lighting-at-the-fair.pdf"
      pdfAriaLabel="Download Lighting at the Fair - Astral Fountain article (PDF)"
      documentNoun="article"
      source={
        <>
          SOURCE: Magazine{" "}
          <em>Electrical Construction and Maintenance</em>, July 1964 -
          presented courtesy Wayne Bretl Collection
        </>
      }
    />
  );
}
