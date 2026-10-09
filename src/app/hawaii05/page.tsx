import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { HawaiiNavChrome } from "@/components/HawaiiNavChrome";

export const metadata: Metadata = {
  title: "Exhibit Proposal by IVEL — Hawaii — nywf64.com",
  description:
    "Hawaii pavilion exhibit proposal and analysis by IVEL — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hawaii — Exhibit Proposal by IVEL (cover + page collage).
 * Body from legacy hawaii05.html (cover + 3×3 page grid; hand link to
 * hawaii05.01… omitted — continuation pages not in this series).
 * Layout: AdvertisingPage collage API with custom navy title.
 */
export default function Hawaii05Page() {
  return (
    <AdvertisingPage
      heroLabel="Hawaii"
      titleId="hawaii05-title"
      title="Hawaii - Analysis and Report by IVEL"
      hero={{
        src: "/images/hawaiioverview/hero-banner.jpg",
        alt: "Hawaii at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HawaiiNavChrome />}
      previousHref="/hawaii04"
      overviewHref="/hawaiioverview"
      nextHref="/hawaii06"
      collages={[
        {
          columns: 1,
          tiles: [
            {
              src: "/images/hawaii05/cover.jpg",
              width: 600,
              height: 200,
              alt: "Hawaii Analysis and Report by IVEL cover",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/hawaii05/05.51.01.jpg",
              width: 300,
              height: 245,
              alt: "IVEL Hawaii analysis page 1",
            },
            {
              src: "/images/hawaii05/05.51.02.jpg",
              width: 300,
              height: 245,
              alt: "IVEL Hawaii analysis page 2",
            },
            {
              src: "/images/hawaii05/05.51.03.jpg",
              width: 300,
              height: 245,
              alt: "IVEL Hawaii analysis page 3",
            },
            {
              src: "/images/hawaii05/05.51.04.jpg",
              width: 300,
              height: 245,
              alt: "IVEL Hawaii analysis page 4",
            },
            {
              src: "/images/hawaii05/05.51.05.jpg",
              width: 300,
              height: 245,
              alt: "IVEL Hawaii analysis page 5",
            },
            {
              src: "/images/hawaii05/05.51.06.jpg",
              width: 300,
              height: 245,
              alt: "IVEL Hawaii analysis page 6",
            },
            {
              src: "/images/hawaii05/05.51.07.jpg",
              width: 300,
              height: 245,
              alt: "IVEL Hawaii analysis page 7",
            },
            {
              src: "/images/hawaii05/05.51.08.jpg",
              width: 300,
              height: 245,
              alt: "IVEL Hawaii analysis page 8",
            },
            {
              src: "/images/hawaii05/05.51.09.jpg",
              width: 300,
              height: 245,
              alt: "IVEL Hawaii analysis page 9",
            },
          ],
        },
      ]}
    />
  );
}
