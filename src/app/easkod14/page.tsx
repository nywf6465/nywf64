import type { Metadata } from "next";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { StitchedScanGalleryPage } from "@/components/StitchedScanGalleryPage";

export const metadata: Metadata = {
  title: "Brochure: Picturetaking at the Fair — Eastman Kodak — nywf64.com",
  description:
    "Eastman Kodak Picturetaking at the Fair brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastman Kodak Picturetaking at the Fair brochure — stitched scans.
 * Body from legacy easkod14.html.
 */
export default function Easkod14Page() {
  return (
    <StitchedScanGalleryPage
      heroLabel="Eastman Kodak Pavilion"
      titleId="easkod14-title"
      title="Brochure: Picturetaking at the Fair"
      hero={{
        src: "/images/easkodoverview/hero-banner.jpg",
        alt: "Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<EaskodNavChrome />}
      previousHref="/easkod13"
      overviewHref="/easkodoverview"
      nextHref="/easkod15"
      scans={[
        {
          src: "/images/easkod14/kod41.jpg",
          width: 400,
          height: 693,
          alt: "Picturetaking at the Fair brochure",
        },
        {
          src: "/images/easkod14/kod62.jpg",
          width: 800,
          height: 693,
          alt: "Picturetaking at the Fair brochure",
        },
        {
          src: "/images/easkod14/kod70.jpg",
          width: 400,
          height: 760,
          alt: "Picturetaking at the Fair brochure",
        },
        {
          src: "/images/easkod14/kod71.jpg",
          width: 400,
          height: 759,
          alt: "Picturetaking at the Fair brochure",
        },
        {
          src: "/images/easkod14/kod72.jpg",
          width: 400,
          height: 699,
          alt: "Picturetaking at the Fair brochure",
          source: (
            <>
              SOURCE: Brochure: <em>Picturetaking at the Fair</em>
            </>
          ),
        },
      ]}
    />
  );
}
