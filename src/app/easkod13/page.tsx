import type { Metadata } from "next";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { StitchedScanGalleryPage } from "@/components/StitchedScanGalleryPage";

export const metadata: Metadata = {
  title: "Brochure: Invitation to Share Owners — Eastman Kodak — nywf64.com",
  description:
    "Eastman Kodak invitation to share owners brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastman Kodak share owners brochure — stitched scans.
 * Body from legacy easkod13.html. Navy title uses legacy “Share Owners”.
 */
export default function Easkod13Page() {
  return (
    <StitchedScanGalleryPage
      heroLabel="Eastman Kodak Pavilion"
      titleId="easkod13-title"
      title="Brochure: Invitation to Share Owners"
      hero={{
        src: "/images/easkodoverview/hero-banner.jpg",
        alt: "Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<EaskodNavChrome />}
      previousHref="/easkod12"
      overviewHref="/easkodoverview"
      nextHref="/easkod14"
      scans={[
        {
          src: "/images/easkod13/kod25.jpg",
          width: 901,
          height: 370,
          alt: "Invitation to Share Owners brochure",
        },
        {
          src: "/images/easkod13/kod35.jpg",
          width: 900,
          height: 570,
          alt: "Invitation to Share Owners brochure",
        },
        {
          src: "/images/easkod13/kod33.jpg",
          width: 900,
          height: 369,
          alt: "Invitation to Share Owners brochure",
        },
        {
          src: "/images/easkod13/kod34.jpg",
          width: 900,
          height: 369,
          alt: "Invitation to Share Owners brochure",
        },
        {
          src: "/images/easkod13/kod40.jpg",
          width: 900,
          height: 369,
          alt: "Invitation to Share Owners brochure",
          source: (
            <>
              SOURCE: Brochure: <em>Invitation to Shareholders</em>
            </>
          ),
        },
      ]}
    />
  );
}
