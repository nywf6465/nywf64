import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { FesgasNavChrome } from "@/components/FesgasNavChrome";

export const metadata: Metadata = {
  title: "Brochure: Step into Tomorrow with NORGE — Festival of Gas — nywf64.com",
  description:
    "Step into Tomorrow with NORGE brochure pages from the Festival of Gas pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Festival of Gas — Step into Tomorrow with NORGE brochure collages.
 * Body from legacy fesgas14.html (fg39–41, fg43–44, fg45–47 in legacy order; no PDF).
 * Layout: AdvertisingPage collage API with a custom navy title.
 * Last Festival of Gas topic — NEXT returns to overview.
 */
export default function Fesgas14Page() {
  return (
    <AdvertisingPage
      heroLabel="Festival of Gas"
      titleId="fesgas14-title"
      title="Brochure: Step into Tomorrow with NORGE"
      hero={{
        src: "/images/fesgasoverview/hero-banner.jpg",
        alt: "Festival of Gas at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<FesgasNavChrome />}
      previousHref="/fesgas13"
      overviewHref="/fesgasoverview"
      nextHref="/fesgasoverview"
      collages={[
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas14/fg39.01.jpg",
              width: 301,
              height: 292,
              alt: "Step into Tomorrow with NORGE brochure panel 1",
            },
            {
              src: "/images/fesgas14/fg39.02.jpg",
              width: 301,
              height: 292,
              alt: "Step into Tomorrow with NORGE brochure panel 2",
            },
            {
              src: "/images/fesgas14/fg39.03.jpg",
              width: 300,
              height: 292,
              alt: "Step into Tomorrow with NORGE brochure panel 3",
            },
            {
              src: "/images/fesgas14/fg39.04.jpg",
              width: 301,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 4",
            },
            {
              src: "/images/fesgas14/fg39.05.jpg",
              width: 301,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 5",
            },
            {
              src: "/images/fesgas14/fg39.06.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 6",
            },
            {
              src: "/images/fesgas14/fg39.07.jpg",
              width: 301,
              height: 292,
              alt: "Step into Tomorrow with NORGE brochure panel 7",
            },
            {
              src: "/images/fesgas14/fg39.08.jpg",
              width: 301,
              height: 292,
              alt: "Step into Tomorrow with NORGE brochure panel 8",
            },
            {
              src: "/images/fesgas14/fg39.09.jpg",
              width: 300,
              height: 292,
              alt: "Step into Tomorrow with NORGE brochure panel 9",
            },
            {
              src: "/images/fesgas14/fg39.10.jpg",
              width: 301,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 10",
            },
            {
              src: "/images/fesgas14/fg39.11.jpg",
              width: 301,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 11",
            },
            {
              src: "/images/fesgas14/fg39.12.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 12",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas14/fg40.01.jpg",
              width: 301,
              height: 292,
              alt: "Step into Tomorrow with NORGE brochure panel 13",
            },
            {
              src: "/images/fesgas14/fg40.02.jpg",
              width: 301,
              height: 292,
              alt: "Step into Tomorrow with NORGE brochure panel 14",
            },
            {
              src: "/images/fesgas14/fg40.03.jpg",
              width: 300,
              height: 292,
              alt: "Step into Tomorrow with NORGE brochure panel 15",
            },
            {
              src: "/images/fesgas14/fg40.04.jpg",
              width: 301,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 16",
            },
            {
              src: "/images/fesgas14/fg40.05.jpg",
              width: 301,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 17",
            },
            {
              src: "/images/fesgas14/fg40.06.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 18",
            },
            {
              src: "/images/fesgas14/fg40.07.jpg",
              width: 301,
              height: 292,
              alt: "Step into Tomorrow with NORGE brochure panel 19",
            },
            {
              src: "/images/fesgas14/fg40.08.jpg",
              width: 301,
              height: 292,
              alt: "Step into Tomorrow with NORGE brochure panel 20",
            },
            {
              src: "/images/fesgas14/fg40.09.jpg",
              width: 300,
              height: 292,
              alt: "Step into Tomorrow with NORGE brochure panel 21",
            },
            {
              src: "/images/fesgas14/fg40.10.jpg",
              width: 301,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 22",
            },
            {
              src: "/images/fesgas14/fg40.11.jpg",
              width: 301,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 23",
            },
            {
              src: "/images/fesgas14/fg40.12.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 24",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas14/fg41.01.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 25",
            },
            {
              src: "/images/fesgas14/fg41.02.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 26",
            },
            {
              src: "/images/fesgas14/fg41.03.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 27",
            },
            {
              src: "/images/fesgas14/fg41.04.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 28",
            },
            {
              src: "/images/fesgas14/fg41.05.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 29",
            },
            {
              src: "/images/fesgas14/fg41.06.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 30",
            },
            {
              src: "/images/fesgas14/fg41.07.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 31",
            },
            {
              src: "/images/fesgas14/fg41.08.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 32",
            },
            {
              src: "/images/fesgas14/fg41.09.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 33",
            },
            {
              src: "/images/fesgas14/fg41.10.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 34",
            },
            {
              src: "/images/fesgas14/fg41.11.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 35",
            },
            {
              src: "/images/fesgas14/fg41.12.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 36",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas14/fg43.01.jpg",
              width: 300,
              height: 321,
              alt: "Step into Tomorrow with NORGE brochure panel 37",
            },
            {
              src: "/images/fesgas14/fg43.02.jpg",
              width: 300,
              height: 321,
              alt: "Step into Tomorrow with NORGE brochure panel 38",
            },
            {
              src: "/images/fesgas14/fg43.03.jpg",
              width: 300,
              height: 321,
              alt: "Step into Tomorrow with NORGE brochure panel 39",
            },
            {
              src: "/images/fesgas14/fg43.04.jpg",
              width: 300,
              height: 321,
              alt: "Step into Tomorrow with NORGE brochure panel 40",
            },
            {
              src: "/images/fesgas14/fg43.05.jpg",
              width: 300,
              height: 321,
              alt: "Step into Tomorrow with NORGE brochure panel 41",
            },
            {
              src: "/images/fesgas14/fg43.06.jpg",
              width: 300,
              height: 321,
              alt: "Step into Tomorrow with NORGE brochure panel 42",
            },
            {
              src: "/images/fesgas14/fg43.07.jpg",
              width: 300,
              height: 321,
              alt: "Step into Tomorrow with NORGE brochure panel 43",
            },
            {
              src: "/images/fesgas14/fg43.08.jpg",
              width: 300,
              height: 321,
              alt: "Step into Tomorrow with NORGE brochure panel 44",
            },
            {
              src: "/images/fesgas14/fg43.09.jpg",
              width: 300,
              height: 321,
              alt: "Step into Tomorrow with NORGE brochure panel 45",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas14/fg44.01.jpg",
              width: 301,
              height: 321,
              alt: "Step into Tomorrow with NORGE brochure panel 46",
            },
            {
              src: "/images/fesgas14/fg44.02.jpg",
              width: 301,
              height: 321,
              alt: "Step into Tomorrow with NORGE brochure panel 47",
            },
            {
              src: "/images/fesgas14/fg44.03.jpg",
              width: 300,
              height: 321,
              alt: "Step into Tomorrow with NORGE brochure panel 48",
            },
            {
              src: "/images/fesgas14/fg44.04.jpg",
              width: 301,
              height: 321,
              alt: "Step into Tomorrow with NORGE brochure panel 49",
            },
            {
              src: "/images/fesgas14/fg44.05.jpg",
              width: 301,
              height: 321,
              alt: "Step into Tomorrow with NORGE brochure panel 50",
            },
            {
              src: "/images/fesgas14/fg44.06.jpg",
              width: 300,
              height: 321,
              alt: "Step into Tomorrow with NORGE brochure panel 51",
            },
            {
              src: "/images/fesgas14/fg44.07.jpg",
              width: 301,
              height: 321,
              alt: "Step into Tomorrow with NORGE brochure panel 52",
            },
            {
              src: "/images/fesgas14/fg44.08.jpg",
              width: 301,
              height: 321,
              alt: "Step into Tomorrow with NORGE brochure panel 53",
            },
            {
              src: "/images/fesgas14/fg44.09.jpg",
              width: 300,
              height: 321,
              alt: "Step into Tomorrow with NORGE brochure panel 54",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas14/fg45.01.jpg",
              width: 301,
              height: 292,
              alt: "Step into Tomorrow with NORGE brochure panel 55",
            },
            {
              src: "/images/fesgas14/fg45.02.jpg",
              width: 301,
              height: 292,
              alt: "Step into Tomorrow with NORGE brochure panel 56",
            },
            {
              src: "/images/fesgas14/fg45.03.jpg",
              width: 300,
              height: 292,
              alt: "Step into Tomorrow with NORGE brochure panel 57",
            },
            {
              src: "/images/fesgas14/fg45.04.jpg",
              width: 301,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 58",
            },
            {
              src: "/images/fesgas14/fg45.05.jpg",
              width: 301,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 59",
            },
            {
              src: "/images/fesgas14/fg45.06.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 60",
            },
            {
              src: "/images/fesgas14/fg45.07.jpg",
              width: 301,
              height: 292,
              alt: "Step into Tomorrow with NORGE brochure panel 61",
            },
            {
              src: "/images/fesgas14/fg45.08.jpg",
              width: 301,
              height: 292,
              alt: "Step into Tomorrow with NORGE brochure panel 62",
            },
            {
              src: "/images/fesgas14/fg45.09.jpg",
              width: 300,
              height: 292,
              alt: "Step into Tomorrow with NORGE brochure panel 63",
            },
            {
              src: "/images/fesgas14/fg45.10.jpg",
              width: 301,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 64",
            },
            {
              src: "/images/fesgas14/fg45.11.jpg",
              width: 301,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 65",
            },
            {
              src: "/images/fesgas14/fg45.12.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 66",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas14/fg46.01.jpg",
              width: 301,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 67",
            },
            {
              src: "/images/fesgas14/fg46.02.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 68",
            },
            {
              src: "/images/fesgas14/fg46.03.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 69",
            },
            {
              src: "/images/fesgas14/fg46.04.jpg",
              width: 301,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 70",
            },
            {
              src: "/images/fesgas14/fg46.05.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 71",
            },
            {
              src: "/images/fesgas14/fg46.06.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 72",
            },
            {
              src: "/images/fesgas14/fg46.07.jpg",
              width: 301,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 73",
            },
            {
              src: "/images/fesgas14/fg46.08.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 74",
            },
            {
              src: "/images/fesgas14/fg46.09.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 75",
            },
            {
              src: "/images/fesgas14/fg46.10.jpg",
              width: 301,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 76",
            },
            {
              src: "/images/fesgas14/fg46.11.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 77",
            },
            {
              src: "/images/fesgas14/fg46.12.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 78",
            },
          ],
        },
        {
          columns: 3,
          tiles: [
            {
              src: "/images/fesgas14/fg47.01.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 79",
            },
            {
              src: "/images/fesgas14/fg47.02.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 80",
            },
            {
              src: "/images/fesgas14/fg47.03.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 81",
            },
            {
              src: "/images/fesgas14/fg47.04.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 82",
            },
            {
              src: "/images/fesgas14/fg47.05.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 83",
            },
            {
              src: "/images/fesgas14/fg47.06.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 84",
            },
            {
              src: "/images/fesgas14/fg47.07.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 85",
            },
            {
              src: "/images/fesgas14/fg47.08.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 86",
            },
            {
              src: "/images/fesgas14/fg47.09.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 87",
            },
            {
              src: "/images/fesgas14/fg47.10.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 88",
            },
            {
              src: "/images/fesgas14/fg47.11.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 89",
            },
            {
              src: "/images/fesgas14/fg47.12.jpg",
              width: 300,
              height: 291,
              alt: "Step into Tomorrow with NORGE brochure panel 90",
            },
          ],
          sources: [
            <>
              SOURCE: Brochure: <em>Step into Tomorrow with NORGE</em>
            </>,
          ],
        },
      ]}
    />
  );
}
