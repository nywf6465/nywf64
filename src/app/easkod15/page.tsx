import type { Metadata } from "next";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { StitchedScanGalleryPage } from "@/components/StitchedScanGalleryPage";

export const metadata: Metadata = {
  title:
    "Article: Multi-Image Look at the Idea of Seeing — Eastman Kodak — nywf64.com",
  description:
    "Business Screen magazine article Multi-Image Look at the Idea of Seeing — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastman Kodak multi-image article — stitched scans.
 * Body from legacy easkod15.html.
 */
export default function Easkod15Page() {
  return (
    <StitchedScanGalleryPage
      heroLabel="Eastman Kodak Pavilion"
      titleId="easkod15-title"
      title="Article: Multi-Image Look at the Idea of Seeing"
      hero={{
        src: "/images/easkodoverview/hero-banner.jpg",
        alt: "Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<EaskodNavChrome />}
      previousHref="/easkod14"
      overviewHref="/easkodoverview"
      nextHref="/easkod16"
      scans={[
        {
          src: "/images/easkod15/kod73.jpg",
          width: 601,
          height: 1504,
          alt: "Multi-Image Look at the Idea of Seeing",
          source:
            "SOURCE: Business Screen Magazine, Vol. 25, No. 2, March, 1964",
        },
      ]}
    />
  );
}
