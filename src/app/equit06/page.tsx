import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { EquitNavChrome } from "@/components/EquitNavChrome";

export const metadata: Metadata = {
  title:
    "Brochure: Equitable Salutes Pennsylvania — Equitable Life — nywf64.com",
  description:
    "Equitable Salutes Pennsylvania brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Equitable Life brochure — Equitable Salutes Pennsylvania.
 * Body from legacy equit06.html (split tiles stitched; no PDF).
 * Layout: AdvertisingPage collage API with a custom navy title.
 */
export default function Equit06Page() {
  return (
    <AdvertisingPage
      heroLabel="Equitable Life Assurance Society"
      titleId="equit06-title"
      title="Brochure: Equitable Salutes Pennsylvania"
      hero={{
        src: "/images/equitoverview/hero-banner.jpg",
        alt: "Equitable Life Assurance Society of the United States at the 1964/1965 New York World’s Fair",
        width: 2066,
        height: 761,
      }}
      nav={<EquitNavChrome />}
      previousHref="/equit05"
      overviewHref="/equitoverview"
      nextHref="/equit07"
      collages={[
        {
          columns: 1,
          tiles: [
            {
              src: "/images/equit06/page-01.jpg",
              width: 450,
              height: 652,
              alt: "Equitable Salutes Pennsylvania brochure page 1",
            },
          ],
        },
        {
          columns: 1,
          tiles: [
            {
              src: "/images/equit06/page-02.jpg",
              width: 900,
              height: 653,
              alt: "Equitable Salutes Pennsylvania brochure page 2",
            },
          ],
        },
        {
          columns: 1,
          tiles: [
            {
              src: "/images/equit06/page-03.jpg",
              width: 900,
              height: 429,
              alt: "Equitable Salutes Pennsylvania brochure page 3",
            },
          ],
        },
        {
          columns: 1,
          tiles: [
            {
              src: "/images/equit06/page-04.jpg",
              width: 450,
              height: 652,
              alt: "Equitable Salutes Pennsylvania brochure page 4",
            },
          ],
        },
        {
          columns: 1,
          tiles: [
            {
              src: "/images/equit06/page-05.jpg",
              width: 450,
              height: 652,
              alt: "Equitable Salutes Pennsylvania brochure page 5",
            },
          ],
          sources: [
            <>
              SOURCE: Brochure: <em> Equitable Salutes Pennsylvania</em>
            </>,
          ],
        },
      ]}
    />
  );
}
