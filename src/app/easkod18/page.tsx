import type { Metadata } from "next";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { StitchedScanGalleryPage } from "@/components/StitchedScanGalleryPage";

export const metadata: Metadata = {
  title:
    "Article: Lighting at the Fair - Kodak Pavilion — Eastman Kodak — nywf64.com",
  description:
    "Electrical Construction and Maintenance article on lighting at the Eastman Kodak Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastman Kodak lighting article — stitched scans.
 * Body from legacy easkod18.html.
 */
export default function Easkod18Page() {
  return (
    <StitchedScanGalleryPage
      heroLabel="Eastman Kodak Pavilion"
      titleId="easkod18-title"
      title="Article: Lighting at the Fair - Kodak Pavilion"
      hero={{
        src: "/images/easkodoverview/hero-banner.jpg",
        alt: "Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<EaskodNavChrome />}
      previousHref="/easkod17"
      overviewHref="/easkodoverview"
      nextHref="/easkod19"
      scans={[
        {
          src: "/images/easkod18/kod95.jpg",
          width: 903,
          height: 1265,
          alt: "Lighting at the Fair — Kodak Pavilion",
          source: (
            <>
              SOURCE: Magazine <em>Electrical Construction and Maintenance</em>,
              July 1964 - presented courtesy Wayne Bretl Collection
            </>
          ),
        },
      ]}
    />
  );
}
