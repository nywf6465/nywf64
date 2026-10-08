import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { ScopapNavChrome } from "@/components/ScopapNavChrome";

export const metadata: Metadata = {
  title: "Brochure: Explore the Enchanted Forest — Scott Paper — nywf64.com",
  description:
    "Explore the Enchanted Forest brochure pages from the Scott Paper pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Scott Paper brochure page — Explore the Enchanted Forest.
 * Body from legacy scopap08.html (four 3×3 brochure-page collages).
 * Layout: AdvertisingPage collage API with a custom navy title.
 */
export default function Scopap08Page() {
  return (
    <AdvertisingPage
      heroLabel="Scott Paper"
      titleId="scopap08-title"
      title="Brochure: Explore the Enchanted Forest"
      hero={{
        src: "/images/scopapoverview/hero-banner.jpg",
        alt: "Scott Paper at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<ScopapNavChrome />}
      previousHref="/scopap07"
      overviewHref="/scopapoverview"
      nextHref="/scopap09"
      collages={[
        {
          columns: 3,
          tiles: [
            {
              src: "/images/scopap08/scott37.01.jpg",
              width: 300,
              height: 231,
              alt: "Explore the Enchanted Forest brochure panel 1",
            },
            {
              src: "/images/scopap08/scott37.02.jpg",
              width: 300,
              height: 231,
              alt: "Explore the Enchanted Forest brochure panel 2",
            },
            {
              src: "/images/scopap08/scott37.03.jpg",
              width: 300,
              height: 231,
              alt: "Explore the Enchanted Forest brochure panel 3",
            },
            {
              src: "/images/scopap08/scott37.04.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 4",
            },
            {
              src: "/images/scopap08/scott37.05.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 5",
            },
            {
              src: "/images/scopap08/scott37.06.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 6",
            },
            {
              src: "/images/scopap08/scott37.07.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 7",
            },
            {
              src: "/images/scopap08/scott37.08.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 8",
            },
            {
              src: "/images/scopap08/scott37.09.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 9",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/scopap08/scott38.01.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 10",
            },
            {
              src: "/images/scopap08/scott38.02.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 11",
            },
            {
              src: "/images/scopap08/scott38.03.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 12",
            },
            {
              src: "/images/scopap08/scott38.04.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 13",
            },
            {
              src: "/images/scopap08/scott38.05.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 14",
            },
            {
              src: "/images/scopap08/scott38.06.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 15",
            },
            {
              src: "/images/scopap08/scott38.07.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 16",
            },
            {
              src: "/images/scopap08/scott38.08.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 17",
            },
            {
              src: "/images/scopap08/scott38.09.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 18",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/scopap08/scott39.01.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 19",
            },
            {
              src: "/images/scopap08/scott39.02.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 20",
            },
            {
              src: "/images/scopap08/scott39.03.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 21",
            },
            {
              src: "/images/scopap08/scott39.04.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 22",
            },
            {
              src: "/images/scopap08/scott39.05.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 23",
            },
            {
              src: "/images/scopap08/scott39.06.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 24",
            },
            {
              src: "/images/scopap08/scott39.07.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 25",
            },
            {
              src: "/images/scopap08/scott39.08.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 26",
            },
            {
              src: "/images/scopap08/scott39.09.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 27",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/scopap08/scott40.01.jpg",
              width: 301,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 28",
            },
            {
              src: "/images/scopap08/scott40.02.jpg",
              width: 301,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 29",
            },
            {
              src: "/images/scopap08/scott40.03.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 30",
            },
            {
              src: "/images/scopap08/scott40.04.jpg",
              width: 301,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 31",
            },
            {
              src: "/images/scopap08/scott40.05.jpg",
              width: 301,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 32",
            },
            {
              src: "/images/scopap08/scott40.06.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 33",
            },
            {
              src: "/images/scopap08/scott40.07.jpg",
              width: 301,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 34",
            },
            {
              src: "/images/scopap08/scott40.08.jpg",
              width: 301,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 35",
            },
            {
              src: "/images/scopap08/scott40.09.jpg",
              width: 300,
              height: 230,
              alt: "Explore the Enchanted Forest brochure panel 36",
            },
          ],
          sources: [
            <>
              Source:{" "}
              <em>Brochure: Explore the Enchanted Forest</em>
            </>,
          ],
        },
      ]}
    />
  );
}
