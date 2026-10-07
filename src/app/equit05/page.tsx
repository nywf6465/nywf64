import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { EquitNavChrome } from "@/components/EquitNavChrome";

export const metadata: Metadata = {
  title:
    "Brochure: The Equitable at the New York World's Fair — Equitable Life — nywf64.com",
  description:
    "The Equitable at the New York World's Fair brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Equitable Life brochure — The Equitable at the New York World's Fair.
 * Body from legacy equit05.html (split tiles stitched; no PDF).
 * Layout: AdvertisingPage collage API with a custom navy title.
 */
export default function Equit05Page() {
  return (
    <AdvertisingPage
      heroLabel="Equitable Life Assurance Society"
      titleId="equit05-title"
      title="Brochure: The Equitable at the New York World's Fair"
      hero={{
        src: "/images/equitoverview/hero-banner.jpg",
        alt: "Equitable Life Assurance Society of the United States at the 1964/1965 New York World’s Fair",
        width: 2066,
        height: 761,
      }}
      nav={<EquitNavChrome />}
      previousHref="/equit04"
      overviewHref="/equitoverview"
      nextHref="/equit06"
      collages={[
        {
          columns: 1,
          tiles: [
            {
              src: "/images/equit05/page-01.jpg",
              width: 900,
              height: 960,
              alt: "The Equitable at the New York World's Fair brochure page 1",
            },
          ],
        },
        {
          columns: 1,
          tiles: [
            {
              src: "/images/equit05/page-02.jpg",
              width: 900,
              height: 960,
              alt: "The Equitable at the New York World's Fair brochure page 2",
            },
          ],
        },
        {
          columns: 1,
          tiles: [
            {
              src: "/images/equit05/page-03.jpg",
              width: 900,
              height: 483,
              alt: "The Equitable at the New York World's Fair brochure page 3",
            },
          ],
          sources: [
            <>
              Source: Brochure:{" "}
              <em>The Equitable at the New York World&apos;s Fair</em>
            </>,
          ],
        },
      ]}
    />
  );
}
