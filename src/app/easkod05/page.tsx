import type { Metadata } from "next";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { StitchedScanGalleryPage } from "@/components/StitchedScanGalleryPage";

export const metadata: Metadata = {
  title: "Advertising Supplement — Eastman Kodak — nywf64.com",
  description:
    "Eastman Kodak Pavilion newspaper advertising supplement — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastman Kodak advertising supplement — stitched scans of sliced legacy tiles.
 * Body from legacy easkod05.html.
 */
export default function Easkod05Page() {
  return (
    <StitchedScanGalleryPage
      heroLabel="Eastman Kodak Pavilion"
      titleId="easkod05-title"
      title="Advertising Supplement"
      hero={{
        src: "/images/easkodoverview/hero-banner.jpg",
        alt: "Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<EaskodNavChrome />}
      previousHref="/easkod04"
      overviewHref="/easkodoverview"
      nextHref="/easkod06"
      scans={[
        {
          src: "/images/easkod05/kod74.jpg",
          width: 900,
          height: 1101,
          alt: "Eastman Kodak newspaper advertising supplement",
        },
        {
          src: "/images/easkod05/kod76.jpg",
          width: 900,
          height: 436,
          alt: "Eastman Kodak newspaper advertising supplement",
        },
        {
          src: "/images/easkod05/kod77.jpg",
          width: 900,
          height: 271,
          alt: "Eastman Kodak newspaper advertising supplement",
        },
        {
          src: "/images/easkod05/kod75.jpg",
          width: 900,
          height: 355,
          alt: "Eastman Kodak newspaper advertising supplement",
        },
        {
          src: "/images/easkod05/kod78.jpg",
          width: 900,
          height: 984,
          alt: "Eastman Kodak newspaper advertising supplement",
        },
        {
          src: "/images/easkod05/kod79.jpg",
          width: 902,
          height: 1080,
          alt: "Eastman Kodak newspaper advertising supplement",
        },
        {
          src: "/images/easkod05/kodak63.jpg",
          width: 300,
          height: 644,
          alt: "Eastman Kodak newspaper advertising supplement",
        },
        {
          src: "/images/easkod05/kod80.jpg",
          width: 600,
          height: 436,
          alt: "Eastman Kodak newspaper advertising supplement",
        },
        {
          src: "/images/easkod05/kod81.jpg",
          width: 900,
          height: 1100,
          alt: "Eastman Kodak newspaper advertising supplement",
        },
        {
          src: "/images/easkod05/kod82.jpg",
          width: 900,
          height: 1101,
          alt: "Eastman Kodak newspaper advertising supplement",
        },
        {
          src: "/images/easkod05/kod83.jpg",
          width: 902,
          height: 1102,
          alt: "Eastman Kodak newspaper advertising supplement",
        },
        {
          src: "/images/easkod05/kod84.jpg",
          width: 900,
          height: 1101,
          alt: "Eastman Kodak newspaper advertising supplement",
        },
        {
          src: "/images/easkod05/kod85.jpg",
          width: 900,
          height: 532,
          alt: "Eastman Kodak newspaper advertising supplement",
        },
        {
          src: "/images/easkod05/kod86.jpg",
          width: 900,
          height: 1101,
          alt: "Eastman Kodak newspaper advertising supplement",
        },
        {
          src: "/images/easkod05/kod87.jpg",
          width: 900,
          height: 1101,
          alt: "Eastman Kodak newspaper advertising supplement",
          source: (
            <>
              <strong>SOURCE: Newspaper Advertising Supplement</strong>
            </>
          ),
        },
      ]}
    />
  );
}
