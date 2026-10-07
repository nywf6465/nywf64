import type { Metadata } from "next";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { StitchedScanGalleryPage } from "@/components/StitchedScanGalleryPage";

export const metadata: Metadata = {
  title: "Brochure: The Dome Theatre Show — Eastman Kodak — nywf64.com",
  description:
    "Eastman Kodak Dome Theatre Show brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastman Kodak Dome Theatre Show brochure — stitched scans.
 * Body from legacy easkod12.html.
 */
export default function Easkod12Page() {
  return (
    <StitchedScanGalleryPage
      heroLabel="Eastman Kodak Pavilion"
      titleId="easkod12-title"
      title="Brochure: The Dome Theatre Show"
      hero={{
        src: "/images/easkodoverview/hero-banner.jpg",
        alt: "Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<EaskodNavChrome />}
      previousHref="/easkod11"
      overviewHref="/easkodoverview"
      nextHref="/easkod13"
      scans={[
        {
          src: "/images/easkod12/kod69.jpg",
          width: 350,
          height: 808,
          alt: "The Dome Theatre Show brochure",
        },
        {
          src: "/images/easkod12/kod03.jpg",
          width: 350,
          height: 800,
          alt: "The Dome Theatre Show brochure",
        },
        {
          src: "/images/easkod12/kod02.jpg",
          width: 700,
          height: 412,
          alt: "The Dome Theatre Show brochure",
        },
        {
          src: "/images/easkod12/kod13.jpg",
          width: 701,
          height: 816,
          alt: "The Dome Theatre Show brochure",
        },
        {
          src: "/images/easkod12/kod14.jpg",
          width: 701,
          height: 816,
          alt: "The Dome Theatre Show brochure",
        },
        {
          src: "/images/easkod12/kod23.jpg",
          width: 350,
          height: 829,
          alt: "The Dome Theatre Show brochure",
        },
        {
          src: "/images/easkod12/kod24.jpg",
          width: 350,
          height: 829,
          alt: "The Dome Theatre Show brochure",
          source: (
            <>
              SOURCE: Brochure: <em>The Dome Theatre Show</em>
            </>
          ),
        },
      ]}
    />
  );
}
