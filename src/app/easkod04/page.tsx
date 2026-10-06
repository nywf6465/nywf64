import type { Metadata } from "next";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { StitchedScanGalleryPage } from "@/components/StitchedScanGalleryPage";

export const metadata: Metadata = {
  title: "Advertising — Eastman Kodak — nywf64.com",
  description:
    "Eastman Kodak Pavilion advertisements from the 1964 and 1965 Official Guides and national advertisements — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastman Kodak advertising page — stitched scans of sliced legacy tiles.
 * Body from legacy easkod04.html.
 */
export default function Easkod04Page() {
  return (
    <StitchedScanGalleryPage
      heroLabel="Eastman Kodak Pavilion"
      titleId="easkod04-title"
      title="Advertising"
      hero={{
        src: "/images/easkodoverview/hero-banner.jpg",
        alt: "Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<EaskodNavChrome />}
      previousHref="/easkod03"
      overviewHref="/easkodoverview"
      nextHref="/easkod05"
      scans={[
        {
          src: "/images/easkod04/kod89.jpg",
          width: 900,
          height: 735,
          alt: "Eastman Kodak advertisement, 1964 Official Guide",
          source: (
            <>
              Source: Advertisement{" "}
              <em>1964 Official Guide, 1964-1965 New York World&apos;s Fair</em>
            </>
          ),
        },
        {
          src: "/images/easkod04/kod91.jpg",
          width: 900,
          height: 492,
          alt: "Eastman Kodak national advertisement",
          source: "Source: National Advertisement",
        },
        {
          src: "/images/easkod04/kod92.jpg",
          width: 900,
          height: 492,
          alt: "Eastman Kodak national advertisement",
          source: "Source: National Advertisement",
        },
        {
          src: "/images/easkod04/kod93.jpg",
          width: 900,
          height: 696,
          alt: "Eastman Kodak national advertisement",
          source: "Source: National Advertisement",
        },
        {
          src: "/images/easkod04/kod94.jpg",
          width: 900,
          height: 504,
          alt: "Eastman Kodak national advertisement",
          source: "Source: National Advertisement",
        },
        {
          src: "/images/easkod04/kod90.jpg",
          width: 900,
          height: 735,
          alt: "Eastman Kodak advertisement, 1965 Official Guide",
          source: (
            <>
              Source: Advertisement{" "}
              <em>1965 Official Guide, 1964-1965 New York World&apos;s Fair</em>
            </>
          ),
        },
      ]}
    />
  );
}
