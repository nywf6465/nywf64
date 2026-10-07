import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { EquitNavChrome } from "@/components/EquitNavChrome";

export const metadata: Metadata = {
  title: "Brochure: America Sings at the Fair — Equitable Life — nywf64.com",
  description:
    "America Sings at the Fair brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Equitable Life brochure — America Sings at the Fair.
 * Body from legacy equit08.html (vertical stacks stitched; no PDF).
 * Layout: AdvertisingPage collage API with a custom navy title.
 */
export default function Equit08Page() {
  return (
    <AdvertisingPage
      heroLabel="Equitable Life Assurance Society"
      titleId="equit08-title"
      title="Brochure: America Sings at the Fair"
      hero={{
        src: "/images/equitoverview/hero-banner.jpg",
        alt: "Equitable Life Assurance Society of the United States at the 1964/1965 New York World’s Fair",
        width: 2066,
        height: 761,
      }}
      nav={<EquitNavChrome />}
      previousHref="/equit07"
      overviewHref="/equitoverview"
      nextHref="/equit09"
      collages={[
        {
          columns: 2,
          tiles: [
            {
              src: "/images/equit08/page-01.jpg",
              width: 350,
              height: 813,
              alt: "America Sings at the Fair brochure page 1",
            },
            {
              src: "/images/equit08/page-02.jpg",
              width: 350,
              height: 812,
              alt: "America Sings at the Fair brochure page 2",
            },
          ],
        },
        {
          columns: 2,
          tiles: [
            {
              src: "/images/equit08/page-03.jpg",
              width: 350,
              height: 812,
              alt: "America Sings at the Fair brochure page 3",
            },
            {
              src: "/images/equit08/page-04.jpg",
              width: 350,
              height: 812,
              alt: "America Sings at the Fair brochure page 4",
            },
          ],
        },
        {
          columns: 2,
          tiles: [
            {
              src: "/images/equit08/page-05.jpg",
              width: 350,
              height: 812,
              alt: "America Sings at the Fair brochure page 5",
            },
            {
              src: "/images/equit08/page-06.jpg",
              width: 350,
              height: 812,
              alt: "America Sings at the Fair brochure page 6",
            },
          ],
          sources: [
            <>
              Source: Brochure: <em>America Sings at the Fair</em>
            </>,
          ],
        },
      ]}
    />
  );
}
