import type { Metadata } from "next";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { StitchedScanGalleryPage } from "@/components/StitchedScanGalleryPage";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — Eastman Kodak — nywf64.com",
  description:
    "Eastman Kodak Pavilion commemorative groundbreaking pamphlet — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastman Kodak groundbreaking pamphlet — stitched scans of sliced legacy tiles.
 * Body from legacy easkod07.html.
 */
export default function Easkod07Page() {
  return (
    <StitchedScanGalleryPage
      heroLabel="Eastman Kodak Pavilion"
      titleId="easkod07-title"
      title="Pamphlet: Groundbreaking"
      hero={{
        src: "/images/easkodoverview/hero-banner.jpg",
        alt: "Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<EaskodNavChrome />}
      previousHref="/easkod06"
      overviewHref="/easkodoverview"
      nextHref="/easkod08"
      scans={[
        {
          src: "/images/easkod07/kod05.jpg",
          width: 900,
          height: 696,
          alt: "Eastman Kodak groundbreaking pamphlet",
        },
        {
          src: "/images/easkod07/kod06.jpg",
          width: 900,
          height: 696,
          alt: "Eastman Kodak groundbreaking pamphlet",
        },
        {
          src: "/images/easkod07/kod07.jpg",
          width: 901,
          height: 697,
          alt: "Eastman Kodak groundbreaking pamphlet",
        },
        {
          src: "/images/easkod07/kod08.jpg",
          width: 900,
          height: 697,
          alt: "Eastman Kodak groundbreaking pamphlet",
        },
        {
          src: "/images/easkod07/kod09.jpg",
          width: 901,
          height: 697,
          alt: "Eastman Kodak groundbreaking pamphlet",
        },
        {
          src: "/images/easkod07/kod10.jpg",
          width: 900,
          height: 696,
          alt: "Eastman Kodak groundbreaking pamphlet",
        },
        {
          src: "/images/easkod07/kod11.jpg",
          width: 900,
          height: 696,
          alt: "Eastman Kodak groundbreaking pamphlet",
        },
        {
          src: "/images/easkod07/kod12.jpg",
          width: 900,
          height: 696,
          alt: "Eastman Kodak groundbreaking pamphlet",
          source:
            "SOURCE: New York World's Fair 1964-1965 Corporation Commemorative Groundbreaking Pamphlet",
        },
      ]}
    />
  );
}
